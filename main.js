/* ══════════════════════════════════════════════════════
   SATURN SITE — main.js
   • Injects sticky progress nav
   • Scroll-reveal animations
   • Active chapter tracking
   ══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── 0. Inject nav stylesheet ───────────────────────────────────
  const navLink = document.createElement('link');
  navLink.rel = 'stylesheet';
  navLink.href = 'nav.css';
  document.head.appendChild(navLink);

  // ── 1. Build sticky nav ────────────────────────────────────────
  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.id = 'site-nav';
  nav.setAttribute('aria-label', 'Site navigation');
  nav.innerHTML = `
    <a href="#top" class="site-nav__brand" id="nav-brand">♄ Saturn</a>
    <div class="site-nav__right">
      <span class="site-nav__chapter" id="nav-chapter-label" aria-live="polite"></span>
      <svg class="progress-ring" viewBox="0 0 26 26" aria-hidden="true">
        <circle class="progress-ring__track" cx="13" cy="13" r="12"/>
        <circle class="progress-ring__fill" id="progress-fill" cx="13" cy="13" r="12"/>
      </svg>
    </div>
  `;
  document.body.prepend(nav);

  const NAV_HEIGHT = 56; // px — approximate; we compensate scroll targets

  // Fix anchor jumping so fixed nav doesn't obscure headings
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 24;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── 2. Progress ring ───────────────────────────────────────────
  const progressFill = document.getElementById('progress-fill');
  const CIRCUMFERENCE = 75.4; // 2π × 12

  function updateProgress() {
    const scrolled = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = Math.min(scrolled / totalHeight, 1);
    progressFill.style.strokeDashoffset = CIRCUMFERENCE * (1 - ratio);
  }

  // ── 3. Show / hide nav ─────────────────────────────────────────
  const heroEl = document.querySelector('.hero');
  function updateNav() {
    const heroBottom = heroEl ? heroEl.offsetHeight * 0.6 : 400;
    if (window.scrollY > heroBottom) {
      nav.classList.add('is-visible');
    } else {
      nav.classList.remove('is-visible');
    }
  }

  // ── 4. Chapter tracking ────────────────────────────────────────
  const chapters = Array.from(document.querySelectorAll('section[id]'));
  const chapterLabel = document.getElementById('nav-chapter-label');

  // Map chapter ids to readable labels
  const LABELS = {
    'ch-intro':       'Introduction',
    'ch-conspiracy':  'I — Conspiracy Theories',
    'ch-golden-age':  'II — The Golden Age',
    'ch-seventh':     'III — The Seventh Heaven',
    'ch-hyperborea':  'IV — Hyperborea',
    'ch-santa':       'V — Santa Claus?',
    'ch-titans':      'VI — Titans & Exile',
    'ch-mortal':      'VII — The Mortal Body',
    'ch-saturnalia':  'VIII — Saturnalia',
    'ch-satan':       'IX — Satan & the Serpent',
    'ch-abraham':     'X — Abraham & the Grail King',
    'ch-hero':        'XI — The Spiritual Hero',
    'ch-black-cube':  'XII — The Black Cube',
    'ch-chronos':     'XIII — Chronos & Apollo',
    'ch-conclusion':  'XIV — Conclusion',
  };

  function updateChapterLabel() {
    let current = chapters[0];
    for (const section of chapters) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= NAV_HEIGHT + 40) {
        current = section;
      }
    }
    if (current) {
      chapterLabel.textContent = LABELS[current.id] || '';
    }
  }

  // ── 5. Scroll-reveal observer ──────────────────────────────────
  const revealEls = document.querySelectorAll(
    '.chapter-header, .chapter-body > *, .info-card, .triad-item, .alc-stage, .planet-step, .tradition-item, .duality-side, .toc-card'
  );

  // Give each element a sequential stagger within its parent
  revealEls.forEach(function (el) {
    el.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Small staggered delay based on DOM order within parent
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = Math.min(idx * 60, 360) + 'ms';
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-8% 0px -8% 0px', threshold: 0.08 });

  revealEls.forEach(function (el) { revealObserver.observe(el); });

  // ── 6. Scroll handler ─────────────────────────────────────────
  function onScroll() {
    updateProgress();
    updateNav();
    updateChapterLabel();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // ── 7. Planetary ladder hover descriptions ─────────────────────
  const planetDescs = {
    'planet-saturn':  'Saturn — Seventh sphere, contemplation, the golden age, primordial being.',
    'planet-jupiter': 'Jupiter — Self-reflective consciousness, the demiurge, the active intellect.',
    'planet-mars':    'Mars — The sphere of will and conflict.',
    'planet-sun':     'Sol — Life-giving light, the solar hero archetype.',
    'planet-venus':   'Venus — Beauty and love.',
    'planet-mercury': 'Mercury — Communication, logic, language.',
    'planet-moon':    'Luna — Closest to Earth, change and flux, the sublunary.'
  };

  // Tooltip element
  const tooltip = document.createElement('div');
  tooltip.id = 'planet-tooltip';
  Object.assign(tooltip.style, {
    position: 'fixed',
    bottom: '1.5rem',
    left: '50%',
    transform: 'translateX(-50%) translateY(8px)',
    background: 'rgba(10, 10, 15, 0.92)',
    border: '1px solid rgba(200, 168, 74, 0.25)',
    color: '#ddd5c0',
    fontSize: '0.82rem',
    fontFamily: "'Inter', sans-serif",
    padding: '0.55rem 1.1rem',
    borderRadius: '6px',
    maxWidth: '340px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 0.25s, transform 0.25s',
    zIndex: '200',
    lineHeight: '1.5',
  });
  document.body.appendChild(tooltip);

  document.querySelectorAll('.planet-step').forEach(function (step) {
    step.style.cursor = 'default';
    step.addEventListener('mouseenter', function () {
      const desc = planetDescs[step.id] || '';
      if (!desc) return;
      tooltip.textContent = desc;
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'translateX(-50%) translateY(0)';
    });
    step.addEventListener('mouseleave', function () {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translateX(-50%) translateY(8px)';
    });
  });

  // ── 8. Chapter image loader ────────────────────────────────────
  //
  // Images start at opacity:0. Once the src loads we add .is-loaded
  // which fades it in and fades out the placeholder.
  // Works immediately on page load AND if you add an image later
  // by simply placing the file — the browser re-requests on reload.
  //
  document.querySelectorAll('.chapter-image img').forEach(function (img) {
    function markLoaded() {
      img.classList.add('is-loaded');
    }
    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else {
      img.addEventListener('load', markLoaded);
      // If the src path doesn't resolve, stay in placeholder state — do nothing on error
    }
  });

})();
