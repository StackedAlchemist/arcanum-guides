/* ============================================================
   THE MERCENARY CODEX - Battle Brothers recruitment database
   Backgrounds tiered for hiring. Rendered by js/gear-tables.js
   into <div data-gear-table="recruits"></div>.

   Attaches to the shared BB_GEAR namespace so the Hiring page
   needs only this file + the renderer (no gear.js required).

   Facts: Battle Brothers Wiki (Character Backgrounds) +
   community consensus (Steam tier guides). Star-bias is
   community-observed, not official wiki numbers.

   Row: name, tier (S|A|B|C|Filler|Avoid), role, costBand,
        phase, tryout, starBias, notes
   ============================================================ */
window.BB_GEAR = window.BB_GEAR || {};
window.BB_GEAR.recruits = [
  /* ---- S-tier / premium frontline ---- */
  { name: "Hedge Knight", tier: "S", role: "Frontline", costBand: "Premium", phase: "Late", tryout: "Skip/Optional", starBias: "Melee Skill/Def", notes: "Gold-standard melee; hard to find a bad one. Often arrives lv2-5 with 70+ Melee Skill and good gear. Near-instant buy when cheap." },
  { name: "Sellsword", tier: "S", role: "Hybrid", costBand: "Premium", phase: "Late", tryout: "Skip/Optional", starBias: "Melee + Ranged", notes: "Best hybrid (melee + ranged) potential, but more roll-dependent than Hedge Knight; a poor roll wastes the high wage." },
  { name: "Swordmaster", tier: "S", role: "Specialist", costBand: "Premium", phase: "Late", tryout: "Skip/Optional", starBias: "Melee Skill + Def", notes: "Highest starting Melee Skill AND Defense of any background. Cannot star Ranged. Eventually gets the Old trait (WotN item can remove it). Rarely cheap." },

  /* ---- A-tier / strong mid-late ---- */
  { name: "Hunter", tier: "A", role: "Ranged", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "Ranged Skill", notes: "The archer answer. ~1000-1500g reliably yields a decent recruit, often with a free Boar Spear. Hire instead of Poachers/Fletchers." },
  { name: "Raider", tier: "A", role: "Frontline", costBand: "Medium-Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Melee Skill", notes: "Reliable frontliner, cheaper than Hedge Knight. Great at a discount (~2K)." },
  { name: "Adventurous Noble", tier: "A", role: "Frontline", costBand: "Expensive", phase: "Mid-Late", tryout: "Optional", starBias: "Melee", notes: "A slightly better-on-average Bastard. Good base stats, poor Resolve. Can trigger an Assassin recruit event. Only worth it cheap." },
  { name: "Squire", tier: "A", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Always", starBias: "Resolve, Fatigue", notes: "Strong Resolve plus small Fatigue/Melee/Ranged boosts. Higher wage; can still roll mediocre, so favor cheaper ones." },
  { name: "Witchhunter", tier: "A", role: "Frontline", costBand: "Medium", phase: "Mid", tryout: "Optional", starBias: "Resolve", notes: "Solid mid-game pickup with good Resolve; shines in fear-heavy fights (undead)." },

  /* ---- B-tier / best cheap core ---- */
  { name: "Brawler", tier: "B", role: "Frontline", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Melee Atk/Def (not Ranged)", notes: "Best early-mid recruit and company backbone. At least okay in every key stat; min Melee Skill ~52." },
  { name: "Butcher", tier: "B", role: "Frontline", costBand: "Cheap", phase: "Early", tryout: "Optional", starBias: "Melee Atk", notes: "Nearly as good as a Brawler. Excellent cheap frontliner." },
  { name: "Thief", tier: "B", role: "Tank/Fencer", costBand: "Cheap", phase: "Early-Mid", tryout: "Always", starBias: "Melee Def, Initiative", notes: "2nd-best Melee Defense = great tank; very high Initiative = great dodge/fencer build. Poor as a pure damage dealer." },
  { name: "Militia", tier: "B", role: "Frontline", costBand: "Cheap-Medium", phase: "Mid", tryout: "Always", starBias: "Melee Skill", notes: "Worth it from mid-game but can roll Clumsy (cancels its Melee bonus) - always tryout. A demigod if Dexterous/Strong/Iron-Lunged." },

  /* ---- C-tier / cheap filler & situational ---- */
  { name: "Farmhand", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "Melee (possible)", notes: "Good HP and Fatigue, weak Resolve and Melee Defense. Plentiful in farming villages. Fine cheap body, but Brawlers outclass them." },
  { name: "Fisherman", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "Fatigue", notes: "Good stamina, reasonable base, common in coastal cities. Often comes with a free net. You get what you pay for." },
  { name: "Vagabond", tier: "C", role: "Spearwall", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "Fatigue", notes: "Cheap Spearwall/Shieldwall body. Very high Max Fatigue (100-115) but terrible, hard-to-fix Resolve. Good ones stay viable late." },
  { name: "Wildman", tier: "C", role: "Frontline", costBand: "Cheap (naked)", phase: "Early-Mid", tryout: "Always", starBias: "Talents (varies)", notes: "Naked, so true cost is visible upfront (~150 base). Good talents but tend to end up bad without Defense stars. Hire cheap ones." },
  { name: "Messenger", tier: "C", role: "Filler", costBand: "Cheap", phase: "Early", tryout: "Always", starBias: "-", notes: "Underrated on total value (low hire + low wage); among the best-value early recruits." },

  /* ---- Filler / meatbags ---- */
  { name: "Beggar", tier: "Filler", role: "Body", costBand: "Cheap (80-100)", phase: "Early", tryout: "Skip", starBias: "-", notes: "Throwaway body to soak a hit, hold a tile, or feed an event. No investment." },
  { name: "Cripple", tier: "Filler", role: "Body", costBand: "Cheap (80-100)", phase: "Early", tryout: "Skip", starBias: "-", notes: "Same as Beggar - pure meat." },

  /* ---- generally avoid ---- */
  { name: "Thief/Murderer (as a fighter)", tier: "Avoid", role: "-", costBand: "Expensive", phase: "-", tryout: "-", starBias: "-", notes: "Bad stars/talents, hard to find a good one. (Thief is fine as a cheap tank, not as a damage hire.)" },
  { name: "Lumberjack", tier: "Avoid", role: "-", costBand: "Medium", phase: "-", tryout: "-", starBias: "-", notes: "Overpriced for what you get." },
  { name: "Poacher", tier: "Avoid", role: "Ranged", costBand: "Cheap", phase: "-", tryout: "-", starBias: "-", notes: "Worse than a Hunter - just hire a Hunter." },
  { name: "Fletcher", tier: "Avoid", role: "Ranged", costBand: "Cheap", phase: "-", tryout: "-", starBias: "-", notes: "Same - a worse Hunter." },
  { name: "Noble (full price)", tier: "Avoid", role: "Frontline", costBand: "Expensive", phase: "-", tryout: "-", starBias: "-", notes: "Middle-of-the-road stats at a high price, so poor rolls really sting. Only worth it cheap." }
];
