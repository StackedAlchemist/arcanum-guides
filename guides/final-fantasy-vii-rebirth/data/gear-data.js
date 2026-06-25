/* FF7 Rebirth — armor & accessory priority (limited / crafted) */
window.FF7R_GEAR = {
  intro: "Armor sets materia slots; accessories are one-per-character and often unique or craft-limited. Plan who gets premium pieces before you enhance duplicates — Enhanced armor recipes cost rare regional mats.",

  armorPhilosophy: [
    "Physical DPS (Cloud, Tifa, Barret gun): Bracer/Bangle line — ATK/VIT focus, linked slots for Elemental pairs.",
    "Casters (Aerith, Yuffie magic builds): Armlet/Bracelet line — M.ATK/SPR focus for Ward and spell scaling.",
    "Tanks / counters (Red XIII, Barret tank): Highest VIT/HP armor you can craft for that region.",
    "Enhance armor at the Item Transmuter once you have the regional chip — don't buy plain shop armor past mid-game."
  ],

  accessoryTiers: {
    unique: { label: "One Per Save", desc: "Single copy or breaks on use — assign deliberately." },
    limited: { label: "Few Copies / Hard to Farm", desc: "Finite rewards or expensive craft — prioritize your main three." },
    craftable: { label: "Craftable (Mats Limited)", desc: "Repeatable in theory, but mats gate how many you can realistically make per region." },
    shop: { label: "Shop / Repeatable", desc: "Buy or craft cheaply in bulk (Revival Earrings, stat wristguards)." }
  },

  armorPriority: [
    { phase: "Early (Ch 2–4)", chapter: 2, craft: "Chip: Armor Upgrades 1–2 (Grasslands)", pieces: ["Enhanced Copper Bracer → Cloud", "Enhanced Woodsprite Armlet → Aerith", "Enhanced Hunter's Bangle → Tifa/Barret"], notes: "First linked-slot armor. Craft before Junon bosses." },
    { phase: "Mid (Ch 5–8)", chapter: 5, craft: "Chip: Armor Upgrades 3–6 (Junon/Corel)", pieces: ["Enhanced Sailor's Bracer / Gold Coral Armlet", "Enhanced Fortress Bracer for physical leads", "Enhanced Beguiling Armlet for Aerith"], notes: "Corel chip unlocks Karmic Cowl accessory mats route too." },
    { phase: "Late (Ch 9–11)", chapter: 9, craft: "Chip: Armor Upgrades 7–11 (Gongaga/Cosmo/Nibel)", pieces: ["Enhanced Crucible / Witch's Armlet", "Enhanced Commander's Bracer", "Enhanced Resplendent Bracer / Yggdrasil Armlet"], notes: "Nibel enhanced armor is pre-Hard Mode target." },
    { phase: "Endgame", chapter: 14, craft: "Chip: Armor Upgrades 12 + Enhanced tier", pieces: ["Enhanced Garm Bangle", "Enhanced Varvados Bracelet", "Cetran Bracer (Cloud Hard Mode — 8 slots)"], notes: "Cetran Bracer is Cloud-only endgame slot king." }
  ],

  accessoryPriority: [
    { name: "Gotterdammerung", tier: "unique", chapter: 14, bestOn: "Tifa or Cloud", effect: "Full Limit at battle start; passive Limit charge", source: "Brutal Challenge: Rulers of the Outer World", notes: "1 copy. Tifa for burst damage; Cloud for control." },
    { name: "Ribbon", tier: "unique", chapter: 12, bestOn: "Aerith", effect: "Immunity to all detrimental status; harder to interrupt casting", source: "Can't Stop Won't Stop quest / 3D Brawler Sephiroth", notes: "Hard Mode healer insurance." },
    { name: "Revival Earrings", tier: "shop", chapter: 4, bestOn: "Any (rotate)", effect: "Auto-Life once, then breaks", source: "Shops 500 gil / craft Mythril + Phoenix Down", notes: "Buy 3 — one per active party member for boss attempts." },
    { name: "Karmic Cowl", tier: "craftable", chapter: 7, bestOn: "Aerith or Barret", effect: "+VIT/SPR, immune Slow & Instant Death", source: "Transmuter — Corel mats (Tonberry King Robe, etc.)", notes: "Craft after Corel; enhance late with Dark Matter." },
    { name: "Enhanced Karmic Cowl", tier: "limited", chapter: 14, bestOn: "Aerith", effect: "+50 VIT/SPR, death immunity", source: "Enhance Karmic Cowl + Pirate Jetsam + Dark Matter", notes: "Post-game enhance — best defensive accessory craft." },
    { name: "Safety Bit", tier: "craftable", chapter: 7, bestOn: "Aerith", effect: "Instant Death + Slow + Petrify immunity", source: "Craft Mythril + gems / Coal Mines field find", notes: "Alternative to Karmic for specific fights." },
    { name: "Chocoking's Cape", tier: "limited", chapter: 8, bestOn: "Cloud or ATB engine chars", effect: "+1 ATB segment at battle start", source: "Gold Cup Chocobo races", notes: "Stand-in until Gotterdammerung / Transference Module." },
    { name: "Transference Module", tier: "limited", chapter: 14, bestOn: "Cloud / Cait Sith", effect: "Limit gauge fills when spending ATB", source: "Musclehead Colosseum — Six-Person Bouts", notes: "Best pre-Gotterdammerung Limit option." },
    { name: "Expeditionary Medal", tier: "craftable", chapter: 11, bestOn: "Tifa / Cloud", effect: "+1 Limit level at battle start", source: "Transmuter — late regional mats", notes: "Enhanced version = max Limit level start (endgame)." },
    { name: "Hermes Shoes", tier: "limited", chapter: 8, bestOn: "Tifa / Yuffie", effect: "Haste at battle start", source: "Titan Slam — Chocobo Square", notes: "Speed setups for stagger rush." },
    { name: "Healing Carcanet", tier: "craftable", chapter: 7, bestOn: "Aerith / Barret (Magnify)", effect: "Boosts healing item/spell potency", source: "Corel cache / Transmuter", notes: "Pairs with Magnify+Cure strategies." },
    { name: "Genji Gloves", tier: "limited", chapter: 14, bestOn: "Tifa", effect: "Breaks 9,999 damage cap", source: "Transmuter — endgame rare mats + Pirate Jetsam", notes: "Physical DPS only; expensive craft." }
  ],

  characterRecs: [
    { id: "cloud", name: "Cloud", armor: "Bracer line (physical) → Cetran Bracer endgame", accessory: "Gotterdammerung or Chocoking's Cape → Transference Module", notes: "Limit-focused or ATB-from-block builds." },
    { id: "tifa", name: "Tifa", armor: "Bracer/Bangle — max ATK slots", accessory: "Gotterdammerung / Expeditionary Medal / Hermes Shoes", notes: "Stagger burst — Limit level at start is huge." },
    { id: "aerith", name: "Aerith", armor: "Armlet line — linked slots for Warding+Subversion", accessory: "Ribbon → Enhanced Karmic Cowl", notes: "Status immunity and cast protection trump raw stats." },
    { id: "barret", name: "Barret", armor: "Bangle — HP/VIT", accessory: "Healing Carcanet or Karmic Cowl", notes: "Magnify heal bot — sustain accessories over damage." },
    { id: "yuffie", name: "Yuffie", armor: "Armlet or Bracer depending on build", accessory: "Hermes Shoes / Genji Gloves (magic DPS)", notes: "Haste for Ninjutsu spam; Genji if physical focus." },
    { id: "red", name: "Red XIII", armor: "Highest VIT craft available", accessory: "Revival Earrings / Draconic Ring", notes: "Counter tank — block charging Limit accessories sync well." },
    { id: "cait", name: "Cait Sith", armor: "Bracelet — support slots", accessory: "Transference Module / Chocoking's Cape", notes: "ATB battery — fill gauge for the team." }
  ]
};