# Battle Brothers - Hiring & Recruitment Data

Source: Battle Brothers Fextralife/Fandom wiki (Game Guide, Character Backgrounds) plus community consensus (Steam discussions, tier guides), verified against game version 1.5.2.2.
Purpose: structured data file for building a data-driven Hiring / Recruitment page on The Arcanum (Battle Brothers Codex).

---

## How to use this file

Backgrounds are grouped by role and tagged with a tier, a cost band, the game phase you usually hire them in, and a tryout recommendation. The mechanics section at the top is the "why" behind every recommendation; keep it as an intro block above the sortable table.

Suggested JS data shape when you build the page:

```js
{
  name,            // "Hedge Knight"
  tier,            // "S" | "A" | "B" | "C" | "Filler"
  role,            // "Frontline" | "Ranged" | "Tank" | "Hybrid" | "Filler" | "Specialist"
  costBand,        // "Cheap" | "Medium" | "Expensive" | "Premium"
  phase,           // "Early" | "Mid" | "Late" | "Any"
  tryout,          // "Skip" | "Optional" | "Always"
  starBias,        // which stats they tend to get talent stars in
  cannotStar,      // stat(s) they can never get stars in
  notes
}
```

---

## CORE HIRING MECHANICS (read this first)

These four facts change how you read every recommendation below.

1. **Hiring price does NOT reflect stats, talents, or traits.** Price depends only on background, level, and the gear the recruit arrives with. A 600-crown poacher is not better than a 300-crown poacher unless the pricier one came carrying a weapon. What you pay for is the background tier (which sets the stat range) and their equipment at market value.

2. **Expensive backgrounds = higher floor and ceiling, not guaranteed quality.** Premium backgrounds have better min/max stat ranges and are mostly free from bad traits, but you can still roll a weak Sellsword or a great Farmhand. Stat rolls and talents are still random within the background's range.

3. **Wages are fixed per background + level.** Every level-2 Farmhand costs the same daily wage. If two recruits share background and level but one costs more per day, the expensive one has the **Greedy** trait. Avoid him.

4. **You buy their gear whether you want it or not.** Recruit cost includes all their equipment at market value. Buying a well-equipped recruit is a gamble (you may sell the gear back at a loss). Waiting for a poorly-equipped candidate of your preferred background is a real money saver. Naked backgrounds (e.g. Wildmen) show their true base cost upfront.

### Wage scaling note
- Daily wage scales with level. Cost of the first 11 levels is the base; additional levels use base x 1.03^(level - 11).
- Example: a level-11 Hedge Knight costs ~91/day upkeep; by level 21 that's ~122/day.
- Lone Wolf origin (player character) needs no wages.
- Each brother also eats ~2 provisions/day, so roster size is a food cost too. Keep your company size disciplined early.

### Nicknames as free trait hints
Nicknames are tied to traits, so they're a free pre-tryout filter:
- "Karl the Ox" likely has Tough or Strong.
- "Karl the Brave" likely has a Resolve-boosting trait.
- "Karl the Slow" likely has -initiative (e.g. the Slow trait).
- "Karl the Craven" likely has a morale penalty.
A good nickname doesn't guarantee a good bro, but it tips the odds.

### Some traits are visible without paying
Obvious traits (Fat, Huge, Tiny, and similar) can be spotted before any tryout. Everything else, and ALL talents/stars, stays hidden unless revealed.

---

## TRYOUT: WHEN IT'S WORTH IT

- Tryout cost is roughly 10% of hire cost (the game uses whichever of two formulas is lowest).
- **Tryout reveals TRAITS ONLY. It does NOT reveal stars/talents.** Hidden stars are an intended mechanic.

Decision logic:

| Situation | Do this |
|-----------|---------|
| Premium background (Hedge Knight, Sellsword, Swordmaster, Raider, Noble) | **Skip or optional.** Premium bros usually can't roll bad traits, so the floor is high. A cheap one is close to an instant buy. Optional cheap tryout just to fish for a great trait. |
| Cheap/average background, and you already have a solid team | **Always tryout.** A lesser background needs good traits AND attributes AND talents to earn a veteran's slot. Catch traps like a Clumsy Militia or low-Resolve Vagabond before paying. |
| Short on cash, can't afford every recruit you want | Use tryout to prioritize which ones are worth the full hire. |

