/* ============================================================
   THE ARCANUM - game guide registry
   ------------------------------------------------------------
   THIS IS THE ONLY FILE YOU EDIT TO ADD A GAME.

   To add a new guide:
     1. Drop the guide's folder into  /guides/<slug>/
     2. Copy one block below, change the fields, done.
     3. Flip status from "planned" -> "building" -> "live".

   The hub builds the featured row, the genre groups, the
   search, and all the counts from this array automatically.

   FIELD REFERENCE
     slug       url-safe id, should match the folder in /guides/
     title      game name shown on the card
     blurb      one or two sentences, what the guide covers
     genres     array of tags. drives the genre grouping. a game
                shows up under EVERY genre it lists, so keep it to
                2-3 meaningful tags. use names from GENRE_ORDER.
     href       path to the guide's landing page
     status     "live" | "building" | "planned"
     featured   true to pin it in the Featured row up top
     accent     optional hex; tints the card's top border.
                leave null to use the default brand gold.
     updated    free-text date string, shown on the card

   NOTE ON LIVE-SERVICE GAMES (Diablo IV, Path of Exile 2,
   Hearthstone, EVE, Rocket League): their meta rotates every
   patch/season. They are registered here, but they should get
   lighter "fundamentals + where to check live meta" guides
   rather than deep evergreen builds we'd have to babysit.
   ============================================================ */

