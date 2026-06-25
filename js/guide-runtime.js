/* ============================================================
   THE ARCANUM — shared guide runtime
   Reads canvas effect tokens from css/themes/<game>.css:
     --fx-type: none | motes | stars
     --fx-mote-a, --fx-mote-b (RGB triplets)
     --fx-mote-b-chance (0–1)
     --fx-star-bright, --fx-star-glow (RGB)
     --fx-density (multiplier, default 1)
   Also handles reveal-on-scroll, mobile nav, back-to-top.
   ============================================================ */

(function () {
  "use strict";

  function cssVar(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback || "";
  }

  function cssNum(name, fallback) {
    var n = parseFloat(cssVar(name));
    return isNaN(n) ? fallback : n;
  }

  /* ---- ambient canvas effects ---- */
  function initEffects() {
    var type = cssVar("--fx-type", "none");
    if (type === "none" || type === "lifestream") return;

    if (type === "motes") initMotes();
    else if (type === "stars") initStars();
  }

  function initMotes() {
    var c = document.getElementById("motes");
    if (!c || !c.getContext) return;
    var ctx = c.getContext("2d");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var density = cssNum("--fx-density", 1);
    var rgbA = cssVar("--fx-mote-a", "200,200,200");
    var rgbB = cssVar("--fx-mote-b", rgbA);
    var bChance = cssNum("--fx-mote-b-chance", 0.35);
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, raf = null, last = 0, P = [];

    function rnd(a, b) { return a + Math.random() * (b - a); }

    function resize() {
      W = innerWidth;
      H = innerHeight;
      c.width = W * DPR;
      c.height = H * DPR;
      c.style.width = W + "px";
      c.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function spr(rgb) {
      var s = document.createElement("canvas");
      s.width = s.height = 40;
      var x = s.getContext("2d");
      var g = x.createRadialGradient(20, 20, 0, 20, 20, 20);
      g.addColorStop(0, "rgba(" + rgb + ",1)");
      g.addColorStop(0.4, "rgba(" + rgb + ",.5)");
      g.addColorStop(1, "rgba(" + rgb + ",0)");
      x.fillStyle = g;
      x.beginPath();
      x.arc(20, 20, 20, 0, 7);
      x.fill();
      return s;
    }

    var spriteA = spr(rgbA);
    var spriteB = spr(rgbB);

    function mk(init) {
      return {
        x: rnd(0, W),
        y: init ? rnd(0, H) : H + 10,
        r: rnd(1, 2.8),
        vy: rnd(6, 18),
        sway: rnd(0.3, 0.9),
        amp: rnd(8, 24),
        ph: rnd(0, 6.28),
        alt: Math.random() < bChance
      };
    }

    function init() {
      resize();
      var n = Math.round(Math.min(52, (W * H) / 32000) * density);
      P = [];
      for (var i = 0; i < n; i++) P.push(mk(true));
    }

    function frame(t) {
      var dt = last ? Math.min((t - last) / 1000, 0.05) : 0.016;
      last = t;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      for (var i = 0; i < P.length; i++) {
        var p = P[i];
        p.y -= p.vy * dt;
        p.ph += p.sway * dt;
        var x = p.x + Math.sin(p.ph) * p.amp;
        if (p.y < -12) { P[i] = mk(false); continue; }
        var a = 0.24 * Math.sin(Math.min((H - p.y) / H, 1) * Math.PI) + 0.05;
        var sz = p.r * 7;
        ctx.globalAlpha = a < 0 ? 0 : a;
        ctx.drawImage(p.alt ? spriteB : spriteA, x - sz / 2, p.y - sz / 2, sz, sz);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(frame);
    }

    function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    if (reduce) {
      resize();
      ctx.globalCompositeOperation = "lighter";
      for (var i = 0; i < 26; i++) {
        var sz = rnd(5, 12);
        ctx.globalAlpha = rnd(0.05, 0.14);
        ctx.drawImage(spriteA, rnd(0, W), rnd(0, H), sz, sz);
      }
      ctx.globalAlpha = 1;
    } else {
      init();
      start();
    }

    var rz;
    addEventListener("resize", function () {
      clearTimeout(rz);
      rz = setTimeout(function () { if (!reduce) init(); }, 200);
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else if (!reduce) start();
    });
  }

  function initStars() {
    var c = document.getElementById("stars");
    if (!c || !c.getContext) return;
    var ctx = c.getContext("2d");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var density = cssNum("--fx-density", 1);
    var bright = cssVar("--fx-star-bright", "154,240,246");
    var glow = cssVar("--fx-star-glow", "90,214,224");
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, raf = null, last = 0, S = [];

    function rnd(a, b) { return a + Math.random() * (b - a); }

    function resize() {
      W = innerWidth;
      H = innerHeight;
      c.width = W * DPR;
      c.height = H * DPR;
      c.style.width = W + "px";
      c.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function mk() {
      return {
        x: rnd(0, W),
        y: rnd(0, H),
        r: rnd(0.4, 1.6),
        vy: rnd(2, 10),
        tw: rnd(0.5, 1.6),
        ph: rnd(0, 6.28),
        bright: Math.random() < 0.12
      };
    }

    function init() {
      resize();
      var n = Math.round(Math.min(220, (W * H) / 8000) * density);
      S = [];
      for (var i = 0; i < n; i++) S.push(mk());
    }

    function frame(t) {
      var dt = last ? Math.min((t - last) / 1000, 0.05) : 0.016;
      last = t;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < S.length; i++) {
        var s = S[i];
        s.y += s.vy * dt;
        s.ph += s.tw * dt;
        if (s.y > H + 2) { s.y = -2; s.x = rnd(0, W); }
        var a = 0.35 + 0.45 * Math.sin(s.ph);
        if (a < 0) a = 0;
        if (s.bright) {
          ctx.fillStyle = "rgba(" + bright + "," + (a * 0.9) + ")";
          ctx.shadowColor = "rgba(" + glow + ",0.8)";
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = "rgba(210,225,245," + (a * 0.7) + ")";
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 6.28);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(frame);
    }

    function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    function staticField() {
      init();
      for (var i = 0; i < S.length; i++) {
        var s = S[i];
        ctx.fillStyle = "rgba(210,225,245,0.5)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 6.28);
        ctx.fill();
      }
    }

    if (reduce) { staticField(); }
    else { init(); start(); }

    var rz;
    addEventListener("resize", function () {
      clearTimeout(rz);
      rz = setTimeout(function () { if (reduce) staticField(); else init(); }, 200);
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else if (!reduce) start();
    });
  }

  /* ---- reveal on scroll ---- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---- mobile nav ---- */
  function initNav() {
    var btn = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav");
    if (btn && nav) {
      btn.addEventListener("click", function () { nav.classList.toggle("open"); });
    }
  }

  /* ---- back to top ---- */
  function initTotop() {
    var top = document.querySelector(".totop");
    if (!top) return;
    window.addEventListener("scroll", function () {
      top.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function boot() {
    initEffects();
    initReveal();
    initNav();
    initTotop();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.GuideRuntime = { initEffects: initEffects, initReveal: initReveal, initNav: initNav, initTotop: initTotop };
})();