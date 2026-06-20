// ============================================================
// THE ARCANUM - Clair Obscur: Expedition 33 Wiki
// nav.js - the page taxonomy (five buckets)
//
// This is the spine of the wiki. Each entry maps a page slug to
// its title, bucket, and the data file + renderer it uses.
// Adding a page = adding one object here. The renderer reads this.
//
// status: "live"   = page has real content
//         "stub"   = structure exists, data pending research
// ============================================================

const WIKI_NAV = [
  {
    bucket: "General",
    pages: [
      { slug: "general-information", title: "General Information", type: "article", status: "live" },
      { slug: "combat",              title: "Combat",              type: "article", status: "live" },
      { slug: "controls",            title: "Controls",            type: "article", status: "stub" },
      { slug: "patch-notes",         title: "Patch Notes",         type: "list",    status: "stub" },
      { slug: "dlc",                 title: "DLC",                 type: "article", status: "stub" },
      { slug: "secrets",             title: "Secrets",             type: "list",    status: "stub" }
    ]
  },
  {
    bucket: "Characters",
    pages: [
      { slug: "characters",     title: "Characters",     type: "index",   status: "live", data: "characters" },
      { slug: "attributes",     title: "Attributes",     type: "article", status: "live" },
      { slug: "skills",         title: "Skills",         type: "list",    status: "stub", data: "skills" },
      { slug: "status-effects", title: "Status Effects", type: "list",    status: "live", data: "statusEffects" }
    ]
  },
  {
    bucket: "Equipment",
    pages: [
      { slug: "weapons",       title: "Weapons",       type: "list",    status: "stub", data: "weapons" },
      { slug: "pictos",        title: "Pictos",        type: "list",    status: "stub", data: "pictos" },
      { slug: "luminas",       title: "Luminas",       type: "list",    status: "live", data: "luminas" },
      { slug: "outfits",       title: "Outfits",       type: "list",    status: "stub" },
      { slug: "items",         title: "Items",         type: "list",    status: "stub" },
      { slug: "music-records", title: "Music Records", type: "list",    status: "stub" },
      { slug: "the-curator",   title: "Upgrades (The Curator)", type: "article", status: "stub" }
    ]
  },
  {
    bucket: "World",
    pages: [
      { slug: "world-information",  title: "World Information",  type: "article", status: "stub" },
      { slug: "locations",          title: "Locations",          type: "list",    status: "stub" },
      { slug: "quests",             title: "Quests",             type: "list",    status: "stub" },
      { slug: "npcs",               title: "NPCs",               type: "list",    status: "stub" },
      { slug: "merchants",          title: "Merchants",          type: "list",    status: "stub" },
      { slug: "enemies",            title: "Enemies",            type: "list",    status: "stub" },
      { slug: "bosses",             title: "Bosses",             type: "list",    status: "stub", data: "bosses" },
      { slug: "lost-gestrals",      title: "Lost Gestrals",      type: "list",    status: "stub" },
      { slug: "expedition-journals",title: "Expedition Journals",type: "list",    status: "stub" },
      { slug: "story-lore",         title: "Story & Lore",       type: "article", status: "stub" }
    ]
  },
  {
    bucket: "Guides",
    pages: [
      { slug: "new-player-help",    title: "New Player Help",    type: "article", status: "live" },
      { slug: "walkthrough",        title: "Walkthrough",        type: "article", status: "stub" },
      { slug: "game-progress-route",title: "Game Progress Route",type: "article", status: "stub" },
      { slug: "boss-guides",        title: "Boss Guides",        type: "list",    status: "stub" },
      { slug: "trophy-guide",       title: "Trophy & Achievement Guide", type: "list", status: "stub" },
      { slug: "new-game-plus",      title: "New Game Plus",      type: "article", status: "stub" }
    ]
  }
];

if (typeof module !== "undefined") module.exports = { WIKI_NAV };
