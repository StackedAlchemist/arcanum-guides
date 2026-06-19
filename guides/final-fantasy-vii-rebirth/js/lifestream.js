// ============================================================
// lifestream.js
// Drop in js/ folder. Include on every page AFTER your content.
// Replaces the old single-canvas initLifestream() entirely.
//
// Requires three canvas elements in your HTML body:
//   <canvas id="ls-deep"></canvas>
//   <canvas id="ls-mid"></canvas>
//   <canvas id="ls-surface"></canvas>
// ============================================================

(function () {

  // ---- LAYER 1: DEEP CURRENT ----
  // Massive slow energy blobs driven by a flow field
  function initDeepLayer(id) {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    const COLS = 28, ROWS = 18;
    let field = [];
    let fieldTime = 0;

    function buildField() {
      field = [];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = (c / COLS) * Math.PI * 4;
          const y = (r / ROWS) * Math.PI * 3;
          const angle =
            Math.sin(x * 0.8 + fieldTime * 0.12) * Math.PI +
            Math.cos(y * 0.6 + fieldTime * 0.09) * Math.PI * 0.7 +
            Math.sin((x + y) * 0.4 + fieldTime * 0.07) * Math.PI * 0.5;
          field.push(angle);
        }
      }
    }

    class EnergyBlob {
      constructor() { this.reset(true); }
      reset(init) {
        this.x       = Math.random() * W;
        this.y       = init ? Math.random() * H : H + 100;
        this.r       = 80 + Math.random() * 180;
        this.vx      = (Math.random() - 0.5) * 0.3;
        this.vy      = -(0.08 + Math.random() * 0.2);
        this.alpha   = 0.015 + Math.random() * 0.04;
        this.hue     = 148 + Math.random() * 28;
        this.phase   = Math.random() * Math.PI * 2;
        this.life    = 0;
        this.maxLife = 400 + Math.random() * 500;
      }
      update() {
        const col = Math.min(Math.floor((this.x / W) * COLS), COLS - 1);
        const row = Math.min(Math.floor((this.y / H) * ROWS), ROWS - 1);
        const angle = field[row * COLS + col] || 0;
        this.vx += Math.cos(angle) * 0.012;
        this.vy += Math.sin(angle) * 0.008 - 0.006;
        this.vx *= 0.97;
        this.vy *= 0.985;
        this.x  += this.vx;
        this.y  += this.vy;
        this.life++;
        if (this.y + this.r < -50 || this.life > this.maxLife) this.reset(false);
      }
      draw() {
        const pulse   = this.alpha * (0.7 + 0.3 * Math.sin(this.phase + this.life * 0.02));
        const fadeIn  = Math.min(1, this.life / 60);
        const fadeOut = Math.min(1, (this.maxLife - this.life) / 80);
        const a = pulse * fadeIn * fadeOut;
        if (a <= 0) return;
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        g.addColorStop(0,   `hsla(${this.hue},100%,72%,${a * 1.8})`);
        g.addColorStop(0.3, `hsla(${this.hue},100%,60%,${a * 0.9})`);
        g.addColorStop(0.7, `hsla(${this.hue}, 85%,45%,${a * 0.35})`);
        g.addColorStop(1,   `hsla(${this.hue}, 70%,30%,0)`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }
    }

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildField();
    }

    const blobs = [];
    for (let i = 0; i < 22; i++) blobs.push(new EnergyBlob());

    let tick = 0;
    function loop() {
      ctx.clearRect(0, 0, W, H);
      fieldTime += 0.008;
      tick++;
      if (tick % 3 === 0) buildField();
      blobs.forEach(b => { b.update(); b.draw(); });
      requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    loop();
  }


  // ---- LAYER 2: TENDRILS ----
  // Swirling currents with white-hot cores and trailing wisps
  function initTendrilLayer(id) {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;

    class Tendril {
      constructor() { this.reset(true); }
      reset(init) {
        this.x        = Math.random() * W;
        this.y        = init ? Math.random() * H : H + 40;
        this.vx       = (Math.random() - 0.5) * 1.2;
        this.vy       = -(0.4 + Math.random() * 1.1);
        this.life     = 0;
        this.maxLife  = 120 + Math.random() * 220;
        this.hue      = 150 + Math.random() * 30;
        this.width    = 0.8 + Math.random() * 2.8;
        this.alpha    = 0.06 + Math.random() * 0.16;
        this.waveFreq = 0.04 + Math.random() * 0.06;
        this.waveAmp  = 0.8 + Math.random() * 2.5;
        this.phase    = Math.random() * Math.PI * 2;
        this.trail    = [];
        this.trailLen = 18 + Math.floor(Math.random() * 24);
        this.hasCore  = Math.random() > 0.45;
        this.coreW    = this.width * (0.15 + Math.random() * 0.2);
      }
      update() {
        this.vx += Math.sin(this.phase + this.life * this.waveFreq) * 0.06 * this.waveAmp;
        this.vy += -0.015 + Math.cos(this.phase + this.life * this.waveFreq * 0.7) * 0.018;
        this.vx *= 0.96;
        this.vy *= 0.985;
        this.x  += this.vx;
        this.y  += this.vy;
        this.life++;
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.trailLen) this.trail.shift();
        if (this.y < -60 || this.life > this.maxLife) this.reset(false);
      }
      draw() {
        if (this.trail.length < 3) return;
        const fade = Math.min(1, this.life / 30) * Math.min(1, (this.maxLife - this.life) / 40);
        if (fade <= 0) return;
        const head = this.trail[this.trail.length - 1];
        const tail = this.trail[0];

        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        // Outer glow tendril
        ctx.beginPath();
        ctx.moveTo(this.trail[0].x, this.trail[0].y);
        for (let i = 1; i < this.trail.length - 1; i++) {
          const mx = (this.trail[i].x + this.trail[i + 1].x) / 2;
          const my = (this.trail[i].y + this.trail[i + 1].y) / 2;
          ctx.quadraticCurveTo(this.trail[i].x, this.trail[i].y, mx, my);
        }
        try {
          const g = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
          g.addColorStop(0,   `hsla(${this.hue},90%,55%,0)`);
          g.addColorStop(0.5, `hsla(${this.hue},95%,62%,${this.alpha * fade * 0.5})`);
          g.addColorStop(1,   `hsla(${this.hue},100%,75%,${this.alpha * fade})`);
          ctx.strokeStyle = g;
        } catch (e) {
          ctx.strokeStyle = `hsla(${this.hue},95%,65%,${this.alpha * fade * 0.5})`;
        }
        ctx.lineWidth = this.width;
        ctx.lineCap   = 'round';
        ctx.lineJoin  = 'round';
        ctx.stroke();

        // White-hot core
        if (this.hasCore) {
          const start = Math.floor(this.trail.length * 0.4);
          ctx.beginPath();
          ctx.moveTo(this.trail[start].x, this.trail[start].y);
          for (let i = start + 1; i < this.trail.length; i++) {
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
          }
          ctx.strokeStyle = `rgba(220,255,240,${this.alpha * fade * 1.4})`;
          ctx.lineWidth   = this.coreW;
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    const tendrils = [];
    for (let i = 0; i < 55; i++) tendrils.push(new Tendril());

    function loop() {
      ctx.clearRect(0, 0, W, H);
      tendrils.forEach(t => { t.update(); t.draw(); });
      requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    loop();
  }


  // ---- LAYER 3: SURFACE SPARKS ----
  // Fast bright motes + occasional horizontal energy surges
  function initSurfaceLayer(id) {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;

    class Mote {
      constructor() { this.reset(true); }
      reset(init) {
        this.x       = Math.random() * W;
        this.y       = init ? Math.random() * H : H + 10;
        this.r       = 0.5 + Math.random() * 2.2;
        this.vx      = (Math.random() - 0.5) * 0.6;
        this.vy      = -(0.3 + Math.random() * 1.4);
        this.alpha   = 0.4 + Math.random() * 0.55;
        this.hue     = 148 + Math.random() * 32;
        this.life    = 0;
        this.maxLife = 60 + Math.random() * 140;
        this.phase   = Math.random() * Math.PI * 2;
        this.flare   = Math.random() > 0.82;
      }
      update() {
        this.vx *= 0.992;
        this.vy *= 0.994;
        this.x  += this.vx + Math.sin(this.phase + this.life * 0.05) * 0.15;
        this.y  += this.vy;
        this.life++;
        if (this.y < -8 || this.life > this.maxLife) this.reset(false);
      }
      draw() {
        const fade = Math.min(1, this.life / 20) * Math.min(1, (this.maxLife - this.life) / 25);
        if (fade <= 0) return;
        const a = this.alpha * fade;
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        if (this.flare) {
          const fr = this.r * 4;
          const fg = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, fr);
          fg.addColorStop(0,   `rgba(220,255,240,${a * 0.9})`);
          fg.addColorStop(0.2, `hsla(${this.hue},100%,80%,${a * 0.5})`);
          fg.addColorStop(1,   `hsla(${this.hue},100%,65%,0)`);
          ctx.beginPath();
          ctx.arc(this.x, this.y, fr, 0, Math.PI * 2);
          ctx.fillStyle = fg;
          ctx.fill();
        }
        const cg = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 1.5);
        cg.addColorStop(0,   `rgba(230,255,245,${a})`);
        cg.addColorStop(0.5, `hsla(${this.hue},100%,75%,${a * 0.6})`);
        cg.addColorStop(1,   `hsla(${this.hue},100%,60%,0)`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
        ctx.restore();
      }
    }

    class Surge {
      constructor() { this.reset(); }
      reset() {
        this.y       = Math.random() * H;
        this.alpha   = 0;
        this.life    = 0;
        this.maxLife = 40 + Math.random() * 60;
        this.width   = 1 + Math.random() * 4;
        this.delay   = Math.floor(Math.random() * 600);
        this.hue     = 150 + Math.random() * 25;
      }
      update() {
        if (this.delay > 0) { this.delay--; return; }
        this.life++;
        this.alpha = Math.sin((this.life / this.maxLife) * Math.PI) * 0.06;
        if (this.life > this.maxLife) this.reset();
      }
      draw() {
        if (this.alpha <= 0 || this.delay > 0) return;
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        const g = ctx.createLinearGradient(0, this.y, W, this.y);
        g.addColorStop(0,   `hsla(${this.hue},100%,70%,0)`);
        g.addColorStop(0.2, `hsla(${this.hue},100%,72%,${this.alpha})`);
        g.addColorStop(0.5, `rgba(200,255,230,${this.alpha * 1.5})`);
        g.addColorStop(0.8, `hsla(${this.hue},100%,72%,${this.alpha})`);
        g.addColorStop(1,   `hsla(${this.hue},100%,70%,0)`);
        ctx.strokeStyle = g;
        ctx.lineWidth   = this.width;
        ctx.beginPath();
        ctx.moveTo(0, this.y);
        ctx.lineTo(W, this.y);
        ctx.stroke();
        ctx.restore();
      }
    }

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    const motes  = [];
    const surges = [];
    for (let i = 0; i < 90; i++) motes.push(new Mote());
    for (let i = 0; i < 5;  i++) surges.push(new Surge());

    function loop() {
      ctx.clearRect(0, 0, W, H);
      surges.forEach(s => { s.update(); s.draw(); });
      motes.forEach(m => { m.update(); m.draw(); });
      requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    loop();
  }


  // ---- CARD MOUSE LIGHTING ----
  // Lifestream light follows cursor inside glass cards
  function initCardLighting() {
    document.querySelectorAll('.glass-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r  = card.getBoundingClientRect();
        const mx = ((e.clientX - r.left)  / r.width  * 100).toFixed(1);
        const my = ((e.clientY - r.top)   / r.height * 100).toFixed(1);
        card.style.setProperty('--mx', `${mx}%`);
        card.style.setProperty('--my', `${my}%`);
      });
    });
  }


  // ---- BOOT ----
  window.addEventListener('DOMContentLoaded', () => {
    initDeepLayer('ls-deep');
    initTendrilLayer('ls-mid');
    initSurfaceLayer('ls-surface');
    initCardLighting();
  });

})();