const GAMES = [

  /* ===== LIVE / IN PROGRESS ===== */

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
    slug: "satisfactory",
    title: "Satisfactory",
    blurb: "The FICSIT Field Manual: production ratios, power progression, logistics, milestone routing, and the Update 1.2 Game Modes.",
    genres: ["Simulation", "Building", "Automation"],
    href: "guides/satisfactory/index.html",
    status: "live",
    featured: true,
    accent: "#c9871f",
    updated: "Updated Jun 2026"
  },
  {
    slug: "final-fantasy",
    title: "Final Fantasy",
    blurb: "Series hub linking every Final Fantasy guide. FF7 Rebirth is fully built; the rest of the catalog is in the forge.",
    genres: ["RPG", "JRPG"],
    href: "guides/final-fantasy/index.html",
    status: "live",
    featured: true,
    accent: "#3b5c8a",
    updated: "VII Rebirth ready"
  },

  /* ===== STRATEGY / TACTICAL / RTS ===== */

  {
    slug: "stellaris",
    title: "Stellaris",
    blurb: "Complete field guide for 4.4 Pegasus + Nomads: empire creation, economy, research, ascension, fleet design, megastructures, the Nomads layer, and crises.",
    genres: ["Strategy", "Simulation"],
    href: "guides/stellaris/index.html",
    status: "live",
    featured: false,
    accent: "#5a3f8a",
    updated: "Jun 2026"
  },
  {
    slug: "xcom-2",
    title: "XCOM 2",
    blurb: "Squad builds, class loadouts, mission-by-mission tactics, and campaign progression for War of the Chosen.",
    genres: ["Strategy", "Tactical"],
    href: "guides/xcom-2/index.html",
    status: "planned",
    featured: false,
    accent: "#1f6f8b",
    updated: "Planned"
  },
  {
    slug: "factorio",
    title: "Factorio",
    blurb: "Main-bus and city-block blueprints, ratio sheets, logistics, and the rocket-launch tech path.",
    genres: ["Automation", "Strategy"],
    href: "guides/factorio/index.html",
    status: "planned",
    featured: false,
    accent: "#d98b2b",
    updated: "Planned"
  },
  {
    slug: "starcraft-remastered",
    title: "StarCraft: Remastered",
    blurb: "Build orders and matchup fundamentals for the original Brood War metagame.",
    genres: ["Strategy", "RTS"],
    href: "guides/starcraft-remastered/index.html",
    status: "planned",
    featured: false,
    accent: "#2f6db0",
    updated: "Planned"
  },
  {
    slug: "starcraft-2",
    title: "StarCraft II",
    blurb: "Race-by-race build orders, TvZ/TvP/PvZ matchup plans, macro fundamentals, and campaign tips.",
    genres: ["Strategy", "RTS"],
    href: "guides/starcraft-2/index.html",
    status: "planned",
    featured: false,
    accent: "#2f6db0",
    updated: "Planned"
  },
  {
    slug: "survive-the-fall",
    title: "Survive the Fall",
    blurb: "Base building, party survival, and exploration routing for the post-impact wasteland.",
    genres: ["Survival", "Strategy"],
    href: "guides/survive-the-fall/index.html",
    status: "planned",
    featured: false,
    accent: "#6b7a3a",
    updated: "Planned"
  },
  {
    slug: "age-of-darkness-final-stand",
    title: "Age of Darkness: Final Stand",
    blurb: "City layout and wall placement, hero builds, tech priorities, and surviving the Death Night sieges.",
    genres: ["Strategy", "RTS", "Survival"],
    href: "guides/age-of-darkness-final-stand/index.html",
    status: "planned",
    featured: false,
    accent: "#7a2b4a",
    updated: "Planned"
  },

  /* ===== AUTOMATION / SIM / BUILDING ===== */

  {
    slug: "techtonica",
    title: "Techtonica",
    blurb: "Underground factory layouts, MOLE routing, research order, and conveyor planning.",
    genres: ["Automation", "Building"],
    href: "guides/techtonica/index.html",
    status: "planned",
    featured: false,
    accent: "#2bb0a0",
    updated: "Planned"
  },
  {
    slug: "space-haven",
    title: "Space Haven",
    blurb: "Ship design, crew management, life-support loops, and early-game survival on the void crossing.",
    genres: ["Simulation", "Survival"],
    href: "guides/space-haven/index.html",
    status: "planned",
    featured: false,
    accent: "#3a5a8a",
    updated: "Planned"
  },
  {
    slug: "travellers-rest",
    title: "Travellers Rest",
    blurb: "Tavern layout, brewing chains, staff hiring, and the upgrade path to a packed inn.",
    genres: ["Simulation", "Management"],
    href: "guides/travellers-rest/index.html",
    status: "planned",
    featured: false,
    accent: "#a06a3a",
    updated: "Planned"
  },

  /* ===== RPG / JRPG / ACTION-RPG ===== */

  {
    slug: "clair-obscur-expedition-33",
    title: "Clair Obscur: Expedition 33",
    blurb: "Full data-driven wiki: all 8 Expeditioners, combat, attributes, status engines, Luminas, and new-player help &mdash; with weapons, Pictos, bosses, and walkthroughs rolling out in batches.",
    genres: ["RPG", "JRPG"],
    href: "guides/clair-obscur-expedition-33/index.html",
    status: "live",
    featured: false,
    accent: "#8a3b6a",
    updated: "Jun 2026"
  },
  {
    slug: "diablo-3",
    title: "Diablo III",
    blurb: "Class build guides, set dungeons, Greater Rift pushing, and season-start leveling.",
    genres: ["ARPG", "RPG"],
    href: "guides/diablo-3/index.html",
    status: "planned",
    featured: false,
    accent: "#9c2b2b",
    updated: "Planned"
  },
  {
    slug: "diablo-4",
    title: "Diablo IV",
    blurb: "Class fundamentals, leveling routes, and current-season basics. Live-service: pairs with where to check live meta.",
    genres: ["ARPG", "RPG"],
    href: "guides/diablo-4/index.html",
    status: "planned",
    featured: false,
    accent: "#7a1f1f",
    updated: "Planned"
  },
  {
    slug: "path-of-exile-2",
    title: "Path of Exile 2",
    blurb: "Class and ascendancy fundamentals, passive-tree planning, and league-start basics. Live-service.",
    genres: ["ARPG", "RPG"],
    href: "guides/path-of-exile-2/index.html",
    status: "planned",
    featured: false,
    accent: "#5a2b1f",
    updated: "Planned"
  },
  {
    slug: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    blurb: "Spell loadouts, talent builds, exploration checklists, and the main-quest progression path.",
    genres: ["RPG", "Open World"],
    href: "guides/hogwarts-legacy/index.html",
    status: "planned",
    featured: false,
    accent: "#7a6a2b",
    updated: "Planned"
  },

  /* ===== ROGUELIKE / SURVIVOR / ACTION ===== */

  {
    slug: "death-must-die",
    title: "Death Must Die",
    blurb: "God-boon synergies, character builds, skill priorities, and scaling for deeper runs.",
    genres: ["Roguelike", "Action"],
    href: "guides/death-must-die/index.html",
    status: "planned",
    featured: false,
    accent: "#6a2b8a",
    updated: "Planned"
  },
  {
    slug: "deep-rock-galactic-survivor",
    title: "Deep Rock Galactic: Survivor",
    blurb: "Class builds, weapon overclocks, upgrade routing, and hazard-tier survival tactics. Rock and Stone.",
    genres: ["Roguelike", "Action"],
    href: "guides/deep-rock-galactic-survivor/index.html",
    status: "planned",
    featured: false,
    accent: "#c98a1f",
    updated: "Planned"
  },
  {
    slug: "rip-reincarnation",
    title: "R.I.P. - Reincarnation Insurance Program",
    blurb: "Run strategy, upgrade priorities, and build synergies. (Notes go deeper once I log more hours.)",
    genres: ["Roguelike", "Action"],
    href: "guides/rip-reincarnation/index.html",
    status: "planned",
    featured: false,
    accent: "#4a4a5a",
    updated: "Planned"
  },

  /* ===== MMO / CARD / SPORTS (mostly live-service) ===== */

  {
    slug: "eve-online",
    title: "EVE Online",
    blurb: "New-pilot survival, ship progression, ISK-making basics, and how not to lose everything in nullsec.",
    genres: ["MMO", "Strategy"],
    href: "guides/eve-online/index.html",
    status: "planned",
    featured: false,
    accent: "#2b3a5a",
    updated: "Planned"
  },
  {
    slug: "hearthstone",
    title: "Hearthstone",
    blurb: "Deck archetype fundamentals and mulligan basics. Live-service: built from official card data + where to check current meta.",
    genres: ["Card", "Strategy"],
    href: "guides/hearthstone/index.html",
    status: "planned",
    featured: false,
    accent: "#b07a1f",
    updated: "Planned"
  },
  {
    slug: "rocket-league",
    title: "Rocket League",
    blurb: "Mechanics ladder, rotation fundamentals, training packs, and rank-up basics.",
    genres: ["Sports", "Action"],
    href: "guides/rocket-league/index.html",
    status: "planned",
    featured: false,
    accent: "#2b6ab0",
    updated: "Planned"
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
  "ARPG",
  "Strategy",
  "Tactical",
  "RTS",
  "Simulation",
  "Building",
  "Automation",
  "Management",
  "Action",
  "Shooter",
  "Survival",
  "Roguelike",
  "Open World",
  "Card",
  "MMO",
  "Sports"
];
