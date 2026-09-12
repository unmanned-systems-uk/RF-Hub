/**
 * study-page.js — RF-Hub Study Page Module
 * Vanilla JS, no dependencies. Provides:
 *   1. Sidebar TOC built from <h2>/<h3> headings
 *   2. Scroll-spy via IntersectionObserver
 *   3. Auth check + progress loading
 *   4. Checkbox toggle → POST mark-read
 *   5. Auto-mark-as-seen (15-second dwell)
 *   6. "Continue where you left off" card on Intermediate index
 *   7. Injected CSS (dark theme, scoped)
 */
(function () {
  'use strict';

  const API_BASE = '/api/v1/study/progress';
  const SECTION_RE = /^([0-9]+[A-Z])/;
  const pageLoadTime = Date.now();

  // ─── 0. Inject CSS ───────────────────────────────────────────────────────────

  function injectStyles() {
    if (document.getElementById('study-page-styles')) return;
    const style = document.createElement('style');
    style.id = 'study-page-styles';
    style.textContent = `
#study-sidebar-mount {
  position: sticky; top: 1rem; width: 240px; flex-shrink: 0;
  max-height: calc(100vh - 2rem); overflow-y: auto;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-md); padding: 1rem;
  font-family: var(--font-mono); font-size: 0.72rem;
}
@media (max-width: 1024px) and (min-width: 768px) {
  #study-sidebar-mount { width: 48px; overflow: hidden; }
  #study-sidebar-mount a { font-size: 0; }
  #study-sidebar-mount li::before { content: '·'; font-size: 1.2rem; color: var(--text-dim); }
}
@media (max-width: 767px) {
  #study-sidebar-mount {
    display: none; position: fixed; inset: 0; width: 100%; z-index: 200;
    border-radius: 0; max-height: 100vh;
  }
  #study-sidebar-mount.open { display: block; }
  #study-sidebar-toggle { display: block; }
}
#study-sidebar-toggle {
  display: none; position: fixed; bottom: 1.5rem; right: 1.5rem;
  background: var(--accent-em); color: #fff; border: none;
  border-radius: 50%; width: 44px; height: 44px; font-size: 1.2rem;
  cursor: pointer; z-index: 201;
}
.study-sidebar-list { list-style: none; padding: 0; margin: 0; }
.study-sidebar-list li { margin-bottom: 0.3rem; }
.study-sidebar-list li.active > a { color: var(--accent-h); }
.study-sidebar-list a {
  color: var(--text-dim); text-decoration: none; display: block;
  padding: 0.15rem 0; transition: color 0.12s;
}
.study-sidebar-list a:hover { color: var(--text-primary); }
.study-sidebar-sub { list-style: none; padding: 0 0 0 0.85rem; margin: 0.2rem 0 0; }
input.sidebar-check { accent-color: var(--accent-h); margin-right: 0.35rem; cursor: pointer; }
.study-resume-banner {
  background: rgba(6,182,212,0.08); border: 1px solid rgba(6,182,212,0.25);
  border-radius: var(--radius-sm); padding: 0.6rem 0.85rem; margin-bottom: 0.75rem;
  font-size: 0.75rem; color: var(--text-secondary);
}
.study-resume-banner button {
  margin-left: 0.5rem; font-family: var(--font-mono);
  font-size: 0.72rem; padding: 0.2rem 0.6rem;
  background: rgba(6,182,212,0.15); border: 1px solid rgba(6,182,212,0.3);
  border-radius: var(--radius-sm); color: var(--accent-h); cursor: pointer;
}
.study-toast {
  position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 0.5rem 1rem;
  font-size: 0.8rem; color: var(--text-secondary); z-index: 300;
}
.study-resume-inner { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.study-resume-label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); }
#study-resume-card { display: none; }
#study-resume-card.visible { display: block; }
main.study-page-main {
  display: flex; gap: 2rem; align-items: flex-start;
  max-width: 1280px; margin-left: auto; margin-right: auto;
  padding-left: 2rem; padding-right: 2rem;
}
main.study-page-main > .study-content-wrap { flex: 1; min-width: 0; }
    `;
    document.head.appendChild(style);
  }

  // ─── 1. Auth helper ──────────────────────────────────────────────────────────

  function getUser() {
    if (window.__RFH_USER && window.__RFH_USER.id) return window.__RFH_USER;
    try {
      const raw = localStorage.getItem('rfh_user');
      if (raw) {
        const u = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (u && u.id) return u;
      }
    } catch (_) {}
    return null;
  }

  // ─── 2. Toast helper ─────────────────────────────────────────────────────────

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'study-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  // ─── 3. Extract section code from h2 text ────────────────────────────────────

  function extractSectionCode(text) {
    const m = text.match(SECTION_RE);
    return m ? m[1] : null;
  }

  // ─── 4. Main init ────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    injectStyles();

    const mount = document.getElementById('study-sidebar-mount');
    if (!mount) return;

    const user = getUser();
    const pathname = window.location.pathname;
    const root = document.querySelector('main') || document.body;

    // ── Change 1: Discover headings FIRST, before any DOM restructuring ───────
    //
    // Our study pages place IDs on <section class="chapter" id="ch-5a">,
    // not on the <h2> inside. Fall back to section[id] > h2 so the sidebar
    // always populates on these pages, and synthesise IDs for h3 sub-items.

    const seen = new Set();
    const headings = [];

    // Explicit h2[id] / h3[id] (future-proof for pages that do have IDs on headings)
    Array.from(root.querySelectorAll('h2[id], h3[id]')).forEach(function (h) {
      if (!seen.has(h)) { seen.add(h); headings.push(h); }
    });

    // Implicit h2: section[id] > h2 — attribute the section's ID to the heading
    Array.from(root.querySelectorAll('section[id] > h2')).forEach(function (h) {
      if (!h.id) h.id = h.closest('section[id]').id;
      if (!seen.has(h)) { seen.add(h); headings.push(h); }
    });

    // Implicit h3: h3 inside section[id] — synthesise slug-based IDs
    Array.from(root.querySelectorAll('section[id] h3')).forEach(function (h3) {
      if (!h3.id) {
        var slug = h3.textContent.trim().toLowerCase()
          .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        h3.id = h3.closest('section[id]').id + '-' + slug;
      }
      if (!seen.has(h3)) { seen.add(h3); headings.push(h3); }
    });

    // Restore DOM order (concat above may interleave)
    headings.sort(function (a, b) {
      return (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1;
    });

    // ── Change 2: Guard — if no headings, hide mount and bail ─────────────────
    if (!headings.length) {
      mount.style.display = 'none';
      return;
    }

    // ── Add mobile hamburger ──────────────────────────────────────────────────
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'study-sidebar-toggle';
    toggleBtn.textContent = '☰';
    toggleBtn.setAttribute('aria-label', 'Toggle table of contents');
    toggleBtn.addEventListener('click', function () {
      mount.classList.toggle('open');
    });
    document.body.appendChild(toggleBtn);

    // ── Auto-wrap: runs AFTER heading check (Change 2 guard passed) ───────────
    if (root.tagName === 'MAIN') {
      root.classList.add('study-page-main');
      const existingChildren = Array.from(root.childNodes).filter(function (node) {
        return node !== mount;
      });
      const wrap = document.createElement('div');
      wrap.className = 'study-content-wrap';
      existingChildren.forEach(function (node) { wrap.appendChild(node); });
      if (mount.parentNode === root) {
        root.insertBefore(wrap, mount);
      } else {
        root.appendChild(wrap);
      }
    }

    // ── Build sidebar TOC ────────────────────────────────────────────────────

    const ul = document.createElement('ul');
    ul.className = 'study-sidebar-list';

    const liMap = {};
    const checkboxMap = {};
    let currentH2Li = null;
    let currentSubUl = null;

    headings.forEach(function (heading) {
      const li = document.createElement('li');
      liMap[heading.id] = li;

      if (heading.tagName === 'H2') {
        if (user) {
          const cb = document.createElement('input');
          cb.type = 'checkbox';
          cb.className = 'sidebar-check';
          cb.setAttribute('aria-label', 'Mark section as read');
          li.appendChild(cb);

          const code = extractSectionCode(heading.textContent.trim());
          if (code) {
            checkboxMap[code] = cb;
            cb.dataset.sectionCode = code;
          }

          cb.addEventListener('click', function () {
            handleCheckboxClick(cb, heading, user, pathname);
          });
        }

        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent.trim();
        li.appendChild(a);

        currentSubUl = null;
        currentH2Li = li;
        ul.appendChild(li);

      } else if (heading.tagName === 'H3') {
        if (!currentSubUl) {
          currentSubUl = document.createElement('ul');
          currentSubUl.className = 'study-sidebar-sub';
          if (currentH2Li) {
            currentH2Li.appendChild(currentSubUl);
          } else {
            ul.appendChild(currentSubUl);
          }
        }

        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent.trim();
        li.appendChild(a);
        currentSubUl.appendChild(li);
      }

      const anchor = li.querySelector('a');
      if (anchor) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          heading.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });

    mount.appendChild(ul);

    // ── Scroll-spy ───────────────────────────────────────────────────────────

    const dwellTimers = {};

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const id = entry.target.id;
        const li = liMap[id];

        if (entry.isIntersecting) {
          Object.values(liMap).forEach(function (el) { el.classList.remove('active'); });
          if (li) li.classList.add('active');

          if (entry.target.tagName === 'H2' && user) {
            if (!dwellTimers[id]) {
              dwellTimers[id] = setTimeout(function () {
                const code = extractSectionCode(entry.target.textContent.trim());
                if (code) {
                  const cb = checkboxMap[code];
                  if (cb && !cb.checked) {
                    cb.checked = true;
                    postMarkRead(user, pathname, code, entry.target);
                  }
                }
                delete dwellTimers[id];
              }, 15000);
            }
          }

        } else {
          if (dwellTimers[id]) {
            clearTimeout(dwellTimers[id]);
            delete dwellTimers[id];
          }
        }
      });
    }, { rootMargin: '-10% 0px -80% 0px' });

    headings.forEach(function (h) { observer.observe(h); });

    // ── Load progress from API (logged-in only) ───────────────────────────────

    if (user) {
      loadProgress(user, pathname, checkboxMap, mount);
    }

    // ── Handle intermediate index resume card ─────────────────────────────────

    if (pathname.includes('/study/intermediate/index') && user) {
      loadResumeCard(user);
    }
  });

  // ─── 5. Checkbox click handler ───────────────────────────────────────────────

  function handleCheckboxClick(cb, heading, user, pathname) {
    const previousState = !cb.checked;
    const code = extractSectionCode(heading.textContent.trim());
    if (!code) return;

    postMarkRead(user, pathname, code, heading).catch(function () {
      cb.checked = previousState;
      showToast("Couldn't save — try again");
    });
  }

  // ─── 6. POST mark-read ───────────────────────────────────────────────────────

  function postMarkRead(user, pathname, sectionCode, heading) {
    const elapsed = Math.round((Date.now() - pageLoadTime) / 1000);
    return fetch(API_BASE + '/mark-read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user.id,
        page_url: pathname,
        section: sectionCode,
        syllabus_refs: [],
        time_on_page_seconds: elapsed
      })
    }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
    });
  }

  // ─── 7. Load progress ────────────────────────────────────────────────────────

  function loadProgress(user, pathname, checkboxMap, mount) {
    fetch(API_BASE + '/user/' + user.id)
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data || !Array.isArray(data.progress)) return;
        const pageEntry = data.progress.find(function (p) {
          return p.page_url === pathname;
        });
        if (!pageEntry || !Array.isArray(pageEntry.sections)) return;
        pageEntry.sections.forEach(function (code) {
          const cb = checkboxMap[code];
          if (cb) cb.checked = true;
        });
      })
      .catch(function () {});

    fetch(API_BASE + '/recommendations/' + user.id)
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data || !data.resume) return;
        const resume = data.resume;
        if (resume.page_url !== pathname) return;
        const banner = document.createElement('div');
        banner.className = 'study-resume-banner';
        const anchor = resume.section_anchor || '';
        banner.innerHTML = 'Resume from §' + anchor + '?';
        const btn = document.createElement('button');
        btn.textContent = 'Go';
        btn.addEventListener('click', function () {
          const target = document.getElementById(anchor);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
        banner.appendChild(btn);
        mount.insertBefore(banner, mount.firstChild);
      })
      .catch(function () {});
  }

  // ─── 8. Resume card on index page ────────────────────────────────────────────

  function loadResumeCard(user) {
    const card = document.getElementById('study-resume-card');
    fetch(API_BASE + '/recommendations/' + user.id)
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data || !data.resume) {
          if (card) card.style.display = 'none';
          return;
        }
        const resume = data.resume;
        const href = resume.page_url + (resume.section_anchor ? '#' + resume.section_anchor : '');
        if (card) {
          card.innerHTML = '<div class="study-resume-inner">' +
            '<span class="study-resume-label">Continue where you left off</span>' +
            '<a href="' + href + '" class="btn btn--primary">Resume →</a>' +
            '</div>';
          card.classList.add('visible');
        }
      })
      .catch(function () {
        if (card) card.style.display = 'none';
      });
  }

})();
