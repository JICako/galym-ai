// ═══════════════════════════════════════════════════════════════
// GALYM AI — script.js
// Функции: тёмный/светлый режим, галерея новостей,
//          языки (RU/KZ/EN), фоновая картинка, анимации
// ═══════════════════════════════════════════════════════════════

// ────────────────────────────────────────────
// 1. ТЕМА (ТЁМНЫЙ / СВЕТЛЫЙ РЕЖИМ)
// ────────────────────────────────────────────
const THEME_KEY = 'galym_theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem(THEME_KEY, theme);
  updateThemeButtons();
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

function updateThemeButtons() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.setAttribute('aria-label', isDark ? 'Светлая тема' : 'Тёмная тема');
    btn.title = isDark ? 'Светлая тема' : 'Тёмная тема';
  });
  document.querySelectorAll('.theme-icon-sun').forEach(el => {
    el.style.opacity = isDark ? '0.4' : '1';
  });
  document.querySelectorAll('.theme-icon-moon').forEach(el => {
    el.style.opacity = isDark ? '1' : '0.4';
  });
}

// Применяем сохранённую тему сразу (до DOMContentLoaded, чтобы не мигало)
(function() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
})();


// ────────────────────────────────────────────
// 2. ЯЗЫК (RU / KZ / EN)
// ────────────────────────────────────────────
const LANG_KEY = 'galym_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'ru';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations();
  updateLangButtons();
  renderDynamicContent(); // обновить динамический контент при смене языка
}

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key])
      || (i18n.ru && i18n.ru[key])
      || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) el.setAttribute(attr, t(key));
    else el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html')).replace(/\n/g, '<br>');
  });
  document.documentElement.lang = currentLang;
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === currentLang)
  );
}


// ────────────────────────────────────────────
// 3. ФОНОВАЯ КАРТИНКА (из content.js)
// ────────────────────────────────────────────
function applyBackground() {
  if (typeof SITE_CONTENT === 'undefined') return;
  const bg = document.querySelector('.site-bg');
  if (!bg) return;

  const url = SITE_CONTENT.backgrounds.main;
  const fallback = SITE_CONTENT.backgrounds.fallback;

  // Загружаем картинку, при ошибке — запасная
  const img = new Image();
  img.onload  = () => { bg.style.backgroundImage = `url('${url}')`; };
  img.onerror = () => { bg.style.backgroundImage = `url('${fallback}')`; };
  img.src = url;
}


// ────────────────────────────────────────────
// 4. ДИНАМИЧЕСКИЙ РЕНДЕР КОНТЕНТА ИЗ content.js
// ────────────────────────────────────────────
function renderDynamicContent() {
  if (typeof SITE_CONTENT === 'undefined') return;
  renderCourses();
  renderTeachers();
  renderNews();
  renderEvents();
  renderAiTools();
}

