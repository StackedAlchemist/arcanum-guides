# The Arcanum

A gaming guide hub for Stacked Alchemist. The hub indexes individual game guides and links out to them. Built to scale: the entire homepage (featured row, genre groups, search, counts) is generated from one data file.

## Structure

```
stacked-alchemist-gaming/
  index.html              The hub homepage (mostly empty, JS fills it)
  css/hub.css             Hub styling
  js/
    games.js              <-- THE ONLY FILE YOU EDIT TO ADD A GAME
    hub.js                Renderer (don't need to touch this)
  guides/
    battle-brothers/      Full live guide (8 pages)
    final-fantasy/        Placeholder, ready to fill
    satisfactory/         Placeholder, ready to fill
  README.md
```

## How to add a new guide

Three steps, no HTML editing on the hub:

1. **Build the guide.** Make a folder under `guides/your-game/` with at least an `index.html`. (Copy the structure of `guides/battle-brothers/` as a template.)

2. **Register it.** Open `js/games.js` and copy the TEMPLATE block at the bottom. Fill in the fields:
   ```js
   {
     slug: "your-game",
     title: "Your Game",
     blurb: "What the guide covers.",
     genres: ["RPG", "Strategy"],
     href: "guides/your-game/index.html",
     status: "live",        // "live" | "building" | "planned"
     featured: true,        // pin to the Featured row?
     accent: "#7c2c1c",     // card top-border color, or null
     updated: "Jun 2026"
   }
   ```

3. **Done.** Reload the hub. The card appears in the right genre group(s), in the Featured row if flagged, the counts update, and it's searchable. No other edits.

### Notes

- `status: "building"` or `"planned"` shows the card but makes it non-clickable with a badge. Flip to `"live"` when the guide is ready.
- A game with multiple genres shows up under each one. That's intended.
- To control where a genre sits in the page order, add it to `GENRE_ORDER` in `games.js`. Unlisted genres still appear, just alphabetically after the ordered ones.

## Running it

No build step, no framework, pure HTML/CSS/vanilla JS.

- Open `index.html` directly, or
- Run a local server from this folder: `python3 -m http.server` then visit `http://localhost:8000`, or use VS Code Live Server.

Note: because `games.js` loads via `<script>`, opening `index.html` straight from the file system works fine (no fetch/CORS issues).

## Deploying

Drop the whole folder into any static host. The guides come along inside `guides/`.

- **GitHub Pages:** push the repo, enable Pages on root.
- **Vercel:** import repo, framework "Other", root output.
- **Firebase Hosting:** public dir = `.`, deploy.

## Brand

Sister property to stackedalchemist.dev. Same alchemy/forge language: the alembic mark, molten gold and forge-ember accents, Cinzel display type. Keep new guides visually distinct internally if you want, but the hub stays in this identity.
