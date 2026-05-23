/* ============================================================
   CERTMASTERY — QUIZ ENGINE WITH AUTH & TRACKING
   ============================================================ */

// ---- CONSTANTS ----
const TIMER_SECONDS = 60;
const ADMIN_PASSWORD = 'admin@6383';
const DB_PREFIX = 'cm_';

const CATEGORIES = [
  { id: 'all',        label: 'All Days',          color: '#6366f1' },
  { id: 'python',     label: 'Python',            color: '#3b82f6' },
  { id: 'sql',        label: 'SQL',               color: '#10b981' },
  { id: 'de',         label: 'Data Engineering',  color: '#8b5cf6' },
  { id: 'spark',      label: 'Spark',             color: '#f59e0b' },
  { id: 'snowflake',  label: 'Snowflake',         color: '#06b6d4' },
  { id: 'dbt',        label: 'DBT',               color: '#f43f5e' },
  { id: 'datastage',  label: 'DataStage',         color: '#6366f1' },
  { id: 'idmc',       label: 'IDMC',              color: '#14b8a6' }
];

const DAY_META = [
  // ---- PYTHON (Days 1-3) ----
  { day: 1,  key: 'day01', title: 'Python Refresher - Basics',        category: 'python',    topics: ['Loops & Comprehensions', 'Functions & Probability', 'Error Handling (try/except)', 'Basic Analytics', 'Jupyter Notebooks', 'File I/O & Data Structures'] },
  { day: 2,  key: 'day02', title: 'Python Refresher - Intermediate',  category: 'python',    topics: ['APIs & HTTP Requests', 'Lambda, Map, Filter', 'Classes & OOP', 'Decorators & Generators', 'Pandas DataFrames', 'Data Visualization'] },
  { day: 3,  key: 'day03', title: 'Python Refresher - Advanced',      category: 'python',    topics: ['Scheduling with Cron', 'Task Schedulers', 'Unit Testing (pytest)', 'Test Cases & Mocking', 'Capstone Mini Project'] },
  // ---- SQL (Days 4-8) ----
  { day: 4,  key: 'day04', title: 'SQL Fundamentals',                 category: 'sql',       topics: ['Databases & Schemas', 'Tables & Data Types', 'SELECT, WHERE, DISTINCT', 'JOINs (INNER, LEFT, RIGHT, FULL)', 'AND/OR/IN/BETWEEN/LIKE', 'Intro to Data Modeling'] },
  { day: 5,  key: 'day05', title: 'SQL Intermediate',                 category: 'sql',       topics: ['Join Optimization', 'Aggregations & GROUP BY', 'HAVING Clause', 'Subqueries & CTEs', 'Window Functions', 'Analytical Functions'] },
  { day: 6,  key: 'day06', title: 'SQL Advanced',                     category: 'sql',       topics: ['Advanced Transformations', 'Stored Procedures', 'Nested Data Parsing', 'Data Mart Design', 'MERGE (Upsert)', 'CTAS'] },
  { day: 7,  key: 'day07', title: 'SQL Processing & Performance',     category: 'sql',       topics: ['Incremental Processing', 'Streaming Concepts', 'Bulk Loading', 'File Format Handling', 'Indexing & Query Plans', 'Caching Concepts'] },
  { day: 8,  key: 'day08', title: 'SQL Security & Capstone',          category: 'sql',       topics: ['Metadata & Monitoring', 'Roles & Privileges', 'Row-Level Security', 'Stored Procedures', 'Capstone Project Design'] },
  // ---- DATA ENGINEERING (Days 9-16) ----
  { day: 9,  key: 'day09', title: 'Data Engineering Fundamentals',    category: 'de',        topics: ['Role of Data Engineer', 'OLTP vs OLAP', 'ETL vs ELT', 'Batch vs Streaming', 'Data Structures & Formats'] },
  { day: 10, key: 'day10', title: 'Modern Data Architecture',         category: 'de',        topics: ['Data Platforms', 'Data Catalogs', 'Data Governance', 'Data Quality Frameworks', 'Lakehouse Architecture'] },
  { day: 11, key: 'day11', title: 'Data Warehouse Architecture',      category: 'de',        topics: ['Star Schema', 'Snowflake Schema', 'Fact & Dimension Tables', 'SCD Types', 'Kimball vs Inmon'] },
  { day: 12, key: 'day12', title: 'SQL for Data Engineering',         category: 'de',        topics: ['DDL Commands', 'DML Commands', 'DCL & TCL', 'Query Optimization Basics', 'Performance Tuning'] },
  { day: 13, key: 'day13', title: 'Advanced SQL for DE',              category: 'de',        topics: ['Window Functions Deep Dive', 'CTEs & Recursive CTEs', 'Query Optimization', 'Execution Plans', 'Performance Patterns'] },
  { day: 14, key: 'day14', title: 'Regex & UDFs',                     category: 'de',        topics: ['Regex Patterns', 'Pattern Matching', 'UDF Creation', 'File Handling Patterns', 'Data Transformation'] },
  { day: 15, key: 'day15', title: 'Version Data & SCD',               category: 'de',        topics: ['SCD Type 1', 'SCD Type 2', 'SCD Type 3', 'History Tracking', 'Slowly Changing Dimensions'] },
  { day: 16, key: 'day16', title: 'DE Best Practices',                category: 'de',        topics: ['Industry Best Practices', 'Modern Data Stack', 'Data Mesh', 'Data Architecture Patterns', 'Certification Review'] },
  // ---- SPARK (Days 17-21) ----
  { day: 17, key: 'day17', title: 'Introduction to Spark',            category: 'spark',     topics: ['Spark Architecture', 'RDDs & DataFrames', 'Cluster Computing', 'Spark Context', 'Lazy Evaluation'] },
  { day: 18, key: 'day18', title: 'PySpark Basics',                   category: 'spark',     topics: ['DataFrame Operations', 'Transformations & Actions', 'Data Reading & Writing', 'Schema Definition', 'Basic Aggregations'] },
  { day: 19, key: 'day19', title: 'PySpark Advanced',                 category: 'spark',     topics: ['Joins & Aggregations', 'UDFs in Spark', 'Window Functions', 'Performance Tuning', 'Broadcast Variables'] },
  { day: 20, key: 'day20', title: 'Spark Optimizations',              category: 'spark',     topics: ['Partitioning Strategies', 'Caching & Persistence', 'Catalyst Optimizer', 'Shuffle Operations', 'Memory Management'] },
  { day: 21, key: 'day21', title: 'Spark ETL Use Cases',              category: 'spark',     topics: ['ETL Pipeline Design', 'Data Lake Integration', 'Delta Lake Basics', 'Structured Streaming', 'End-to-End Pipelines'] },
  // ---- SNOWFLAKE (Days 22-34) ----
  { day: 22, key: 'day22', title: 'Snowflake Overview & Architecture',category: 'snowflake', topics: ['Cloud Architecture', 'Editions & Pricing', '3-Layer Architecture', 'Virtual Warehouses', 'Storage Layer'] },
  { day: 23, key: 'day23', title: 'Data Loading & Snowpipe',          category: 'snowflake', topics: ['Stages (Internal/External)', 'Snowpipe Auto-ingest', 'Streams & Tasks', 'Connectors', 'File Formats'] },
  { day: 24, key: 'day24', title: 'COPY INTO & Bulk Loading',         category: 'snowflake', topics: ['COPY INTO Command', 'Loading Options', 'Micro-partitions', 'Data Clustering', 'Error Handling'] },
  { day: 25, key: 'day25', title: 'Data Sharing & Marketplace',       category: 'snowflake', topics: ['Secure Data Sharing', 'Data Exchange', 'Marketplace', 'Reader Accounts', 'Share Objects'] },
  { day: 26, key: 'day26', title: 'Virtual Warehouses',               category: 'snowflake', topics: ['Warehouse Sizing', 'Multi-cluster Warehouses', 'Auto-suspend & Resume', 'Cost Optimization', 'Resource Monitors'] },
  { day: 27, key: 'day27', title: 'Caching & Performance',            category: 'snowflake', topics: ['Result Cache', 'Metadata Cache', 'Warehouse Cache', 'Query Profile', 'Query Optimization'] },
  { day: 28, key: 'day28', title: 'DDL/DML & Dimensional Modeling',   category: 'snowflake', topics: ['DDL in Snowflake', 'DML Operations', 'Star Schema Design', 'Dimension Tables', 'Fact Tables'] },
  { day: 29, key: 'day29', title: 'Semi & Unstructured Data',         category: 'snowflake', topics: ['VARIANT Data Type', 'FLATTEN Function', 'LATERAL Joins', 'Directory Tables', 'JSON/Parquet Handling'] },
  { day: 30, key: 'day30', title: 'Time Travel & Cloning',            category: 'snowflake', topics: ['Time Travel', 'Fail-safe', 'Zero-Copy Cloning', 'Retention Period', 'UNDROP Command'] },
  { day: 31, key: 'day31', title: 'Security & Governance',            category: 'snowflake', topics: ['RBAC', 'Row-Level Security', 'Column-Level Security', 'Tags & Governance', 'Network Policies'] },
  { day: 32, key: 'day32', title: 'Tasks, Sequences & Stored Procs',  category: 'snowflake', topics: ['Tasks & Scheduling', 'Sequences', 'Stored Procedures', 'JavaScript UDFs', 'Task Dependencies'] },
  { day: 33, key: 'day33', title: 'Data Pipelines & Monitoring',      category: 'snowflake', topics: ['Pipeline Design', 'Monitoring Dashboards', 'Query History', 'Account Usage', 'Performance Tuning'] },
  { day: 34, key: 'day34', title: 'Snowflake Advanced',               category: 'snowflake', topics: ['Stored Procedures Deep Dive', 'JavaScript UDFs', 'External Functions', 'Materialized Views', 'Dynamic Data Masking'] },
  // ---- DBT (Days 35-43) ----
  { day: 35, key: 'day35', title: 'Introduction to dbt',              category: 'dbt',       topics: ['What is dbt', 'dbt CLI vs Cloud', 'Project Structure', 'Models Overview', 'Materializations'] },
  { day: 36, key: 'day36', title: 'dbt Models & Materializations',    category: 'dbt',       topics: ['Table Materialization', 'View Materialization', 'Incremental Models', 'Ephemeral Models', 'Jinja & Macros'] },
  { day: 37, key: 'day37', title: 'dbt Project Configuration',        category: 'dbt',       topics: ['profiles.yml', 'dbt_project.yml', 'Environment Profiles', 'Target Configuration', 'Variable Management'] },
  { day: 38, key: 'day38', title: 'dbt Sources & Seeds',              category: 'dbt',       topics: ['Defining Sources', 'Schema Configuration', 'Source Properties', 'Seeds & CSV Loading', 'Ref & Source Functions'] },
  { day: 39, key: 'day39', title: 'dbt Source Freshness',             category: 'dbt',       topics: ['Freshness Testing', 'Loaded_at Field', 'Warn & Error Thresholds', 'Snapshot Freshness', 'Automation'] },
  { day: 40, key: 'day40', title: 'dbt Packages',                     category: 'dbt',       topics: ['packages.yml', 'Installing Packages', 'dbt_utils', 'Custom Packages', 'Package Dependencies'] },
  { day: 41, key: 'day41', title: 'dbt Testing & Data Quality',       category: 'dbt',       topics: ['Generic Tests', 'Custom Tests', 'test_accepted_values', 'Unique & Not Null', 'Schema Tests'] },
  { day: 42, key: 'day42', title: 'dbt Documentation & Lineage',      category: 'dbt',       topics: ['dbt docs generate', 'schema.yml Descriptions', 'Lineage Graphs', 'DAG Visualization', 'Markdown Docs'] },
  { day: 43, key: 'day43', title: 'dbt Capstone Project',             category: 'dbt',       topics: ['End-to-End Pipeline', 'Snowflake Integration', 'Testing Strategy', 'Documentation', 'Best Practices'] },
  // ---- DATASTAGE (Days 44-46) ----
  { day: 44, key: 'day44', title: 'DataStage Architecture',           category: 'datastage', topics: ['Designer Client', 'Director Client', 'Administrator', 'Repository', 'Engine Tier'] },
  { day: 45, key: 'day45', title: 'DataStage Parallel Jobs',          category: 'datastage', topics: ['Sequential Jobs', 'Parallel Jobs', 'Transformer Stage', 'Join Stages', 'Container Design'] },
  { day: 46, key: 'day46', title: 'DataStage Case Study',             category: 'datastage', topics: ['ETL Design Patterns', 'Error Handling', 'Performance Tuning', 'Job Scheduling', 'End-to-End Project'] },
  // ---- IDMC (Days 47-51) ----
  { day: 47, key: 'day47', title: 'IDMC Overview',                    category: 'idmc',      topics: ['Cloud Concepts', 'Services & Architecture', 'IDMC Components', 'Integration Overview', 'Administration Basics'] },
  { day: 48, key: 'day48', title: 'IDMC Data Integration',            category: 'idmc',      topics: ['Mapping Designer', 'Integration Tasks', 'Adapters', 'Data Types & Transforms', 'Connection Management'] },
  { day: 49, key: 'day49', title: 'IDMC Administration',              category: 'idmc',      topics: ['Secure Agents', 'Service Agents', 'Runtime Environments', 'User Management', 'Organization Admin'] },
  { day: 50, key: 'day50', title: 'Advanced IDMC',                    category: 'idmc',      topics: ['Transformations', 'Parameters & Variables', 'Error Handling', 'Monitoring & Logs', 'Performance'] },
  { day: 51, key: 'day51', title: 'IDMC Case Study',                  category: 'idmc',      topics: ['End-to-End Pipeline', 'Client Requirements', 'ETL Capture', 'Testing & Validation', 'Deployment'] }
];

