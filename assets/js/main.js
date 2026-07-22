/**
 * Golden Wings: Fifty Year Flight Path — Press Kit
 * main.js — Loads content from /content/*.json and renders all dynamic sections.
 *
 * To update any section content, edit the corresponding file in /content/.
 * No rebuild required — this script fetches at page load.
 */

/* ─── Utilities ─────────────────────────────────────────── */

/**
 * Fetch a JSON file. Returns parsed data or null on error.
 * @param {string} url
 * @returns {Promise<object|null>}
 */
async function fetchJSON(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.json();
  } catch (err) {
    console.warn(`[press-kit] Could not load ${url}:`, err.message);
    return null;
  }
}

/**
 * Escape HTML entities to prevent XSS when inserting user-supplied strings.
 * @param {string} str
 * @returns {string}
 */
function esc(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Replace el's innerHTML with markup, or show a fallback message.
 * @param {string} id
 * @param {string} markup
 * @param {string} [fallback]
 */
function render(id, markup, fallback = '<p class="loading-text">Content unavailable.</p>') {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = markup || fallback;
}


/* ─── Hero ──────────────────────────────────────────────── */

function renderHero(film) {
  if (!film) return;
  const loglineEl = document.getElementById('hero-logline');
  if (loglineEl && film.logline) {
    loglineEl.textContent = film.logline;
  }
}


/* ─── Synopsis ──────────────────────────────────────────── */

function renderSynopsis(data) {
  if (!data) {
    render('synopsis-content', '', '<p class="loading-text">Synopsis unavailable.</p>');
    return;
  }

  const shortParas = (data.short || '')
    .split('\n')
    .filter(Boolean)
    .map(p => `<p>${esc(p)}</p>`)
    .join('');

  const longParas = (data.long || '')
    .split('\n')
    .filter(Boolean)
    .map(p => `<p>${esc(p)}</p>`)
    .join('');

  const markup = `
    <div class="synopsis-column">
      <p class="synopsis-column-label">Short Synopsis</p>
      <div class="synopsis-text-short">${shortParas}</div>
    </div>
    <div class="synopsis-column">
      <p class="synopsis-column-label">Long Synopsis</p>
      <div class="synopsis-text-long">${longParas}</div>
    </div>
  `;

  render('synopsis-content', markup);
}


/* ─── Filmmaker ─────────────────────────────────────────── */

function renderFilmmaker(data) {
  if (!data) {
    render('filmmaker-content', '', '<p class="loading-text">Filmmaker bio unavailable.</p>');
    return;
  }

  // Photo or placeholder
  const photoMarkup = data.photo
    ? `<img class="filmmaker-photo" src="${esc(data.photo)}" alt="${esc(data.photoAlt || data.name)}" loading="lazy">`
    : `<div class="filmmaker-photo-placeholder">Photo<br>Coming<br>Soon</div>`;

  // Bio paragraphs
  const bioParas = Array.isArray(data.bio)
    ? data.bio.map(p => `<p>${esc(p)}</p>`).join('')
    : `<p>${esc(data.bio || '')}</p>`;

  // Previous work
  let prevMarkup = '';
  if (Array.isArray(data.previousWork) && data.previousWork.length > 0) {
    const items = data.previousWork
      .map(w => `<li class="filmmaker-previous-item"><strong>${esc(w.title)}</strong>${w.year ? ` (${esc(w.year)})` : ''} — ${esc(w.description || '')}</li>`)
      .join('');
    prevMarkup = `
      <div class="filmmaker-previous">
        <p class="filmmaker-previous-label">Previous Work</p>
        <ul class="filmmaker-previous-list">${items}</ul>
      </div>
    `;
  }

  const markup = `
    <div class="filmmaker-photo-wrap">
      ${photoMarkup}
    </div>
    <div class="filmmaker-bio">
      <h3 class="filmmaker-name">${esc(data.name || '')}</h3>
      <p class="filmmaker-company">${esc(data.company || '')}</p>
      ${bioParas}
      ${prevMarkup}
    </div>
  `;

  render('filmmaker-content', markup);
}


/* ─── Credits ───────────────────────────────────────────── */

function renderCredits(data) {
  if (!data) {
    render('credits-content', '', '<p class="loading-text">Credits unavailable.</p>');
    return;
  }

  // Key subjects
  const subjectsMarkup = Array.isArray(data.keySubjects) && data.keySubjects.length > 0
    ? data.keySubjects.map(s => `
        <div class="subject-card">
          <p class="subject-name">${esc(s.name)}</p>
          <p class="subject-role">${esc(s.role)}</p>
          <p class="subject-description">${esc(s.description)}</p>
        </div>
      `).join('')
    : '<p class="loading-text">No subjects listed yet.</p>';

  // Crew
  const crewMarkup = Array.isArray(data.crew) && data.crew.length > 0
    ? data.crew.map(c => `
        <div class="crew-row">
          <span class="crew-role">${esc(c.role)}</span>
          <span class="crew-name">${esc(c.name)}</span>
        </div>
      `).join('')
    : '<p class="loading-text">No crew listed yet.</p>';

  const markup = `
    <div class="credits-layout">
      <div>
        <p class="credits-block-label">Key Subjects</p>
        <div class="subjects-list">${subjectsMarkup}</div>
      </div>
      <div>
        <p class="credits-block-label">Crew</p>
        <div class="crew-list">${crewMarkup}</div>
      </div>
    </div>
  `;

  render('credits-content', markup);
}


/* ─── Laurels ───────────────────────────────────────────── */

function renderLaurels(data) {
  if (!data || !Array.isArray(data.laurels) || data.laurels.length === 0) {
    render('laurels-content', `
      <div class="laurels-empty">
        Festival selections and awards will appear here as the film screens.
      </div>
    `);
    return;
  }

  const cards = data.laurels.map(l => {
    const awardLine = l.award
      ? `<span class="laurel-award">${esc(l.award)}</span>`
      : '';
    const locationLine = l.location
      ? `<p class="laurel-location">${esc(l.location)}</p>`
      : '';
    return `
      <div class="laurel-card">
        <p class="laurel-year">${esc(l.year || '')}</p>
        <p class="laurel-festival">${esc(l.festival)}</p>
        ${locationLine}
        <p class="laurel-selection">${esc(l.selection || 'Official Selection')}</p>
        ${awardLine}
      </div>
    `;
  }).join('');

  render('laurels-content', cards);
}


/* ─── Press Assets ──────────────────────────────────────── */

function renderPress(data) {
  if (!data) {
    render('press-content', '', '<p class="loading-text">Press assets unavailable.</p>');
    return;
  }

  let markup = '<div class="press-layout">';

  /* — Trailer — */
  markup += '<div>';
  markup += '<p class="press-sub-label">Trailer</p>';
  markup += '<div class="press-trailer-wrap">';

  if (data.trailer && data.trailer.available && data.trailer.embedUrl) {
    markup += `<iframe
      src="${esc(data.trailer.embedUrl)}"
      title="Golden Wings: Fifty Year Flight Path — Official Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
    ></iframe>`;
  } else {
    markup += `
      <div class="press-trailer-placeholder">
        <div class="press-trailer-placeholder-icon" aria-hidden="true">▶</div>
        <p class="press-trailer-placeholder-text">Trailer Coming Soon</p>
      </div>
    `;
  }
  markup += '</div></div>';

  /* — Production Stills — */
  if (Array.isArray(data.stills) && data.stills.length > 0) {
    markup += '<div>';
    markup += '<p class="press-sub-label">Production Stills</p>';
    markup += '<div class="press-stills-grid">';

    data.stills.forEach(still => {
      markup += '<div class="still-card">';
      if (still.available) {
        markup += `<img src="${esc(still.path)}" alt="${esc(still.caption)}" loading="lazy">`;
      } else {
        markup += `<div class="still-placeholder" aria-label="Still image placeholder">Still Image<br>Coming Soon</div>`;
      }
      markup += '<div class="still-info">';
      markup += `<p class="still-caption">${esc(still.caption)}</p>`;
      if (still.credit) {
        markup += `<p class="still-credit">${esc(still.credit)}</p>`;
      }
      if (still.available) {
        markup += `<a href="${esc(still.path)}" class="still-download" download>↓ Download</a>`;
      }
      markup += '</div></div>';
    });

    markup += '</div></div>';
  }

  /* — Poster & EPK Downloads — */
  markup += '<div>';
  markup += '<p class="press-sub-label">Downloads</p>';
  markup += '<div class="press-downloads">';

  /* Poster card */
  markup += '<div class="press-download-card">';
  markup += '<p class="press-download-label">Film Poster</p>';
  markup += `<p class="press-download-title">${esc('Golden Wings: Fifty Year Flight Path')}</p>`;
  if (data.poster && data.poster.available) {
    markup += `<a href="${esc(data.poster.downloadPath || data.poster.path)}" class="btn btn-ghost" download>↓ Download Poster (Hi-Res)</a>`;
  } else {
    markup += `<p class="press-download-note">Poster artwork available upon request — contact us below.</p>`;
    markup += `<a href="#contact" class="btn btn-ghost">Request Poster</a>`;
  }
  markup += '</div>';

  /* EPK card */
  markup += '<div class="press-download-card">';
  markup += '<p class="press-download-label">Electronic Press Kit</p>';
  markup += `<p class="press-download-title">Full EPK (PDF)</p>`;
  if (data.epk && data.epk.available) {
    markup += `<a href="${esc(data.epk.path)}" class="btn btn-ghost" download>↓ Download EPK</a>`;
  } else {
    markup += `<p class="press-download-note">EPK available upon request — contact us below.</p>`;
    markup += `<a href="#contact" class="btn btn-ghost">Request EPK</a>`;
  }
  markup += '</div>';

  markup += '</div></div>';

  markup += '</div>'; /* .press-layout */
  render('press-content', markup);
}


/* ─── Navigation ────────────────────────────────────────── */

function initNav() {
  const nav    = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  // Scroll-based nav styling
  function onScroll() {
    const past = window.scrollY > 60;
    nav.classList.toggle('scrolled', past);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}


/* ─── Footer year ───────────────────────────────────────── */

function setYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}


/* ─── Entry point ───────────────────────────────────────── */

async function init() {
  initNav();
  setYear();

  // Load all content files in parallel
  const [film, synopsis, filmmaker, credits, laurels, press] = await Promise.all([
    fetchJSON('content/film.json'),
    fetchJSON('content/synopsis.json'),
    fetchJSON('content/filmmaker.json'),
    fetchJSON('content/credits.json'),
    fetchJSON('content/laurels.json'),
    fetchJSON('content/press.json'),
  ]);

  renderHero(film);
  renderSynopsis(synopsis);
  renderFilmmaker(filmmaker);
  renderCredits(credits);
  renderLaurels(laurels);
  renderPress(press);
}

document.addEventListener('DOMContentLoaded', init);
