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
// Minimalist: all module accents are maroon (single accent), not rainbow.
const JEWELS = ['--accent', '--accent', '--accent', '--accent', '--accent', '--accent', '--accent'];

function spherulite(cx, cy, r, colorVar, seed) {
  // a single concentric radial structure, like a polymer spherulite under cross-polarized light
  const rings = [];
  for (let i = r; i > 4; i -= Math.max(4, r * 0.18)) {
    const op = 0.25 + 0.5 * (i / r);
    rings.push(`<circle cx="${cx}" cy="${cy}" r="${i.toFixed(1)}" fill="none" stroke="var(${colorVar})" stroke-width="${(r*0.07).toFixed(1)}" opacity="${op.toFixed(2)}"/>`);
  }
  // radial maltese-cross spokes (signature of real spherulites)
  let spokes = '';
  const n = 8;
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2 + seed;
    const x2 = cx + Math.cos(a) * r, y2 = cy + Math.sin(a) * r;
    spokes += `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(${colorVar})" stroke-width="0.8" opacity="0.3"/>`;
  }
  return `<g>${spokes}${rings.join('')}<circle cx="${cx}" cy="${cy}" r="${(r*0.22).toFixed(1)}" fill="var(${colorVar})" opacity="0.85"/></g>`;
}

function buildHero() {
  // Swiss / Helvetica-bold statement (lime + maroon)
  return `
    <div class="animate-in" style="padding:14px 0 20px">
      <div class="display jp" style="font-size:2.9rem;line-height:0.94;color:var(--accent)">高分子<br>化学</div>
      <div class="display" style="font-size:1.6rem;line-height:1.0;color:var(--text-muted);margin-top:10px">Polymer Chemistry</div>
      <p class="text-sm mt-3" style="color:var(--text-muted)">From first principles to battery materials.</p>
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
                  <div class="jewel-disc" style="background:radial-gradient(circle at 35% 30%, color-mix(in srgb, var(${JEWELS[(m.order-1) % JEWELS.length]}) 55%, white), var(${JEWELS[(m.order-1) % JEWELS.length]}))">${m.icon}</div>
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
              <div style="height:3px;background:var(--surface2)"><div style="height:100%;width:${mp.pct}%;background:var(${JEWELS[(m.order-1) % JEWELS.length]});transition:width 0.4s"></div></div>
              ${open ? `
                <div class="animate-in" style="border-top:1px solid var(--border)">
                  <p class="text-sm text-muted p-4" style="padding-bottom:8px">${m.desc}</p>
                  ${conceptsOf(m.id).map((c, i) => {
                    const done = state.progress[c.id]?.read;
                    const mastered = state.progress[c.id]?.mastered;
                    const jewel = JEWELS[(m.order-1) % JEWELS.length];
                    return `
                      <div class="flex items-center justify-between" style="padding:12px 16px;cursor:pointer;border-top:1px solid var(--border)" onclick="openConcept('${c.id}')">
                        <div class="flex items-center gap-3">
                          <div style="width:26px;height:26px;border-radius:50%;border:1.5px solid ${done ? 'var(' + jewel + ')' : 'var(--border-strong)'};background:${done ? 'var(' + jewel + ')' : 'transparent'};color:${done ? '#fff' : 'var(--text-faint)'};display:flex;align-items:center;justify-content:center;font-size:0.75rem;flex-shrink:0">
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

        ${buildEnrichment(c.id)}

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

        ${c.flashcards ? `
          <h2 class="mb-3">Flashcards</h2>
          <p class="text-sm text-muted mb-3">Tap a card to flip it. ${c.flashcards.length} cards.</p>
          <div class="grid-2 mb-6">
            ${c.flashcards.map(f => `
              <div class="flashcard" onclick="this.classList.toggle('flipped')">
                <div class="flashcard-inner">
                  <div class="flashcard-face flashcard-front"><span class="font-bold">${f.front}</span></div>
                  <div class="flashcard-face flashcard-back"><span class="text-sm" style="line-height:1.5">${f.back}</span></div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="flex flex-col gap-3">
          <button class="btn btn-primary btn-full btn-lg" onclick="startConceptQuiz()">
            Test yourself (${((c.mcq || []).length + (c.examQA || []).length)} questions)
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

// Plain-English summary + analogy + figure, shown above the rigorous content.
function inlineMd(t) {
  return t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
}
function buildEnrichment(id) {
  const en = (typeof POLYMER_ENRICH !== 'undefined') ? POLYMER_ENRICH[id] : null;
  if (!en) return '';
  return `
    ${en.figure ? `<div class="card mb-3 text-center" style="padding:18px">${en.figure}</div>` : ''}
    ${en.simple ? `
      <div class="card mb-3" style="border-left:5px solid var(--accent)">
        <div class="badge badge-accent mb-2">In simple terms</div>
        <p style="line-height:1.65;font-size:0.95rem">${inlineMd(en.simple)}</p>
      </div>` : ''}
    ${en.analogy ? `
      <div class="card mb-3" style="background:var(--accent-light)">
        <div class="flex items-start gap-2">
          <span style="font-size:1.1rem">💡</span>
          <div>
            <div class="font-bold text-sm" style="color:var(--accent);margin-bottom:2px">Analogy</div>
            <p style="line-height:1.6;font-size:0.92rem">${inlineMd(en.analogy)}</p>
          </div>
        </div>
      </div>` : ''}
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

// ─── Concept Quiz (MCQ + recall) ──────────────────────────────────────────────
function buildConceptQuiz() {
  const qs = state.quizState;
  if (qs.finished) return buildQuizResults();
  const q = qs.questions[qs.index];
  const total = qs.questions.length;

  return `
    <nav class="nav">
      <div class="nav-inner">
        <button class="btn btn-ghost btn-sm" onclick="exitQuiz()">${icons.back} Exit</button>
        <span class="text-sm text-muted">${qs.index + 1} / ${total}</span>
      </div>
    </nav>
    <main class="main-content container">
      <div class="animate-in">
        <div class="progress mb-6"><div class="progress-fill" style="width:${(qs.index / total) * 100}%"></div></div>
        ${q.type === 'mcq' ? buildMcqQuestion(q, total) : buildRecallQuestion(q, total)}
      </div>
    </main>
  `;
}

function buildMcqQuestion(q, total) {
  const qs = state.quizState;
  const correct = qs.selectedMcq === q.answer;
  return `
    <div class="card card-lg mb-4">
      <div class="badge badge-accent mb-3">Multiple choice</div>
      <p class="font-medium text-lg" style="line-height:1.6">${q.q}</p>
    </div>
    <div class="flex flex-col gap-3">
      ${q.options.map((opt, i) => {
        let style = 'color:var(--text);';
        if (qs.mcqResult) {
          if (i === q.answer) style += 'border-color:var(--success);background:var(--success-light);';
          else if (i === qs.selectedMcq) style += 'border-color:var(--seal);background:var(--seal-light);';
        }
        return `<button class="card card-sm text-left" style="cursor:pointer;width:100%;${style}" onclick="submitMcq(${i})" ${qs.mcqResult ? 'disabled' : ''}><span class="text-sm mr-2" style="opacity:0.55">${String.fromCharCode(65 + i)}.</span>${opt}</button>`;
      }).join('')}
    </div>
    ${qs.mcqResult ? `
      <div class="card mt-4 ${correct ? 'animate-pop' : 'animate-shake'}" style="border-color:${correct ? 'var(--success)' : 'var(--seal)'};background:${correct ? 'var(--success-light)' : 'var(--seal-light)'}">
        <p class="font-medium" style="color:${correct ? 'var(--success)' : 'var(--seal)'}">${correct ? '✓ Correct!' : '✗ Not quite'}</p>
        <p class="text-sm mt-1" style="line-height:1.6">${q.explain}</p>
      </div>
      <button class="btn btn-primary btn-full btn-lg mt-4" onclick="nextQ()">${qs.index + 1 < total ? 'Next question →' : 'See results'}</button>
    ` : ''}
  `;
}

function buildRecallQuestion(q, total) {
  const qs = state.quizState;
  return `
    <div class="card card-lg mb-4">
      <div class="badge badge-seal mb-3">${icons.prof} Recall question</div>
      <p class="font-medium text-lg" style="line-height:1.6">${q.q}</p>
      <p class="text-sm text-muted mt-3">Think through your full answer, then reveal to self-check.</p>
    </div>
    ${qs.revealed ? `
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
  const c = state.concept;
  const mcqs = (c.mcq || []).map(m => ({ type: 'mcq', q: m.q, options: m.options, answer: m.answer, explain: m.explain }));
  const recalls = (c.examQA || []).map(e => ({ type: 'recall', q: e.q, a: e.a }));
  state.quizState = {
    conceptId: c.id,
    questions: [...mcqs, ...recalls],
    index: 0, correct: 0,
    revealed: false, selectedMcq: null, mcqResult: false, finished: false,
  };
  state.conceptView = 'quiz';
  render(); window.scrollTo(0, 0);
}
function revealAnswer() { state.quizState.revealed = true; render(); }
function submitMcq(i) {
  const qs = state.quizState;
  if (qs.mcqResult) return;
  qs.selectedMcq = i;
  qs.mcqResult = true;
  if (i === qs.questions[qs.index].answer) qs.correct++;
  render();
}
function advance() {
  const qs = state.quizState;
  qs.index++;
  qs.revealed = false; qs.selectedMcq = null; qs.mcqResult = false;
  if (qs.index >= qs.questions.length) qs.finished = true;
  render(); window.scrollTo(0, 0);
}
function nextQ() { advance(); }
function gradeAnswer(got) { if (got) state.quizState.correct++; advance(); }
function exitQuiz() { state.conceptView = 'learn'; state.quizState = null; render(); window.scrollTo(0, 0); }

// ─── Init ─────────────────────────────────────────────────────────────────────
load();
render();
