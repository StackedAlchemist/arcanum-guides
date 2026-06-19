/* ============================================================
   THE ARCANUM - game guide registry
   ------------------------------------------------------------
   THIS IS THE ONLY FILE YOU EDIT TO ADD A GAME.

   To add a new guide:
     1. Drop the guide's folder into  /guides/<slug>/
     2. Copy one block below, change the fields, done.

   The hub builds the featured row, the genre groups, the
   search, and all the counts from this array automatically.

   FIELD REFERENCE
     slug       url-safe id, must match the folder in /guides/
     title      game name shown on the card
     blurb      one or two sentences, what the guide covers
     genres     array of tags. drives the genre grouping.
                use consistent names (see GENRE_ORDER below).
     href       path to the guide's landing page
     status     "live" | "building" | "planned"
     featured   true to pin it in the Featured row up top
     accent     optional hex; tints the card's top border.
                leave null to use the default brand gold.
     updated    free-text date string, shown on the card
   ============================================================ */

const GAMES = [
  {
    slug: "battle-brothers",
    title: "Battle Brothers",
    blurb: "Full company codex: builds, weapons, perks, enemy tactics, secrets, and game-phase progression. Updated for v1.5.2.2.",
    genres: ["Strategy", "RPG", "Tactical"],
    href: "guides/battle-brothers/index.html",
    status: "live",
    featured: true,
    accent: "#7c2c1c",
    updated: "Jun 2026"
  },
  {
    slug: "final-fantasy",
    title: "Final Fantasy",
    blurb: "Job builds, party comps, boss strategies, and hidden content across the series. Guide in progress.",
    genres: ["RPG", "JRPG"],
    href: "guides/final-fantasy/index.html",
    status: "building",
    featured: true,
    accent: "#3b5c8a",
    updated: "Coming soon"
  },
  {
    slug: "satisfactory",
    title: "Satisfactory",
    blurb: "Factory layouts, ratio sheets, logistics planning, and milestone progression for the perfect production line.",
    genres: ["Simulation", "Building", "Automation"],
    href: "guides/satisfactory/index.html",
    status: "building",
    featured: false,
    accent: "#c9871f",
    updated: "Coming soon"
  }

  /* --- TEMPLATE: copy, fill in, drop above this comment ---
  ,{
    slug: "game-slug",
    title: "Game Title",
    blurb: "What this guide covers.",
    genres: ["Genre A", "Genre B"],
    href: "guides/game-slug/index.html",
    status: "planned",
    featured: false,
    accent: null,
    updated: "Planned"
  }
  --------------------------------------------------------- */
];

/* Controls the order genres appear in on the hub. Any genre not
   listed here still shows up, just after the ordered ones,
   alphabetically. Add new genres here to pin their position. */
const GENRE_ORDER = [
  "RPG",
  "JRPG",
  "Strategy",
  "Tactical",
  "Simulation",
  "Building",
  "Automation",
  "Action",
  "Shooter",
  "Survival",
  "Roguelike"
];
