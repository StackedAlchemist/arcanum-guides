/* FF7 Rebirth — armor & accessory priority renderer */
(function () {
  "use strict";

  var DATA = window.FF7R_GEAR;
  if (!DATA) return;

  var TIER_CLASS = {
    unique: "tag-red",
    limited: "tag-yellow",
    craftable: "tag-green",
    shop: "tag-blue"
  };

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function init() {
    var root = document.getElementById("gear-root");
    if (!root) return;

    var tiers = Object.keys(DATA.accessoryTiers).map(function (k) {
      var t = DATA.accessoryTiers[k];
      return (
        '<div class="sys-card reveal">' +
        '<h3><span class="tag ' + (TIER_CLASS[k] || "") + '">' + esc(t.label) + "</span></h3>" +
        "<p>" + esc(t.desc) + "</p></div>"
      );
    }).join("");

    var philosophy = "<ul class=\"fg-list\">" +
      DATA.armorPhilosophy.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") +
      "</ul>";

    var armorRows = DATA.armorPriority.map(function (a) {
      var pieces = a.pieces.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      return (
        "<tr><td><strong>" + esc(a.phase) + "</strong></td>" +
        "<td>Ch." + a.chapter + "+</td>" +
        "<td>" + esc(a.craft) + "</td>" +
        "<td><ul class=\"mat-source-list\">" + pieces + "</ul></td>" +
        "<td>" + esc(a.notes) + "</td></tr>"
      );
    }).join("");

    var accRows = DATA.accessoryPriority.map(function (a) {
      var tier = DATA.accessoryTiers[a.tier];
      return (
        "<tr><td><strong>" + esc(a.name) + "</strong></td>" +
        '<td><span class="tag ' + (TIER_CLASS[a.tier] || "") + '">' + esc(tier ? tier.label : a.tier) + "</span></td>" +
        "<td>Ch." + a.chapter + "+</td>" +
        "<td>" + esc(a.bestOn) + "</td>" +
        "<td>" + esc(a.effect) + "</td>" +
        "<td>" + esc(a.source) + "</td>" +
        "<td>" + esc(a.notes) + "</td></tr>"
      );
    }).join("");

    var charCards = DATA.characterRecs.map(function (c) {
      return (
        '<div class="sys-card reveal gear-char-card">' +
        "<h3>" + esc(c.name) + "</h3>" +
        '<p><strong>Armor:</strong> ' + esc(c.armor) + "</p>" +
        '<p><strong>Accessory:</strong> ' + esc(c.accessory) + "</p>" +
        '<p class="sys-reward">' + esc(c.notes) + "</p></div>"
      );
    }).join("");

    root.innerHTML =
      '<p class="sys-intro reveal">' + esc(DATA.intro) + "</p>" +
      '<div class="mat-crosslinks reveal">' +
      '<a class="mat-crosslink" href="crafting.html">Crafting &amp; Mats</a>' +
      '<a class="mat-crosslink" href="builds.html">Builds &amp; Party Equiper</a>' +
      '<a class="mat-crosslink" href="parties.html">Party Setup</a>' +
      "</div>" +
      '<span class="section-tag reveal">Philosophy</span>' +
      '<h2 class="section-title reveal">Who Gets the Limited Pieces</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="callout reveal"><strong>Main trio first:</strong> Cloud, Aerith, and Barret (or your active three) get unique accessories and first Enhanced armor crafts. Bench characters get shop gear until NG+.</div>' +
      '<div class="reveal">' + philosophy + "</div>" +
      '<span class="section-tag reveal">Tiers</span>' +
      '<h2 class="section-title reveal">Accessory Scarcity</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="sys-card-grid">' + tiers + "</div>" +
      '<span class="section-tag reveal">Armor</span>' +
      '<h2 class="section-title reveal">Enhanced Armor by Phase</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<p class="reveal mat-avail-desc">Each phase craft Enhanced armor at the Transmuter after finding that region\'s chips. Full chip locations on the <a class="xref" href="crafting.html#craft-chips">Crafting page</a>.</p>' +
      '<div class="table-wrap reveal mat-catalog-wrap"><table><thead><tr><th>Phase</th><th>From</th><th>Chip</th><th>Who Gets What</th><th>Notes</th></tr></thead><tbody>' +
      armorRows + "</tbody></table></div>" +
      '<span class="section-tag reveal">Accessories</span>' +
      '<h2 class="section-title reveal">Accessory Priority Table</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="table-wrap reveal mat-catalog-wrap"><table><thead><tr><th>Accessory</th><th>Tier</th><th>From</th><th>Best On</th><th>Effect</th><th>Source</th><th>Notes</th></tr></thead><tbody>' +
      accRows + "</tbody></table></div>" +
      '<span class="section-tag reveal">Characters</span>' +
      '<h2 class="section-title reveal">Per-Character Recommendations</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="sys-card-grid">' + charCards + "</div>";

    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();