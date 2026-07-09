// History app — feed, chronological timeline, and world map views.

const DB_KEY = 'history_v1';

let state = {
  view: 'feed',            // 'feed' | 'timeline' | 'map'
  era: 'all',              // 'all' | era id
  read: {},                // eventId -> true
  expanded: {},            // eventId -> true (detail open)
  selected: null,          // eventId shown under the map
  quiz: null,              // { a, b, revealed, chosen }
  quizStreak: 0,
  quizBest: 0,
  darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

function save() { localStorage.setItem(DB_KEY, JSON.stringify({ read: state.read, darkMode: state.darkMode, quizBest: state.quizBest })); }
function load() { try { Object.assign(state, JSON.parse(localStorage.getItem(DB_KEY) || '{}')); } catch {} }

function eraById(id) { return HISTORY_CONTENT.eras.find(e => e.id === id); }
function eventById(id) { return HISTORY_CONTENT.events.find(e => e.id === id); }
function eventsFor(eraId) {
  return eraId === 'all' ? HISTORY_CONTENT.events : HISTORY_CONTENT.events.filter(ev => ev.era === eraId);
}
function readCount() { return Object.keys(state.read).length; }
function geo(id) { return (typeof HISTORY_GEO !== 'undefined' && HISTORY_GEO[id]) || { year: 0, lat: 0, lng: 0, place: '' }; }

// muted, earthy per-era colours for timeline/map dots
const ERA_COLOR = {
  ancient: '#b8532a', medieval: '#7a5230', exploration: '#3f6f6f',
  revolutions: '#9a6a1e', modern: '#4a5a86', curveball: '#8a4a6a', mythology: '#6a4aa0',
};

function yearLabel(y) { return y < 0 ? (-y) + ' BC' : y + ''; }

// Wikimedia Commons public-domain image via stable Special:FilePath URL
function imgUrl(file, w = 900) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;
}
const MAP_IMAGE = 'Equirectangular_projection_SW.jpg';   // full plate-carrée world map

const icons = {
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>`,
};

function render() {
  document.getElementById('app').innerHTML = buildPage();
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
}

function buildPage() {
  const eras = [...HISTORY_CONTENT.eras].sort((a, b) => a.order - b.order);
  const total = HISTORY_CONTENT.events.length;
  const views = [['feed', 'Feed'], ['timeline', 'Timeline'], ['map', 'Map'], ['quiz', 'Quiz']];

  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="../../index.html" class="nav-logo">${icons.back} <span>History</span></a>
        <button class="btn btn-ghost btn-sm" onclick="toggleDark()">${state.darkMode ? icons.sun : icons.moon}</button>
      </div>
    </nav>

    <main class="main-content container">
      <div class="animate-in">
        <div style="padding:12px 0 6px">
          <div class="display" style="font-size:2.5rem;line-height:0.95">History,<br>one card<br>at a time.</div>
          <p class="text-sm mt-3" style="color:var(--text-muted)">A scroll worth having. ${readCount()}/${total} read.</p>
        </div>

        <!-- view toggle -->
        <div style="display:flex;gap:6px;background:var(--surface2);padding:4px;border-radius:100px;margin:16px 0 12px">
          ${views.map(([v, label]) => `
            <button onclick="setView('${v}')" style="flex:1;border:none;cursor:pointer;font-family:var(--font);font-weight:700;font-size:0.76rem;padding:9px 2px;border-radius:100px;transition:all 0.15s;background:${state.view === v ? 'var(--accent)' : 'transparent'};color:${state.view === v ? '#fff' : 'var(--text-muted)'}">${label}</button>
          `).join('')}
        </div>

        <!-- era selector -->
        <div style="display:flex;gap:8px;overflow-x:auto;padding:6px 0 18px;scrollbar-width:none">
          <button class="chip ${state.era === 'all' ? 'active' : ''}" style="flex-shrink:0" onclick="setEra('all')">All eras</button>
          ${eras.map(e => `<button class="chip ${state.era === e.id ? 'active' : ''}" style="flex-shrink:0" onclick="setEra('${e.id}')">${e.name}</button>`).join('')}
        </div>

        ${state.view === 'feed' ? buildFeed() : state.view === 'timeline' ? buildTimeline() : state.view === 'map' ? buildMap() : buildQuiz()}

        <div class="ink-divider"></div>
        <p class="text-center text-xs text-faint mb-4">Learn something. Then close the app.</p>
      </div>
    </main>
  `;
}

