/* FF7 Rebirth — Combat Simulator (Chadley VR) */
window.FF7R_SIMULATOR = {
  intro: "Chadley's Combat Simulator is a VR training hub at each Research Terminal. It gates your strongest materia: Regional Intel gives free copies, Battle Intel awards limited support orbs, Biological Intel feeds Enemy Skill, and Brutal Challenges unlock after Gilgamesh for endgame staples.",

  access: [
    { label: "Standard Simulator", chapter: 2, note: "Available once Chadley sets up the Grasslands terminal." },
    { label: "Shinra Manor VR", chapter: 11, note: "Separate suite in Nibelheim Manor — Item Master trial and endgame specs." },
    { label: "Gilgamesh Island", chapter: 12, note: "All Protorelics + all Summon Entity materia + Tiny Bronco sea travel (Ch.12)." },
    { label: "Brutal / Legendary", chapter: 12, note: "Unlocks after defeating Gilgamesh on his island." },
    { label: "Six-Person Bouts", chapter: 12, note: "Requires full party roster and high intel completion." }
  ],

  categories: [
    {
      id: "training",
      name: "Combat Training",
      chapter: 2,
      desc: "Character tutorials and Beginner's Hall. Low risk AP/EXP farming.",
      rewards: ["Healing (Grasslands Intel Lv.1)", "HP Up (Beginner's Hall)", "Per-character magic orbs (Cloud/Tifa/Barret/Aerith/Red/Yuffie/Cait tracks)", "Steadfast Block (Synergy training)", "Refocus (Cosmo Region Intel Lv.2)"]
    },
    {
      id: "regional",
      name: "Regional Intel",
      chapter: 2,
      desc: "Timed arena courses per region with Lv.1 and Lv.2 tiers.",
      examples: [
        { region: "Grasslands", chapter: 2, materia: ["Healing (Lv.1)", "Ice (Lv.2)"] },
        { region: "Junon", chapter: 4, materia: ["Lightning (Lv.1)", "Cleansing (Lv.2)"] },
        { region: "Corel", chapter: 7, materia: ["Wind (Lv.1)", "Fire (Lv.2)"] },
        { region: "Gongaga", chapter: 9, materia: ["Poison (Lv.1)"] },
        { region: "Cosmo Canyon", chapter: 10, materia: ["Barrier (Lv.1)", "MP Up (Lv.2)"] },
        { region: "Nibel", chapter: 11, materia: ["Time (Lv.1)", "Revival (Lv.2)"] }
      ]
    },
    {
      id: "battle",
      name: "Battle Intel",
      chapter: 2,
      desc: "Specific enemy rematches. Primary source of limited Elemental, Magnify-adjacent rewards, and stat Up materia.",
      examples: [
        { name: "Plains Stalkers", region: "Grasslands", chapter: 2, materia: "Vitality Up" },
        { name: "Horror on the Range", region: "Grasslands", chapter: 2, materia: "First Strike" },
        { name: "Natural Order", region: "Grasslands", chapter: 2, materia: "Provoke" },
        { name: "Conqueror of the Skies", region: "Junon", chapter: 4, materia: "Elemental (1 of 3)" },
        { name: "White Squall", region: "Junon", chapter: 4, materia: "Spirit Up" },
        { name: "Sand Slitherers", region: "Corel", chapter: 7, materia: "Strength Up" },
        { name: "Oh, Skewer It", region: "Corel", chapter: 7, materia: "Vitality Up" },
        { name: "Distant Tremors", region: "Gongaga", chapter: 9, materia: "Elemental (2 of 3)" },
        { name: "Rooted in the Planet", region: "Gongaga", chapter: 9, materia: "Speed Up" },
        { name: "Lethal Combo", region: "Gongaga", chapter: 9, materia: "Spirit Up" },
        { name: "Nature's Vengeance", region: "Cosmo", chapter: 10, materia: "Level Boost" },
        { name: "Flower of Destruction", region: "Cosmo", chapter: 10, materia: "First Strike" },
        { name: "Antediluvian Memories", region: "Cosmo", chapter: 10, materia: "Magic Up" },
        { name: "Chthonian Rondi", region: "Nibel", chapter: 11, materia: "AP Up" },
        { name: "Death's Harbingers", region: "Nibel", chapter: 11, materia: "VIT ↔ SPR" }
      ]
    },
    {
      id: "biological",
      name: "Biological Intel",
      chapter: 4,
      desc: "Bestiary-linked specimen fights. Unlocks Enemy Skill materia and each enemy technique.",
      rewards: [
        { intel: "Know Thine Enemy", materia: "Enemy Skill (orb)" },
        { intel: "Blinded by Light", skill: "Plasma Discharge" },
        { intel: "Breath of Life", skill: "Soothing Breeze" },
        { intel: "At Any Cost", skill: "Self-Destruct" },
        { intel: "Head Case", skill: "Mind Blast" },
        { intel: "That's the Smell", skill: "Rancid Breath" },
        { intel: "Stony Stare", skill: "Gorgon Shield" },
        { intel: "Sonic Boom", skill: "Starting unlock" }
      ]
    },
    {
      id: "brutal",
      name: "Brutal Challenges",
      chapter: 12,
      desc: "Post-Gilgamesh super-fights. No items, strict conditions. Best accessories and final Elemental/Magnify copies.",
      challenges: [
        { name: "Requiem for the Second", reward: "Elemental (3rd copy)", note: "Final Elemental orb in the game." },
        { name: "Hellions' Intonement", reward: "Magnify (3rd copy)", note: "Final Magnify orb." },
        { name: "Rulers of the Outer World", reward: "Gotterdammerung accessory", note: "Near-permanent Limit gauge. Hardest unlock." }
      ]
    },
    {
      id: "six-person",
      name: "Six-Person Bouts",
      chapter: 12,
      desc: "Full roster arena fights. Late AP Up and challenge gear.",
      rewards: ["AP Up (Ululating Quartet)", "High-tier manuscripts and accessories"]
    },
    {
      id: "shinra-manor",
      name: "Shinra Manor Preliminary",
      chapter: 11,
      desc: "VR wing inside Nibelheim Manor during Chapter 11.",
      rewards: ["Item Master", "Endgame accessory prototypes"]
    }
  ],

  summonEntity: [
    { name: "Titan", chapter: 2, unlock: "Combat Simulator unlocked (Grasslands, Ch.2)", island: "Ch.12+ — pairs with Bahamut Arisen" },
    { name: "Phoenix", chapter: 4, unlock: "Reach Junon region", island: "Ch.12+ — pairs with Kujata" },
    { name: "Alexander", chapter: 5, unlock: "Reach Corel region", island: "Ch.12+ — pairs with Odin" },
    { name: "Kujata", chapter: 6, unlock: "Reach Gongaga region", island: "Ch.12+ — pairs with Phoenix" },
    { name: "Bahamut Arisen", chapter: 7, unlock: "Reach Cosmo Canyon region", island: "Ch.12+ — pairs with Titan" },
    { name: "Odin", chapter: 9, unlock: "Reach Nibel region", island: "Ch.12+ — pairs with Alexander" }
  ],

  summons: [
    { name: "Ifrit", chapter: 2, source: "Starting materia (Red XIII)" },
    { name: "Shiva", chapter: 2, source: "Starting materia (Aerith)" },
    { name: "Chocobo & Moogle", chapter: 2, source: "Starting materia (Cloud)" },
    { name: "Titan", chapter: 2, source: "Summon Entity — Combat Simulator (Grasslands)" },
    { name: "Phoenix", chapter: 4, source: "Summon Entity — reach Junon region" },
    { name: "Alexander", chapter: 5, source: "Summon Entity — reach Corel region" },
    { name: "Kujata", chapter: 6, source: "Summon Entity — reach Gongaga region" },
    { name: "Bahamut Arisen", chapter: 7, source: "Summon Entity — reach Cosmo Canyon region" },
    { name: "Odin", chapter: 9, source: "Summon Entity — reach Nibel region" }
  ],

  gilgameshNote: "Gilgamesh Island (Ch.12+ sailing) requires all Protorelics and all six Summon Entity clears — island fights are dual-summon rematches, not where you first earn the materia. Beating Gilgamesh unlocks Brutal Challenges."
};