/* ═══════════════════════════════════════════════════════════════════
   Study Hub — usage tracker (shared across apps via localStorage)
   Records: first-use date, per-day time per app, sessions, peak hour.
   Each app page (japanese/polymer) accumulates time via a heartbeat.
   The hub reads window.StudyUsage to render the dashboard.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  const KEY = 'study_usage_v1';

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
  function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }
  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  // Which app is this page? (null = hub or other)
  const app = location.pathname.includes('/polymer/') ? 'polymer'
            : location.pathname.includes('/japanese/') ? 'japanese'
            : location.pathname.includes('/history/') ? 'history'
            : null;

  function ensure(d) {
    if (!d.firstUse) d.firstUse = todayStr();
    if (!d.days) d.days = {};       // "YYYY-MM-DD" -> { japanese, polymer, sessions }
    if (!d.hours) d.hours = {};     // 0..23 -> seconds
    if (!d.sessions) d.sessions = 0;
    return d;
  }
  function dayBucket(d, date) {
    if (!d.days[date]) d.days[date] = { japanese: 0, polymer: 0, sessions: 0 };
    return d.days[date];
  }

  // Expose read API for the hub
  window.StudyUsage = { get: () => ensure(load()) };

  if (!app) { const d = ensure(load()); save(d); return; }   // hub: just ensure structure

  // ── Session start ───────────────────────────────────────────────
  let d = ensure(load());
  d.sessions = (d.sessions || 0) + 1;
  dayBucket(d, todayStr()).sessions++;
  d.lastUse = todayStr();
  save(d);

  // ── Heartbeat: accumulate active time while the tab is visible ───
  let acc = 0;             // unflushed seconds
  let last = Date.now();

  function flush() {
    if (acc <= 0) return;
    const data = ensure(load());
    const t = todayStr();
    const b = dayBucket(data, t);
    b[app] = (b[app] || 0) + acc;
    data.hours[new Date().getHours()] = (data.hours[new Date().getHours()] || 0) + acc;
    data.lastUse = t;
    save(data);
    acc = 0;
  }

  setInterval(() => {
    const now = Date.now();
    if (document.hidden) { last = now; return; }
    acc += Math.min((now - last) / 1000, 20);   // cap to avoid huge jumps after sleep
    last = now;
    if (acc >= 10) flush();
  }, 4000);

  document.addEventListener('visibilitychange', () => { if (document.hidden) flush(); });
  window.addEventListener('pagehide', flush);
  window.addEventListener('beforeunload', flush);
})();