### How to actually evaluate a recruit
- Don't save-scum for perfect stars. You don't need perfect bros to win.
- Better method: estimate the bro's **level-11 stat line** (current base + expected growth on level-ups) and weigh it against the wage. If the projected line justifies the daily cost, hire.
- Two schools of thought, both valid: (a) optimize for level-11 potential for the long game, or (b) value bros who are useful *right now* for the next 50-100 days, since most of the campaign is played at levels 5-7, not 11.

---

## BACKGROUNDS BY ROLE

Star bias note: backgrounds that CANNOT get stars in a stat tend to concentrate stars in their other stats. Example: Brawlers can't star in Ranged Attack, so they roll more stars into Melee Attack/Defense.

### S-Tier / Premium Frontline (late game, instant-buy when cheap)

| Name | Tier | Role | Cost Band | Phase | Tryout | Notes |
|------|------|------|-----------|-------|--------|-------|
| Hedge Knight | S | Frontline | Premium | Late | Skip/Optional | Gold standard melee. Hard to find a bad one. Often arrive level 2-5 with 70+ Melee Skill, combat-ready, with good gear. Ideal frontline. |
| Sellsword | S | Hybrid/Frontline | Premium | Late | Skip/Optional | Best line for hybrid (melee + ranged) potential. More roll-dependent than Hedge Knight; a poor roll wastes the high wage. |
| Swordmaster | S | Specialist Frontline | Premium | Late | Skip/Optional | Highest starting Melee Skill AND Melee Defense of any background. Cannot star in Ranged Skill. Eventually gets the Old trait (loses core attributes); WotN legendary item can remove it. Hard to find cheap. |

### A-Tier / Strong Mid-Late hires

| Name | Tier | Role | Cost Band | Phase | Tryout | Notes |
|------|------|------|-----------|-------|--------|-------|
| Hunter | A | Ranged | Medium | Mid | Optional | The archer answer. ~1000-1500 gold reliably gives a decent melee-or-ranged recruit. Often comes with a free Boar Spear. Skip Poachers/Fletchers in favor of this. |
| Raider | A | Frontline | Medium-Expensive | Mid-Late | Optional | Reliable frontliner, cheaper than Hedge Knight. Good when found at a discount (~2K). |
| Adventurous Noble | A | Frontline | Expensive | Mid-Late | Optional | Slightly better-on-average Bastard. Good base stats, poor Resolve. Can randomly attract an Assassin recruit event. Start level 1-3 random. Only worth it cheap. |
| Squire | A | Frontline | Medium | Mid | Always | Strong Resolve plus small boosts to Max Fatigue, Melee and Ranged Skill. Higher daily wage; can still roll mediocre. Favor cheaper ones. |
| Witchhunter | A | Frontline/Specialist | Medium | Mid | Optional | Solid mid-game pickup with good Resolve, useful in fear-heavy fights. |

### B-Tier / Best cheap core (early game backbone)