// ============================================================
// AUTH & USER MANAGEMENT
// ============================================================
// ============================================================
// AUTH & USER MANAGEMENT (CLIENT-SERVER)
// ============================================================
async function fetchServer(endpoint, method = 'GET', data = null) {
  const opts = { method, headers: {} };
  if (data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }
  const res = await fetch('/api/' + endpoint, opts);
  if (!res.ok) throw await res.json();
  return await res.json();
}

async function getUsers() {
  try {
    const data = await fetchServer('data');
    return data.users || {};
  } catch (err) {
    console.error('Failed to get users:', err);
    return {};
  }
}

function getCurrentUser() {
  try { return JSON.parse(sessionStorage.getItem(DB_PREFIX + 'currentUser')); }
  catch { return null; }
}

function setCurrentUser(user) {
  sessionStorage.setItem(DB_PREFIX + 'currentUser', JSON.stringify(user));
}

function clearCurrentUser() {
  sessionStorage.removeItem(DB_PREFIX + 'currentUser');
}

// Simple hash for password
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return 'h_' + Math.abs(hash).toString(36);
}

async function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');

  errEl.style.display = 'none';

  try {
    const res = await fetchServer('login', 'POST', { username, passwordHash: simpleHash(password), time: Date.now() });
    const userData = res.userData;

    if (userData.status === 'pending') {
      errEl.textContent = 'Your account is pending admin approval. Please wait for the admin to approve your registration.';
      errEl.style.display = 'block';
      return;
    }
    if (userData.status === 'kicked' || userData.status === 'rejected') {
      errEl.textContent = 'Your account has been disabled by the administrator. Contact admin for assistance.';
      errEl.style.display = 'block';
      return;
    }

    // Sync remote data to local DB
    if (userData.progress) setUserData('progress', userData.progress);
    if (userData.bookmarks) setUserData('bookmarks', userData.bookmarks);
    if (userData.inProgressQuiz) setUserData('inProgressQuiz', userData.inProgressQuiz);
    
    // Save session start
    userData.sessionStart = Date.now();
    await fetchServer('sync', 'POST', { username, updates: { sessionStart: userData.sessionStart } });

    // Store locally for beforeunload calculation
    sessionStorage.setItem(DB_PREFIX + 'sessionStart', userData.sessionStart.toString());
    sessionStorage.setItem(DB_PREFIX + 'totalTimeMs', (userData.totalTimeMs || 0).toString());

    setCurrentUser({ username, fullName: userData.fullName });
    enterApp();
  } catch (err) {
    errEl.textContent = err.error || 'Login failed';
    errEl.style.display = 'block';
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const fullName = document.getElementById('reg-fullname').value.trim();
  const username = document.getElementById('reg-username').value.trim().toLowerCase();
  const password = document.getElementById('reg-password').value;
  const errEl = document.getElementById('register-error');
  const mobile = document.getElementById('reg-mobile').value.trim();

  errEl.style.display = 'none';

  if (!/^[0-9]{10}$/.test(mobile)) {
    errEl.textContent = 'Please enter a valid 10-digit mobile number.';
    errEl.style.display = 'block';
    return;
  }

  if (!/^[a-z0-9_]+$/.test(username)) {
    errEl.textContent = 'Username can only contain letters, numbers, and underscores.';
    errEl.style.display = 'block';
    return;
  }

  const userData = {
    fullName,
    mobile,
    passwordHash: simpleHash(password),
    status: 'pending',
    createdAt: Date.now(),
    lastLogin: null,
    sessionStart: null,
    totalTimeMs: 0,
    loginHistory: [],
    progress: {},
    bookmarks: {}
  };

  try {
    await fetchServer('register', 'POST', { username, mobile, userData });
    
    // Show pending message
    errEl.style.display = 'block';
    errEl.style.background = 'rgba(245, 158, 11, 0.12)';
    errEl.style.color = '#f59e0b';
    errEl.style.borderColor = 'rgba(245, 158, 11, 0.3)';
    errEl.textContent = 'Account created! Please wait for admin approval before you can sign in.';
    document.getElementById('register-form').reset();
  } catch (err) {
    errEl.textContent = err.error || 'Registration failed';
    errEl.style.display = 'block';
  }
}