/* ── Курсы ── */
function renderCourses() {
  const grid = document.getElementById('coursesGrid');
  if (!grid || !SITE_CONTENT.courses) return;

  const levelLabels = {
    beginner:     { ru: 'Начальный', kz: 'Бастауыш', en: 'Beginner' },
    intermediate: { ru: 'Средний',   kz: 'Орта',     en: 'Intermediate' },
    advanced:     { ru: 'Продвинутый', kz: 'Жетілдірілген', en: 'Advanced' },
  };

  grid.innerHTML = SITE_CONTENT.courses.map(c => {
    const title = c[`title${cap(currentLang)}`] || c.titleRu;
    const desc  = c[`desc${cap(currentLang)}`]  || c.descRu;
    const level = levelLabels[c.level]?.[currentLang] || c.level;
    const months = currentLang === 'kz' ? 'ай' : currentLang === 'en' ? 'mo.' : 'мес.';
    const lessons = currentLang === 'kz' ? 'сабақ' : currentLang === 'en' ? 'lessons' : 'уроков';

    return `
    <div class="course-card reveal">
      <div class="course-number">${c.number}</div>
      <div class="course-level level-${c.level}">${level}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="course-meta">
        <div class="course-meta-item">📅 ${c.duration} ${months}</div>
        <div class="course-meta-item">🧒 ${c.age}</div>
        <div class="course-meta-item">📚 ${c.lessons} ${lessons}</div>
      </div>
      <a href="${c.formUrl}" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;">
        ${t('enroll_btn')}
      </a>
    </div>`;
  }).join('');

  // Переподключаем reveal наблюдатель для новых элементов
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ── Преподаватели ── */
function renderTeachers() {
  const grid = document.getElementById('teachersGrid');
  if (!grid || !SITE_CONTENT.teachers) return;

  grid.innerHTML = SITE_CONTENT.teachers.map((t_, i) => {
    const name = t_[`name${cap(currentLang)}`] || t_.nameRu;
    const role = t_[`role${cap(currentLang)}`] || t_.roleRu;
    const bio  = t_[`bio${cap(currentLang)}`]  || t_.bioRu;
    const delay = i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : '';

    return `
    <div class="teacher-card reveal${delay}">
      <img class="teacher-img" src="${t_.photo}" alt="${name}" loading="lazy">
      <div class="teacher-info">
        <h3>${name}</h3>
        <p class="role">${role}</p>
        <p class="bio">${bio}</p>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ── Новости ── */
function renderNews() {
  const grid = document.getElementById('newsGrid');
  if (!grid || !SITE_CONTENT.news) return;

  grid.innerHTML = SITE_CONTENT.news.map((n, i) => {
    const date  = n[`date${cap(currentLang)}`]  || n.dateRu;
    const title = n[`title${cap(currentLang)}`] || n.titleRu;
    const text  = n[`text${cap(currentLang)}`]  || n.textRu;
    const readMore = { ru: 'Смотреть фото →', kz: 'Фотоларды қарау →', en: 'View photos →' };
    const delay = i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : '';

    return `
    <div class="news-card reveal${delay}" data-news-index="${i}">
      <div class="news-img">${n.emoji}</div>
      <div class="news-body">
        <div class="news-date">${date}</div>
        <h3>${title}</h3>
        <p>${text.substring(0, 120)}…</p>
        <div class="news-read-more">
          <span>${readMore[currentLang]}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>`;
  }).join('');

  // Клик → открыть галерею
  grid.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
      openGallery(parseInt(card.dataset.newsIndex));
    });
  });

  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function cap(lang) {
  return lang.charAt(0).toUpperCase() + lang.slice(1);
}


// ────────────────────────────────────────────
// 5. ГАЛЕРЕЯ МЕРОПРИЯТИЙ
// ────────────────────────────────────────────
let galleryCurrentPhoto = 0;
let galleryCurrentEvent = null;

function openGallery(newsIndex) {
  const ev = SITE_CONTENT.news[newsIndex];
  if (!ev) return;
  galleryCurrentEvent = ev;
  galleryCurrentPhoto = 0;
  const overlay = document.getElementById('galleryOverlay');
  if (!overlay) return;
  document.getElementById('galleryDate').textContent  = ev[`date${cap(currentLang)}`]  || ev.dateRu;
  document.getElementById('galleryTitle').textContent = ev[`title${cap(currentLang)}`] || ev.titleRu;
  document.getElementById('galleryText').textContent  = ev[`text${cap(currentLang)}`]  || ev.textRu;
  const videoSection = document.getElementById('galleryVideos');
  if (videoSection) { videoSection.innerHTML = ''; videoSection.style.display = 'none'; }
  const thumbs = document.getElementById('galleryThumbs');
  const photoSection = document.getElementById('galleryPhotoSection');
  if (ev.photos && ev.photos.length > 0) {
    thumbs.innerHTML = ev.photos.map((src, i) =>
      `<div class="gallery-thumb${i === 0 ? ' active' : ''}" data-index="${i}"><img src="${src}" alt="" loading="lazy"></div>`
    ).join('');
    thumbs.querySelectorAll('.gallery-thumb').forEach(th => {
      th.addEventListener('click', () => setGalleryPhoto(parseInt(th.dataset.index)));
    });
    if (photoSection) photoSection.style.display = 'block';
    showGalleryPhoto(0);
  } else {
    if (photoSection) photoSection.style.display = 'none';
  }
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  document.getElementById('galleryOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setGalleryPhoto(index) {
  if (!galleryCurrentEvent) return;
  const total = galleryCurrentEvent.photos.length;
  galleryCurrentPhoto = (index + total) % total;
  showGalleryPhoto(galleryCurrentPhoto);
}

function showGalleryPhoto(index) {
  if (!galleryCurrentEvent) return;
  const photos = galleryCurrentEvent.photos;
  const total = photos.length;

  // Главное фото
  const mainImg = document.getElementById('galleryMainImg');
  if (mainImg) {
    mainImg.style.opacity = '0';
    mainImg.src = photos[index];
    mainImg.onload = () => { mainImg.style.opacity = '1'; };
    mainImg.style.transition = 'opacity 0.25s ease';
  }

  // Счётчик
  const count = document.getElementById('galleryCount');
  if (count) {
    const labels = { ru: 'из', kz: 'ішінен', en: 'of' };
    count.textContent = `${index + 1} ${labels[currentLang] || 'из'} ${total}`;
  }

  // Активная миниатюра
  document.querySelectorAll('.gallery-thumb').forEach((th, i) => {
    th.classList.toggle('active', i === index);
  });

  // Прокрутить миниатюру в видимую область
  const activeTh = document.querySelector('.gallery-thumb.active');
  if (activeTh) activeTh.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

// Keyboard navigation in gallery
document.addEventListener('keydown', e => {
  const overlay = document.getElementById('galleryOverlay');
  if (!overlay || !overlay.classList.contains('open')) return;
  if (e.key === 'ArrowRight') setGalleryPhoto(galleryCurrentPhoto + 1);
  if (e.key === 'ArrowLeft')  setGalleryPhoto(galleryCurrentPhoto - 1);
  if (e.key === 'Escape')     closeGallery();
});


// ────────────────────────────────────────────
// 6. HEADER SCROLL
// ────────────────────────────────────────────
const header = document.querySelector('header');
function updateHeader() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();


// ────────────────────────────────────────────
// 7. ACTIVE NAV LINK
// ────────────────────────────────────────────
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
    if (link.getAttribute('href') === path || (path === '' && link.getAttribute('href') === 'index.html'))
      link.classList.add('active');
  });
})();


// ────────────────────────────────────────────
// 8. BURGER MENU
// ────────────────────────────────────────────
const burger    = document.querySelector('.burger');
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


// ────────────────────────────────────────────
// 9. SCROLL REVEAL ANIMATION
// ────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.09, rootMargin: '0px 0px -28px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ────────────────────────────────────────────
// 10. FEEDBACK FORM → GOOGLE FORMS
// ────────────────────────────────────────────
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', e => {
    e.preventDefault();
    const url = (typeof SITE_CONTENT !== 'undefined')
      ? SITE_CONTENT.contacts.googleForms
      : 'https://forms.google.com/example';
    window.open(url, '_blank');
    const s = document.querySelector('.form-success');
    if (s) {
      s.textContent = t('form_success') || '✓ Перенаправляем на форму...';
      s.style.display = 'block';
      setTimeout(() => s.style.display = 'none', 4000);
    }
  });
}


// ────────────────────────────────────────────
// 11. FULLSCREEN BUTTON
// ────────────────────────────────────────────
(function() {
  const btn = document.getElementById('fullscreenBtn');
  if (!btn) return;
  const iconExpand   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
  const iconCollapse = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 3 3 3 3 8"/><polyline points="21 16 21 21 16 21"/><line x1="3" y1="3" x2="10" y2="10"/><line x1="21" y1="21" x2="14" y2="14"/></svg>`;
  btn.innerHTML = iconExpand;

  function isFull() { return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement); }
  function updateIcon() { btn.innerHTML = isFull() ? iconCollapse : iconExpand; }

  btn.addEventListener('click', () => {
    if (!isFull()) {
      const el = document.documentElement;
      (el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen).call(el);
    } else {
      (document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen).call(document);
    }
  });
  document.addEventListener('fullscreenchange', updateIcon);
  document.addEventListener('webkitfullscreenchange', updateIcon);
})();


// ────────────────────────────────────────────
// 12. HERO ANIMATIONS (CSS inject)
// ────────────────────────────────────────────
if (!document.getElementById('heroStyles')) {
  const s = document.createElement('style');
  s.id = 'heroStyles';
  s.textContent = `
    @keyframes slideUp  { from{transform:translateY(110%);opacity:0}to{transform:translateY(0);opacity:1} }
    @keyframes fadeInUp { from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)} }
    .hero-badge{animation:fadeInUp .6s ease .08s both}
    .hero h1 .line{overflow:hidden}
    .hero h1 .line:nth-child(1) span{display:block;animation:slideUp .88s cubic-bezier(.4,0,.2,1) .18s both}
    .hero h1 .line:nth-child(2) span{display:block;animation:slideUp .88s cubic-bezier(.4,0,.2,1) .34s both}
    .hero p{animation:fadeInUp .6s ease .52s both}
    .hero-buttons{animation:fadeInUp .6s ease .66s both}
  `;
  document.head.appendChild(s);
}


// ────────────────────────────────────────────
// 13. INIT ON DOM READY
// ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply background image from content.js
  applyBackground();

  // Translations
  applyTranslations();
  updateLangButtons();
  updateThemeButtons();

  // Render dynamic content from content.js
  renderDynamicContent();

  // Language button clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Theme toggle clicks
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Gallery close
  const galleryOverlay = document.getElementById('galleryOverlay');
  if (galleryOverlay) {
    galleryOverlay.addEventListener('click', e => { if (e.target === galleryOverlay) closeGallery(); });
    document.getElementById('galleryCloseBtn')?.addEventListener('click', closeGallery);
    document.getElementById('galleryPrevBtn')?.addEventListener('click', () => setGalleryPhoto(galleryCurrentPhoto - 1));
    document.getElementById('galleryNextBtn')?.addEventListener('click', () => setGalleryPhoto(galleryCurrentPhoto + 1));
  }

  // Video player close
  document.getElementById('videoPlayerClose')?.addEventListener('click', closeVideoPlayer);
  document.getElementById('videoPlayerOverlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('videoPlayerOverlay')) closeVideoPlayer();
  });
});

