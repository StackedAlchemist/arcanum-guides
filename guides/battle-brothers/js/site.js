/* ============================================================
   THE MERCENARY CODEX - shared behavior
   No frameworks. Vanilla JS, runs on every page.
   ============================================================ */

(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  /* ---- Mark active nav link by filename ---- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    var target = a.getAttribute("href").split("/").pop();
    if (target === here) a.classList.add("active");
  });

  /* ---- Back to top button ---- */
  var totop = document.querySelector(".totop");
  if (totop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) totop.classList.add("show");
      else totop.classList.remove("show");
    });
    totop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Live filter for any element with data-search ----
     Add class "searchbar" + data-target="<css selector of rows>"
     Rows that don't match the typed text get .is-hidden       */
  var search = document.querySelector("[data-search]");
  if (search) {
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
    applyFilter();
  }
})();
