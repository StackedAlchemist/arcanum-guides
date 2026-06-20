// ============================================================
// THE ARCANUM - Clair Obscur Wiki
// gamedata.js - Luminas, Status Effects, and article pages
//
// Grouped here so the live-content pages share one file.
// Big itemized lists (full Pictos, all Weapons) get their own
// files as we research them in later batches.
// ============================================================

// ---- LUMINAS (types + standout passives) -------------------
const LUMINAS = {
  intro: "Luminas are passive effects unlocked from Pictos. Use a Picto for four battles to master it, which permanently unlocks its Lumina for any character to activate by spending Lumina Points (a shared pool that grows 1 per level, plus Color of Lumina items). You can freely activate/deactivate Luminas outside battle. A character gains a Lumina even without the Picto equipped, unless another character currently has that Picto equipped.",
  types: [
    { name: "Offensive Lumina", effect: "Increases the character's damage." },
    { name: "Defensive Lumina", effect: "Increases the character's survivability." },
    { name: "Support Lumina",   effect: "Affects AP gain, buffs, status effects, and more." }
  ],
  standout: [
    { name: "Cheater",        type: "Support",   note: "Extra turn / turn manipulation. Best early-to-mid damage enabler." },
    { name: "Energy Master",  type: "Support",   note: "Improved AP flow; core to rotation consistency." },
    { name: "Painted Power",  type: "Offensive", note: "Scales damage off Lumina investment; arguably the best endgame damage Lumina." },
    { name: "At Death's Door", type: "Offensive", note: "Massive damage while at low HP; pairs with low-HP burst builds." },
    { name: "Critical Burn",  type: "Offensive", note: "+crit chance vs burning enemies; fuels all Burn builds, available early." }
  ],
  note: "Community consensus: farm Cheater early/mid, pivot toward Painted Power for endgame scaling. The four-battle mastery loop is the whole progression engine: equip 3 Pictos, win 4 fights, master them, repeat.",
  status: "live"
};

// ---- STATUS EFFECTS (core set) -----------------------------
const STATUS_EFFECTS = {
  intro: "Status effects drive most of the game's damage engines. Offensive builds revolve around stacking and converting these; defensive play is about cleansing or avoiding them. Exact values vary by source skill and version; verify in-game tooltips.",
  offensive: [
    { name: "Burn",        effect: "Damage over time; converted into burst by Burn-crit Pictos/Luminas. Core of the Fire/Maelle and Lune engines." },
    { name: "Mark",        effect: "Amplifies damage the marked enemy takes; applied by Verso and Sciel to set up the carry." },
    { name: "Defenceless", effect: "Target takes 25% more damage; applied by Maelle's Offensive Switch." },
    { name: "Foretell",    effect: "Sciel's stacking marker (up to 10, or 20 in Twilight); apply/consume to generate Sun/Moon charges." }
  ],
  defensive: [
    { name: "Shell",   effect: "Reduces magick damage taken." },
    { name: "Shield",  effect: "Absorbs an attack; enemy shields break after one hit." },
    { name: "Regen",   effect: "Restores HP over time." }
  ],
  affinities: [
    { name: "Weakness",   effect: "Takes 50% more damage" },
    { name: "Resistance", effect: "Takes 50% less damage" },
    { name: "Nullify",    effect: "Takes no damage" },
    { name: "Absorb",     effect: "Heals instead of taking damage" }
  ],
  status: "live"
};

