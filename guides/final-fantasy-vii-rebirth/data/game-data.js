/* FF7 Rebirth — builds, weapons, chapters, party equip data */
window.FF7R_DATA = {
  meta: {
    storageKey: "arcanum.ff7r.party-equip",
    maxPartySize: 3
  },

  phases: {
    early: { label: "Early Game", minChapter: 1, maxChapter: 6, class: "build-phase-early" },
    mid:   { label: "Mid Game",   minChapter: 7, maxChapter: 10, class: "build-phase-mid" },
    late:  { label: "Late Game",  minChapter: 11, maxChapter: 14, class: "build-phase-late" }
  },

  chapters: [
    { num: 1,  title: "Kalm — Beginnings", region: "Grasslands" },
    { num: 2,  title: "Mythril Mines", region: "Grasslands" },
    { num: 3,  title: "Junon Outskirts", region: "Junon" },
    { num: 4,  title: "Junon — The Parade", region: "Junon" },
    { num: 5,  title: "Corel Region", region: "Corel" },
    { num: 6,  title: "Gongaga", region: "Gongaga" },
    { num: 7,  title: "Cosmo Canyon", region: "Cosmo Canyon" },
    { num: 8,  title: "Gold Saucer & Wutai", region: "Gold Saucer" },
    { num: 9,  title: "Nibel Region", region: "Nibel" },
    { num: 10, title: "Ancient Temple", region: "Temple of the Ancients" },
    { num: 11, title: "Ancient Forest", region: "Ancient Forest" },
    { num: 12, title: "Forgotten Capital", region: "Forgotten Capital" },
    { num: 13, title: "Northern Crater Approach", region: "Northern Crater" },
    { num: 14, title: "Endgame", region: "Endgame" }
  ],

  materiaTypes: {
    green:  "mat-green",
    blue:   "mat-blue",
    yellow: "mat-yellow",
    purple: "mat-purple",
    red:    "mat-red"
  },

  /* Limited-copy materia — party equipper respects these */
  limitedMateria: {
    elemental: { copies: 3, priority: ["cloud", "tifa", "yuffie", "red"] },
    magnify:   { copies: 3, priority: ["barret", "cait", "red", "aerith"] },
    atbBoost:  { copies: 3, priority: ["cloud", "aerith", "tifa", "yuffie"] },
    warding:   { copies: 2, priority: ["aerith", "barret"] }
  },

  rolePriority: {
    magnifyCure: ["barret", "cait", "red", "aerith"],
    raise:       ["aerith", "barret", "tifa", "red", "yuffie", "cloud", "cait"],
    atbBoost:    ["cloud", "tifa", "aerith", "yuffie", "red"],
    elementalWeapon: ["cloud", "tifa", "yuffie", "red"]
  },

  weapons: {
    /* —— Cloud —— */
    "buster-sword": {
      id: "buster-sword", name: "Buster Sword", character: "cloud",
      chapter: 1, phase: "early",
      location: "Starting weapon — equipped at the beginning of Chapter 1.",
      shop: null,
      notes: "Balanced ATK/M.ATK. Solid through early Grasslands."
    },
    "hardedge": {
      id: "hardedge", name: "Hardedge", character: "cloud",
      chapter: 1, phase: "early",
      location: "Grasslands — chest near the abandoned Chocobo ranch, east of Kalm.",
      shop: "Grasslands Chadley Materia shop after completing early World Intel.",
      notes: "High ATK, low M.ATK. Best early physical option for Cloud."
    },
    "twin-stinger": {
      id: "twin-stinger", name: "Twin Stinger", character: "cloud",
      chapter: 3, phase: "mid",
      location: "Junon Region — Port Side warehouse chest during Chapter 3.",
      shop: "Junon Region Chadley shop after sufficient Battle Intel.",
      notes: "Linked materia slot. Core mid-game weapon for physical/hybrid builds."
    },
    "rune-blade": {
      id: "rune-blade", name: "Rune Blade", character: "cloud",
      chapter: 9, phase: "late",
      location: "Nibel Region — hidden chest on the Nibel Plateau trail.",
      shop: "Nibel Chadley shop (late Intel rewards).",
      notes: "High M.ATK — turns Cloud into a caster. Pairs with Arcane Ward synergy."
    },
    "igneous-saber": {
      id: "igneous-saber", name: "Igneous Saber", character: "cloud",
      chapter: 11, phase: "late",
      location: "Combat Simulator — Chadley Brutal Challenge reward (post-Ch.11).",
      shop: null,
      notes: "Endgame slot count at Weapon Lv.7. Hard Mode staple."
    },

    /* —— Barret —— */
    "big-bertha": {
      id: "big-bertha", name: "Big Bertha", character: "barret",
      chapter: 1, phase: "early",
      location: "Starting weapon for Barret in Chapter 1.",
      shop: null,
      notes: "Reliable ranged DPS baseline."
    },
    "ekg-cannon": {
      id: "ekg-cannon", name: "EKG Cannon", character: "barret",
      chapter: 4, phase: "mid",
      location: "Junon — Upper City maintenance tunnel chest (Chapter 4).",
      shop: "Junon Chadley shop after mid-region Intel.",
      notes: "Extra materia slots. Ideal Magnify+Cure carrier."
    },
    "missing-score": {
      id: "missing-score", name: "Missing Score", character: "barret",
      chapter: 10, phase: "late",
      location: "Temple of the Ancients — reward chest after the clock puzzle.",
      shop: null,
      notes: "Scales damage with AP on slotted materia. Top Barret weapon."
    },

    /* —— Tifa —— */
    "metal-knuckles": {
      id: "metal-knuckles", name: "Metal Knuckles", character: "tifa",
      chapter: 1, phase: "early",
      location: "Grasslands — Tifa's default weapon at game start.",
      shop: "Grasslands Chadley shop.",
      notes: "Learn Unbridled Strength timing with this first."
    },
    "purple-pain": {
      id: "purple-pain", name: "Purple Pain", character: "tifa",
      chapter: 5, phase: "mid",
      location: "Corel Region — collapsed rail tunnel side path chest.",
      shop: "Corel Chadley shop.",
      notes: "Boosts M.ATK — amplifies powered-up glove attacks."
    },
    "feathered-gloves": {
      id: "feathered-gloves", name: "Feathered Gloves", character: "tifa",
      chapter: 9, phase: "late",
      location: "Nibel Region — Wutai pagoda side quest reward.",
      shop: "Nibel Chadley shop (late).",
      notes: "Highest ATK knuckles. Best for raw stagger burst."
    },
    "kaiser-knuckles": {
      id: "kaiser-knuckles", name: "Kaiser Knuckles", character: "tifa",
      chapter: 11, phase: "late",
      location: "Combat Simulator — high-tier Brutal Challenge.",
      shop: null,
      notes: "Pure ATK endgame option. Maximum physical stagger damage."
    },

    /* —— Aerith —— */
    "guard-stick": {
      id: "guard-stick", name: "Guard Stick", character: "aerith",
      chapter: 1, phase: "early",
      location: "Aerith's starting staff in Chapter 1.",
      shop: null,
      notes: "Basic healer setup. Prioritize Cure and MP Up."
    },
    "silver-staff": {
      id: "silver-staff", name: "Silver Staff", character: "aerith",
      chapter: 6, phase: "mid",
      location: "Gongaga Region — reactor outskirts hidden chest.",
      shop: "Gongaga Chadley shop.",
      notes: "Strong M.ATK bump. Arcane Ward damage starts here."
    },
    "mythril-rod": {
      id: "mythril-rod", name: "Mythril Rod", character: "aerith",
      chapter: 9, phase: "late",
      location: "Nibel Region — Mt. Nibel summit trail chest.",
      shop: "Nibel Chadley shop.",
      notes: "Top magic scaling. Warding+Subversion armor pair target."
    },

    /* —— Red XIII —— */
    "mythril-hairpin": {
      id: "mythril-hairpin", name: "Mythril Hairpin", character: "red",
      chapter: 7, phase: "mid",
      location: "Cosmo Canyon — Red XIII joins with this weapon (Chapter 7).",
      shop: null,
      notes: "Available when Red XIII joins the roster."
    },
    "gold-hairpin": {
      id: "gold-hairpin", name: "Gold Hairpin", character: "red",
      chapter: 8, phase: "mid",
      location: "Gold Saucer — Wonder Square prize exchange or nearby chest.",
      shop: "Gold Saucer vendor after Ch.8.",
      notes: "Linked slot for Elemental pairing."
    },
    "behemoth-horn": {
      id: "behemoth-horn", name: "Behemoth Horn", character: "red",
      chapter: 11, phase: "late",
      location: "Ancient Forest — Behemoth rare drop / nearby chest.",
      shop: "Combat Simulator exchange (late Intel).",
      notes: "Highest ATK hairpin. Vengeance burst specialist."
    },

    /* —— Yuffie —— */
    "4-point-shuriken": {
      id: "4-point-shuriken", name: "4-Point Shuriken", character: "yuffie",
      chapter: 8, phase: "mid",
      location: "Wutai — Yuffie joins during Chapter 8 with this weapon.",
      shop: null,
      notes: "Learn Doppelganger element swapping immediately."
    },
    "conformer": {
      id: "conformer", name: "Conformer", character: "yuffie",
      chapter: 9, phase: "late",
      location: "Wutai — Fortress infiltration reward chest.",
      shop: "Wutai/Nibel Chadley shop after Wutai Intel.",
      notes: "Best-in-slot. Full elemental coverage unlocks top DPS."
    },

    /* —— Cait Sith —— */
    "poker-stick": {
      id: "poker-stick", name: "Poker Stick", character: "cait",
      chapter: 10, phase: "mid",
      location: "Temple of the Ancients — Cait Sith joins in Chapter 10.",
      shop: null,
      notes: "Support-focused default. Strong Magnify carrier."
    },
    "saved-by-zero": {
      id: "saved-by-zero", name: "Saved by Zero", character: "cait",
      chapter: 12, phase: "late",
      location: "Forgotten Capital — side path chest near the altar.",
      shop: "Late Chadley shops after Ch.12 Intel.",
      notes: "Extra slots for full support kit on Hard Mode."
    }
  },

  characters: [
    {
      id: "cloud",
      name: "Cloud Strife",
      role: "Primary Attacker / Flexible",
      cssClass: "char-cloud",
      unlockChapter: 1,
      alwaysInParty: true,
      tabs: ["Physical DPS", "Magic Hybrid", "Hard Mode"],
      weaponIds: ["buster-sword", "hardedge", "twin-stinger", "rune-blade", "igneous-saber"],
      builds: {
        early: {
          label: "Early Game",
          defaultWeapon: "hardedge",
          altWeapons: ["buster-sword"],
          materia: [
            { name: "Fire / Ice / Lightning", type: "red" },
            { name: "Elemental + Fire", type: "blue", pair: "Weapon pair" },
            { name: "HP Up", type: "green" },
            { name: "Steadfast Block", type: "yellow" }
          ],
          notes: "Focus on learning Punisher Mode timing. Elemental on weapon adds free damage to all normal attacks vs weak enemies."
        },
        mid: {
          label: "Mid Game",
          defaultWeapon: "twin-stinger",
          materia: [
            { name: "Fire / Ice / Lightning", type: "red" },
            { name: "Elemental + best element", type: "blue", pair: "Weapon" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up × 2", type: "green" },
            { name: "Precision Defense Focus", type: "yellow" }
          ],
          notes: "Twin Stinger gives a linked slot, great for paired materia. Precision Defense Focus lets you charge ATB by blocking — synergizes perfectly with Punisher Mode."
        },
        late: {
          label: "Late Game",
          defaultWeapon: "rune-blade",
          altWeapons: ["twin-stinger", "igneous-saber"],
          materia: [
            { name: "Elemental + Ice", type: "blue", pair: "Weapon", limited: "elemental" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up × 2", type: "green" },
            { name: "MP Up", type: "green" },
            { name: "Precision Defense Focus", type: "yellow" },
            { name: "Fire / Ice / Lightning", type: "red" }
          ],
          notes: "Commit to a role: Rune Blade for magic-hybrid through Wards, or Igneous Saber for maximum physical slots before Hard Mode."
        },
        hard: {
          label: "Hard Mode",
          defaultWeapon: "igneous-saber",
          accessory: "Gotterdammerung (if obtained)",
          materia: [
            { name: "Elemental + Ice", type: "blue", pair: "Weapon", limited: "elemental" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "MP Up", type: "green" },
            { name: "HP Up", type: "green" },
            { name: "Steadfast Block", type: "yellow" },
            { name: "Cure / Raise", type: "red" }
          ],
          notes: "Cloud often needs to self-sustain on Hard. Keep Cure on him as backup. ATB Boost turns a full ATB bar into an emergency action — save it for stagger windows or revivals."
        }
      }
    },
    {
      id: "barret",
      name: "Barret Wallace",
      role: "Ranged DPS / Tank",
      cssClass: "char-barret",
      unlockChapter: 1,
      weaponIds: ["big-bertha", "ekg-cannon", "missing-score"],
      builds: {
        early: {
          label: "Early Game",
          defaultWeapon: "big-bertha",
          materia: [
            { name: "Fire / Ice / Lightning", type: "red" },
            { name: "HP Up", type: "green" },
            { name: "Charging Uppercut", type: "yellow" }
          ],
          notes: "Barret's early job is to stay alive and deal consistent ranged damage. Keep HP Up prioritized — his high HP pool is a party asset."
        },
        mid: {
          label: "Mid Game",
          defaultWeapon: "ekg-cannon",
          materia: [
            { name: "Magnify + Cure", type: "blue", pair: "Armor pair", limited: "magnify" },
            { name: "Lightning", type: "red" },
            { name: "HP Up × 2", type: "green" },
            { name: "Barrier", type: "purple" }
          ],
          notes: "Magnify+Cure on Barret turns him into a passive healer — cast Cura once and it hits the whole party. Frees Aerith's ATB for damage."
        },
        late: {
          label: "Late Game",
          defaultWeapon: "missing-score",
          altWeapons: ["ekg-cannon"],
          materia: [
            { name: "Magnify + Cure", type: "blue", limited: "magnify" },
            { name: "Lightning / Fire", type: "red" },
            { name: "HP Up × 2", type: "green" },
            { name: "Barrier", type: "purple" },
            { name: "MP Up", type: "green" }
          ],
          notes: "Missing Score scales off AP on equipped materia — slot leveled materia for bonus damage while keeping the Magnify heal bot role."
        },
        hard: {
          label: "Hard Mode",
          defaultWeapon: "missing-score",
          materia: [
            { name: "Magnify + Cure", type: "blue", limited: "magnify" },
            { name: "MP Up × 2", type: "green" },
            { name: "HP Up × 2", type: "green" },
            { name: "Barrier", type: "purple" },
            { name: "Raise", type: "red" }
          ],
          notes: "On Hard, Barret is primarily your walking Magnify+Cure bot and damage sponge. Missing Score scaling off AP on equipped materia gives great damage late."
        }
      }
    },
    {
      id: "tifa",
      name: "Tifa Lockhart",
      role: "Melee Burst / Physical DPS",
      cssClass: "char-tifa",
      unlockChapter: 1,
      weaponIds: ["metal-knuckles", "purple-pain", "feathered-gloves", "kaiser-knuckles"],
      builds: {
        early: {
          label: "Early Game",
          defaultWeapon: "metal-knuckles",
          materia: [
            { name: "Elemental + Fire", type: "blue", pair: "Weapon", limited: "elemental" },
            { name: "HP Up", type: "green" },
            { name: "Focused Strike", type: "yellow" }
          ],
          notes: "Focus on learning the Unbridled Strength charge timing above all else. Elemental on weapon gives her ranged magic reach she otherwise lacks."
        },
        mid: {
          label: "Mid Game",
          defaultWeapon: "purple-pain",
          materia: [
            { name: "Elemental + Ice", type: "blue", pair: "Weapon", limited: "elemental" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up", type: "green" },
            { name: "Starshower", type: "yellow" }
          ],
          notes: "Purple Pain boosts magic attack, which amplifies her Unbridled Strength powered-up attacks. ATB Boost extends burst windows during stagger."
        },
        late: {
          label: "Late Game",
          defaultWeapon: "feathered-gloves",
          altWeapons: ["kaiser-knuckles", "purple-pain"],
          materia: [
            { name: "Elemental + target weakness", type: "blue", pair: "Weapon", limited: "elemental" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up × 2", type: "green" },
            { name: "Starshower", type: "yellow" },
            { name: "Raise", type: "red" }
          ],
          notes: "Max glove charge before every boss stagger. Kaiser Knuckles for pure ATK; Feathered Gloves if you want slightly more magic synergy."
        },
        hard: {
          label: "Hard Mode",
          defaultWeapon: "feathered-gloves",
          altWeapons: ["kaiser-knuckles"],
          materia: [
            { name: "Elemental + target weakness", type: "blue", limited: "elemental" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up + MP Up", type: "green" },
            { name: "Raise", type: "red" }
          ],
          notes: "On Hard, Tifa is your primary stagger damage dealer. Get her in, get gloves charged to max, and unload during stagger. Keep Raise for emergency revives."
        }
      }
    },
    {
      id: "aerith",
      name: "Aerith Gainsborough",
      role: "Magic / Healer / Support",
      cssClass: "char-aerith",
      unlockChapter: 1,
      weaponIds: ["guard-stick", "silver-staff", "mythril-rod"],
      builds: {
        early: {
          label: "Early Game",
          defaultWeapon: "guard-stick",
          materia: [
            { name: "Fire / Ice / Lightning", type: "red" },
            { name: "Cure", type: "red" },
            { name: "MP Up", type: "green" }
          ],
          notes: "Early Aerith: keep her alive, keep MP up. She's the party's only reliable healing early on. Start learning Ward placement immediately."
        },
        mid: {
          label: "Mid Game",
          defaultWeapon: "silver-staff",
          materia: [
            { name: "Fire / Ice", type: "red" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "MP Up × 2", type: "green" },
            { name: "Assess", type: "yellow" }
          ],
          notes: "Aerith becomes the party's magic engine. Place Wards before encounters, cast spells inside them. If Barret has Magnify+Cure, let Aerith deal damage instead."
        },
        late: {
          label: "Late Game",
          defaultWeapon: "mythril-rod",
          materia: [
            { name: "Fire / Ice / Lightning", type: "red" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "MP Up × 2", type: "green" },
            { name: "Magic Efficiency + Cure", type: "blue", pair: "Armor" },
            { name: "Raise", type: "red" }
          ],
          notes: "Full damage caster with emergency Raise. Arcane Ward before every boss — double-cast inside it for enormous burst."
        },
        hard: {
          label: "Hard Mode",
          defaultWeapon: "mythril-rod",
          materia: [
            { name: "Warding + Subversion", type: "blue", pair: "Armor pair", limited: "warding" },
            { name: "MP Up × 2", type: "green" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "Raise", type: "red" },
            { name: "Cure (emergency only)", type: "red" }
          ],
          notes: "Hard Mode Aerith is your most critical character. Warding+Subversion on armor halves MP costs of status magic. ATB Boost for emergency Planet's Protection. Raise is her most important materia — never let her die."
        }
      }
    },
    {
      id: "red",
      name: "Red XIII",
      role: "Balanced / Counter Specialist",
      cssClass: "char-red",
      unlockChapter: 7,
      weaponIds: ["mythril-hairpin", "gold-hairpin", "behemoth-horn"],
      builds: {
        early: {
          label: "Early Game",
          defaultWeapon: "mythril-hairpin",
          materia: [
            { name: "Fire / Ice / Lightning", type: "red" },
            { name: "HP Up", type: "green" },
            { name: "Stardust Ray", type: "yellow" }
          ],
          notes: "Let Red XIII take hits intentionally to build Vengeance gauge. Stardust Ray is exceptional for stagger pressure on armored enemies."
        },
        mid: {
          label: "Mid Game",
          defaultWeapon: "gold-hairpin",
          materia: [
            { name: "Elemental + Lightning", type: "blue", pair: "Weapon", limited: "elemental" },
            { name: "Thundara / Thundaga", type: "red" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up + MP Up", type: "green" }
          ],
          notes: "Vengeance Mode attacks are physical so elemental on weapon adds damage. ATB Boost during Vengeance Mode + stagger window is enormous burst."
        },
        late: {
          label: "Late Game",
          defaultWeapon: "behemoth-horn",
          materia: [
            { name: "Elemental + Ice", type: "blue", pair: "Weapon", limited: "elemental" },
            { name: "Thundaga", type: "red" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up + MP Up", type: "green" },
            { name: "Raise", type: "red" }
          ],
          notes: "Behemoth Horn maximizes Vengeance burst. Stack Vengeance inside an Aerith Ward for peak damage."
        },
        hard: {
          label: "Hard Mode",
          defaultWeapon: "behemoth-horn",
          materia: [
            { name: "Elemental + Ice", type: "blue", limited: "elemental" },
            { name: "MP Up × 2", type: "green" },
            { name: "Raise", type: "red" },
            { name: "Barrier", type: "purple" }
          ],
          notes: "Red XIII in Hard Mode is reliable filler damage and a Raise carrier. His self-sustain via Vengeance means he needs less external healing than other characters."
        }
      }
    },
    {
      id: "yuffie",
      name: "Yuffie Kisaragi",
      role: "Elemental DPS / Ninjutsu Specialist",
      cssClass: "char-yuffie",
      unlockChapter: 8,
      weaponIds: ["4-point-shuriken", "conformer"],
      builds: {
        early: {
          label: "Early Game",
          defaultWeapon: "4-point-shuriken",
          materia: [
            { name: "Fire / Ice / Lightning", type: "red" },
            { name: "HP Up", type: "green" },
            { name: "Windstorm", type: "yellow" }
          ],
          notes: "Learn to switch elements on the fly with Doppelganger. Yuffie's power spike is fully realized once you have multiple elemental materia to cycle through."
        },
        mid: {
          label: "Mid Game",
          defaultWeapon: "conformer",
          materia: [
            { name: "Fire + Ice + Lightning + Wind", type: "red" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up + MP Up", type: "green" }
          ],
          notes: "Yuffie scales entirely off elemental coverage. At this point she should have all 4 primary elements ready to swap. Art of War into elemental Ninjutsu into stagger = top DPS in game."
        },
        late: {
          label: "Late Game",
          defaultWeapon: "conformer",
          materia: [
            { name: "Fire + Ice + Lightning + Wind", type: "red" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "HP Up + MP Up", type: "green" },
            { name: "Comet", type: "red" }
          ],
          notes: "Comet on Yuffie is the highest magic burst in the game. Match element before pulling aggro — Ninjutsu costs no MP."
        },
        hard: {
          label: "Hard Mode",
          defaultWeapon: "conformer",
          materia: [
            { name: "Fire + Ice + Lightning + Wind", type: "red" },
            { name: "MP Up × 2", type: "green" },
            { name: "ATB Boost", type: "purple", limited: "atbBoost" },
            { name: "Raise", type: "red" }
          ],
          notes: "Yuffie is arguably the strongest Hard Mode damage dealer. Her Ninjutsu costs no MP — only ATB — so she conserves resources while dealing enormous damage."
        }
      }
    },
    {
      id: "cait",
      name: "Cait Sith",
      role: "Support / Wildcard",
      cssClass: "char-cait",
      unlockChapter: 10,
      weaponIds: ["poker-stick", "saved-by-zero"],
      builds: {
        early: {
          label: "Early → Mid",
          defaultWeapon: "poker-stick",
          materia: [
            { name: "Magnify + Cure", type: "blue", limited: "magnify" },
            { name: "Lightning / Fire", type: "red" },
            { name: "HP Up", type: "green" }
          ],
          notes: "Cait works well as a Magnify+Cure carrier early on, freeing other characters for pure damage. Use Toy Soldiers for passive damage on priority targets."
        },
        mid: {
          label: "Mid Game",
          defaultWeapon: "poker-stick",
          materia: [
            { name: "Magnify + Cure", type: "blue", limited: "magnify" },
            { name: "Lightning / Fire", type: "red" },
            { name: "HP Up", type: "green" },
            { name: "First Strike", type: "yellow" }
          ],
          notes: "Deploy Moogle fast with First Strike. If Barret already carries Magnify, shift Cait to ATB generation and Barrier support."
        },
        late: {
          label: "Late Game",
          defaultWeapon: "saved-by-zero",
          materia: [
            { name: "Magnify + Cure", type: "blue", limited: "magnify" },
            { name: "Barrier", type: "purple" },
            { name: "MP Up × 2", type: "green" },
            { name: "Raise", type: "red" }
          ],
          notes: "Full support kit — Barrier pre-fight, Magnify heals, Slots as Hail Mary on phase transitions."
        },
        hard: {
          label: "Hard Mode",
          defaultWeapon: "saved-by-zero",
          materia: [
            { name: "Magnify + Cure", type: "blue", limited: "magnify" },
            { name: "MP Up × 2", type: "green" },
            { name: "Barrier", type: "purple" },
            { name: "Raise", type: "red" }
          ],
          notes: "Hard Mode Cait is all support. His ATB generation rate is exceptional — keep him on field to charge ATB, cast Barrier on the party pre-fight, and use Slots as a Hail Mary on dangerous phase transitions."
        }
      }
    }
  ]
};