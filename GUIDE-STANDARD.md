# The Arcanum — Guide Standard

The single source of truth for how every guide on The Arcanum is built. This
documents the pattern we already use so new guides stay consistent and old ones
can be brought up to spec. (For *registering* a finished guide on the homepage,
see [README.md](README.md) — that's `js/games.js`. This file is about building
the guide itself.)

**Principle:** no bloat. Static HTML/CSS/JS, no build step, works on GitHub
Pages. Fast, mobile-friendly, accessible, reduced-motion aware. We write
**original prose and structure** from verified game *facts* — we never paste
another site's copy.

---

## 1. File layout (every guide)

```
guides/<slug>/
  index.html          Guide hub: hero + "core systems at a glance" + cards to each page
  css/style.css       Per-guide stylesheet (the shared component set, palette-swapped)
  js/site.js          Ambient canvas + reveal-on-scroll + mobile nav + back-to-top
  pages/
    <topic>.html      One page per major topic (4–6 is typical)
```

Multi-page is **mandatory** — never put a whole guide on one page. Each guide is
a hub `index.html` plus 4–6 focused topic pages in `pages/`.

The fastest way to start a new guide is to copy an existing one of the same
"family" (e.g. a Pixel Remaster from `guides/final-fantasy-i/`) and re-theme it.

---

## 2. Theming

Every game gets its **own distinct color theme** so it's visually unique. Themes
are driven by CSS variables at the top of `css/style.css`:

- `--bg / --bg2` — near-black background tones
- two accent colors (a "primary" and a "secondary") used for headings, rules,
  card borders, links
- `--gold/--gold2` — warm highlight for `<strong>` and table headers (most themes)
- `--spoiler` — the spoiler accent (warm amber `#e8a85c` works for all themes)
- `--text / --text2 / --text3` — body, muted, faint
- `--display` (Cinzel, usually) and `--body` (EB Garamond, usually) fonts

Pick fonts that fit the game (Orbitron/Rajdhani for sci-fi, Cinzel/Garamond for
fantasy, etc.). Pick a crest glyph for the hero (e.g. `&#9672;` ◈, `&#10022;` ✦).

---

## 3. Component vocabulary

These class names are shared across all guides (palette-swapped per theme). Reuse
them — don't invent new ones unless a guide genuinely needs it.

- **Chrome:** `.topbar/.brand/.nav/.nav-toggle/.nav a.active/.nav a.home`
- **Hero (hub):** `.hero/.crest/.eyebrow/h1 (gradient sheen)/.sub/.lede`
- **Page header (sub-pages):** `.page-head` (+ `.eyebrow/h1/.lede/.rule`)
- **Hub cards:** `.hub-cards/.hub-card/.k/.go`
- **Sections:** `section/.s-tag/.s-title/.s-rule`
- **Lists:** `ul.list` (custom bullet), `ol.steps` (numbered chips)
- **Tables:** `.table-wrap > table` (always wrap for horizontal scroll on mobile)
- **Boxes:** `.callout` (tip, accent-gold), `.newbox` (version/"different from"
  note, accent-secondary), `.spoiler` (see §4)
- **Nav between pages:** `.pager` (prev / next)
- **Misc:** `.reveal` (fade-in on scroll), `.totop`, `footer`, `.mono`

Standard nav order on every page (hub + sub-pages):
`◈ Arcanum` (root) · `✦ All <Series>` (if part of a series hub) · `Home` ·
then one link per topic page. Mark the current page `class="active"`.

Every sub-page ends with a `.pager` (← previous / next →) and the shared footer.

---

## 4. Spoiler convention ⚠

Story beats, boss mechanics, endings, secret bosses, and twist mechanics go
**inside a spoiler** so a reader can't have a game ruined by accident.

Built on the native `<details>` element — **works with JavaScript disabled**,
keyboard-accessible, and no animation to fight reduced-motion. Collapsed by
default; the summary shows a `Reveal` chip that becomes `Hide` when open.

```html
<details class="spoiler">
  <summary>&#9888; Spoiler &mdash; the ending &amp; the time loop</summary>
  <div class="spoiler-body">
    <p>Hidden content here. <strong>Key beats</strong> in spoiler-accent color.</p>
  </div>
</details>
```

The CSS lives in each guide's `css/style.css` (reference implementation:
`guides/final-fantasy-i/css/style.css`). Copy this block into any guide's
stylesheet and add `--spoiler:#e8a85c;` to its `:root`:

```css
.spoiler{border:1px solid rgba(232,168,92,0.30); border-left:3px solid var(--spoiler); border-radius:4px; margin:1.4rem 0; background:rgba(232,168,92,0.05); overflow:hidden;}
.spoiler>summary{cursor:pointer; list-style:none; padding:0.9rem 1.2rem; font-family:var(--display); font-size:0.7rem; letter-spacing:0.14em; text-transform:uppercase; color:var(--spoiler); display:flex; align-items:center; gap:0.5rem;}
.spoiler>summary::-webkit-details-marker{display:none;}
.spoiler>summary::after{content:"Reveal"; margin-left:auto; font-size:0.64rem; letter-spacing:0.1em; color:var(--text3); border:1px solid var(--line); padding:0.18rem 0.55rem; border-radius:3px;}
.spoiler[open]>summary::after{content:"Hide";}
.spoiler[open]>summary{border-bottom:1px solid rgba(232,168,92,0.22);}
.spoiler .spoiler-body{padding:1rem 1.2rem 1.1rem; color:var(--text2); font-size:0.97rem;}
.spoiler .spoiler-body :last-child{margin-bottom:0;}
.spoiler .spoiler-body strong{color:var(--spoiler);}
```

**What goes in a spoiler:** plot/ending summaries, who dies, secret endings,
final-boss identity & mechanics, hidden/superboss reveals, twist systems.
**What does NOT:** ordinary builds, item locations, general boss tips that don't
reveal a twist. Don't over-hide — only the genuinely spoiler-y bits.

For a whole page that is mostly spoilers (e.g. a full story recap), say so in the
page `.lede` and still wrap the heaviest reveals.

---

## 5. Page structure pattern

A guide hub (`index.html`) has: hero → a "core systems at a glance" `ul.list`
→ a "where do you want to go?" `.hub-cards` grid linking each topic page.

A topic page has: `.page-head` → 2–6 `section.reveal` blocks, each with an
`.s-tag` (small numbered label), `.s-title`, `.s-rule`, then content (prose +
`ul.list` + `.table-wrap` tables + `.callout`/`.newbox`/`.spoiler`) → `.pager`.

Aim for parity: every topic page should carry real depth (tables where there's
data, not just prose). Pages with a single thin section are the ones to enrich.

---

## 6. Accuracy rules

- Write to the **exact version/edition** the guide targets, and say which in the
  footer (e.g. "Pixel Remaster — the rebalanced original; verify against
  in-game text"). Version-specific facts (a remaster's changed system, a patch's
  new content) must be **verified**, not assumed from an older release.
- Use the **target version's localization** for names (Curaga, Marilith, etc.).
- When unsure of a specific (an item effect, a list), look it up before stating
  it. Prefer primary/structured sources; cross-check one more if it's load-bearing.
- Facts are not copyrightable; expression is. Use the facts, write our own words.

---

## 7. Verify before commit

Render each new/changed page headless and eyeball it:

```
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new \
  --disable-gpu --hide-scrollbars --window-size=1200,3000 \
  --screenshot=/c/tmp/out.png --virtual-time-budget=2400 "file:///<abs-path>"
```

Also run the local-link sweep (resolves every relative href/src) before a big
commit so navigation never breaks.

---

## 8. Build priority

Don't build everything at once, and never as one mega-document — build **one game
at a time** as full multi-page guides. Suggested order, biased toward games where
players actively hunt for deep knowledge and toward what's already on the site:

**Tier 1 (next up):** Diablo IV · Path of Exile 2 · Diablo III
— big "build/endgame" search demand; season-meta caveats noted per guide.

**Tier 2:** Factorio · XCOM 2 (WotC) · StarCraft II / Brood War · EVE Online
— deep systems, evergreen audiences.

**Tier 3:** Hogwarts Legacy · Space Haven · Techtonica · Age of Darkness ·
Survive the Fall · the roguelikes (Death Must Die, DRG: Survivor, R.I.P.) ·
Rocket League · Hearthstone (live-meta — keep evergreen, link out for tier lists).

**Live & maintained:** Battle Brothers · Satisfactory · Stellaris ·
Clair Obscur: Expedition 33 · Final Fantasy (series hub: I–VI, VII Remake &
Rebirth, Tactics).

For live-service/season games (D3/D4/PoE2/Hearthstone), write the **evergreen**
layer (systems, archetypes, how to read the meta) and link out to live planners
for current tier lists, rather than pinning a snapshot that rots.

---

*Stacked Alchemist property. Fan-made guides, unaffiliated with the games covered.*