// ─── FEED ─────────────────────────────────────────────────────────────────────
function buildFeed() {
  const list = eventsFor(state.era);
  return `
    ${state.era !== 'all' ? eraHeader(state.era) : ''}
    <div class="flex flex-col gap-4">
      ${list.map(ev => buildEventCard(ev)).join('')}
    </div>
  `;
}

function eraHeader(id) {
  const e = eraById(id);
  return `
    <div class="card mb-4" style="border-left:4px solid var(--accent)">
      <div class="text-xs" style="color:var(--accent);font-weight:700;letter-spacing:0.04em;text-transform:uppercase">${e.range}</div>
      <h2 class="mt-1 mb-1">${e.name}</h2>
      <p class="text-sm" style="color:var(--text-muted)">${e.blurb}</p>
    </div>
  `;
}

function buildEventCard(ev) {
  const era = eraById(ev.era);
  const open = state.expanded[ev.id];
  return `
    <div class="card evt-card" id="card-${ev.id}">
      <div class="evt-media">
        <div class="evt-fallback">
          <div class="text-xs" style="color:var(--accent);font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:6px">${era.name}</div>
          <div class="display" style="font-size:1.4rem;line-height:1.05;color:var(--ink)">${ev.title}</div>
        </div>
        <img src="${imgUrl(ev.image)}" alt="${ev.caption || ev.title}" loading="lazy"
             onload="this.style.opacity=1" onerror="this.remove()">
        <span class="evt-date-badge">${ev.date}</span>
      </div>

      <div class="evt-body">
        <div class="text-xs" style="color:var(--accent);font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:6px">${era.name}</div>
        <h2 style="font-size:1.3rem;margin-bottom:6px">${ev.title}</h2>
        <p class="text-sm" style="color:var(--text-muted);line-height:1.6">${ev.blurb}</p>
        ${ev.caption ? `<p class="text-xs text-faint mt-2" style="font-style:italic">${ev.caption}</p>` : ''}

        ${open && ev.detail ? `
          <div class="animate-in" style="margin-top:14px;padding-top:16px;border-top:1px solid var(--border)">
            ${ev.detail.trim().split(/\n\n+/).map(p => `<p class="text-sm" style="line-height:1.75;margin-bottom:12px">${p.trim()}</p>`).join('')}
          </div>
        ` : ''}

        <div class="flex items-center justify-between mt-4">
          ${ev.tags && ev.tags.length ? `<div class="flex gap-2" style="flex-wrap:wrap">${ev.tags.map(t => `<span class="badge badge-primary">${t}</span>`).join('')}</div>` : '<span></span>'}
          ${ev.detail ? `
            <button class="btn btn-ghost btn-sm" style="color:var(--accent)" onclick="toggleDetail('${ev.id}')">
              ${open ? 'Show less' : 'Tell me more'}
              <span style="display:inline-flex;transform:rotate(${open ? 180 : 0}deg);transition:transform 0.2s">${icons.chevron}</span>
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
function buildTimeline() {
  const list = eventsFor(state.era).slice().sort((a, b) => geo(a.id).year - geo(b.id).year);
  return `
    ${state.era !== 'all' ? eraHeader(state.era) : ''}
    <div style="position:relative;padding-left:22px">
      <div style="position:absolute;left:5px;top:6px;bottom:6px;width:2px;background:var(--border)"></div>
      ${list.map(ev => {
        const open = state.expanded[ev.id];
        const c = ERA_COLOR[ev.era] || 'var(--accent)';
        return `
          <div style="position:relative;margin-bottom:14px">
            <div style="position:absolute;left:-22px;top:5px;width:12px;height:12px;border-radius:50%;background:${c};box-shadow:0 0 0 3px var(--bg)"></div>
            <div class="card" style="padding:14px 16px;cursor:pointer" onclick="toggleDetail('${ev.id}')">
              <div class="flex items-center justify-between gap-3">
                <div style="flex:1;min-width:0">
                  <div class="display" style="font-size:0.78rem;color:${c};letter-spacing:0.02em">${yearLabel(geo(ev.id).year)}</div>
                  <div class="font-bold" style="font-size:1rem;line-height:1.2;margin-top:2px">${ev.title}</div>
                </div>
                <span style="color:var(--text-faint);transform:rotate(${open ? 180 : 0}deg);transition:transform 0.2s">${icons.chevron}</span>
              </div>
              ${open ? `
                <div class="animate-in" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)" onclick="event.stopPropagation()">
                  <p class="text-sm" style="color:var(--text-muted);line-height:1.6;margin-bottom:10px">${ev.blurb}</p>
                  ${(ev.detail || '').trim().split(/\n\n+/).map(p => `<p class="text-sm" style="line-height:1.75;margin-bottom:12px">${p.trim()}</p>`).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ─── MAP ──────────────────────────────────────────────────────────────────────
function buildMap() {
  const list = eventsFor(state.era);
  const pins = list.map(ev => {
    const g = geo(ev.id);
    const left = ((g.lng + 180) / 360) * 100;
    const top = ((90 - g.lat) / 180) * 100;
    const c = ERA_COLOR[ev.era] || 'var(--accent)';
    const active = state.selected === ev.id;
    return `<button title="${ev.title}" onclick="selectEvent('${ev.id}')"
      style="position:absolute;left:${left.toFixed(2)}%;top:${top.toFixed(2)}%;transform:translate(-50%,-50%);
      width:${active ? 16 : 11}px;height:${active ? 16 : 11}px;border-radius:50%;border:2px solid #fff;
      background:${c};cursor:pointer;padding:0;z-index:${active ? 3 : 2};box-shadow:0 1px 3px rgba(0,0,0,0.4)"></button>`;
  }).join('');

  const sel = state.selected ? eventById(state.selected) : null;

  return `
    ${state.era !== 'all' ? eraHeader(state.era) : ''}
    <div class="card" style="padding:8px">
      <div style="position:relative;width:100%;aspect-ratio:2/1;border-radius:10px;overflow:hidden;background:var(--surface2)">
        <img src="${imgUrl(MAP_IMAGE, 1280)}" alt="world map" loading="lazy"
             style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(0.85) brightness(1.05);opacity:0.55"
             onerror="this.remove()">
        ${pins}
      </div>
      <p class="text-xs text-faint mt-2 text-center">Tap a marker to open its story.</p>
    </div>

    <div style="margin-top:16px">
      ${sel ? buildEventCard((state.expanded[sel.id] = true, sel)) : `
        <div class="card text-center" style="padding:26px 20px">
          <p class="text-sm" style="color:var(--text-muted)">Pick a marker above to read about what happened there.</p>
        </div>`}
    </div>
  `;
}

