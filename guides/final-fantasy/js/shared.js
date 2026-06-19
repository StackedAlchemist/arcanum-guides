// FF7 Rebirth Guide - Shared JS
// Used across all pages

// ===== LIFESTREAM BACKGROUND =====
function initLifestream(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, items = [];

  class Stream {
    constructor(init) { this.reset(init); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 60;
      this.speed = 0.2 + Math.random() * 0.55;
      this.w = 0.4 + Math.random() * 1.2;
      this.len = 55 + Math.random() * 110;
      this.alpha = 0.025 + Math.random() * 0.065;
      this.drift = (Math.random() - 0.5) * 0.18;
      this.hue = 145 + Math.random() * 35;
    }
    update() {
      this.y -= this.speed;
      this.x += this.drift;
      if (this.y + this.len < 0) this.reset(false);
    }
    draw() {
      const g = ctx.createLinearGradient(this.x, this.y, this.x, this.y - this.len);
      g.addColorStop(0, `hsla(${this.hue},100%,60%,0)`);
      g.addColorStop(0.5, `hsla(${this.hue},100%,65%,${this.alpha})`);
      g.addColorStop(1, `hsla(${this.hue},100%,70%,0)`);
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y - this.len);
      ctx.strokeStyle = g;
      ctx.lineWidth = this.w;
      ctx.stroke();
    }
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function init() {
    items = [];
    for (let i = 0; i < 45; i++) items.push(new Stream(true));
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    items.forEach(s => { s.update(); s.draw(); });
    requestAnimationFrame(loop);
  }

  resize(); init(); loop();
  window.addEventListener('resize', () => { resize(); init(); });
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}

// ===== ACTIVE NAV LINK =====
function initNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ===== BOSS ACCORDION =====
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const acc = header.parentElement;
      const isOpen = acc.classList.contains('open');
      document.querySelectorAll('.accordion').forEach(a => a.classList.remove('open'));
      if (!isOpen) acc.classList.add('open');
    });
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initLifestream('bg-canvas');
  initReveal();
  initNav();
  initAccordions();
});
