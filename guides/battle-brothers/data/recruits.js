/* ============================================================
   THE MERCENARY CODEX - Battle Brothers recruitment database
   Every hireable background, tiered for hiring. Rendered by
   js/gear-tables.js into <div data-gear-table="recruits"></div>.

   Mirrors the full roster in data/backgrounds.js (same names),
   so the tier table and the attribute-range table line up.

   tier:  S | A | B | C | Filler | Avoid | Event
          (Event = origin/crisis-only, not a normal hire)
   Facts: Battle Brothers Wiki + community tier consensus.
   Star-bias is community-observed, not official numbers.

   Row: name, tier, role, costBand, phase, tryout, starBias, notes
   ============================================================ */
window.BB_GEAR = window.BB_GEAR || {};
window.BB_GEAR.recruits = [
  /* ---- premium / top combat ---- */
  { name: "Hedge Knight", tier: "S", role: "Frontline", costBand: "Premium", phase: "Late", tryout: "Skip/Optional", starBias: "Melee Skill/Def", notes: "Gold-standard melee; hard to find a bad one. Often arrives lv2-5 with 70+ Melee Skill and good gear. Near-instant buy when cheap." },
  { name: "Sellsword", tier: "S", role: "Hybrid", costBand: "Premium", phase: "Late", tryout: "Skip/Optional", starBias: "Melee + Ranged", notes: "Best hybrid (melee + ranged) potential, but more roll-dependent than Hedge Knight; a poor roll wastes the high wage." },
  { name: "Swordmaster", tier: "S", role: "Specialist", costBand: "Premium", phase: "Late", tryout: "Skip/Optional", starBias: "Melee Skill + Def", notes: "Highest starting Melee Skill (72-77) AND Defense (10-20) of any background. Cannot star Ranged. Eventually gets the Old trait (WotN item removes it). Rarely cheap." },

  { name: "Hunter", tier: "A", role: "Ranged", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "Ranged Skill", notes: "The archer answer. ~1000-1500g reliably yields a decent recruit, often with a free Boar Spear. Hire instead of Poachers or Bowyers." },
  { name: "Raider", tier: "A", role: "Frontline", costBand: "Medium-Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Melee Skill", notes: "Reliable frontliner, cheaper than Hedge Knight. Great at a discount (~2K)." },
  { name: "Melee Nomad", tier: "A", role: "Frontline", costBand: "Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Melee Skill/Def", notes: "A Raider in all but name - strong Melee Skill (59-67) and Defense. Southern equivalent of the Raider." },
  { name: "Ranged Nomad", tier: "A", role: "Ranged", costBand: "Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Ranged Skill", notes: "Strong hybrid archer with solid melee to fall back on. Southern Hunter-plus." },
  { name: "Retired Soldier", tier: "A", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "Melee/Resolve", notes: "Veteran: high Melee Skill (60-67) and Resolve, but low HP (40-45) and Fatigue. Glass cannon front-liner; pair with heavy armor late." },
  { name: "Gladiator", tier: "A", role: "Frontline", costBand: "Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Melee Skill/Def", notes: "Strong all-round combat stats with good defenses; high wage. From own origin its base wage is 50." },
  { name: "Adventurous Noble", tier: "A", role: "Frontline", costBand: "Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Melee", notes: "A slightly better-on-average Bastard. Good base stats, poor Resolve. Can trigger an Assassin recruit event. Only worth it cheap." },
  { name: "Squire", tier: "A", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Always", starBias: "Resolve, Fatigue", notes: "Strong Resolve plus small Fatigue/Melee/Ranged boosts. Higher wage; can still roll mediocre, so favor cheaper ones." },
  { name: "Witchhunter", tier: "A", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "Resolve, Ranged", notes: "+20 Resolve vs fear/panic and good Ranged Skill - excellent in fear-heavy fights (undead, Unholds)." },
  { name: "Oathtaker", tier: "A", role: "Frontline", costBand: "Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Melee/Resolve/Init", notes: "Of Flesh & Faith: high HP, Melee Skill, Resolve and Initiative - but negative Ranged Defense. A premium aggressive front-liner." },
  { name: "Beast Slayer", tier: "A", role: "Hybrid", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "Ranged/Resolve", notes: "Balanced melee/ranged with good Resolve and Initiative. Solid flexible mid-game hire." },
  { name: "Assassin", tier: "A", role: "Hybrid", costBand: "Premium", phase: "Late", tryout: "Optional", starBias: "Melee/Init", notes: "Event-only (needs a Bastard brother). High Melee Skill and Initiative - a natural dagger Duelist. Can't star HP/Fat/RDef/Res." },
  { name: "Southern Assassin", tier: "A", role: "Hybrid", costBand: "Premium", phase: "Late", tryout: "Optional", starBias: "Melee/Init", notes: "Southern variant; high Melee Skill and Initiative. Can't star HP/Fat." },
  { name: "Converted Crusader", tier: "A", role: "Frontline", costBand: "Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Melee/Ranged", notes: "Event (holy war): strong all-round combat with the Deathwish trait. Aggressive front-liner." },

  /* ---- best cheap core ---- */
  { name: "Brawler", tier: "B", role: "Frontline", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Melee Atk/Def (not Ranged)", notes: "Best early-mid recruit and company backbone. At least okay in every key stat; min Melee Skill ~52." },
  { name: "Butcher", tier: "B", role: "Frontline", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Melee Atk", notes: "Nearly as good as a Brawler. Excellent cheap frontliner." },
  { name: "Thief", tier: "B", role: "Tank/Fencer", costBand: "Cheap", phase: "Early-Mid", tryout: "Always", starBias: "Melee Def, Initiative", notes: "2nd-best Melee Defense = great tank; very high Initiative = great dodge/fencer build. Poor as a pure damage dealer." },
  { name: "Militia", tier: "B", role: "Frontline", costBand: "Cheap-Medium", phase: "Mid", tryout: "Always", starBias: "Melee Skill", notes: "Worth it from mid-game but can roll Clumsy (cancels its Melee bonus) - always tryout. A demigod if Dexterous/Strong/Iron-Lunged." },
  { name: "Barbarian", tier: "B", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "HP/Fatigue", notes: "Big HP and Fatigue with solid Melee Skill. A durable, common frontliner." },
  { name: "Bastard", tier: "B", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "Melee", notes: "Wide Melee Skill range (52-67) - tryout to avoid the low end. Decent budget front-liner." },
  { name: "Disowned Noble", tier: "B", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "Melee", notes: "Good Melee Skill, weak Resolve and Fatigue. Can be upgraded to Regent in Absentia via event." },
  { name: "Manhunter", tier: "B", role: "Frontline", costBand: "Cheap", phase: "Early-Mid", tryout: "Optional", starBias: "Melee/Init", notes: "Balanced cheap-ish combat body with decent Initiative and defenses." },
  { name: "Killer on the Run", tier: "B", role: "Frontline", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Melee/head", notes: "+10% chance to hit the head and cheap - a budget damage body that punches above its price." },

  /* ---- cheap filler & situational ---- */
  { name: "Farmhand", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "Melee (possible)", notes: "Good HP and Fatigue, weak Resolve and Melee Defense. Plentiful in farming villages. Fine cheap body, but Brawlers outclass them." },
  { name: "Fisherman", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "Fatigue", notes: "Good stamina, reasonable base, common in coastal cities. Often comes with a free net." },
  { name: "Vagabond", tier: "C", role: "Spearwall", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "Fatigue", notes: "Cheap Spearwall/Shieldwall body. Very high Max Fatigue (100-115) but terrible, hard-to-fix Resolve." },
  { name: "Wildman", tier: "C", role: "Frontline", costBand: "Cheap (naked)", phase: "Early-Mid", tryout: "Always", starBias: "Talents (varies)", notes: "Naked, so true cost is visible upfront (~150). Big HP/Fatigue but low Defense; tend to end up bad without Defense stars. Hire cheap ones." },
  { name: "Messenger", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "-", notes: "Underrated on total value (low hire + low wage); among the best-value early recruits." },
  { name: "Poacher", tier: "C", role: "Ranged", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Ranged", notes: "A budget archer, but strictly worse than a Hunter - hire a Hunter if you can afford one." },
  { name: "Bowyer", tier: "C", role: "Ranged", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "Ranged", notes: "Cheap ranged option; can't star Melee Skill. Can craft a Masterwork Bow via event." },
  { name: "Caravan Hand", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "HP/Fatigue", notes: "Decent cheap body with good Fatigue; can grant +9 inventory slots via event." },
  { name: "Deserter", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "Melee", notes: "Cheap with okay Melee, but very poor Resolve; content in reserve." },
  { name: "Apprentice", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "-", notes: "+10% XP so it levels fast; weak base stats. A cheap long-term project, can learn from veterans." },
  { name: "Flagellant", tier: "C", role: "Frontline", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Resolve", notes: "High Resolve, low HP; self-harm events. Niche aggressive body." },
  { name: "Gambler", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Init/Resolve", notes: "Good Initiative and Resolve, mediocre combat. Gambling events." },
  { name: "Miner", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "HP/Resolve", notes: "Good HP and decent Resolve, but low Fatigue (80-90). Cheap body." },
  { name: "Cultist", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Resolve", notes: "Low combat, high Resolve; Davkul flavor and conversion events." },
  { name: "Anatomist", tier: "C", role: "Specialist", costBand: "Cheap", phase: "Any", tryout: "Optional", starBias: "Melee/Ranged", notes: "Of Flesh & Faith utility: decent stats and many support events. Niche but not useless." },
  { name: "Houndmaster", tier: "C", role: "Specialist", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Melee Def", notes: "Unleashes war hounds and tames dogs; decent Melee Defense for the price." },
  { name: "Lumberjack", tier: "Avoid", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Always", starBias: "HP/Fatigue", notes: "Good HP and Fatigue, but overpriced for the stat line - community consensus is to skip it." },

  /* ---- warm bodies / non-combat fillers ---- */
  { name: "Beggar", tier: "Filler", role: "Body", costBand: "Cheap (80-100)", phase: "Early", tryout: "Skip", starBias: "-", notes: "Throwaway body to soak a hit, hold a tile, or feed an event." },
  { name: "Cripple", tier: "Filler", role: "Body", costBand: "Cheap (80-100)", phase: "Early", tryout: "Skip", starBias: "-", notes: "Pure meat; content in reserve." },
  { name: "Daytaler", tier: "Filler", role: "Body", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "-", notes: "Generic cheap laborer body." },
  { name: "Eunuch", tier: "Filler", role: "Body", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "-", notes: "Generic body; brothel/morale events." },
  { name: "Gravedigger", tier: "Filler", role: "Body", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "-", notes: "Generic body; burial/morale events." },
  { name: "Graverobber", tier: "Filler", role: "Utility", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Init", notes: "Loot-finding utility (events), weak combat." },
  { name: "Refugee", tier: "Filler", role: "Body", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "-", notes: "Cheap body with poor Resolve; plentiful." },
  { name: "Servant", tier: "Filler", role: "Body", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "-", notes: "Generic cheap body." },
  { name: "Miller", tier: "Filler", role: "Body", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "-", notes: "Generic body; mill-building event." },
  { name: "Indebted", tier: "Filler", role: "Body", costBand: "Free", phase: "Early", tryout: "Skip", starBias: "-", notes: "No wage and content in reserve - cheap to keep. Central to the Manhunters origin; dies permanently if downed." },
  { name: "Barbarian Indebted", tier: "Filler", role: "Body", costBand: "Free", phase: "Early", tryout: "Skip", starBias: "-", notes: "No-wage barbarian body; better HP/Fatigue than the standard Indebted." },
  { name: "Southern Indebted", tier: "Filler", role: "Body", costBand: "Free", phase: "Early", tryout: "Skip", starBias: "-", notes: "No-wage southern body." },
  { name: "Monk turned Flagellant", tier: "Filler", role: "Frontline", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Resolve", notes: "A flagellant converted from a monk; high Resolve, fragile." },
  { name: "Pacified Flagellant", tier: "Filler", role: "Frontline", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Resolve", notes: "A flagellant a monk talked down; stops self-harming." },
  { name: "Juggler", tier: "Filler", role: "Utility", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Init", notes: "+5% head hit and high Initiative, but weak base. Mood/entertainment events." },
  { name: "Minstrel", tier: "Filler", role: "Utility", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "Resolve", notes: "Morale utility (mood events); non-combat." },
  { name: "Monk", tier: "Filler", role: "Specialist", costBand: "Cheap", phase: "Any", tryout: "Skip", starBias: "Resolve", notes: "High Resolve and a huge number of support events (crafts Holy Water, removes traits), but weak combat." },
  { name: "Historian", tier: "Filler", role: "Specialist", costBand: "Cheap", phase: "Any", tryout: "Skip", starBias: "-", notes: "+15% XP and many utility events (deciphers maps/scrolls); non-combat." },
  { name: "Mason", tier: "Filler", role: "Specialist", costBand: "Cheap", phase: "Any", tryout: "Skip", starBias: "-", notes: "+5% XP; non-combat utility." },
  { name: "Tailor", tier: "Filler", role: "Specialist", costBand: "Cheap", phase: "Any", tryout: "Skip", starBias: "-", notes: "Can craft Direwolf Hide Armor and medical supplies; non-combat." },
  { name: "Peddler", tier: "Filler", role: "Utility", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "-", notes: "Trade/economy utility, low Melee Skill (37-48). Not a fighter." },
  { name: "Pimp", tier: "Filler", role: "Utility", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "-", notes: "Event-linked (needs a Monk); weak combat." },
  { name: "Ratcatcher", tier: "Filler", role: "Utility", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "Init", notes: "Top Initiative and crafts throwing nets, but weak combat." },
  { name: "Shepherd", tier: "Filler", role: "Body", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "Ranged", notes: "Slight Ranged Skill lean; otherwise a generic cheap body." },
  { name: "Belly Dancer", tier: "Filler", role: "Specialist", costBand: "Cheap", phase: "Early", tryout: "Skip", starBias: "Init", notes: "Event-only; comes Dexterous, but low combat stats." },

  /* ---- event / origin only (not normal hires) ---- */
  { name: "Companion (2H)", tier: "Event", role: "Special", costBand: "Origin", phase: "-", tryout: "-", starBias: "MSk 2*, MDef 1*, Res 1*", notes: "Lone Wolf / origin companion - arrives with fixed talents. Two-handed melee." },
  { name: "Companion (1H)", tier: "Event", role: "Special", costBand: "Origin", phase: "-", tryout: "-", starBias: "HP 2*, Fat 1*, Res 1*", notes: "Origin companion - one-handed + shield, guaranteed talents." },
  { name: "Companion (Ranged)", tier: "Event", role: "Special", costBand: "Origin", phase: "-", tryout: "-", starBias: "RSk 2*, RDef 1*, Init 1*", notes: "Origin companion archer - guaranteed ranged talents." },
  { name: "Regent in Absentia", tier: "Event", role: "Frontline", costBand: "Event", phase: "-", tryout: "-", starBias: "Melee/Resolve", notes: "A Disowned Noble upgraded via the Welcomed Back event - better Resolve, Initiative and defenses." },
  { name: "Crusader", tier: "Event", role: "Frontline", costBand: "Event", phase: "-", tryout: "-", starBias: "Resolve", notes: "Undead-crisis only; strong Resolve front-liner that leaves when the crisis ends." },
  { name: "Orc Slayer", tier: "Event", role: "Frontline", costBand: "Event", phase: "-", tryout: "-", starBias: "Resolve", notes: "Greenskin-invasion only; high Resolve, leaves when the crisis ends." },
  { name: "King's Guard", tier: "Event", role: "Specialist", costBand: "Event", phase: "-", tryout: "-", starBias: "MDef 3*, RDef 3*, MSk 2*", notes: "Event-only elite tank with outstanding defensive talents; spawns with no traits." },
  { name: "Lindwurm Slayer", tier: "Event", role: "Hybrid", costBand: "Event", phase: "-", tryout: "-", starBias: "Melee/Ranged", notes: "Event-only; a strong balanced veteran with good Melee, Ranged and Initiative." }
];