// ─── QUIZ: "Which came first?" ──────────────────────────────────────────────
function newQuiz() {
  const pool = HISTORY_CONTENT.events.filter(e => e.era !== 'mythology' && HISTORY_GEO[e.id]);
  let a, b, guard = 0;
  do {
    a = pool[Math.floor(Math.random() * pool.length)];
    b = pool[Math.floor(Math.random() * pool.length)];
  } while ((++guard < 50) && (!a || !b || a.id === b.id || geo(a.id).year === geo(b.id).year));
  state.quiz = { a: a.id, b: b.id, revealed: false, chosen: null };
}

function buildQuiz() {
  const q = state.quiz;
  if (!q) return '';
  const a = eventById(q.a), b = eventById(q.b);
  const earlier = geo(a.id).year < geo(b.id).year ? a.id : b.id;

  const opt = (ev) => {
    const isEarlier = ev.id === earlier;
    let border = 'var(--border)';
    if (q.revealed) border = isEarlier ? 'var(--success)' : (q.chosen === ev.id ? 'var(--seal)' : 'var(--border)');
    return `
      <button onclick="answerQuiz('${ev.id}')" ${q.revealed ? 'disabled' : ''}
        style="text-align:left;width:100%;border:2px solid ${border};background:var(--surface);border-radius:var(--radius);padding:0;overflow:hidden;cursor:${q.revealed ? 'default' : 'pointer'}">
        <div style="height:104px;position:relative;background:var(--accent-light)">
          <img src="${imgUrl(ev.image, 500)}" alt="${ev.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover" onerror="this.remove()">
        </div>
        <div style="padding:12px 13px">
          <div class="text-xs" style="color:var(--accent);font-weight:700;text-transform:uppercase;letter-spacing:0.03em;margin-bottom:4px">${eraById(ev.era).name}</div>
          <div class="font-bold" style="font-size:0.98rem;line-height:1.2">${ev.title}</div>
          ${q.revealed ? `<div class="display" style="margin-top:6px;font-size:0.95rem;color:${isEarlier ? 'var(--success)' : 'var(--text-muted)'}">${yearLabel(geo(ev.id).year)}</div>` : ''}
        </div>
      </button>`;
  };

  const gotIt = q.revealed && q.chosen === earlier;
  return `
    <div class="flex items-center justify-between mb-3">
      <h2 style="font-size:1.15rem">Which came first?</h2>
      <div class="text-sm" style="color:var(--text-muted)">Streak <b style="color:var(--accent)">${state.quizStreak}</b> · Best ${state.quizBest}</div>
    </div>
    <div class="grid-2" style="gap:12px;align-items:start">
      ${opt(a)}${opt(b)}
    </div>
    ${q.revealed ? `
      <div class="card mt-4 ${gotIt ? 'animate-pop' : 'animate-shake'}" style="text-align:center;border:2px solid ${gotIt ? 'var(--success)' : 'var(--seal)'}">
        <div class="font-bold" style="color:${gotIt ? 'var(--success)' : 'var(--seal)'};font-size:1.05rem">${gotIt ? 'Correct!' : 'Not quite'}</div>
        <p class="text-sm mt-1" style="color:var(--text-muted)">${eventById(earlier).title} came first — ${yearLabel(geo(earlier).year)}.</p>
        <button class="btn btn-primary btn-full mt-3" onclick="nextQuiz()">Next question</button>
      </div>
    ` : `<p class="text-center text-sm text-faint mt-4">Tap the one you think happened earlier.</p>`}
  `;
}

