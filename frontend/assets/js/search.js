/* RF-Hub Smart Search — vanilla JS, no dependencies */
(function () {
  'use strict';

  var INDEX_URL = '/assets/js/search-index.js';
  var indexLoaded = false;
  var loadPromise = null;

  // ── Lazy-load search index ─────────────────────────────────────
  function loadIndex() {
    if (indexLoaded) return Promise.resolve();
    if (loadPromise) return loadPromise;
    loadPromise = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = INDEX_URL;
      s.onload = function () { indexLoaded = true; resolve(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return loadPromise;
  }

  // ── Trigram similarity ─────────────────────────────────────────
  function trigramSet(str) {
    var s = new Set();
    var p = '  ' + str + '  ';
    for (var i = 0; i < p.length - 2; i++) s.add(p.slice(i, i + 3));
    return s;
  }

  function trigramSim(a, b) {
    var ta = trigramSet(a), tb = trigramSet(b), n = 0;
    ta.forEach(function (t) { if (tb.has(t)) n++; });
    return n / Math.max(ta.size, tb.size, 1);
  }

  // ── Score a single query against a single target string ───────
  function scoreTarget(q, target) {
    var t = target.toLowerCase();
    if (!t) return 0;
    if (t === q) return 100;
    if (t.startsWith(q)) return 90;
    if (t.includes(q)) return 75;
    // Word-level checks — good for "impeda" → "Impedance"
    var words = t.split(/[\s\-_,.()/]+/);
    for (var i = 0; i < words.length; i++) {
      if (words[i].startsWith(q)) return 85;
      if (words[i].includes(q)) return 65;
    }
    // Trigram similarity — handles typos like "impednace"
    var sim = trigramSim(q, t);
    if (sim > 0.35) return Math.round(sim * 55);
    return 0;
  }

  // ── Score a query against an index entry ──────────────────────
  function scoreEntry(q, entry) {
    var targets = [entry.title, entry.description || '']
      .concat(entry.keywords || [])
      .concat(entry.sections || []);
    var best = 0;
    for (var i = 0; i < targets.length; i++) {
      var s = scoreTarget(q, targets[i]);
      if (s > best) best = s;
      if (best === 100) break;
    }
    return best;
  }

  // ── Run search ─────────────────────────────────────────────────
  function runSearch(query) {
    if (!window.SEARCH_INDEX) return [];
    var q = query.toLowerCase().trim();
    if (q.length < 2) return [];

    var scored = [];
    var index = window.SEARCH_INDEX;
    for (var i = 0; i < index.length; i++) {
      var s = scoreEntry(q, index[i]);
      if (s > 10) scored.push({ entry: index[i], score: s });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, 7).map(function (r) { return r.entry; });
  }

  // ── Highlight matching text in result ─────────────────────────
  function highlight(text, query) {
    var q = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!q) return text;
    return text.replace(new RegExp('(' + q + ')', 'gi'), '<mark class="rf-search-mark">$1</mark>');
  }

  // ── Build the UI and wire events ──────────────────────────────
  function init() {
    // Find nav container — site-nav uses .container.container--wide
    var navContainer = document.querySelector('.site-nav .container--wide') ||
                       document.querySelector('.site-nav .container');
    if (!navContainer) return;

    // ── Inject search toggle into nav ──────────────────────────
    var toggle = document.createElement('button');
    toggle.className = 'rf-search-toggle';
    toggle.id = 'rf-search-toggle';
    toggle.setAttribute('aria-label', 'Search');
    toggle.setAttribute('type', 'button');
    toggle.innerHTML =
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
    navContainer.appendChild(toggle);

    // ── Inject overlay (appended to body for correct stacking) ──
    var overlay = document.createElement('div');
    overlay.className = 'rf-search-overlay';
    overlay.id = 'rf-search-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Site search');
    overlay.innerHTML =
      '<div class="rf-search-modal">' +
        '<div class="rf-search-bar">' +
          '<svg class="rf-search-bar-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" ' +
          'stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
          '<input type="search" id="rf-search-input" class="rf-search-input" ' +
          'placeholder="Search RF-Hub\u2026" autocomplete="off" spellcheck="false" aria-autocomplete="list" ' +
          'aria-controls="rf-search-results">' +
          '<button class="rf-search-close" id="rf-search-close" type="button" aria-label="Close search">&#215;</button>' +
        '</div>' +
        '<ul class="rf-search-results" id="rf-search-results" role="listbox" aria-label="Search results"></ul>' +
        '<div class="rf-search-hint" id="rf-search-hint">Type at least 2 characters to search</div>' +
      '</div>';
    document.body.appendChild(overlay);

    var input      = document.getElementById('rf-search-input');
    var resultsList = document.getElementById('rf-search-results');
    var hint       = document.getElementById('rf-search-hint');
    var closeBtn   = document.getElementById('rf-search-close');
    var activeIdx  = -1;
    var current    = [];

    function openSearch() {
      overlay.classList.add('rf-search-overlay--open');
      overlay.setAttribute('aria-hidden', 'false');
      input.value = '';
      resultsList.innerHTML = '';
      resultsList.hidden = true;
      hint.hidden = false;
      activeIdx = -1;
      current = [];
      input.focus();
      loadIndex().catch(function () {});
    }

    function closeSearch() {
      overlay.classList.remove('rf-search-overlay--open');
      overlay.setAttribute('aria-hidden', 'true');
    }

    function navigate(url) {
      window.location.href = url;
    }

    function setActive(idx) {
      var items = resultsList.querySelectorAll('.rf-search-result');
      items.forEach(function (el) { el.classList.remove('rf-search-result--active'); });
      activeIdx = idx;
      if (idx >= 0 && idx < items.length) {
        items[idx].classList.add('rf-search-result--active');
        items[idx].setAttribute('aria-selected', 'true');
        items[idx].scrollIntoView({ block: 'nearest' });
      }
    }

    function renderResults(entries) {
      var q = input.value.trim();
      current = entries;
      activeIdx = -1;

      if (!entries.length) {
        resultsList.innerHTML = '<li class="rf-search-no-results">No results found for \u201c' + q + '\u201d</li>';
        resultsList.hidden = false;
        hint.hidden = true;
        return;
      }

      resultsList.innerHTML = entries.map(function (e, i) {
        return '<li class="rf-search-result" role="option" data-idx="' + i + '" ' +
          'data-url="' + e.url + '" aria-selected="false" tabindex="-1">' +
          '<span class="rf-search-result-title">' + highlight(e.title, q) + '</span>' +
          '<span class="rf-search-result-desc">' + (e.description || '') + '</span>' +
          '</li>';
      }).join('');

      resultsList.hidden = false;
      hint.hidden = true;

      resultsList.querySelectorAll('.rf-search-result').forEach(function (el) {
        el.addEventListener('click', function () { navigate(el.dataset.url); });
        el.addEventListener('mouseenter', function () { setActive(parseInt(el.dataset.idx, 10)); });
      });
    }

    // Debounced input handler
    var debounceTimer;
    input.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      var q = input.value.trim();
      if (q.length < 2) {
        resultsList.innerHTML = '';
        resultsList.hidden = true;
        hint.hidden = false;
        current = [];
        return;
      }
      debounceTimer = setTimeout(function () {
        loadIndex().then(function () { renderResults(runSearch(q)); });
      }, 110);
    });

    // Keyboard navigation
    input.addEventListener('keydown', function (e) {
      var count = current.length;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(Math.min(activeIdx + 1, count - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(Math.max(activeIdx - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        var target = activeIdx >= 0 ? current[activeIdx] : current[0];
        if (target) navigate(target.url);
      } else if (e.key === 'Escape') {
        closeSearch();
      }
    });

    toggle.addEventListener('click', openSearch);
    closeBtn.addEventListener('click', closeSearch);

    // Click backdrop to close
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });

    // Keyboard shortcut: / to open search (when not in an input)
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        openSearch();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
