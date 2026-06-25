/* FF7 Rebirth — Smart Party Equiper logic */
window.FF7R_PartyEquip = (function () {
  "use strict";

  var DATA = window.FF7R_DATA;
  if (!DATA) return null;

  function chapterToPhase(chapter) {
    var phases = DATA.phases;
    if (chapter <= phases.early.maxChapter) return "early";
    if (chapter <= phases.mid.maxChapter) return "mid";
    return "late";
  }

  function getChapter(chapterNum) {
    return DATA.chapters.find(function (c) { return c.num === chapterNum; }) || null;
  }

  function getCharacter(id) {
    return DATA.characters.find(function (c) { return c.id === id; });
  }

  function getWeapon(id) {
    return DATA.weapons[id] || null;
  }

  function charactersUnlockedAt(chapter) {
    return DATA.characters.filter(function (c) {
      return c.unlockChapter <= chapter;
    });
  }

  function weaponsForCharacter(charId, chapter) {
    var ch = getCharacter(charId);
    if (!ch) return [];
    return ch.weaponIds
      .map(function (wid) { return getWeapon(wid); })
      .filter(function (w) { return w && w.chapter <= chapter; });
  }

  function defaultWeaponForPhase(charId, phase) {
    var ch = getCharacter(charId);
    if (!ch || !ch.builds[phase]) return null;
    var build = ch.builds[phase];
    var wid = build.defaultWeapon;
    return getWeapon(wid);
  }

  function cloneMateriaList(list) {
    return (list || []).map(function (m) {
      return {
        name: m.name,
        type: m.type,
        pair: m.pair || null,
        limited: m.limited || null,
        assigned: false,
        note: null
      };
    });
  }

  function pickFirstAvailable(priorityList, party, used) {
    for (var i = 0; i < priorityList.length; i++) {
      var id = priorityList[i];
      if (party.indexOf(id) !== -1 && !used[id]) {
        used[id] = true;
        return id;
      }
    }
    return null;
  }

  function removeMateriaByLimited(slots, limitedKey) {
    for (var i = slots.length - 1; i >= 0; i--) {
      if (slots[i].limited === limitedKey) slots.splice(i, 1);
    }
  }

  function removeMateriaByNamePattern(slots, pattern) {
    for (var i = slots.length - 1; i >= 0; i--) {
      if (slots[i].name.toLowerCase().indexOf(pattern) !== -1) slots.splice(i, 1);
    }
  }

  function addMateria(slots, item) {
    slots.push({
      name: item.name,
      type: item.type,
      pair: item.pair || null,
      limited: item.limited || null,
      assigned: !!item.assigned,
      note: item.note || null
    });
  }

  function distributePartyMateria(party, phase, buildsByChar) {
    var usedLimited = { magnify: 0, elemental: 0, atbBoost: 0, warding: 0 };
    var roleClaims = { magnifyCure: null, raise: null };

    var magnifyHolder = pickFirstAvailable(DATA.rolePriority.magnifyCure, party, roleClaims);
    roleClaims.magnifyCure = magnifyHolder;

    var atbOrder = pickFirstAvailable(DATA.rolePriority.atbBoost, party, {});
    var atbSecond = null;
    var atbUsed = {};
    if (atbOrder) atbUsed[atbOrder] = true;
    atbSecond = pickFirstAvailable(DATA.rolePriority.atbBoost, party, atbUsed);

    var elementalOrder = [];
    DATA.rolePriority.elementalWeapon.forEach(function (id) {
      if (party.indexOf(id) !== -1) elementalOrder.push(id);
    });

    party.forEach(function (charId) {
      var slots = buildsByChar[charId].materia;

      if (charId === magnifyHolder) {
        removeMateriaByNamePattern(slots, "magnify");
        addMateria(slots, {
          name: "Magnify + Cure",
          type: "blue",
          pair: "Armor pair",
          limited: "magnify",
          assigned: true,
          note: "Party healer — frees Aerith for damage"
        });
        usedLimited.magnify++;
      } else {
        removeMateriaByNamePattern(slots, "magnify");
      }

      if (charId === "aerith" && magnifyHolder && magnifyHolder !== "aerith") {
        removeMateriaByNamePattern(slots, "cure");
        if (phase !== "early") {
          addMateria(slots, {
            name: "Fire / Ice / Comet",
            type: "red",
            assigned: true,
            note: "Damage focus — healing handled by " + getCharacter(magnifyHolder).name
          });
        }
      }

      if (charId === atbOrder) {
        removeMateriaByLimited(slots, "atbBoost");
        addMateria(slots, {
          name: "ATB Boost",
          type: "purple",
          limited: "atbBoost",
          assigned: true,
          note: "Primary ATB battery"
        });
        usedLimited.atbBoost++;
      } else if (charId === atbSecond && usedLimited.atbBoost < (DATA.limitedMateria.atbBoost.copies || 3)) {
        var hasAtb = slots.some(function (s) { return s.limited === "atbBoost"; });
        if (!hasAtb) {
          addMateria(slots, {
            name: "ATB Boost",
            type: "purple",
            limited: "atbBoost",
            assigned: true,
            note: "Secondary ATB extender"
          });
          usedLimited.atbBoost++;
        }
      }

      var elemIdx = elementalOrder.indexOf(charId);
      if (elemIdx !== -1 && elemIdx < (DATA.limitedMateria.elemental.copies || 3)) {
        var hasElem = slots.some(function (s) { return s.limited === "elemental"; });
        if (!hasElem) {
          addMateria(slots, {
            name: "Elemental + weakness",
            type: "blue",
            pair: "Weapon",
            limited: "elemental",
            assigned: true,
            note: "Adds element to physical attacks"
          });
          usedLimited.elemental++;
        }
      } else {
        removeMateriaByLimited(slots, "elemental");
      }
    });

    var raiseUsed = {};
    var raiseHolder = pickFirstAvailable(DATA.rolePriority.raise, party, raiseUsed);
    if (raiseHolder && phase !== "early") {
      var rSlots = buildsByChar[raiseHolder].materia;
      var hasRaise = rSlots.some(function (s) {
        return s.name.toLowerCase().indexOf("raise") !== -1;
      });
      if (!hasRaise) {
        addMateria(rSlots, {
          name: "Raise",
          type: "red",
          assigned: true,
          note: "Emergency revival duty"
        });
      }
    }

    return {
      magnifyHolder: magnifyHolder,
      atbPrimary: atbOrder,
      atbSecondary: atbSecond,
      usedLimited: usedLimited
    };
  }

  function equipParty(options) {
    var chapter = options.chapter || 1;
    var party = (options.party || []).slice();
    var weapons = options.weapons || {};
    var phase = chapterToPhase(chapter);

    if (party.indexOf("cloud") === -1) party.unshift("cloud");
    party = party.filter(function (id, idx, arr) {
      return arr.indexOf(id) === idx;
    }).slice(0, DATA.meta.maxPartySize);

    var unlocked = charactersUnlockedAt(chapter);
    party = party.filter(function (id) {
      return unlocked.some(function (c) { return c.id === id; });
    });

    var result = {
      chapter: chapter,
      chapterInfo: getChapter(chapter),
      phase: phase,
      phaseInfo: DATA.phases[phase],
      party: party,
      members: [],
      summary: []
    };

    var buildsByChar = {};

    party.forEach(function (charId) {
      var ch = getCharacter(charId);
      var build = ch.builds[phase] || ch.builds.early;
      var selectedWeaponId = weapons[charId];
      var available = weaponsForCharacter(charId, chapter);
      var weapon = null;

      if (selectedWeaponId) {
        weapon = available.find(function (w) { return w.id === selectedWeaponId; }) || null;
      }
      if (!weapon) {
        weapon = available.find(function (w) {
          return w.id === build.defaultWeapon;
        }) || available[available.length - 1] || defaultWeaponForPhase(charId, phase);
      }

      buildsByChar[charId] = {
        character: ch,
        build: build,
        weapon: weapon,
        materia: cloneMateriaList(build.materia)
      };
    });

    var distribution = distributePartyMateria(party, phase, buildsByChar);

    if (distribution.magnifyHolder) {
      result.summary.push(
        getCharacter(distribution.magnifyHolder).name + " carries Magnify + Cure for party-wide healing."
      );
    }
    if (distribution.atbPrimary) {
      result.summary.push(
        getCharacter(distribution.atbPrimary).name + " gets primary ATB Boost for burst windows."
      );
    }

    party.forEach(function (charId) {
      var entry = buildsByChar[charId];
      result.members.push({
        id: charId,
        name: entry.character.name,
        role: entry.character.role,
        cssClass: entry.character.cssClass,
        phaseLabel: entry.build.label,
        weapon: entry.weapon,
        materia: entry.materia,
        notes: entry.build.notes,
        accessory: entry.build.accessory || null
      });
    });

    result.distribution = distribution;
    return result;
  }

  return {
    chapterToPhase: chapterToPhase,
    getChapter: getChapter,
    getCharacter: getCharacter,
    getWeapon: getWeapon,
    charactersUnlockedAt: charactersUnlockedAt,
    weaponsForCharacter: weaponsForCharacter,
    equipParty: equipParty
  };
})();