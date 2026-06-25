/* FF7 Rebirth — materia availability catalog renderer */
(function () {
  "use strict";

  var DATA = window.FF7R_MATERIA;
  if (!DATA) return;

  var TYPE_CLASS = {
    magic: "tag-green",
    support: "tag-blue",
    command: "tag-yellow",
    independent: "tag-purple",
    summon: "tag-red"
  };

  var TYPE_LABEL = {
    magic: "Magic",
    support: "Support",
    command: "Command",
    independent: "Independent",
    summon: "Summon"
  };

  var AVAIL_ORDER = ["unique", "limited", "unlimited"];

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function copiesBadge(entry) {
    if (entry.availability === "unlimited") {
      return '<span class="copies-badge copies-buy">Unlimited shop</span>';
    }
    if (entry.copies === 1) {
      return '<span class="copies-badge copies-1">1 only</span>';
    }
    return '<span class="copies-badge copies-3">' + entry.copies + ' total</span>';
  }

  function renderSources(sources) {
    return "<ul class=\"mat-source-list\">" +
      sources.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") +
      "</ul>";
  }

  function renderTable(entries) {
    if (!entries.length) return "<p class=\"mat-empty\">No entries.</p>";
    var rows = entries.map(function (e) {
      var note = e.notes ? '<p class="mat-row-note">' + esc(e.notes) + "</p>" : "";
      return (
        "<tr>" +
        "<td><strong>" + esc(e.name) + "</strong>" + note + "</td>" +
        '<td><span class="tag ' + (TYPE_CLASS[e.type] || "") + '">' + esc(TYPE_LABEL[e.type] || e.type) + "</span></td>" +
        "<td>" + copiesBadge(e) + "</td>" +
        "<td>Ch." + e.chapter + "+</td>" +
        "<td>" + renderSources(e.sources) + "</td>" +
        "</tr>"
      );
    }).join("");

    return (
      '<div class="mat-catalog-wrap">' +
      "<table><thead><tr>" +
      "<th>Materia</th><th>Type</th><th>Copies</th><th>Earliest</th><th>Sources</th>" +
      "</tr></thead><tbody>" + rows + "</tbody></table></div>"
    );
  }

  function init() {
    var root = document.getElementById("materia-catalog");
    if (!root) return;

    var html = AVAIL_ORDER.map(function (key) {
      var meta = DATA.meta.availability[key];
      var items = DATA.entries.filter(function (e) { return e.availability === key; });
      items.sort(function (a, b) {
        if (a.chapter !== b.chapter) return a.chapter - b.chapter;
        return a.name.localeCompare(b.name);
      });
      return (
        '<section class="mat-avail-section reveal" id="mat-' + key + '">' +
        '<span class="section-tag">' + esc(meta.label) + "</span>" +
        '<h2 class="section-title">' + esc(meta.label) + "</h2>" +
        '<div class="section-rule"></div>' +
        '<p class="mat-avail-desc">' + esc(meta.desc) + "</p>" +
        renderTable(items) +
        "</section>"
      );
    }).join("");

    root.innerHTML = html;

    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();