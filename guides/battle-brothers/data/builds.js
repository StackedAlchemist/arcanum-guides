/* ============================================================
   THE MERCENARY CODEX - character build database
   Single source of truth for the Builds page and (later) the
   Build Planner presets. Perk paths respect the 7-tier gate:
   tier N unlocks after (N-1) points spent, so Battle Forged
   (tier 6) is earliest at level 6, capstones (tier 7) at 7.

   Curated paths align with u/Fearstalker's community table
   where a close match exists; narrated prose is our own.

   Row fields:
     id, tag, name, subtitle, tier, path (bf|nimble|hybrid),
     role, blurb, stats[], talents, backgrounds, weapons,
     perks[{level, id, name, gate?}], levelup, armor{early,mid,late,note},
     milestones[{level, text}], notes, variants
   ============================================================ */
window.BB_BUILDS = {
  meta: {
    version: "1.5.2.2",
    rosterKey: "arcanum.bb.roster",
    source: "u/Fearstalker perk table (community) + original prose"
  },

  /* shorthand for perk rows */
  p: function (level, id, name, gate) {
    return { level: level, id: id, name: name, gate: gate || false };
  },

  builds: [
    {
      id: "anvil",
      tag: "ANV",
      name: "The Anvil",
      subtitle: "Shield Tank",
      tier: "S",
      path: "bf",
      role: "Tank",
      blurb: "Holds the corner, binds multiple enemies, body-blocks flanks so your damage dealers stay protected. Not a killer — a wall.",
      stats: [
        { k: "Melee Def", v: "40+" },
        { k: "Fatigue", v: "130+" },
        { k: "Resolve", v: "60+" },
        { k: "HP", v: "80+" },
        { k: "Ranged Def", v: "10–15" },
        { k: "Armor", v: "Heaviest" }
      ],
      talents: "Melee Defense, Fatigue, Resolve",
      backgrounds: "Wildman, Sellsword, Hedge Knight, Brawler, Farmhand (cheap, high HP/Fatigue)",
      weapons: "Kite shield + one-hander. Carry a spear (hold the line), mace (stun), and hammer (armor) via Quick Hands / Bags & Belts.",
      perks: [
        { level: 1, id: "student", name: "Student" },
        { level: 2, id: "colossus", name: "Colossus" },
        { level: 3, id: "gifted", name: "Gifted" },
        { level: 4, id: "fortified-mind", name: "Fortified Mind" },
        { level: 5, id: "underdog", name: "Underdog" },
        { level: 6, id: "battle-forged", name: "Battle Forged", gate: true },
        { level: 7, id: "indomitable", name: "Indomitable", gate: true },
        { level: 8, id: "lone-wolf", name: "Lone Wolf" },
        { level: 9, id: "shield-expert", name: "Shield Expert" },
        { level: 10, id: "recover", name: "Recover" },
        { level: 11, id: "taunt", name: "Taunt" }
      ],
      levelup: "Melee Defense · Fatigue · Resolve — take HP when Defense rolls low.",
      armor: {
        early: "Padded / leather + heater shield. Any frontliner gear until you can afford mail.",
        mid: "Mail Hauberk (−18) + Barbute or Sallet. Kite shield. You're building toward plate, not Nimble.",
        late: "Coat of Plates or Heraldic Hauberk + Full Helm. Battle Forged wants raw armor points — the heaviest set you can still swing with.",
        note: "Battle Forged path: ignore combined fatigue for Nimble. Stack total armor; Brawny optional if you add a side weapon."
      },
      milestones: [
        { level: 2, text: "Rename to [ANV] — tag every brother on hire so you never forget the plan." },
        { level: 4, text: "Shield Expert online — kite shield defense jumps. Safe to hold a choke." },
        { level: 6, text: "Battle Forged — first fight in real plate. Upgrade body armor this level if you can." },
        { level: 7, text: "Indomitable — your panic button vs armor-piercing alpha. Finished tank core." }
      ],
      notes: "Underdog stops flankers shredding defense; Indomitable + Recover negates armor-piercing spikes. Swap Lone Wolf for Rotation if he stays in the blob. One or two per company.",
      variants: "Pure wall: drop Lone Wolf for Taunt + Steel Brow. Nimble tank variant exists in the Compendium."
    },
    {
      id: "hammerfall",
      tag: "HMR",
      name: "Hammerfall",
      subtitle: "Two-Handed Hammer",
      tier: "S",
      path: "bf",
      role: "Frontline DPS",
      blurb: "The can-opener. Smashes through the heaviest armor (Orc Warriors, Chosen, Honor Guard) where everything else bounces.",
      stats: [
        { k: "Melee Skill", v: "90+" },
        { k: "Melee Def", v: "35+" },
        { k: "Fatigue", v: "130+" },
        { k: "HP", v: "75+" },
        { k: "Resolve", v: "50" },
        { k: "Ranged Def", v: "grow it" }
      ],
      talents: "Melee Skill, Melee Defense, Fatigue",
      backgrounds: "Sellsword, Hedge Knight, Wildman, Adventurous Noble, Brawler. Traits: Iron Lungs, Strong.",
      weapons: "Two-Handed Hammer or Polehammer. Sidearm Rondel Dagger (Quick Hands) to strip armor off downed foes.",
      perks: [
        { level: 1, id: "student", name: "Student" },
        { level: 2, id: "colossus", name: "Colossus" },
        { level: 3, id: "pathfinder", name: "Pathfinder" },
        { level: 4, id: "quick-hands", name: "Quick Hands" },
        { level: 5, id: "underdog", name: "Underdog" },
        { level: 6, id: "battle-forged", name: "Battle Forged", gate: true },
        { level: 7, id: "indomitable", name: "Indomitable", gate: true },
        { level: 8, id: "hammer-mastery", name: "Hammer Mastery" },
        { level: 9, id: "recover", name: "Recover" },
        { level: 10, id: "brawny", name: "Brawny" },
        { level: 11, id: "berserk", name: "Berserk" }
      ],
      levelup: "Melee Skill · Fatigue · HP — grab Melee Defense on a high roll early.",
      armor: {
        early: "Spear + shield in the back rank until level 6. Sell sword/shield when Battle Forged lands.",
        mid: "Mail Hauberk + Sallet. Start wearing plate pieces as loot allows — you need Brawny before Coat of Plates.",
        late: "Coat of Plates + Full Helm with Brawny (−62 armor → ~−43). Target ~75 usable Fatigue after Greatsword/Hammer.",
        note: "Do not wear heavy plate before level 6 Battle Forged + Brawny — you'll exhaust every turn."
      },
      milestones: [
        { level: 3, text: "Still a trainee — keep him in row 2 with a spear or light shield." },
        { level: 6, text: "Battle Forged + first heavy set. He becomes a frontliner this level." },
        { level: 8, text: "Hammer Mastery — Destroy Armor becomes your main skill. Orc camps open up." },
        { level: 10, text: "Brawny — mandatory before/end with full plate. Check usable Fatigue in the gear screen." }
      ],
      notes: "Pair with throwers/Executioner to exploit injuries. For more kill-chains swap Berserk path: take Berserk 7, Killing Frenzy 8 after Indomitable (see Compendium AOE row).",
      variants: "DPS variant: level 7 Berserk, 8 Killing Frenzy, 9 Hammer Mastery, 10 Recover, 11 Brawny — glassier but faster kills."
    },
    {
      id: "reaper",
      tag: "RPR",
      name: "Reaper",
      subtitle: "Two-Handed Sword",
      tier: "A",
      path: "bf",
      role: "Frontline DPS",
      blurb: "Crowd-clearing DPS. The greatsword's swing and line attacks chew through groups of lighter enemies while reach keeps him safer than a hammer.",
      stats: [
        { k: "Melee Skill", v: "90+" },
        { k: "Melee Def", v: "35+" },
        { k: "Fatigue", v: "130+" },
        { k: "HP", v: "75+" },
        { k: "Resolve", v: "50" }
      ],
      talents: "Melee Skill, Melee Defense, Fatigue",
      backgrounds: "As Hammerfall. Bardiche or warscythe substitute for back-line hits.",
      weapons: "Greatsword. Start fights with polearm equipped, Quick Hands to greatsword when enemies close.",
      perks: [
        { level: 1, id: "student", name: "Student" },
        { level: 2, id: "colossus", name: "Colossus" },
        { level: 3, id: "pathfinder", name: "Pathfinder" },
        { level: 4, id: "recover", name: "Recover" },
        { level: 5, id: "underdog", name: "Underdog" },
        { level: 6, id: "battle-forged", name: "Battle Forged", gate: true },
        { level: 7, id: "berserk", name: "Berserk", gate: true },
        { level: 8, id: "killing-frenzy", name: "Killing Frenzy", gate: true },
        { level: 9, id: "reach-advantage", name: "Reach Advantage" },
        { level: 10, id: "sword-mastery", name: "Sword Mastery" },
        { level: 11, id: "brawny", name: "Brawny" }
      ],
      levelup: "Melee Skill · Fatigue · HP — grab Melee Defense on a high roll early.",
      armor: {
        early: "Light-medium until level 6 — same as Hammerfall trainee phase.",
        mid: "Mail Hauberk tier. Leave more Fatigue budget for swinging than a pure tank.",
        late: "Mid-heavy plate (Heraldic Hauberk, not always Coat of Plates) — needs Fatigue for AoE every turn.",
        note: "Reach Advantage stacks defense while swinging; don't over-armor into exhaustion."
      },
      milestones: [
        { level: 6, text: "Battle Forged — move to front rank with real armor." },
        { level: 7, text: "Berserk online — start chaining kills on weak enemies." },
        { level: 9, text: "Reach Advantage — hold a flank; each swing adds +5 Melee Def." }
      ],
      notes: "Quick Hands polearm opener is optional (swap Brawny for Quick Hands at 11 if you run a billhook start). Greataxe only if you want the 6-tile reckless swing.",
      variants: null
    },
    {
      id: "wallpike",
      tag: "WLP",
      name: "Wallpike",
      subtitle: "Polearm Backline",
      tier: "A",
      path: "bf",
      role: "Backline DPS",
      blurb: "Dependable second-row damage. Stabs over your front line from safety and punishes anyone engaging your back rank. Your answer to the Ancient Dead.",
      stats: [
        { k: "Melee Skill", v: "85+" },
        { k: "Melee Def", v: "20+" },
        { k: "Ranged Def", v: "15+ (or Anticipation)" },
        { k: "Fatigue", v: "60–80" },
        { k: "HP", v: "70–80" }
      ],
      talents: "Melee Skill, Melee Defense, Ranged Defense",
      backgrounds: "Cheap is fine — Farmhand, Militia, Thief, Brawler. Billhook best; Pike for dodge targets.",
      weapons: "Billhook or Pike. Optional whip sidearm (Quick Hands + Cleaver Mastery) for disarm/armor-strip.",
      perks: [
        { level: 1, id: "colossus", name: "Colossus" },
        { level: 2, id: "pathfinder", name: "Pathfinder" },
        { level: 3, id: "backstabber", name: "Backstabber" },
        { level: 4, id: "polearm-mastery", name: "Polearm Mastery" },
        { level: 5, id: "underdog", name: "Underdog" },
        { level: 6, id: "battle-forged", name: "Battle Forged", gate: true },
        { level: 7, id: "anticipation", name: "Anticipation" },
        { level: 8, id: "berserk", name: "Berserk" },
        { level: 9, id: "killing-frenzy", name: "Killing Frenzy", gate: true },
        { level: 10, id: "brawny", name: "Brawny" },
        { level: 11, id: "quick-hands", name: "Quick Hands" }
      ],
      levelup: "Melee Skill · HP · Ranged Defense — take Melee Defense on a high roll.",
      armor: {
        early: "Padded/leather — sits row 2, doesn't need plate early.",
        mid: "Mail Hauberk or lighter. Anticipation covers ranged; don't tank hits.",
        late: "Mid plate if Fatigue allows (Heraldic tier). Often stays lighter than frontline 2H.",
        note: "Backline polearm — trade raw armor for Fatigue to attack at range 2 every turn."
      },
      milestones: [
        { level: 4, text: "Polearm Mastery — 5 AP attacks, step-and-stab in one turn." },
        { level: 6, text: "Battle Forged — can wear real armor if engaged." },
        { level: 11, text: "Quick Hands — swap to whip for disarm utility." }
      ],
      notes: "Backstabber fixes polearm hit chance vs engaged targets. Nimble polearm variant in Compendium for dodge builds.",
      variants: "Whip utility: take Cleaver Mastery at 11 instead of Quick Hands if you already have QH from an earlier swap."
    },
    {
      id: "sergeant",
      tag: "SGT",
      name: "The Banner Sergeant",
      subtitle: "Morale Anchor",
      tier: "A",
      path: "nimble",
      role: "Support",
      blurb: "Keeps the line from breaking and rallies routing brothers. Mandatory vs Geists, Alps, Hexen, Orc Warlords — anything that attacks Resolve.",
      stats: [
        { k: "Resolve", v: "Max it" },
        { k: "Fatigue", v: "80+" },
        { k: "Ranged Def", v: "15+" },
        { k: "HP", v: "70–80" },
        { k: "Melee/Ranged Skill", v: "decent" }
      ],
      talents: "Resolve, Ranged Defense, Melee or Ranged Skill",
      backgrounds: "Squire, Adventurous/Disowned Noble, Monk, Flagellant, Hedge Knight.",
      weapons: "Battle Standard + Billhook via Quick Hands. Rally the Troops when Ambition unlocked.",
      perks: [
        { level: 1, id: "student", name: "Student" },
        { level: 2, id: "colossus", name: "Colossus" },
        { level: 3, id: "fortified-mind", name: "Fortified Mind" },
        { level: 4, id: "rally-the-troops", name: "Rally the Troops" },
        { level: 5, id: "polearm-mastery", name: "Polearm Mastery" },
        { level: 6, id: "nimble", name: "Nimble", gate: true },
        { level: 7, id: "quick-hands", name: "Quick Hands" },
        { level: 8, id: "pathfinder", name: "Pathfinder" },
        { level: 9, id: "recover", name: "Recover" },
        { level: 10, id: "relentless", name: "Relentless" },
        { level: 11, id: "backstabber", name: "Backstabber" }
      ],
      levelup: "Resolve · HP · Ranged Defense — take Fatigue when Resolve rolls low.",
      armor: {
        early: "Light body + light helm. Sergeant must survive, not tank.",
        mid: "Padded Vest (−5) + Sallet (−5) = −10 combined → 20% Nimble reduction. Acceptable mid-game.",
        late: "Target ≤10 combined body+helmet fatigue for meaningful Nimble: Padded Vest + Sallet, or lighter. See armor page bands.",
        note: "Nimble sergeant — every combined Fatigue point costs 4% reduction. Banner + billhook is heavy enough."
      },
      milestones: [
        { level: 4, text: "Rally the Troops — company morale safety net. Build a backup sergeant." },
        { level: 6, text: "Nimble — switch to light set before this fight if you were wearing mail." },
        { level: 10, text: "Relentless — Rally before the line acts. Relentless→Rally→Recover loop." }
      ],
      notes: "Quick Hands swaps Standard and Billhook. One per company (two for Geist fights). BF banner variants in Compendium if you prefer plate.",
      variants: "BF DPS Banner: swap Nimble for Battle Forged at 6, add Fearsome at 7."
    },
    {
      id: "hawkeye",
      tag: "BOW",
      name: "Hawkeye",
      subtitle: "Bowman",
      tier: "A",
      path: "nimble",
      role: "Ranged",
      blurb: "Ranged scalpel. Snipes archers, shamans, necromancers and weakly-armored threats before they reach the line. King against Goblins.",
      stats: [
        { k: "Ranged Skill", v: "90–95+" },
        { k: "Fatigue", v: "80+" },
        { k: "HP", v: "70–90" },
        { k: "Ranged Def", v: "grow it" },
        { k: "Armor", v: "Light (Nimble)" }
      ],
      talents: "Ranged Skill, Fatigue, Ranged Defense",
      backgrounds: "Hunter (best), then Poacher, Bowyer, Squire with 45+ Ranged Skill.",
      weapons: "War Bow. Footwork to escape melee — not Rotation.",
      perks: [
        { level: 1, id: "colossus", name: "Colossus" },
        { level: 2, id: "bullseye", name: "Bullseye" },
        { level: 3, id: "fast-adaptation", name: "Fast Adaptation" },
        { level: 4, id: "bow-mastery", name: "Bow Mastery" },
        { level: 5, id: "anticipation", name: "Anticipation" },
        { level: 6, id: "nimble", name: "Nimble", gate: true },
        { level: 7, id: "footwork", name: "Footwork" },
        { level: 8, id: "berserk", name: "Berserk" },
        { level: 9, id: "killing-frenzy", name: "Killing Frenzy", gate: true },
        { level: 10, id: "recover", name: "Recover" },
        { level: 11, id: "overwhelm", name: "Overwhelm" }
      ],
      levelup: "Ranged Skill · Fatigue · HP — grab Ranged Defense on a high roll.",
      armor: {
        early: "No armor or padded — Hunter often starts with gear. Prioritize bow first.",
        mid: "Padded Vest (−5) + Sallet (−5) = −10 → 20% reduction. Workable mid-game.",
        late: "Push combined body+helmet to ≤10 (−10 or lower) for real Nimble value. Padded Vest + Sallet is the standard; lighter is better. Sallet = best archer helm (zero vision penalty).",
        note: "Light = low combined body+helmet Fatigue, NOT leather vs mail labels. Noble Mail + Sallet (−20) gives zero Nimble reduction."
      },
      milestones: [
        { level: 4, text: "Bow Mastery — +1 range. Snipe priority targets from safety." },
        { level: 6, text: "Nimble — commit to light set before this fight. Sell heavy loot drops." },
        { level: 7, text: "Footwork — escape tool when engaged. Finished archer toolkit." }
      ],
      notes: "Berserk + Killing Frenzy for last-shot chains. Swap Overwhelm for Head Hunter if resolve is low.",
      variants: null
    },
    {
      id: "bolt",
      tag: "XBW",
      name: "Bolt",
      subtitle: "Crossbowman",
      tier: "B",
      path: "nimble",
      role: "Ranged",
      blurb: "Early-game accuracy and armor-piercing punch. Falls off vs the bow late, but the handgonne variant shreds unarmored swarms.",
      stats: [
        { k: "Ranged Skill", v: "80+" },
        { k: "Fatigue", v: "80+" },
        { k: "HP", v: "70–90" },
        { k: "Ranged Def", v: "grow it" }
      ],
      talents: "Ranged Skill, Fatigue, Ranged Defense",
      backgrounds: "Any with a Ranged Skill star — crossbow forgives lower skill.",
      weapons: "Crossbow. Quick Hands to handgonne for AoE vs undead swarms.",
      perks: [
        { level: 1, id: "colossus", name: "Colossus" },
        { level: 2, id: "quick-hands", name: "Quick Hands" },
        { level: 3, id: "bullseye", name: "Bullseye" },
        { level: 4, id: "crossbow-and-firearms-mastery", name: "Crossbow Mastery" },
        { level: 5, id: "anticipation", name: "Anticipation" },
        { level: 6, id: "nimble", name: "Nimble", gate: true },
        { level: 7, id: "footwork", name: "Footwork" },
        { level: 8, id: "berserk", name: "Berserk" },
        { level: 9, id: "killing-frenzy", name: "Killing Frenzy", gate: true },
        { level: 10, id: "recover", name: "Recover" },
        { level: 11, id: "executioner", name: "Executioner" }
      ],
      levelup: "Ranged Skill · HP · Fatigue — grab Ranged Defense on a high roll.",
      armor: {
        early: "Same light philosophy as Hawkeye — crossbow doesn't need plate.",
        mid: "Padded Vest + Sallet. Keep combined fatigue ≤10.",
        late: "≤10 combined for meaningful Nimble. Crossbow mastery removes reload — Fatigue budget matters less than bow.",
        note: "Keep one bow and one crossbow user for famed weapon flexibility."
      },
      milestones: [
        { level: 4, text: "Crossbow Mastery — no reload turn. Build comes online." },
        { level: 6, text: "Nimble — light armor commit." }
      ],
      notes: "Handgonne via Quick Hands for Wiedergangers/Webknechts. Executioner amplifies injury damage from front line.",
      variants: null
    },
    {
      id: "hybrid",
      tag: "HYB",
      name: "Hawk-and-Axe",
      subtitle: "Hybrid Archer",
      tier: "A",
      path: "nimble",
      role: "Hybrid",
      blurb: "Archer that switches to Longaxe to break shields and stay useful vs Ancient Dead and shielded enemies where pure bows stall.",
      stats: [
        { k: "Ranged Skill", v: "85+" },
        { k: "Melee Skill", v: "80+" },
        { k: "Fatigue", v: "80+" },
        { k: "HP", v: "70" },
        { k: "Armor", v: "Light (Nimble)" }
      ],
      talents: "Ranged Skill, Fatigue, Melee Skill",
      backgrounds: "Hunter (best), Bowyer, Sellsword, Witch Hunter, Squire, Beast Slayer, Poacher.",
      weapons: "Bow + Longaxe via Quick Hands.",
      perks: [
        { level: 1, id: "colossus", name: "Colossus" },
        { level: 2, id: "bullseye", name: "Bullseye" },
        { level: 3, id: "fast-adaptation", name: "Fast Adaptation" },
        { level: 4, id: "bow-mastery", name: "Bow Mastery" },
        { level: 5, id: "anticipation", name: "Anticipation" },
        { level: 6, id: "nimble", name: "Nimble", gate: true },
        { level: 7, id: "quick-hands", name: "Quick Hands" },
        { level: 8, id: "axe-mastery", name: "Axe Mastery" },
        { level: 9, id: "footwork", name: "Footwork" },
        { level: 10, id: "backstabber", name: "Backstabber" },
        { level: 11, id: "berserk", name: "Berserk" }
      ],
      levelup: "Ranged Skill · Melee Skill · Fatigue — take HP when a skill rolls low.",
      armor: {
        early: "Hunter gear or light — needs both bow and axe.",
        mid: "Same Nimble targets as Hawkeye — Noble Mail + Sallet acceptable.",
        late: "≤10 combined body+helmet for meaningful Nimble. Don't let shield-breaking duty push you into plate.",
        note: "Same armor bands as Hawkeye."
      },
      milestones: [
        { level: 6, text: "Quick Hands — bow at range, Longaxe when wall closes." },
        { level: 8, text: "Axe Mastery — Split Shield destroys shield walls." }
      ],
      notes: "Pure-damage variant: drop Backstabber/Anticipation for Berserk + Killing Frenzy, lean ranged.",
      variants: null
    },
    {
      id: "skirmisher",
      tag: "THR",
      name: "Skirmisher",
      subtitle: "Throwing Weapons",
      tier: "A",
      path: "nimble",
      role: "Ranged",
      blurb: "Close-range armor-shredder. Heavy javelins and throwing axes from behind the front rank do huge armor and HP damage.",
      stats: [
        { k: "Ranged Skill", v: "90+" },
        { k: "Ranged Def", v: "30+ (or Anticipation)" },
        { k: "HP", v: "60–70" },
        { k: "Fatigue", v: "90+" },
        { k: "Armor", v: "Light (Nimble)" }
      ],
      talents: "Ranged Skill, Fatigue, Ranged Defense",
      backgrounds: "Hunter, Squire, Witch Hunter, Beast Slayer. 3 throwable stacks via Bags & Belts.",
      weapons: "Heavy javelins, throwing axes. Firelance emergency sidearm.",
      perks: [
        { level: 1, id: "colossus", name: "Colossus" },
        { level: 2, id: "quick-hands", name: "Quick Hands" },
        { level: 3, id: "bullseye", name: "Bullseye" },
        { level: 4, id: "bags-and-belts", name: "Bags and Belts" },
        { level: 5, id: "anticipation", name: "Anticipation" },
        { level: 6, id: "nimble", name: "Nimble", gate: true },
        { level: 7, id: "throwing-mastery", name: "Throwing Mastery" },
        { level: 8, id: "executioner", name: "Executioner" },
        { level: 9, id: "duelist", name: "Duelist", gate: true },
        { level: 10, id: "berserk", name: "Berserk" },
        { level: 11, id: "killing-frenzy", name: "Killing Frenzy", gate: true }
      ],
      levelup: "Ranged Skill · Fatigue · HP — grab Ranged Defense on a high roll.",
      armor: {
        early: "Light — throwers need Fatigue for multiple volleys.",
        mid: "Light mail + Sallet. Anticipation covers exposure.",
        late: "≤10 combined for meaningful Nimble. Throwables in bags still cost carry Fatigue — only body+helmet penalties count for Nimble.",
        note: "Throwing is Fatigue-hungry — lighter than archers in practice."
      },
      milestones: [
        { level: 4, text: "Bags and Belts — carry 3 stacks of javelins." },
        { level: 7, text: "Throwing Mastery — damage spike at 2 tiles." },
        { level: 9, text: "Duelist — javelins ignore armor. Core damage online." }
      ],
      notes: "Farm heavy throwables off Barbarian Reavers. Firelance scales off Ranged Skill for emergency AoE.",
      variants: null
    },
    {
      id: "duelist",
      tag: "DUL",
      name: "The Duelist",
      subtitle: "Nimble Dodge (expert)",
      tier: "S",
      path: "nimble",
      role: "Specialist",
      blurb: "Single peerless brother who fights without a shield, surviving on Dodge, Nimble and raw skill. Most demanding build — needs an exceptional recruit.",
      stats: [
        { k: "Melee Def", v: "35+" },
        { k: "Melee Skill", v: "90+" },
        { k: "Initiative", v: "140+" },
        { k: "HP", v: "90–100" },
        { k: "Fatigue", v: "high" },
        { k: "Resolve", v: "decent" }
      ],
      talents: "Melee Defense, Melee Skill, Initiative. Traits: Iron Lungs, Quick, Lucky.",
      backgrounds: "Thief, Swordmaster, Hedge Knight with high Init. Dagger or Fencing Sword.",
      weapons: "Sword (Riposte) for counters, or Rondel Dagger (Puncture) for armor-strip/assassin.",
      perks: [
        { level: 1, id: "colossus", name: "Colossus" },
        { level: 2, id: "dodge", name: "Dodge" },
        { level: 3, id: "pathfinder", name: "Pathfinder" },
        { level: 4, id: "dagger-mastery", name: "Dagger Mastery" },
        { level: 5, id: "underdog", name: "Underdog" },
        { level: 6, id: "nimble", name: "Nimble", gate: true },
        { level: 7, id: "duelist", name: "Duelist", gate: true },
        { level: 8, id: "berserk", name: "Berserk" },
        { level: 9, id: "killing-frenzy", name: "Killing Frenzy", gate: true },
        { level: 10, id: "footwork", name: "Footwork" },
        { level: 11, id: "lone-wolf", name: "Lone Wolf" }
      ],
      levelup: "Melee Defense · Melee Skill · Initiative — take HP on a high roll; Initiative feeds Dodge.",
      armor: {
        early: "Almost naked until Nimble at 6 — babysit in back rank.",
        mid: "Padded Vest + Sallet (−10 combined → 20% reduction) or lighter. Sallet is mandatory efficiency.",
        late: "Target ≤10 combined for meaningful Nimble. Every Fatigue point costs 4% of the max 60% reduction.",
        note: "Nimble measures body+helmet fatigue only. Shields/weapons don't count. Brawny does NOT help Nimble."
      },
      milestones: [
        { level: 2, text: "Dodge — Initiative starts converting to defense." },
        { level: 6, text: "Nimble — MUST be in a ≤10 combined set before this fight." },
        { level: 7, text: "Duelist — offhand free, armor-ignore online. Finished core." },
        { level: 10, text: "Veteran — can solo camps if stats rolled well." }
      ],
      notes: "Swap Lone Wolf for Indomitable or Resilient (bleeds kill Nimble) if he stays near the group. One per company max.",
      variants: "Sword Riposte build: swap Dagger Mastery for Sword Mastery at 4."
    },
    {
      id: "bleeder",
      tag: "CLV",
      name: "Bleeder",
      subtitle: "Cleaver Duelist",
      tier: "A",
      path: "bf",
      role: "Frontline DPS",
      blurb: "Stacks bleeds and decapitates. Excels vs Undead — whip disarms skeleton polearms; Decapitate permanently kills Wiedergangers.",
      stats: [
        { k: "Melee Skill", v: "85+" },
        { k: "Melee Def", v: "30+" },
        { k: "Fatigue", v: "130+ (80 after gear)" },
        { k: "HP", v: "80+" },
        { k: "Resolve", v: "40+" }
      ],
      talents: "Melee Skill, Melee Defense, Fatigue",
      backgrounds: "Butcher, Brawler, Cultist, Gladiator.",
      weapons: "Military Cleaver (1H, empty offhand for Duelist) + Whip for disarm via Quick Hands.",
      perks: [
        { level: 1, id: "colossus", name: "Colossus" },
        { level: 2, id: "recover", name: "Recover" },
        { level: 3, id: "quick-hands", name: "Quick Hands" },
        { level: 4, id: "cleaver-mastery", name: "Cleaver Mastery" },
        { level: 5, id: "underdog", name: "Underdog" },
        { level: 6, id: "battle-forged", name: "Battle Forged", gate: true },
        { level: 7, id: "duelist", name: "Duelist", gate: true },
        { level: 8, id: "berserk", name: "Berserk" },
        { level: 9, id: "killing-frenzy", name: "Killing Frenzy", gate: true },
        { level: 10, id: "indomitable", name: "Indomitable" },
        { level: 11, id: "fearsome", name: "Fearsome" }
      ],
      levelup: "Melee Skill · Fatigue · Melee Defense — take HP when Defense rolls low.",
      armor: {
        early: "Light until level 6 — cleaver needs Fatigue.",
        mid: "Mail tier transitioning to plate.",
        late: "Mid-heavy BF set. Nimble cleaver variant in Compendium if Fatigue-starved.",
        note: "BF cleaver is Fatigue-hungry — Brawny helps if you add whip sidearm."
      },
      milestones: [
        { level: 4, text: "Cleaver Mastery — bleed doubled." },
        { level: 6, text: "Battle Forged — frontline commit." },
        { level: 7, text: "Duelist — bleeds punch through armor." }
      ],
      notes: "Berserk→Recover combo after kills. Nimble variant if you can't feed Fatigue.",
      variants: "Nimble Bleeder: swap BF for Nimble at 6, drop Reach for Resilient."
    },
    {
      id: "lonewolf",
      tag: "LWX",
      name: "Lone Wolf",
      subtitle: "Greataxe Berserker",
      tier: "B",
      path: "bf",
      role: "Frontline DPS",
      blurb: "Reckless solo bruiser who splits off to hold or clear a flank alone, abusing the 6-tile greataxe sweep and Lone Wolf's unsupported bonus.",
      stats: [
        { k: "Melee Skill", v: "90+" },
        { k: "Melee Def", v: "35+" },
        { k: "Fatigue", v: "130+" },
        { k: "HP", v: "85+" }
      ],
      talents: "Melee Skill, Melee Defense, Fatigue",
      backgrounds: "Raider, Wildman, Hedge Knight.",
      weapons: "Greataxe (Mansplitter) + Longaxe sidearm.",
      perks: [
        { level: 1, id: "colossus", name: "Colossus" },
        { level: 2, id: "recover", name: "Recover" },
        { level: 3, id: "pathfinder", name: "Pathfinder" },
        { level: 4, id: "axe-mastery", name: "Axe Mastery" },
        { level: 5, id: "underdog", name: "Underdog" },
        { level: 6, id: "battle-forged", name: "Battle Forged", gate: true },
        { level: 7, id: "berserk", name: "Berserk", gate: true },
        { level: 8, id: "killing-frenzy", name: "Killing Frenzy", gate: true },
        { level: 9, id: "lone-wolf", name: "Lone Wolf" },
        { level: 10, id: "indomitable", name: "Indomitable" },
        { level: 11, id: "nine-lives", name: "Nine Lives" }
      ],
      levelup: "Melee Skill · Fatigue · HP — grab Melee Defense on a high roll.",
      armor: {
        early: "Train in back rank until 6.",
        mid: "Mail → plate transition with Brawny.",
        late: "Heavy BF plate. Needs space — 6-tile swing hits allies.",
        note: "Niche fun pick; Hammerfall/Reaper are safer DPS."
      },
      milestones: [
        { level: 6, text: "Battle Forged — solo flank duty begins." },
        { level: 9, text: "Lone Wolf — +15% stats when no ally within 3 tiles." }
      ],
      notes: "Underdog + Lone Wolf + Indomitable keep him alive encircled. Mostly flavor/fun.",
      variants: null
    }
  ]
};

/* tier lookup for validation (reuses BB_PERKS when present) */
window.BB_BUILDS.tierOf = function (perkId) {
  if (window.BB_PERKS && window.BB_PERKS.byId && window.BB_PERKS.byId[perkId]) {
    return window.BB_PERKS.byId[perkId].tier;
  }
  return null;
};

window.BB_BUILDS.maxTierAtLevel = function (level) {
  return Math.min(level, 7);
};