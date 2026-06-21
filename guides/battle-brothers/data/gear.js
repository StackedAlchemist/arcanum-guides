/* ============================================================
   THE MERCENARY CODEX - Battle Brothers gear database
   Single source of truth. Pages render tables from this file
   (see js/gear-tables.js). No build step, no framework.

   Stats are FACTS sourced from the Battle Brothers Wiki
   (Fandom, CC-BY-SA) and cross-checked in-game. We store the
   numbers and write our own prose around them.

   Weapon row : name, worth, dmgMin, dmgMax, ignoreArmor (%),
                vsArmor (%), durability, fatigue (Max Fatigue
                penalty, negative), dlc, [shieldDmg], [headChance]
   Armor row  : name, armor (protection = durability), fatigue,
                worth, dlc, notes, [vision]   (ratio is computed)
   Shield row : name, durability, fatigue, meleeDef, rangedDef,
                worth, dlc, notes

   "guide canon" in dlc = the fictional v1.5.2.2 weapons this
   site documents; their numbers are community estimates, not
   wiki-verified, and are tagged so as not to mislead.
   ============================================================ */
window.BB_GEAR = {
  meta: {
    game: "battle-brothers",
    version: "1.5.2.2",
    source: "Battle Brothers Wiki (Fandom), CC-BY-SA; cross-checked in-game",
    note: "Standard/craftable gear. Named/Famed gear adds randomized bonuses on top of these base items."
  },

  /* ================= MELEE ================= */
  melee: {
    daggers: [
      { name: "Knife",         worth: 30,   dmgMin: 15, dmgMax: 25, ignoreArmor: 20, vsArmor: 50, durability: 32, fatigue: 0,  dlc: "" },
      { name: "Dagger",        worth: 180,  dmgMin: 15, dmgMax: 35, ignoreArmor: 20, vsArmor: 60, durability: 40, fatigue: 0,  dlc: "" },
      { name: "Notched Blade", worth: 350,  dmgMin: 20, dmgMax: 30, ignoreArmor: 20, vsArmor: 60, durability: 44, fatigue: -3, dlc: "" },
      { name: "Rondel Dagger", worth: 400,  dmgMin: 20, dmgMax: 40, ignoreArmor: 20, vsArmor: 70, durability: 50, fatigue: 0,  dlc: "" },
      { name: "Qatal Dagger",  worth: 1000, dmgMin: 30, dmgMax: 45, ignoreArmor: 20, vsArmor: 70, durability: 60, fatigue: 0,  dlc: "Blazing Deserts" }
    ],
    swords1h: [
      { name: "Broken Ancient Sword", worth: 200,  dmgMin: 30, dmgMax: 35, ignoreArmor: 20, vsArmor: 75, durability: 24, fatigue: -3, dlc: "" },
      { name: "Shortsword",     worth: 350,  dmgMin: 30, dmgMax: 40, ignoreArmor: 20, vsArmor: 75, durability: 48, fatigue: -4, dlc: "" },
      { name: "Saif",           worth: 350,  dmgMin: 35, dmgMax: 40, ignoreArmor: 20, vsArmor: 65, durability: 48, fatigue: -4, dlc: "Blazing Deserts" },
      { name: "Falchion",       worth: 500,  dmgMin: 35, dmgMax: 45, ignoreArmor: 20, vsArmor: 70, durability: 48, fatigue: -6, dlc: "" },
      { name: "Cruel Falchion", worth: 900,  dmgMin: 35, dmgMax: 45, ignoreArmor: 20, vsArmor: 70, durability: 52, fatigue: -4, dlc: "" },
      { name: "Ancient Sword",  worth: 850,  dmgMin: 38, dmgMax: 43, ignoreArmor: 20, vsArmor: 80, durability: 42, fatigue: -6, dlc: "" },
      { name: "Scimitar",       worth: 1000, dmgMin: 40, dmgMax: 45, ignoreArmor: 20, vsArmor: 70, durability: 48, fatigue: -6, dlc: "Warriors of the North / Blazing Deserts" },
      { name: "Arming Sword",   worth: 1250, dmgMin: 40, dmgMax: 45, ignoreArmor: 20, vsArmor: 80, durability: 56, fatigue: -6, dlc: "" },
      { name: "Shamshir",       worth: 2900, dmgMin: 45, dmgMax: 50, ignoreArmor: 20, vsArmor: 75, durability: 72, fatigue: -8, dlc: "Warriors of the North / Blazing Deserts" },
      { name: "Noble Sword",    worth: 3200, dmgMin: 45, dmgMax: 50, ignoreArmor: 20, vsArmor: 85, durability: 72, fatigue: -8, dlc: "" },
      { name: "Fencing Sword",  worth: 1550, dmgMin: 35, dmgMax: 50, ignoreArmor: 20, vsArmor: 75, durability: 48, fatigue: -4, dlc: "Beasts & Exploration / Blazing Deserts" }
    ],
    swords2h: [
      { name: "Rhomphaia",           worth: 1300, dmgMin: 45, dmgMax: 65,  ignoreArmor: 20, vsArmor: 105, headChance: "+5%", durability: 42, fatigue: -10, dlc: "" },
      { name: "Warbrand",            worth: 1600, dmgMin: 50, dmgMax: 75,  ignoreArmor: 20, vsArmor: 75,  headChance: "+5%", durability: 64, fatigue: -10, dlc: "" },
      { name: "Longsword",           worth: 1700, dmgMin: 65, dmgMax: 85,  ignoreArmor: 25, vsArmor: 100, headChance: "+5%", shieldDmg: 12, durability: 60, fatigue: -10, dlc: "Beasts & Exploration" },
      { name: "Greatsword",          worth: 3200, dmgMin: 85, dmgMax: 100, ignoreArmor: 25, vsArmor: 100, headChance: "+5%", shieldDmg: 16, durability: 72, fatigue: -12, dlc: "" },
      { name: "Executioner's Sword", worth: 2900, dmgMin: 95, dmgMax: 110, ignoreArmor: 35, vsArmor: 90,  headChance: "+5%", shieldDmg: 16, durability: 72, fatigue: -12, dlc: "" }
    ],
    axes1h: [
      { name: "Hatchet",            worth: 210,  dmgMin: 25, dmgMax: 40, ignoreArmor: 30, vsArmor: 110, shieldDmg: 8,  durability: 52, fatigue: -6,  dlc: "" },
      { name: "Crude Axe",          worth: 800,  dmgMin: 30, dmgMax: 40, ignoreArmor: 40, vsArmor: 120, shieldDmg: 12, durability: 82, fatigue: -12, dlc: "Warriors of the North" },
      { name: "Handaxe",            worth: 900,  dmgMin: 30, dmgMax: 45, ignoreArmor: 30, vsArmor: 120, shieldDmg: 12, durability: 68, fatigue: -10, dlc: "" },
      { name: "Fighting Axe",       worth: 2800, dmgMin: 35, dmgMax: 55, ignoreArmor: 30, vsArmor: 130, shieldDmg: 16, durability: 80, fatigue: -12, dlc: "" },
      { name: "Head Splitter (Orc)",worth: 1100, dmgMin: 35, dmgMax: 65, ignoreArmor: 30, vsArmor: 130, shieldDmg: 16, durability: 64, fatigue: -22, dlc: "" },
      { name: "Axehammer",          worth: 800,  dmgMin: 20, dmgMax: 30, ignoreArmor: 60, vsArmor: 200, shieldDmg: 14, durability: 96, fatigue: -10, dlc: "Warriors of the North" }
    ],
    axes2h: [
      { name: "Woodcutter's Axe", worth: 400,  dmgMin: 35, dmgMax: 70,  ignoreArmor: 40, vsArmor: 125, headChance: "±0%", shieldDmg: 30, durability: 48, fatigue: -14, dlc: "" },
      { name: "Heavy Rusty Axe",  worth: 2000, dmgMin: 75, dmgMax: 90,  ignoreArmor: 50, vsArmor: 150, headChance: "±0%", shieldDmg: 36, durability: 96, fatigue: -16, dlc: "Warriors of the North" },
      { name: "Bardiche",         worth: 2200, dmgMin: 75, dmgMax: 95,  ignoreArmor: 40, vsArmor: 130, headChance: "±0%", shieldDmg: 24, durability: 64, fatigue: -16, dlc: "Warriors of the North" },
      { name: "Greataxe",         worth: 2400, dmgMin: 80, dmgMax: 100, ignoreArmor: 40, vsArmor: 150, headChance: "±0%", shieldDmg: 36, durability: 80, fatigue: -16, dlc: "" },
      { name: "Man Splitter (Orc)",worth: 1500,dmgMin: 90, dmgMax: 120, ignoreArmor: 40, vsArmor: 160, headChance: "±0%", shieldDmg: 42, durability: 64, fatigue: -34, dlc: "" },
      { name: "Longaxe",          worth: 1200, dmgMin: 70, dmgMax: 95,  ignoreArmor: 30, vsArmor: 110, headChance: "+5%", shieldDmg: 24, durability: 72, fatigue: -14, dlc: "" }
    ],
    maces1h: [
      { name: "Wooden Stick",        worth: 35,   dmgMin: 15, dmgMax: 25, ignoreArmor: 40, vsArmor: 50,  durability: 32, fatigue: -6,  dlc: "" },
      { name: "Claw Club",           worth: 100,  dmgMin: 20, dmgMax: 30, ignoreArmor: 50, vsArmor: 75,  durability: 76, fatigue: -10, dlc: "Warriors of the North" },
      { name: "Bludgeon",            worth: 90,   dmgMin: 20, dmgMax: 35, ignoreArmor: 40, vsArmor: 75,  durability: 64, fatigue: -8,  dlc: "" },
      { name: "Nomad Mace",          worth: 100,  dmgMin: 25, dmgMax: 35, ignoreArmor: 40, vsArmor: 90,  durability: 64, fatigue: -8,  dlc: "Blazing Deserts" },
      { name: "Light Southern Mace", worth: 400,  dmgMin: 30, dmgMax: 40, ignoreArmor: 40, vsArmor: 110, durability: 72, fatigue: -10, dlc: "Blazing Deserts" },
      { name: "Morning Star",        worth: 650,  dmgMin: 30, dmgMax: 45, ignoreArmor: 40, vsArmor: 100, durability: 72, fatigue: -10, dlc: "" },
      { name: "Heavy Southern Mace", worth: 2000, dmgMin: 35, dmgMax: 50, ignoreArmor: 40, vsArmor: 120, durability: 80, fatigue: -10, dlc: "Blazing Deserts" },
      { name: "Winged Mace",         worth: 2000, dmgMin: 35, dmgMax: 55, ignoreArmor: 40, vsArmor: 110, durability: 80, fatigue: -10, dlc: "" },
      { name: "Gnarly Staff",        worth: 1000, dmgMin: 25, dmgMax: 35, ignoreArmor: 40, vsArmor: 70,  durability: 56, fatigue: -4,  dlc: "" },
      { name: "Tree Limb (Orc)",     worth: 150,  dmgMin: 25, dmgMax: 40, ignoreArmor: 40, vsArmor: 75,  durability: 44, fatigue: -20, dlc: "" },
      { name: "Cudgel (Orc)",        worth: 300,  dmgMin: 30, dmgMax: 50, ignoreArmor: 40, vsArmor: 90,  durability: 68, fatigue: -20, dlc: "" },
      { name: "Lute",                worth: 120,  dmgMin: 5,  dmgMax: 10, ignoreArmor: 40, vsArmor: 10,  durability: 2,  fatigue: -4,  dlc: "" }
    ],
    maces2h: [
      { name: "Two-Handed Spiked Mace",  worth: 900,  dmgMin: 50, dmgMax: 70, ignoreArmor: 60, vsArmor: 115, headChance: "±0%", shieldDmg: 20, durability: 72,  fatigue: -14, dlc: "Warriors of the North" },
      { name: "Two-Handed Mace",         worth: 1100, dmgMin: 50, dmgMax: 75, ignoreArmor: 50, vsArmor: 115, headChance: "±0%", shieldDmg: 20, durability: 80,  fatigue: -14, dlc: "Beasts & Exploration" },
      { name: "Two-Handed Flanged Mace", worth: 1900, dmgMin: 75, dmgMax: 95, ignoreArmor: 50, vsArmor: 125, headChance: "±0%", shieldDmg: 26, durability: 120, fatigue: -16, dlc: "Beasts & Exploration" },
      { name: "Polemace",                worth: 1400, dmgMin: 60, dmgMax: 75, ignoreArmor: 40, vsArmor: 120, headChance: "+5%",       durability: 64,  fatigue: -14, dlc: "Blazing Deserts" },
      { name: "Goedendag",               worth: 600,  dmgMin: 45, dmgMax: 75, ignoreArmor: 25, vsArmor: 110, headChance: "±0%", durability: 64,  fatigue: -14, dlc: "Beasts & Exploration" }
    ],
    spears: [
      { name: "Militia Spear", worth: 180,  dmgMin: 25, dmgMax: 30, ignoreArmor: 25, vsArmor: 90,  durability: 48, fatigue: -6,  dlc: "" },
      { name: "Ancient Spear", worth: 150,  dmgMin: 20, dmgMax: 35, ignoreArmor: 25, vsArmor: 100, durability: 36, fatigue: -6,  dlc: "" },
      { name: "Goblin Skewer", worth: 300,  dmgMin: 25, dmgMax: 35, ignoreArmor: 25, vsArmor: 70,  durability: 36, fatigue: -3,  dlc: "" },
      { name: "Boar Spear",    worth: 750,  dmgMin: 30, dmgMax: 35, ignoreArmor: 25, vsArmor: 95,  durability: 64, fatigue: -8,  dlc: "" },
      { name: "Fire Lance",    worth: 750,  dmgMin: 30, dmgMax: 35, ignoreArmor: 25, vsArmor: 110, durability: 48, fatigue: -12, dlc: "Blazing Deserts" },
      { name: "Fighting Spear",worth: 2250, dmgMin: 35, dmgMax: 40, ignoreArmor: 25, vsArmor: 100, durability: 72, fatigue: -10, dlc: "" }
    ],
    spears2h: [
      { name: "Warfork", worth: 400, dmgMin: 40, dmgMax: 60, ignoreArmor: 25, vsArmor: 100, headChance: "+5%", durability: 50, fatigue: -10, dlc: "Warriors of the North" },
      { name: "Spetum",  worth: 750, dmgMin: 55, dmgMax: 75, ignoreArmor: 25, vsArmor: 100, headChance: "+5%", durability: 60, fatigue: -14, dlc: "Beasts & Exploration" }
    ],
    flails1h: [
      { name: "Wooden Flail",            worth: 40,   dmgMin: 10, dmgMax: 25, ignoreArmor: 30, vsArmor: 50,  headChance: "+10%", durability: 32, fatigue: -6,  dlc: "" },
      { name: "Reinforced Wooden Flail", worth: 300,  dmgMin: 20, dmgMax: 45, ignoreArmor: 30, vsArmor: 80,  headChance: "+10%", durability: 40, fatigue: -7,  dlc: "" },
      { name: "Flail",                   worth: 1300, dmgMin: 25, dmgMax: 55, ignoreArmor: 30, vsArmor: 100, headChance: "+10%", durability: 72, fatigue: -8,  dlc: "" },
      { name: "Three-Headed Flail",      worth: 1500, dmgMin: 30, dmgMax: 75, ignoreArmor: 30, vsArmor: 100, headChance: "+10%", durability: 60, fatigue: -10, dlc: "Beasts & Exploration" }
    ],
    flails2h: [
      { name: "Two-Handed Wooden Flail", worth: 500,  dmgMin: 30, dmgMax: 60,  ignoreArmor: 30, vsArmor: 80,  headChance: "+15%", durability: 56, fatigue: -14, dlc: "Beasts & Exploration" },
      { name: "Two-Handed Flail",        worth: 1400, dmgMin: 45, dmgMax: 90,  ignoreArmor: 30, vsArmor: 115, headChance: "+15%", durability: 80, fatigue: -16, dlc: "Beasts & Exploration" },
      { name: "Berserk Chain (Orc)",     worth: 1300, dmgMin: 50, dmgMax: 100, ignoreArmor: 30, vsArmor: 125, headChance: "+15%", durability: 64, fatigue: -30, dlc: "" }
    ],
    cleavers1h: [
      { name: "Antler Cleaver",     worth: 120,  dmgMin: 20, dmgMax: 30, ignoreArmor: 35, vsArmor: 75,  durability: 48, fatigue: -8,  dlc: "Warriors of the North" },
      { name: "Butcher's Cleaver",  worth: 110,  dmgMin: 20, dmgMax: 35, ignoreArmor: 25, vsArmor: 75,  durability: 40, fatigue: -6,  dlc: "" },
      { name: "Falx",               worth: 350,  dmgMin: 25, dmgMax: 35, ignoreArmor: 25, vsArmor: 80,  durability: 30, fatigue: -6,  dlc: "" },
      { name: "Blunt Cleaver",      worth: 600,  dmgMin: 30, dmgMax: 40, ignoreArmor: 35, vsArmor: 80,  durability: 66, fatigue: -10, dlc: "Warriors of the North" },
      { name: "Scramasax",          worth: 700,  dmgMin: 30, dmgMax: 45, ignoreArmor: 25, vsArmor: 80,  durability: 56, fatigue: -8,  dlc: "" },
      { name: "Khopesh",            worth: 1300, dmgMin: 35, dmgMax: 55, ignoreArmor: 25, vsArmor: 120, durability: 42, fatigue: -10, dlc: "" },
      { name: "Military Cleaver",   worth: 1900, dmgMin: 40, dmgMax: 60, ignoreArmor: 25, vsArmor: 90,  durability: 80, fatigue: -12, dlc: "" },
      { name: "Head Chopper (Orc)", worth: 1100, dmgMin: 40, dmgMax: 70, ignoreArmor: 25, vsArmor: 110, durability: 52, fatigue: -18, dlc: "" },
      { name: "Thorned Whip",       worth: 400,  dmgMin: 15, dmgMax: 25, ignoreArmor: 20, vsArmor: 30,  durability: 40, fatigue: -6,  dlc: "Warriors of the North" },
      { name: "Battle Whip",        worth: 450,  dmgMin: 15, dmgMax: 30, ignoreArmor: 10, vsArmor: 25,  durability: 40, fatigue: -6,  dlc: "Warriors of the North / Blazing Deserts" }
    ],
    cleavers2h: [
      { name: "Two-Handed Saif",     worth: 1800, dmgMin: 50, dmgMax: 70, ignoreArmor: 25, vsArmor: 90,  durability: 54, fatigue: -10, dlc: "Blazing Deserts" },
      { name: "Rusty Warblade",      worth: 1600, dmgMin: 60, dmgMax: 80, ignoreArmor: 35, vsArmor: 110, shieldDmg: 16, durability: 52, fatigue: -18, dlc: "Warriors of the North" },
      { name: "Crypt Cleaver",       worth: 2000, dmgMin: 60, dmgMax: 80, ignoreArmor: 25, vsArmor: 120, shieldDmg: 16, durability: 48, fatigue: -16, dlc: "" },
      { name: "Two-Handed Scimitar", worth: 2400, dmgMin: 65, dmgMax: 85, ignoreArmor: 25, vsArmor: 110, shieldDmg: 16, durability: 64, fatigue: -14, dlc: "Blazing Deserts" }
    ],
    hammers1h: [
      { name: "Pickaxe",       worth: 120,  dmgMin: 15, dmgMax: 30, ignoreArmor: 50, vsArmor: 150, durability: 56,  fatigue: -10, dlc: "" },
      { name: "Axehammer",     worth: 800,  dmgMin: 20, dmgMax: 30, ignoreArmor: 60, vsArmor: 200, shieldDmg: 14, durability: 96, fatigue: -10, dlc: "Warriors of the North" },
      { name: "Military Pick", worth: 900,  dmgMin: 20, dmgMax: 35, ignoreArmor: 50, vsArmor: 200, durability: 80,  fatigue: -8,  dlc: "" },
      { name: "Warhammer",     worth: 2300, dmgMin: 30, dmgMax: 40, ignoreArmor: 50, vsArmor: 225, durability: 100, fatigue: -8,  dlc: "" }
    ],
    hammers2h: [
      { name: "Two-Handed Mallet",       worth: 500,  dmgMin: 40, dmgMax: 70, ignoreArmor: 50, vsArmor: 150, shieldDmg: 20, durability: 50,  fatigue: -14, dlc: "Beasts & Exploration" },
      { name: "Two-Handed Skull Hammer", worth: 1300, dmgMin: 45, dmgMax: 65, ignoreArmor: 60, vsArmor: 180, shieldDmg: 26, durability: 120, fatigue: -16, dlc: "Warriors of the North" },
      { name: "Two-Handed Hammer",       worth: 2000, dmgMin: 60, dmgMax: 90, ignoreArmor: 50, vsArmor: 200, shieldDmg: 26, durability: 120, fatigue: -18, dlc: "" },
      { name: "Polehammer",              worth: 1500, dmgMin: 50, dmgMax: 75, ignoreArmor: 50, vsArmor: 185, headChance: "+5%", durability: 100, fatigue: -14, dlc: "Beasts & Exploration" }
    ],
    polearms: [
      { name: "Pitchfork",                 worth: 150,  dmgMin: 30, dmgMax: 50, ignoreArmor: 30, vsArmor: 75,  headChance: "+5%", durability: 40, fatigue: -14, dlc: "" },
      { name: "Broken Ancient Bladed Pike",worth: 350,  dmgMin: 35, dmgMax: 55, ignoreArmor: 30, vsArmor: 80,  headChance: "+5%", durability: 26, fatigue: -12, dlc: "" },
      { name: "Hooked Blade",              worth: 700,  dmgMin: 40, dmgMax: 70, ignoreArmor: 30, vsArmor: 110, headChance: "+5%", durability: 55, fatigue: -12, dlc: "" },
      { name: "Jagged Pike",               worth: 800,  dmgMin: 50, dmgMax: 70, ignoreArmor: 25, vsArmor: 90,  headChance: "+5%", durability: 40, fatigue: -8,  dlc: "" },
      { name: "Battle Standard",           worth: 1500, dmgMin: 50, dmgMax: 70, ignoreArmor: 30, vsArmor: 100, headChance: "±0%", durability: 64, fatigue: -15, dlc: "" },
      { name: "Ancient Bladed Pike",       worth: 600,  dmgMin: 55, dmgMax: 80, ignoreArmor: 30, vsArmor: 125, headChance: "+5%", durability: 30, fatigue: -14, dlc: "" },
      { name: "Warscythe",                 worth: 700,  dmgMin: 55, dmgMax: 80, ignoreArmor: 30, vsArmor: 105, headChance: "±0%", durability: 36, fatigue: -16, dlc: "" },
      { name: "Pike",                      worth: 900,  dmgMin: 60, dmgMax: 80, ignoreArmor: 30, vsArmor: 100, headChance: "+5%", durability: 64, fatigue: -14, dlc: "" },
      { name: "Swordlance",                worth: 1300, dmgMin: 60, dmgMax: 80, ignoreArmor: 30, vsArmor: 90,  headChance: "±0%", durability: 52, fatigue: -14, dlc: "Blazing Deserts" },
      { name: "Billhook",                  worth: 1400, dmgMin: 55, dmgMax: 85, ignoreArmor: 30, vsArmor: 140, headChance: "+5%", durability: 72, fatigue: -14, dlc: "" },
      { name: "Pollaxe",                   worth: 3000, dmgMin: 50, dmgMax: 75, ignoreArmor: 40, vsArmor: 110, headChance: "+5%", shieldDmg: 24, durability: 72, fatigue: -13, dlc: "" }
    ]
  },

  /* ================= ARMOR ================= */
  armor: {
    body: [
      { name: "Tattered Sackcloth", armor: 5,  fatigue: 0,  worth: 0,   dlc: "", notes: "" },
      { name: "Sackcloth",          armor: 10, fatigue: 0,  worth: 20,  dlc: "", notes: "" },
      { name: "Linen Tunic",        armor: 20, fatigue: 0,  worth: 45,  dlc: "", notes: "" },
      { name: "Cloth Sash",         armor: 20, fatigue: 0,  worth: 30,  dlc: "Blazing Deserts", notes: "" },
      { name: "Leather Wraps",      armor: 20, fatigue: 0,  worth: 40,  dlc: "", notes: "Wildmen" },
      { name: "Monk's Robe",        armor: 20, fatigue: 0,  worth: 45,  dlc: "", notes: "Monks" },
      { name: "Noble Tunic",        armor: 20, fatigue: 0,  worth: 100, dlc: "", notes: "Pimps" },
      { name: "Wizard's Robe",      armor: 20, fatigue: 0,  worth: 60,  dlc: "", notes: "Event item" },
      { name: "Apron",              armor: 25, fatigue: 0,  worth: 55,  dlc: "", notes: "" },
      { name: "Butcher's Apron",    armor: 25, fatigue: 0,  worth: 55,  dlc: "", notes: "Butchers" },
      { name: "Undertaker's Apron", armor: 30, fatigue: 0,  worth: 65,  dlc: "Of Flesh and Faith", notes: "Anatomists" },
      { name: "Leather Tunic",      armor: 30, fatigue: 0,  worth: 65,  dlc: "", notes: "" },
      { name: "Thick Furs",         armor: 30, fatigue: -1, worth: 40,  dlc: "Warriors of the North", notes: "Barbarian Thrall" },
      { name: "Nomad Robe",         armor: 30, fatigue: -2, worth: 50,  dlc: "Blazing Deserts", notes: "" },
      { name: "Dark Thick Tunic",   armor: 35, fatigue: -2, worth: 75,  dlc: "", notes: "Necromancers" },
      { name: "Thick Tunic",        armor: 35, fatigue: -3, worth: 75,  dlc: "", notes: "" },
      { name: "Gladiator Harness",  armor: 40, fatigue: -4, worth: 150, dlc: "Blazing Deserts", notes: "Pairs with attachment" },
      { name: "Animal Hide Armor",  armor: 45, fatigue: -3, worth: 80,  dlc: "Warriors of the North", notes: "Barbarian Thrall" },
      { name: "Padded Surcoat",     armor: 50, fatigue: -4, worth: 90,  dlc: "", notes: "" },
      { name: "Thick Nomad Robe",   armor: 50, fatigue: -5, worth: 80,  dlc: "Blazing Deserts", notes: "" },
      { name: "Rugged Surcoat",     armor: 55, fatigue: -6, worth: 100, dlc: "", notes: "" },
      { name: "Dark Rugged Surcoat",armor: 60, fatigue: -4, worth: 100, dlc: "", notes: "Necromancers" },
      { name: "Padded Vest",        armor: 60, fatigue: -5, worth: 140, dlc: "Blazing Deserts", notes: "" },
      { name: "Wanderer's Coat",    armor: 65, fatigue: -5, worth: 180, dlc: "Of Flesh and Faith", notes: "Anatomists" },
      { name: "Gambeson",           armor: 65, fatigue: -6, worth: 150, dlc: "", notes: "" },
      { name: "Leather Nomad Robe", armor: 65, fatigue: -7, worth: 140, dlc: "Blazing Deserts", notes: "Nomad Outlaws" },
      { name: "Reinforced Animal Hide Armor", armor: 65, fatigue: -7, worth: 120, dlc: "Warriors of the North", notes: "Barbarian Reaver" },
      { name: "Blotched Gambeson",  armor: 70, fatigue: -8, worth: 160, dlc: "", notes: "Brigand Thugs/Marksmen" },
      { name: "Linothorax",         armor: 75, fatigue: -7, worth: 180, dlc: "Blazing Deserts", notes: "Conscripts" },
      { name: "Scrap Metal Armor",  armor: 75, fatigue: -8, worth: 130, dlc: "Warriors of the North", notes: "Barbarian Reaver" },
      { name: "Padded Leather",     armor: 80, fatigue: -8, worth: 200, dlc: "", notes: "Brigand Raiders" },
      { name: "Stitched Nomad Armor",armor: 80, fatigue: -8, worth: 200, dlc: "Blazing Deserts", notes: "Nomad Outlaws" },
      { name: "Cultist Leather Robe",armor: 88, fatigue: -9, worth: 240, dlc: "Warriors of the North", notes: "Cultists" },
      { name: "Patched Mail Shirt", armor: 90, fatigue: -10, worth: 250, dlc: "", notes: "Brigand Raiders, Mercenaries" },
      { name: "Leather Lamellar Armor", armor: 95, fatigue: -10, worth: 300, dlc: "", notes: "Brigand Raiders" },
      { name: "Hide and Bone Armor",armor: 95, fatigue: -10, worth: 220, dlc: "Warriors of the North", notes: "Barbarian Reaver" },
      { name: "Reinforced Leather Armor", armor: 100, fatigue: -9,  worth: 500, dlc: "Of Flesh and Faith", notes: "Anatomists" },
      { name: "Direwolf Hide Armor",armor: 100, fatigue: -9,  worth: 500, dlc: "Beasts & Exploration", notes: "" },
      { name: "Ancient Mail",       armor: 100, fatigue: -14, worth: 350, dlc: "", notes: "Ancient Legionary" },
      { name: "Plated Nomad Mail",  armor: 105, fatigue: -11, worth: 350, dlc: "Blazing Deserts", notes: "Nomad Outlaws/Leaders" },
      { name: "Southern Mail Shirt",armor: 110, fatigue: -11, worth: 400, dlc: "Blazing Deserts", notes: "Conscripts" },
      { name: "Worn Mail Shirt",    armor: 110, fatigue: -12, worth: 400, dlc: "", notes: "Brigand Raiders" },
      { name: "Basic Mail Shirt",   armor: 115, fatigue: -12, worth: 450, dlc: "", notes: "Mercenaries, Noble House Forces" },
      { name: "Assassin's Robe",    armor: 120, fatigue: -9,  worth: 1400,dlc: "Blazing Deserts", notes: "Assassins, Blade Dancers" },
      { name: "Ancient Double Layer Mail", armor: 120, fatigue: -16, worth: 450, dlc: "", notes: "Ancient Legionary" },
      { name: "Ancient Scale Harness", armor: 125, fatigue: -20, worth: 750, dlc: "", notes: "Ancient Legionary" },
      { name: "Mail Shirt",         armor: 130, fatigue: -14, worth: 650, dlc: "", notes: "Brigand Leaders, Noble House Forces" },
      { name: "Mail with Lamellar Plating", armor: 135, fatigue: -15, worth: 750, dlc: "Blazing Deserts", notes: "Officers" },
      { name: "Ancient Breastplate",       armor: 135, fatigue: -22, worth: 900,  dlc: "", notes: "Ancient Legionary" },
      { name: "Direwolf Mail Armor",       armor: 140, fatigue: -13, worth: 900,  dlc: "Beasts & Exploration", notes: "Crafted" },
      { name: "Leather Scale Armor",       armor: 140, fatigue: -16, worth: 800,  dlc: "Beasts & Exploration", notes: "Mercenaries, Swordmaster" },
      { name: "Rugged Scale Armor",        armor: 140, fatigue: -18, worth: 550,  dlc: "Warriors of the North", notes: "Barbarian Chosen" },
      { name: "Adorned Mail Shirt",        armor: 150, fatigue: -16, worth: 1050, dlc: "Of Flesh and Faith", notes: "Oathtakers" },
      { name: "Mail Hauberk",              armor: 150, fatigue: -18, worth: 1000, dlc: "", notes: "Mercenaries, Footmen, Sergeants" },
      { name: "Noble Mail",                armor: 160, fatigue: -15, worth: 2500, dlc: "Beasts & Exploration", notes: "Sold at Armorer" },
      { name: "Light Scale Armor",         armor: 170, fatigue: -21, worth: 1300, dlc: "Beasts & Exploration", notes: "Brigand Leaders, Mercenaries" },
      { name: "Heavy Iron Armor",          armor: 170, fatigue: -24, worth: 700,  dlc: "Warriors of the North", notes: "Barbarian Chosen" },
      { name: "Decayed Reinforced Mail Hauberk", armor: 170, fatigue: -26, worth: 1000, dlc: "", notes: "Fallen Hero" },
      { name: "Ancient Plated Mail Hauberk",armor: 180, fatigue: -22, worth: 2000, dlc: "", notes: "Ancient Honor Guard" },
      { name: "Footman's Armor",           armor: 190, fatigue: -24, worth: 1600, dlc: "Beasts & Exploration", notes: "Mercenaries, Zweihanders" },
      { name: "Ancient Scale Coat",        armor: 190, fatigue: -25, worth: 2400, dlc: "", notes: "Ancient Honor Guard" },
      { name: "Adorned Warrior's Armor",   armor: 200, fatigue: -22, worth: 1600, dlc: "Of Flesh and Faith", notes: "Oathtakers" },
      { name: "Southern Long Mail Shirt with Padding", armor: 200, fatigue: -25, worth: 1800, dlc: "Blazing Deserts", notes: "Nomad Leaders, Officers" },
      { name: "Ancient Plate Harness",     armor: 200, fatigue: -28, worth: 2800, dlc: "", notes: "Ancient Honor Guard" },
      { name: "Reinforced Mail Hauberk",   armor: 210, fatigue: -26, worth: 2000, dlc: "", notes: "Hedge Knights, Sergeants, Knights" },
      { name: "Ancient Plated Scale Hauberk", armor: 210, fatigue: -30, worth: 3200, dlc: "", notes: "Ancient Honor Guard" },
      { name: "Lamellar Harness",          armor: 230, fatigue: -30, worth: 3000, dlc: "", notes: "Mercenaries" },
      { name: "Thick Plated Barbarian Armor", armor: 230, fatigue: -35, worth: 1200, dlc: "Warriors of the North", notes: "Barbarian Chosen" },
      { name: "Scale Armor",               armor: 240, fatigue: -28, worth: 4000, dlc: "", notes: "Zweihanders" },
      { name: "Decayed Coat of Scales",    armor: 240, fatigue: -36, worth: 3000, dlc: "", notes: "Fallen Hero" },
      { name: "Heraldic Hauberk",          armor: 250, fatigue: -26, worth: 4000, dlc: "", notes: "Allied Nobles ambition / Civil War event" },
      { name: "Sellsword's Armor",         armor: 260, fatigue: -32, worth: 4500, dlc: "Beasts & Exploration", notes: "Mercenaries" },
      { name: "Decayed Coat of Plates",    armor: 260, fatigue: -42, worth: 4000, dlc: "", notes: "Fallen Hero" },
      { name: "Heavy Lamellar Armor",      armor: 285, fatigue: -40, worth: 5000, dlc: "", notes: "Hedge Knights" },
      { name: "Padded Mail and Lamellar Hauberk", armor: 290, fatigue: -36, worth: 5600, dlc: "Blazing Deserts", notes: "Officers" },
      { name: "Adorned Heavy Mail Hauberk",armor: 300, fatigue: -34, worth: 6000, dlc: "Of Flesh and Faith", notes: "Oathtakers, Oathbringers" },
      { name: "Coat of Scales",            armor: 300, fatigue: -38, worth: 6000, dlc: "", notes: "Hedge Knights, Knights" },
      { name: "Coat of Plates",            armor: 320, fatigue: -42, worth: 7000, dlc: "", notes: "Hedge Knights, Knights" }
    ],
    head: [
      { name: "Mouthpiece",          armor: 10, fatigue: 0,  vision: 0,  worth: 15,  dlc: "", notes: "Miners" },
      { name: "Headscarf",           armor: 20, fatigue: 0,  vision: 0,  worth: 30,  dlc: "", notes: "" },
      { name: "Hood",                armor: 30, fatigue: 0,  vision: 0,  worth: 40,  dlc: "", notes: "" },
      { name: "Straw Hat",           armor: 30, fatigue: 0,  vision: 0,  worth: 60,  dlc: "", notes: "" },
      { name: "Nomad Head Wrap",     armor: 30, fatigue: 0,  vision: 0,  worth: 40,  dlc: "Blazing Deserts", notes: "" },
      { name: "Southern Head Wrap",  armor: 30, fatigue: 0,  vision: 0,  worth: 50,  dlc: "Blazing Deserts", notes: "" },
      { name: "Hunter's Hat",        armor: 30, fatigue: 0,  vision: 0,  worth: 70,  dlc: "", notes: "Hunters" },
      { name: "Feathered Hat",       armor: 30, fatigue: 0,  vision: 0,  worth: 80,  dlc: "", notes: "" },
      { name: "Leather Headband",    armor: 30, fatigue: 0,  vision: 0,  worth: 30,  dlc: "Warriors of the North", notes: "Barbarian Thrall/Reaver" },
      { name: "Engineer's Hat",      armor: 30, fatigue: 0,  vision: 0,  worth: 50,  dlc: "Blazing Deserts", notes: "Engineers" },
      { name: "Gunner's Hat",        armor: 30, fatigue: 0,  vision: 0,  worth: 50,  dlc: "Blazing Deserts", notes: "Gunners" },
      { name: "Jester's Hat",        armor: 30, fatigue: 0,  vision: 0,  worth: 70,  dlc: "", notes: "Jugglers" },
      { name: "Cultist Hood",        armor: 30, fatigue: 0,  vision: -1, worth: 20,  dlc: "", notes: "Cultists" },
      { name: "Undertaker's Hat",    armor: 40, fatigue: 0,  vision: 0,  worth: 120, dlc: "Of Flesh and Faith", notes: "Anatomists" },
      { name: "Witchhunter's Hat",   armor: 40, fatigue: 0,  vision: 0,  worth: 100, dlc: "", notes: "Witchhunters" },
      { name: "Dark Cowl",           armor: 40, fatigue: 0,  vision: 0,  worth: 100, dlc: "", notes: "Necromancers" },
      { name: "Assassin's Head Wrap",armor: 40, fatigue: 0,  vision: 0,  worth: 60,  dlc: "Blazing Deserts", notes: "Assassins" },
      { name: "Aketon Cap",          armor: 40, fatigue: -1, vision: 0,  worth: 70,  dlc: "", notes: "" },
      { name: "Open Leather Cap",    armor: 40, fatigue: -2, vision: 0,  worth: 60,  dlc: "", notes: "" },
      { name: "Leather Head Wrap",   armor: 40,  fatigue: -2,  vision: 0,  worth: 60,   dlc: "Blazing Deserts", notes: "" },
      { name: "Desert Stalker's Head Wrap", armor: 45, fatigue: 0, vision: 0, worth: 120, dlc: "Blazing Deserts", notes: "Desert Stalkers" },
      { name: "Full Leather Cap",    armor: 45,  fatigue: -3,  vision: 0,  worth: 80,   dlc: "", notes: "" },
      { name: "Full Aketon Cap",     armor: 50,  fatigue: -2,  vision: 0,  worth: 100,  dlc: "", notes: "" },
      { name: "Nomad Leather Cap",   armor: 50,  fatigue: -2,  vision: 0,  worth: 110,  dlc: "Blazing Deserts", notes: "" },
      { name: "Bear Headpiece",      armor: 50,  fatigue: -3,  vision: 0,  worth: 100,  dlc: "Warriors of the North", notes: "Barbarian Thrall/Reaver" },
      { name: "Blade Dancer's Head Wrap", armor: 60, fatigue: -1, vision: 0, worth: 150, dlc: "Blazing Deserts", notes: "Blade Dancers" },
      { name: "Cultist Leather Hood",armor: 60,  fatigue: -3,  vision: -1, worth: 140,  dlc: "", notes: "Cultists" },
      { name: "The Fangshire",       armor: 60,  fatigue: -5,  vision: 0,  worth: 300,  dlc: "Supporter Edition", notes: "See at night; no night penalties" },
      { name: "Nomad Light Helmet",  armor: 70,  fatigue: -3,  vision: 0,  worth: 140,  dlc: "Blazing Deserts", notes: "" },
      { name: "Physician's Mask",    armor: 70,  fatigue: -3,  vision: -1, worth: 170,  dlc: "Of Flesh and Faith", notes: "Anatomists; -50% Miasma dmg" },
      { name: "Duelist's Hat",       armor: 70,  fatigue: -3,  vision: 0,  worth: 200,  dlc: "", notes: "Swordmasters, Zweihanders" },
      { name: "Rusty Mail Coif",     armor: 70,  fatigue: -4,  vision: 0,  worth: 150,  dlc: "", notes: "Brigand Raiders" },
      { name: "Mail Coif",           armor: 80,  fatigue: -4,  vision: 0,  worth: 200,  dlc: "", notes: "Mercenaries, Bounty Hunters, Noble House" },
      { name: "Closed Mail Coif",    armor: 90,  fatigue: -4,  vision: 0,  worth: 250,  dlc: "", notes: "Brigand Leaders, Mercenaries" },
      { name: "Ancient Household Helmet", armor: 95, fatigue: -8, vision: -1, worth: 250, dlc: "", notes: "Graverobbers, Ancient Auxiliary" },
      { name: "Reinforced Mail Coif",armor: 100, fatigue: -5,  vision: -1, worth: 300,  dlc: "", notes: "Mercenaries, Bounty Hunters" },
      { name: "Nasal Helmet",        armor: 105, fatigue: -5,  vision: -1, worth: 350,  dlc: "", notes: "Brigand Raiders, Mercenaries, Noble House" },
      { name: "Wrapped Southern Helmet", armor: 105, fatigue: -5, vision: -1, worth: 350, dlc: "Blazing Deserts", notes: "" },
      { name: "Leather Helmet",      armor: 105, fatigue: -6,  vision: -1, worth: 320,  dlc: "Warriors of the North", notes: "Barbarian Reaver" },
      { name: "Heavy Mail Coif",     armor: 110, fatigue: -5,  vision: 0,  worth: 375,  dlc: "Of Flesh and Faith", notes: "Oathtakers" },
      { name: "Padded Dented Nasal Helmet", armor: 110, fatigue: -7, vision: -1, worth: 350, dlc: "", notes: "Brigand Raiders" },
      { name: "Kettle Hat",          armor: 115, fatigue: -6,  vision: -1, worth: 450,  dlc: "", notes: "Mercenaries, Bounty Hunters, Noble House" },
      { name: "Sallet Helmet",       armor: 120, fatigue: -5,  vision: 0,  worth: 1200, dlc: "Beasts & Exploration", notes: "Best archer helm w/o Eagle Eyes" },
      { name: "Masked Kettle Helmet",armor: 120, fatigue: -6,  vision: -2, worth: 550,  dlc: "Of Flesh and Faith", notes: "Anatomists" },
      { name: "Flat Top Helmet",     armor: 125, fatigue: -7,  vision: -1, worth: 500,  dlc: "", notes: "Mercenaries, Noble House" },
      { name: "Nordic Helmet",       armor: 125, fatigue: -7,  vision: -1, worth: 500,  dlc: "Warriors of the North", notes: "Mercenaries, Bounty Hunters" },
      { name: "Spiked Skull Cap with Mail", armor: 125, fatigue: -7, vision: -1, worth: 500, dlc: "Blazing Deserts", notes: "" },
      { name: "Nomad Reinforced Helmet", armor: 125, fatigue: -8, vision: -1, worth: 450, dlc: "Blazing Deserts", notes: "" },
      { name: "Padded Nasal Helmet", armor: 130, fatigue: -7,  vision: -1, worth: 550,  dlc: "", notes: "Brigand Leaders, Mercenaries, Noble House" },
      { name: "Beastmaster's Headpiece", armor: 130, fatigue: -8, vision: -1, worth: 350, dlc: "Warriors of the North", notes: "Barbarian Beastmaster" },
      { name: "Ancient Legionary Helmet", armor: 130, fatigue: -10, vision: -2, worth: 600, dlc: "", notes: "Ancient Legionary" },
      { name: "Assassin's Face Mask",armor: 140, fatigue: -6,  vision: -1, worth: 1800, dlc: "Blazing Deserts", notes: "Assassins" },
      { name: "Padded Kettle Hat",   armor: 140, fatigue: -8,  vision: -1, worth: 650,  dlc: "", notes: "Brigand Leaders, Mercenaries, Noble House" },
      { name: "Nasal Helmet with Rusty Mail", armor: 140, fatigue: -9, vision: -2, worth: 600, dlc: "", notes: "Brigand Raiders" },
      { name: "Crude Metal Helmet",  armor: 145, fatigue: -11, vision: -1, worth: 550,  dlc: "Warriors of the North", notes: "Barbarian Reaver/Chosen" },
      { name: "Padded Flat Top Helmet", armor: 150, fatigue: -9, vision: -1, worth: 800, dlc: "", notes: "Brigand Leaders, Mercenaries, Noble House" },
      { name: "Zweihander's Helmet", armor: 160, fatigue: -7,  vision: -1, worth: 850,  dlc: "", notes: "Zweihanders" },
      { name: "Crude Faceguard Helmet", armor: 160, fatigue: -15, vision: -2, worth: 650, dlc: "Warriors of the North", notes: "Barbarian Chosen" },
      { name: "Closed Flat Top Helmet", armor: 170, fatigue: -10, vision: -3, worth: 1000, dlc: "", notes: "Mercenaries" },
      { name: "Closed and Padded Flat Top", armor: 180, fatigue: -11, vision: -3, worth: 1100, dlc: "", notes: "Sold at Armorer" },
      { name: "Ancient Honor Guard Helmet", armor: 180, fatigue: -13, vision: -3, worth: 1000, dlc: "", notes: "Ancient Honor Guard" },
      { name: "Barbute Helmet",      armor: 190, fatigue: -9,  vision: -2, worth: 2600, dlc: "Beasts & Exploration", notes: "Sold at Armorer" },
      { name: "Closed Scrap Metal Helmet", armor: 190, fatigue: -18, vision: -2, worth: 800, dlc: "Warriors of the North", notes: "Barbarian Chosen" },
      { name: "Nasal Helmet with Mail", armor: 200, fatigue: -12, vision: -2, worth: 1250, dlc: "", notes: "Brigand Leaders, Mercenaries, Swordmasters, Noble House" },
      { name: "Steppe Helmet with Mail", armor: 200, fatigue: -12, vision: -2, worth: 1250, dlc: "Warriors of the North", notes: "Mercenaries" },
      { name: "Southern Helmet with Coif", armor: 200, fatigue: -12, vision: -2, worth: 1250, dlc: "Blazing Deserts", notes: "" },
      { name: "Bascinet with Mail",  armor: 210, fatigue: -13, vision: -2, worth: 1400, dlc: "", notes: "Brigand Leaders, Mercenaries" },
      { name: "Kettle Hat with Mail",armor: 215, fatigue: -14, vision: -2, worth: 1500, dlc: "", notes: "Brigand Leaders, Mercenaries, Bounty Hunters, Noble House" },
      { name: "Gladiator Helmet",    armor: 225, fatigue: -13, vision: -3, worth: 2200, dlc: "Blazing Deserts", notes: "Gladiators" },
      { name: "Flat Top with Mail",  armor: 230, fatigue: -15, vision: -2, worth: 1800, dlc: "", notes: "Brigand Leaders, Mercenaries, Noble House" },
      { name: "Decayed Closed Flat Top With Mail", armor: 230, fatigue: -19, vision: -3, worth: 1250, dlc: "", notes: "Fallen Hero" },
      { name: "Covered Decayed Closed Flat Top With Mail", armor: 230, fatigue: -19, vision: -3, worth: 1250, dlc: "", notes: "Fallen Hero" },
      { name: "Nasal Helmet with Closed Mail", armor: 240, fatigue: -16, vision: -2, worth: 2000, dlc: "", notes: "Sold at Armorer" },
      { name: "Decayed Full Helm",   armor: 240, fatigue: -20, vision: -3, worth: 1500, dlc: "", notes: "Fallen Hero" },
      { name: "Adorned Closed Flat Top", armor: 250, fatigue: -15, vision: -3, worth: 2000, dlc: "Of Flesh and Faith", notes: "Oathtakers, Oathbringers" },
      { name: "Kettle Hat with Closed Mail", armor: 250, fatigue: -17, vision: -2, worth: 2200, dlc: "", notes: "Brigand Leaders" },
      { name: "Heavy Horned Plate Helmet", armor: 250, fatigue: -23, vision: -3, worth: 1300, dlc: "Warriors of the North", notes: "Barbarian King" },
      { name: "Heavy Lamellar Helmet", armor: 255, fatigue: -17, vision: -2, worth: 2500, dlc: "Blazing Deserts", notes: "Officers" },
      { name: "Decayed Great Helm",  armor: 255, fatigue: -22, vision: -3, worth: 2000, dlc: "", notes: "Fallen Hero" },
      { name: "Nordic Helmet with Closed Mail", armor: 265, fatigue: -18, vision: -2, worth: 2600, dlc: "Warriors of the North", notes: "Sold at Armorer" },
      { name: "Conic Helmet with Closed Mail", armor: 265, fatigue: -18, vision: -2, worth: 2600, dlc: "Warriors of the North", notes: "Sold at Armorer" },
      { name: "Flat Top with Closed Mail", armor: 265, fatigue: -18, vision: -2, worth: 2600, dlc: "", notes: "Sold at Armorer" },
      { name: "Conic Helmet with Faceguard", armor: 280, fatigue: -19, vision: -3, worth: 3000, dlc: "Warriors of the North", notes: "Sold at Armorer" },
      { name: "Closed Flat Top with Mail", armor: 280, fatigue: -19, vision: -3, worth: 3000, dlc: "", notes: "Hedge Knights" },
      { name: "Turban Helmet",       armor: 290, fatigue: -20, vision: -3, worth: 3200, dlc: "Blazing Deserts", notes: "" },
      { name: "Adorned Full Helm",   armor: 300, fatigue: -18, vision: -3, worth: 3700, dlc: "Of Flesh and Faith", notes: "Oathtakers, Oathbringers" },
      { name: "Full Helm",           armor: 300, fatigue: -20, vision: -3, worth: 3500, dlc: "", notes: "Hedge Knights, Noble House Knights" },
      { name: "Decorated Full Helm", armor: 320, fatigue: -21, vision: -3, worth: 4000, dlc: "", notes: "Allied Nobles ambition; Noble House Knights" }
    ]
  },

  shields: [
    { name: "Buckler",                     durability: 16, fatigue: -4,  meleeDef: 10, rangedDef: 5,  worth: 45,   dlc: "", notes: "No Shieldwall skill" },
    { name: "Wooden Skirmisher Shield",    durability: 12, fatigue: -4,  meleeDef: 10, rangedDef: 10, worth: 45,   dlc: "", notes: "No Knock Back" },
    { name: "Reinforced Skirmisher Shield",durability: 16, fatigue: -8,  meleeDef: 10, rangedDef: 10, worth: 65,   dlc: "", notes: "No Knock Back" },
    { name: "Old Wooden Shield",           durability: 16, fatigue: -10, meleeDef: 15, rangedDef: 15, worth: 60,   dlc: "", notes: "" },
    { name: "Ancient Auxiliary Shield",    durability: 16, fatigue: -10, meleeDef: 15, rangedDef: 15, worth: 80,   dlc: "", notes: "Ancient Auxiliary" },
    { name: "Wooden Shield",               durability: 24, fatigue: -10, meleeDef: 15, rangedDef: 15, worth: 100,  dlc: "", notes: "Common factions" },
    { name: "Heavy Metal Shield",          durability: 72, fatigue: -22, meleeDef: 15, rangedDef: 15, worth: 250,  dlc: "", notes: "Orc; +5 fat on shield skills for humans" },
    { name: "Feral Shield",                durability: 16, fatigue: -12, meleeDef: 15, rangedDef: 20, worth: 50,   dlc: "", notes: "Orc Youngs" },
    { name: "Adarga Shield",               durability: 18, fatigue: -10, meleeDef: 15, rangedDef: 20, worth: 100,  dlc: "Blazing Deserts", notes: "Southern" },
    { name: "Ancient Coffin Shield",       durability: 20, fatigue: -12, meleeDef: 15, rangedDef: 20, worth: 100,  dlc: "", notes: "Ancient Legionary" },
    { name: "Worn Kite Shield",            durability: 40, fatigue: -16, meleeDef: 15, rangedDef: 20, worth: 150,  dlc: "", notes: "Fallen Heroes" },
    { name: "Kite Shield",                 durability: 48, fatigue: -16, meleeDef: 15, rangedDef: 25, worth: 200,  dlc: "", notes: "Common factions" },
    { name: "Lindwurm Shield",             durability: 64, fatigue: -14, meleeDef: 17, rangedDef: 25, worth: 800,  dlc: "Beasts & Exploration", notes: "Crafted" },
    { name: "Sipar Shield",                durability: 60, fatigue: -18, meleeDef: 18, rangedDef: 18, worth: 250,  dlc: "Blazing Deserts", notes: "Southern" },
    { name: "Decayed Heater Shield",       durability: 24, fatigue: -14, meleeDef: 20, rangedDef: 15, worth: 150,  dlc: "", notes: "Fallen Heroes" },
    { name: "Heater Shield",               durability: 32, fatigue: -14, meleeDef: 20, rangedDef: 15, worth: 250,  dlc: "", notes: "Common factions" },
    { name: "Living Tree Shield",          durability: 40, fatigue: -12, meleeDef: 20, rangedDef: 17, worth: 1000, dlc: "Beasts & Exploration", notes: "Crafted; regens 50% dur/turn" },
    { name: "Ancient Tower Shield",        durability: 24, fatigue: -20, meleeDef: 20, rangedDef: 20, worth: 200,  dlc: "", notes: "Ancient Legionary / Honor Guard" },
    { name: "Kraken Shield",               durability: 50, fatigue: -15, meleeDef: 24, rangedDef: 24, worth: 1200, dlc: "Beasts & Exploration", notes: "Crafted" }
  ],

  /* ================= RANGED (complete) ================= */
  ranged: {
    bows: [
      { name: "Wonky Bow",               worth: 100,  dmgMin: 30, dmgMax: 50, ignoreArmor: 35, vsArmor: 50, range: 7, durability: 48,  fatigue: -6, dlc: "" },
      { name: "Boondock Bow",            worth: 250,  dmgMin: 25, dmgMax: 40, ignoreArmor: 35, vsArmor: 55, range: 6, durability: 52,  fatigue: -3, dlc: "" },
      { name: "Short Bow",               worth: 200,  dmgMin: 30, dmgMax: 50, ignoreArmor: 35, vsArmor: 50, range: 7, durability: 60,  fatigue: -4, dlc: "" },
      { name: "Reinforced Boondock Bow", worth: 500,  dmgMin: 30, dmgMax: 50, ignoreArmor: 35, vsArmor: 60, range: 7, durability: 62,  fatigue: -4, dlc: "" },
      { name: "Composite Bow",           worth: 400,  dmgMin: 40, dmgMax: 55, ignoreArmor: 35, vsArmor: 70, range: 6, durability: 80,  fatigue: -6, dlc: "Blazing Deserts" },
      { name: "Hunting Bow",             worth: 600,  dmgMin: 40, dmgMax: 60, ignoreArmor: 35, vsArmor: 55, range: 7, durability: 80,  fatigue: -6, dlc: "" },
      { name: "War Bow",                 worth: 2900, dmgMin: 50, dmgMax: 70, ignoreArmor: 35, vsArmor: 60, range: 7, durability: 100, fatigue: -6, dlc: "" },
      { name: "Masterwork Bow",          worth: 3500, dmgMin: 50, dmgMax: 75, ignoreArmor: 35, vsArmor: 65, range: 7, durability: 110, fatigue: -6, dlc: "event reward" }
    ],
    crossbows: [
      { name: "Light Crossbow", worth: 300,  dmgMin: 30, dmgMax: 50, ignoreArmor: 50, vsArmor: 60, range: 6, durability: 40, fatigue: -6,  dlc: "" },
      { name: "Crossbow",       worth: 750,  dmgMin: 40, dmgMax: 60, ignoreArmor: 50, vsArmor: 70, range: 6, durability: 48, fatigue: -8,  dlc: "" },
      { name: "Heavy Crossbow", worth: 3200, dmgMin: 50, dmgMax: 70, ignoreArmor: 50, vsArmor: 75, range: 6, durability: 64, fatigue: -12, dlc: "" },
      { name: "Spiked Impaler", worth: 2000, dmgMin: 50, dmgMax: 70, ignoreArmor: 50, vsArmor: 75, range: 6, durability: 72, fatigue: -10, dlc: "" }
    ],
    firearms: [
      { name: "Handgonne", worth: 3000, dmgMin: 35, dmgMax: 75, ignoreArmor: 25, vsArmor: 90, range: 2, durability: 60, fatigue: -14, dlc: "Blazing Deserts" }
    ],
    throwing: [
      { name: "Bundle of Spiked Bolas",        worth: 200, dmgMin: 20, dmgMax: 35, ignoreArmor: 40, vsArmor: 70,  range: 4, fatigue: -3, hit: "±0%", dlc: "" },
      { name: "Bundle of Crude Javelins",      worth: 150, dmgMin: 30, dmgMax: 40, ignoreArmor: 45, vsArmor: 70,  range: 4, fatigue: -8, hit: "±0%", dlc: "" },
      { name: "Bundle of Javelins",            worth: 200, dmgMin: 30, dmgMax: 45, ignoreArmor: 45, vsArmor: 75,  range: 4, fatigue: -6, hit: "±0%", dlc: "" },
      { name: "Bundle of Heavy Javelins",      worth: 300, dmgMin: 35, dmgMax: 50, ignoreArmor: 45, vsArmor: 80,  range: 4, fatigue: -8, hit: "-5%",  dlc: "Warriors of the North" },
      { name: "Bundle of Throwing Axes",       worth: 200, dmgMin: 25, dmgMax: 40, ignoreArmor: 30, vsArmor: 110, range: 4, fatigue: -4, hit: "±0%", dlc: "" },
      { name: "Bundle of Heavy Throwing Axes", worth: 300, dmgMin: 30, dmgMax: 50, ignoreArmor: 30, vsArmor: 115, range: 4, fatigue: -6, hit: "-5%",  dlc: "Warriors of the North" },
      { name: "Throwing Spear",                worth: 80,  dmgMin: 45, dmgMax: 70, ignoreArmor: 45, vsArmor: 110, range: 4, fatigue: -6, hit: "±0%", dlc: "Beasts & Exploration" },
      { name: "Staff Sling",                   worth: 150, dmgMin: 25, dmgMax: 40, ignoreArmor: 35, vsArmor: 50,  range: 6, fatigue: -4, hit: "±0%", dlc: "Warriors of the North" },
      { name: "Nomad Sling",                   worth: 300, dmgMin: 35, dmgMax: 50, ignoreArmor: 35, vsArmor: 60,  range: 6, fatigue: -6, hit: "±0%", dlc: "Blazing Deserts" }
    ],
    throwable: [
      { name: "Throwing Net",            worth: 50,  range: 3, fatigue: -2, dlc: "", usage: "Roots a target, lowers its defenses and initiative." },
      { name: "Reinforced Throwing Net", worth: 150, range: 3, fatigue: -2, dlc: "Beasts & Exploration", usage: "As Throwing Net; needs higher Melee Skill to break free." },
      { name: "Acid Flask",              worth: 400, range: 3, fatigue: 0,  dlc: "Beasts & Exploration", usage: "-20% body & head armor per turn for 3 turns." },
      { name: "Flask of Blessed Water",  worth: 100, range: 3, fatigue: 0,  dlc: "", usage: "20 HP/turn for 3 turns to undead, ignores armor." },
      { name: "Fire Pot",                worth: 600, range: 3, fatigue: 0,  dlc: "Blazing Deserts", usage: "Burning area; anyone ending their turn inside catches fire." },
      { name: "Smoke Pot",               worth: 400, range: 3, fatigue: 0,  dlc: "Blazing Deserts", usage: "Smokes 7 tiles for a round; ignore zones of control inside." },
      { name: "Flash Pot",               worth: 500, range: 3, fatigue: 0,  dlc: "Blazing Deserts", usage: "Dazes up to 7 targets for 2 turns." }
    ]
  },

  /* firing skills: accuracy & range falloff */
  rangedSkills: [
    { skill: "Quick Shot (Bow)",        ap: 4, fatigue: 15, hitMod: "+0%",  perTile: "-4% / tile", direct: "35%", note: "Can fire twice; -1 range vs Aimed Shot." },
    { skill: "Aimed Shot (Bow)",        ap: 7, fatigue: 20, hitMod: "+10%", perTile: "-2% / tile", direct: "40%", note: "+10% damage. The accurate, long-range shot." },
    { skill: "Shoot Bolt (Crossbow)",   ap: 3, fatigue: 5,  hitMod: "+15%", perTile: "-3% / tile", direct: "50%", note: "Highest base accuracy; must Reload (4 AP / 20 fat)." },
    { skill: "Shoot Heavy Bolt",        ap: 3, fatigue: 5,  hitMod: "+10%", perTile: "-3% / tile", direct: "50%", note: "Knocks the target back on hit (Spiked Impaler)." },
    { skill: "Fire Handgonne",          ap: 3, fatigue: 5,  hitMod: "+10%", perTile: "-10% / tile", direct: "25%", note: "Ignores cover/units in the line; can hit 5 tiles behind. Reload 9 AP / 20 fat." },
    { skill: "Throw (Javelin/Axe/Spear)", ap: 4, fatigue: 15, hitMod: "+20%", perTile: "-10% / tile past 2", direct: "30-45%", note: "Big bonus up close, falls off hard past 2 tiles." },
    { skill: "Sling Stone",             ap: 4, fatigue: 15, hitMod: "+0%",  perTile: "-5% / tile", direct: "35%", note: "Dazes on a hit to the head." }
  ],

  namedRanges: {} /* TODO: Named/Famed bonus ranges */
};
