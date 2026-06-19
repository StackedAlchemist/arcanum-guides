# The Mercenary Codex

A multi-page static strategy site for Battle Brothers, accurate to game version v1.5.2.2 (June 2026).

## Structure

```
battle-brothers-codex/
  index.html            Home / hub
  css/
    style.css           Shared stylesheet (the whole visual identity lives here)
  js/
    site.js             Shared behavior: mobile nav, active link, back-to-top, live search filter
  pages/
    builds.html         Character build archetypes (perks, stats, weapons, backgrounds)
    weapons.html        All weapon families + skills + the three new 1.5.2.2 weapons
    perks.html          Perk tiers, survival paths, target stats
    phases.html         Early / early-mid / mid / mid-late / late game progression
    enemies.html        Faction-by-faction tactics
    secrets.html        Hidden mechanics, legendary locations, named loot, edge cases
    patch.html          Full v1.5.2.2 breakdown
  README.md
```

## Running it

No build step, no dependencies, no framework. Pure HTML/CSS/vanilla JS.

- Just open `index.html` in a browser, or
- Run a local server from the project root:
  - `python3 -m http.server` then visit `http://localhost:8000`
  - or use the VS Code "Live Server" extension and click "Go Live"

## Deploying

Drop the whole folder into any static host:

- **GitHub Pages:** push to a repo, enable Pages on the main branch root.
- **Vercel:** import the repo, framework preset "Other", output dir = root.
- **Firebase Hosting:** `firebase init hosting`, set public dir to `.`, deploy.

## Editing

- Site-wide look: edit `css/style.css`. Colors live in the `:root` block at the top.
- Site-wide behavior: edit `js/site.js`.
- The nav and footer are written into each HTML page directly (no templating). If you add a page, copy the `<header class="topbar">` block and the footer from any existing page so the nav stays consistent.
- The search boxes work by reading `data-search` on the input and `data-target` (a CSS selector for the rows to filter). Add a search box to any page by copying that pattern.

## Accuracy

Built from the official v1.5.2.2 Steam patch notes, the Battle Brothers wiki, and community build/strategy guides. Where the live game and these notes ever disagree, the game wins. Not affiliated with Overhype Studios or Hooded Horse.
