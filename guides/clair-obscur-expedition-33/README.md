# Clair Obscur: Expedition 33 — Wiki Section

Part of **The Arcanum** (thearcanumguides.com). A data-driven wiki for Clair Obscur: Expedition 33, built on the same blacksmith-and-hammer principle as the main hub: the data lives in files, a renderer builds the pages, and adding content means editing one file, not hand-writing HTML.

## How it works

```
clair-obscur-expedition-33/
  index.html          # shell: loads fonts, CSS, data, renderer
  css/wiki.css        # Arcanum forge identity (gold/ember/dark)
  data/
    nav.js            # THE SPINE: the 5 buckets + every page (slug, title, type, status)
    characters.js     # 6 combat members + Esquie + Renoir + kits
    gamedata.js       # Luminas, Status Effects, article pages
  js/
    render.js         # THE HAMMER: reads nav + data, builds every page
```

**Routing** is hash-based (`#characters`, `#gustave`, `#combat`), so it works on GitHub Pages / Vercel with no build step, same as the rest of the site.

**To add a page:** add one object to the right bucket in `data/nav.js`. Set `status: "stub"` until the data exists, then `"live"` when it's filled.

**To add a character/item:** add one object to its data file. Every page of that type stays visually consistent for free because the renderer templates them all.

## Page status (this build)

5 buckets, 33 pages. **10 live, 23 stubs.**

Live now (real, current content):
- General Information, Combat (General bucket)
- Characters index + all 8 character detail pages, Attributes, Status Effects (Characters bucket)
- Weapons, Pictos, Luminas (Equipment bucket)
- Bosses (World bucket)
- New Player Help (Guides bucket)

Stubs (structure live, data pending research batches): Patch Notes, DLC, Controls, Secrets, Skills, Outfits, Items, Music Records, The Curator, remaining World (Locations, Quests, NPCs, Merchants, Enemies, Lost Gestrals, Journals, Story & Lore), Walkthrough, Game Progress Route, Boss Guides, Trophy Guide, New Game Plus.

## Why so many stubs?

The character, combat, attribute, status, and Lumina systems are stable and can be written accurately now. The big itemized databases (every Weapon with stats, all ~200 Pictos with effects and locations, every enemy and boss, all Lost Gestral locations) are research-gated and must be compiled against current sources, including the **Thank You Update** content (Verso's Drafts, the Endless Tower, Lumina Sets, Photo Mode). Faking those from memory would put wrong numbers on the site, which is worse than a clean "coming soon."

## Batch plan for remaining data

Each batch = research current sources, write the data file, flip the nav status to `live`:

1. **Pictos + Weapons** (the two biggest, most-wanted tables)
2. **Bosses + Enemies** (with strategy notes)
3. **Locations + Walkthrough + Game Progress Route**
4. **Skills** (per-character full skill lists)
5. **Remaining World** (NPCs, Merchants, Lost Gestrals, Journals, Story & Lore)
6. **Trophy Guide, New Game Plus, Secrets, Patch Notes, DLC**

## Integration with the hub

This lives in `guides/clair-obscur-expedition-33/` in the Arcanum repo. Clair Obscur's `status` in the main `games.js` is `"live"`, with its `href` pointing at `guides/clair-obscur-expedition-33/index.html`. The wiki's own forge styling matches the hub, so it reads as one site.

> Note: this wiki replaced the earlier single-page Clair Obscur field guide. The unique sections from that page (party compositions and the three "delete-button" build archetypes) can be folded back in as a live Guides page when the builds batch lands.

## Accuracy

Built for the post-Thank-You-Update state of the game (Game of the Year 2025). Character mechanics and system pages are written from current knowledge; the data-table pages carry a "verify against in-game tooltips" discipline since exact numbers shift with patches. Fan-made, unaffiliated with Sandfall Interactive or Kepler Interactive.
