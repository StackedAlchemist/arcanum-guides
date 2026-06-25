/* FF7 Rebirth — Queen's Blood phase decks & matchups */
(function () {
  "use strict";

  var DATA = window.FF7R_QUEENSBLOOD;
  if (!DATA) return;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function renderDeck(deck) {
    var cards = deck.cards.map(function (c) {
      return (
        '<div class="deck-entry">' +
        '<span class="deck-pips">' + c.pips + "</span>" +
        '<span class="deck-name">' + esc(c.name) + "</span>" +
        '<span class="deck-copies">×' + c.copies + "</span></div>"
      );
    }).join("");

    return (
      '<div class="deck-visual reveal" id="qb-' + esc(deck.id) + '">' +
      '<div class="deck-title">' + esc(deck.name) + '</div>' +
      '<div class="deck-subtitle">' + esc(deck.subtitle) + ' <span class="sim-ch">Available Ch.' + deck.minChapter + '+</span></div>' +
      '<div class="deck-list">' + cards + "</div>" +
      '<div class="deck-note"><strong>Strategy:</strong> ' + esc(deck.strategy) + "</div>" +
      '<div class="deck-note" style="border-top:none;padding-top:0.5rem;"><strong>Unlocks:</strong> ' + esc(deck.unlocks) + "</div></div>"
    );
  }

  function init() {
    var root = document.getElementById("qb-decks-root");
    var matchRoot = document.getElementById("qb-matchups-root");
    var unlockRoot = document.getElementById("qb-unlocks-root");
    if (!root) return;

    var phaseNav = DATA.phases.map(function (p) {
      return '<a class="mat-crosslink" href="#qb-phase-' + p.id + '">' + esc(p.label) + " (" + esc(p.chapters) + ")</a>";
    }).join("");

    var phaseSections = DATA.phases.map(function (p) {
      var decks = DATA.decks.filter(function (d) { return d.phase === p.id; });
      if (!decks.length) return "";
      var deckHtml = decks.map(renderDeck).join("");
      return (
        '<div class="qb-phase-section reveal" id="qb-phase-' + p.id + '">' +
        '<span class="section-tag">' + esc(p.label) + "</span>" +
        '<h2 class="section-title">' + esc(p.label) + " Decks</h2>' +
        '<div class="section-rule"></div>' +
        '<p class="mat-avail-desc">Minimum chapter ' + p.minChapter + ". Cards gated later are noted in each deck.</p>" +
        deckHtml + "</div>"
      );
    }).join("");

    root.innerHTML =
      '<p class="sys-intro reveal">' + esc(DATA.intro) + "</p>" +
      '<div class="mat-crosslinks reveal">' + phaseNav + "</div>" +
      phaseSections;

    if (matchRoot) {
      var rows = DATA.matchups.map(function (m) {
        return (
          "<tr><td><strong>" + esc(m.archetype) + "</strong><p class=\"mat-row-note\">" + esc(m.signs) + "</p></td>" +
          "<td>" + esc(m.counterDeck) + "</td>" +
          "<td>" + esc(m.tips) + "</td></tr>"
        );
      }).join("");

      matchRoot.innerHTML =
        '<div class="table-wrap reveal mat-catalog-wrap"><table><thead><tr><th>Enemy Archetype</th><th>Counter Deck</th><th>How to Win</th></tr></thead><tbody>' +
        rows + "</tbody></table></div>";
    }

    if (unlockRoot) {
      var unlockRows = DATA.cardUnlocks.map(function (c) {
        var req = c.required
          ? '<span class="tag tag-red">Core</span>'
          : '<span class="tag tag-blue">Optional</span>';
        return (
          "<tr><td><strong>" + esc(c.card) + "</strong></td>" +
          "<td>" + esc(c.source) + "</td>" +
          "<td>Ch." + c.chapter + "+</td>" +
          "<td>" + req + "</td></tr>"
        );
      }).join("");

      unlockRoot.innerHTML =
        '<div class="table-wrap reveal mat-catalog-wrap"><table><thead><tr><th>Card</th><th>How to Obtain</th><th>Chapter</th><th>Priority</th></tr></thead><tbody>' +
        unlockRows + "</tbody></table></div>";
    }

    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();