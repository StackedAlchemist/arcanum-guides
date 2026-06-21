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
      { name: "Executioner's Sword", worth: 2900, dmgMin: 95, dmgMax: 110, ignoreArmor: 35, vsArmor: 90,  headChance: "+5%", shieldDmg: 16, durability: 72, fatigue: -12, dlc: "v1.5.2.2 (guide canon)" }
    ],
    axes1h: [
      { name: "Hatchet",            worth: 210,  dmgMin: 25, dmgMax: 40, ignoreArmor: 30, vsArmor: 110, shieldDmg: 8,  durability: 52, fatigue: -6,  dlc: "" },
      { name: "Crude Axe",          worth: 800,  dmgMin: 30, dmgMax: 40, ignoreArmor: 40, vsArmor: 120, shieldDmg: 12, durability: 82, fatigue: -12, dlc: "Warriors of the North" },
      { name: "Handaxe",            worth: 900,  dmgMin: 30, dmgMax: 45, ignoreArmor: 30, vsArmor: 120, shieldDmg: 12, durability: 68, fatigue: -10, dlc: "" },
      { name: "Fighting Axe",       worth: 2800, dmgMin: 35, dmgMax: 55, ignoreArmor: 30, vsArmor: 130, shieldDmg: 16, durability: 80, fatigue: -12, dlc: "" },
      { name: "Head Splitter (Orc)",worth: 1100, dmgMin: 35, dmgMax: 65, ignoreArmor: 30, vsArmor: 130, shieldDmg: 16, durability: 64, fatigue: -22, dlc: "" }
    ],
    axes2h: [], /* TODO: Greataxe, Two-Handed Axe, Bardiche, Orc Greataxe, Axehammer */
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
    flails: [],   /* TODO: Flail, Spiked Flail, Three-Headed Flail, 2H Flail */
    cleavers: [], /* TODO: Cleaver, Hooked Blade, Serpentine Cleaver, 2H Cleaver */
    hammers: [],  /* TODO: Skull Hammer, War Hammer, 2H Hammer/Maul, Barbarian variants */
    polearms: []  /* TODO: Pike, Billhook, Glaive, Longaxe, Bardiche, Pollaxe(canon) */
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
      { name: "Mail with Lamellar Plating", armor: 135, fatigue: -15, worth: 750, dlc: "Blazing Deserts", notes: "Officers" }
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
      { name: "Open Leather Cap",    armor: 40, fatigue: -2, vision: 0,  worth: 60,  dlc: "", notes: "" }
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
