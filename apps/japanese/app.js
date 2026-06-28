// Japanese Study App — Main Logic

const DB_KEY = 'jp_study_v1';

// ─── State ────────────────────────────────────────────────────────────────────
let state = {
  tab: 'home',
  progress: {},        // scenarioId -> { completed, score, lastSeen }
  vocab: {},           // word -> { seen, starred, correct, incorrect }
  streak: { count: 0, lastDate: null },
  darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  scenario: null,      // currently open scenario
  quizState: null,     // active quiz
  filter: 'all',       // category filter
  showTranslation: {},  // scenarioId -> bool
};

// ─── Persistence ─────────────────────────────────────────────────────────────
function save() {
  const toSave = { progress: state.progress, vocab: state.vocab, streak: state.streak, darkMode: state.darkMode };
  localStorage.setItem(DB_KEY, JSON.stringify(toSave));
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(DB_KEY) || '{}');
    Object.assign(state, saved);
  } catch {}
  updateStreak();
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.streak.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.streak.lastDate === yesterday) {
    state.streak.count += 1;
  } else if (state.streak.lastDate !== today) {
    state.streak.count = state.streak.count > 0 && state.streak.lastDate === yesterday ? state.streak.count + 1 : 1;
  }
  state.streak.lastDate = today;
  save();
}

// ─── Router / Tabs ────────────────────────────────────────────────────────────
function navigate(tab) {
  state.tab = tab;
  state.scenario = null;
  state.quizState = null;
  document.querySelectorAll('.tab-item').forEach(el => el.classList.toggle('active', el.dataset.tab === tab));
  render();
}

// ─── Stats helpers ────────────────────────────────────────────────────────────
function completedCount() {
  return Object.values(state.progress).filter(p => p.completed).length;
}

function totalScenarios() {
  return JAPANESE_CONTENT.scenarios.length;
}

function todayScenario() {
  const idx = new Date().getDate() % JAPANESE_CONTENT.scenarios.length;
  return JAPANESE_CONTENT.scenarios[idx];
}

// ─── Icons (inline SVG for zero dependencies) ────────────────────────────────
const icons = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
  vocab: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  grammar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>`,
};

// ─── Render engine ────────────────────────────────────────────────────────────
function render() {
  document.getElementById('app').innerHTML = buildPage();
  bindEvents();
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
}

function buildPage() {
  if (state.scenario) return buildScenarioPage();
  if (state.quizState) return buildQuizPage();

  const tabs = {
    home: buildHome,
    scenarios: buildScenarios,
    vocab: buildVocab,
    grammar: buildGrammar,
  };

  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="../" class="nav-logo">${icons.back} <span>日本語</span></a>
        <button class="btn btn-ghost btn-sm" onclick="toggleDark()">
          ${state.darkMode ? icons.sun : icons.moon}
        </button>
      </div>
    </nav>
    <main class="main-content container">
      ${(tabs[state.tab] || buildHome)()}
    </main>
    <nav class="tab-nav">
      ${[
        { tab: 'home', label: 'Home', icon: icons.home },
        { tab: 'scenarios', label: 'Scenarios', icon: icons.book },
        { tab: 'vocab', label: 'Vocab', icon: icons.vocab },
        { tab: 'grammar', label: 'Grammar', icon: icons.grammar },
      ].map(t => `
        <button class="tab-item ${state.tab === t.tab ? 'active' : ''}" data-tab="${t.tab}" onclick="navigate('${t.tab}')">
          ${t.icon} ${t.label}
        </button>
      `).join('')}
    </nav>
  `;
}

