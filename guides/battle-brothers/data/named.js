/* ============================================================
   THE MERCENARY CODEX - Named & Legendary items
   Named items roll randomized bonuses on a base item; the
   tables below are the in-game possible value ranges (min-max)
   extrapolated from the game scripts. Legendary items are fixed
   uniques with special effects.

   Source: Battle Brothers Wiki, Named and Legendary Items (CC-BY-SA).
   Rendered by js/gear-tables.js. Self-attaches to BB_GEAR.

   dur = [min,max] possible durability. Damage/%/fatigue ranges
   are display strings. "" = stat not modified on that item.
   ============================================================ */
window.BB_GEAR = window.BB_GEAR || {};

window.BB_GEAR.named = {
  /* weapon roll rules: durability x0.9-1.4 always, then 2 of:
     regular dmg x1.1-1.3, direct +8-16%, armor +10-30%,
     shield x1.5-2 (if >15), head +10-30% (if >0),
     max-fatigue x0.5-0.8 (if < -9), skill fatigue -1 to -3 */
  weapons1h: [
    { name: "Named Axe",            dur:[72,112], regBase:"35-55", regMax:"46-72", direct:"30-46%", armor:"130-160%", shield:"16-32", head:"", fat:"-12 to -6", worth:4000 },
    { name: "Named Orc Axe",        dur:[58,90],  regBase:"35-65", regMax:"46-85", direct:"30-46%", armor:"130-160%", shield:"16-32", head:"", fat:"-22 to -11", worth:2400 },
    { name: "Named Battle Whip",    dur:[36,56],  regBase:"15-30", regMax:"20-39", direct:"10-26%", armor:"25-55%",   shield:"", head:"", fat:"-6", worth:2200 },
    { name: "Named Cleaver",        dur:[72,112], regBase:"40-60", regMax:"52-78", direct:"25-41%", armor:"90-120%",  shield:"", head:"", fat:"-12 to -6", worth:3800 },
    { name: "Named Khopesh",        dur:[38,59],  regBase:"35-55", regMax:"46-72", direct:"25-41%", armor:"120-150%", shield:"", head:"", fat:"-10 to -5", worth:3200 },
    { name: "Named Orc Cleaver",    dur:[47,73],  regBase:"40-70", regMax:"52-91", direct:"25-41%", armor:"110-140%", shield:"", head:"", fat:"-18 to -9", worth:2400 },
    { name: "Named Dagger",         dur:[45,70],  regBase:"20-40", regMax:"26-52", direct:"20-36%", armor:"70-100%",  shield:"", head:"", fat:"", worth:1500 },
    { name: "Named Qatal Dagger",   dur:[54,84],  regBase:"30-45", regMax:"39-59", direct:"20-36%", armor:"70-100%",  shield:"", head:"", fat:"", worth:3000 },
    { name: "Named Flail",          dur:[65,101], regBase:"25-55", regMax:"33-72", direct:"30-46%", armor:"100-130%", shield:"", head:"10-30%", fat:"-8", worth:3400 },
    { name: "Named Three-Headed Flail", dur:[54,84], regBase:"30-75", regMax:"39-98", direct:"30-46%", armor:"100-130%", shield:"", head:"10-30%", fat:"-10 to -5", worth:3400 },
    { name: "Named Warhammer",      dur:[90,140], regBase:"30-40", regMax:"39-52", direct:"50-66%", armor:"225-255%", shield:"", head:"", fat:"-8", worth:4200 },
    { name: "Named Mace",           dur:[72,112], regBase:"35-55", regMax:"46-72", direct:"40-56%", armor:"110-140%", shield:"", head:"", fat:"-10 to -5", worth:4000 },
    { name: "Named Goblin Skewer",  dur:[32,50],  regBase:"25-35", regMax:"33-46", direct:"25-41%", armor:"70-100%",  shield:"", head:"", fat:"-2", worth:2000 },
    { name: "Named Spear",          dur:[65,101], regBase:"35-40", regMax:"46-52", direct:"25-41%", armor:"100-130%", shield:"", head:"", fat:"-10 to -5", worth:3200 },
    { name: "Named Cruel Falchion", dur:[47,73],  regBase:"35-45", regMax:"46-59", direct:"20-36%", armor:"70-100%",  shield:"", head:"", fat:"-2", worth:2600 },
    { name: "Named Fencing Sword",  dur:[43,67],  regBase:"35-50", regMax:"46-65", direct:"20-36%", armor:"75-105%",  shield:"", head:"", fat:"-4", worth:4000 },
    { name: "Named Shamshir",       dur:[65,101], regBase:"45-50", regMax:"59-65", direct:"20-36%", armor:"75-105%",  shield:"", head:"", fat:"-8", worth:4000 },
    { name: "Named Sword",          dur:[65,101], regBase:"45-50", regMax:"59-65", direct:"20-36%", armor:"85-115%",  shield:"", head:"", fat:"-8", worth:4200 }
  ],
  weapons2h: [
    { name: "Named Bardiche",        dur:[58,90],  regBase:"75-95",  regMax:"98-124",  direct:"40-56%", armor:"130-160%", shield:"24-48", head:"", fat:"-16 to -8", worth:4600 },
    { name: "Named Greataxe",        dur:[65,101], regBase:"80-100", regMax:"104-130", direct:"40-56%", armor:"150-180%", shield:"36-72", head:"", fat:"-16 to -8", worth:4600 },
    { name: "Named Heavy Rusty Axe", dur:[86,134], regBase:"75-90",  regMax:"98-117",  direct:"50-66%", armor:"150-180%", shield:"36-72", head:"", fat:"-16 to -8", worth:3400 },
    { name: "Named Longaxe",         dur:[65,101], regBase:"70-95",  regMax:"91-124",  direct:"30-46%", armor:"110-140%", shield:"24-48", head:"5-25%", fat:"-14 to -7", worth:3000 },
    { name: "Named Crypt Cleaver",   dur:[43,67],  regBase:"60-80",  regMax:"78-104",  direct:"25-41%", armor:"120-150%", shield:"16-32", head:"", fat:"-16 to -8", worth:3200 },
    { name: "Named Rusty Warblade",  dur:[47,73],  regBase:"60-80",  regMax:"78-104",  direct:"35-51%", armor:"110-140%", shield:"16-32", head:"", fat:"-18 to -9", worth:3200 },
    { name: "Named Two-Handed Scimitar", dur:[58,90], regBase:"65-85", regMax:"85-111", direct:"25-41%", armor:"110-140%", shield:"16-32", head:"", fat:"-14 to -7", worth:3200 },
    { name: "Named Two-Handed Flail", dur:[72,112], regBase:"45-90", regMax:"59-117", direct:"30-46%", armor:"115-145%", shield:"", head:"15-35%", fat:"-16 to -8", worth:2800 },
    { name: "Named Polehammer",      dur:[90,140], regBase:"50-75",  regMax:"65-98",   direct:"50-66%", armor:"185-215%", shield:"", head:"5-25%", fat:"-14 to -7", worth:3200 },
    { name: "Named Two-Handed Hammer", dur:[108,168], regBase:"60-90", regMax:"78-117", direct:"50-66%", armor:"200-230%", shield:"26-52", head:"", fat:"-18 to -9", worth:4000 },
    { name: "Named Two-Handed Skull Hammer", dur:[108,168], regBase:"45-65", regMax:"59-85", direct:"60-76%", armor:"180-210%", shield:"26-52", head:"", fat:"-16 to -8", worth:3200 },
    { name: "Named Polemace",        dur:[58,90],  regBase:"60-75",  regMax:"78-98",   direct:"40-56%", armor:"120-150%", shield:"", head:"5-25%", fat:"-14 to -7", worth:2600 },
    { name: "Named Two-Handed Mace", dur:[108,168], regBase:"75-95", regMax:"98-124", direct:"50-66%", armor:"125-155%", shield:"26-52", head:"", fat:"-16 to -8", worth:3400 },
    { name: "Named Two-Handed Spiked Mace", dur:[65,101], regBase:"50-70", regMax:"65-91", direct:"60-76%", armor:"115-145%", shield:"20-40", head:"", fat:"-14 to -7", worth:3000 },
    { name: "Named Billhook",        dur:[65,101], regBase:"55-85",  regMax:"72-111",  direct:"30-46%", armor:"140-170%", shield:"", head:"5-25%", fat:"-14 to -7", worth:3200 },
    { name: "Named Bladed Pike",     dur:[27,42],  regBase:"55-80",  regMax:"72-104",  direct:"30-46%", armor:"125-155%", shield:"", head:"5-25%", fat:"-14 to -7", worth:2200 },
    { name: "Named Jagged Pike",     dur:[36,56],  regBase:"50-70",  regMax:"65-91",   direct:"25-41%", armor:"90-120%",  shield:"", head:"5-25%", fat:"-6", worth:2400 },
    { name: "Named Pike",            dur:[58,90],  regBase:"60-80",  regMax:"78-104",  direct:"30-46%", armor:"100-130%", shield:"", head:"5-25%", fat:"-14 to -7", worth:2800 },
    { name: "Named Swordlance",      dur:[47,73],  regBase:"60-80",  regMax:"78-104",  direct:"30-46%", armor:"90-120%",  shield:"", head:"", fat:"-14 to -7", worth:3200 },
    { name: "Named Warscythe",       dur:[32,50],  regBase:"55-80",  regMax:"72-104",  direct:"30-46%", armor:"105-135%", shield:"", head:"", fat:"-16 to -8", worth:2800 },
    { name: "Named Spetum",          dur:[54,84],  regBase:"55-75",  regMax:"72-98",   direct:"25-41%", armor:"100-130%", shield:"", head:"5-25%", fat:"-14 to -7", worth:2800 },
    { name: "Named Greatsword",      dur:[65,101], regBase:"85-100", regMax:"111-130", direct:"25-41%", armor:"100-130%", shield:"16-32", head:"5-25%", fat:"-12 to -6", worth:4600 },
    { name: "Named Warbrand",        dur:[58,90],  regBase:"50-75",  regMax:"65-98",   direct:"20-36%", armor:"75-105%",  shield:"", head:"5-25%", fat:"-10 to -5", worth:4000 }
  ],
  /* ranged also roll +5-15% accuracy and +1-3 ammo (throwing) */
  ranged: [
    { name: "Named Reinforced Boondock Bow", dur:[56,87], regBase:"30-50", regMax:"39-65", direct:"45-61%", armor:"60-90%",  head:"", fat:"-2", worth:2200 },
    { name: "Named Warbow",     dur:[90,140], regBase:"50-70", regMax:"65-91", direct:"35-51%", armor:"60-90%",  head:"", fat:"-6", worth:4600 },
    { name: "Named Crossbow",   dur:[58,90],  regBase:"50-70", regMax:"65-91", direct:"50-66%", armor:"75-105%", head:"", fat:"-12 to -6", worth:4400 },
    { name: "Named Handgonne",  dur:[54,84],  regBase:"35-75", regMax:"46-98", direct:"25-41%", armor:"90-120%", head:"", fat:"-12 to -6", worth:5000 },
    { name: "Named Javelins",   dur:[0,0],    regBase:"30-45", regMax:"39-59", direct:"45-61%", armor:"75-105%", head:"", fat:"-6", worth:1400 },
    { name: "Named Throwing Axes", dur:[0,0], regBase:"25-40", regMax:"33-52", direct:"30-46%", armor:"110-140%", head:"5-25%", fat:"-4", worth:1400 }
  ],
  /* shields: durability x1.2-1.6, +1 other stat; ranges below */
  shields: [
    { name: "Bandit Heater Shield",       dur:[32,51], mdef:"20-28", rdef:"15-21", fat:"-14 to -10", worth:600 },
    { name: "Metal Heater Shield",        dur:[60,96], mdef:"20-28", rdef:"15-21", fat:"-18 to -13", worth:1000 },
    { name: "Relic Heater Shield",        dur:[32,51], mdef:"20-28", rdef:"15-21", fat:"-14 to -10", worth:1000 },
    { name: "Named Undead Heater Shield", dur:[32,51], mdef:"20-28", rdef:"15-21", fat:"-14 to -10", worth:600 },
    { name: "Winged Shield",              dur:[32,51], mdef:"20-28", rdef:"15-21", fat:"-14 to -10", worth:1000 },
    { name: "Bandit Kite Shield",         dur:[48,77], mdef:"15-21", rdef:"25-35", fat:"-16 to -11", worth:700 },
    { name: "Dragon Kite Shield",         dur:[48,77], mdef:"15-21", rdef:"25-35", fat:"-16 to -11", worth:800 },
    { name: "Pavise Shield",              dur:[48,77], mdef:"15-21", rdef:"25-35", fat:"-16 to -11", worth:800 },
    { name: "Named Undead Kite Shield",   dur:[48,77], mdef:"15-21", rdef:"25-35", fat:"-16 to -11", worth:700 },
    { name: "Named Orc Heavy Shield",     dur:[72,115], mdef:"15-21", rdef:"15-21", fat:"-22 to -15", worth:500 },
    { name: "Golden Round Shield",        dur:[60,96], mdef:"19-27", rdef:"17-24", fat:"-18 to -13", worth:1500 },
    { name: "Named Sipar Shield",         dur:[60,96], mdef:"18-25", rdef:"18-25", fat:"-18 to -13", worth:1500 }
  ],
  /* armor: durability x1.1-1.25 and fatigue +3-9 (cap -8 total) */
  armors: [
    { name: "Hardened Leather Armor",  dur:[126,143], fat:"-9 to -8",   worth:2000 },
    { name: "Plated Fur Armor",        dur:[143,162], fat:"-11 to -8",  worth:4000 },
    { name: "Studded Mail Armor",      dur:[154,175], fat:"-13 to -8",  worth:4000 },
    { name: "Named Noble Mail Armor",  dur:[176,200], fat:"-12 to -8",  worth:5500 },
    { name: "Skull and Chain Armor",   dur:[209,237], fat:"-21 to -15", worth:5500 },
    { name: "Black and Gold Armor",    dur:[231,262], fat:"-22 to -16", worth:9000 },
    { name: "Heraldic Mail Hauberk",   dur:[231,262], fat:"-23 to -17", worth:7000 },
    { name: "Lindwurm Armor",          dur:[231,262], fat:"-23 to -17", worth:7500 },
    { name: "Golden Scale Armor",      dur:[264,300], fat:"-25 to -19", worth:8000 },
    { name: "Named Sellsword's Armor", dur:[286,325], fat:"-29 to -23", worth:10000 },
    { name: "Alloy Plate Armor",       dur:[308,350], fat:"-32 to -26", worth:9000 },
    { name: "Golden Lamellar Armor",   dur:[313,356], fat:"-37 to -31", worth:11000 },
    { name: "Leopard Armor",           dur:[319,362], fat:"-32 to -26", worth:15000 },
    { name: "Plated Mail Hauberk",     dur:[330,375], fat:"-33 to -27", worth:14000 },
    { name: "Enhanced Coat of Plates", dur:[352,400], fat:"-39 to -33", worth:15000 }
  ],
  /* helmets: durability x1.1-1.25 and fatigue +1-4 (cap -4 total) */
  helmets: [
    { name: "Norse Helmet",            dur:[137,156], fat:"-5 to -4",   vision:-1, worth:2000 },
    { name: "Wolf Helmet",             dur:[154,175], fat:"-7 to -4",   vision:0,  worth:2000 },
    { name: "Named Steppe Helmet",     dur:[220,250], fat:"-11 to -8",  vision:-2, worth:5000 },
    { name: "Skull Helmet",            dur:[231,262], fat:"-12 to -9",  vision:-2, worth:5000 },
    { name: "Nose Horned Helmet",      dur:[253,287], fat:"-14 to -11", vision:-2, worth:5000 },
    { name: "Golden Feathered Helmet", dur:[264,300], fat:"-15 to -12", vision:-3, worth:6000 },
    { name: "Red and Gold Band Helmet",dur:[280,318], fat:"-16 to -13", vision:-2, worth:6000 },
    { name: "Feathered Nasal Helmet",  dur:[291,331], fat:"-17 to -14", vision:-2, worth:7000 },
    { name: "Lindwurm Helmet",         dur:[291,331], fat:"-17 to -14", vision:-2, worth:7500 },
    { name: "Named Nordic Helmet",     dur:[291,331], fat:"-17 to -14", vision:-2, worth:7500 },
    { name: "Sallet",                  dur:[291,331], fat:"-17 to -14", vision:-1, worth:7000 },
    { name: "Heraldic Bascinet",       dur:[308,350], fat:"-18 to -15", vision:-2, worth:8000 },
    { name: "Named Conic Helmet",      dur:[308,350], fat:"-18 to -15", vision:-3, worth:8000 },
    { name: "Gold and Black Turban",   dur:[319,362], fat:"-19 to -16", vision:-3, worth:6000 },
    { name: "Bull Helmet",             dur:[330,375], fat:"-21 to -18", vision:-3, worth:8000 }
  ]
};

