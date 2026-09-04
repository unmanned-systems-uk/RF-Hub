// lesson-progress.js — Curriculum progress bar for lesson pages
// Inserts a compact bar directly below .site-nav showing overall lesson completion.
// Only visible to logged-in users. Single file to update for design changes.
(function () {
  var token = localStorage.getItem('authToken');
  if (!token) return; // not logged in — hide entirely

  function buildBar() {
    if (document.getElementById('curriculum-bar')) return; // already inserted

    var siteNav = document.querySelector('.site-nav');
    if (!siteNav || !siteNav.parentNode) return;

    // ── Outer container ──────────────────────────────────────────────────────
    var bar = document.createElement('div');
    bar.id = 'curriculum-bar';
    bar.style.cssText =
      'width:100%;height:24px;' +
      'background:var(--bg-card);' +
      'border-bottom:1px solid var(--border);' +
      'display:flex;align-items:center;' +
      'padding:0 1.5rem;gap:10px;' +
      'box-sizing:border-box;';

    // ── Track wrapper ────────────────────────────────────────────────────────
    var trackWrap = document.createElement('div');
    trackWrap.style.cssText =
      'flex:1;max-width:180px;height:4px;' +
      'background:rgba(255,255,255,0.08);' +
      'border-radius:2px;overflow:hidden;';

    var track = document.createElement('div');
    track.id = 'curriculum-track';
    track.style.cssText =
      'height:100%;width:0%;' +
      'background:linear-gradient(90deg,#a78bfa,#06b6d4);' +
      'border-radius:2px;transition:width 0.5s ease;';

    trackWrap.appendChild(track);

    // ── Label ────────────────────────────────────────────────────────────────
    var label = document.createElement('span');
    label.id = 'curriculum-label';
    label.style.cssText =
      'font-family:var(--font-mono);font-size:0.7rem;' +
      'color:var(--text-dim);white-space:nowrap;letter-spacing:0.02em;';
    label.textContent = '— / 20 lessons';

    bar.appendChild(trackWrap);
    bar.appendChild(label);
    siteNav.parentNode.insertBefore(bar, siteNav.nextSibling);

    // ── Fetch progress ───────────────────────────────────────────────────────
    fetch('/api/lessons/progress', {
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var count = d.completed_count != null
          ? d.completed_count
          : (Array.isArray(d.completed) ? d.completed.length : 0);
        var pct = Math.min(100, Math.round((count / 20) * 100));
        document.getElementById('curriculum-track').style.width = pct + '%';
        document.getElementById('curriculum-label').textContent =
          count + ' / 20 lessons';
      })
      .catch(function () {
        var b = document.getElementById('curriculum-bar');
        if (b) b.style.display = 'none';
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildBar);
  } else {
    buildBar();
  }
})();
