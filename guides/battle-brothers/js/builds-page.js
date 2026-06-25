/* ============================================================
   THE MERCENARY CODEX - Builds page renderer + roster picker
   Renders build cards from data/builds.js and persists the
   player's selected company builds to localStorage.
   ============================================================ */
(function () {
  "use strict";

  var DATA = window.BB_BUILDS;
  if (!DATA || !DATA.builds) return;

  var STORAGE_KEY = DATA.meta.rosterKey || "arcanum.bb.roster";

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function tierClass(t) {
    return "tier tier-" + (t || "B").toUpperCase();
  }

  function pathLabel(p) {
    if (p === "bf") return "Battle Forged";
    if (p === "nimble") return "Nimble";
    return "Hybrid";
  }

  function loadRoster() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function saveRoster(ids) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e) { /* private mode */ }
  }

  function renderPerkPath(perks) {
    return perks.map(function (pk) {
      var gate = pk.gate ? " gate" : "";
      return '<span class="step' + gate + '"><b>' + pk.level + "</b>" + esc(pk.name) + "</span>";
    }).join("");
  }

  function renderMilestones(items) {
    if (!items || !items.length) return "";
    var lis = items.map(function (m) {
      return "<li><strong>Lv " + m.level + ":</strong> " + esc(m.text) + "</li>";
    }).join("");
    return '<div class="milestones"><span class="label">Level milestones</span><ul class="spear">' + lis + "</ul></div>";
  }

  function renderArmorBlock(armor, path) {
    if (!armor) return "";
    return (
      '<div class="armor-guide">' +
      '<span class="label">Armor by phase (' + esc(pathLabel(path)) + " path)</span>" +
      "<ul class=\"spear\">" +
      "<li><strong>Early:</strong> " + esc(armor.early) + "</li>" +
      "<li><strong>Mid:</strong> " + esc(armor.mid) + "</li>" +
      "<li><strong>Late:</strong> " + esc(armor.late) + "</li>" +
      (armor.note ? "<li><em>" + esc(armor.note) + "</em></li>" : "") +
      "</ul></div>"
    );
  }

  function renderBuildCard(b, compact) {
    if (compact) {
      return (
        '<a class="roster-chip" href="#' + b.id + '" data-build-id="' + b.id + '">' +
        '<span class="chip-tag">[' + esc(b.tag) + "]</span> " +
        "<span class=\"chip-name\">" + esc(b.name) + "</span>" +
        '<span class="chip-sub">' + esc(b.subtitle) + "</span>" +
        "</a>"
      );
    }

    var stats = b.stats.map(function (s) {
      return '<div><span class="k">' + esc(s.k) + '</span><span class="v">' + esc(s.v) + "</span></div>";
    }).join("");

    var html =
      '<article class="build panel" id="' + b.id + '" data-build-id="' + b.id + '">' +
      "<h3><span class=\"" + tierClass(b.tier) + "\">" + esc(b.tier) + "</span> " +
      esc(b.name) + " &mdash; " + esc(b.subtitle) +
      ' <span class="build-tag mono">[' + esc(b.tag) + "]</span></h3>" +
      "<p><em>Role: " + esc(b.blurb) + "</em></p>" +
      '<div class="statblock">' + stats + "</div>" +
      '<p class="talents"><strong>Talent stars:</strong> ' + esc(b.talents) +
      ". <strong>Backgrounds:</strong> " + esc(b.backgrounds) + "</p>" +
      '<div class="path">' + renderPerkPath(b.perks) + "</div>" +
      '<p class="levelup"><b>Level-up priority</b> &mdash; raise these three each level: <strong>' +
      esc(b.levelup) + "</strong></p>" +
      '<p><strong>Weapons:</strong> ' + esc(b.weapons) + "</p>" +
      renderArmorBlock(b.armor, b.path) +
      renderMilestones(b.milestones) +
      '<p style="margin-bottom:0;"><strong>Notes:</strong> ' + esc(b.notes) +
      (b.variants ? " <strong>Variants:</strong> " + esc(b.variants) : "") +
      "</p></article>";

    return html;
  }

  function renderPicker(roster) {
    var chips = DATA.builds.map(function (b) {
      var on = roster.indexOf(b.id) !== -1 ? " checked" : "";
      return (
        '<label class="pick-chip">' +
        '<input type="checkbox" data-pick-build="' + b.id + '"' + on + ">" +
        '<span class="pick-tag">[' + esc(b.tag) + "]</span> " +
        "<span class=\"pick-name\">" + esc(b.name) + "</span>" +
        "</label>"
      );
    }).join("");

    return (
      '<div class="roster-panel panel" id="my-company">' +
      "<h3>My Company &mdash; quick reference</h3>" +
      "<p>Tick the builds you're actually running. Your picks are saved in this browser and pinned below so you don't scroll hunting for them.</p>" +
      '<div class="pick-grid">' + chips + "</div>" +
      '<div class="pick-actions">' +
      '<button type="button" class="pick-btn" data-roster-clear>Clear all</button>' +
      '<button type="button" class="pick-btn" data-roster-all>Select all</button>' +
      "</div>" +
      '<div id="roster-quick" class="roster-quick"></div>' +
      "</div>"
    );
  }

  function updateQuickRef(roster) {
    var host = document.getElementById("roster-quick");
    if (!host) return;
    if (!roster.length) {
      host.innerHTML = '<p class="search-note">No builds selected yet &mdash; tick the chips above when you assign roles on hire.</p>';
      return;
    }
    var cards = roster.map(function (id) {
      var b = DATA.builds.find(function (x) { return x.id === id; });
      return b ? renderBuildCard(b, true) : "";
    }).join("");
    host.innerHTML = '<p class="search-note"><strong>' + roster.length + " pinned</strong> &mdash; jump to a build:</p><div class=\"roster-chips\">" + cards + "</div>";
  }

  function renderPhasebar() {
    return DATA.builds.map(function (b) {
      return '<a href="#' + b.id + '">' + esc(b.tag) + " (" + esc(b.subtitle) + ")</a>";
    }).join("") + '<a href="#compendium">Compendium</a>';
  }

  function bindRoster() {
    var roster = loadRoster();
    updateQuickRef(roster);

    document.querySelectorAll("[data-pick-build]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        var id = cb.getAttribute("data-pick-build");
        var idx = roster.indexOf(id);
        if (cb.checked && idx === -1) roster.push(id);
        if (!cb.checked && idx !== -1) roster.splice(idx, 1);
        saveRoster(roster);
        updateQuickRef(roster);
      });
    });

    var clearBtn = document.querySelector("[data-roster-clear]");
    var allBtn = document.querySelector("[data-roster-all]");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        roster = [];
        saveRoster(roster);
        document.querySelectorAll("[data-pick-build]").forEach(function (cb) { cb.checked = false; });
        updateQuickRef(roster);
      });
    }
    if (allBtn) {
      allBtn.addEventListener("click", function () {
        roster = DATA.builds.map(function (b) { return b.id; });
        saveRoster(roster);
        document.querySelectorAll("[data-pick-build]").forEach(function (cb) { cb.checked = true; });
        updateQuickRef(roster);
      });
    }
  }

  function init() {
    var pickerHost = document.getElementById("build-picker");
    var listHost = document.getElementById("build-list");
    var barHost = document.querySelector(".phasebar");

    if (barHost) barHost.innerHTML = renderPhasebar();

    var roster = loadRoster();
    if (pickerHost) {
      pickerHost.innerHTML = renderPicker(roster);
    }
    if (listHost) {
      listHost.innerHTML = DATA.builds.map(function (b) { return renderBuildCard(b, false); }).join("");
    }

    bindRoster();
    refreshSearch();
  }

  /* re-bind live search after dynamic .build rows are injected */
  function refreshSearch() {
    var search = document.querySelector("[data-search]");
    if (!search || search._bbBound) return;
    var targetSel = search.getAttribute("data-target");
    var rows = Array.prototype.slice.call(document.querySelectorAll(targetSel));
    var counter = document.querySelector("[data-search-count]");
    function applyFilter() {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (row) {
        var hit = row.textContent.toLowerCase().indexOf(q) !== -1;
        row.classList.toggle("is-hidden", !hit);
        if (hit) shown++;
      });
      if (counter) {
        counter.textContent = q
          ? shown + " match" + (shown === 1 ? "" : "es")
          : rows.length + " entries";
      }
    }
    search.addEventListener("input", applyFilter);
    search._bbBound = true;
    applyFilter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();