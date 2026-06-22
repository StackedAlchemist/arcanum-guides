# The Arcanum — Build Planner Spec

A spec for a **Battle Brothers Build Planner**: an interactive page where a
visitor builds a brother (background → perks → attribute path → gear), sees the
result computed live, and **saves / shares** it. Designed to ship on the current
**static, no-build-step** stack first (localStorage + share links) and to accept
**Firebase accounts later as an additive layer, not a rewrite.**

> Guiding rule (from [GUIDE-STANDARD.md](GUIDE-STANDARD.md)): no bloat, static
> HTML/CSS/JS, works on GitHub Pages / Vercel. The planner is vanilla JS that
> reads the data files we already built.

---

## 1. Why this shape

A saved build is just a small JSON object. Three ways to persist it, cheapest first:

| Approach | Backend | Cross-device | Cost | Ship time |
|---|---|---|---|---|
| **localStorage** | none | no | £0 | ~1 day |
| **Share-link (URL-encoded)** | none | via the link | £0 | +0.5 day |
| **Firebase Auth + Firestore** | yes | yes | free tier, then usage | later |

**All three serialize the same build object.** So we build localStorage +
share-link now; Firebase later just *syncs that same object*. Nothing is thrown
away. Firebase's web SDK is client-side, so the site can **stay static** (even on
GitHub Pages) when we add it — it's a layer, not a migration.

---

## 2. The build object (single source of truth)

Versioned so we can migrate later. IDs are stable slugs, never display names.

```js
{
  v: 1,                          // schema version (bump + migrate on change)
  game: "battle-brothers",
  id: "0f3a…",                   // uuid, generated on first save
  name: "Hammerfall",
  role: "Two-Handed Hammer",     // free text or a preset label
  background: "hedge-knight",    // -> data/backgrounds.js id
  level: 11,
  perks: ["colossus","recover","battle-forged","brawny",
          "hammer-mastery","berserk","killing-frenzy",
          "underdog","rotation","indomitable","quick-hands"], // pick order = level order
  attrPriority: ["mskill","fatigue","hp"],   // the 3 raised each level
  gear: {
    weapon:   "two-handed-hammer",  // -> data/gear.js id
    sidearm:  "rondel-dagger",
    body:     "coat-of-plates",
    helmet:   "full-helm",
    shield:   null
  },
  notes: "",                      // free text
  createdAt: 0, updatedAt: 0      // epoch ms
}
```

**Prerequisite refactors (small, one-time):**
- **`data/perks.js`** — extract the 7-tier tree we already wrote into `perks.html`
  into a data file: `{ id, name, tier, effect, key:bool, active:bool }`. Then
  *both* the Perks page and the planner render/validate from one source.
- **Add `id` slugs** to entries in `gear.js`, `backgrounds.js`, `recruits.js`
  (e.g. `id:"coat-of-plates"`). Reference by id, not display string.

---

## 3. What the planner computes live (the payoff)

This is what makes it more than a notepad — it reuses everything we built:

- **Projected level-11 stat line** from the background's attribute ranges
  (`backgrounds.js`) + the chosen `attrPriority` + assumed talent stars.
- **Perk path in level order**, with the **7-tier gating enforced** (can't take a
  tier-4 perk before enough points are spent below it; 11 perks max).
- **Gear summary**: total armor points, combined Fatigue penalty, and
  **usable Fatigue = base − body − helmet − shield − weapon** (the rule from the
  Armor page).
- **Survival readout**: compute the **Nimble result** (full 60% at ≤15 combined
  body+helmet fatigue, decaying above) or **Battle Forged** value (5% of total
  armor) — tells the user instantly whether their set matches their perk.

So the planner is a teaching tool: change the helmet, watch usable Fatigue and the
Nimble % move.

---

## 4. UI / UX

One page, two columns (stacks on mobile):

**Left — choices**
- Background dropdown (from `backgrounds.js`).
- Perk tree: the same tier grid from the Perks page, but **clickable**; clicking
  toggles a perk, dims tiers not yet unlocked, shows "points spent / 11".
- Attribute priority: pick 3 of the 8 (drag or click), matches `attrPriority`.
- Gear: dropdowns for weapon / sidearm / body / helmet / shield (from `gear.js`),
  grouped and searchable.
- Name + notes fields.

**Right — live summary**
- Projected stat line, perk path (level order), gear block, usable Fatigue,
  Nimble/BF readout (§3).
- Buttons: **Save** · **Share link** · **Reset** · **Load a preset** (seed from the
  narrated builds we already wrote, e.g. "Hammerfall").

