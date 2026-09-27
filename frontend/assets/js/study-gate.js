/**
 * study-gate.js — RF-Hub Study/Exam Access Gate
 *
 * Loaded early (no defer/async) in <head> on every gated page so it can
 * hide content before first paint. One switch to remove the whole gate:
 * the backend endpoint returning {gated:false} reveals everything as if
 * this script were never included.
 *
 * Page structure across study/exam-practice pages is NOT consistent
 * (some wrap content in <main>, some don't), so instead of targeting a
 * specific tag/class this hides every direct child of <body> except the
 * nav/footer SPOT mounts and the gate panel itself — works regardless of
 * how a given page happens to be marked up.
 */
(function () {
  'use strict';

  var GATE_CLASS = 'study-gate-pending';
  var ENDPOINT = '/api/auth/study-access';
  var html = document.documentElement;

  // ── 1. Hide immediately (synchronous, runs before body is parsed) ────────
  html.classList.add(GATE_CLASS);
  var style = document.createElement('style');
  style.textContent =
    'html.' + GATE_CLASS + ' body > *' +
    ':not(#site-nav-mount):not(#site-footer-mount):not(#study-gate-panel):not(script):not(style)' +
    '{display:none!important}';
  document.head.appendChild(style);

  function reveal() {
    html.classList.remove(GATE_CLASS);
  }

  function showGate(loggedIn) {
    if (document.getElementById('study-gate-panel')) return; // don't double-insert
    var panel = document.createElement('section');
    panel.id = 'study-gate-panel';
    panel.setAttribute('role', 'status');
    panel.style.cssText =
      'max-width:560px;margin:4rem auto;padding:2rem 1.5rem;text-align:center;' +
      'font-family:"IBM Plex Sans",sans-serif;color:#e2e8f0;line-height:1.7;';

    var html5 =
      '<h1 style="font-family:\'DM Serif Display\',serif;font-size:1.8rem;margin:0 0 1rem;">Coming soon</h1>' +
      '<p style="margin:0 0 1rem;">The study section is awaiting approval from the RSGB before it opens to everyone.</p>';

    if (loggedIn) {
      html5 += '<p style="margin:0;color:#94a3b8;">Your account does not have preview access yet.</p>';
    } else {
      html5 +=
        '<p style="margin:0 0 0.75rem;">' +
          '<a href="/pages/login.html" style="display:inline-block;padding:0.6rem 1.4rem;' +
          'background:#a78bfa;color:#0a0e1a;font-weight:600;text-decoration:none;border-radius:6px;">Log in</a>' +
        '</p>' +
        '<p style="margin:0;color:#94a3b8;font-size:0.9rem;">Already have reviewer access? Log in.</p>';
    }

    panel.innerHTML = html5;

    var footerMount = document.getElementById('site-footer-mount');
    if (footerMount && footerMount.parentNode) {
      footerMount.parentNode.insertBefore(panel, footerMount);
    } else {
      document.body.appendChild(panel);
    }
  }

  function checkAccess() {
    var token = null;
    try { token = localStorage.getItem('authToken'); } catch (_) {}
    var headers = {};
    if (token) headers['Authorization'] = 'Bearer ' + token;

    fetch(ENDPOINT, { headers: headers })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (!data || data.gated === false || data.allowed === true) {
          reveal();
          return;
        }
        showGate(!!data.logged_in);
      })
      .catch(function () {
        // Endpoint not ready / network error: fail closed, stay gated.
        showGate(!!token);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAccess);
  } else {
    checkAccess();
  }
})();