// ---- ARTICLE PAGES (prose content) -------------------------
const ARTICLES = {
  "general-information": {
    title: "General Information",
    status: "live",
    sections: [
      { h: "What is Clair Obscur: Expedition 33?", p: "A single-player RPG by Sandfall Interactive, published by Kepler Interactive, set in a Belle Epoque-French-inspired fantasy world called The Continent. You lead Expedition 33 to find and destroy the Paintress, whose yearly painted number erases everyone of that age. The combat blends turn-based structure with real-time defense: dodge, jump, and parry every enemy attack on timing." },
      { h: "Release", p: "Released April 24, 2025 on PlayStation 5, Xbox Series X|S, and PC (Steam, Epic). Genre: action RPG with turn-based combat. It went on to win Game of the Year 2025." },
      { h: "The premise", p: "Once a year the Paintress wakes and paints a number on her monolith; everyone of that age turns to smoke and fades. The number ticks down each year. Expedition 33 departs on the final mission to destroy her so she can never paint death again." },
      { h: "Core systems at a glance", p: "Turn order shows on the left in battle so you can plan. AP (the blue bar) fuels skills; parries and basic attacks generate it. Builds come from Attributes, Skills, Weapons, and the Pictos/Lumina system rather than fixed classes. Expedition Flags act as the game's bonfires: heal, learn skills, and allocate attribute points." }
    ]
  },
  "combat": {
    title: "Combat",
    status: "live",
    sections: [
      { h: "Turn-based, real-time defense", p: "Battles are turn-based on offense and real-time on defense. On your turn you spend AP on skills and basic attacks via the Battle Wheel (Attack, Aim, Skills, Items). On the enemy's turn you Dodge, Parry, or Jump on timing. Mastering defense is the biggest skill jump in the game." },
      { h: "AP economy", p: "Most actions cost 1 AP. You gain AP by parrying and by landing basic attacks. Parrying an attack recovers 1 AP and avoids the damage; parrying an entire enemy chain lets you counter the final hit. Each character can equip up to 6 skills." },
      { h: "Parry, Dodge, Jump", p: "Time a dodge or parry late for a Perfect version. Some attacks can't be parried or dodged and show an icon: jump them instead, sometimes into a counterattack. Team-wide attacks call for an Expedition Counter, parried as a team." },
      { h: "Aim and weak points", p: "The Aim option uses free-aim to hit enemy weak points for extra damage. Shields break after a single attack. Quick-time events on some skills boost their effect when timed well." },
      { h: "The winning pattern", p: "Stack a status engine (Burn, Mark, Stains, Perfection) across turns, then trigger the payoff skill that consumes or multiplies it. Optimized parties erase bosses in a single cycle. Exploit Elemental Weakness/Resistance with Lune's Stains, and save the delete turn until the setup is built." }
    ]
  },
  "attributes": {
    title: "Attributes",
    status: "live",
    sections: [
      { h: "How attributes work", p: "Each level grants 1 Skill Point and 3 Attribute Points, allocated at Expedition Flags. Attributes shape a character's role; match them to the mechanic the character is built around." },
      { h: "The attributes", p: "Might raises raw damage (most damage dealers). Agility raises turn speed and parry-reliant play (Verso). Vitality raises HP for sustain/healers (Lune). Defense raises mitigation for tanks and survival builds. Luck raises crit rate, which pairs with Critical Burn for the Burn-crit engines." },
      { h: "Practical allocation", p: "Burn/crit carries (Maelle, Lune) lean Luck + Might. Parry-rank carries (Verso) lean Agility. Healers (Lune sustain variant) lean Vitality. Don't over-invest Defense on a carry; active defense (parry/dodge) covers most survival, but keep enough to absorb a missed parry." }
    ]
  },
  "new-player-help": {
    title: "New Player Help",
    status: "live",
    sections: [
      { h: "Learn to parry first", p: "Parry, don't just dodge. Parries avoid damage, recover AP, and open counters. It's the single biggest power spike available to you and it's free." },
      { h: "Master Pictos for Luminas", p: "Equip 3 Pictos, win 4 battles to master each, and their Luminas unlock for the whole team. Front-load this and your passive pool explodes. Grab Critical Burn early; it's available early and fuels Burn builds." },
      { h: "Build one carry, enable it", p: "Commit a damage carry (often Maelle), build a status engine (Burn or Mark), and use the others to set up the payoff turn. Spread Cheater and Energy Master Luminas to your damage dealers." },
      { h: "Don't ignore defense", p: "One clean boss hit can delete a character. Keep enough Vitality/Defense (or strict low-HP discipline) to survive a missed parry. Reserves swap in for KO'd actives, so don't field three glass cannons with no backup." },
      { h: "Exploit affinities", p: "Most enemies have elemental Weaknesses. Use Lune's Stains and element-matched skills to hit Weakness (50% more damage) and avoid Resistance/Nullify/Absorb." },
      { h: "Save the payoff turn", p: "Build the stack (Burn/Mark/rank) first, then spend it. Firing the delete skill before the setup is the most common beginner mistake." }
    ]
  }
};

if (typeof module !== "undefined") module.exports = { LUMINAS, STATUS_EFFECTS, ARTICLES };
