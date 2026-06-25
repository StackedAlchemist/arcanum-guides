/* FF7 Rebirth — Weapons location page renderer */
(function () {
  "use strict";

  var DATA = window.FF7R_DATA;
  if (!DATA) return;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function charName(id) {
    var ch = DATA.characters.find(function (c) { return c.id === id; });
    return ch ? ch.name : id;
  }

  function phaseLabel(phase) {
    return DATA.phases[phase] ? DATA.phases[phase].label : phase;
  }

  function renderWeaponCard(w) {
    var ch = DATA.characters.find(function (c) { return c.id === w.character; });
    var cssClass = ch ? ch.cssClass : "";
    var shopBlock = w.shop
      ? '<div class="weapon-detail"><strong>Shop:</strong> ' + esc(w.shop) + "</div>"
      : '<div class="weapon-detail weapon-muted"><strong>Shop:</strong> Not sold — field/quest only.</div>';

    return (
      '<article class="weapon-card reveal ' + cssClass + '" id="' + esc(w.id) + '">' +
      '<div class="weapon-card-head">' +
      '<span class="weapon-char">' + esc(charName(w.character)) + "</span>" +
      '<h3 class="weapon-name">' + esc(w.name) + "</h3>" +
      '<span class="weapon-chapter">Chapter ' + w.chapter + "+</span>" +
      "</div>" +
      '<div class="weapon-card-body">' +
      '<div class="weapon-detail"><strong>Location:</strong> ' + esc(w.location) + "</div>" +
      shopBlock +
      '<div class="weapon-detail"><strong>Phase:</strong> ' + esc(phaseLabel(w.phase)) + "</div>" +
      (w.notes ? '<p class="weapon-notes">' + esc(w.notes) + "</p>" : "") +
      '<a class="weapon-back-link" href="builds.html#party-equip">← Back to Party Equiper</a>' +
      "</div></article>"
    );
  }

  function groupWeaponsByCharacter() {
    var groups = {};
    DATA.characters.forEach(function (ch) {
      groups[ch.id] = { character: ch, weapons: [] };
    });
    Object.keys(DATA.weapons).forEach(function (wid) {
      var w = DATA.weapons[wid];
      if (groups[w.character]) groups[w.character].weapons.push(w);
    });
    Object.keys(groups).forEach(function (id) {
      groups[id].weapons.sort(function (a, b) { return a.chapter - b.chapter; });
    });
    return groups;
  }

  function init() {
    var root = document.getElementById("weapons-root");
    if (!root) return;

    var groups = groupWeaponsByCharacter();
    var html = DATA.characters.map(function (ch) {
      var g = groups[ch.id];
      if (!g || !g.weapons.length) return "";
      var cards = g.weapons.map(renderWeaponCard).join("");
      return (
        '<section class="weapon-char-section ' + ch.cssClass + ' reveal">' +
        '<h2 class="weapon-section-title">' + esc(ch.name) + "</h2>" +
        '<div class="weapon-grid">' + cards + "</div></section>"
      );
    }).join("");

    root.innerHTML = html;

    if (window.location.hash) {
      var el = document.querySelector(window.location.hash);
      if (el) setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 120);
    }

    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();