async function handleLogout() {
  const user = getCurrentUser();
  if (user) {
    try {
      const users = await getUsers();
      const userData = users[user.username];
      if (userData && userData.sessionStart) {
        const elapsed = Date.now() - userData.sessionStart;
        const totalTimeMs = (userData.totalTimeMs || 0) + elapsed;
        const history = userData.loginHistory || [];
        if (history.length > 0) {
          history[history.length - 1].logoutAt = Date.now();
          history[history.length - 1].duration = elapsed;
        }
        await fetchServer('sync', 'POST', {
          username: user.username,
          updates: { totalTimeMs, loginHistory: history, sessionStart: null }
        });
      }
    } catch(e) {}
  }
  stopTimer();
  clearCurrentUser();
  showLogin();
}

async function adminLogin(e) {
  e.preventDefault();
  const password = document.getElementById('admin-password').value;
  const errEl = document.getElementById('admin-error');

  try {
    const res = await fetchServer('admin/login', 'POST', { password });
    sessionStorage.setItem(DB_PREFIX + 'adminAuth', res.token);
    renderAdminDashboard();
  } catch (err) {
    errEl.textContent = err.error || 'Incorrect admin password.';
    errEl.style.display = 'block';
  }
}

function adminLogout() {
  sessionStorage.removeItem(DB_PREFIX + 'adminAuth');
  showLogin();
}

function showLogin() {
  document.getElementById('header').style.display = 'none';
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('login-view').classList.add('active');
}

function showRegister() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('register-view').classList.add('active');
}

function showAdminLogin() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('admin-login-view').classList.add('active');
}

function enterApp() {
  const user = getCurrentUser();
  if (!user) { showLogin(); return; }

  document.getElementById('header').style.display = '';
  document.getElementById('user-greeting').textContent = 'Hi, ' + user.fullName.split(' ')[0];

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  // Check if there's a saved in-progress quiz
  const inProgress = getUserData('inProgressQuiz');
  if (inProgress && inProgress.dayKey) {
    resumeQuiz(inProgress);
  } else {
    showView('dashboard-view');
    renderDashboard();
    updateGlobalProgress();
  }
}

// ============================================================
// PER-USER STORAGE (SYNC WITH SERVER)
// ============================================================
function getUserKey(key) {
  const user = getCurrentUser();
  if (!user) return DB_PREFIX + key;
  return DB_PREFIX + user.username + '_' + key;
}

function getUserData(key, fallback) {
  try { return JSON.parse(localStorage.getItem(getUserKey(key))) || fallback; }
  catch { return fallback; }
}

function setUserData(key, value) {
  try { localStorage.setItem(getUserKey(key), JSON.stringify(value)); } catch(e) {}
  
  // Also push to server
  const user = getCurrentUser();
  if (user) {
    fetchServer('sync', 'POST', { username: user.username, updates: { [key]: value } }).catch(() => {});
  }
}

function getDayProgress() { return getUserData('progress', {}); }

function saveDayProgress(dayKey, data) {
  const p = getDayProgress();
  p[dayKey] = data;
  setUserData('progress', p);
}

function getBookmarks() { return getUserData('bookmarks', {}); }

function toggleBookmark(dayKey, qIdx) {
  const bm = getBookmarks();
  if (!bm[dayKey]) bm[dayKey] = [];
  const i = bm[dayKey].indexOf(qIdx);
  if (i >= 0) bm[dayKey].splice(i, 1);
  else bm[dayKey].push(qIdx);
  setUserData('bookmarks', bm);
}

