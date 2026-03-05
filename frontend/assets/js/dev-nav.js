/**
 * DEV-NAV — Injects a "Dev Pages" dropdown into .site-nav-links.
 *
 * Reads window.DEV_PAGES from dev-pages.js (the SPOT file).
 * NOT for production use.
 */
(function () {
  const STYLE = `
    .dev-nav-item { position: relative; }
    .dev-nav-toggle {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #f59e0b;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .dev-nav-toggle:hover { color: #fbbf24; }
    .dev-nav-toggle::after { content: ' ▾'; font-size: 10px; }
    .dev-nav-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 12px);
      right: 0;
      min-width: 260px;
      max-height: 70vh;
      overflow-y: auto;
      background: #111827;
      border: 1px solid #1e293b;
      border-radius: 8px;
      padding: 8px 0;
      z-index: 9999;
      box-shadow: 0 8px 32px rgba(0,0,0,0.6);
    }
    .dev-nav-item:hover .dev-nav-dropdown,
    .dev-nav-item:focus-within .dev-nav-dropdown { display: block; }
    .dev-nav-group-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #64748b;
      padding: 10px 16px 4px;
      border-top: 1px solid #1e293b;
      margin-top: 4px;
    }
    .dev-nav-group-label:first-child { border-top: none; margin-top: 0; }
    .dev-nav-dropdown a {
      display: block;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: #94a3b8;
      text-decoration: none;
      padding: 5px 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: none;
      letter-spacing: 0;
    }
    .dev-nav-dropdown a:hover { color: #a78bfa; background: #1a2234; }
    .dev-nav-dropdown a.dev-current { color: #a78bfa; font-weight: 600; }
  `;

  function init() {
    if (!window.DEV_PAGES) return;

    const ul = document.querySelector('.site-nav-links');
    if (!ul) return;

    // Inject styles
    const styleEl = document.createElement('style');
    styleEl.textContent = STYLE;
    document.head.appendChild(styleEl);

    // Current path for active highlight
    const currentPath = window.location.pathname;

    // Build dropdown HTML
    let html = '';
    for (const group of window.DEV_PAGES) {
      html += `<div class="dev-nav-group-label">${group.group}</div>`;
      for (const page of group.pages) {
        const isCurrent = currentPath === page.url ? ' dev-current' : '';
        html += `<a href="${page.url}" class="${isCurrent}">${page.label}</a>`;
      }
    }

    // Build nav item
    const li = document.createElement('li');
    li.className = 'dev-nav-item';
    li.innerHTML = `
      <button class="dev-nav-toggle" aria-haspopup="true">Dev Pages</button>
      <div class="dev-nav-dropdown">${html}</div>
    `;

    ul.appendChild(li);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