| Name | Tier | Role | Cost Band | Phase | Tryout | Star Bias | Notes |
|------|------|------|-----------|-------|--------|-----------|-------|
| Brawler | B | Frontline | Cheap | Early | Optional | Melee Atk/Def (can't star Ranged Atk) | Best early-mid recruit. At least okay in every important stat; min Melee Skill ~52. Company backbone. |
| Butcher | B | Frontline | Cheap | Early | Optional | Melee Atk | Nearly as good as Brawler. Great cheap frontliner. |
| Thief | B | Tank/Fencer | Cheap | Early-Mid | Always | Melee Def, Initiative | 2nd-best Melee Defense = great tank. Very high Initiative = great fencer/dodge build. Bad as a pure damage dealer. |
| Militia | B | Frontline | Cheap-Medium | Mid | Always | Melee Skill | Worth it from mid-game, but can roll the Clumsy trait (cancels their Melee bonus). Tryout to avoid that. Demigod if Dexterous/Strong/Iron-Lunged. |

### C-Tier / Cheap filler & situational

| Name | Tier | Role | Cost Band | Phase | Tryout | Notes |
|------|------|------|-----------|-------|--------|-------|
| Farmhand | C | Filler/Frontline | Cheap | Early | Always | Good HP and Fatigue, weak Resolve and Melee Defense. Plentiful in farming villages. Divisive: fine cheap body, but Brawlers outclass them. Can still roll Melee stars. |
| Fisherman | C | Filler | Cheap | Early | Always | Good stamina, reasonable base. Common in big coastal cities. Often comes with a free net (one-use snare). You get what you pay for. |
| Vagabond | C | Spearwall/Filler | Cheap | Early | Always | Cheap Spearwall/Shieldwall body. Very high Max Fatigue (100-115) but terrible Resolve that's hard to patch. Good ones can stay viable late. |
| Wildman | C | Frontline | Cheap (naked) | Early-Mid | Always | Naked = true cost visible upfront (~150 base). Generally good talents, but without Defense stars they tend to end up bad. Hire cheap ones. |
| Messenger | C | Filler | Cheap | Early | Always | Underrated when you count low hire + low wage together; among the best value early recruits. |

### Filler / Meatbags (warm bodies only)

| Name | Tier | Role | Cost Band | Phase | Tryout | Notes |
|------|------|------|-----------|-------|--------|-------|
| Beggar | Filler | Body | Cheap (80-100) | Early | Skip | Throwaway body to soak a hit or hold a tile. No investment. |
| Cripple | Filler | Body | Cheap (80-100) | Early | Skip | Same as Beggar. Pure meat. |

### Generally AVOID (poor value)

| Name | Why avoid |
|------|-----------|
| Thief/Murderer (as a fighter) | Expensive, bad stars and talents, very hard to find a good one. (Thief is fine as a cheap tank, not as a damage hire.) |
| Lumberjack | Overpriced for what you get. |
| Poacher | Worse than a Hunter; just hire a Hunter. |
| Fletcher | Same, worse Hunter. |
| Noble (Disowned/regular, at full price) | Middle-of-the-road stats, expensive, so poor rolls really sting. Only worth it cheap. |

---

## CAMPAIGN HIRING ARC (when to get whom)

**Early game (first ~days, low funds)**
- Visit small farming villages and large coastal cities.
- Core: Brawlers and Butchers.
- Filler: Farmhands, Fishermen, Messengers, the odd Thief for a tank.
- Meatbags: Beggars/Cripples only if you need a body for an event or a tile.
- Keep company size lean; wages + provisions will sink you otherwise.

**Mid game (a few thousand crowns banked)**
- Start folding in: Hunter (priority, your archer), Militia, Squires, Witchhunters, a Monk for events.
- Use tryout on these average backgrounds to dodge bad traits (esp. Clumsy on Militia).

**Late game (funds flowing)**
- Premium frontline as available: Hedge Knights, Sellswords, Raiders, occasional cheap Noble or Swordmaster.
- Cheap premium finds (Sellsword/Raider ~2K, Hedge Knight/Swordmaster ~3-4K) are near-instant buys; the floor is high enough that you almost can't go wrong.
- Replace your weakest early-game bros as the premium hires come online.

**Standing habits**
- Keep at least one roster slot free for event recruits (unless Lone Wolf).
- Wait for poorly-equipped versions of your target background to save on gear cost.
- Check nicknames before paying for a tryout.
- Evaluate by projected level-11 line vs wage, not by save-scumming for stars.

---

## NOTES / TODO for build

- Star bias data above is community-observed consensus, not official wiki numbers. If you want exact per-background min/max attribute ranges, the wiki Character_Backgrounds page has a big transcluded data table that did not render cleanly via fetch (it loads as a dynamic widget). Next session: pull that table from a mirror or the raw wikitext to add precise stat ranges (HP, Fatigue, Resolve, Initiative, Melee Skill, Ranged Skill, Melee Def, Ranged Def per background).
- Consider a second sortable column set for the exact attribute ranges once pulled, keyed by background name so it merges with this table.
- DLC tagging: Swordmaster Old-trait removal item is Warriors of the North. Some backgrounds/recruit events are DLC-gated; tag per background when stat table is added.