function isBookmarked(dayKey, qIdx) {
  const bm = getBookmarks();
  return bm[dayKey]?.includes(qIdx) || false;
}

// ============================================================
// AUTO-SAVE IN-PROGRESS QUIZ STATE
// ============================================================
function saveQuizState() {
  if (!state.currentDay || !state.dayData) return;
  const quizState = {
    dayKey: state.currentDay.key,
    dayNum: state.currentDay.day,
    currentQ: state.currentQ,
    answers: state.answers,
    showMap: state.showMap
  };
  setUserData('inProgressQuiz', quizState);
}

function clearQuizState() {
  setUserData('inProgressQuiz', null);
}

async function resumeQuiz(saved) {
  const meta = DAY_META.find(d => d.key === saved.dayKey);
  if (!meta) {
    clearQuizState();
    showView('dashboard-view');
    renderDashboard();
    return;
  }

  state.currentDay = meta;
  state.currentQ = saved.currentQ || 0;
  state.answers = saved.answers || {};
  state.selectedOptions = [];
  state.showMap = saved.showMap || false;

  const view = document.getElementById('quiz-view');
  showView('quiz-view');
  view.innerHTML = '<div class="loading"><div class="spinner"></div><p>Resuming Day ' + meta.day + '...</p></div>';

  try {
    const data = await loadDayQuestions(meta.day);
    state.dayData = data;
    renderQuestion();
  } catch (err) {
    clearQuizState();
    showView('dashboard-view');
    renderDashboard();
  }
}

// ---- STATE ----
let state = {
  currentView: 'login',
  selectedCategory: 'all',
  currentDay: null,
  dayData: null,
  currentQ: 0,
  selectedOptions: [],
  answers: {},
  timeLeft: TIMER_SECONDS,
  timerInterval: null,
  showMap: false
};

// ---- VIEW MANAGEMENT ----
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(viewId);
  if (el) el.classList.add('active');
  state.currentView = viewId;
}

function navigate(view) {
  stopTimer();
  if (view === 'dashboard') {
    clearQuizState();
    showView('dashboard-view');
    renderDashboard();
    updateGlobalProgress();
  }
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const view = document.getElementById('dashboard-view');
  const progress = getDayProgress();

  const completed = Object.values(progress).filter(p => p.completed).length;
  const totalAns = Object.values(progress).reduce((s, p) => s + (p.totalAnswered || 0), 0);
  const avgScore = completed > 0
    ? Math.round(Object.values(progress).filter(p => p.completed).reduce((s, p) => s + p.scorePercent, 0) / completed)
    : 0;

  const filteredDays = DAY_META.filter(d =>
    state.selectedCategory === 'all' || d.category === state.selectedCategory
  );

  view.innerHTML = `
    <div class="dashboard-container">
      <div class="dashboard-hero">
        <h2 class="dashboard-title">Your 51-Day Mastery Journey</h2>
        <p class="dashboard-subtitle">5,100 concept-mastery questions to ace your certification</p>
        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-icon">📅</div>
            <div class="stat-value">${completed}<span class="stat-total"> / 51</span></div>
            <div class="stat-label">Days Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div class="stat-value">${totalAns.toLocaleString()}<span class="stat-total"> / 5,100</span></div>
            <div class="stat-label">Questions Answered</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🎯</div>
            <div class="stat-value">${avgScore}%</div>
            <div class="stat-label">Average Score</div>
          </div>
        </div>
      </div>

      <div class="category-tabs">
        ${CATEGORIES.map(c => `
          <button class="cat-tab ${state.selectedCategory === c.id ? 'active' : ''}"
            onclick="filterCategory('${c.id}')"
            style="--cat-color: ${c.color}">
            ${c.label}
          </button>
        `).join('')}
      </div>

      <div class="days-grid">
        ${filteredDays.map(meta => renderDayCard(meta, progress[meta.key])).join('')}
      </div>
    </div>
  `;
}

function renderDayCard(meta, dp) {
  const cat = CATEGORIES.find(c => c.id === meta.category);
  const done = dp?.completed;
  const score = dp?.scorePercent || 0;
  const scoreColor = score >= 80 ? 'var(--green)' : score >= 60 ? 'var(--amber)' : 'var(--red)';
  const inProg = dp && !dp.completed && dp.totalAnswered > 0;

  return `
    <div class="day-card ${done ? 'completed' : ''} ${inProg ? 'in-progress' : ''}" onclick="startDay(${meta.day})" style="--cat-color: ${cat.color}">
      <div class="day-card-header">
        <span class="day-number">Day ${meta.day}</span>
        <span class="day-category" style="background: ${cat.color}18; color: ${cat.color}">${cat.label}</span>
      </div>
      <h3 class="day-title">${meta.title}</h3>
      <div class="day-topics">
        ${meta.topics.slice(0, 3).map(t => `<span class="topic-tag">${t}</span>`).join('')}
        ${meta.topics.length > 3 ? `<span class="topic-more">+${meta.topics.length - 3} more</span>` : ''}
      </div>
      ${done ? `
        <div class="day-score">
          <div class="progress-track small"><div class="score-fill" style="width:${score}%;background:${scoreColor}"></div></div>
          <span class="score-text" style="color:${scoreColor}">${score}%</span>
        </div>
      ` : inProg ? `
        <div class="day-status"><span class="status-dot in-prog"></span><span>${dp.totalAnswered} / 100 Answered</span></div>
      ` : `
        <div class="day-status"><span class="status-dot"></span><span>100 Questions</span></div>
      `}
    </div>
  `;
}

function filterCategory(catId) {
  state.selectedCategory = catId;
  renderDashboard();
}

// ============================================================
// QUIZ ENGINE
// ============================================================
async function startDay(dayNum) {
  const meta = DAY_META.find(d => d.day === dayNum);
  if (!meta) return;

  // Check if we have saved in-progress data for this day
  const existingProgress = getDayProgress();
  const inProg = getUserData('inProgressQuiz');

  if (inProg && inProg.dayKey === meta.key) {
    // Resume where left off
    await resumeQuiz(inProg);
    return;
  }

  // Reset quiz state
  state.currentDay = meta;
  state.currentQ = 0;
  state.answers = {};
  state.selectedOptions = [];
  state.dayData = null;
  state.showMap = false;

  const view = document.getElementById('quiz-view');
  showView('quiz-view');
  view.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading Day ' + dayNum + ' questions...</p></div>';

  try {
    const data = await loadDayQuestions(dayNum);
    state.dayData = data;
    saveQuizState(); // Save initial state
    renderQuestion();
  } catch (err) {
    view.innerHTML = `
      <div class="error-msg">
        <h3>Warning: Questions Not Available Yet</h3>
        <p>Day ${dayNum} questions haven't been loaded. Please check that the file exists in js/questions/day${String(dayNum).padStart(2,'0')}.js</p>
        <button class="btn-primary" onclick="navigate('dashboard')">Back to Dashboard</button>
      </div>`;
  }
}

