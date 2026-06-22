/* ============================================================
   THE ARCANUM — storm.js
   Lightweight animated storm: drifting charged clouds, rising
   emerald/volt motes, and periodic lightning bolts that flash
   the screen. Honors prefers-reduced-motion. No dependencies.
   ============================================================ */
(function () {
  "use strict";
  var c = document.getElementById("storm");
  var flash = document.getElementById("flash");
  if (!c || !c.getContext) return;
  var ctx = c.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0, raf = null, last = 0, motes = [], clouds = [], bolt = null, nextBolt = 0, t = 0;

  function rnd(a, b) { return a + Math.random() * (b - a); }
  function resize() {
    W = innerWidth; H = innerHeight;
    c.width = W * DPR; c.height = H * DPR; c.style.width = W + "px"; c.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  function sprite(rgb) {
    var s = document.createElement("canvas"); s.width = s.height = 40; var x = s.getContext("2d");
    var g = x.createRadialGradient(20, 20, 0, 20, 20, 20);
    g.addColorStop(0, "rgba(" + rgb + ",1)"); g.addColorStop(.4, "rgba(" + rgb + ",.45)"); g.addColorStop(1, "rgba(" + rgb + ",0)");
    x.fillStyle = g; x.beginPath(); x.arc(20, 20, 20, 0, 7); x.fill(); return s;
  }
  var emer = sprite("21,201,138"), volt = sprite("121,212,255");

  function mkMote(init) {
    return { x: rnd(0, W), y: init ? rnd(0, H) : H + 10, r: rnd(1, 2.6), vy: rnd(7, 18),
             sway: rnd(.3, .9), amp: rnd(8, 26), ph: rnd(0, 6.28), volt: Math.random() < 0.4 };
  }
  function mkCloud() {
    return { x: rnd(0, W), y: rnd(0, H * 0.5), r: rnd(160, 360), vx: rnd(4, 14) * (Math.random() < .5 ? -1 : 1),
             hue: Math.random() < .5 ? "42,90,150" : "21,120,100", a: rnd(.04, .09) };
  }
  function init() {
    resize();
    var n = Math.round(Math.min(46, (W * H) / 36000));
    motes = []; for (var i = 0; i < n; i++) motes.push(mkMote(true));
    clouds = []; for (var j = 0; j < 5; j++) clouds.push(mkCloud());
    nextBolt = t + rnd(2.5, 6);
  }

  /* build a jagged lightning path from top to a y depth */
  function makeBolt() {
    var x = rnd(W * 0.15, W * 0.85), y = rnd(-10, 10);
    var pts = [[x, y]], depth = rnd(H * 0.45, H * 0.85), steps = 14;
    for (var i = 1; i <= steps; i++) {
      y += depth / steps;
      x += rnd(-42, 42);
      pts.push([x, y]);
      if (Math.random() < 0.18 && i < steps - 2) { /* fork */
        var fx = x, fy = y, f = [[x, y]];
        for (var k = 0; k < 5; k++) { fy += rnd(18, 40); fx += rnd(-34, 34); f.push([fx, fy]); }
        pts.fork = (pts.fork || []); pts.fork.push(f);
      }
    }
    return { pts: pts, life: 0, max: rnd(.16, .28), seed: Math.random() };
  }
  function strikeFlash(strength) {
    if (!flash) return;
    flash.classList.add("hit");
    flash.style.opacity = strength;
    clearTimeout(strikeFlash._t);
    strikeFlash._t = setTimeout(function () { flash.style.opacity = ""; flash.classList.remove("hit"); }, 90);
  }
  function drawBolt(b) {
    var flick = 0.6 + Math.random() * 0.4;
    function stroke(path, w, col, a) {
      ctx.beginPath(); ctx.moveTo(path[0][0], path[0][1]);
      for (var i = 1; i < path.length; i++) ctx.lineTo(path[i][0], path[i][1]);
      ctx.strokeStyle = col; ctx.globalAlpha = a * flick; ctx.lineWidth = w; ctx.lineJoin = "round"; ctx.stroke();
    }
    ctx.globalCompositeOperation = "lighter";
    stroke(b.pts, 9, "rgba(60,150,255,0.5)", 1);     /* outer glow */
    stroke(b.pts, 3.2, "rgba(150,220,255,0.9)", 1);   /* mid */
    stroke(b.pts, 1.3, "rgba(235,255,250,1)", 1);     /* core */
    if (b.pts.fork) b.pts.fork.forEach(function (f) { stroke(f, 1.6, "rgba(170,230,255,0.8)", .8); });
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
  }

  function frame(now) {
    var dt = last ? Math.min((now - last) / 1000, .05) : .016; last = now; t += dt;
    ctx.clearRect(0, 0, W, H);

    /* charged clouds */
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < clouds.length; i++) {
      var cl = clouds[i]; cl.x += cl.vx * dt;
      if (cl.x < -cl.r) cl.x = W + cl.r; if (cl.x > W + cl.r) cl.x = -cl.r;
      var g = ctx.createRadialGradient(cl.x, cl.y, 0, cl.x, cl.y, cl.r);
      g.addColorStop(0, "rgba(" + cl.hue + "," + cl.a + ")"); g.addColorStop(1, "rgba(" + cl.hue + ",0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cl.x, cl.y, cl.r, 0, 7); ctx.fill();
    }

    /* rising motes */
    for (var m = 0; m < motes.length; m++) {
      var p = motes[m]; p.y -= p.vy * dt; p.ph += p.sway * dt;
      var x = p.x + Math.sin(p.ph) * p.amp;
      if (p.y < -12) { motes[m] = mkMote(false); continue; }
      var a = .2 * Math.sin(Math.min((H - p.y) / H, 1) * Math.PI) + .04; var sz = p.r * 7;
      ctx.globalAlpha = a < 0 ? 0 : a; ctx.drawImage(p.volt ? volt : emer, x - sz / 2, p.y - sz / 2, sz, sz);
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";

    /* lightning */
    if (!bolt && t >= nextBolt) { bolt = makeBolt(); strikeFlash(0.9); }
    if (bolt) {
      bolt.life += dt;
      if (bolt.life < bolt.max) { drawBolt(bolt); if (Math.random() < 0.2) strikeFlash(0.5); }
      else { bolt = null; nextBolt = t + rnd(3.5, 8); }
    }
    raf = requestAnimationFrame(frame);
  }

  function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  if (reduce) {
    resize(); ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < 22; i++) { var sz = rnd(5, 12); ctx.globalAlpha = rnd(.04, .12); ctx.drawImage(Math.random() < .5 ? emer : volt, rnd(0, W), rnd(0, H), sz, sz); }
    ctx.globalAlpha = 1;
  } else {
    init(); start();
    var scrollLock = 0;
    addEventListener("scroll", function () {
      var n = performance.now();
      if (n - scrollLock > 1400 && Math.random() < 0.5) { scrollLock = n; strikeFlash(0.35); }
    }, { passive: true });
  }
  var rz; addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(function () { if (!reduce) init(); }, 200); });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else if (!reduce) start(); });

  /* expose a manual strike for hover hooks */
  window.ArcanumStrike = function (s) { if (!reduce) strikeFlash(s || 0.5); };
})();
