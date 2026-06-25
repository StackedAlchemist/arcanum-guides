/* FF7 Rebirth — Combat Simulator page renderer */
(function () {
  "use strict";

  var DATA = window.FF7R_SIMULATOR;
  if (!DATA) return;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function renderCategory(cat) {
    var body = "<p>" + esc(cat.desc) + "</p>";

    if (cat.id === "regional" && cat.examples) {
      body += '<div class="table-wrap"><table><thead><tr><th>Region</th><th>Ch.</th><th>Rewards</th></tr></thead><tbody>';
      body += cat.examples.map(function (ex) {
        return "<tr><td>" + esc(ex.region) + "</td><td>" + ex.chapter + "</td><td>" + esc(ex.materia) + "</td></tr>";
      }).join("");
      body += "</tbody></table></div>";
    } else if (cat.id === "biological" && cat.rewards) {
      body += '<div class="table-wrap"><table><thead><tr><th>Intel</th><th>Unlock</th></tr></thead><tbody>';
      body += cat.rewards.map(function (r) {
        return "<tr><td>" + esc(r.intel) + "</td><td>" + esc(r.materia || r.skill) + "</td></tr>";
      }).join("");
      body += "</tbody></table></div>";
    } else if (cat.id === "battle" && cat.examples) {
      body += '<div class="table-wrap"><table><thead><tr><th>Fight</th><th>Region</th><th>Ch.</th><th>Materia</th></tr></thead><tbody>';
      body += cat.examples.map(function (ex) {
        return "<tr><td>" + esc(ex.name) + "</td><td>" + esc(ex.region) + "</td><td>" + ex.chapter + "</td><td>" + esc(ex.materia) + "</td></tr>";
      }).join("");
      body += "</tbody></table></div>";
    } else if (cat.rewards && Array.isArray(cat.rewards) && typeof cat.rewards[0] === "string") {
      body += "<ul class=\"fg-list\">" + cat.rewards.map(function (r) {
        return "<li>" + esc(r) + "</li>";
      }).join("") + "</ul>";
    }

    if (cat.challenges) {
      body += '<div class="table-wrap"><table><thead><tr><th>Challenge</th><th>Reward</th><th>Notes</th></tr></thead><tbody>';
      body += cat.challenges.map(function (c) {
        return "<tr><td>" + esc(c.name) + "</td><td>" + esc(c.reward) + "</td><td>" + esc(c.note) + "</td></tr>";
      }).join("");
      body += "</tbody></table></div>";
    }
    return (
      '<section class="sim-section reveal" id="sim-' + cat.id + '">' +
      '<h2 class="section-title">' + esc(cat.name) + ' <span class="sim-ch">Ch.' + cat.chapter + "+</span></h2>" +
      '<div class="section-rule"></div>' + body + "</section>"
    );
  }

  function init() {
    var root = document.getElementById("simulator-root");
    if (!root) return;

    var access = DATA.access.map(function (a) {
      return "<tr><td>" + esc(a.label) + "</td><td>Ch." + a.chapter + "</td><td>" + esc(a.note) + "</td></tr>";
    }).join("");

    var summonEntity = (DATA.summonEntity || []).map(function (s) {
      return "<tr><td><strong>" + esc(s.name) + "</strong></td><td>Ch." + s.chapter + "+</td><td>" + esc(s.unlock) + "</td><td>" + esc(s.island) + "</td></tr>";
    }).join("");

    var summons = DATA.summons.map(function (s) {
      return "<tr><td>" + esc(s.name) + "</td><td>Ch." + s.chapter + "+</td><td>" + esc(s.source) + "</td></tr>";
    }).join("");

    root.innerHTML =
      '<p class="sys-intro reveal">' + esc(DATA.intro) + "</p>" +
      '<span class="section-tag reveal">Access</span>' +
      '<h2 class="section-title reveal">When Each Suite Unlocks</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="table-wrap reveal"><table><thead><tr><th>Suite</th><th>Chapter</th><th>Notes</th></tr></thead><tbody>' +
      access + "</tbody></table></div>" +
      DATA.categories.map(renderCategory).join("") +
      '<span class="section-tag reveal">Summon Entity</span>' +
      '<h2 class="section-title reveal">Summon Materia by Region</h2>' +
      '<div class="section-rule reveal"></div>' +
      (DATA.gilgameshNote ? '<div class="callout reveal">' + esc(DATA.gilgameshNote) + "</div>" : "") +
      '<p class="reveal" style="color:var(--text2);margin-bottom:1rem;">Each character has one red summon slot. <strong>Ifrit, Shiva, and Chocobo &amp; Moogle</strong> are story starters; the rest unlock from <strong>Summon Entity</strong> VR fights as you reach each region — not from Gilgamesh Island first.</p>' +
      '<div class="table-wrap reveal"><table><thead><tr><th>Summon</th><th>From</th><th>Unlock Requirement</th><th>Island Rematch</th></tr></thead><tbody>' +
      summonEntity + "</tbody></table></div>" +
      '<span class="section-tag reveal">All Summons</span>' +
      '<h2 class="section-title reveal">Full Summon List</h2>' +
      '<div class="section-rule reveal"></div>' +
      '<div class="table-wrap reveal"><table><thead><tr><th>Summon</th><th>From</th><th>Source</th></tr></thead><tbody>' +
      summons + "</tbody></table></div>";

    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();