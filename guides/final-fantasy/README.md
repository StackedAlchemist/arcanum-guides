# FF7 Rebirth — Complete Field Guide
## Project Scaffolding for VS Code

---

## Folder Structure

```
ff7-guide/
│
├── index.html              ← Main hub / homepage
│
├── css/
│   └── style.css           ← Shared styles across all pages (import once per page)
│
├── js/
│   └── shared.js           ← Shared JS: Lifestream bg, scroll reveal, active nav, accordions
│
├── pages/
│   ├── characters.html     ← All playable + key NPCs
│   ├── materia.html        ← THREE.JS 3D orbs + materia system + limited copies table
│   ├── builds.html         ← Per-character builds, early/mid/late/hard mode
│   ├── parties.html        ← Party composition + who gets limited gear
│   ├── bosses.html         ← Boss guide with accordion expand per boss
│   ├── queensblood.html    ← Card game guide, best deck, strategies
│   └── affinity.html       ← Full dialogue choices chapter by chapter with star ratings
│
└── assets/
    └── icons/              ← Drop any custom icons or images here
```

---

## Pages Status

| Page | Status | Notes |
|------|--------|-------|
| index.html | ✅ Complete | Hub nav with all links |
| pages/materia.html | ✅ Complete | Full Three.js 3D orbs - drag to rotate |
| pages/characters.html | 🔧 Stub | Build out with character cards |
| pages/builds.html | 🔧 Stub | Copy from single-file version |
| pages/parties.html | 🔧 Stub | Copy from single-file version |
| pages/bosses.html | 🔧 Stub | Copy from single-file version |
| pages/queensblood.html | 🔧 Stub | Copy from single-file version |
| pages/affinity.html | 🔧 Stub | Full dialogue choices with star ratings |

---

## How Each Page Is Built

Every stub page follows this exact template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PAGE NAME | FF7 Rebirth Guide</title>
<link rel="stylesheet" href="../css/style.css" />
<!-- Add page-specific <style> here -->
</head>
<body>
<canvas id="bg-canvas"></canvas>
<div class="page-wrap">

  <nav>
    <a class="nav-logo" href="../index.html">FF7 REBIRTH GUIDE</a>
    <ul class="nav-links">
      <li><a href="characters.html">Characters</a></li>
      <li><a href="materia.html">Materia</a></li>
      <li><a href="builds.html">Builds</a></li>
      <li><a href="parties.html">Party Setup</a></li>
      <li><a href="bosses.html">Bosses</a></li>
      <li><a href="queensblood.html">Queen's Blood</a></li>
      <li><a href="affinity.html">Affinity</a></li>
    </ul>
  </nav>

  <div class="page-header">
    <span class="page-eyebrow">SECTION LABEL</span>
    <h1 class="page-title">Page Title</h1>
    <div class="page-rule"></div>
  </div>

  <div class="content">
    <!-- YOUR CONTENT HERE -->
  </div>

  <footer><p class="footer-text">FF7 REBIRTH — COMPLETE FIELD GUIDE</p></footer>
</div>

<script src="../js/shared.js"></script>
<!-- THREE.JS only needed on materia.html -->
</body>
</html>
```

---

## Three.js Orbs (materia.html)

The materia orbs use Three.js r128 from CDN (no install needed):
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

Each orb has:
- Genuine glass sphere geometry with transmission/refraction
- Internal particle system (250-290 particles) with per-type colors
- Particles bounce off the inner wall and drift organically
- Point light inside makes it glow from within
- Mouse/touch drag to rotate
- Auto-rotate resumes after 2s of no interaction
- Hover intensifies the glow

---

## Deploying to Vercel or GitHub Pages

```bash
# GitHub Pages - just push the folder
git init
git add .
git commit -m "initial"
git remote add origin YOUR_REPO_URL
git push -u origin main
# Then enable Pages in repo settings, set root as source

# Vercel - drag and drop the ff7-guide folder at vercel.com
# Or: npm i -g vercel && vercel deploy
```

No build step needed. Pure static HTML/CSS/JS.

---

## VS Code Setup Tips

1. Install **Live Server** extension - right-click index.html → "Open with Live Server"
2. Install **Prettier** for HTML/CSS formatting
3. Use **Claude Code** with this CLAUDE.md prompt at the start of sessions:

```
This is ff7-guide, a multi-page static site guide for FF7 Rebirth.
Aesthetic: dark Lifestream cinematic. Green (#00ffaa) as primary accent.
Fonts: Cinzel Decorative (headers), Crimson Pro (body).
Shared: css/style.css and js/shared.js are included on every page.
Three.js r128 CDN is used on materia.html only.
When adding content, match the existing card/callout/table structure in style.css.
DO NOT use emoji as icons. Use CSS geometry or Three.js renders.
Push for visual depth, 3D effects, and the Lifestream atmosphere.
```

---

Built by Stacked Alchemist LLC
