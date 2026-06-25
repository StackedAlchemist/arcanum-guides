/* FF7 Rebirth — Chadley Research Terminal */
window.FF7R_CHADLEY = {
  intro: "Chadley runs the Research Terminal in every major region. He converts Intel into power: World Intel earns Regional Data Points for one-time materia exchanges, Battle Intel unlocks simulator fights and shop stock, and Phenomenon Intel opens rare field events.",

  terminals: [
    { region: "Grasslands", chapter: 2, unlock: "Chapter 2 — Kalm / Grasslands open world" },
    { region: "Junon", chapter: 4, unlock: "Chapter 4 — Junon Region" },
    { region: "Corel", chapter: 7, unlock: "Chapter 7 — Corel / Costa del Sol area" },
    { region: "Gongaga", chapter: 9, unlock: "Chapter 9 — Gongaga Region" },
    { region: "Cosmo Canyon", chapter: 10, unlock: "Chapter 10 — Cosmo Canyon" },
    { region: "Nibel", chapter: 11, unlock: "Chapter 11 — Nibel Region" },
    { region: "Meridian Ocean", chapter: 14, unlock: "Chapter 14+ — post-Forgotten Capital sailing" }
  ],

  intelTypes: [
    {
      name: "World Intel",
      desc: "Collectibles in the open world: Protorelics, Chocobo tracks, oddities, and regional surveys. Fills the Regional Data bar.",
      reward: "Data Points → one-time materia exchange (four options per region, pick one per orb type)"
    },
    {
      name: "Battle Intel",
      desc: "Combat objectives tied to specific enemy types in each region.",
      reward: "Unlocks Battle Intel simulator duels + often materia rewards (Elemental, stat Ups, etc.)"
    },
    {
      name: "Regional Intel",
      desc: "Simulator courses with level tiers (Lv.1, Lv.2) per region.",
      reward: "Free materia copies (often elemental magic or Healing) + unlocks harder sim content"
    },
    {
      name: "Phenomenon Intel",
      desc: "Rare world events and odd encounters (marked on the map after survey progress).",
      reward: "Unique gear, manuscripts, and occasional materia (e.g. Prayer from Gongaga)"
    },
    {
      name: "Biological Intel",
      desc: "Global bestiary progress — fight specimens in the Combat Simulator.",
      reward: "Enemy Skill materia + individual enemy techniques"
    }
  ],

  dataPointRewards: [
    { region: "Grasslands", chapter: 2, options: ["Fire and Ice", "Auto-Cast", "Morph", "Auto-Unique Ability"] },
    { region: "Junon", chapter: 4, options: ["Lightning and Wind", "Magic Efficiency", "Item Economizer", "ATB Stagger"] },
    { region: "Corel", chapter: 7, options: ["Gravity", "HP Absorption", "ATB Boost", "Auto-Weapon Ability"] },
    { region: "Gongaga", chapter: 9, options: ["Petrify", "Magic Focus", "Limit Siphon", "Synergy Support"] },
    { region: "Cosmo Canyon", chapter: 10, options: ["Poison and Petrify", "Synergy", "Jump", "Skill Master"] },
    { region: "Nibel", chapter: 11, options: ["Comet", "MP Absorption", "Darkside", "ATB Assist"] },
    { region: "Meridian Ocean", chapter: 14, options: ["Reraise", "Swiftcast", "Spare Change", "Limit Support"] }
  ],

  shopNotes: [
    "Basic magic (Fire, Ice, Healing, etc.) sells from Kalm and vending machines — not Chadley's Data Point stock.",
    "After clearing Combat Assignments in a region, Chadley's shop may add absorption/support materia with repeatable stock.",
    "Dual-element combo orbs are NEVER re-purchasable — one Data Point exchange per region tier.",
    "Magnify and Elemental do not come from Data Points; they come from Battle Intel and Brutal Challenges (see Combat Simulator page)."
  ],

  protorelicNote: "Collect all six regional Protorelics to unlock Gilgamesh Island (Ch.12+). Summon materia come from Summon Entity fights at terminals as you reach each region — the island is a dual-boss rematch gate before Gilgamesh and Brutal Challenges."
};