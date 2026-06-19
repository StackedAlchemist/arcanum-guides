/* ============================================================
   THE ARCANUM - ambient life layer
   A canvas of rising forge-embers and drifting arcane motes,
   to make the sanctum feel lit and alive. Self-contained,
   performance-capped, and reduced-motion aware.
   ============================================================ */
(function () {
  "use strict";

  var canvas = document.getElementById("ambient");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia &&
               window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0, raf = null, last = 0;
  var embers = [], motes = [];

  function rand(a, b) { return a + Math.random() * (b - a); }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  /* a soft round glow sprite, drawn once and reused */
  function sprite(rgb) {
    var s = document.createElement("canvas");
    s.width = s.height = 48;
    var c = s.getContext("2d");
    var g = c.createRadialGradient(24, 24, 0, 24, 24, 24);
    g.addColorStop(0, "rgba(" + rgb + ",1)");
    g.addColorStop(0.35, "rgba(" + rgb + ",0.55)");
    g.addColorStop(1, "rgba(" + rgb + ",0)");
    c.fillStyle = g;
    c.beginPath(); c.arc(24, 24, 24, 0, Math.PI * 2); c.fill();
    return s;
  }
  var emberSprite = sprite("240,180,90");   /* molten gold */
  var moteSprite  = sprite("150,120,210");  /* arcane violet */

  function makeEmber(initial) {
    return {
      x: rand(0, W),
      y: initial ? rand(0, H) : H + rand(0, 40),
      r: rand(1.2, 3.4),
      sp: rand(8, 26),            /* upward px/sec */
      sway: rand(0.3, 1.1),
      swayAmp: rand(6, 22),
      phase: rand(0, Math.PI * 2),
      life: 0,
      max: rand(6, 13)
    };
  }
  function makeMote() {
    return {
      x: rand(0, W), y: rand(0, H),
      r: rand(0.8, 2.2),
      vx: rand(-6, 6), vy: rand(-6, 6),
      phase: rand(0, Math.PI * 2),
      tw: rand(0.4, 1.0)
    };
  }

  function init() {
    resize();
    var n = Math.round(Math.min(70, (W * H) / 26000));
    embers = []; motes = [];
    for (var i = 0; i < n; i++) embers.push(makeEmber(true));
    for (var j = 0; j < Math.round(n * 0.6); j++) motes.push(makeMote());
  }

  function frame(t) {
    var dt = last ? Math.min((t - last) / 1000, 0.05) : 0.016;
    last = t;
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    var i, sz;
    for (i = 0; i < motes.length; i++) {
      var m = motes[i];
      m.x += m.vx * dt; m.y += m.vy * dt; m.phase += dt;
      if (m.x < 0) m.x += W; if (m.x > W) m.x -= W;
      if (m.y < 0) m.y += H; if (m.y > H) m.y -= H;
      sz = m.r * 8;
      ctx.globalAlpha = 0.10 + 0.10 * Math.sin(m.phase * m.tw);
      ctx.drawImage(moteSprite, m.x - sz / 2, m.y - sz / 2, sz, sz);
    }

    for (i = 0; i < embers.length; i++) {
      var e = embers[i];
      e.life += dt; e.y -= e.sp * dt; e.phase += e.sway * dt;
      if (e.y < -20 || e.life > e.max) { embers[i] = makeEmber(false); continue; }
      var x = e.x + Math.sin(e.phase) * e.swayAmp;
      var a = Math.sin(Math.min(e.life / e.max, 1) * Math.PI) * 0.72;
      sz = e.r * 8;
      ctx.globalAlpha = a < 0 ? 0 : a;
      ctx.drawImage(emberSprite, x - sz / 2, e.y - sz / 2, sz, sz);
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    raf = requestAnimationFrame(frame);
  }

  function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  /* reduced motion: paint one faint static ember field, no loop */
  function staticField() {
    resize();
    var n = Math.round(Math.min(50, (W * H) / 30000));
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < n; i++) {
      var sz = rand(6, 16);
      ctx.globalAlpha = rand(0.05, 0.18);
      ctx.drawImage(emberSprite, rand(0, W) - sz / 2, rand(0, H) - sz / 2, sz, sz);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
  }

  var rzTimer;
  window.addEventListener("resize", function () {
    clearTimeout(rzTimer);
    rzTimer = setTimeout(function () {
      if (reduce) staticField();
      else { init(); }
    }, 200);
  });

  /* pause when tab is hidden to save battery */
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else if (!reduce) start();
  });

  if (reduce) { staticField(); }
  else { init(); start(); }
})();
