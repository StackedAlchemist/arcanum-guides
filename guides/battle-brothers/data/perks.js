/* ============================================================
   THE MERCENARY CODEX - perk tree (single source of truth)
   The exact in-game 7-tier perk tree. Both the Perks page and
   the Build Planner read/validate from this one file.

   Each perk: { id, name, key, active, effect }
     id     - stable slug; never reference perks by display name
     key    - build-defining pick (shows the gold diamond)
     active - unlocks an active skill that costs AP/Fatigue (gear icon)
     effect - description (may contain HTML entities; set via innerHTML)

   Each tier: { tier, label, gate?, perks:[...] }
     gate   - optional point-gate note shown on the right of the header

   A self-contained renderer at the bottom paints any
   <div data-perk-tree></div> placeholder with the same markup the
   Perks page used to hard-code, so the CSS in perks.html is unchanged.
   No build step, no framework.
   ============================================================ */
window.BB_PERKS = {
  tree: [
    { tier: 1, label: "Tier 1", gate: "open from level 1", perks: [
      { id: "colossus",         name: "Colossus",         key: true,  active: false, effect: "+25% max Hitpoints; also lowers injury chance. Take on nearly everyone at level 2." },
      { id: "pathfinder",       name: "Pathfinder",       key: true,  active: false, effect: "Cheaper movement (min 2 AP/tile, half Fatigue); free height changes." },
      { id: "recover",          name: "Recover",          key: true,  active: true,  effect: "Clear 50% of accumulated Fatigue this turn (9 AP). Keeps hitters swinging." },
      { id: "fast-adaptation",  name: "Fast Adaptation",  key: false, active: false, effect: "Stacking +10% hit per consecutive miss; resets on a hit." },
      { id: "crippling-strikes",name: "Crippling Strikes",key: false, active: false, effect: "&minus;33% threshold to inflict injuries, melee and ranged." },
      { id: "nine-lives",       name: "Nine Lives",       key: false, active: false, effect: "Once per battle, survive a fatal blow at a few HP with a defense/morale buff." },
      { id: "bags-and-belts",   name: "Bags and Belts",   key: false, active: false, effect: "+2 bag slots; bagged items lose their Fatigue penalty (except two-handers)." },
      { id: "adrenaline",       name: "Adrenaline",       key: false, active: true,  effect: "Act first next round (1 AP / 20 Fatigue)." },
      { id: "student",          name: "Student",          key: false, active: false, effect: "+20% XP; converts to a free perk point at level 11, then inert." }
    ]},
    { tier: 2, label: "Tier 2", gate: "after 1 point spent", perks: [
      { id: "quick-hands",      name: "Quick Hands",      key: true,  active: false, effect: "One free weapon swap per turn (not shields). Backbone of swap builds." },
      { id: "gifted",           name: "Gifted",           key: true,  active: false, effect: "Instant max-roll level-up (no talents). Fixes a weak attribute." },
      { id: "fortified-mind",   name: "Fortified Mind",   key: true,  active: false, effect: "+25% Resolve. Core for sergeants and anyone facing Fearsome." },
      { id: "dodge",            name: "Dodge",            key: true,  active: false, effect: "+15% of current Initiative as Melee &amp; Ranged Defense." },
      { id: "bullseye",         name: "Bullseye",         key: true,  active: false, effect: "Cover penalty to hit cut 75%&rarr;50% &mdash; snipe targets in crowds." },
      { id: "executioner",      name: "Executioner",      key: false, active: false, effect: "+20% damage against targets that have any injury." },
      { id: "resilient",        name: "Resilient",        key: false, active: false, effect: "Finite debuffs (bleed, charm&hellip;) cut to 1 turn / weakest state." },
      { id: "steel-brow",       name: "Steel Brow",       key: false, active: false, effect: "Head hits no longer crit you (negates Brute/Chop bonus damage)." }
    ]},
    { tier: 3, label: "Tier 3", gate: "after 2 points spent", perks: [
      { id: "shield-expert",    name: "Shield Expert",    key: true,  active: false, effect: "+25% shield defense (&amp; Shieldwall); shield damage taken &minus;50%." },
      { id: "brawny",           name: "Brawny",           key: true,  active: false, effect: "&minus;30% Fatigue &amp; Initiative penalty from armor. Lets 2H wear plate." },
      { id: "anticipation",     name: "Anticipation",     key: false, active: false, effect: "+Ranged Defense scaling with attacker distance (minimum +10)." },
      { id: "backstabber",      name: "Backstabber",      key: false, active: false, effect: "Flanking hit bonus doubled to +10% per surrounding ally." },
      { id: "relentless",       name: "Relentless",       key: false, active: false, effect: "Fatigue only halves Initiative; no Wait penalty to turn order." },
      { id: "rotation",         name: "Rotation",         key: false, active: true,  effect: "Swap places with an ally, ignoring Zone of Control (3 AP / 25 Fat)." },
      { id: "rally-the-troops", name: "Rally the Troops", key: false, active: true,  effect: "Rally fleeing allies and steady nearby morale; scales with Resolve." },
      { id: "taunt",            name: "Taunt",            key: false, active: true,  effect: "Force a target to attack you instead of a softer ally (range 3)." }
    ]},
    { tier: 4, label: "Tier 4 &mdash; Weapon Masteries", gate: "&minus;25% skill Fatigue each", perks: [
      { id: "hammer-mastery",   name: "Hammer Mastery",   key: true,  active: false, effect: "Destroy/Demolish Armor +33% vs armor; Shatter +5% hit." },
      { id: "polearm-mastery",  name: "Polearm Mastery",  key: true,  active: false, effect: "Polearm skills 5 AP; no penalty for hitting adjacent foes." },
      { id: "bow-mastery",      name: "Bow Mastery",      key: true,  active: false, effect: "+1 Vision and +1 maximum firing range." },
      { id: "crossbow-and-firearms-mastery", name: "Crossbow &amp; Firearms Mastery", key: true, active: false, effect: "+20% armor-ignore; handgonne reloads in 6 AP (fire every turn)." },
      { id: "throwing-mastery", name: "Throwing Mastery", key: true,  active: false, effect: "+30% damage at 2 tiles, +20% at 3 tiles." },
      { id: "mace-mastery",     name: "Mace Mastery",     key: false, active: false, effect: "Knock Out/Over/Strike Down 100% stun; Polemace no adjacent penalty." },
      { id: "sword-mastery",    name: "Sword Mastery",    key: false, active: false, effect: "Riposte no hit penalty; Split/Swing +10% hit; easier Gash injuries." },
      { id: "axe-mastery",      name: "Axe Mastery",      key: false, active: false, effect: "Split Shield +50% shield dmg; Round Swing +5% hit; Longaxe no adjacent penalty." },
      { id: "cleaver-mastery",  name: "Cleaver Mastery",  key: false, active: false, effect: "Bleed doubled (10/20 per turn); Disarm penalty only &minus;10%." },
      { id: "dagger-mastery",   name: "Dagger Mastery",   key: false, active: false, effect: "Stab/Puncture/Deathblow cost 3 AP &mdash; an extra attack each turn." },
      { id: "flail-mastery",    name: "Flail Mastery",    key: false, active: false, effect: "Lash/Hail ignore shield bonus; Pound +10% head; Thresh +5% hit." },
      { id: "spear-mastery",    name: "Spear Mastery",    key: false, active: false, effect: "Spearwall persists through hits and can activate while adjacent." }
    ]},
    { tier: 5, label: "Tier 5", perks: [
      { id: "reach-advantage",  name: "Reach Advantage",  key: true,  active: false, effect: "Each 2H hit +5 Melee Defense (max 5 stacks) until your next turn." },
      { id: "underdog",         name: "Underdog",         key: true,  active: false, effect: "Ignore the surrounded-defense penalty (negates enemy Backstabber)." },
      { id: "overwhelm",        name: "Overwhelm",        key: true,  active: false, effect: "Attacks vs later-acting foes give them &minus;10% Skill (stacks)." },
      { id: "lone-wolf",        name: "Lone Wolf",        key: false, active: false, effect: "No ally within 3 tiles &rarr; +15% Skills, Defenses and Resolve." },
      { id: "footwork",         name: "Footwork",         key: false, active: true,  effect: "Disengage from melee without an opportunity attack (3 AP / 20 Fat)." }
    ]},
    { tier: 6, label: "Tier 6 &mdash; the survival fork", perks: [
      { id: "battle-forged",    name: "Battle Forged",    key: true,  active: false, effect: "Heavy-armor specialist: armor damage taken reduced by 5% of your total armor value." },
      { id: "nimble",           name: "Nimble",           key: true,  active: false, effect: "Light-armor specialist: up to &minus;60% HP damage, scaling with how light you are." },
      { id: "berserk",          name: "Berserk",          key: true,  active: false, effect: "Killing a foe refunds 4 AP, once per turn &mdash; chain kills." },
      { id: "head-hunter",      name: "Head Hunter",      key: false, active: false, effect: "A hit to the head guarantees your next hit also lands on the head." }
    ]},
    { tier: 7, label: "Tier 7 &mdash; capstones", perks: [
      { id: "killing-frenzy",   name: "Killing Frenzy",   key: true,  active: false, effect: "A kill grants +25% damage for 2 turns (refreshes on another kill)." },
      { id: "duelist",          name: "Duelist",          key: true,  active: false, effect: "Offhand free &rarr; +25% of damage ignores armor (not with two-handers)." },
      { id: "indomitable",      name: "Indomitable",      key: true,  active: true,  effect: "50% damage reduction + immunity to stun/knockback/grab for a turn (5 AP / 25 Fat)." },
      { id: "fearsome",         name: "Fearsome",         key: false, active: false, effect: "Any HP damage triggers an enemy morale check (penalty = 15% of your Resolve, cap 20)." }
    ]}
  ]
};