function loadDayQuestions(dayNum) {
  return new Promise((resolve, reject) => {
    const key = 'day' + String(dayNum).padStart(2, '0');
    if (window.QUIZ_DATA && window.QUIZ_DATA[key]) {
      resolve(window.QUIZ_DATA[key]);
      return;
    }
    const script = document.createElement('script');
    script.src = 'js/questions/' + key + '.js';
    script.onload = () => {
      if (window.QUIZ_DATA && window.QUIZ_DATA[key]) resolve(window.QUIZ_DATA[key]);
      else reject(new Error('No data'));
    };
    script.onerror = () => reject(new Error('Load failed'));
    document.head.appendChild(script);
  });
}

function renderQuestion() {
  const view = document.getElementById('quiz-view');
  const q = state.dayData.questions[state.currentQ];
  const total = state.dayData.questions.length;
  const meta = state.currentDay;
  const prev = state.answers[state.currentQ];
  const isAnswered = prev !== undefined;
  const bm = isBookmarked(meta.key, state.currentQ);
  const answeredCount = Object.keys(state.answers).length;
  const pct = Math.round((answeredCount / total) * 100);

  const typeLabels = { single: 'Single Choice', multi: 'Multiple Choice', tf: 'True / False' };
  const diffLabels = ['', 'Easy', 'Medium', 'Hard'];
  const diffColors = ['', 'var(--green)', 'var(--amber)', 'var(--red)'];

  // Build question map HTML
  let mapHtml = '';
  for (let i = 0; i < total; i++) {
    let cls = '';
    if (i === state.currentQ) cls = 'current';
    else if (state.answers[i] !== undefined) cls = state.answers[i].correct ? 'correct' : 'wrong';
    mapHtml += `<button class="q-dot ${cls}" onclick="jumpTo(${i})">${i + 1}</button>`;
  }

  // Timer circle path
  const timerPct = (state.timeLeft / TIMER_SECONDS) * 100;

  view.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <div class="quiz-header-top">
          <button class="btn-ghost" onclick="confirmExit()">Exit</button>
          <h2 class="quiz-day-title">Day ${meta.day}: ${meta.title}</h2>
          <button class="bookmark-btn ${bm ? 'active' : ''}" onclick="handleBookmark()" title="Bookmark">
            ${bm ? '&#128278;' : '&#127991;'}
          </button>
        </div>
        <div class="quiz-info-bar">
          <span class="q-counter">Question <strong>${state.currentQ + 1}</strong> / ${total}</span>
          <div class="timer ${state.timeLeft <= 10 ? 'urgent' : ''}" id="timer-display">
            <svg class="timer-svg" viewBox="0 0 36 36">
              <path class="timer-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="3"/>
              <path class="timer-ring" id="timer-ring" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke-width="3" stroke-linecap="round"
                stroke-dasharray="${timerPct}, 100"/>
            </svg>
            <span class="timer-text" id="timer-text">${state.timeLeft}s</span>
          </div>
          <div class="quiz-progress-mini">
            <div class="progress-track small"><div class="progress-fill" style="width:${pct}%"></div></div>
            <span>${pct}%</span>
          </div>
        </div>
      </div>

      <button class="qmap-toggle" onclick="toggleMap()">
        Question Map (${answeredCount}/${total} answered) ${state.showMap ? '&#9650;' : '&#9660;'}
      </button>
      <div class="question-map ${state.showMap ? 'show' : ''}" id="q-map">${mapHtml}</div>

      <div class="question-card">
        <div class="question-badges">
          <span class="badge type-badge">${typeLabels[q.type] || q.type}</span>
          <span class="badge diff-badge" style="color:${diffColors[q.difficulty]};border-color:${diffColors[q.difficulty]}">${diffLabels[q.difficulty]}</span>
        </div>
        <p class="question-text">${formatQuestion(q.question)}</p>

        <div class="options-list">
          ${q.options.map((opt, i) => {
            let cls = '';
            const inputType = q.type === 'multi' ? 'checkbox' : 'radio';
            if (isAnswered) {
              if (q.correct.includes(i)) cls = 'correct';
              else if (prev.selected.includes(i)) cls = 'wrong';
            } else if (state.selectedOptions.includes(i)) {
              cls = 'selected';
            }
            let marker = '';
            if (isAnswered && q.correct.includes(i)) marker = '&#10003;';
            else if (isAnswered && prev.selected.includes(i) && !q.correct.includes(i)) marker = '&#10007;';

            return `
              <button class="option-btn ${cls}" onclick="pickOption(${i})" ${isAnswered ? 'disabled' : ''}>
                <span class="option-marker ${inputType}">${marker}</span>
                <span class="option-text">${formatQuestion(opt)}</span>
              </button>`;
          }).join('')}
        </div>

        ${!isAnswered ? `
          <button class="btn-primary submit-btn" onclick="submitAnswer()" ${state.selectedOptions.length === 0 ? 'disabled' : ''}>
            Submit Answer
          </button>
        ` : ''}

        ${isAnswered ? `
          <div class="feedback-card ${prev.correct ? 'correct' : 'wrong'}">
            <div class="feedback-header">
              <span class="feedback-icon">${prev.correct ? '&#9989;' : '&#10060;'}</span>
              <span class="feedback-label">${prev.correct ? 'Correct!' : 'Incorrect'}</span>
            </div>
            <div class="concept-box">
              <h4>Concept to Remember</h4>
              <p>${formatQuestion(q.concept)}</p>
            </div>
          </div>
          <div class="nav-buttons">
            ${state.currentQ > 0 ? '<button class="btn-ghost" onclick="goBack()">Previous</button>' : '<div></div>'}
            ${state.currentQ < total - 1
              ? '<button class="btn-primary" onclick="goNext()">Next Question</button>'
              : '<button class="btn-primary finish-btn" onclick="finishQuiz()">Finish Quiz</button>'}
          </div>
        ` : ''}
      </div>
    </div>
  `;

  // Start timer only for unanswered questions
  if (!isAnswered) startTimer();
  else stopTimer();
}

function formatQuestion(text) {
  if (!text) return '';
  return text.replace(/`([^`]+)`/g, '<code>$1</code>');
}

function pickOption(idx) {
  if (state.answers[state.currentQ] !== undefined) return;
  const q = state.dayData.questions[state.currentQ];
  if (q.type === 'single' || q.type === 'tf') {
    state.selectedOptions = [idx];
  } else {
    const i = state.selectedOptions.indexOf(idx);
    if (i >= 0) state.selectedOptions.splice(i, 1);
    else state.selectedOptions.push(idx);
  }
  renderQuestion();
}

function submitAnswer() {
  if (state.selectedOptions.length === 0) return;
  stopTimer();
  const q = state.dayData.questions[state.currentQ];
  const selected = [...state.selectedOptions].sort();
  const correct = arraysEqual(selected, [...q.correct].sort());
  state.answers[state.currentQ] = { selected: [...state.selectedOptions], correct };
  state.selectedOptions = [];

  // AUTO-SAVE after every answer!
  saveQuizState();
  // Also save partial progress so dashboard shows "in progress"
  const answeredCount = Object.keys(state.answers).length;
  const correctCount = Object.values(state.answers).filter(a => a.correct).length;
  saveDayProgress(state.currentDay.key, {
    completed: false,
    totalAnswered: answeredCount,
    correct: correctCount,
    scorePercent: Math.round((correctCount / answeredCount) * 100),
    timestamp: Date.now()
  });

  renderQuestion();
  setTimeout(() => {
    const fb = document.querySelector('.feedback-card');
    if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

function goNext() {
  if (state.currentQ < state.dayData.questions.length - 1) {
    state.currentQ++;
    state.selectedOptions = [];
    saveQuizState();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goBack() {
  if (state.currentQ > 0) {
    state.currentQ--;
    state.selectedOptions = [];
    saveQuizState();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function jumpTo(idx) {
  state.currentQ = idx;
  state.selectedOptions = [];
  saveQuizState();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMap() {
  state.showMap = !state.showMap;
  const map = document.getElementById('q-map');
  if (map) map.classList.toggle('show', state.showMap);
  const btn = document.querySelector('.qmap-toggle');
  if (btn) {
    const answeredCount = Object.keys(state.answers).length;
    const total = state.dayData.questions.length;
    btn.innerHTML = `Question Map (${answeredCount}/${total} answered) ${state.showMap ? '&#9650;' : '&#9660;'}`;
  }
}

function handleBookmark() {
  toggleBookmark(state.currentDay.key, state.currentQ);
  renderQuestion();
}

function confirmExit() {
  const answered = Object.keys(state.answers).length;
  if (answered > 0) {
    if (!confirm('You have answered ' + answered + ' questions. Your progress is auto-saved. Exit?')) return;
  }
  stopTimer();
  navigate('dashboard');
}

function finishQuiz() {
  stopTimer();
  const total = state.dayData.questions.length;
  for (let i = 0; i < total; i++) {
    if (state.answers[i] === undefined) {
      state.answers[i] = { selected: [], correct: false, skipped: true };
    }
  }
  const results = calculateResults();
  saveDayProgress(state.currentDay.key, results);
  clearQuizState(); // Clear in-progress state
  renderSummary(results);
  showView('summary-view');
  updateGlobalProgress();
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  stopTimer();
  state.timeLeft = TIMER_SECONDS;
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      stopTimer();
      onTimeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerUI() {
  const ring = document.getElementById('timer-ring');
  const text = document.getElementById('timer-text');
  const wrap = document.getElementById('timer-display');
  if (ring) ring.setAttribute('stroke-dasharray', `${(state.timeLeft / TIMER_SECONDS) * 100}, 100`);
  if (text) text.textContent = state.timeLeft + 's';
  if (wrap) {
    if (state.timeLeft <= 10) wrap.classList.add('urgent');
    else wrap.classList.remove('urgent');
  }
}

function onTimeUp() {
  if (state.answers[state.currentQ] === undefined) {
    state.answers[state.currentQ] = { selected: [], correct: false, timedOut: true };
    state.selectedOptions = [];
    saveQuizState();
    saveDayProgress(state.currentDay.key, {
      completed: false,
      totalAnswered: Object.keys(state.answers).length,
      correct: Object.values(state.answers).filter(a => a.correct).length,
      timestamp: Date.now()
    });
    renderQuestion();
  }
}

// ============================================================
// SCORING
// ============================================================
function calculateResults() {
  const questions = state.dayData.questions;
  const total = questions.length;
  let correctCount = 0;
  const byType = { single: { t: 0, c: 0 }, multi: { t: 0, c: 0 }, tf: { t: 0, c: 0 } };
  const byDiff = { 1: { t: 0, c: 0 }, 2: { t: 0, c: 0 }, 3: { t: 0, c: 0 } };
  const wrong = [];

  questions.forEach((q, i) => {
    const a = state.answers[i];
    const ok = a?.correct || false;
    if (ok) correctCount++;
    else wrong.push(i);

    if (byType[q.type]) { byType[q.type].t++; if (ok) byType[q.type].c++; }
    if (byDiff[q.difficulty]) { byDiff[q.difficulty].t++; if (ok) byDiff[q.difficulty].c++; }
  });

  return {
    completed: true,
    totalAnswered: total,
    correct: correctCount,
    scorePercent: Math.round((correctCount / total) * 100),
    byType,
    byDiff,
    wrongQuestions: wrong,
    timestamp: Date.now()
  };
}

// ============================================================
// SUMMARY
// ============================================================
function renderSummary(results) {
  const view = document.getElementById('summary-view');
  const meta = state.currentDay;
  const sp = results.scorePercent;
  const grade = sp >= 90 ? 'A+' : sp >= 80 ? 'A' : sp >= 70 ? 'B' : sp >= 60 ? 'C' : sp >= 50 ? 'D' : 'F';
  const gc = sp >= 80 ? 'var(--green)' : sp >= 60 ? 'var(--amber)' : 'var(--red)';
  const circumference = 2 * Math.PI * 54;

  const typeLabels = { single: 'Single Choice', multi: 'Multiple Choice', tf: 'True / False' };
  const diffLabels = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

  function barHTML(label, correct, total) {
    const p = total > 0 ? Math.round((correct / total) * 100) : 0;
    const c = p >= 70 ? 'var(--green)' : p >= 50 ? 'var(--amber)' : 'var(--red)';
    return `
      <div class="breakdown-item">
        <div class="breakdown-label"><span>${label}</span><span>${correct}/${total} (${p}%)</span></div>
        <div class="progress-track small"><div class="progress-fill" style="width:${p}%;background:${c}"></div></div>
      </div>`;
  }

  view.innerHTML = `
    <div class="summary-container">
      <div class="summary-hero">
        <div class="score-circle" style="--score-color:${gc}">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" class="score-bg" fill="none" stroke-width="8"/>
            <circle cx="60" cy="60" r="54" class="score-ring" fill="none" stroke-width="8" stroke-linecap="round"
              stroke="${gc}" stroke-dasharray="${(sp / 100) * circumference} ${circumference}"/>
          </svg>
          <div class="score-inner">
            <span class="score-grade" style="color:${gc}">${grade}</span>
            <span class="score-pct">${sp}%</span>
          </div>
        </div>
        <h2>Day ${meta.day} Complete!</h2>
        <p class="summary-subtitle">${meta.title}</p>
        <p class="summary-detail">${results.correct} / ${results.totalAnswered} correct</p>
      </div>

      <div class="summary-grid">
        <div class="summary-card">
          <h3>By Question Type</h3>
          ${Object.entries(results.byType).map(([k, v]) => barHTML(typeLabels[k] || k, v.c, v.t)).join('')}
        </div>
        <div class="summary-card">
          <h3>By Difficulty</h3>
          ${Object.entries(results.byDiff).map(([k, v]) => barHTML(diffLabels[k] || k, v.c, v.t)).join('')}
        </div>
      </div>

      ${results.wrongQuestions.length > 0 ? `
        <div class="summary-card wrong-answers-card">
          <h3>Wrong Answers (${results.wrongQuestions.length})</h3>
          <div class="wrong-list">
            ${results.wrongQuestions.slice(0, 15).map(qi => {
              const q = state.dayData.questions[qi];
              return `
                <div class="wrong-item">
                  <div class="wrong-q"><span class="wrong-num">Q${qi + 1}</span><span>${formatQuestion(q.question)}</span></div>
                  <div class="wrong-concept">${formatQuestion(q.concept)}</div>
                </div>`;
            }).join('')}
            ${results.wrongQuestions.length > 15 ? `<p class="more-text">...and ${results.wrongQuestions.length - 15} more.</p>` : ''}
          </div>
        </div>
      ` : '<div class="summary-card"><h3>Perfect Score! No wrong answers!</h3></div>'}

      <div class="summary-actions">
        ${results.wrongQuestions.length > 0 ? '<button class="btn-ghost" onclick="reviewWrong()">Review All Wrong</button>' : ''}
        <button class="btn-ghost" onclick="reviewBookmarked()">Review Bookmarked</button>
        <button class="btn-primary" onclick="navigate(\'dashboard\')">Back to Dashboard</button>
      </div>
    </div>
  `;
}

// ============================================================
// REVIEW
// ============================================================
function reviewWrong() {
  const results = calculateResults();
  renderReview(results.wrongQuestions, 'Wrong Answers');
}

function reviewBookmarked() {
  const bm = getBookmarks();
  const dayBm = bm[state.currentDay.key] || [];
  if (dayBm.length === 0) {
    alert('No bookmarked questions for this day.');
    return;
  }
  renderReview(dayBm, 'Bookmarked Questions');
}

function renderReview(indices, title) {
  const view = document.getElementById('review-view');
  showView('review-view');

  const typeLabels = { single: 'Single', multi: 'Multiple', tf: 'True/False' };

  view.innerHTML = `
    <div class="review-container">
      <div class="review-header">
        <button class="btn-ghost" onclick="renderSummary(calculateResults()); showView('summary-view');">Back to Summary</button>
        <h2>${title} (${indices.length})</h2>
      </div>
      <div class="review-list">
        ${indices.map(qi => {
          const q = state.dayData.questions[qi];
          const a = state.answers[qi];
          return `
            <div class="review-card">
              <div class="review-card-header">
                <span class="badge">Q${qi + 1}</span>
                <span class="badge type-badge">${typeLabels[q.type] || q.type}</span>
                <span class="badge ${a?.correct ? 'correct-badge' : 'wrong-badge'}">${a?.correct ? 'Correct' : a?.timedOut ? 'Timed Out' : a?.skipped ? 'Skipped' : 'Wrong'}</span>
              </div>
              <p class="question-text">${formatQuestion(q.question)}</p>
              <div class="review-options">
                ${q.options.map((opt, i) => {
                  let cls = '';
                  if (q.correct.includes(i)) cls = 'correct';
                  else if (a?.selected?.includes(i)) cls = 'wrong';
                  const mark = q.correct.includes(i) ? '&#10003;' : (a?.selected?.includes(i) ? '&#10007;' : '&#9675;');
                  return `<div class="review-option ${cls}"><span class="opt-marker">${mark}</span> ${formatQuestion(opt)}</div>`;
                }).join('')}
              </div>
              <div class="concept-box">
                <h4>Concept to Remember</h4>
                <p>${formatQuestion(q.concept)}</p>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// ADMIN DASHBOARD
// ============================================================
// ============================================================
// ADMIN DASHBOARD
// ============================================================
async function changeUserStatus(username, newStatus) {
  try {
    const token = sessionStorage.getItem(DB_PREFIX + 'adminAuth');
    await fetchServer('admin/status', 'POST', { username, status: newStatus, token });
    renderAdminDashboard();
  } catch (err) {
    alert(err.error || 'Failed to update status');
  }
}

async function renderAdminDashboard() {
  const view = document.getElementById('admin-view');
  showView('admin-view');
  
  // Show loading while fetching users from network
  if (!view.querySelector('.admin-table')) {
    view.innerHTML = '<div class="admin-container"><div class="loading"><div class="spinner"></div><p>Loading users from network...</p></div></div>';
  }

  const users = await getUsers();
  const userList = Object.entries(users);

  let totalPct = 0;
  userList.forEach(([, u]) => {
     const prog = u.progress || {};
     const completed = Object.values(prog).filter(p => p.completed).length;
     totalPct += (completed / 51);
  });
  const totalCohortCompletion = userList.length > 0 ? (totalPct / userList.length) : 0;

  // Build user stats
  const userRows = userList.map(([username, userData]) => {
    const totalTime = userData.totalTimeMs || 0;
    let currentSessionTime = 0;
    if (userData.sessionStart) currentSessionTime = Date.now() - userData.sessionStart;
    const displayTime = totalTime + currentSessionTime;

    const hours = Math.floor(displayTime / 3600000);
    const mins = Math.floor((displayTime % 3600000) / 60000);
    const secs = Math.floor((displayTime % 60000) / 1000);
    const timeStr = hours > 0 ? `${hours}h ${mins}m ${secs}s` : `${mins}m ${secs}s`;

    const loginCount = (userData.loginHistory || []).length;
    const lastLogin = userData.lastLogin ? new Date(userData.lastLogin).toLocaleString() : 'Never';
    const isOnline = !!userData.sessionStart;
    
    const status = userData.status || 'approved';
    let statusBadge = '';
    let actionButtons = '';
    
    if (status === 'pending') {
      statusBadge = '<span class="badge" style="background:var(--amber);color:#fff">Pending</span>';
      actionButtons = `
        <button class="btn-ghost btn-sm" style="color:var(--green);border:1px solid var(--green)" onclick="changeUserStatus('${username}', 'approved')">Approve</button>
        <button class="btn-ghost btn-sm" style="color:var(--red);border:1px solid var(--red)" onclick="changeUserStatus('${username}', 'rejected')">Reject</button>
      `;
    } else if (status === 'kicked') {
      statusBadge = '<span class="badge" style="background:var(--red);color:#fff">Kicked</span>';
      actionButtons = `<button class="btn-ghost btn-sm" style="color:var(--green)" onclick="changeUserStatus('${username}', 'approved')">Unkick</button>`;
    } else if (status === 'rejected') {
      statusBadge = '<span class="badge" style="background:var(--red);color:#fff">Rejected</span>';
      actionButtons = `<button class="btn-ghost btn-sm" style="color:var(--green)" onclick="changeUserStatus('${username}', 'approved')">Approve</button>`;
    } else {
      statusBadge = '<span class="badge" style="background:var(--green);color:#fff">Approved</span>';
      actionButtons = `<button class="btn-ghost btn-sm" style="color:var(--red)" onclick="changeUserStatus('${username}', 'kicked')">Kick</button>`;
    }

    const progress = userData.progress || {};
    const completedDays = Object.values(progress).filter(p => p.completed).length;
    const totalAnswered = Object.values(progress).reduce((s, p) => s + (p.totalAnswered || 0), 0);
    const avgScore = completedDays > 0
      ? Math.round(Object.values(progress).filter(p => p.completed).reduce((s, p) => s + p.scorePercent, 0) / completedDays)
      : 0;

    return `
      <tr>
        <td>
          <div class="admin-user-cell">
            <span class="online-dot ${isOnline ? 'online' : 'offline'}"></span>
            <div>
              <strong>${userData.fullName || username}</strong>
              <span class="admin-username">@${username} | ${userData.mobile || 'No Mobile'}</span>
            </div>
          </div>
        </td>
        <td>${statusBadge}</td>
        <td>${lastLogin}</td>
        <td class="time-cell">${timeStr}</td>
        <td>${completedDays} / 51</td>
        <td>${totalAnswered.toLocaleString()}</td>
        <td><span class="admin-score" style="color:${avgScore >= 70 ? 'var(--green)' : avgScore >= 50 ? 'var(--amber)' : 'var(--red)'}">${avgScore}%</span></td>
        <td style="display:flex;gap:4px">
          <button class="btn-ghost btn-sm" onclick="showUserDetail('${username}')">View</button>
          ${actionButtons}
        </td>
      </tr>`;
  }).join('');

  const allLogins = [];
  userList.forEach(([username, userData]) => {
    (userData.loginHistory || []).forEach(entry => {
      allLogins.push({ username, fullName: userData.fullName, ...entry });
    });
  });
  allLogins.sort((a, b) => (b.loginAt || 0) - (a.loginAt || 0));
  const recentLogins = allLogins.slice(0, 50);

  const loginRows = recentLogins.map(entry => {
    const loginTime = entry.loginAt ? new Date(entry.loginAt).toLocaleString() : '-';
    const logoutTime = entry.logoutAt ? new Date(entry.logoutAt).toLocaleString() : (entry.logoutAt === undefined ? 'Still Active' : '-');
    const dur = entry.duration ? formatDuration(entry.duration) : '-';
    return `
      <tr>
        <td><strong>${entry.fullName}</strong> <span class="admin-username">@${entry.username}</span></td>
        <td>${loginTime}</td>
        <td>${logoutTime}</td>
        <td>${dur}</td>
      </tr>`;
  }).join('');

  view.innerHTML = `
    <div class="admin-container">
      <div class="admin-header">
        <h2>Admin Dashboard</h2>
        <div class="admin-header-actions">
          <button class="btn-ghost" onclick="renderAdminDashboard()">Refresh Network Data</button>
          <button class="btn-ghost" onclick="adminLogout()">Exit Admin</button>
        </div>
      </div>

      <div class="admin-stats-row">
        <div class="stat-card" style="flex: 2;">
          <div class="stat-label" style="margin-bottom:8px">Global Cohort Progress</div>
          <div class="progress-track" style="height:12px; border-radius:6px; background:rgba(255,255,255,0.1)">
            <div class="progress-fill" style="width:${Math.round(totalCohortCompletion * 100)}%; height:100%; background:var(--primary); border-radius:6px;"></div>
          </div>
          <div style="font-size:0.8rem; margin-top:6px; color:#94a3b8; text-align:right;">${Math.round(totalCohortCompletion * 100)}% Average Completion</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">&#128100;</div>
          <div class="stat-value">${userList.length}</div>
          <div class="stat-label">Total Users</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">&#128994;</div>
          <div class="stat-value">${userList.filter(([, u]) => !!u.sessionStart).length}</div>
          <div class="stat-label">Currently Online</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">&#128200;</div>
          <div class="stat-value">${allLogins.length}</div>
          <div class="stat-label">Total Logins</div>
        </div>
      </div>

      <div class="admin-section">
        <h3>All Users on Network</h3>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Total Time</th>
                <th>Days Done</th>
                <th>Questions</th>
                <th>Avg Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${userRows || '<tr><td colspan="8" style="text-align:center;padding:2rem;">No users registered yet.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>

      <div class="admin-section">
        <h3>Network Login History</h3>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Login Time</th>
                <th>Logout Time</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              ${loginRows || '<tr><td colspan="4" style="text-align:center;padding:2rem;">No login history.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

async function showUserDetail(username) {
  const users = await getUsers();
  const userData = users[username];
  if (!userData) return;

  // Use network progress instead of localStorage progress
  let progress = userData.progress || {};

  const completedDays = Object.entries(progress)
    .filter(([, p]) => p.completed)
    .map(([dayKey, p]) => {
      const meta = DAY_META.find(d => d.key === dayKey);
      return { dayKey, meta, ...p };
    })
    .sort((a, b) => (a.meta?.day || 0) - (b.meta?.day || 0));

  const dayRows = completedDays.map(d => `
    <tr>
      <td>Day ${d.meta?.day || '?'}</td>
      <td>${d.meta?.title || d.dayKey}</td>
      <td>${d.totalAnswered || 0}</td>
      <td>${d.correct || 0}</td>
      <td><span style="color:${d.scorePercent >= 70 ? 'var(--green)' : d.scorePercent >= 50 ? 'var(--amber)' : 'var(--red)'}">${d.scorePercent}%</span></td>
      <td>${d.timestamp ? new Date(d.timestamp).toLocaleString() : '-'}</td>
    </tr>
  `).join('');

  const view = document.getElementById('admin-view');
  view.innerHTML = `
    <div class="admin-container">
      <div class="admin-header">
        <button class="btn-ghost" onclick="renderAdminDashboard()">Back to Admin</button>
        <h2>${userData.fullName} (@${username})</h2>
      </div>

      <div class="admin-section">
        <h3>Completed Days (${completedDays.length})</h3>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr><th>Day</th><th>Title</th><th>Answered</th><th>Correct</th><th>Score</th><th>Completed At</th></tr>
            </thead>
            <tbody>
              ${dayRows || '<tr><td colspan="6" style="text-align:center;padding:2rem;">No days completed yet.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function formatDuration(ms) {
  const hours = Math.floor(ms / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m ${secs}s`;
}

// ============================================================
// GLOBAL PROGRESS
// ============================================================
function updateGlobalProgress() {
  const progress = getDayProgress();
  const completed = Object.values(progress).filter(p => p.completed).length;
  const pct = Math.round((completed / 51) * 100);
  const fill = document.getElementById('global-fill');
  const label = document.getElementById('global-pct');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = pct + '%';
}

// ============================================================
// DARK MODE
// ============================================================
function toggleDarkMode() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  setUserData('theme', next);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = next === 'dark' ? '&#9728;&#65039;' : '&#127769;';
}

// ============================================================
// UTILITIES
// ============================================================
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

// ============================================================
// INIT
// ============================================================
function init() {
  const theme = getUserData('theme', 'dark');
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? '&#9728;&#65039;' : '&#127769;';

  // Check if user is already logged in (session still active)
  const user = getCurrentUser();
  if (user) {
    enterApp();
  } else {
    showLogin();
  }
}

// Track time on page unload
window.addEventListener('beforeunload', () => {
  const user = getCurrentUser();
  if (user) {
    // Calculate elapsed time from local session cache
    const startStr = sessionStorage.getItem(DB_PREFIX + 'sessionStart');
    let elapsed = 0;
    if (startStr) {
      elapsed = Date.now() - parseInt(startStr, 10);
    }
    const currentTotal = parseInt(sessionStorage.getItem(DB_PREFIX + 'totalTimeMs') || '0', 10);

    saveQuizState();
    fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user.username,
        updates: { sessionStart: null, totalTimeMs: currentTotal + elapsed }
      }),
      keepalive: true
    }).catch(() => {});
  }
});

window.QUIZ_DATA = window.QUIZ_DATA || {};
document.addEventListener('DOMContentLoaded', init);
