# assets/

Site-wide static files (images, icons, share art). Per-guide art still lives
under each guide instead — see `guides/<slug>/images/` in
[GUIDE-STANDARD.md](../GUIDE-STANDARD.md) §10.

```
assets/
  images/              site-wide images
    brand/             logo marks, the Ravenclaw crest, favicons
    og/                Open Graph / social share cards (1200×630)
    hero/              homepage / about hero art
    portrait/          the About-page portrait
```

## How to use one

Reference with a root-relative-ish path from the page that needs it:

```html
<!-- from a root page like index.html / about.html -->
<img src="assets/images/portrait/alchemist.jpg" alt="…">

<!-- from a guide under guides/<slug>/ -->
<img src="../../assets/images/og/arcanum-og.jpg" alt="…">
```

To wire a social share image, add to a page `<head>`:

```html
<meta property="og:image" content="https://thearcanumguides.com/assets/images/og/arcanum-og.jpg">
```

## Rules (keep the site fast)

- **Optimize before commit** — JPG/WebP, compressed. A hero should be a few
  hundred KB, never multiple MB. This is a static GitHub Pages site.
- Always set descriptive `alt`; mark purely-decorative art `alt=""`.
- Art is **enhancement, not load-bearing** — every page must read fine before
  images exist and if one fails to load.
- Suggested sizes: **OG card 1200×630**, **hero banner ~1600×600 (8:3)**,
  **card thumbnail ~800×450 (16:9)**, **portrait ~800×800 (1:1)**.

*Empty subfolders are kept in git via `.gitkeep`; delete those once real files land.*