/* flat lookup: id -> { ...perk, tier } (handy for the planner's validation) */
window.BB_PERKS.byId = (function (tree) {
  var m = {};
  tree.forEach(function (t) {
    t.perks.forEach(function (p) { m[p.id] = { id: p.id, name: p.name, tier: t.tier, key: p.key, active: p.active, effect: p.effect }; });
  });
  return m;
})(window.BB_PERKS.tree);

/* ---- renderer: paint <div data-perk-tree></div> with the tier grid ---- */
(function () {
  "use strict";
  function render(host) {
    var wrap = document.createElement("div");
    wrap.className = "perktree";
    window.BB_PERKS.tree.forEach(function (t) {
      var tier = document.createElement("div");
      tier.className = "ptier";

      var head = document.createElement("div");
      head.className = "thead";
      var gateHtml = t.gate ? '<span class="tgate">' + t.gate + "</span>" : "";
      head.innerHTML = '<span class="tnum">' + t.tier + '</span><span class="tname">' + t.label + "</span>" + gateHtml;
      tier.appendChild(head);

      var grid = document.createElement("div");
      grid.className = "perks";
      t.perks.forEach(function (p) {
        var cls = "perk" + (p.key ? " k" : "") + (p.active ? " act" : "");
        var perk = document.createElement("div");
        perk.className = cls;
        perk.innerHTML = '<div class="pn">' + p.name + '</div><div class="pd">' + p.effect + "</div>";
        grid.appendChild(perk);
      });
      tier.appendChild(grid);
      wrap.appendChild(tier);
    });
    host.replaceWith(wrap);
  }

  function init() {
    document.querySelectorAll("[data-perk-tree]").forEach(render);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
