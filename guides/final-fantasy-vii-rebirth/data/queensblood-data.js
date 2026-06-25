/* FF7 Rebirth — Queen's Blood phase decks, counters, card gates */
window.FF7R_QUEENSBLOOD = {
  intro: "Queen's Blood decks are chapter-gated — Sephiroth, Bahamut, and Aerith unlock late. Use phase-appropriate lists below; swap to Seraph Sweep once you have tournament rewards. Every archetype has a counter — you don't need one deck for the whole game.",

  phases: [
    { id: "early", label: "Early Game", chapters: "Ch. 2–5", minChapter: 2 },
    { id: "mid", label: "Mid Game", chapters: "Ch. 6–10", minChapter: 6 },
    { id: "late", label: "Late Game", chapters: "Ch. 8–11", minChapter: 8 },
    { id: "endgame", label: "Tournament & Endgame", chapters: "Ch. 8+ / Ch. 11+", minChapter: 8 }
  ],

  decks: [
    {
      id: "open-rush",
      phase: "early",
      name: "Open Rush",
      subtitle: "Claim the board before opponents can stack power. No Sephiroth required.",
      minChapter: 2,
      cards: [
        { name: "Cactuar", copies: 3, pips: 1 },
        { name: "Chocobo & Mog", copies: 3, pips: 1 },
        { name: "Tifa", copies: 1, pips: 2 },
        { name: "Goblin", copies: 3, pips: 1 },
        { name: "Mandragora", copies: 2, pips: 1 },
        { name: "Ifrit", copies: 1, pips: 2 },
        { name: "Tonberry", copies: 1, pips: 1 }
      ],
      strategy: "Hard-mulligan Cactuar or Chocobo & Mog. Turn 1 Cactuar center — Open (3) seizes the middle column. Layer Mandragora to buff 1-pip cards. Tifa column-Enhance wins a side lane by round 3. Ifrit + Chocobo&Mog Chain when you draw both. Concede one lane if needed; win 2-of-3.",
      unlocks: "Cactuar from Kalm innkeeper (Ch.2). Tifa from Junon card shop (Ch.4, 1,500 gil)."
    },
    {
      id: "buff-stack",
      phase: "early",
      name: "Chocobo Buff Stack",
      subtitle: "Early buff chaining when you have Scrutineye/Zemzelett from Grasslands opponents.",
      minChapter: 2,
      cards: [
        { name: "Cactuar", copies: 2, pips: 1 },
        { name: "Chocobo & Mog", copies: 2, pips: 1 },
        { name: "Scrutineye", copies: 2, pips: 1 },
        { name: "Zemzelett", copies: 2, pips: 1 },
        { name: "Titan", copies: 1, pips: 2 },
        { name: "Ifrit", copies: 1, pips: 2 },
        { name: "Goblin", copies: 2, pips: 1 }
      ],
      strategy: "Cactuar top-left, buff partner adjacent, Titan mid for pawn setup. Stack double buffs on a bottom-lane finisher. Weaker pawn gen than Open Rush but higher power ceiling — use vs Junon soldiers who pile center.",
      unlocks: "Grasslands QB NPCs drop support cards. Titan from Cosmo Canyon gate player (Ch.7) — substitute Quetzalcoatl before then."
    },
    {
      id: "summon-chain",
      phase: "mid",
      name: "Summon Chain",
      subtitle: "Mid-game bridge deck — chains online before Bahamut/Sephiroth.",
      minChapter: 6,
      cards: [
        { name: "Cactuar", copies: 2, pips: 1 },
        { name: "Chocobo & Mog", copies: 3, pips: 1 },
        { name: "Ifrit", copies: 1, pips: 2 },
        { name: "Titan", copies: 1, pips: 2 },
        { name: "Tonberry", copies: 2, pips: 1 },
        { name: "Tifa", copies: 1, pips: 2 },
        { name: "Mandragora", copies: 2, pips: 1 },
        { name: "Bahamut", copies: 1, pips: 2 }
      ],
      strategy: "Chocobo&Mog next to Ifrit or Bahamut for +3 Chain. Titan stomp clears enemy stacks in contested lanes. Tonberry snipes their highest-power card. Win 2 lanes — don't chase Convert you don't have yet.",
      unlocks: "Bahamut from Gold Saucer QB Champion (Ch.8). Until then, run extra Ifrit or Tonberry."
    },
    {
      id: "seraph-sweep",
      phase: "late",
      name: "Seraph Sweep",
      subtitle: "Aggressive board control + Convert finisher. The standard late-game ladder deck.",
      minChapter: 8,
      cards: [
        { name: "Sephiroth", copies: 1, pips: 3 },
        { name: "Cloud", copies: 1, pips: 3 },
        { name: "Aerith", copies: 1, pips: 2 },
        { name: "Tifa", copies: 1, pips: 2 },
        { name: "Bahamut", copies: 1, pips: 2 },
        { name: "Titan", copies: 1, pips: 2 },
        { name: "Chocobo & Mog", copies: 3, pips: 1 },
        { name: "Cactuar", copies: 3, pips: 1 },
        { name: "Tonberry", copies: 2, pips: 1 },
        { name: "Ifrit", copies: 1, pips: 2 },
        { name: "Goblin", copies: 3, pips: 1 },
        { name: "Mandragora", copies: 2, pips: 1 }
      ],
      strategy: "Open with Cactuar + Chocobo&Mog for center. Aerith Enhance between two allies for +10–20 power swings. Save Sephiroth for round 3 Convert on their stacked lane. Cloud finisher in the third lane. Bait Bahamut into a lane you'll concede.",
      unlocks: "Sephiroth from QB tournament (Ch.8). Aerith from Ancient Forest chest (Ch.11) — run Tifa column buff until then."
    },
    {
      id: "chocobo-jockey",
      phase: "mid",
      name: "Chocobo Jockey",
      subtitle: "Single-lane power bomb — wins tournaments before full Seraph collection.",
      minChapter: 6,
      cards: [
        { name: "Mandragora", copies: 2, pips: 1 },
        { name: "Chocobo Jockey", copies: 1, pips: 2 },
        { name: "Titan", copies: 1, pips: 2 },
        { name: "Griffon", copies: 2, pips: 1 },
        { name: "Goblin", copies: 3, pips: 1 },
        { name: "Cactuar", copies: 2, pips: 1 },
        { name: "Tonberry", copies: 1, pips: 1 }
      ],
      strategy: "Mulligan Mandragora + Titan for 2+ pawns. Stack one lane to absurd power with Chocobo Jockey's effect. Abandon two lanes intentionally. Strong vs spread decks that can't answer a single 40+ power column.",
      unlocks: "Chocobo Jockey from Gold Saucer card packs / NPC wins (Ch.6+)."
    },
    {
      id: "bahamut-destroy",
      phase: "endgame",
      name: "Bahamut Destroy",
      subtitle: "Post-Ch.11 power ceiling — counters buff and replace archetypes.",
      minChapter: 11,
      cards: [
        { name: "Bahamut", copies: 1, pips: 3 },
        { name: "Aerith", copies: 1, pips: 2 },
        { name: "Sephiroth", copies: 1, pips: 3 },
        { name: "Tifa", copies: 1, pips: 2 },
        { name: "Tonberry King", copies: 2, pips: 1 },
        { name: "Cactuar", copies: 2, pips: 1 },
        { name: "Chocobo & Mog", copies: 2, pips: 1 },
        { name: "Titan", copies: 1, pips: 2 },
        { name: "Goblin", copies: 2, pips: 1 }
      ],
      strategy: "Bahamut Enhance All on a lane with 2+ allies = instant lane win. Aerith doubles adjacent cards. Sephiroth Convert steals round 3. Tonberry King handles enemy Bahamut stacks. Best tournament finals deck when fully collected.",
      unlocks: "Aerith Ch.11, Tonberry King Gongaga merchant. Full list needs post-Saucer sweep."
    }
  ],

  matchups: [
    {
      archetype: "Power Stack (Enhance)",
      signs: "Aerith, Bahamut, Mandragora — one lane hits 30+ power",
      counterDeck: "Open Rush or Seraph Sweep",
      tips: "Tonberry Chef's Knife the highest-power card. Spread your own power so Bahamut Enhance All only hits 1–2 targets. Win two lanes before their stack peaks."
    },
    {
      archetype: "Convert / Lane Steal",
      signs: "Sephiroth, late tournament NPCs",
      counterDeck: "Chocobo Jockey or 2-lane commit",
      tips: "Don't spread evenly — build such a lead in two lanes that Convert can't catch up. Or out-race them: win before round 3. Never telegraph your own Sephiroth early."
    },
    {
      archetype: "Chain / Summon",
      signs: "Chocobo&Mog + Ifrit/Bahamut combos",
      counterDeck: "Open Rush",
      tips: "Rush center with Cactuar Open before they place summons. Deny adjacency — their Chain fizzles without pawn placement. Titan stomp breaks assembled chains."
    },
    {
      archetype: "Deplete / Control",
      signs: "Titan, Ifrit Hellfire, Cargo Ship crew",
      counterDeck: "Summon Chain",
      tips: "Never stack one tall target. Spread medium-power cards across three lanes. Deplete hits one card — make them choose which lane matters least."
    },
    {
      archetype: "Replace / Sacrifice",
      signs: "Sandhog Pie, Tonberry King, Heat Seeker (Ch.7+)",
      counterDeck: "Bahamut Destroy",
      tips: "They destroy own cards for buffs — push lanes faster so their setup never completes. Dio or Bahamut punish wide boards after replacements resolve."
    },
    {
      archetype: "Self-Enfeeble",
      signs: "Rictus, Yuffie, Shadowblood Queen prep (Ch.11+)",
      counterDeck: "Seraph Sweep with Aerith",
      tips: "They weaken themselves for triggers — race lanes early. Aerith Enhance turns their low base power into your advantage after enfeeble procs."
    }
  ],

  cardUnlocks: [
    { card: "Chocobo & Mog", source: "Starter deck — first QB match", chapter: 1, required: true },
    { card: "Cactuar", source: "Defeat QB player at Kalm inn", chapter: 2, required: true },
    { card: "Goblin", source: "Starter / early NPC drops", chapter: 1, required: true },
    { card: "Tifa", source: "Junon card shop — 1,500 gil (second visit)", chapter: 4, required: true },
    { card: "Tonberry", source: "Wandering merchant — Gongaga jungle outer paths", chapter: 6, required: false },
    { card: "Titan", source: "Defeat QB player at Cosmo Canyon entrance", chapter: 7, required: false },
    { card: "Ifrit", source: "Multiple NPC wins / packs", chapter: 5, required: false },
    { card: "Bahamut", source: "Gold Saucer QB Champion (second visit) or Corel colosseum", chapter: 8, required: true },
    { card: "Sephiroth", source: "Queen's Blood tournament — story sequence", chapter: 8, required: true },
    { card: "Cloud", source: "QB NPC rewards / packs", chapter: 6, required: false },
    { card: "Aerith", source: "Treasure chest — Ancient Forest exploration", chapter: 11, required: true },
    { card: "Chocobo Jockey", source: "Gold Saucer card rewards", chapter: 6, required: false },
    { card: "Tonberry King", source: "Gongaga / late merchants", chapter: 7, required: false }
  ]
};