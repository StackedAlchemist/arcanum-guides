// ============================================================
// THE ARCANUM - Clair Obscur Wiki
// weapons.js - every weapon, grouped by character
//
// Keys: n = name, c = character, el = element/damage type,
//       v/m/a/d/l = scaling grade for Vitality / Might /
//       Agility / Defense / Luck (S is best; D<C<B<A<S).
//       Only graded attributes are listed; blanks = no scaling.
//
// Grades shown are at Level 33 (max). A weapon's scaling ranks
// up at Lv 4, 20, and 33, and each weapon also unlocks a passive
// effect as it levels (effect text is a later enrichment batch).
// Source: Game8 weapon list, cross-checked vs Maxroll. Verify
// exact grades in-game, as patches can adjust them.
// ============================================================

const WEAPONS_INTRO = "Every weapon belongs to one character and carries an element plus attribute scaling. Match the weapon's element to an enemy Weakness and its scaling to the attributes you're leveling: e.g. a Burn/crit Maelle wants a Fire weapon scaling Agility + Luck. Scaling grades (S best) are shown at max level. Gustave and Verso share a weapon pool. Search by name, character, or element below.";

const WEAPONS = [
  // -- Universal --
  { n: "Guleson Baguette", c: "Any (all characters)", el: "Void", m: "A", a: "S" },

  // -- Gustave / Verso (shared) --
  { n: "Lanceram",   c: "Gustave / Verso", el: "Physical",  v: "S", a: "A" },
  { n: "Sucreso",    c: "Gustave / Verso", el: "Earth",     v: "A", d: "S" },
  { n: "Tireso",     c: "Gustave / Verso", el: "Earth",     v: "S", a: "A" },
  { n: "Seeram",     c: "Gustave / Verso", el: "Light",     v: "A", a: "S" },
  { n: "Corpeso",    c: "Gustave / Verso", el: "Fire",      v: "A", a: "S" },
  { n: "Nosaram",    c: "Gustave / Verso", el: "Physical",  a: "S", l: "A" },
  { n: "Liteso",     c: "Gustave / Verso", el: "Physical",  a: "A", d: "S" },
  { n: "Blodam",     c: "Gustave / Verso", el: "Light",     a: "S", d: "A" },
  { n: "Cruleram",   c: "Gustave / Verso", el: "Ice",       d: "S", l: "A" },
  { n: "Verleso",    c: "Gustave / Verso", el: "Physical",  v: "S" },
  { n: "Delaram",    c: "Gustave / Verso", el: "Light",     v: "A", l: "S" },
  { n: "Gaulteram",  c: "Gustave / Verso", el: "Earth",     a: "S", l: "A" },
  { n: "Abysseram",  c: "Gustave / Verso", el: "Physical",  v: "S", d: "A" },
  { n: "Simoso",     c: "Gustave / Verso", el: "Light",     v: "A", a: "S" },
  { n: "Gesam",      c: "Gustave / Verso", el: "Physical",  v: "A", a: "S" },
  { n: "Cultam",     c: "Gustave / Verso", el: "Dark",      a: "A", d: "S" },
  { n: "Dreameso",   c: "Gustave / Verso", el: "Physical",  a: "S", l: "A" },
  { n: "Chevalam",   c: "Gustave / Verso", el: "Physical",  a: "S", l: "A" },
  { n: "Confuso",    c: "Gustave / Verso", el: "Light",     a: "A", l: "S" },
  { n: "Danseso",    c: "Gustave / Verso", el: "Fire",      a: "A", l: "S" },
  { n: "Sakaram",    c: "Gustave / Verso", el: "Physical",  a: "S", l: "A" },
  { n: "Glaceso",    c: "Gustave / Verso", el: "Ice",       d: "A", l: "S" },
  { n: "Contorso",   c: "Gustave / Verso", el: "Lightning", a: "S", d: "A" },
  { n: "Demonam",    c: "Gustave / Verso", el: "Light",     a: "S", d: "A" },
  { n: "Sireso",     c: "Gustave / Verso", el: "Physical",  v: "S", a: "A" },
  { n: "Noahram",    c: "Gustave / Verso", el: "Physical",  v: "S" },
  { n: "Dualiso",    c: "Gustave / Verso", el: "Lightning", v: "S", d: "A" },
  { n: "Esquiso",    c: "Gustave / Verso", el: "Light",     a: "A", l: "S" },

  // -- Lune --
  { n: "Scaverim",   c: "Lune", el: "Dark",      v: "S", a: "A" },
  { n: "Snowim",     c: "Lune", el: "Ice",       v: "A", a: "S" },
  { n: "Bonbim",     c: "Lune", el: "Lightning", v: "A", l: "S" },
  { n: "Esquim",     c: "Lune", el: "Dark",      a: "S", d: "A" },
  { n: "Elerim",     c: "Lune", el: "Earth",     v: "S", d: "A" },
  { n: "Cleim",      c: "Lune", el: "Light",     a: "A", l: "S" },
  { n: "Choralim",   c: "Lune", el: "Fire",      a: "A", d: "S" },
  { n: "Kralim",     c: "Lune", el: "Lightning", v: "A", a: "S" },
  { n: "Braselim",   c: "Lune", el: "Fire",      v: "A", l: "S" },
  { n: "Angerim",    c: "Lune", el: "Fire",      d: "A", l: "S" },
  { n: "Betelim",    c: "Lune", el: "Earth",     v: "A", a: "S" },
  { n: "Chapelim",   c: "Lune", el: "Earth",     a: "S", d: "A" },
  { n: "Lithelim",   c: "Lune", el: "Void",      v: "S", l: "A" },
  { n: "Troubadim",  c: "Lune", el: "Physical",  v: "A", d: "S" },
  { n: "Trebuchim",  c: "Lune", el: "Lightning", v: "S", l: "A" },
  { n: "Saperim",    c: "Lune", el: "Lightning", d: "S", l: "A" },
  { n: "Potierim",   c: "Lune", el: "Ice",       a: "S", d: "A" },
  { n: "Deminerim",  c: "Lune", el: "Lightning", a: "A", l: "S" },
  { n: "Coralim",    c: "Lune", el: "Ice",       v: "A", d: "S" },
  { n: "Painerim",   c: "Lune", el: "Earth",     v: "A", l: "S" },
  { n: "Benisim",    c: "Lune", el: "Earth",     v: "S", d: "A" },
  { n: "Lighterim",  c: "Lune", el: "Fire",      a: "S", d: "A" },
  { n: "Redalim",    c: "Lune", el: "Ice",       a: "A", d: "S" },
  { n: "Colim",      c: "Lune", el: "Light",     v: "S", a: "A" },
  { n: "Lunerim",    c: "Lune", el: "Fire",      v: "A", l: "S" },

  // -- Maelle --
  { n: "Tissenum",        c: "Maelle", el: "Earth",     v: "A", a: "S" },
  { n: "Glaisum",         c: "Maelle", el: "Physical",  a: "A", d: "S" },
  { n: "Esqium",          c: "Maelle", el: "Fire",      a: "S", d: "A" },
  { n: "Barrier Breaker", c: "Maelle", el: "Void",      a: "A", d: "S" },
  { n: "Melarum",         c: "Maelle", el: "Physical",  v: "S", a: "A" },
  { n: "Licorum",         c: "Maelle", el: "Physical",  a: "A", l: "S" },
  { n: "Facesum",         c: "Maelle", el: "Physical",  v: "A", l: "S" },
  { n: "Chalium",         c: "Maelle", el: "Light",     v: "A", a: "S" },
  { n: "Sekarum",         c: "Maelle", el: "Physical",  v: "S", a: "A" },
  { n: "Yeverum",         c: "Maelle", el: "Physical",  a: "A", d: "S" },
  { n: "Veremum",         c: "Maelle", el: "Physical",  v: "A", l: "S" },
  { n: "Volesterum",      c: "Maelle", el: "Physical",  v: "A", a: "S" },
  { n: "Maellum",         c: "Maelle", el: "Physical",  v: "S" },
  { n: "Lithum",          c: "Maelle", el: "Void",      a: "A", l: "S" },
  { n: "Stalum",          c: "Maelle", el: "Fire",      d: "S", l: "A" },
  { n: "Clierum",         c: "Maelle", el: "Lightning", a: "S", d: "A" },
  { n: "Battlum",         c: "Maelle", el: "Physical",  d: "S", l: "A" },
  { n: "Plenum",          c: "Maelle", el: "Ice",       d: "A", l: "S" },
  { n: "Seashelum",       c: "Maelle", el: "Fire",      a: "S", d: "A" },
  { n: "Medalum",         c: "Maelle", el: "Physical",  a: "A", d: "S" },
  { n: "Chantenum",       c: "Maelle", el: "Fire",      a: "A", l: "S" },
  { n: "Brulerum",        c: "Maelle", el: "Fire",      a: "A", l: "S" },
  { n: "Jarum",           c: "Maelle", el: "Physical",  d: "S", l: "A" },
  { n: "Coldum",          c: "Maelle", el: "Ice",       v: "S", d: "A" },
  { n: "Duenum",          c: "Maelle", el: "Physical",  a: "A", d: "S" },

  // -- Sciel --
  { n: "Sucetton",   c: "Sciel", el: "Fire",      a: "A", l: "S" },
  { n: "Blizzon",    c: "Sciel", el: "Ice",       d: "A", l: "S" },
  { n: "Direton",    c: "Sciel", el: "Earth",     a: "S", d: "A" },
  { n: "Martenon",   c: "Sciel", el: "Earth",     v: "S", a: "A" },
  { n: "Esquion",    c: "Sciel", el: "Physical",  v: "A", l: "S" },
  { n: "Duollison",  c: "Sciel", el: "Physical",  a: "S", l: "A" },
  { n: "Chation",    c: "Sciel", el: "Dark",      v: "A", l: "S" },
  { n: "Ramasson",   c: "Sciel", el: "Physical",  v: "A", l: "S" },
  { n: "Scieleson",  c: "Sciel", el: "Physical",  a: "S", l: "A" },
  { n: "Hevason",    c: "Sciel", el: "Physical",  v: "S", d: "A" },
  { n: "Lusteson",   c: "Sciel", el: "Dark",      v: "S", a: "A" },
  { n: "Gobluson",   c: "Sciel", el: "Fire",      a: "A", d: "S" },
  { n: "Moisson",    c: "Sciel", el: "Physical",  a: "S", l: "A" },
  { n: "Algueron",   c: "Sciel", el: "Ice",       v: "S", l: "A" },
  { n: "Guleson",    c: "Sciel", el: "Lightning", a: "A", l: "S" },
  { n: "Garganon",   c: "Sciel", el: "Fire",      v: "S", d: "A" },
  { n: "Rangeson",   c: "Sciel", el: "Dark",      a: "S", d: "A" },
  { n: "Bourgelon",  c: "Sciel", el: "Light",     v: "A", a: "S" },
  { n: "Tisseron",   c: "Sciel", el: "Lightning", a: "S", d: "A" },
  { n: "Charnon",    c: "Sciel", el: "Void",      d: "A", l: "S" },
  { n: "Litheson",   c: "Sciel", el: "Physical",  a: "A", l: "S" },
  { n: "Minason",    c: "Sciel", el: "Physical",  v: "A", l: "S" },
  { n: "Corderon",   c: "Sciel", el: "Dark",      d: "S", l: "A" },
  { n: "Sadon",      c: "Sciel", el: "Light",     a: "S", d: "A" },

  // -- Monoco --
  { n: "Nusaro",     c: "Monoco", el: "Dark",      v: "A", a: "S" },
  { n: "Fragaro",    c: "Monoco", el: "Lightning", d: "A", l: "S" },
  { n: "Esquiaro",   c: "Monoco", el: "Earth",     v: "S", d: "A" },
  { n: "Baguettaro", c: "Monoco", el: "Fire",      d: "A", l: "S" },
  { n: "Joyaro",     c: "Monoco", el: "Lightning", a: "S", d: "A" },
  { n: "Grandaro",   c: "Monoco", el: "Earth",     v: "S", d: "A" },
  { n: "Urnaro",     c: "Monoco", el: "Earth",     v: "S", l: "A" },
  { n: "Brumaro",    c: "Monoco", el: "Physical",  v: "S", a: "A" },
  { n: "Chromaro",   c: "Monoco", el: "Ice",       a: "S", d: "A" },
  { n: "Boucharo",   c: "Monoco", el: "Fire",      a: "A", l: "S" },
  { n: "Ballaro",    c: "Monoco", el: "Light",     a: "S", d: "A" },
  { n: "Sidaro",     c: "Monoco", el: "Dark",      m: "A", l: "S" },
  { n: "Monocaro",   c: "Monoco", el: "Physical",  a: "S", l: "A" }
];

if (typeof module !== "undefined") module.exports = { WEAPONS, WEAPONS_INTRO };
