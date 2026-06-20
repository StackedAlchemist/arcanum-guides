/* ============================================================
   THE ARCANUM - Stellaris guide - shared site JS
   Starfield ambient, reveal-on-scroll, mobile nav, back-to-top.
   ============================================================ */

/* --- starfield: twinkling drifting stars + a few bright ones --- */
(function () {
  var c = document.getElementById("stars");
  if (!c || !c.getContext) return;
  var ctx = c.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DPR = Math.min(window.devicePixelRatio || 1, 2), W = 0, H = 0, raf = null, last = 0, S = [];
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function resize() { W = innerWidth; H = innerHeight; c.width = W * DPR; c.height = H * DPR; c.style.width = W + "px"; c.style.height = H + "px"; ctx.setTransform(DPR, 0, 0, DPR, 0, 0); }
  function mk() { return { x: rnd(0, W), y: rnd(0, H), r: rnd(0.4, 1.6), vy: rnd(2, 10), tw: rnd(0.5, 1.6), ph: rnd(0, 6.28), bright: Math.random() < 0.12 }; }
  function init() { resize(); var n = Math.round(Math.min(220, (W * H) / 8000)); S = []; for (var i = 0; i < n; i++) S.push(mk()); }
  function frame(t) {
    var dt = last ? Math.min((t - last) / 1000, .05) : .016; last = t; ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < S.length; i++) { var s = S[i]; s.y += s.vy * dt; s.ph += s.tw * dt; if (s.y > H + 2) { s.y = -2; s.x = rnd(0, W); }
      var a = 0.35 + 0.45 * Math.sin(s.ph); if (a < 0) a = 0;
      if (s.bright) { ctx.fillStyle = "rgba(154,240,246," + (a * 0.9) + ")"; ctx.shadowColor = "rgba(90,214,224,0.8)"; ctx.shadowBlur = 6; }
      else { ctx.fillStyle = "rgba(210,225,245," + (a * 0.7) + ")"; ctx.shadowBlur = 0; }
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.28); ctx.fill(); }
    ctx.shadowBlur = 0; raf = requestAnimationFrame(frame);
  }
  function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
  function staticField() { init(); for (var i = 0; i < S.length; i++) { var s = S[i]; ctx.fillStyle = "rgba(210,225,245,0.5)"; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.28); ctx.fill(); } }
  if (reduce) { staticField(); } else { init(); start(); }
  var rz; addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(function () { if (reduce) staticField(); else init(); }, 200); });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else if (!reduce) start(); });
})();

/* --- reveal on scroll --- */
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("visible"); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }); }, { threshold: .1 });
  els.forEach(function (e) { io.observe(e); });
})();

/* --- mobile nav toggle --- */
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (btn && nav) btn.addEventListener("click", function () { nav.classList.toggle("open"); });
})();

/* --- back to top --- */
(function () {
  var top = document.querySelector(".totop");
  if (!top) return;
  window.addEventListener("scroll", function () { top.classList.toggle("show", window.scrollY > 500); }, { passive: true });
  top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
})();