// ─── Home Tab ─────────────────────────────────────────────────────────────────
function buildHome() {
  const done = completedCount();
  const total = totalScenarios();
  const pct = Math.round((done / total) * 100);
  const today = todayScenario();
  const todayDone = state.progress[today.id]?.completed;

  const catMap = { lab: '🧪', daily: '🗾', university: '🎓' };

  const hour = new Date().getHours();
  const greeting = hour < 11 ? 'おはよう' : hour < 18 ? 'こんにちは' : 'こんばんは';
  const greetingEn = hour < 11 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return `
    <div class="animate-in">
      ${buildHeroBanner()}
      <div class="flex items-center justify-between mb-4 mt-4">
        <div>
          <h1 class="animate-ink jp">${greeting}、エドワード</h1>
          <p class="text-muted text-sm mt-1">${greetingEn} — let's study Japanese.</p>
        </div>
        <div class="text-center">
          <div class="flex items-center gap-2 card card-sm" style="background:var(--accent-light);border-color:var(--accent)">
            ${icons.fire}
            <div>
              <div class="font-bold display" style="color:var(--accent);font-size:1.2rem">${state.streak.count}</div>
              <div class="text-xs text-muted">day streak</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium">Overall progress</span>
          <span class="text-sm text-muted">${done}/${total} scenarios</span>
        </div>
        <div class="progress">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
        <p class="text-xs text-muted mt-2">${pct}% complete</p>
      </div>

      <div class="mb-2 flex justify-between items-center">
        <h2>Today's scenario</h2>
        ${todayDone ? `<span class="badge badge-success">${icons.check} Done</span>` : ''}
      </div>
      <div class="card mb-6" style="border-left: 3px solid var(--primary); cursor:pointer" onclick="openScenario('${today.id}')">
        <div class="flex justify-between items-center mb-2">
          <span class="badge badge-primary">${catMap[today.category] || ''} ${today.category}</span>
          <span class="badge ${today.level === 1 ? 'badge-success' : 'badge-warning'}">${today.level === 1 ? 'N3' : 'N3+'}</span>
        </div>
        <h3 class="jp" style="font-size:1.1rem">${today.titleJp}</h3>
        <p class="text-sm text-muted mt-1">${today.title}</p>
        <p class="text-xs text-faint mt-2">${today.situation}</p>
        <div class="flex items-center gap-2 mt-3" style="color:var(--primary)">
          <span class="text-sm font-medium">Start studying</span>
          ${icons.arrow}
        </div>
      </div>

      <h2 class="mb-3">Quick categories</h2>
      <div class="grid-2 mb-6">
        ${[
          { cat: 'lab', label: '🧪 Lab & Research', desc: 'Experiments, equipment, ゼミ' },
          { cat: 'daily', label: '🗾 Daily Life', desc: 'Trains, convenience stores, restaurants' },
          { cat: 'university', label: '🎓 University', desc: 'Professors, admin, campus' },
          { cat: 'all', label: '📚 All scenarios', desc: `${total} total` },
        ].map(c => `
          <div class="card card-sm" style="cursor:pointer" onclick="navigate('scenarios');setTimeout(()=>setFilter('${c.cat}'),50)">
            <div class="font-medium text-sm">${c.label}</div>
            <div class="text-xs text-muted mt-1">${c.desc}</div>
          </div>
        `).join('')}
      </div>

      <h2 class="mb-3">Grammar spotlight</h2>
      ${buildGrammarCard(JAPANESE_CONTENT.grammarPoints[new Date().getDay() % JAPANESE_CONTENT.grammarPoints.length])}
    </div>
  `;
}

