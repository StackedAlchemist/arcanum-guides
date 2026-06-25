/* FF7 Rebirth — Item Transmuter, materials, regional gates */
window.FF7R_CRAFTING = {
  intro: "The Item Transmuter turns regional materials into consumables, accessories, and armor. Craftsmanship level unlocks recipes; Transmuter Chips (from Excavation Intel) unlock Enhanced armor tiers. Mats are region-locked — don't chase endgame crafts until you've cleared that region's World Intel.",

  craftsmanshipTips: [
    "Craft every new recipe once — duplicate crafts grant no Craftsmanship EXP.",
    "Prioritize Planet's Blessing → Favor → Splendor chain early; it levels you fast and feeds potion crafts.",
    "Excavation Intel unlocks after doing Expedition Intel in each region. Chip #1 needs 2 Expedition clears; chip #2 needs 6.",
    "Enhanced armor uses the same regional mats as base recipes — farm Excavation sites before mass-crafting for your trio.",
    "Revival Earrings, Safety Bit, and Karmic Cowl are accessory crafts gated by Craftsmanship level and region mats — see the Gear page for who gets them."
  ],

  transmuterChips: [
    { num: 1, region: "Grasslands", chapter: 2, site: "Excavation Intel 1 — Bygone Settlement", requirement: "Complete 2 Grasslands Expedition Intel", unlocks: ["Enhanced Copper Bracer", "Enhanced Woodsprite Armlet"] },
    { num: 2, region: "Grasslands", chapter: 2, site: "Excavation Intel 2 — Pipeline Discovery", requirement: "Complete 6 Grasslands Expedition Intel", unlocks: ["Enhanced Hunter's Bangle", "Enhanced Bone Bracelet"] },
    { num: 3, region: "Junon", chapter: 3, site: "Excavation Intel — The Scars of War (1)", requirement: "Complete 2 Junon Expedition Intel", unlocks: ["Enhanced Sailor's Bracer", "Enhanced Gold Coral Armlet"] },
    { num: 4, region: "Junon", chapter: 4, site: "Excavation Intel — The Scars of War (2)", requirement: "Complete 6 Junon Expedition Intel", unlocks: ["Enhanced Elphadunk Bangle", "Enhanced Wisefox Bracelet"] },
    { num: 5, region: "Corel", chapter: 5, site: "Excavation Intel 1 — Valve Ruins", requirement: "Complete 2 Corel Expedition Intel", unlocks: ["Enhanced Fortress Bracer", "Enhanced Beguiling Armlet"] },
    { num: 6, region: "Corel", chapter: 5, site: "Excavation Intel 2 — Deserted Village", requirement: "Complete 6 Corel Expedition Intel", unlocks: ["Enhanced Abyssal Bangle", "Enhanced Oldebeast Bracelet"] },
    { num: 7, region: "Gongaga", chapter: 6, site: "Excavation Intel 1 — Mako-Laden Canyon", requirement: "Complete 2 Gongaga Expedition Intel", unlocks: ["Enhanced Crucible Bracer", "Enhanced Witch's Armlet"] },
    { num: 8, region: "Gongaga", chapter: 6, site: "Excavation Intel 2 — Wilddrove Ruins", requirement: "Complete 6 Gongaga Expedition Intel", unlocks: ["Enhanced Outlaw Bangle", "Enhanced Crocodile Bracelet"] },
    { num: 9, region: "Cosmo Canyon", chapter: 7, site: "Excavation Intel — Dilapidated Ship", requirement: "Complete 2 Cosmo Canyon Expedition Intel", unlocks: ["Enhanced Commander's Bracelet", "Enhanced Spiritbound Armlet"] },
    { num: 10, region: "Cosmo Canyon", chapter: 7, site: "Excavation Intel — Cosmo Range Ruins", requirement: "Complete 6 Cosmo Canyon Expedition Intel", unlocks: ["Enhanced Road Warrior Bangle", "Enhanced Snailshell Bracelet"] },
    { num: 11, region: "Nibel", chapter: 9, site: "Excavation Intel — Island Base (1)", requirement: "Complete 2 Nibel Expedition Intel", unlocks: ["Enhanced Resplendent Bracer", "Enhanced Yggdrasil Armlet"] },
    { num: 12, region: "Nibel", chapter: 9, site: "Excavation Intel — Island Base (2)", requirement: "Complete 6 Nibel Expedition Intel", unlocks: ["Enhanced Garm Bangle", "Enhanced Varvados Bracelet"] }
  ],

  regionalMaterials: [
    {
      region: "Grasslands", chapter: 1, phase: "Early",
      herbs: ["Sage", "Laurel", "Marjoram", "Pearl Ginger Root", "Mist Seeds"],
      ores: ["Iron Ore", "Beast Bone", "Beast Talon", "Numinous Ashes"],
      notes: "First Transmuter after Ch.1. Sage/Marjoram everywhere — craft Antidote, Potion chain, Bird Trap. Mythril from Mythril Mines for Revival Earrings later."
    },
    {
      region: "Junon", chapter: 3, phase: "Early",
      herbs: ["Oregano", "Ether Onion"],
      ores: ["Zinc Ore", "Amethyst", "Gold Dust"],
      notes: "Junon chip unlocks Enhanced Sailor/Gold Coral. Ether Onion + Beast Talon for Ether crafts. Shop Mythril in Junon for accessories."
    },
    {
      region: "Corel", chapter: 5, phase: "Mid",
      herbs: ["Saint Luche Leaf"],
      ores: ["Cosmotite Ore", "Lea Titanium"],
      notes: "Corel mats gate Karmic Cowl, Healing Carcanet, Safety Bit. Tonberry King Robe from Corel bosses feeds accessory crafts. Don't skip Deserted Village Excavation."
    },
    {
      region: "Gongaga", chapter: 6, phase: "Mid",
      herbs: ["Mandrake Root"],
      ores: ["Mythril Ore", "Phoenix Feather"],
      notes: "Witch's/Crucible Enhanced armor. Phoenix Down mats for Revival Earrings bulk craft. Gongaga jungle merchants sell Tonberry card — not mats, but same region sweep."
    },
    {
      region: "Cosmo Canyon", chapter: 7, phase: "Mid",
      herbs: ["Cosmo Greens"],
      ores: ["Quetzalcoatl Talon", "Spirit Ink"],
      notes: "Commander/Spiritbound Enhanced tier. Hi-Ether recipe opens (Cosmotite Ore). Coal Mines Safety Bit field find is in this chapter arc."
    },
    {
      region: "Gold Saucer / Wutai", chapter: 8, phase: "Mid",
      herbs: [],
      ores: ["Chocobo Feather", "Jetsam Scrap"],
      notes: "Colosseum/Chocobo rewards — not Excavation chips, but Chocoking's Cape and Hermes Shoes tie here. Wutai mats for mid-tier wristguards."
    },
    {
      region: "Nibel", chapter: 9, phase: "Late",
      herbs: ["Nibel Wolfberry"],
      ores: ["Dark Matter", "Pirate Jetsam", "Astral Remnant"],
      notes: "Final Enhanced armor chips. Dark Matter + Pirate Jetsam for Enhanced Karmic Cowl and Genji Gloves — save for endgame, mats are scarce."
    },
    {
      region: "Ancient Forest / Capital", chapter: 11, phase: "Late",
      herbs: ["Ancient Fern"],
      ores: ["Lifestream Crystal"],
      notes: "Expeditionary Medal craft opens. Ribbon is a quest drop, not Transmuter — but medal crafts use late regional pools."
    },
    {
      region: "Endgame", chapter: 14, phase: "Endgame",
      herbs: [],
      ores: ["Jetsam Hoard", "Omega Fragment"],
      notes: "Enhanced accessory tier (Genji, Enhanced Karmic). Brutal Challenge drops beat crafting for Gotterdammerung. Farm Nibel Dark Matter in NG+ if crafting multiple pieces."
    }
  ],

  waitUntil: [
    { item: "Enhanced Fortress Bracer / Beguiling Armlet", waitFor: "Corel — chips 5–6", chapter: 5, reason: "Junon Enhanced is fine for Ch.3–4, but Corel tier is the first big stat jump for your main three." },
    { item: "Karmic Cowl", waitFor: "Corel Excavation + Tonberry King Robe", chapter: 5, reason: "Needs Corel regional drops. Craft one for Aerith after chip 5; don't burn mats on bench characters." },
    { item: "Healing Carcanet", waitFor: "Corel caches", chapter: 5, reason: "Barret Magnify heal bot — wait until Corel exploration is mostly done." },
    { item: "Enhanced Crucible / Witch's Armlet", waitFor: "Gongaga chips 7–8", chapter: 6, reason: "Gongaga mats don't exist earlier. Grinding Grasslands Intel won't help." },
    { item: "Hermes Shoes", waitFor: "Gold Saucer — Titan Slam", chapter: 8, reason: "Chocobo Square minigame reward, not Transmuter." },
    { item: "Enhanced Resplendent / Yggdrasil", waitFor: "Nibel chips 11–12", chapter: 9, reason: "Pre-Hard Mode armor target. Clear Nibel Expedition Intel before mass-enhancing." },
    { item: "Genji Gloves", waitFor: "Nibel Dark Matter + Pirate Jetsam", chapter: 14, reason: "Extremely expensive. One copy for Tifa only until NG+ mat farm." },
    { item: "Enhanced Karmic Cowl", waitFor: "Endgame Nibel/Gilgamesh mats", chapter: 14, reason: "Enhance base Karmic Cowl — don't waste Pirate Jetsam on mid-tier accessories first." },
    { item: "Expeditionary Medal (Enhanced)", waitFor: "Craftsmanship 15+ and late mats", chapter: 11, reason: "Limit-start accessories outscale stat wristguards for DPS leads." }
  ],

  keyRecipes: [
    { name: "Revival Earrings", type: "accessory", craftLevel: 4, chapter: 4, mats: "Mythril ×1, Phoenix Down ×1", notes: "Buy Mythril in Junon or craft. Make 3 — one per party member for boss tries." },
    { name: "Safety Bit", type: "accessory", craftLevel: 7, chapter: 7, mats: "Mythril, Cosmotite Ore, status gems", notes: "Instant Death immunity for Aerith until Ribbon." },
    { name: "Karmic Cowl", type: "accessory", craftLevel: 9, chapter: 5, mats: "Tonberry King Robe, Corel ores, Cosmotite", notes: "Slow/Death immune. Aerith first, Barret second." },
    { name: "Healing Carcanet", type: "accessory", craftLevel: 8, chapter: 5, mats: "Corel herbs, Mythril", notes: "Magnify heal support — Barret/Cait." },
    { name: "Copper Bracer → Enhanced", type: "armor", craftLevel: 3, chapter: 2, mats: "Iron Ore, Beast Bone + Chip 1", notes: "Cloud physical — first linked-slot Enhanced target." },
    { name: "Woodsprite Armlet → Enhanced", type: "armor", craftLevel: 3, chapter: 2, mats: "Herbs, Iron Ore + Chip 1", notes: "Aerith caster armor line." },
    { name: "Fortress Bracer → Enhanced", type: "armor", craftLevel: 7, chapter: 5, mats: "Corel ores + Chip 5", notes: "Mid-game Cloud/Tifa physical." },
    { name: "Resplendent Bracer → Enhanced", type: "armor", craftLevel: 12, chapter: 9, mats: "Nibel ores, Dark Matter + Chip 11", notes: "Late-game physical DPS." }
  ]
};