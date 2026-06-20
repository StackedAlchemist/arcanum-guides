/* ============================================================
   THE ARCANUM - Final Fantasy VI guide - shared site JS
   Ambient magicite motes, reveal-on-scroll, mobile nav, top.
   ============================================================ */

/* --- ambient: drifting magicite motes (violet + gold) --- */
(function () {
  var c = document.getElementById("motes");
  if (!c || !c.getContext) return;
  var ctx = c.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DPR = Math.min(window.devicePixelRatio || 1, 2), W = 0, H = 0, raf = null, last = 0, P = [];
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function resize() { W = innerWidth; H = innerHeight; c.width = W * DPR; c.height = H * DPR; c.style.width = W + "px"; c.style.height = H + "px"; ctx.setTransform(DPR, 0, 0, DPR, 0, 0); }
  function spr(rgb) { var s = document.createElement("canvas"); s.width = s.height = 40; var x = s.getContext("2d"); var g = x.createRadialGradient(20, 20, 0, 20, 20, 20); g.addColorStop(0, "rgba(" + rgb + ",1)"); g.addColorStop(.4, "rgba(" + rgb + ",.5)"); g.addColorStop(1, "rgba(" + rgb + ",0)"); x.fillStyle = g; x.beginPath(); x.arc(20, 20, 20, 0, 7); x.fill(); return s; }
  var violet = spr("180,156,240"), gold = spr("216,182,90");
  function mk(init) { return { x: rnd(0, W), y: init ? rnd(0, H) : H + 10, r: rnd(1, 2.6), vy: rnd(6, 16), sway: rnd(.3, .9), amp: rnd(8, 22), ph: rnd(0, 6.28), gold: Math.random() < 0.25 }; }
  function init() { resize(); var n = Math.round(Math.min(48, (W * H) / 34000)); P = []; for (var i = 0; i < n; i++) P.push(mk(true)); }
  function frame(t) {
    var dt = last ? Math.min((t - last) / 1000, .05) : .016; last = t; ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < P.length; i++) { var p = P[i]; p.y -= p.vy * dt; p.ph += p.sway * dt; var x = p.x + Math.sin(p.ph) * p.amp;
      if (p.y < -12) { P[i] = mk(false); continue; } var a = .22 * Math.sin(Math.min((H - p.y) / H, 1) * Math.PI) + .05; var sz = p.r * 7;
      ctx.globalAlpha = a < 0 ? 0 : a; ctx.drawImage(p.gold ? gold : violet, x - sz / 2, p.y - sz / 2, sz, sz); }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over"; raf = requestAnimationFrame(frame);
  }
  function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
  if (reduce) { resize(); ctx.globalCompositeOperation = "lighter"; for (var i = 0; i < 24; i++) { var sz = rnd(5, 12); ctx.globalAlpha = rnd(.05, .14); ctx.drawImage(violet, rnd(0, W), rnd(0, H), sz, sz); } ctx.globalAlpha = 1; }
  else { init(); start(); }
  var rz; addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(function () { if (!reduce) init(); }, 200); });
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