function buildHeroBanner() {
  // Sumi-e ink-wash banner — inspired by Unohana Retsu / Bleach aesthetic
  return `
    <div class="card" style="padding:0;overflow:hidden;position:relative;border-color:var(--border-strong)">
      <svg viewBox="0 0 700 200" preserveAspectRatio="xMidYMid slice" style="width:100%;height:140px;display:block">
        <defs>
          <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--surface)"/>
            <stop offset="100%" stop-color="var(--surface2)"/>
          </linearGradient>
          <radialGradient id="inkblot" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stop-color="var(--ink)" stop-opacity="0.16"/>
            <stop offset="100%" stop-color="var(--ink)" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="700" height="200" fill="url(#paper)"/>
        <!-- distant ink-wash mountains / mist -->
        <ellipse cx="120" cy="60" rx="180" ry="70" fill="url(#inkblot)"/>
        <ellipse cx="560" cy="40" rx="150" ry="60" fill="url(#inkblot)"/>
        <!-- flowing ink hair strokes (Unohana's hair) -->
        <path d="M70 -20 Q90 80 60 200" stroke="var(--ink)" stroke-width="14" fill="none" opacity="0.85" stroke-linecap="round"/>
        <path d="M110 -20 Q130 90 95 200" stroke="var(--ink)" stroke-width="20" fill="none" opacity="0.9" stroke-linecap="round"/>
        <path d="M150 -20 Q140 100 175 200" stroke="var(--ink)" stroke-width="11" fill="none" opacity="0.7" stroke-linecap="round"/>
        <!-- gold hairpin accents -->
        <g stroke="var(--accent-bright)" stroke-width="4" stroke-linecap="round" opacity="0.95">
          <line x1="92" y1="44" x2="100" y2="58"/>
          <line x1="104" y1="40" x2="112" y2="54"/>
          <line x1="116" y1="44" x2="124" y2="58"/>
        </g>
        <!-- bamboo / branch sweeping across -->
        <path d="M620 10 Q400 60 230 90" stroke="var(--ink-soft)" stroke-width="2" fill="none" opacity="0.4"/>
        <!-- vertical title 墨 -->
        <text x="650" y="70" font-family="var(--font-jp)" font-size="46" fill="var(--ink)" opacity="0.9" text-anchor="middle">墨</text>
        <text x="650" y="120" font-family="var(--font-jp)" font-size="22" fill="var(--text-muted)" text-anchor="middle">日本語</text>
        <!-- ink splatter accents -->
        <circle cx="300" cy="150" r="3" fill="var(--ink)" opacity="0.5"/>
        <circle cx="330" cy="165" r="1.8" fill="var(--ink)" opacity="0.4"/>
        <circle cx="280" cy="170" r="1.2" fill="var(--ink)" opacity="0.3"/>
      </svg>
      <div class="seal-mark" style="top:auto;bottom:12px;right:14px">学</div>
    </div>
  `;
}

function buildGrammarCard(g) {
  return `
    <div class="card" style="border-left:3px solid var(--accent)">
      <div class="jp font-bold text-lg" style="color:var(--accent)">${g.pattern}</div>
      <div class="text-sm text-muted mt-1">${g.meaning}</div>
      <div class="bg-surface2 rounded p-3 mt-3">
        <p class="jp text-sm">${g.example}</p>
      </div>
    </div>
  `;
}

