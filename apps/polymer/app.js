// Polymer Chemistry Study App — Main Logic

const DB_KEY = 'polymer_study_v1';

let state = {
  tab: 'path',
  progress: {},        // conceptId -> { read, mastered, lastSeen }
  darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  concept: null,       // open concept
  conceptView: 'learn',// learn | quiz
  openModule: null,    // expanded module in path view
  quizState: null,
};

// ─── Persistence ──────────────────────────────────────────────────────────────
function save() {
  localStorage.setItem(DB_KEY, JSON.stringify({ progress: state.progress, darkMode: state.darkMode }));
}
function load() {
  try { Object.assign(state, JSON.parse(localStorage.getItem(DB_KEY) || '{}')); } catch {}
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function conceptsOf(moduleId) { return POLYMER_CONTENT.concepts.filter(c => c.module === moduleId); }
function readCount() { return Object.values(state.progress).filter(p => p.read).length; }
function masteredCount() { return Object.values(state.progress).filter(p => p.mastered).length; }
function totalConcepts() { return POLYMER_CONTENT.concepts.length; }
function moduleProgress(moduleId) {
  const cs = conceptsOf(moduleId);
  const done = cs.filter(c => state.progress[c.id]?.read).length;
  return { done, total: cs.length, pct: Math.round((done / cs.length) * 100) };
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const icons = {
  path: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M6 16V8a4 4 0 014-4h4"/></svg>`,
  terms: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
  progress: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  prof: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
};

// ─── Render ───────────────────────────────────────────────────────────────────
function render() {
  document.getElementById('app').innerHTML = buildPage();
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
}

function buildPage() {
  if (state.concept) return buildConceptPage();

  const tabs = { path: buildPath, terms: buildTerms, progress: buildProgress };
  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="../../index.html" class="nav-logo">${icons.back} <span class="jp">高分子化学</span></a>
        <button class="btn btn-ghost btn-sm" onclick="toggleDark()">${state.darkMode ? icons.sun : icons.moon}</button>
      </div>
    </nav>
    <main class="main-content container">
      ${(tabs[state.tab] || buildPath)()}
    </main>
    <nav class="tab-nav">
      ${[
        { tab: 'path', label: 'Learn', icon: icons.path },
        { tab: 'terms', label: 'Terms', icon: icons.terms },
        { tab: 'progress', label: 'Progress', icon: icons.progress },
      ].map(t => `
        <button class="tab-item ${state.tab === t.tab ? 'active' : ''}" onclick="navigate('${t.tab}')">
          ${t.icon} ${t.label}
        </button>
      `).join('')}
    </nav>
  `;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function buildHero() {
  const read = readCount(), total = totalConcepts();
  return `
    <div class="card" style="padding:0;overflow:hidden;position:relative;border-color:var(--border-strong)">
      <svg viewBox="0 0 700 180" preserveAspectRatio="xMidYMid slice" style="width:100%;height:120px;display:block">
        <defs>
          <linearGradient id="ppaper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--surface)"/><stop offset="100%" stop-color="var(--surface2)"/>
          </linearGradient>
          <radialGradient id="pblot" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stop-color="var(--ink)" stop-opacity="0.13"/><stop offset="100%" stop-color="var(--ink)" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="700" height="180" fill="url(#ppaper)"/>
        <ellipse cx="540" cy="60" rx="170" ry="70" fill="url(#pblot)"/>
        <!-- polymer chain motif: repeating zig-zag with pendant nodes -->
        <g stroke="var(--ink)" stroke-width="3.5" fill="none" opacity="0.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M30 110 L70 80 L110 110 L150 80 L190 110 L230 80 L270 110 L310 80 L350 110"/>
        </g>
        <g fill="var(--accent)" opacity="0.95">
          <circle cx="70" cy="80" r="5"/><circle cx="150" cy="80" r="5"/><circle cx="230" cy="80" r="5"/><circle cx="310" cy="80" r="5"/>
        </g>
        <!-- Li+ ion hopping suggestion -->
        <g fill="var(--seal)" opacity="0.6">
          <circle cx="110" cy="60" r="3.5"/><circle cx="190" cy="55" r="3.5"/>
        </g>
        <text x="650" y="60" font-family="var(--font-jp)" font-size="40" fill="var(--ink)" opacity="0.9" text-anchor="middle">鎖</text>
        <text x="650" y="100" font-family="var(--font-jp)" font-size="18" fill="var(--text-muted)" text-anchor="middle">高分子</text>
      </svg>
      <div class="seal-mark" style="top:auto;bottom:10px;right:14px">学</div>
    </div>
  `;
}

// ─── Path (module list) ─────────────────────────────────────────────────────
function buildPath() {
  const modules = [...POLYMER_CONTENT.modules].sort((a, b) => a.order - b.order);
  const read = readCount(), total = totalConcepts();
  const pct = Math.round((read / total) * 100);

  return `
    <div class="animate-in">
      ${buildHero()}
      <div class="mt-4 mb-2">
        <h1 class="jp animate-ink">高分子化学</h1>
        <p class="text-muted text-sm mt-1">Polymer Chemistry — from first principles to battery materials.</p>
      </div>

      <div class="card mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium">Your foundation</span>
          <span class="text-sm text-muted">${read}/${total} concepts</span>
        </div>
        <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>
        <p class="text-xs text-muted mt-2">${pct}% — ${masteredCount()} mastered ${icons.check ? '' : ''}</p>
      </div>

      <div class="flex flex-col gap-3">
        ${modules.map(m => {
          const mp = moduleProgress(m.id);
          const open = state.openModule === m.id;
          return `
            <div class="card" style="padding:0;overflow:hidden">
              <div class="flex items-center justify-between p-4" style="cursor:pointer" onclick="toggleModule('${m.id}')">
                <div class="flex items-center gap-3">
                  <div style="font-size:1.6rem">${m.icon}</div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs text-muted display">第${m.order}章</span>
                      ${mp.pct === 100 ? `<span class="badge badge-success">${icons.check} done</span>` : ''}
                    </div>
                    <h3 class="jp">${m.titleJp}</h3>
                    <p class="text-xs text-muted">${m.title}</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-muted">${mp.done}/${mp.total}</span>
                  <span style="transform:rotate(${open ? 180 : 0}deg);transition:transform 0.2s;color:var(--text-muted)">${icons.chevron}</span>
                </div>
              </div>
              <div style="height:3px;background:var(--surface2)"><div style="height:100%;width:${mp.pct}%;background:var(--accent);transition:width 0.4s"></div></div>
              ${open ? `
                <div class="animate-in" style="border-top:1px solid var(--border)">
                  <p class="text-sm text-muted p-4" style="padding-bottom:8px">${m.desc}</p>
                  ${conceptsOf(m.id).map((c, i) => {
                    const done = state.progress[c.id]?.read;
                    const mastered = state.progress[c.id]?.mastered;
                    return `
                      <div class="flex items-center justify-between" style="padding:12px 16px;cursor:pointer;border-top:1px solid var(--border)" onclick="openConcept('${c.id}')">
                        <div class="flex items-center gap-3">
                          <div style="width:26px;height:26px;border-radius:50%;border:1.5px solid ${done ? 'var(--accent)' : 'var(--border-strong)'};background:${done ? 'var(--accent)' : 'transparent'};color:${done ? '#fff' : 'var(--text-faint)'};display:flex;align-items:center;justify-content:center;font-size:0.75rem;flex-shrink:0">
                            ${done ? icons.check : (i + 1)}
                          </div>
                          <div>
                            <p class="font-medium text-sm">${c.title}</p>
                            <p class="text-xs text-muted jp">${c.titleJp}</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          ${mastered ? `<span class="badge badge-warning">★ mastered</span>` : ''}
                          <span style="color:var(--text-faint)">${icons.arrow}</span>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>

      <div class="ink-divider"></div>
      <p class="text-center text-xs text-faint jp mb-4">継続は力なり — Persistence is power.</p>
    </div>
  `;
}

// ─── Concept Page ─────────────────────────────────────────────────────────────
function buildConceptPage() {
  const c = state.concept;
  if (state.conceptView === 'quiz') return buildConceptQuiz();

  const mod = POLYMER_CONTENT.modules.find(m => m.id === c.module);
  const done = state.progress[c.id]?.read;

  return `
    <nav class="nav">
      <div class="nav-inner">
        <button class="btn btn-ghost btn-sm" onclick="closeConcept()">${icons.back} Back</button>
        <span class="badge badge-primary">${mod.icon} ${mod.title}</span>
      </div>
    </nav>
    <main class="main-content container">
      <div class="animate-in">
        <div class="mb-1">
          <span class="badge ${c.level === 1 ? 'badge-success' : c.level === 2 ? 'badge-warning' : 'badge-seal'}">
            ${c.level === 1 ? 'Foundational' : c.level === 2 ? 'Intermediate' : 'Advanced'}
          </span>
        </div>
        <h1 class="mt-2">${c.title}</h1>
        <p class="jp text-muted">${c.titleJp}</p>

        <div class="ink-divider"></div>

        <!-- Intro -->
        ${section('はじめに  Intuition', c.intro)}

        <!-- Principle -->
        ${section('原理  The Principle', c.principle + (c.principleExtra ? '' : ''))}

        <!-- Equations -->
        ${c.equations ? `
          <h2 class="mb-3 mt-6">Key Equations</h2>
          <div class="flex flex-col gap-2 mb-2">
            ${c.equations.map(e => `
              <div class="card bg-surface2">
                <div class="text-xs text-muted mb-1">${e.label}</div>
                <div class="display" style="font-size:1.1rem;letter-spacing:0.02em">${e.expr}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Deep dive -->
        ${section('掘り下げ  Going Deeper', c.deepDive)}

        <!-- Professor mode -->
        <div class="card mt-6 mb-6" style="border-color:var(--seal);border-left:3px solid var(--seal);background:var(--seal-light)">
          <div class="flex items-center gap-2 mb-2" style="color:var(--seal)">
            ${icons.prof} <h3>教授モード — Answering Your Professor</h3>
          </div>
          <p class="text-sm" style="line-height:1.7">${c.professorMode}</p>
        </div>

        <!-- Exam Q&A -->
        <h2 class="mb-3">Exam-Style Q&A</h2>
        <div class="flex flex-col gap-2 mb-6">
          ${c.examQA.map((qa, i) => `
            <div class="card" style="cursor:pointer" onclick="toggleQA(${i})">
              <div class="flex justify-between items-start gap-2">
                <p class="font-medium text-sm">Q${i + 1}. ${qa.q}</p>
                <span style="color:var(--text-faint);flex-shrink:0">${icons.chevron}</span>
              </div>
              <div id="qa-${i}" class="hidden mt-3" style="border-top:1px solid var(--border);padding-top:12px">
                <p class="text-sm text-muted" style="line-height:1.7"><strong>A.</strong> ${qa.a}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="flex flex-col gap-3">
          <button class="btn btn-primary btn-full btn-lg" onclick="startConceptQuiz()">
            Test yourself (${c.examQA.length} questions)
          </button>
          ${done
            ? `<div class="card text-center" style="border-color:var(--success);background:var(--success-light)"><p style="color:var(--success)">${icons.check} Concept completed</p></div>`
            : `<button class="btn btn-secondary btn-full" onclick="markRead('${c.id}')">Mark as read ✓</button>`
          }
          ${nextConceptButton(c)}
        </div>
      </div>
    </main>
  `;
}

function section(title, body) {
  return `
    <h2 class="mb-3 mt-6">${title}</h2>
    <div class="card">${mdToHtml(body)}</div>
  `;
}

function nextConceptButton(c) {
  const all = POLYMER_CONTENT.concepts;
  const idx = all.findIndex(x => x.id === c.id);
  if (idx < 0 || idx + 1 >= all.length) return '';
  const next = all[idx + 1];
  return `<button class="btn btn-ghost btn-full" onclick="openConcept('${next.id}')">Next: ${next.title} ${icons.arrow}</button>`;
}

// Minimal markdown: **bold**, • bullets, line breaks
function mdToHtml(text) {
  const lines = text.split('\n');
  let html = '', inList = false;
  for (let line of lines) {
    line = line.trim();
    let processed = line
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    if (line.startsWith('•') || line.startsWith('-') || /^\d+\./.test(line)) {
      if (!inList) { html += '<ul style="margin:8px 0;padding-left:18px;display:flex;flex-direction:column;gap:6px">'; inList = true; }
      processed = processed.replace(/^[•\-]\s*/, '').replace(/^\d+\.\s*/, '');
      html += `<li style="line-height:1.65;font-size:0.92rem">${processed}</li>`;
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      if (line) html += `<p style="line-height:1.7;margin:6px 0;font-size:0.92rem">${processed}</p>`;
    }
  }
  if (inList) html += '</ul>';
  return html;
}

// ─── Concept Quiz ─────────────────────────────────────────────────────────────
function buildConceptQuiz() {
  const { questions, index, revealed, finished } = state.quizState;
  if (finished) return buildQuizResults();
  const q = questions[index];

  return `
    <nav class="nav">
      <div class="nav-inner">
        <button class="btn btn-ghost btn-sm" onclick="exitQuiz()">${icons.back} Exit</button>
        <span class="text-sm text-muted">${index + 1} / ${questions.length}</span>
      </div>
    </nav>
    <main class="main-content container">
      <div class="animate-in">
        <div class="progress mb-6"><div class="progress-fill" style="width:${(index / questions.length) * 100}%"></div></div>
        <div class="card card-lg mb-4">
          <div class="badge badge-seal mb-3">${icons.prof} Recall question</div>
          <p class="font-medium text-lg" style="line-height:1.6">${q.q}</p>
          <p class="text-sm text-muted mt-3">Think through your full answer, then reveal to self-check.</p>
        </div>
        ${revealed ? `
          <div class="card animate-in" style="border-color:var(--success);background:var(--success-light)">
            <div class="text-xs font-bold mb-2" style="color:var(--success)">MODEL ANSWER</div>
            <p class="text-sm" style="line-height:1.7">${q.a}</p>
          </div>
          <div class="card mt-4">
            <p class="text-sm font-medium mb-3 text-center">How did you do?</p>
            <div class="grid-2">
              <button class="btn btn-secondary" onclick="gradeAnswer(false)">Need review</button>
              <button class="btn btn-gold" onclick="gradeAnswer(true)">Got it ✓</button>
            </div>
          </div>
        ` : `
          <button class="btn btn-primary btn-full btn-lg" onclick="revealAnswer()">Reveal model answer</button>
        `}
      </div>
    </main>
  `;
}

function buildQuizResults() {
  const { correct, questions, conceptId } = state.quizState;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const mastered = pct >= 70;

  state.progress[conceptId] = { ...state.progress[conceptId], read: true, mastered: mastered || state.progress[conceptId]?.mastered, lastSeen: Date.now() };
  save();

  return `
    <nav class="nav"><div class="nav-inner"><button class="btn btn-ghost btn-sm" onclick="closeConcept()">${icons.back} Back to path</button></div></nav>
    <main class="main-content container">
      <div class="animate-in text-center">
        <div style="font-size:3.5rem;margin:24px 0">${pct >= 70 ? '🎓' : '📖'}</div>
        <h1>${pct >= 70 ? 'Mastered!' : 'Keep building'}</h1>
        <p class="text-muted mt-2">You marked ${correct}/${total} as confident</p>
        <div class="card mt-6 mb-4" style="border-color:${mastered ? 'var(--accent)' : 'var(--border)'}">
          <div class="text-2xl font-bold display" style="color:${mastered ? 'var(--accent)' : 'var(--text-muted)'}">${pct}%</div>
          ${mastered ? `<p class="text-sm mt-2" style="color:var(--accent)">★ Concept marked as mastered</p>` : `<p class="text-sm text-muted mt-2">Concept marked as read — revisit to master</p>`}
        </div>
        <div class="flex flex-col gap-3">
          <button class="btn btn-primary btn-full" onclick="openConcept('${conceptId}')">Review concept</button>
          ${nextConceptButton(state.concept || POLYMER_CONTENT.concepts.find(c => c.id === conceptId))}
          <button class="btn btn-ghost btn-full" onclick="closeConcept()">Back to learning path</button>
        </div>
      </div>
    </main>
  `;
}

// ─── Terms Tab ────────────────────────────────────────────────────────────────
function buildTerms() {
  return `
    <div class="animate-in">
      <h1 class="mb-2">Glossary</h1>
      <p class="text-muted text-sm mb-4">Core terms with Japanese — useful for your ゼミ.</p>
      <div class="flex flex-col gap-2">
        ${POLYMER_CONTENT.glossary.map(g => `
          <div class="card card-sm">
            <div class="flex justify-between items-start">
              <div>
                <span class="font-bold">${g.term}</span>
                <span class="jp text-sm text-muted ml-2">${g.jp}</span>
              </div>
            </div>
            <p class="text-sm text-muted mt-1" style="line-height:1.6">${g.def}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ─── Progress Tab ─────────────────────────────────────────────────────────────
function buildProgress() {
  const modules = [...POLYMER_CONTENT.modules].sort((a, b) => a.order - b.order);
  const read = readCount(), mastered = masteredCount(), total = totalConcepts();
  return `
    <div class="animate-in">
      <h1 class="mb-4">Progress</h1>
      <div class="grid-2 mb-6">
        <div class="card text-center">
          <div class="text-2xl font-bold display" style="color:var(--accent)">${read}</div>
          <div class="text-xs text-muted">concepts read</div>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold display" style="color:var(--seal)">${mastered}</div>
          <div class="text-xs text-muted">mastered ★</div>
        </div>
      </div>
      <h2 class="mb-3">By module</h2>
      <div class="flex flex-col gap-3">
        ${modules.map(m => {
          const mp = moduleProgress(m.id);
          return `
            <div class="card card-sm">
              <div class="flex justify-between items-center mb-2">
                <div class="flex items-center gap-2"><span>${m.icon}</span><span class="font-medium text-sm jp">${m.titleJp}</span></div>
                <span class="text-xs text-muted">${mp.done}/${mp.total}</span>
              </div>
              <div class="progress"><div class="progress-fill" style="width:${mp.pct}%"></div></div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ─── Handlers ─────────────────────────────────────────────────────────────────
function navigate(tab) { state.tab = tab; state.concept = null; render(); window.scrollTo(0, 0); }
function toggleDark() { state.darkMode = !state.darkMode; save(); render(); }
function toggleModule(id) { state.openModule = state.openModule === id ? null : id; render(); }
function openConcept(id) {
  state.concept = POLYMER_CONTENT.concepts.find(c => c.id === id);
  state.conceptView = 'learn';
  state.quizState = null;
  render(); window.scrollTo(0, 0);
}
function closeConcept() { state.concept = null; state.quizState = null; state.tab = 'path'; render(); window.scrollTo(0, 0); }
function toggleQA(i) { document.getElementById(`qa-${i}`)?.classList.toggle('hidden'); }
function markRead(id) { state.progress[id] = { ...state.progress[id], read: true, lastSeen: Date.now() }; save(); render(); }

function startConceptQuiz() {
  state.quizState = { conceptId: state.concept.id, questions: [...state.concept.examQA], index: 0, correct: 0, revealed: false, finished: false };
  state.conceptView = 'quiz';
  render(); window.scrollTo(0, 0);
}
function revealAnswer() { state.quizState.revealed = true; render(); }
function gradeAnswer(got) {
  if (got) state.quizState.correct++;
  state.quizState.index++;
  state.quizState.revealed = false;
  if (state.quizState.index >= state.quizState.questions.length) state.quizState.finished = true;
  render(); window.scrollTo(0, 0);
}
function exitQuiz() { state.conceptView = 'learn'; state.quizState = null; render(); window.scrollTo(0, 0); }

// ─── Init ─────────────────────────────────────────────────────────────────────
load();
render();
