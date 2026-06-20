// ============================================================
// THE ARCANUM - Clair Obscur Wiki
// characters.js - the playable roster
//
// Each character is one object. The renderer builds both the
// index grid and the individual character pages from this.
// Add a character = add an object. Edit a kit = edit one field.
// ============================================================

const CHARACTERS = [
  {
    slug: "gustave",
    name: "Gustave",
    role: "Engineer / Overcharge striker",
    weapon: "Gun & Sword",
    quote: "For those who come after.",
    summary: "A resourceful, dedicated Engineer chosen to lead Expedition 33. The first playable character. His attacks are basic but hit hard with the right upgrades, and his whole kit revolves around building and unleashing Overcharge.",
    mechanic: {
      name: "Overcharge",
      detail: "Gustave builds charges by attacking, then dumps them in one devastating Lightning hit. Lumiere Assault deals low physical damage over multiple hits, but critical hits generate an extra Overcharge charge. Overcharge damage scales with the number of charges spent. He also has a free-aim system to target enemy weak points."
    },
    startingSkills: ["Lumiere Assault", "Overcharge"],
    buildNotes: "Stack charge generation and crit, then release Overcharge in the burst window. A reliable, beginner-friendly damage core for the early game.",
    actStatus: "Starting character (Act I)"
  },
  {
    slug: "lune",
    name: "Lune",
    role: "Elemental Mage / top healer",
    weapon: "Staff",
    quote: "When one falls, we continue.",
    summary: "A passionate Scholar and Mage charting the Expedition's path. Daughter of two prominent researchers, she carries both their work and the weight of keeping the Expedition alive. The first companion you meet.",
    mechanic: {
      name: "Elemental Stains",
      detail: "Lune generates and consumes Stains to power her skills. Five types: Ice, Fire, Lightning, Earth, and Light (Light substitutes for any element). Skills generate some Stains and consume others, so you cycle elements to keep her engine running. She also applies and exploits Elemental Affinities."
    },
    affinities: [
      { name: "Weakness",   effect: "Takes 50% more damage" },
      { name: "Resistance", effect: "Takes 50% less damage" },
      { name: "Nullify",    effect: "Takes no damage" },
      { name: "Absorb",     effect: "Heals instead of taking damage" }
    ],
    startingSkills: ["Ice Lance", "Immolation"],
    buildNotes: "Cycle Stains deliberately: Ice Lance makes Ice + Light, Fire skills consume Ice. Pairs Critical Burn well since she burns constantly. The party's best healer (Tree of Life) plus flexible elemental burst.",
    actStatus: "First companion (Act I)"
  },
  {
    slug: "maelle",
    name: "Maelle",
    role: "Stance duelist / Burn carry",
    weapon: "Rapier",
    quote: "I've been having nightmares...",
    summary: "Gustave's foster sister, orphaned at three, a shy loner eager to see the world beyond Lumiere. Joins at sixteen. In combat she is the game's premier damage ceiling through her Stance system.",
    mechanic: {
      name: "Stances",
      detail: "Maelle's skills move her between three Stances. Entering a new Stance grants 1 AP, so chaining stance-changers without interruption maximizes her output. After a skill she reverts to Stanceless unless maintained.",
      stances: [
        { name: "Defensive Stance", effect: "Takes less damage, gains 1 AP per Parry or Dodge" },
        { name: "Offensive Stance", effect: "Deals more damage but takes increased damage" },
        { name: "Virtuose Stance",  effect: "Deals a lot more damage (the payoff stance)" }
      ]
    },
    startingSkills: ["Offensive Switch", "Percee", "Spark"],
    buildNotes: "Offensive Switch enters Offensive Stance and applies Defenceless (target takes 25% more damage). Keep her in Virtuose Stance as much as possible; with Burn-crit Pictos stacked she one-shots much of the game. Highest ceiling, needs setup.",
    actStatus: "Third character found (Act I)"
  },
  {
    slug: "sciel",
    name: "Sciel",
    role: "Foretell controller / Dark burst",
    weapon: "Scythe",
    quote: "They're expecting a show.",
    summary: "A cheerful, serene Warrior, former farmer turned teacher, fully committed to the Expedition. Her carefree nature hides a precise, charge-stacking combat style.",
    mechanic: {
      name: "Foretell / Sun & Moon",
      detail: "Sciel applies and consumes Foretell on enemies (10 max each). Applying Foretell generates Sun Charges; consuming it generates Moon Charges. With both a Sun and a Moon charge active she can enter Twilight, which doubles Foretell application, raises the cap to 20, and scales damage with charges consumed.",
      charges: [
        { name: "Sun Charge",  effect: "Gain 1 AP per Foretell consumed" },
        { name: "Moon Charge", effect: "Gain 1 AP per Foretell applied" }
      ]
    },
    startingSkills: ["Focused Foretell", "Twilight Slash"],
    buildNotes: "Focused Foretell applies 5 Foretell and generates a Sun Charge. Build to Twilight for the big damage swing. Strong support/enabler: Marking and AP acceleration make her the setup for the carry's delete turn.",
    actStatus: "Reunites in Act I"
  },
  {
    slug: "verso",
    name: "Verso",
    role: "Perfection-rank carry / Mark",
    weapon: "Sword",
    quote: "Here we go.",
    summary: "A member of Expedition Zero who shadows the survivors of Expedition 33. A veteran fighter who joins to end the Paintress. His damage climbs the cleaner you play.",
    mechanic: {
      name: "Perfection (Rank D to S)",
      detail: "Verso gains Perfection whenever he deals damage, parries, or dodges; higher rank = more damage and unlocks extra skill effects. Taking damage drops his rank by 1 (once per enemy turn), so parry and dodge uptime is everything. He starts each fight at D and climbs D > C > B > A > S.",
      ranks: ["D", "C", "B", "A", "S"]
    },
    startingSkills: [],
    buildNotes: "Stack gear/Pictos that grant extra turns or attacks to climb rank faster. Once holding S, his Mark amplifies team damage, making him the meta carry/enabler alongside Maelle and Lune.",
    actStatus: "Joins during the campaign"
  },
  {
    slug: "monoco",
    name: "Monoco",
    role: "Bestial shapeshifter / anti-Break",
    weapon: "Bestial Wheel",
    quote: "I'm busy beating up strangers.",
    summary: "A bloodthirsty but friendly Gestral, one of the few who speak the human language. Unaffected by the Paintress, he joins for the pure thrill of the fight.",
    mechanic: {
      name: "Bestial Wheel & Nevron Legs",
      detail: "Monoco fights through a Wheel of Masks; each Mask upgrades specific skills, while the Almighty Mask upgrades all of them. Using a skill advances the Wheel to the next Mask. He also learns enemy skills by collecting Nevron legs: when a bootable-leg icon appears on a Nevron's health bar and Monoco is in the party at its death, he loots the leg and learns that skill."
    },
    startingSkills: ["Chalier Combo", "Stalact Punches"],
    buildNotes: "Flexible toolbox that grows with the bestiary. Strong against enemies with large Break bars or high resistances; swap him in when Break or resistance is the wall.",
    actStatus: "Recruited in Act II"
  },
  {
    slug: "esquie",
    name: "Esquie",
    role: "Traversal / support being",
    weapon: "(non-combat utility)",
    quote: "",
    summary: "A powerful, mythical, famously lazy being beloved by Lumiere's children. Legends call him the most powerful being in the world, able to soar the skies and dive the seas. He enables world traversal rather than fighting in the standard party.",
    mechanic: {
      name: "Traversal abilities",
      detail: "Esquie unlocks movement across The Continent as the story progresses (crossing the sea, flight, underwater travel). His Underwater ability opens access to later areas. Met in Act I by helping him find his pet, Florrie."
    },
    startingSkills: [],
    buildNotes: "Not a standard combat carry; his value is opening the map and reaching gated content. Unlock his abilities through story progression.",
    actStatus: "Met in Act I"
  },
  {
    slug: "renoir",
    name: "Renoir",
    role: "Story figure",
    weapon: "(varies)",
    quote: "",
    summary: "A forceful, passionate man carrying deep pain, desperation, and a fear of loss. He pushes forward to save his family by any means. You meet him repeatedly across the story; his background and relation to the team unfolds as you progress.",
    mechanic: {
      name: "Story-gated",
      detail: "Kept spoiler-light: Renoir's role and significance develop through the campaign. Progress the story to learn more."
    },
    startingSkills: [],
    buildNotes: "Encountered through the narrative rather than a standard early recruit.",
    actStatus: "Recurring across the story"
  }
];

if (typeof module !== "undefined") module.exports = { CHARACTERS };
