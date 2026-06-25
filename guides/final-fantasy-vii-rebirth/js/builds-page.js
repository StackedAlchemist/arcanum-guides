/* FF7 Rebirth — Builds page renderer + Smart Party Equiper */
(function () {
  "use strict";

  var DATA = window.FF7R_DATA;
  var Equip = window.FF7R_PartyEquip;
  if (!DATA || !Equip) return;

  var STORAGE_KEY = DATA.meta.storageKey;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { chapter: 1, party: ["cloud", "aerith", "barret"], weapons: {}, ngPlus: false };
      var s = JSON.parse(raw);
      return {
        chapter: s.chapter || 1,
        party: Array.isArray(s.party) ? s.party : ["cloud", "aerith", "barret"],
        weapons: s.weapons || {},
        ngPlus: !!s.ngPlus
      };
    } catch (e) {
      return { chapter: 1, party: ["cloud", "aerith", "barret"], weapons: {}, ngPlus: false };
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* private mode */ }
  }

  function renderMateriaSlot(m) {
    var typeClass = DATA.materiaTypes[m.type] || "mat-green";
    var pair = m.pair ? '<span class="materia-pair">(' + esc(m.pair) + ")</span>" : "";
    var assigned = m.assigned ? ' <span class="equip-tag">auto</span>' : "";
    var note = m.note ? '<span class="materia-pair">' + esc(m.note) + "</span>" : "";
    return (
      '<div class="materia-slot">' +
      '<div class="mat-orb ' + typeClass + '"></div>' +
      '<span class="materia-name">' + esc(m.name) + assigned + "</span>" +
      pair + note +
      "</div>"
    );
  }

  function renderBuildCard(phaseKey, build) {
    if (!build) return "";
    var phaseInfo = DATA.phases[phaseKey];
    var phaseClass =
      phaseKey === "hard" ? "build-phase-hard" : (phaseInfo ? phaseInfo.class : "build-phase-early");
    var weapon = build.defaultWeapon ? DATA.weapons[build.defaultWeapon] : null;
    var weaponLine = "";
    if (weapon) {
      weaponLine =
        '<div class="weapon-rec"><strong>Weapon:</strong> ' +
        '<a href="weapons.html#' + esc(weapon.id) + '">' + esc(weapon.name) + "</a>";
      if (build.altWeapons && build.altWeapons.length) {
        var alts = build.altWeapons
          .map(function (wid) {
            var w = DATA.weapons[wid];
            return w ? '<a href="weapons.html#' + wid + '">' + esc(w.name) + "</a>" : "";
          })
          .filter(Boolean)
          .join(" / ");
        if (alts) weaponLine += " or " + alts;
      }
      weaponLine += "</div>";
    }
    if (build.accessory) {
      weaponLine +=
        '<div class="weapon-rec"><strong>Accessory:</strong> ' + esc(build.accessory) + "</div>";
    }

    var materia = (build.materia || []).map(renderMateriaSlot).join("");
    return (
      '<div class="build-card glass-card ' + phaseClass + '">' +
      '<div class="build-phase">' + esc(build.label || phaseInfo.label) + "</div>" +
      weaponLine +
      '<div class="materia-slot-row">' + materia + "</div>" +
      '<div class="build-notes">' + esc(build.notes) + "</div>" +
      "</div>"
    );
  }

  function renderCharacterSection(ch) {
    var tabs = "";
    if (ch.tabs && ch.tabs.length) {
      tabs =
        '<div class="build-tabs">' +
        ch.tabs.map(function (t) {
          return '<span class="build-tab">' + esc(t) + "</span>";
        }).join("") +
        "</div>";
    }

    var storyPhases = ["early", "mid", "late"];
    var cards = storyPhases
      .map(function (pk) { return renderBuildCard(pk, ch.builds[pk]); })
      .join("");

    var hardCard = "";
    if (ch.builds.hard) {
      hardCard =
        '<div class="hard-mode-block">' +
        '<span class="hard-mode-label">Hard Mode Overlay</span>' +
        renderBuildCard("hard", ch.builds.hard) +
        "</div>";
    }

    return (
      '<div class="char-section ' + ch.cssClass + ' reveal" id="char-' + ch.id + '">' +
      '<div class="char-section-header">' +
      '<span class="char-section-name">' + esc(ch.name) + "</span>" +
      '<span class="char-section-role">' + esc(ch.role) + "</span>" +
      "</div>" +
      tabs +
      '<div class="build-grid">' + cards + "</div>" +
      hardCard +
      "</div>"
    );
  }

  function renderEquipResult(result) {
    if (!result.members.length) {
      return '<p class="equip-empty">Select three party members for your lineup.</p>';
    }

    var summary = result.summary.length
      ? '<ul class="equip-summary">' +
        result.summary.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") +
        "</ul>"
      : "";

    var phaseLabel = result.phaseInfo ? result.phaseInfo.label : result.phase;
    var chInfo = result.chapterInfo;
    var headerMeta =
      '<p class="equip-meta">' +
      "<strong>Chapter " + result.chapter + "</strong>" +
      (chInfo ? " — " + esc(chInfo.title) : "") +
      ' &middot; <strong>' + esc(phaseLabel) + "</strong> build phase" +
      "</p>";

    var cards = result.members.map(function (m) {
      var weaponLink = m.weapon
        ? '<a href="weapons.html#' + esc(m.weapon.id) + '">' + esc(m.weapon.name) + "</a>"
        : "—";
      var locBtn = m.weapon
        ? ' <a class="weapon-loc-link" href="weapons.html#' + esc(m.weapon.id) + '">Where to get</a>'
        : "";
      var accessory = m.accessory
        ? '<div class="weapon-rec"><strong>Accessory:</strong> ' + esc(m.accessory) + "</div>"
        : "";
      var materia = m.materia.map(renderMateriaSlot).join("");
      return (
        '<div class="equip-member-card ' + m.cssClass + '">' +
        '<div class="equip-member-head">' +
        '<span class="equip-member-name">' + esc(m.name) + "</span>" +
        '<span class="equip-member-role">' + esc(m.role) + "</span>" +
        "</div>" +
        '<div class="weapon-rec"><strong>Weapon:</strong> ' + weaponLink + locBtn + "</div>" +
        accessory +
        '<div class="materia-slot-row">' + materia + "</div>" +
        '<div class="build-notes">' + esc(m.notes) + "</div>" +
        "</div>"
      );
    }).join("");

    return headerMeta + summary + '<div class="equip-result-grid">' + cards + "</div>";
  }

  function renderWeaponOptions(charId, chapter, selectedId) {
    var weapons = Equip.weaponsForCharacter(charId, chapter);
    if (!weapons.length) return '<span class="equip-na">No weapons yet</span>';
    return (
      '<select class="equip-weapon-select" data-weapon-char="' + charId + '">' +
      weapons.map(function (w) {
        var sel = w.id === selectedId ? " selected" : "";
        return (
          '<option value="' + w.id + '"' + sel + ">" + esc(w.name) + " (Ch." + w.chapter + ")</option>"
        );
      }).join("") +
      "</select>" +
      ' <a class="weapon-loc-link" href="weapons.html#' + esc(selectedId || weapons[0].id) + '">Location</a>'
    );
  }

  function renderEquipper(state) {
    var chapter = state.chapter;
    var unlocked = Equip.charactersUnlockedAt(chapter);

    var chapterOpts = DATA.chapters.map(function (c) {
      var sel = c.num === chapter ? " selected" : "";
      return '<option value="' + c.num + '"' + sel + ">Ch. " + c.num + " — " + esc(c.title) + "</option>";
    }).join("");

    var ngPlus = !!state.ngPlus;
    var partyLabel = ngPlus
      ? "Party Members <em>(3 max — any characters)</em>"
      : "Party Members <em>(3 max — Cloud required)</em>";

    var charChecks = unlocked.map(function (ch) {
      var on = state.party.indexOf(ch.id) !== -1;
      var storyLock = !ngPlus && ch.alwaysInParty;
      var locked = storyLock ? " disabled checked" : (on ? " checked" : "");
      var note = storyLock ? ' <span class="equip-lock">(required)</span>' : "";
      return (
        '<label class="equip-char-pick ' + ch.cssClass + '">' +
        '<input type="checkbox" data-party-char="' + ch.id + '"' + locked + ">" +
        "<span>" + esc(ch.name) + note + "</span>" +
        "</label>"
      );
    }).join("");

    var weaponRows = state.party
      .filter(function (id) { return unlocked.some(function (c) { return c.id === id; }); })
      .map(function (charId) {
        var ch = Equip.getCharacter(charId);
        var wid = state.weapons[charId] || "";
        var wopts = renderWeaponOptions(charId, chapter, wid);
        return (
          '<div class="equip-weapon-row ' + ch.cssClass + '">' +
          '<span class="equip-weapon-label">' + esc(ch.name) + "</span>" +
          wopts +
          "</div>"
        );
      }).join("");

    var equipResult = Equip.equipParty(state);

    return (
      '<section class="party-equip-panel reveal visible" id="party-equip">' +
      '<span class="section-tag">Smart Loadout</span>' +
      '<h2 class="section-title">Party Equiper</h2>' +
      '<div class="section-rule"></div>' +
      '<p class="equip-intro">Pick your chapter, active party, and weapons. The equipper assigns limited materia across the group — Magnify heals, ATB Boost, and Elemental pairs go to the best recipient for <em>this</em> lineup.</p>' +
      '<div class="equip-controls">' +
      '<div class="equip-control-block">' +
      '<label class="equip-label" for="equip-chapter">Current Chapter</label>' +
      '<select id="equip-chapter" class="equip-select">' + chapterOpts + "</select>" +
      "</div>" +
      '<div class="equip-control-block">' +
      '<label class="equip-ng-toggle">' +
      '<input type="checkbox" id="equip-ngplus"' + (ngPlus ? " checked" : "") + ">" +
      "<span><strong>New Game+</strong> — free party selection (Cloud optional)</span>" +
      "</label>" +
      "</div>" +
      '<div class="equip-control-block equip-party-picks">' +
      '<span class="equip-label">' + partyLabel + "</span>" +
      '<div class="equip-char-grid">' + charChecks + "</div>" +
      "</div>" +
      (weaponRows
        ? '<div class="equip-control-block"><span class="equip-label">Weapons per Character</span><div class="equip-weapon-grid">' + weaponRows + "</div></div>"
        : "") +
      "</div>" +
      '<div id="equip-result" class="equip-result">' + renderEquipResult(equipResult) + "</div>" +
      "</section>"
    );
  }

  function readStateFromDOM() {
    var state = loadState();
    var chSel = document.getElementById("equip-chapter");
    if (chSel) state.chapter = parseInt(chSel.value, 10) || 1;

    var ngEl = document.getElementById("equip-ngplus");
    state.ngPlus = ngEl ? ngEl.checked : false;

    var party = [];
    document.querySelectorAll("[data-party-char]").forEach(function (inp) {
      if (inp.checked) party.push(inp.dataset.partyChar);
    });
    if (!state.ngPlus && party.indexOf("cloud") === -1) party.unshift("cloud");
    state.party = party.filter(function (id, i, arr) {
      return arr.indexOf(id) === i;
    }).slice(0, DATA.meta.maxPartySize);

    state.weapons = state.weapons || {};
    document.querySelectorAll(".equip-weapon-select").forEach(function (sel) {
      state.weapons[sel.dataset.weaponChar] = sel.value;
    });

    return state;
  }

  function enforcePartyLimit() {
    var ngEl = document.getElementById("equip-ngplus");
    var ngPlus = ngEl ? ngEl.checked : false;
    var selector = ngPlus
      ? "[data-party-char]:checked"
      : "[data-party-char]:checked:not([data-party-char='cloud'])";
    var max = ngPlus ? DATA.meta.maxPartySize : DATA.meta.maxPartySize - 1;
    var checked = Array.prototype.slice.call(document.querySelectorAll(selector));
    if (checked.length > max) {
      checked[checked.length - 1].checked = false;
    }
  }

  function refreshEquipper() {
    var state = readStateFromDOM();
    saveState(state);

    var panel = document.getElementById("party-equip");
    if (!panel) return;
    var parent = panel.parentNode;
    var newHtml = renderEquipper(state);
    var wrap = document.createElement("div");
    wrap.innerHTML = newHtml;
    parent.replaceChild(wrap.firstChild, panel);
    bindEquipper();
  }

  function bindEquipper() {
    var chSel = document.getElementById("equip-chapter");
    if (chSel) chSel.addEventListener("change", refreshEquipper);

    var ngEl = document.getElementById("equip-ngplus");
    if (ngEl) ngEl.addEventListener("change", refreshEquipper);

    document.querySelectorAll("[data-party-char]").forEach(function (inp) {
      inp.addEventListener("change", function () {
        enforcePartyLimit();
        refreshEquipper();
      });
    });

    document.querySelectorAll(".equip-weapon-select").forEach(function (sel) {
      sel.addEventListener("change", refreshEquipper);
    });
  }

  function init() {
    var buildsRoot = document.getElementById("builds-root");
    if (buildsRoot) {
      buildsRoot.innerHTML = DATA.characters.map(renderCharacterSection).join("");
    }

    var equipMount = document.getElementById("party-equip-mount");
    if (equipMount) {
      equipMount.innerHTML = renderEquipper(loadState());
      bindEquipper();
    }

    if (typeof initReveal === "function") {
      initReveal();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();