function answerQuiz(id) {
  const q = state.quiz;
  if (!q || q.revealed) return;
  q.chosen = id; q.revealed = true;
  const earlier = geo(q.a).year < geo(q.b).year ? q.a : q.b;
  if (id === earlier) {
    state.quizStreak++;
    if (state.quizStreak > state.quizBest) state.quizBest = state.quizStreak;
  } else {
    state.quizStreak = 0;
  }
  save();
  render();
}
function nextQuiz() { newQuiz(); render(); window.scrollTo(0, 0); }

// ─── Handlers ─────────────────────────────────────────────────────────────────
function setView(v) {
  state.view = v;
  if (v === 'quiz' && !state.quiz) newQuiz();
  render(); window.scrollTo(0, 0);
}
function setEra(id) { state.era = id; state.selected = null; render(); window.scrollTo(0, 0); }
function toggleDark() { state.darkMode = !state.darkMode; save(); render(); }

function toggleDetail(id) {
  state.expanded[id] = !state.expanded[id];
  if (state.expanded[id]) { state.read[id] = true; save(); }
  render();
  const el = document.getElementById('card-' + id) || document.querySelector(`[onclick="toggleDetail('${id}')"]`);
  if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' });
}

function selectEvent(id) {
  state.selected = id;
  state.expanded[id] = true;
  state.read[id] = true; save();
  render();
  const el = document.getElementById('card-' + id);
  if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
load();
render();
