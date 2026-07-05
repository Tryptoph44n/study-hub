// History timeline app — browsable, era-filtered feed of history cards.

const DB_KEY = 'history_v1';

let state = {
  era: 'all',              // 'all' | era id
  read: {},                // eventId -> true (marked/expanded)
  expanded: {},            // eventId -> true (detail open)
  darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

function save() { localStorage.setItem(DB_KEY, JSON.stringify({ read: state.read, darkMode: state.darkMode })); }
function load() { try { Object.assign(state, JSON.parse(localStorage.getItem(DB_KEY) || '{}')); } catch {} }

function eraById(id) { return HISTORY_CONTENT.eras.find(e => e.id === id); }
function eventsFor(eraId) {
  return eraId === 'all' ? HISTORY_CONTENT.events : HISTORY_CONTENT.events.filter(ev => ev.era === eraId);
}
function readCount() { return Object.keys(state.read).length; }

// Wikimedia Commons public-domain image via stable Special:FilePath URL
function imgUrl(file) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=900`;
}

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
  const list = eventsFor(state.era);
  const total = HISTORY_CONTENT.events.length;

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

        <!-- era selector -->
        <div style="display:flex;gap:8px;overflow-x:auto;padding:14px 0 18px;scrollbar-width:none">
          <button class="chip ${state.era === 'all' ? 'active' : ''}" style="flex-shrink:0" onclick="setEra('all')">All eras</button>
          ${eras.map(e => `<button class="chip ${state.era === e.id ? 'active' : ''}" style="flex-shrink:0" onclick="setEra('${e.id}')">${e.name}</button>`).join('')}
        </div>

        ${state.era !== 'all' ? `
          <div class="card mb-4" style="border-left:4px solid var(--accent)">
            <div class="text-xs" style="color:var(--accent);font-weight:700;letter-spacing:0.04em;text-transform:uppercase">${eraById(state.era).range}</div>
            <h2 class="mt-1 mb-1">${eraById(state.era).name}</h2>
            <p class="text-sm" style="color:var(--text-muted)">${eraById(state.era).blurb}</p>
          </div>
        ` : ''}

        <div class="flex flex-col gap-4">
          ${list.map(buildEventCard).join('')}
        </div>

        <div class="ink-divider"></div>
        <p class="text-center text-xs text-faint mb-4">Learn something. Then close the app.</p>
      </div>
    </main>
  `;
}

function buildEventCard(ev) {
  const era = eraById(ev.era);
  const open = state.expanded[ev.id];
  const isRead = state.read[ev.id];
  return `
    <div class="card evt-card">
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

// ─── Handlers ─────────────────────────────────────────────────────────────────
function setEra(id) { state.era = id; render(); window.scrollTo(0, 0); }
function toggleDetail(id) {
  state.expanded[id] = !state.expanded[id];
  if (state.expanded[id]) { state.read[id] = true; save(); }
  render();
  // keep the tapped card roughly in view
  const el = document.querySelector(`[onclick="toggleDetail('${id}')"]`);
  if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' });
}
function toggleDark() { state.darkMode = !state.darkMode; save(); render(); }

// ─── Init ─────────────────────────────────────────────────────────────────────
load();
render();
