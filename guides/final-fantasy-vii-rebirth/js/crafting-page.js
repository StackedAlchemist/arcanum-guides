/* FF7 Rebirth — crafting & transmuter guide renderer */
(function () {
  "use strict";

  var DATA = window.FF7R_CRAFTING;
  if (!DATA) return;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function init() {
    var root = document.getElementById("crafting-root");
    if (!root) return;

    var tips = "<ul class=\"fg-list\">" +
      DATA.craftsmanshipTips.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") +
      "</ul>";

    var chipRows = DATA.transmuterChips.map(function (c) {
      var unlocks = c.unlocks.map(function (u) { return "<li>" + esc(u) + "</li>"; }).join("");
      return (
        "<tr><td>#" + c.num + "</td>" +
        "<td>" + esc(c.region) + "</td>" +
        "<td>Ch." + c.chapter + "+</td>" +
        "<td>" + esc(c.site) + "</td>" +
        "<td>" + esc(c.requirement) + "</td>" +
        "<td><ul class=\"mat-source-list\">" + unlocks + "</ul></td></tr>"
      );
    }).join("");

    var matCards = DATA.regionalMaterials.map(function (r) {
      var herbs = r.herbs.length ? "<p><strong>Herbs:</strong> " + esc(r.herbs.join(", ")) + "</p>" : "";
      var ores = r.ores.length ? "<p><strong>Ores / drops:</strong> " + esc(r.ores.join(", ")) + "</p>" : "";
      return (
        '<div class="sys-card reveal">' +
        "<h3>" + esc(r.region) + " <span class=\"sim-ch\">Ch." + r.chapter + " · " + esc(r.phase) + "</span></h3>" +
        herbs + ores +
        "<p class=\"sys-reward\">" + esc(r.notes) + "</p></div>"
      );
    }).join("");

    var waitRows = DATA.waitUntil.map(function (w) {
      return (
        "<tr><td><strong>" + esc(w.item) + "</strong></td>" +
        "<td>" + esc(w.waitFor) + "</td>" +
        "<td>Ch." + w.chapter + "+</td>" +
        "<td>" + esc(w.reason) + "</td></tr>"
      );
    }).join("");

    var recipeRows = DATA.keyRecipes.map(function (r) {
      return (
        "<tr><td><strong>" + esc(r.name) + "</strong></td>" +
        '<td><span class="tag tag-' + (r.type === "armor" ? "yellow" : "green") + '">' + esc(r.type) + "</span></td>" +
        "<td>Lv " + r.craftLevel + "</td>" +
        "<td>Ch." + r.chapter + "+</td>" +
        "<td>" + esc(r.mats) + "</td>" +
        "<td>" + esc(r.notes) + "</td></tr>"
      );
    }).join("");

    root.innerHTML =
      '<p class="sys-intro reveal">' + esc(DATA.intro) + "</p>" +
      '<div class="mat-crosslinks reveal">' +
      '<a class="mat-crosslink" href="gear.html">Armor &amp; Accessories</a>' +
      '<a class="mat-crosslink" href="chadley.html">Chadley &amp; Intel</a>' +
      '<a class="mat-crosslink" href="#craft-wait">Regional Gates</a>' +
      "</div>" +
      '<span class="section-tag reveal">Craftsmanship</span>' +
      '<h2 class="section-title reveal">How to Level the Transmuter</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="reveal">' + tips + "</div>" +
      '<span class="section-tag reveal" id="craft-chips">Transmuter Chips</span>' +
      '<h2 class="section-title reveal">All 12 Armor Upgrade Chips</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<p class="reveal mat-avail-desc">Found via <strong>Excavation Intel</strong> in each region. Two chips per region — first at 2 Expedition Intel clears, second at 6.</p>' +
      '<div class="table-wrap reveal mat-catalog-wrap"><table><thead><tr><th>#</th><th>Region</th><th>Chapter</th><th>Excavation Site</th><th>Requirement</th><th>Unlocks Enhanced</th></tr></thead><tbody>' +
      chipRows + "</tbody></table></div>" +
      '<span class="section-tag reveal">Materials</span>' +
      '<h2 class="section-title reveal">Regional Materials by Chapter</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="sys-card-grid">' + matCards + "</div>" +
      '<span class="section-tag reveal" id="craft-wait">Gates</span>' +
      '<h2 class="section-title reveal">Don\'t Craft Yet — Wait Until…</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<p class="reveal mat-avail-desc">These crafts look tempting early but waste mats if you craft before the region unlocks.</p>' +
      '<div class="table-wrap reveal mat-catalog-wrap"><table><thead><tr><th>Item</th><th>Wait For</th><th>Chapter</th><th>Why</th></tr></thead><tbody>' +
      waitRows + "</tbody></table></div>" +
      '<span class="section-tag reveal">Key Recipes</span>' +
      '<h2 class="section-title reveal">High-Value Crafts</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="table-wrap reveal mat-catalog-wrap"><table><thead><tr><th>Item</th><th>Type</th><th>Craft Lv</th><th>Chapter</th><th>Materials</th><th>Notes</th></tr></thead><tbody>' +
      recipeRows + "</tbody></table></div>";

    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();