// ─── Scenarios Tab ────────────────────────────────────────────────────────────
function buildScenarios() {
  const catMap = { lab: '🧪', daily: '🗾', university: '🎓' };
  const filtered = state.filter === 'all'
    ? JAPANESE_CONTENT.scenarios
    : JAPANESE_CONTENT.scenarios.filter(s => s.category === state.filter);

  return `
    <div class="animate-in">
      <h1 class="mb-4">Scenarios</h1>
      <div class="flex gap-2 mb-4" style="flex-wrap:wrap">
        ${['all', 'lab', 'daily', 'university'].map(f => `
          <button class="chip ${state.filter === f ? 'active' : ''}" onclick="setFilter('${f}')">
            ${f === 'all' ? '📚 All' : catMap[f] + ' ' + f}
          </button>
        `).join('')}
      </div>
      <div class="flex flex-col gap-3">
        ${filtered.map(s => {
          const done = state.progress[s.id]?.completed;
          return `
            <div class="card" style="cursor:pointer;border-left:3px solid ${done ? 'var(--success)' : 'var(--border)'}" onclick="openScenario('${s.id}')">
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex gap-2 mb-2">
                    <span class="badge badge-primary">${catMap[s.category] || ''} ${s.category}</span>
                    <span class="badge ${s.level === 1 ? 'badge-success' : 'badge-warning'}">${s.level === 1 ? 'N3' : 'N3+'}</span>
                    ${done ? `<span class="badge badge-success">${icons.check} Done</span>` : ''}
                  </div>
                  <p class="jp font-medium">${s.titleJp}</p>
                  <p class="text-sm text-muted mt-1">${s.title}</p>
                </div>
                <span style="color:var(--primary);margin-left:12px">${icons.arrow}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ─── Scenario Detail Page ─────────────────────────────────────────────────────
function buildScenarioPage() {
  const s = state.scenario;
  const showTrans = state.showTranslation[s.id] ?? false;

  return `
    <nav class="nav">
      <div class="nav-inner">
        <button class="btn btn-ghost btn-sm" onclick="closeScenario()">
          ${icons.back} Back
        </button>
        <span class="badge badge-primary">${s.category}</span>
      </div>
    </nav>
    <main class="main-content container">
      <div class="animate-in">
        <div class="mb-2">
          <h1 class="jp">${s.titleJp}</h1>
          <p class="text-sm text-muted">${s.title}</p>
        </div>

        <div class="card bg-surface2 mb-4">
          <p class="text-sm text-muted"><strong>Scene:</strong> ${s.situation}</p>
        </div>

        <!-- Dialogue -->
        <div class="flex justify-between items-center mb-3">
          <h2>会話 Dialogue</h2>
          <button class="btn btn-ghost btn-sm" onclick="toggleTranslation()">
            ${icons.eye} ${showTrans ? 'Hide' : 'Show'} EN
          </button>
        </div>
        <div class="flex flex-col gap-3 mb-6">
          ${s.dialogue.map((line, i) => {
            const isUser = line.speaker === 'あなた';
            return `
              <div class="animate-in" style="animation-delay:${i * 0.05}s">
                <div class="text-xs text-muted mb-1 ${isUser ? 'text-right' : ''}" style="font-family:var(--font-jp)">${line.speaker}</div>
                <div class="card card-sm ${isUser ? '' : ''}" style="
                  ${isUser ? 'background:var(--primary-light);border-color:var(--primary);margin-left:32px' : 'margin-right:32px'}
                ">
                  <p class="jp" style="font-size:1.05rem;line-height:1.7">${line.jp}</p>
                  <p class="text-xs text-muted mt-1">${line.romaji}</p>
                  ${showTrans ? `<p class="text-sm mt-2" style="color:var(--primary)">${line.en}</p>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Grammar -->
        <h2 class="mb-3">Grammar Focus</h2>
        <div class="card mb-6" style="border-left:3px solid var(--accent)">
          <div class="jp font-bold text-lg" style="color:var(--accent)">${s.grammar.pattern}</div>
          <div class="text-sm font-medium mt-1">${s.grammar.meaning}</div>
          <p class="text-sm text-muted mt-2">${s.grammar.explanation}</p>
          <div class="divider"></div>
          <div class="flex flex-col gap-2">
            ${s.grammar.examples.map(ex => `
              <div class="bg-surface2 rounded p-3">
                <p class="jp text-sm">${ex.jp}</p>
                <p class="text-xs text-muted mt-1">${ex.en}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Vocabulary -->
        <h2 class="mb-3">Vocabulary (${s.vocab.length} words)</h2>
        <div class="flex flex-col gap-2 mb-6">
          ${s.vocab.map(w => `
            <div class="card card-sm flex justify-between items-start">
              <div>
                <span class="jp font-bold text-lg">${w.jp}</span>
                ${w.reading ? `<span class="text-sm text-muted ml-2 jp">(${w.reading})</span>` : ''}
                <p class="text-sm font-medium mt-1">${w.en}</p>
                <p class="text-xs text-muted mt-1 jp">${w.example}</p>
              </div>
              <button class="btn btn-ghost btn-sm" onclick="toggleStar('${encodeURIComponent(w.jp)}')" style="color:${state.vocab[w.jp]?.starred ? 'var(--warning)' : 'var(--text-faint)'}">
                ${icons.star}
              </button>
            </div>
          `).join('')}
        </div>

        <!-- Practice -->
        <h2 class="mb-3">Practice Quiz</h2>
        <button class="btn btn-primary btn-full btn-lg mb-6" onclick="startQuiz('${s.id}')">
          Start Quiz (${s.practiceQuestions.length} questions)
        </button>

        ${state.progress[s.id]?.completed
          ? `<div class="card text-center" style="border-color:var(--success);background:var(--success-light)">
               <p style="color:#15803d">${icons.check} Scenario completed!</p>
             </div>`
          : `<button class="btn btn-secondary btn-full" onclick="markComplete('${s.id}')">Mark as reviewed (skip quiz)</button>`
        }
      </div>
    </main>
  `;
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────
function buildQuizPage() {
  const { questions, index, score, finished, selectedAnswer, showResult } = state.quizState;
  if (finished) return buildQuizResults();

  const q = questions[index];
  const total = questions.length;

  return `
    <nav class="nav">
      <div class="nav-inner">
        <button class="btn btn-ghost btn-sm" onclick="exitQuiz()">
          ${icons.back} Exit
        </button>
        <span class="text-sm text-muted">${index + 1} / ${total}</span>
      </div>
    </nav>
    <main class="main-content container">
      <div class="animate-in">
        <div class="progress mb-6">
          <div class="progress-fill" style="width:${((index) / total) * 100}%"></div>
        </div>

        <div class="card card-lg mb-4">
          <div class="badge badge-primary mb-3">${q.type === 'fill' ? 'Fill in the blank' : q.type === 'translate' ? 'Translation' : 'Choose the best answer'}</div>
          <p class="font-medium text-lg jp" style="line-height:1.8">${q.prompt}</p>

          ${q.hints && !showResult ? `
            <div class="mt-3 flex gap-2" style="flex-wrap:wrap">
              ${q.hints.map(h => `<span class="badge badge-primary">${h}</span>`).join('')}
            </div>
          ` : ''}
        </div>

        ${q.type === 'choose' ? buildChoiceAnswers(q) : buildFreeAnswer(q)}

        ${showResult ? `
          <div class="card mt-4 ${selectedAnswer === q.answer || selectedAnswer == q.answer ? 'animate-pop' : 'animate-shake'}" style="border-color:${selectedAnswer === q.answer || selectedAnswer == q.answer ? 'var(--success)' : 'var(--accent)'}; background:${selectedAnswer === q.answer || selectedAnswer == q.answer ? 'var(--success-light)' : 'var(--accent-light)'}">
            <p class="font-medium" style="color:${selectedAnswer === q.answer || selectedAnswer == q.answer ? '#15803d' : 'var(--accent)'}">
              ${selectedAnswer === q.answer || selectedAnswer == q.answer ? '✓ Correct!' : '✗ Not quite'}
            </p>
            <p class="text-sm mt-1">Answer: <span class="jp font-bold">${q.type === 'choose' ? q.options[q.answer] : q.answer}</span></p>
          </div>
          <button class="btn btn-primary btn-full btn-lg mt-4" onclick="nextQuestion()">
            ${index + 1 < total ? 'Next question →' : 'See results'}
          </button>
        ` : ''}
      </div>
    </main>
  `;
}

function buildChoiceAnswers(q) {
  return `
    <div class="flex flex-col gap-3">
      ${q.options.map((opt, i) => {
        let style = '';
        if (state.quizState.showResult) {
          if (i === q.answer) style = 'border-color:var(--success);background:var(--success-light)';
          else if (i === state.quizState.selectedAnswer) style = 'border-color:var(--accent);background:var(--accent-light)';
        }
        return `
          <button class="card card-sm text-left jp" style="cursor:pointer;width:100%;color:var(--text);${style}"
            onclick="submitChoiceAnswer(${i})" ${state.quizState.showResult ? 'disabled' : ''}>
            <span class="text-sm mr-2" style="opacity:0.6">${String.fromCharCode(65 + i)}.</span>${opt}
          </button>
        `;
      }).join('')}
    </div>
  `;
}

function buildFreeAnswer(q) {
  if (state.quizState.showResult) return '';
  return `
    <div class="flex flex-col gap-3">
      <input type="text" id="answer-input" class="card card-sm jp"
        style="font-size:1.1rem;border:2px solid var(--primary);outline:none;width:100%"
        placeholder="Type your answer..."
        onkeydown="if(event.key==='Enter')submitFreeAnswer()"
      >
      <button class="btn btn-primary btn-full" onclick="submitFreeAnswer()">Check answer</button>
    </div>
  `;
}

function buildQuizResults() {
  const { questions, score, scenarioId } = state.quizState;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 60;

  if (passed) {
    state.progress[scenarioId] = { ...state.progress[scenarioId], completed: true, score: pct, lastSeen: Date.now() };
    save();
  }

  return `
    <nav class="nav">
      <div class="nav-inner">
        <button class="btn btn-ghost btn-sm" onclick="closeScenario()">
          ${icons.back} Back to scenarios
        </button>
      </div>
    </nav>
    <main class="main-content container">
      <div class="animate-in text-center">
        <div style="font-size:4rem;margin:24px 0">${pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
        <h1>${pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good job!' : 'Keep practicing!'}</h1>
        <p class="text-muted mt-2">${score} / ${total} correct — ${pct}%</p>

        <div class="card mt-6 mb-4" style="border-color:${passed ? 'var(--success)' : 'var(--warning)'}">
          <div class="text-2xl font-bold" style="color:${passed ? 'var(--success)' : 'var(--warning)'}">${pct}%</div>
          <div class="progress mt-2">
            <div class="progress-fill" style="width:${pct}%;background:${passed ? 'var(--success)' : 'var(--warning)'}"></div>
          </div>
          ${passed ? '<p class="text-sm text-muted mt-2">Scenario marked as complete ✓</p>' : '<p class="text-sm text-muted mt-2">Review the dialogue and try again</p>'}
        </div>

        <div class="flex flex-col gap-3">
          <button class="btn btn-primary btn-full btn-lg" onclick="startQuiz('${state.quizState.scenarioId}')">Try again</button>
          <button class="btn btn-secondary btn-full" onclick="openScenario('${state.quizState.scenarioId}')">Review dialogue</button>
          <button class="btn btn-ghost btn-full" onclick="closeScenario()">Back to scenarios</button>
        </div>
      </div>
    </main>
  `;
}

// ─── Vocab Tab ────────────────────────────────────────────────────────────────
function buildVocab() {
  const starred = Object.entries(state.vocab).filter(([, v]) => v?.starred).map(([w]) => w);
  const allWords = JAPANESE_CONTENT.vocabSets;

  return `
    <div class="animate-in">
      <h1 class="mb-4">Vocabulary</h1>

      ${starred.length > 0 ? `
        <div class="card mb-4" style="border-color:var(--warning)">
          <div class="flex items-center gap-2 mb-3">
            ${icons.star} <h3 style="color:var(--warning)">Starred words (${starred.length})</h3>
          </div>
          <div class="flex gap-2" style="flex-wrap:wrap">
            ${starred.map(w => `<span class="badge badge-warning jp">${decodeURIComponent(w)}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${allWords.map(set => `
        <h2 class="mb-3">${set.title}</h2>
        <div class="flex flex-col gap-2 mb-6">
          ${set.words.map(w => `
            <div class="card card-sm flex justify-between items-start">
              <div>
                <span class="jp font-bold text-lg">${w.jp}</span>
                ${w.reading ? `<span class="text-sm text-muted ml-2 jp">(${w.reading})</span>` : ''}
                <p class="text-sm font-medium mt-1">${w.en}</p>
                <p class="text-xs text-muted jp mt-1">${w.example}</p>
              </div>
              <button class="btn btn-ghost btn-sm" onclick="toggleStar('${encodeURIComponent(w.jp)}')"
                style="color:${state.vocab[w.jp]?.starred ? 'var(--warning)' : 'var(--text-faint)'}">
                ${icons.star}
              </button>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

// ─── Grammar Tab ──────────────────────────────────────────────────────────────
function buildGrammar() {
  return `
    <div class="animate-in">
      <h1 class="mb-2">Grammar Reference</h1>
      <p class="text-muted text-sm mb-4">N3 patterns used in your scenarios</p>
      <div class="flex flex-col gap-3">
        ${JAPANESE_CONTENT.grammarPoints.map(g => `
          <div class="card" style="border-left:3px solid var(--accent)">
            <div class="jp font-bold" style="color:var(--accent);font-size:1.1rem">${g.pattern}</div>
            <div class="text-sm font-medium mt-1">${g.meaning}</div>
            <div class="bg-surface2 rounded p-3 mt-3">
              <p class="jp text-sm">${g.example}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <h2 class="mt-6 mb-3">From your scenarios</h2>
      <div class="flex flex-col gap-3">
        ${JAPANESE_CONTENT.scenarios.map(s => `
          <div class="card card-sm" style="border-left:3px solid var(--primary)">
            <div class="jp font-bold" style="color:var(--primary)">${s.grammar.pattern}</div>
            <div class="text-sm">${s.grammar.meaning}</div>
            <div class="text-xs text-muted mt-1">${s.title}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ─── Event handlers ───────────────────────────────────────────────────────────
function bindEvents() {}

function toggleDark() {
  state.darkMode = !state.darkMode;
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
  save();
  render();
}

function setFilter(f) {
  state.filter = f;
  render();
}

function openScenario(id) {
  state.scenario = JAPANESE_CONTENT.scenarios.find(s => s.id === id);
  state.quizState = null;
  render();
  window.scrollTo(0, 0);
}

function closeScenario() {
  state.scenario = null;
  state.quizState = null;
  render();
  window.scrollTo(0, 0);
}

function toggleTranslation() {
  const id = state.scenario.id;
  state.showTranslation[id] = !state.showTranslation[id];
  render();
  window.scrollTo(0, 0);
}

function toggleStar(encoded) {
  const word = decodeURIComponent(encoded);
  if (!state.vocab[word]) state.vocab[word] = {};
  state.vocab[word].starred = !state.vocab[word].starred;
  save();
  render();
}

function markComplete(id) {
  state.progress[id] = { ...state.progress[id], completed: true, lastSeen: Date.now() };
  save();
  render();
}

function startQuiz(scenarioId) {
  const s = JAPANESE_CONTENT.scenarios.find(sc => sc.id === scenarioId);
  state.quizState = {
    scenarioId,
    questions: [...s.practiceQuestions],
    index: 0,
    score: 0,
    finished: false,
    selectedAnswer: null,
    showResult: false,
  };
  state.scenario = null;
  render();
  window.scrollTo(0, 0);
}

function submitChoiceAnswer(i) {
  if (state.quizState.showResult) return;
  state.quizState.selectedAnswer = i;
  state.quizState.showResult = true;
  if (i === state.quizState.questions[state.quizState.index].answer) {
    state.quizState.score++;
  }
  render();
}

function submitFreeAnswer() {
  const input = document.getElementById('answer-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  const q = state.quizState.questions[state.quizState.index];
  state.quizState.selectedAnswer = val;
  state.quizState.showResult = true;
  // Fuzzy match: check if answer contains key characters
  const correct = q.answer.toLowerCase();
  const given = val.toLowerCase();
  if (given === correct || correct.includes(given) || given.includes(correct.substring(0, 4))) {
    state.quizState.score++;
  }
  render();
}

function nextQuestion() {
  const qs = state.quizState;
  qs.index++;
  qs.showResult = false;
  qs.selectedAnswer = null;
  if (qs.index >= qs.questions.length) {
    qs.finished = true;
  }
  render();
  window.scrollTo(0, 0);
}

function exitQuiz() {
  const sid = state.quizState?.scenarioId;
  state.quizState = null;
  if (sid) openScenario(sid);
  else { state.scenario = null; render(); }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
load();
render();