// ═══════════════════════════════════════════════
// ВИДЕОПЛЕЕР — модальное окно
// ═══════════════════════════════════════════════
function openVideoPlayer(url) {
  const overlay = document.getElementById('videoPlayerOverlay');
  const iframe  = document.getElementById('videoIframe');
  if (!overlay || !iframe) return;

  // Конвертируем обычную ссылку YouTube в embed
  let embedUrl = url
    .replace('watch?v=', 'embed/')
    .replace('youtu.be/', 'www.youtube.com/embed/')
    .replace('https://youtube.com/', 'https://www.youtube.com/')
    + '?autoplay=1&rel=0';

  iframe.src = embedUrl;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoPlayer() {
  const overlay = document.getElementById('videoPlayerOverlay');
  const iframe  = document.getElementById('videoIframe');
  if (overlay) overlay.classList.remove('open');
  if (iframe)  iframe.src = ''; // останавливает видео
  document.body.style.overflow = '';
}

// Video player close wired in main DOMContentLoaded below

// ═══════════════════════════════════════════════
// РЕНДЕР МЕРОПРИЯТИЙ (program.html)
// ═══════════════════════════════════════════════
function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  if (!grid || typeof SITE_CONTENT === 'undefined' || !SITE_CONTENT.events) return;

  grid.innerHTML = SITE_CONTENT.events.map((ev, i) => {
    const date  = ev[`date${cap(currentLang)}`]  || ev.dateRu;
    const title = ev[`title${cap(currentLang)}`] || ev.titleRu;
    const text  = ev[`text${cap(currentLang)}`]  || ev.textRu;
    const viewLabel = { ru: 'Смотреть →', kz: 'Қарау →', en: 'View →' };
    const photoCount = ev.photos?.length || 0;
    const videoCount = ev.videos?.length || 0;
    const delay = i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : '';
    const meta = [];
    if (photoCount) meta.push(`📷 ${photoCount}`);
    if (videoCount) meta.push(`🎬 ${videoCount}`);

    return `
    <div class="news-card reveal${delay}" style="cursor:pointer" data-event-index="${i}">
      <div class="news-img">${ev.emoji}</div>
      <div class="news-body">
        <div class="news-date">${date}${meta.length ? ' · ' + meta.join(' · ') : ''}</div>
        <h3>${title}</h3>
        <p>${text.substring(0, 120)}…</p>
        <div class="news-read-more">
          <span>${viewLabel[currentLang] || viewLabel.ru}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('[data-event-index]').forEach(card => {
    card.addEventListener('click', () => openEventModal(parseInt(card.dataset.eventIndex)));
  });
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Открыть модал мероприятия (photos + videos)
function openEventModal(idx) {
  const event = SITE_CONTENT.events[idx];
  if (!event) return;
  galleryCurrentEvent = event;
  galleryCurrentEvent._type = 'event';
  galleryCurrentPhoto = 0;

  const overlay = document.getElementById('galleryOverlay');
  if (!overlay) return;

  document.getElementById('galleryDate').textContent  = event[`date${cap(currentLang)}`]  || event.dateRu;
  document.getElementById('galleryTitle').textContent = event[`title${cap(currentLang)}`] || event.titleRu;
  document.getElementById('galleryText').textContent  = event[`text${cap(currentLang)}`]  || event.textRu;

  // Если есть видео — показываем раздел видео
  const videoSection = document.getElementById('galleryVideos');
  if (videoSection) {
    if (event.videos && event.videos.length > 0) {
      const playLabel = { ru: 'Смотреть видео', kz: 'Бейнені қарау', en: 'Watch video' };
      videoSection.innerHTML = `
        <div style="margin-top:18px;border-top:1px solid var(--border);padding-top:16px">
          <p style="font-size:.78rem;font-weight:700;color:var(--text-muted);letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px;">
            🎬 ${{ ru:'Видео', kz:'Бейнелер', en:'Videos' }[currentLang]}
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:9px">
            ${event.videos.map((v, vi) => `
              <button class="btn btn-outline" style="font-size:.8rem;padding:8px 16px" onclick="openVideoPlayer('${v}')">
                ▶ ${playLabel[currentLang]} ${event.videos.length > 1 ? vi + 1 : ''}
              </button>`).join('')}
          </div>
        </div>`;
      videoSection.style.display = 'block';
    } else {
      videoSection.innerHTML = '';
      videoSection.style.display = 'none';
    }
  }

  // Миниатюры фото
  const thumbs = document.getElementById('galleryThumbs');
  if (thumbs && event.photos && event.photos.length > 0) {
    thumbs.innerHTML = event.photos.map((src, i) =>
      `<div class="gallery-thumb${i === 0 ? ' active' : ''}" data-index="${i}">
         <img src="${src}" alt="" loading="lazy">
       </div>`).join('');
    thumbs.querySelectorAll('.gallery-thumb').forEach(th => {
      th.addEventListener('click', () => setGalleryPhoto(parseInt(th.dataset.index)));
    });
    showGalleryPhoto(0);
    document.getElementById('galleryPhotoSection').style.display = 'block';
  } else {
    document.getElementById('galleryPhotoSection').style.display = 'none';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ═══════════════════════════════════════════════
// РЕНДЕР ИИ-ИНСТРУМЕНТОВ (extras.html)
// ═══════════════════════════════════════════════
function renderAiTools() {
  const grid = document.getElementById('aiToolsGrid');
  if (!grid || typeof SITE_CONTENT === 'undefined' || !SITE_CONTENT.aiTools) return;

  const freeLabel = { ru: 'Бесплатно', kz: 'Тегін', en: 'Free' };
  const paidLabel = { ru: 'Платный',   kz: 'Ақылы', en: 'Paid' };
  const openLabel = { ru: 'Открыть',   kz: 'Ашу',   en: 'Open' };

  // Categories derived from tool name/tags for filtering
  const cats = (tool) => {
    const cats = [];
    const n = tool.name.toLowerCase(), tagE = (tool.tagEn || '').toLowerCase();
    if (['chatgpt','claude','grok','deepseek','perplexity'].includes(n) || tagE.includes('text')) cats.push('text');
    if (tagE.includes('code') || tagE.includes('ide') || n === 'github copilot' || n === 'bolt.new') cats.push('code');
    if (tagE.includes('image') || tagE.includes('art') || tagE.includes('design')) cats.push('image');
    if (tagE.includes('video') || tagE.includes('animation')) cats.push('video');
    return cats.join(',');
  };

  grid.innerHTML = SITE_CONTENT.aiTools.map((tool, i) => {
    const desc  = tool[`desc${cap(currentLang)}`] || tool.descRu;
    const tag   = tool[`tag${cap(currentLang)}`]  || tool.tagRu;
    const delay = (i % 4) > 0 ? ` reveal-delay-${i % 4}` : '';
    const toolCats = cats(tool);

    return `
    <div class="ai-tool-card reveal${delay}" data-free="${tool.free}" data-cats="${toolCats}">
      <div class="ai-tool-header">
        <div class="ai-tool-icon" style="background:${tool.color}22;border:1.5px solid ${tool.color}44">
          <span style="font-size:1.6rem">${tool.emoji}</span>
        </div>
        <div>
          <div class="ai-tool-name">${tool.name}</div>
          <div class="ai-tool-company">${tool.company}</div>
        </div>
        <span class="ai-tool-badge" style="${tool.free
          ? 'background:rgba(16,163,127,0.10);color:#10A37F;border-color:rgba(16,163,127,0.22)'
          : 'background:rgba(107,77,230,0.10);color:var(--violet);border-color:rgba(107,77,230,0.22)'}">
          ${tool.free ? freeLabel[currentLang] : paidLabel[currentLang]}
        </span>
      </div>
      <p class="ai-tool-desc">${desc}</p>
      <div class="ai-tool-footer">
        <span class="ai-tool-tags">${tag}</span>
        <a href="${tool.url}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:.78rem;padding:7px 14px">
          ${openLabel[currentLang]} ↗
        </a>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}