**My Builds** (below or a drawer): list of saved builds → load / rename / duplicate
/ delete. Loading a `#b=` share URL pre-fills the planner and offers "Save to my
builds."

Reuse the existing component vocabulary and the polished Builds/Perks styling
(blood + gold gleam) so it feels native.

---

## 5. Persistence (Phase 1 — no backend)

**localStorage**
- Key: `arcanum.bb.builds` → JSON array of build objects.
- Key: `arcanum.bb.planner.draft` → the in-progress (unsaved) build, so a refresh
  doesn't lose work.

**Share link**
- Encode the build into the URL hash: `planner.html#b=<token>`.
- Token = **base64url** of a minified build. To keep it short, pack `perks`/gear as
  **indices into the canonical data arrays** rather than slugs, then optionally run
  it through **LZ-string** (one ~5 KB vendored script, no build step) for ~3–5×
  shorter URLs.
- On load, decode `#b=`, validate against current data, populate the planner. If a
  referenced id no longer exists (data changed), warn and drop that field rather
  than break.

---

## 6. Validation rules to enforce

Cheap correctness that makes it trustworthy:
- **≤ 11 perks** (level cap); show the count.
- **Tier gating**: a tier unlocks only after the required points are spent below
  it (1 pt → tier 2, 2 pts → tier 3, …); the data already encodes tiers.
- Soft warnings (not hard blocks): "Nimble with a −62 fatigue set is wasted —
  drop weight or take Battle Forged"; "no Mastery picked"; "Battle Forged on a
  Coat of Plates wants Brawny + ~130 base Fatigue."

---

## 7. File layout (Phase 1)

```
guides/battle-brothers/
  pages/planner.html          new page (nav + hub card)
  js/planner.js               UI, compute, persistence, share-encode
  js/vendor/lz-string.min.js  optional, for short share links
  data/perks.js               NEW — extracted perk tree (also powers perks.html)
  data/gear.js                + add id slugs
  data/backgrounds.js         + add id slugs
```

No build step, no framework — same as everything else.

---

## 8. Phase 2 — Firebase (additive, when you actually want accounts)

Trigger to add it: you want **cross-device sync** or a **public "community builds"
gallery**. Until then, skip it.

- **Auth:** Firebase Auth, **Google sign-in** (one click, no password handling).
- **Storage:** Firestore collection `builds`, one doc per build:
  `{ ...buildObject, ownerUid, public:false }`.
- **Security rules (sketch):**
  ```
  match /builds/{id} {
    allow read:  if resource.data.public == true || request.auth.uid == resource.data.ownerUid;
    allow write: if request.auth.uid == request.resource.data.ownerUid;
  }
  ```
- **Sync:** on first login, offer to **import localStorage builds** to the account.
  Keep localStorage as the offline cache; Firestore is the source of truth when
  signed in. The build object is **identical** — only `ownerUid`/`public` are added.
- **Public gallery (optional):** query `where public == true`, with a copy-to-my-
  builds button. Needs light moderation (report button) before you publicise it.
- **Hosting unchanged:** the Firebase web config is public and safe; access is
  controlled by the rules above. The frontend stays static.

**Costs/obligations to accept at this step (not before):** Firestore read/write
quotas (Spark free tier is generous for this scale), getting security rules right,
basic spam/abuse handling on a public gallery, and a short privacy note once you
store accounts + emails.

---

## 9. Non-goals / risks

- **Not** a turn-by-turn damage simulator — it plans builds, it doesn't fight.
- **Not** multiplayer or real-time.
- Schema changes: always bump `v` and write a migration; share links from old `v`
  must still decode (or degrade gracefully).
- Data drift: planner validates against current data and drops unknown ids with a
  warning rather than crashing.

---

## 10. Milestones

1. **M1 — Data prep:** extract `data/perks.js`; add `id` slugs to `gear.js`,
   `backgrounds.js`. Re-point `perks.html` to render from `perks.js` (no visual change).
2. **M2 — Planner (read-only compute):** pick background + gear + perks → live stat
   line, usable Fatigue, Nimble/BF readout. The teaching tool, no saving yet.
3. **M3 — Save/load:** localStorage + My Builds list + presets seeded from the
   narrated builds.
4. **M4 — Share links:** encode/decode `#b=`, with LZ-string compression.
5. **M5 — Firebase (later):** Google auth + Firestore sync + localStorage import;
   optional public gallery.

M1–M4 are the whole "save your builds" feature on the current static stack. M5 is
the login upgrade, added only when the feature has proven worth operating.

---

*Stacked Alchemist property. Fan-made; unaffiliated with the games covered.*
