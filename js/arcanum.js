/* ============================================================
   THE ARCANUM — arcanum.js
   Hub renderer (featured + genre groups + counts + search from
   games.js) plus site-wide interactions (nav, dropdown, reveal,
   back-to-top, "last forged" stamps). Guards every block so it
   runs safely on pages without a hub.
   ============================================================ */
(function () {
  "use strict";

  /* glyphs per genre — alchemical / cyber unicode, no emoji */
  var GI = {
    RPG: "⚔", JRPG: "✧", ARPG: "☠", Strategy: "♟", Tactical: "⊞",
    RTS: "▣", Simulation: "⚙", Building: "▤", Automation: "⛭",
    Management: "▦", Action: "✸", Shooter: "⌖", Survival: "❂",
    Roguelike: "☥", "Open World": "◍", Card: "♠", MMO: "☉", Sports: "◎"
  };
  function gi(g) { return GI[g] || "◈"; }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function esc(s) { return String(s == null ? "" : s); }

  /* ---------- shared interactions (every page) ---------- */
  function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12 });
    els.forEach(function (e) { io.observe(e); });
  }
  function navToggle() {
    var btn = document.querySelector(".nav-toggle"), nav = document.querySelector(".nav-links");
    if (btn && nav) btn.addEventListener("click", function () { nav.classList.toggle("open"); });
    /* mobile dropdown expand */
    document.querySelectorAll(".has-dd > .navbtn").forEach(function (b) {
      b.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width:860px)").matches) { e.preventDefault(); b.parentNode.classList.toggle("open"); }
      });
    });
  }
  function toTop() {
    var t = document.querySelector(".totop"); if (!t) return;
    addEventListener("scroll", function () { t.classList.toggle("show", scrollY > 520); }, { passive: true });
    t.addEventListener("click", function () { scrollTo({ top: 0, behavior: "smooth" }); });
  }
  function stamps() {
    var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
    var d = new Date(document.lastModified);
    var txt = isNaN(d) ? "" : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    document.querySelectorAll("[data-last-forged]").forEach(function (el) { el.textContent = txt; });
  }
  function tocSpy() {
    var links = document.querySelectorAll(".toc a[href^='#']"); if (!links.length) return;
    var map = {};
    links.forEach(function (a) { var el = document.getElementById(a.getAttribute("href").slice(1)); if (el) map[el.id] = a; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { links.forEach(function (l) { l.classList.remove("active"); }); if (map[e.target.id]) map[e.target.id].classList.add("active"); } });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
  }
  /* lightning crackle on hover of key elements */
  function hoverArcs() {
    if (!window.ArcanumStrike) return;
    document.querySelectorAll(".card, .genre-chip, .ubadge").forEach(function (el) {
      var lock = 0;
      el.addEventListener("mouseenter", function () {
        var n = performance.now(); if (n - lock > 600) { lock = n; window.ArcanumStrike(0.22); }
      });
    });
  }

  /* ---------- hub rendering (homepage only) ---------- */
  function card(g, big) {
    var st = g.status || "planned";
    var badge = st === "live" ? '<span class="badge live">Live</span>'
      : st === "building" ? '<span class="badge building">In the Forge</span>'
      : '<span class="badge planned">Planned</span>';
    var tags = (g.genres || []).map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("");
    var accent = g.accent ? ' style="--accent:' + g.accent + '"' : "";
    var clickable = st !== "planned";
    var open = '<a class="card' + (big ? " big" : "") + (clickable ? "" : " dim") + '"' + accent +
      (clickable ? ' href="' + esc(g.href) + '"' : ' aria-disabled="true"') +
      ' data-title="' + esc(g.title).toLowerCase() + '" data-genres="' + esc((g.genres || []).join(" ")).toLowerCase() + '" data-blurb="' + esc(g.blurb).toLowerCase() + '">';
    return open +
      '<div class="ct"><h3>' + esc(g.title) + "</h3>" + badge + "</div>" +
      '<p class="blurb">' + esc(g.blurb) + "</p>" +
      '<div class="foot"><div class="tags">' + tags + "</div>" +
      '<span class="updated">' + (clickable ? '<span class="go">Enter &rarr;</span>' : '<b>' + esc(g.updated) + "</b>") + "</span></div>" +
      "</a>";
  }

  function renderHub() {
    var feat = document.getElementById("featured-grid");
    if (!feat || typeof GAMES === "undefined") return;

    /* counts */
    var live = GAMES.filter(function (g) { return g.status === "live"; }).length;
    var building = GAMES.filter(function (g) { return g.status === "building"; }).length;
    var total = GAMES.length;
    var cEl = document.getElementById("counts");
    if (cEl) cEl.innerHTML =
      '<span class="pip"><b>' + live + "</b> Live</span>" +
      (building ? '<span class="pip"><b>' + building + "</b> In the Forge</span>" : "") +
      '<span class="pip"><b>' + total + "</b> Tracked</span>";

    /* featured */
    feat.innerHTML = GAMES.filter(function (g) { return g.featured; }).map(function (g) { return card(g, true); }).join("");

    /* genre order: listed first, then any extras alphabetically */
    var present = {};
    GAMES.forEach(function (g) { (g.genres || []).forEach(function (x) { present[x] = true; }); });
    var order = (typeof GENRE_ORDER !== "undefined" ? GENRE_ORDER : []).filter(function (x) { return present[x]; });
    Object.keys(present).sort().forEach(function (x) { if (order.indexOf(x) < 0) order.push(x); });

    /* genre rail chips */
    var rail = document.getElementById("genre-rail");
    if (rail) rail.innerHTML = order.map(function (x) {
      return '<button class="genre-chip" data-jump="g-' + slug(x) + '"><span class="gi">' + gi(x) + "</span>" + esc(x) + "</button>";
    }).join("");

    /* genre blocks */
    var host = document.getElementById("genre-sections");
    if (host) host.innerHTML = order.map(function (x) {
      var games = GAMES.filter(function (g) { return (g.genres || []).indexOf(x) >= 0; });
      return '<div class="genre-block" id="g-' + slug(x) + '" data-genre="' + esc(x).toLowerCase() + '">' +
        '<h2><span class="gi">' + gi(x) + "</span>" + esc(x) + '<span class="ct">' + games.length + " title" + (games.length === 1 ? "" : "s") + "</span></h2>" +
        '<div class="grid">' + games.map(function (g) { return card(g, false); }).join("") + "</div></div>";
    }).join("");

    /* nav dropdown */
    var dd = document.getElementById("dd-games");
    if (dd) dd.innerHTML = '<div class="dd-head">By genre</div>' + order.map(function (x) {
      var n = GAMES.filter(function (g) { return (g.genres || []).indexOf(x) >= 0; }).length;
      return '<a href="#g-' + slug(x) + '">' + esc(x) + '<span class="n">' + n + "</span></a>";
    }).join("");

    /* rail jump */
    document.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        var el = document.getElementById(b.getAttribute("data-jump"));
        if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); if (window.ArcanumStrike) window.ArcanumStrike(0.4); }
      });
    });

    search();
    reveal();
    hoverArcs();
  }

  /* live search filter across all cards */
  function search() {
    var input = document.getElementById("search"); if (!input) return;
    var note = document.getElementById("search-note");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      document.querySelectorAll(".grid .card, .featured-grid .card").forEach(function (cd) {
        var hit = !q || cd.dataset.title.indexOf(q) >= 0 || cd.dataset.genres.indexOf(q) >= 0 || cd.dataset.blurb.indexOf(q) >= 0;
        cd.style.display = hit ? "" : "none"; if (hit) shown++;
      });
      /* hide empty genre blocks + featured when searching */
      document.querySelectorAll(".genre-block").forEach(function (b) {
        var any = b.querySelectorAll(".card:not([style*='none'])").length > 0;
        b.style.display = any ? "" : "none";
      });
      var fs = document.getElementById("featured-section");
      if (fs) fs.style.display = q ? "none" : "";
      if (note) note.textContent = q ? (shown + " result" + (shown === 1 ? "" : "s") + " for “" + q + "”") : "";
    });
  }

  function boot() { renderHub(); reveal(); navToggle(); toTop(); stamps(); tocSpy(); hoverArcs(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
