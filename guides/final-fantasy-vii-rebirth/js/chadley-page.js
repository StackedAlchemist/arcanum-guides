/* FF7 Rebirth — Chadley page renderer */
(function () {
  "use strict";

  var DATA = window.FF7R_CHADLEY;
  if (!DATA) return;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function init() {
    var root = document.getElementById("chadley-root");
    if (!root) return;

    var terminals = DATA.terminals.map(function (t) {
      return "<tr><td>" + esc(t.region) + "</td><td>Ch." + t.chapter + "</td><td>" + esc(t.unlock) + "</td></tr>";
    }).join("");

    var intel = DATA.intelTypes.map(function (i) {
      return (
        '<div class="sys-card reveal">' +
        "<h3>" + esc(i.name) + "</h3>" +
        "<p>" + esc(i.desc) + "</p>" +
        '<p class="sys-reward"><strong>Rewards:</strong> ' + esc(i.reward) + "</p></div>"
      );
    }).join("");

    var dataPoints = DATA.dataPointRewards.map(function (r) {
      var opts = r.options.map(function (o) {
        return '<span class="tag tag-blue">' + esc(o) + "</span>";
      }).join(" ");
      return "<tr><td>" + esc(r.region) + "</td><td>Ch." + r.chapter + "</td><td>" + opts + "</td></tr>";
    }).join("");

    var notes = "<ul class=\"fg-list\">" +
      DATA.shopNotes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") +
      "</ul>";

    root.innerHTML =
      '<p class="sys-intro reveal">' + esc(DATA.intro) + "</p>" +
      '<div class="callout reveal"><strong>Protorelics:</strong> ' + esc(DATA.protorelicNote) + "</div>" +
      '<span class="section-tag reveal">Terminals</span>' +
      '<h2 class="section-title reveal">Research Terminal Locations</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="table-wrap reveal"><table><thead><tr><th>Region</th><th>Chapter</th><th>Unlock</th></tr></thead><tbody>' +
      terminals + "</tbody></table></div>" +
      '<span class="section-tag reveal">Intel Types</span>' +
      '<h2 class="section-title reveal">How Intel Works</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="sys-card-grid">' + intel + "</div>" +
      '<span class="section-tag reveal">Data Points</span>' +
      '<h2 class="section-title reveal">Regional Data Point Materia</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<p class="reveal" style="color:var(--text2);margin-bottom:1rem;">Each region offers <strong>four one-time exchanges</strong>. You cannot buy a second copy of any Data Point materia — choose carefully. Full scarcity breakdown on the <a class="xref" href="materia.html#mat-unique">Materia page</a>.</p>' +
      '<div class="table-wrap reveal"><table><thead><tr><th>Region</th><th>Chapter</th><th>Exchange Options (pick one each)</th></tr></thead><tbody>' +
      dataPoints + "</tbody></table></div>" +
      '<span class="section-tag reveal">Shop Notes</span>' +
      '<h2 class="section-title reveal">Chadley Shop vs Field Finds</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="reveal">' + notes + "</div>";

    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();