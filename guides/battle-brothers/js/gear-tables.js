/* ============================================================
   THE MERCENARY CODEX - gear table renderer
   Renders sortable stat tables from window.BB_GEAR into any
   <div data-gear-table="<id>"></div> placeholder.
   Rows get class .wrow so the existing data-search filter works.
   Vanilla JS, no framework, no build step.
   ============================================================ */
(function () {
  "use strict";
  var G = window.BB_GEAR;
  if (!G) return;

  /* resolve "ranged.bows" -> array */
  function path(p) {
    return p.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, G);
  }

  /* cell formatters */
  var f = {
    dmg:  function (r) { return r.dmgMin + "&ndash;" + r.dmgMax; },
    pct:  function (v) { return (v == null) ? "&mdash;" : v + "%"; },
    fat:  function (v) { return (v == null) ? "&mdash;" : v; },
    worth:function (v) { return (v == null) ? "&mdash;" : v.toLocaleString(); },
    dlc:  function (v) { return v ? '<span class="dlc-tag">' + v + "</span>" : '<span class="base-tag">Base</span>'; },
    txt:  function (v) { return (v == null || v === "") ? "&mdash;" : v; }
  };

  /* column specs per table id. each col: {h:header, get:fn(row)->html, s:fn(row)->sortvalue, num:bool, w:cssWidth} */
  var rangedDmgCols = [
    { h: "Name",       get: function (r) { return r.name; }, s: function (r) { return r.name; } },
    { h: "Worth",      get: function (r) { return f.worth(r.worth); }, s: function (r) { return r.worth; }, num: true },
    { h: "Damage",     get: function (r) { return f.dmg(r); }, s: function (r) { return r.dmgMax; }, num: true },
    { h: "Ignores Armor", get: function (r) { return f.pct(r.ignoreArmor); }, s: function (r) { return r.ignoreArmor; }, num: true },
    { h: "Vs. Armor",  get: function (r) { return f.pct(r.vsArmor); }, s: function (r) { return r.vsArmor; }, num: true },
    { h: "Range",      get: function (r) { return r.range; }, s: function (r) { return r.range; }, num: true },
    { h: "Durability", get: function (r) { return f.txt(r.durability); }, s: function (r) { return r.durability; }, num: true },
    { h: "Max Fat.",   get: function (r) { return f.fat(r.fatigue); }, s: function (r) { return r.fatigue; }, num: true },
    { h: "Source",     get: function (r) { return f.dlc(r.dlc); }, s: function (r) { return r.dlc; } }
  ];

  var throwingCols = [
    { h: "Name",       get: function (r) { return r.name; }, s: function (r) { return r.name; } },
    { h: "Worth",      get: function (r) { return f.worth(r.worth); }, s: function (r) { return r.worth; }, num: true },
    { h: "Damage",     get: function (r) { return f.dmg(r); }, s: function (r) { return r.dmgMax; }, num: true },
    { h: "Ignores Armor", get: function (r) { return f.pct(r.ignoreArmor); }, s: function (r) { return r.ignoreArmor; }, num: true },
    { h: "Vs. Armor",  get: function (r) { return f.pct(r.vsArmor); }, s: function (r) { return r.vsArmor; }, num: true },
    { h: "Range",      get: function (r) { return r.range; }, s: function (r) { return r.range; }, num: true },
    { h: "Hit",        get: function (r) { return f.txt(r.hit); }, s: function (r) { return r.hit; } },
    { h: "Max Fat.",   get: function (r) { return f.fat(r.fatigue); }, s: function (r) { return r.fatigue; }, num: true },
    { h: "Source",     get: function (r) { return f.dlc(r.dlc); }, s: function (r) { return r.dlc; } }
  ];

  var throwableCols = [
    { h: "Name",   get: function (r) { return r.name; }, s: function (r) { return r.name; } },
    { h: "Worth",  get: function (r) { return f.worth(r.worth); }, s: function (r) { return r.worth; }, num: true },
    { h: "Range",  get: function (r) { return r.range; }, s: function (r) { return r.range; }, num: true },
    { h: "Max Fat.", get: function (r) { return f.fat(r.fatigue); }, s: function (r) { return r.fatigue; }, num: true },
    { h: "Effect", get: function (r) { return f.txt(r.usage); }, s: function (r) { return r.usage; } },
    { h: "Source", get: function (r) { return f.dlc(r.dlc); }, s: function (r) { return r.dlc; } }
  ];

  var rangedSkillCols = [
    { h: "Attack",   get: function (r) { return r.skill; }, s: function (r) { return r.skill; } },
    { h: "AP",       get: function (r) { return r.ap; }, s: function (r) { return r.ap; }, num: true },
    { h: "Fatigue",  get: function (r) { return r.fatigue; }, s: function (r) { return r.fatigue; }, num: true },
    { h: "Base Hit", get: function (r) { return r.hitMod; }, s: function (r) { return r.hitMod; } },
    { h: "Falloff",  get: function (r) { return r.perTile; }, s: function (r) { return r.perTile; } },
    { h: "Direct Dmg", get: function (r) { return r.direct; }, s: function (r) { return r.direct; } },
    { h: "Notes",    get: function (r) { return r.note; }, s: function (r) { return r.note; } }
  ];

  /* --- melee column specs --- */
  var c_name   = { h: "Name", get: function (r) { return r.name; }, s: function (r) { return r.name; } };
  var c_worth  = { h: "Worth", get: function (r) { return f.worth(r.worth); }, s: function (r) { return r.worth; }, num: true };
  var c_dmg    = { h: "Damage", get: function (r) { return f.dmg(r); }, s: function (r) { return r.dmgMax; }, num: true };
  var c_ign    = { h: "Ignores Armor", get: function (r) { return f.pct(r.ignoreArmor); }, s: function (r) { return r.ignoreArmor; }, num: true };
  var c_vs     = { h: "Vs. Armor", get: function (r) { return f.pct(r.vsArmor); }, s: function (r) { return r.vsArmor; }, num: true };
  var c_dur    = { h: "Durability", get: function (r) { return f.txt(r.durability); }, s: function (r) { return r.durability; }, num: true };
  var c_fat    = { h: "Max Fat.", get: function (r) { return f.fat(r.fatigue); }, s: function (r) { return r.fatigue; }, num: true };
  var c_src    = { h: "Source", get: function (r) { return f.dlc(r.dlc); }, s: function (r) { return r.dlc; } };
  var c_head   = { h: "Head", get: function (r) { return f.txt(r.headChance); }, s: function (r) { return r.headChance; } };
  var c_shield = { h: "Shield Dmg", get: function (r) { return f.txt(r.shieldDmg); }, s: function (r) { return r.shieldDmg || 0; }, num: true };

  var meleeCols   = [c_name, c_worth, c_dmg, c_ign, c_vs, c_dur, c_fat, c_src];
  var shieldDmgCols = [c_name, c_worth, c_dmg, c_ign, c_vs, c_shield, c_dur, c_fat, c_src];
  var axe1hCols   = shieldDmgCols;
  var headCols    = [c_name, c_worth, c_dmg, c_ign, c_vs, c_head, c_dur, c_fat, c_src];
  var melee2hCols = [c_name, c_worth, c_dmg, c_ign, c_vs, c_head, c_shield, c_dur, c_fat, c_src];

  /* --- armor / shield column specs --- */
  function ratioCell(valKey) {
    return function (r) { return r.fatigue ? (r[valKey] / Math.abs(r.fatigue)).toFixed(1) : "&mdash;"; };
  }
  var bodyArmorCols = [
    c_name,
    { h: "Armor", get: function (r) { return r.armor; }, s: function (r) { return r.armor; }, num: true },
    c_fat,
    { h: "Armor / Fat.", get: ratioCell("armor"), s: function (r) { return r.fatigue ? r.armor / Math.abs(r.fatigue) : 999; }, num: true },
    c_worth, c_src,
    { h: "Worn by", get: function (r) { return f.txt(r.notes); }, s: function (r) { return r.notes; } }
  ];
  var headArmorCols = [
    c_name,
    { h: "Armor", get: function (r) { return r.armor; }, s: function (r) { return r.armor; }, num: true },
    c_fat,
    { h: "Armor / Fat.", get: ratioCell("armor"), s: function (r) { return r.fatigue ? r.armor / Math.abs(r.fatigue) : 999; }, num: true },
    { h: "Vision", get: function (r) { return r.vision ? r.vision : "0"; }, s: function (r) { return r.vision || 0; }, num: true },
    c_worth, c_src
  ];
  var shieldCols = [
    c_name, c_dur, c_fat,
    { h: "Melee Def", get: function (r) { return "+" + r.meleeDef; }, s: function (r) { return r.meleeDef; }, num: true },
    { h: "Ranged Def", get: function (r) { return "+" + r.rangedDef; }, s: function (r) { return r.rangedDef; }, num: true },
    c_worth, c_src,
    { h: "Notes", get: function (r) { return f.txt(r.notes); }, s: function (r) { return r.notes; } }
  ];

  /* --- recruits (hiring) column spec --- */
  var TIER_CLASS = { S: "tier-S", A: "tier-A", B: "tier-B", C: "tier-C", Filler: "tier-D", Avoid: "tier-D" };
  var TIER_RANK  = { S: 6, A: 5, B: 4, C: 3, Filler: 2, Avoid: 1 };
  var recruitsCols = [
    c_name,
    { h: "Tier", get: function (r) { return '<span class="tier ' + (TIER_CLASS[r.tier] || "") + '">' + r.tier + "</span>"; }, s: function (r) { return TIER_RANK[r.tier] || 0; }, num: true },
    { h: "Role",   get: function (r) { return f.txt(r.role); }, s: function (r) { return r.role; } },
    { h: "Cost",   get: function (r) { return f.txt(r.costBand); }, s: function (r) { return r.costBand; } },
    { h: "Phase",  get: function (r) { return f.txt(r.phase); }, s: function (r) { return r.phase; } },
    { h: "Tryout", get: function (r) { return f.txt(r.tryout); }, s: function (r) { return r.tryout; } },
    { h: "Star bias", get: function (r) { return f.txt(r.starBias); }, s: function (r) { return r.starBias; } },
    { h: "Notes",  get: function (r) { return f.txt(r.notes); }, s: function (r) { return r.notes; } }
  ];

  /* --- background attribute ranges --- */
  function statCol(h, key) {
    return { h: h, get: function (r) { return r[key][0] + "&ndash;" + r[key][1]; }, s: function (r) { return r[key][1]; }, num: true };
  }
  var bgRangeCols = [
    c_name,
    { h: "Lvl",  get: function (r) { return r.lvl; }, s: function (r) { return parseInt(r.lvl, 10); }, num: true },
    { h: "Wage", get: function (r) { return r.wage; }, s: function (r) { return r.wage; }, num: true },
    statCol("HP", "hp"), statCol("M.Skill", "msk"), statCol("R.Skill", "rsk"),
    statCol("M.Def", "mdef"), statCol("R.Def", "rdef"), statCol("Fatigue", "fat"),
    statCol("Resolve", "res"), statCol("Init", "init"),
    { h: "Notes", get: function (r) { return f.txt(r.note); }, s: function (r) { return r.note; } }
  ];

  var CONFIG = {
    recruits:    { data: "recruits",          cols: recruitsCols },
    "bg-ranges": { data: "bgRanges",          cols: bgRangeCols },
    bows:        { data: "ranged.bows",       cols: rangedDmgCols },
    crossbows:   { data: "ranged.crossbows",  cols: rangedDmgCols },
    firearms:    { data: "ranged.firearms",   cols: rangedDmgCols },
    throwing:    { data: "ranged.throwing",   cols: throwingCols },
    throwable:   { data: "ranged.throwable",  cols: throwableCols },
    "ranged-skills": { data: "rangedSkills",  cols: rangedSkillCols, nosort: true },
    daggers:     { data: "melee.daggers",     cols: meleeCols },
    swords1h:    { data: "melee.swords1h",    cols: meleeCols },
    swords2h:    { data: "melee.swords2h",    cols: melee2hCols },
    axes1h:      { data: "melee.axes1h",      cols: axe1hCols },
    axes2h:      { data: "melee.axes2h",      cols: melee2hCols },
    maces1h:     { data: "melee.maces1h",     cols: meleeCols },
    maces2h:     { data: "melee.maces2h",     cols: melee2hCols },
    spears:      { data: "melee.spears",      cols: meleeCols },
    spears2h:    { data: "melee.spears2h",    cols: headCols },
    flails1h:    { data: "melee.flails1h",    cols: headCols },
    flails2h:    { data: "melee.flails2h",    cols: headCols },
    cleavers1h:  { data: "melee.cleavers1h",  cols: meleeCols },
    cleavers2h:  { data: "melee.cleavers2h",  cols: shieldDmgCols },
    hammers1h:   { data: "melee.hammers1h",   cols: shieldDmgCols },
    hammers2h:   { data: "melee.hammers2h",   cols: melee2hCols },
    polearms:    { data: "melee.polearms",    cols: melee2hCols },
    "armor-body":{ data: "armor.body",        cols: bodyArmorCols },
    "armor-head":{ data: "armor.head",        cols: headArmorCols },
    shields:     { data: "shields",           cols: shieldCols }
  };

  function buildTable(rows, cfg) {
    var wrap = document.createElement("div");
    wrap.className = "table-wrap";
    var t = document.createElement("table");

    var thead = document.createElement("thead");
    var htr = document.createElement("tr");
    cfg.cols.forEach(function (c, i) {
      var th = document.createElement("th");
      th.innerHTML = c.h;
      if (!cfg.nosort) {
        th.className = "sortable";
        th.tabIndex = 0;
        th.setAttribute("role", "button");
        th.dataset.col = i;
      }
      htr.appendChild(th);
    });
    thead.appendChild(htr);
    t.appendChild(thead);

    var tbody = document.createElement("tbody");
    var state = { col: -1, dir: 1 };

    function render(data) {
      tbody.innerHTML = "";
      data.forEach(function (r) {
        var tr = document.createElement("tr");
        tr.className = "wrow";
        cfg.cols.forEach(function (c) {
          var td = document.createElement("td");
          td.innerHTML = c.get(r);
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    }
    render(rows);
    t.appendChild(tbody);

    if (!cfg.nosort) {
      htr.querySelectorAll("th").forEach(function (th) {
        function doSort() {
          var i = +th.dataset.col, c = cfg.cols[i];
          state.dir = (state.col === i) ? -state.dir : 1;
          state.col = i;
          var sorted = rows.slice().sort(function (a, b) {
            var va = c.s(a), vb = c.s(b);
            if (c.num) { va = +va || 0; vb = +vb || 0; return (va - vb) * state.dir; }
            return String(va).localeCompare(String(vb)) * state.dir;
          });
          render(sorted);
          htr.querySelectorAll("th").forEach(function (h) { h.removeAttribute("data-sortdir"); });
          th.setAttribute("data-sortdir", state.dir > 0 ? "asc" : "desc");
        }
        th.addEventListener("click", doSort);
        th.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doSort(); } });
      });
    }

    wrap.appendChild(t);
    return wrap;
  }

  document.querySelectorAll("[data-gear-table]").forEach(function (el) {
    var id = el.getAttribute("data-gear-table");
    var cfg = CONFIG[id];
    if (!cfg) { el.innerHTML = '<p class="search-note">Unknown table: ' + id + "</p>"; return; }
    var rows = path(cfg.data);
    if (!rows || !rows.length) {
      el.innerHTML = '<p class="search-note" style="opacity:.7;">&#9881; ' + id + " &mdash; data pending.</p>";
      return;
    }
    el.appendChild(buildTable(rows, cfg));
  });
})();
