// ═══════════════════════════════════════════════════════
// GALYM AI — script.js
// Features: i18n, canvas bg, scroll animations, header
// ═══════════════════════════════════════════════════════

// ─── LANGUAGE ───
const LANG_KEY = 'galym_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'ru';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations();
  updateLangButtons();
}

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.ru && i18n.ru[key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const val = t(key);
    if (attr) {
      el.setAttribute(attr, val);
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key).replace(/\n/g, '<br>');
  });
  document.documentElement.lang = currentLang;
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// ─── HEADER SCROLL ───
const header = document.querySelector('header');
function updateHeader() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// ─── ACTIVE NAV ───
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ─── BURGER MENU ───
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = burger.classList.contains('open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ─── SCROLL REVEAL ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── FEEDBACK FORM → GOOGLE FORMS ───
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    window.open('https://forms.google.com/example', '_blank');
    const success = document.querySelector('.form-success');
    if (success) {
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 4000);
    }
  });
}

// ─── HERO ANIMATION ───
if (!document.getElementById('heroStyles')) {
  const style = document.createElement('style');
  style.id = 'heroStyles';
  style.textContent = `
    @keyframes slideUp { from { transform:translateY(110%); opacity:0; } to { transform:translateY(0); opacity:1; } }
    @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    .hero-badge { animation: fadeInUp 0.7s ease 0.1s both; }
    .hero h1 .line { overflow:hidden; }
    .hero h1 .line:nth-child(1) span { display:block; animation: slideUp 0.9s cubic-bezier(.4,0,.2,1) 0.2s both; }
    .hero h1 .line:nth-child(2) span { display:block; animation: slideUp 0.9s cubic-bezier(.4,0,.2,1) 0.38s both; }
    .hero p { animation: fadeInUp 0.7s ease 0.56s both; }
    .hero-buttons { animation: fadeInUp 0.7s ease 0.72s both; }
  `;
  document.head.appendChild(style);
}

// ════════════════════════════════════════════════════════
// ─── DYNAMIC CANVAS BACKGROUND ───
// ════════════════════════════════════════════════════════
(function initCanvasBg() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, scrollY = 0, mouseX = 0.5, mouseY = 0.5;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.scale(DPR, DPR);
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
  }, { passive: true });

  const COLORS = ['#4DF0B0', '#7B6EF6', '#F06A4D', '#4DB8F0'];

  // ── Particles ──
  const particles = [];
  const PCOUNT = 55;

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * (W || 1200);
      this.y = init ? Math.random() * (H || 800) : (H || 800) + 20;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = -(Math.random() * 0.35 + 0.08);
      this.r = Math.random() * 2.2 + 0.4;
      this.alpha = Math.random() * 0.45 + 0.1;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.phase = Math.random() * Math.PI * 2;
      this.freq = Math.random() * 0.007 + 0.003;
      this.life = 1;
      this.decay = Math.random() * 0.0025 + 0.0008;
    }
    update(t) {
      this.x += this.vx + Math.sin(t * this.freq + this.phase) * 0.12;
      this.y += this.vy - scrollY * 0.00006 * this.r;
      this.x += (mouseX - 0.5) * 0.008;
      this.y += (mouseY - 0.5) * 0.005;
      this.life -= this.decay;
      if (this.life <= 0 || this.y < -20) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.life * this.alpha;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = this.r * 5;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < PCOUNT; i++) particles.push(new Particle());

  // ── Grid ──
  function drawGrid(t) {
    const scrollOff = scrollY * 0.05;
    ctx.save();
    ctx.strokeStyle = '#4DF0B0';
    ctx.lineWidth = 0.4;
    // horizontal
    for (let i = 0; i < 14; i++) {
      const y = ((i * H / 13) + scrollOff * (0.5 + i * 0.04)) % H;
      ctx.globalAlpha = 0.025 + Math.sin(t * 0.0003 + i) * 0.008;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    // vertical
    for (let i = 0; i < 18; i++) {
      const x = (i * W / 17) % W;
      ctx.globalAlpha = 0.018 + Math.cos(t * 0.0002 + i) * 0.006;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    ctx.restore();
  }

  // ── Radial orbs ──
  function drawOrbs(t) {
    const orbDefs = [
      { bx: 0.65, by: 0.18, r: 0.38, hue: '#4DF0B0', spd: 0.00055, ph: 0 },
      { bx: 0.08, by: 0.72, r: 0.30, hue: '#7B6EF6', spd: 0.00075, ph: 2.1 },
      { bx: 0.88, by: 0.78, r: 0.24, hue: '#F06A4D', spd: 0.00045, ph: 4.2 },
    ];
    orbDefs.forEach(o => {
      const ox = o.bx * W + Math.sin(t * o.spd + o.ph) * W * 0.05 + (mouseX - 0.5) * 25 * (1 - o.bx);
      const oy = o.by * H + Math.cos(t * o.spd * 0.7 + o.ph) * H * 0.05 - scrollY * 0.10 * (1 - o.by) + (mouseY - 0.5) * 18 * (1 - o.by);
      const rr = o.r * Math.min(W, H);
      const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, rr);
      const hex = o.hue;
      const rv = parseInt(hex.slice(1,3),16), gv = parseInt(hex.slice(3,5),16), bv = parseInt(hex.slice(5,7),16);
      grad.addColorStop(0, `rgba(${rv},${gv},${bv},0.16)`);
      grad.addColorStop(0.5, `rgba(${rv},${gv},${bv},0.05)`);
      grad.addColorStop(1, `rgba(${rv},${gv},${bv},0)`);
      ctx.save();
      ctx.beginPath();
      ctx.arc(ox, oy, rr, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    });
  }

  // ── Waves ──
  function drawWaves(t) {
    const waveDefs = [
      { amp: 38, freq: 0.006, spd: 0.28, color: '#4DF0B0', alpha: 0.045, yo: 0.55 },
      { amp: 24, freq: 0.009, spd: 0.42, color: '#7B6EF6', alpha: 0.050, yo: 0.61 },
      { amp: 16, freq: 0.013, spd: 0.60, color: '#F06A4D', alpha: 0.030, yo: 0.49 },
    ];
    waveDefs.forEach(w => {
      const baseY = w.yo * H - scrollY * 0.07;
      ctx.save();
      ctx.globalAlpha = w.alpha;
      ctx.strokeStyle = w.color;
      ctx.lineWidth = 1.2;
      ctx.shadowColor = w.color;
      ctx.shadowBlur = 5;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const y = baseY
          + Math.sin(x * w.freq + t * w.spd * 0.001) * w.amp
          + Math.sin(x * w.freq * 2.1 + t * w.spd * 0.00085 + 1.2) * w.amp * 0.38;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    });
  }

  // ── Connections ──
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 95) {
          const al = (1 - dist / 95) * 0.07 * Math.min(a.life, b.life);
          ctx.save();
          ctx.globalAlpha = al;
          ctx.strokeStyle = '#4DF0B0';
          ctx.lineWidth = 0.4;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  // ── Loop ──
  function loop(time) {
    ctx.clearRect(0, 0, W, H);
    drawGrid(time);
    drawOrbs(time);
    drawWaves(time);
    particles.forEach(p => p.update(time));
    drawConnections();
    particles.forEach(p => p.draw());
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

// ─── INIT ON DOM READY ───
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangButtons();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
