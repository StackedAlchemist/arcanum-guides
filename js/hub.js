/* ============================================================
   THE ARCANUM - hub renderer
   Reads GAMES + GENRE_ORDER from games.js and builds the page.
   You should not need to edit this to add a game.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- helpers ---------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  var STATUS_LABEL = {
    live: "Live",
    building: "In the Forge",
    planned: "Planned"
  };

  function card(game) {
    var a = el("a", "game-card status-" + game.status);
    a.href = game.status === "live" ? game.href : "#";
    a.setAttribute("data-search", (game.title + " " + game.genres.join(" ") + " " + game.blurb).toLowerCase());
    if (game.accent) a.style.borderTopColor = game.accent;
    if (game.status !== "live") {
      a.setAttribute("aria-disabled", "true");
      a.addEventListener("click", function (e) { e.preventDefault(); });
    }

    var badge = el("span", "badge badge-" + game.status, STATUS_LABEL[game.status] || game.status);
    var title = el("h3", null, game.title);
    var genres = el("div", "genre-tags");
    game.genres.forEach(function (g) { genres.appendChild(el("span", "genre-tag", g)); });
    var blurb = el("p", null, game.blurb);
    var meta = el("div", "card-meta");
    meta.appendChild(el("span", "updated", game.updated || ""));
    meta.appendChild(el("span", "go", game.status === "live" ? "Open guide \u2192" : "Coming soon"));

    a.appendChild(badge);
    a.appendChild(title);
    a.appendChild(genres);
    a.appendChild(blurb);
    a.appendChild(meta);
    return a;
  }

  /* ---------- featured row ---------- */
  function renderFeatured() {
    var host = document.getElementById("featured-grid");
    var feat = GAMES.filter(function (g) { return g.featured; });
    if (!feat.length) {
      document.getElementById("featured-section").style.display = "none";
      return;
    }
    feat.forEach(function (g) { host.appendChild(card(g)); });
  }

  /* ---------- genre groups ---------- */
  function renderByGenre() {
    var host = document.getElementById("genre-sections");

    /* collect every genre present */
    var present = {};
    GAMES.forEach(function (g) {
      g.genres.forEach(function (gen) {
        (present[gen] = present[gen] || []).push(g);
      });
    });

    /* order: GENRE_ORDER first, then any leftovers alphabetically */
    var ordered = GENRE_ORDER.filter(function (g) { return present[g]; });
    var leftover = Object.keys(present).filter(function (g) {
      return GENRE_ORDER.indexOf(g) === -1;
    }).sort();
    var finalOrder = ordered.concat(leftover);

    finalOrder.forEach(function (genre) {
      var section = el("section", "genre-block");
      var head = el("div", "genre-head");
      head.appendChild(el("h2", null, genre));
      head.appendChild(el("span", "genre-count", present[genre].length + " guide" + (present[genre].length === 1 ? "" : "s")));
      section.appendChild(head);

      var grid = el("div", "game-grid");
      present[genre].forEach(function (g) { grid.appendChild(card(g)); });
      section.appendChild(grid);
      host.appendChild(section);
    });
  }

  /* ---------- top-line counts ---------- */
  function renderCounts() {
    var live = GAMES.filter(function (g) { return g.status === "live"; }).length;
    var total = GAMES.length;
    var c = document.getElementById("hub-counts");
    if (c) c.textContent = live + " live \u00b7 " + total + " in the collection";
  }

  /* ---------- search across all cards ---------- */
  function wireSearch() {
    var input = document.getElementById("hub-search");
    if (!input) return;
    var note = document.getElementById("search-note");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      var cards = document.querySelectorAll(".game-card");
      var shown = 0;
      cards.forEach(function (c) {
        var hit = c.getAttribute("data-search").indexOf(q) !== -1;
        c.classList.toggle("is-hidden", !hit);
        if (hit) shown++;
      });
      /* hide any genre block / featured block that has no visible cards */
      document.querySelectorAll(".genre-block, #featured-section").forEach(function (block) {
        var vis = block.querySelectorAll(".game-card:not(.is-hidden)").length;
        block.classList.toggle("is-hidden", vis === 0 && q !== "");
      });
      if (note) {
        note.textContent = q
          ? (shown ? shown + " guide" + (shown === 1 ? "" : "s") + " match \u201c" + input.value + "\u201d"
                   : "No guides match \u201c" + input.value + "\u201d yet. More are in the forge.")
          : "";
      }
    });
  }

  /* ---------- back to top ---------- */
  function wireToTop() {
    var t = document.querySelector(".totop");
    if (!t) return;
    window.addEventListener("scroll", function () {
      t.classList.toggle("show", window.scrollY > 600);
    });
    t.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- year ---------- */
  function setYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderCounts();
    renderFeatured();
    renderByGenre();
    wireSearch();
    wireToTop();
    setYear();
  });
})();