window.BB_GEAR.legendary = {
  weapons: [
    { name: "Obsidian Dagger",          dur:"∞", dmg:"25-45", direct:"20%", armor:"70%",  fat:"",   special:"Resurrects any human killed with it as a Wiederganger fighting for you", worth:5000 },
    { name: "Reproach of the Old Gods", dur:"90",  dmg:"50-55",  direct:"20%", armor:"90%",  fat:"-8", special:"Inflicts +10-20 armor-ignoring damage to up to three targets", worth:20000 },
    { name: "Censer of the Diviner",    dur:"120", dmg:"60-110", direct:"30%", armor:"110%", fat:"-16", special:"Leaves Miasma in any tile the weapon is swung - hit or miss", worth:14000 },
    { name: "Bloodletter's Reach",      dur:"",    dmg:"",       direct:"",    armor:"",     fat:"",   special:"Inflicts stacking +10 bleeding damage per turn, for 2 turns", worth:700 }
  ],
  armors: [
    { name: "Aspect of Davkul",   dur:"270", fat:"-18", special:"Regenerates 90 durability each turn", worth:20000 },
    { name: "Armor of the Ijirok",dur:"320", fat:"-32", special:"Heals 10 HP of the wearer each turn", worth:12000 },
    { name: "The Emperor's Armor",dur:"400", fat:"-30", special:"Reflects 25% of melee damage back to the attacker", worth:20000 }
  ],
  helmets: [
    { name: "The Fangshire",           dur:"60",  fat:"-5",  special:"See at night; negates nighttime penalties", worth:300 },
    { name: "Glimpse of Davkul",       dur:"270", fat:"-10", special:"Regenerates 90 durability each turn", worth:20000 },
    { name: "Helmet of the Ijirok",    dur:"310", fat:"-20", special:"Heals 10 HP of the wearer each turn", worth:13000 },
    { name: "The Emperor's Countenance",dur:"400",fat:"-20", special:"Reflects 25% of melee damage back to the attacker", worth:20000 }
  ],
  shields: [
    { name: "Gilder's Embrace", dur:"786", mdef:"+25", rdef:"+25", fat:"-16", special:"Everyone striking this shield receives the Dazed effect", worth:20000 }
  ]
};
