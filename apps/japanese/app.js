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
  grammarProgress: {},  // "w1d1" -> true (day studied)
  openDay: null,        // "w1d1" currently expanded day
  grammarTab: 'n2',     // 'n2' | 'n3'
};

// ─── Persistence ─────────────────────────────────────────────────────────────
function save() {
  const toSave = { progress: state.progress, vocab: state.vocab, streak: state.streak, darkMode: state.darkMode, grammarProgress: state.grammarProgress };
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
        <a href="../../index.html" class="nav-logo">${icons.back} <span>日本語</span></a>
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

      ${buildWizardTip()}

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

// 5-point star polygon
function star(cx, cy, r, fill) {
  let pts = '';
  for (let i = 0; i < 10; i++) {
    const ang = -Math.PI / 2 + i * Math.PI / 5;
    const rad = i % 2 ? r * 0.42 : r;
    pts += `${(cx + Math.cos(ang) * rad).toFixed(1)},${(cy + Math.sin(ang) * rad).toFixed(1)} `;
  }
  return `<polygon points="${pts.trim()}" fill="${fill}"/>`;
}

// Sensei — the wizard guide. body = main fill, detail = stars/eye accent.
function buildWizard(body = '#fff', detail = 'var(--accent)') {
  return `
    <svg viewBox="0 0 150 185" style="width:100%;height:auto;display:block" aria-label="wizard guide">
      <!-- hat -->
      <path d="M74 8 C71 42 54 82 41 106 L119 106 C107 76 91 40 74 8 Z" fill="${body}"/>
      <!-- drooping tip -->
      <path d="M74 9 C83 28 97 31 106 23" fill="none" stroke="${body}" stroke-width="9" stroke-linecap="round"/>
      <circle cx="108" cy="21" r="6.5" fill="${body}"/>
      ${star(64, 72, 9, detail)}
      ${star(93, 60, 6.5, detail)}
      ${star(82, 92, 5.5, detail)}
      <!-- brim -->
      <ellipse cx="80" cy="108" rx="53" ry="10" fill="${body}"/>
      <!-- face -->
      <path d="M55 114 C53 142 74 154 92 143 L97 153 C68 170 43 150 46 118 Z" fill="${body}"/>
      <!-- nose -->
      <path d="M49 126 C39 130 36 137 45 141" fill="none" stroke="${body}" stroke-width="7" stroke-linecap="round"/>
      <!-- eye -->
      <circle cx="64" cy="122" r="2.6" fill="${detail}"/>
      <!-- beard -->
      <path d="M55 140 C58 166 88 172 97 152 C92 165 64 162 60 140 Z" fill="${body}"/>
      <!-- casting arm + sparkles -->
      <path d="M44 146 C30 150 20 156 13 166" fill="none" stroke="${body}" stroke-width="8" stroke-linecap="round"/>
      ${star(20, 138, 7, body)}
      ${star(9, 126, 5, body)}
      ${star(30, 122, 4, body)}
    </svg>
  `;
}

const WIZARD_TIPS = [
  '今日も一歩ずつ。 Small steps every day — that\'s how fluency is cast. ✨',
  'A little review beats a long cram. Open one scenario and begin.',
  'Stuck on a grammar point? Tap it twice — repetition is the real magic.',
  '毎日five minutes. The streak is the spell; don\'t break it. 🔥',
  'Read each example aloud. Your mouth remembers what your eyes forget.',
  'N2 is a marathon, not a curse. You\'ve got this, Edward.',
];

function buildWizardTip() {
  const tip = WIZARD_TIPS[new Date().getDate() % WIZARD_TIPS.length];
  return `
    <div class="card card-sm mb-4 flex items-center gap-3" style="background:var(--accent-light)">
      <div style="width:46px;flex-shrink:0">${buildWizard('var(--accent)', '#fff')}</div>
      <p class="text-sm" style="line-height:1.45">${tip}</p>
    </div>
  `;
}

function buildHeroBanner() {
  // Blue + white wizard banner
  return `
    <div class="card" style="padding:0;overflow:hidden;background:var(--accent);border-radius:var(--radius)">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;min-height:160px">
        <div style="padding:22px 0 24px 22px">
          <div class="display jp" style="color:#fff;font-size:2.6rem;line-height:0.92">日本語</div>
          <div class="display" style="color:rgba(255,255,255,0.72);font-size:1rem;letter-spacing:0.04em;margin-top:8px">N2 GRAMMAR</div>
        </div>
        <div style="width:135px;flex-shrink:0;margin-right:14px">${buildWizard()}</div>
      </div>
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
// ─── Furigana ─────────────────────────────────────────────────────────────────
// Curated reading dictionary. Longest matches applied first so compounds win.
// Add new words here as future weeks are injected — furi() applies everywhere.
const FURIGANA = {
  // compounds (kept first via length sort)
  '新入社員': 'しんにゅうしゃいん', '自転車': 'じてんしゃ',
  '英語力': 'えいごりょく',
  '病気': 'びょうき', '最近': 'さいきん', '仕事': 'しごと', '残業': 'ざんぎょう',
  '緊張': 'きんちょう', '上着': 'うわぎ', '道路': 'どうろ', '運転': 'うんてん',
  '免許': 'めんきょ', '試験': 'しけん', '未定': 'みてい', '料理': 'りょうり',
  '女優': 'じょゆう', '演技': 'えんぎ', '旅行': 'りょこう', '留学': 'りゅうがく',
  '無理': 'むり', '心配': 'しんぱい', '家族': 'かぞく', '方法': 'ほうほう',
  '仕方': 'しかた', '時間': 'じかん', '工事': 'こうじ', '不便': 'ふべん',
  '毎日': 'まいにち', '漢字': 'かんじ', '態度': 'たいど', '店員': 'てんいん',
  '一言': 'ひとこと', '文句': 'もんく',
  // single kanji
  '申': 'もう', '込': 'こ', '見': 'み', '子': 'こ',
  '今': 'いま', '人': 'ひと', '目': 'め', '頃': 'ころ', '彼': 'かれ', '年': 'とし',
  '顔': 'かお', '国': 'くに', '車': 'くるま', '味': 'あじ', '母': 'はは', '隣': 'となり',
  '家': 'いえ', '駅': 'えき', '音': 'おと', '耳': 'みみ', '言': 'い', '休': 'やす',
  '忘': 'わす', '安': 'やす', '疲': 'つか', '続': 'つづ', '帰': 'かえ', '脱': 'ぬ',
  '暑': 'あつ', '遅': 'おそ', '混': 'こ', '行': 'い', '知': 'し', '持': 'も',
  '受': 'う', '食': 'た', '炒': 'いた', '待': 'ま', '会': 'あ', '何': 'なに',
  '遠': 'とお', '好': 'す', '難': 'むずか', '覚': 'おぼ', '悪': 'わる', '取': 'と',
  // ── Week 1 Day 6 + Week 2 compounds ──
  '日本語': 'にほんご', '携帯電話': 'けいたいでんわ', '一生懸命': 'いっしょうけんめい',
  '自動車': 'じどうしゃ', '真実': 'しんじつ', '悲惨': 'ひさん', '体験': 'たいけん',
  '失敗': 'しっぱい', '田中': 'たなか', '連休': 'れんきゅう', '努力': 'どりょく',
  '希望': 'きぼう', '大学': 'だいがく', '合格': 'ごうかく', '結婚': 'けっこん',
  '手術': 'しゅじゅつ', '愛犬': 'あいけん', '予選': 'よせん', '練習': 'れんしゅう',
  '生徒': 'せいと', '借金': 'しゃっきん', '海外': 'かいがい', '小説': 'しょうせつ',
  '博士': 'はかせ', '間違': 'まちが', '情報': 'じょうほう', '大変': 'たいへん',
  '自信': 'じしん', '授業': 'じゅぎょう', '教室': 'きょうしつ', '布団': 'ふとん',
  '日本': 'にほん', '必要': 'ひつよう', '生活': 'せいかつ', '習慣': 'しゅうかん',
  '健康': 'けんこう', '研究': 'けんきゅう', '以上': 'いじょう', '入場': 'にゅうじょう',
  '無料': 'むりょう', '女性': 'じょせい', '男性': 'だんせい', '化粧': 'けしょう',
  '時計': 'とけい', '成功': 'せいこう', '注意': 'ちゅうい', '信頼': 'しんらい',
  '物価': 'ぶっか', '解決': 'かいけつ', '不安': 'ふあん', '外国': 'がいこく',
  '勉強': 'べんきょう', '目的': 'もくてき', '期待': 'きたい', '苦痛': 'くつう',
  '迷惑': 'めいわく', '本当': 'ほんとう', '選手': 'せんしゅ', '監督': 'かんとく',
  '住民': 'じゅうみん', '社会': 'しゃかい', '参加': 'さんか', '山田': 'やまだ',
  '中心': 'ちゅうしん', '環境': 'かんきょう', '問題': 'もんだい', '番組': 'ばんぐみ',
  '来日': 'らいにち', '自然': 'しぜん', '増加': 'ぞうか', '人口': 'じんこう',
  '資源': 'しげん', '消費': 'しょうひ', '大会': 'たいかい', '通行': 'つうこう',
  '機能': 'きのう', '低下': 'ていか', '発展': 'はってん', '花見': 'はなみ',
  '苦労': 'くろう', '工業': 'こうぎょう', '深刻': 'しんこく',
  // ── Week 1 Day 6 + Week 2 single kanji ──
  '確': 'たし', '決': 'けっ', '死': 'し', '落': 'お', '教': 'おし', '思': 'おも',
  '合': 'あ', '付': 'つ', '読': 'よ', '本': 'ほん', '走': 'はし',
  '抜': 'ぬ', '桜': 'さくら', '終': 'お', '出': 'で', '入': 'はい', '眠': 'ねむ',
  '改': 'あらた', '調': 'しら', '歳': 'さい', '方': 'かた', '雨': 'あめ', '買': 'か',
  '薬': 'くすり', '治': 'なお', '厳': 'きび', '悩': 'なや', '祈': 'いの',
  '大': 'おお', '犬': 'いぬ', '猫': 'ねこ', '飼': 'か', '夢': 'ゆめ', '生': 'い',
  '負': 'ま', '同': 'おな', '始': 'はじ', '高': 'たか', '薄': 'うす', '息': 'いき',
  '苦': 'くる', '増': 'ふ', '町': 'まち', '少': 'すく', '体': 'からだ', '先': 'さき',
  '忙': 'いそが', '遊': 'あそ', '頼': 'たよ', '迷': 'まよ', '親': 'おや',
  // ── Week 3 compounds ──
  '予報': 'よほう', '友達': 'ともだち', '自分': 'じぶん', '契約': 'けいやく',
  '彼女': 'かのじょ', '相手': 'あいて', '離婚': 'りこん', '再婚': 'さいこん',
  '名字': 'みょうじ', '定価': 'ていか', '重要': 'じゅうよう', '会議': 'かいぎ',
  '会社': 'かいしゃ', '税金': 'ぜいきん', '進学': 'しんがく', '就職': 'しゅうしょく',
  '建物': 'たてもの', '建設': 'けんせつ', '中止': 'ちゅうし', '病院': 'びょういん',
  '検査': 'けんさ', '異常': 'いじょう', '工場': 'こうじょう', '火事': 'かじ',
  '風邪': 'かぜ', '日曜日': 'にちようび', '学生': 'がくせい', '手紙': 'てがみ',
  '部屋': 'へや', '去年': 'きょねん', '忘年会': 'ぼうねんかい', '一人': 'ひとり',
  '二人': 'ふたり', '電車': 'でんしゃ', '東京': 'とうきょう', '一方': 'いっぽう',
  '人気': 'にんき', '予想': 'よそう', '専門家': 'せんもんか', '専門': 'せんもん', '景気': 'けいき',
  '回復': 'かいふく', '新商品': 'しんしょうひん', '商品': 'しょうひん', '反面': 'はんめん',
  '便利': 'べんり', '学者': 'がくしゃ', '精神': 'せいしん', '人間': 'にんげん',
  '大気': 'たいき', '濃度': 'のうど', '上昇': 'じょうしょう', '地球': 'ちきゅう',
  '温暖': 'おんだん', '天気': 'てんき', '野菜': 'やさい', '値段': 'ねだん',
  '予算': 'よさん', '無駄': 'むだ',
  // ── Week 3 single kanji ──
  '困': 'こま', '降': 'ふ', '外': 'はず', '足': 'あし', '向': 'む', '歩': 'ある',
  '驚': 'おどろ', '震': 'ふる', '太': 'ふと', '寒': 'さむ', '雪': 'ゆき', '円': 'えん',
  '千': 'せん', '万': 'まん', '払': 'はら', '窓': 'まど', '開': 'あ', '風': 'かぜ',
  '酒': 'さけ', '飲': 'の', '赤': 'あか', '酔': 'よ', '騒': 'さわ', '寝': 'ね',
  '末': 'すえ', '話': 'はな', '来': 'き', '咲': 'さ', '散': 'ち', '花': 'はな',
  '急': 'いそ', '問': 'と', '物': 'もの', '届': 'とど', '夏': 'なつ', '暇': 'ひま',
  '使': 'つか', '服': 'ふく', '立': 'た', '弱': 'よわ', '水': 'みず', '強': 'つよ',
  '熱': 'ねつ', '静': 'しず', '進': 'すす', '売': 'う', '反': 'はん',
  // ── Week 4 compounds ──
  '地図': 'ちず', '相談': 'そうだん', '返事': 'へんじ', '約束': 'やくそく', '理論': 'りろん',
  '実験': 'じっけん', '英語': 'えいご', '学習': 'がくしゅう', '初心者': 'しょしんしゃ',
  '教科書': 'きょうかしょ', '製品': 'せいひん', '生産': 'せいさん', '国内': 'こくない',
  '輸出': 'ゆしゅつ', '場合': 'ばあい', '気持': 'きも', '電話': 'でんわ', '連絡': 'れんらく',
  '変更': 'へんこう', '場所': 'ばしょ', '花火': 'はなび', '意見': 'いけん', '営業': 'えいぎょう',
  '延長': 'えんちょう', '目上': 'めうえ', '失礼': 'しつれい', '都市': 'とし', '農村': 'のうそん',
  '法律': 'ほうりつ', '未成年': 'みせいねん', '飲酒': 'いんしゅ', '地震': 'じしん',
  '被害': 'ひがい', '過去': 'かこ', '最大': 'さいだい', '汚職': 'おしょく', '事件': 'じけん',
  '逮捕': 'たいほ', '息子': 'むすこ', '開発': 'かいはつ', '言葉': 'ことば', '先生': 'せんせい',
  '進路': 'しんろ', '医療': 'いりょう', '進歩': 'しんぽ', '新種': 'しんしゅ', '全国': 'ぜんこく',
  '大学生': 'だいがくせい', '我が家': 'わがや', '国家': 'こっか', '看護': 'かんご',
  '戦争': 'せんそう', '卒業': 'そつぎょう', '簡単': 'かんたん', '日常': 'にちじょう',
  '英会話': 'えいかいわ', '会話': 'かいわ', '使用': 'しよう', '長年': 'ながねん',
  '図書館': 'としょかん', '図書': 'としょ', '利用': 'りよう', '学業': 'がくぎょう',
  '資料': 'しりょう', '説明': 'せつめい', '開店': 'かいてん', '関係': 'かんけい',
  '新製品': 'しんせいひん', '調査': 'ちょうさ', '台風': 'たいふう', '影響': 'えいきょう',
  '関東': 'かんとう', '地方': 'ちほう', '範囲': 'はんい', '昨日': 'きのう',
  // ── Week 4 single kanji ──
  '近': 'ちか', '考': 'かんが', '選': 'えら', '守': 'まも', '量': 'りょう', '戻': 'もど',
  '対': 'たい', '減': 'へ', '禁': 'きん', '命': 'いのち', '失': 'うしな', '盗': 'ぬす',
  '繰': 'く', '返': 'かえ', '狭': 'せま', '楽': 'たの', '長': 'なが', '広': 'ひろ',
  '点': 'てん', '単': 'たん', '努': 'つと',
  // ── Week 5 compounds ──
  '文法': 'ぶんぽう', '全部': 'ぜんぶ', '実力': 'じつりょく', '国際': 'こくさい',
  '依頼': 'いらい', '富士山': 'ふじさん', '名前': 'なまえ', '名所': 'めいしょ',
  '大勢': 'おおぜい', '遅刻': 'ちこく', '親切': 'しんせつ', '手伝': 'てつだ',
  '実物': 'じつぶつ', '当然': 'とうぜん', '同然': 'どうぜん', '中古': 'ちゅうこ',
  '新品': 'しんぴん', '財産': 'ざいさん', '無職': 'むしょく', '給料': 'きゅうりょう',
  '水泳': 'すいえい', '一流': 'いちりゅう', '快適': 'かいてき', '丈夫': 'じょうぶ',
  '投資': 'とうし', '価値': 'かち', '納得': 'なっとく', '成績': 'せいせき',
  '学校': 'がっこう', '汚染': 'おせん', '飛行機': 'ひこうき', '泥棒': 'どろぼう',
  '作文': 'さくぶん', '葬式': 'そうしき', '同窓会': 'どうそうかい', '後悔': 'こうかい',
  '事実': 'じじつ', '制作': 'せいさく', '写真': 'しゃしん', '訪問': 'ほうもん',
  '計画': 'けいかく', '経験': 'けいけん', '教育': 'きょういく', '結果': 'けっか',
  '能力': 'のうりょく', '青空': 'あおぞら', '元気': 'げんき', '指導': 'しどう',
  '論文': 'ろんぶん', '裏切': 'うらぎ', '林': 'はやし',
  // ── Week 5 single kanji ──
  '信': 'しん', '放': 'ほう', '訳': 'わけ', '引': 'ひ', '許': 'ゆる', '現': 'あらわ',
  '時': 'とき', '止': 'と', '流': 'なが', '当': 'あ', '前': 'まえ', '嫌': 'きら',
  '勝': 'か', '怒': 'おこ', '首': 'くび', '若': 'わか', '泳': 'およ', '壊': 'こわ',
  '乗': 'の', '良': 'よ', '美': 'うつく', '片': 'かた', '祝': 'いわ', '直': 'なお',
  '空': 'そら', '泣': 'な', '怖': 'こわ', '際': 'さい', '喜': 'よろこ', '語': 'かた',
  '市': 'し', '応': 'おう', '書': 'か', '基': 'もと', '客': 'きゃく',
  // ── Week 6 compounds ──
  '以来': 'いらい', '入学': 'にゅうがく', '一度': 'いちど', '試合': 'しあい', '立場': 'たちば',
  '入り口': 'いりぐち', '品質': 'ひんしつ', '症状': 'しょうじょう', '心臓': 'しんぞう',
  '社長': 'しゃちょう', '服装': 'ふくそう', '題名': 'だいめい', '外国人': 'がいこくじん',
  '現代': 'げんだい', '食品': 'しょくひん', '手続': 'てつづ', '許可': 'きょか',
  '再開発': 'さいかいはつ', '一番': 'いちばん', '二度': 'にど', '絶対': 'ぜったい',
  '上級': 'じょうきゅう', '結局': 'けっきょく', '犯人': 'はんにん', '表現': 'ひょうげん',
  '全力': 'ぜんりょく', '前進': 'ぜんしん', '愛情': 'あいじょう', '裏返': 'うらがえ',
  '中国': 'ちゅうごく', '野球': 'やきゅう', '憲法': 'けんぽう', '改正': 'かいせい',
  '論争': 'ろんそう', '制度': 'せいど', '京都': 'きょうと', '役割': 'やくわり',
  '主張': 'しゅちょう', '疑問': 'ぎもん', '現地': 'げんち', '解散': 'かいさん', '世界': 'せかい',
  // ── Week 6 single kanji ──
  '住': 'す', '折': 'おり', '寄': 'よ', '借': 'か', '店': 'みせ', '口': 'くち', '面': 'めん',
  '周': 'まわ', '暗': 'くら', '妙': 'みょう', '昔': 'むかし', '速': 'はや',
  '歌': 'うた', '違': 'ちが', '必': 'かなら', '後': 'あと', '積': 'つ', '重': 'かさ',
  '様': 'さま', '争': 'あらそ',
  // ── Week 7 compounds ──
  '国籍': 'こくせき', '本日': 'ほんじつ', '歓迎': 'かんげい', '年齢': 'ねんれい',
  '性別': 'せいべつ', '昼夜': 'ちゅうや', '男女': 'だんじょ', '季節': 'きせつ',
  '鼻水': 'はなみず', '受験': 'じゅけん', '下手': 'へた', '夜中': 'よなか',
  '常識': 'じょうしき', '専門店': 'せんもんてん', '感謝': 'かんしゃ', '友人': 'ゆうじん',
  '祖父': 'そふ', '今夜': 'こんや', '四国': 'しこく', '上陸': 'じょうりく',
  '満員': 'まんいん', '通勤': 'つうきん', '渋滞': 'じゅうたい', '発明': 'はつめい',
  '調整': 'ちょうせい', '機械': 'きかい', '祝日': 'しゅくじつ', '休業': 'きゅうぎょう',
  '契機': 'けいき', '独立': 'どくりつ', '住所': 'じゅうしょ', '安全': 'あんぜん',
  '対策': 'たいさく', '強化': 'きょうか', '通り': 'とおり',
  // ── Week 7 single kanji ──
  '集': 'あつ', '靴': 'くつ', '鼻': 'はな', '聞': 'き', '似': 'に', '心': 'こころ',
  '編': 'あ', '愛': 'あい', '贈': 'おく', '恐': 'おそ', '割': 'わ', '壁': 'かべ',
  '倒': 'たお', '多': 'おお', '幸': 'しあわ', '手': 'て', '越': 'こ', '机': 'つくえ',
  // ── Week 8 compounds ──
  '反対': 'はんたい', '三日': 'みっか', '出発': 'しゅっぱつ', '我々': 'われわれ',
  '設計': 'せっけい', '来週': 'らいしゅう', '火曜日': 'かようび', '午後': 'ごご',
  '午前': 'ごぜん', '挑戦': 'ちょうせん', '欠席': 'けっせき', '二十歳': 'はたち',
  '外出': 'がいしゅつ', '具合': 'ぐあい', '誠実': 'せいじつ', '教授': 'きょうじゅ',
  '講義': 'こうぎ', '集合': 'しゅうごう', '飲食': 'いんしょく', '禁止': 'きんし',
  '詳細': 'しょうさい', '次回': 'じかい', '日時': 'にちじ', '予定': 'よてい',
  '大敗': 'たいはい', '入賞': 'にゅうしょう', '才能': 'さいのう', '美人': 'びじん',
  '性格': 'せいかく', '湿気': 'しっけ', '年々': 'ねんねん', '月曜日': 'げつようび',
  '木曜日': 'もくようび', '金曜日': 'きんようび', '水曜日': 'すいようび',
  '収集': 'しゅうしゅう', '毎月': 'まいつき',
  // ── Week 8 single kanji ──
  '道': 'みち', '働': 'はたら', '父': 'ちち', '吸': 'す', '朝': 'あさ', '願': 'ねが',
  '春': 'はる', '兄': 'あに', '貧': 'まず', '破': 'やぶ', '過': 'す', '卵': 'たまご',
  '棚': 'たな', '除': 'のぞ', '別': 'べつ', '件': 'けん', '塗': 'ぬ', '痛': 'いた',
  '要': 'よう', '力': 'ちから', '差': 'さ', '泊': 'と', '古': 'ふる', '燃': 'も',
};
const FURI_RE = new RegExp(Object.keys(FURIGANA).sort((a, b) => b.length - a.length).join('|'), 'g');
function furi(text) {
  return text.replace(FURI_RE, m => `<ruby>${m}<rt>${FURIGANA[m]}</rt></ruby>`);
}

function buildGrammar() {
  return `
    <div class="animate-in">
      <h1 class="mb-1">Grammar 文法</h1>
      <p class="text-muted text-sm mb-4">N2 Sou Matome (week by week) + your N3 reference</p>
      <div class="flex gap-2 mb-4">
        <button class="chip ${state.grammarTab === 'n2' ? 'active' : ''}" onclick="setGrammarTab('n2')">N2 総まとめ</button>
        <button class="chip ${state.grammarTab === 'n3' ? 'active' : ''}" onclick="setGrammarTab('n3')">N3 reference</button>
      </div>
      ${state.grammarTab === 'n2' ? buildN2Grammar() : buildN3Grammar()}
    </div>
  `;
}

function n2Stats() {
  const weeks = JAPANESE_CONTENT.n2Grammar.weeks;
  let totalDays = 0, doneDays = 0, totalPoints = 0;
  weeks.forEach(w => w.days.forEach(d => {
    totalDays++;
    totalPoints += d.points.length;
    if (state.grammarProgress[`w${w.week}d${d.day}`]) doneDays++;
  }));
  return { totalDays, doneDays, totalPoints };
}

function buildN2Grammar() {
  const { weeks } = JAPANESE_CONTENT.n2Grammar;
  const st = n2Stats();
  const pct = Math.round((st.doneDays / st.totalDays) * 100);
  return `
    <div class="card mb-4" style="border-color:var(--border-strong)">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium jp">日本語総まとめ N2 文法</span>
        <span class="text-sm text-muted">${st.doneDays}/${st.totalDays} days</span>
      </div>
      <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>
      <p class="text-xs text-muted mt-2">${st.totalPoints} grammar points loaded · 2 pages a day, like the book</p>
    </div>

    ${weeks.map(w => `
      <div class="mb-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="badge badge-accent">第${w.week}週</span>
          <h2 class="jp">${w.title}</h2>
        </div>
        <p class="text-xs text-muted mb-3">${w.titleEn} — ${w.theme}</p>
        <div class="flex flex-col gap-2">
          ${w.days.map(d => buildDayCard(w, d)).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

function buildDayCard(w, d) {
  const key = `w${w.week}d${d.day}`;
  const open = state.openDay === key;
  const done = state.grammarProgress[key];
  return `
    <div class="card" style="padding:0;overflow:hidden">
      <div class="flex items-center justify-between p-4" style="cursor:pointer" onclick="toggleDay('${key}')">
        <div class="flex items-center gap-3">
          <div style="width:30px;height:30px;border-radius:50%;border:1.5px solid ${done ? 'var(--accent)' : 'var(--border-strong)'};background:${done ? 'var(--accent)' : 'transparent'};color:${done ? '#fff' : 'var(--text-faint)'};display:flex;align-items:center;justify-content:center;font-size:0.8rem;flex-shrink:0">
            ${done ? '✓' : d.day}
          </div>
          <div>
            <div class="text-xs text-muted display">${d.day}日目</div>
            <div class="font-medium text-sm jp">${d.theme}</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-muted">${d.points.length} pts</span>
          <span style="transform:rotate(${open ? 180 : 0}deg);transition:transform 0.2s;color:var(--text-muted)">${icons.chevron || '▾'}</span>
        </div>
      </div>
      ${open ? `
        <div class="animate-in" style="border-top:1px solid var(--border);padding:12px 14px">
          <div class="flex flex-col gap-3">
            ${d.points.map(buildN2PointCard).join('')}
          </div>
          <button class="btn ${done ? 'btn-secondary' : 'btn-gold'} btn-full mt-4" onclick="event.stopPropagation(); toggleDayDone('${key}')">
            ${done ? '✓ Studied — tap to undo' : 'Mark this day studied'}
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function buildN2PointCard(p) {
  return `
    <div class="card" style="border-left:3px solid var(--accent)">
      <div class="jp font-bold" style="color:var(--accent);font-size:1.15rem">${p.pattern}</div>
      <div class="text-sm font-medium mt-1">${p.meaning}</div>
      <div class="text-xs text-muted mt-1 jp">接続: ${p.connection}</div>
      <div class="flex flex-col gap-2 mt-3">
        ${p.examples.map(ex => `
          <div class="bg-surface2 rounded p-3">
            <p class="jp text-sm" style="line-height:2">${furi(ex.jp)}</p>
            <p class="text-xs text-muted mt-1">${ex.en}</p>
          </div>
        `).join('')}
      </div>
      ${p.note ? `<p class="text-xs text-muted mt-2" style="line-height:1.5">💡 ${p.note}</p>` : ''}
    </div>
  `;
}

function buildN3Grammar() {
  return `
    <p class="text-muted text-sm mb-3">N3 patterns used in your scenarios</p>
    <div class="flex flex-col gap-3">
      ${JAPANESE_CONTENT.grammarPoints.map(g => `
        <div class="card" style="border-left:3px solid var(--primary)">
          <div class="jp font-bold" style="color:var(--primary);font-size:1.1rem">${g.pattern}</div>
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
  `;
}

function setGrammarTab(t) { state.grammarTab = t; render(); window.scrollTo(0, 0); }
function toggleDay(key) { state.openDay = state.openDay === key ? null : key; render(); }
function toggleDayDone(key) { state.grammarProgress[key] = !state.grammarProgress[key]; save(); render(); }

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
