(function () {
  'use strict';

  var navMeta = document.querySelector('meta[name="site-nav-active"]');
  var activeKey = navMeta ? navMeta.getAttribute('content') : '';

  function activateNav(mount, key) {
    if (!key) return;
    var link = mount.querySelector('[data-nav="' + key + '"]');
    if (link) link.classList.add('active');
  }

  // ── Mobile hamburger menu ──────────────────────────────────────────────
  // rf-hub-v2.css (LOCKED) hides .site-nav-links entirely at <=768px with a
  // comment saying "implement hamburger menu per page" - nobody had. This
  // injects the toggle + the CSS needed to actually show the menu on
  // mobile, once, here, so every page using the SPOT nav gets it for free.
  function injectMobileNavStyles() {
    if (document.getElementById('nav-loader-mobile-styles')) return;
    var style = document.createElement('style');
    style.id = 'nav-loader-mobile-styles';
    style.textContent = `
.site-nav-toggle {
  display: none;
  min-width: 44px; min-height: 44px;
  align-items: center; justify-content: center;
  background: none; border: none; color: var(--text-primary);
  font-size: 1.5rem; line-height: 1; cursor: pointer; padding: 0;
}
.site-nav-mobile-actions { display: none; }
.site-nav-mobile-auth {
  font-family: var(--font-mono); font-size: 12px; letter-spacing: 1px;
  text-transform: uppercase; color: var(--text-dim); text-decoration: none;
  background: none; border: none; cursor: pointer;
  min-height: 44px; display: flex; align-items: center; padding: 0 0.25rem;
}
@media (max-width: 768px) {
  .site-nav .container { position: relative; }
  .site-nav-toggle { display: flex; }
  .site-nav-mobile-actions { display: flex; align-items: center; gap: 0.75rem; }
  .site-nav-links {
    display: none;
    position: fixed; left: 0; right: 0; bottom: 0;
    flex-direction: column; gap: 0;
    background: var(--bg-deep, #0a0e1a);
    border-bottom: 1px solid var(--border);
    padding: 0.5rem 0;
    overflow-y: auto;
    z-index: 90;
  }
  .site-nav-links.mobile-open { display: flex; }
  .site-nav-links a {
    display: block;
    padding: 1rem var(--space-md);
    font-size: 14px;
  }
}
    `;
    document.head.appendChild(style);
  }

  function wireMobileMenu(mount) {
    var container = mount.querySelector('.site-nav .container');
    var navEl = mount.querySelector('.site-nav');
    var linksUl = mount.querySelector('.site-nav-links');
    if (!container || !navEl || !linksUl) return;

    // Shared wrapper for the mobile-only auth badge + hamburger, so both
    // sit together on the right of the bar (space-between only has brand
    // vs. this one wrapper to place, instead of fighting over 3 items).
    var actions = document.createElement('div');
    actions.className = 'site-nav-mobile-actions';
    container.appendChild(actions);

    var btn = document.createElement('button');
    btn.className = 'site-nav-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '☰';
    actions.appendChild(btn);

    function positionMenu() {
      // position:fixed can't reference top:100% of the nav bar, so compute
      // the real pixel offset here - the menu must start exactly below the
      // sticky nav bar (no gap, no overlap). Setting height explicitly
      // instead of relying on top+bottom auto-resolution, which did not
      // reliably fill to the viewport edge in testing.
      var top = navEl.getBoundingClientRect().bottom;
      linksUl.style.top = top + 'px';
      linksUl.style.height = (window.innerHeight - top) + 'px';
    }

    function closeMenu() {
      linksUl.classList.remove('mobile-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', function () {
      var open = linksUl.classList.toggle('mobile-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? '✕' : '☰';
      if (open) {
        positionMenu();
        document.body.style.overflow = 'hidden'; // lock page scroll behind the menu
      } else {
        document.body.style.overflow = '';
      }
    });

    window.addEventListener('resize', function () {
      if (linksUl.classList.contains('mobile-open')) positionMenu();
    });

    linksUl.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
  }

  function doLogout(e) {
    if (e) e.preventDefault();
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  }

  function wireAuth(mount) {
    var linksUl = mount.querySelector('.site-nav-links');
    if (!linksUl) return;

    var token = localStorage.getItem('authToken');
    // Mobile top-bar badge (visible without opening the menu) - created by
    // wireMobileMenu, called first; falls back to null on failure so this
    // still works standalone.
    var actions = mount.querySelector('.site-nav-mobile-actions');

    if (token) {
      // Logged in: Portal link + Logout link
      var liPortal = document.createElement('li');
      var aPortal = document.createElement('a');
      aPortal.href = '/pages/portal.html';
      aPortal.textContent = 'Portal';
      aPortal.setAttribute('data-nav', 'portal');
      liPortal.appendChild(aPortal);
      linksUl.appendChild(liPortal);

      var liOut = document.createElement('li');
      var aOut = document.createElement('a');
      aOut.href = '#';
      aOut.textContent = 'Log out';
      aOut.style.cssText = 'cursor:pointer;color:var(--text-dim);font-size:0.85em;';
      aOut.addEventListener('click', doLogout);
      liOut.appendChild(aOut);
      linksUl.appendChild(liOut);

      if (actions) {
        var badgeOut = document.createElement('button');
        badgeOut.type = 'button';
        badgeOut.className = 'site-nav-mobile-auth';
        badgeOut.textContent = 'Log out';
        badgeOut.addEventListener('click', doLogout);
        actions.insertBefore(badgeOut, actions.firstChild);
      }
    } else {
      // Logged out: Login + Register links
      var liIn = document.createElement('li');
      var aIn = document.createElement('a');
      aIn.href = '/pages/login.html';
      aIn.textContent = 'Login';
      aIn.setAttribute('data-nav', 'login');
      liIn.appendChild(aIn);
      linksUl.appendChild(liIn);

      var liReg = document.createElement('li');
      var aReg = document.createElement('a');
      aReg.href = '/pages/register.html';
      aReg.textContent = 'Register';
      aReg.setAttribute('data-nav', 'register');
      liReg.appendChild(aReg);
      linksUl.appendChild(liReg);

      if (actions) {
        var badgeIn = document.createElement('a');
        badgeIn.href = '/pages/login.html';
        badgeIn.className = 'site-nav-mobile-auth';
        badgeIn.textContent = 'Log in';
        actions.insertBefore(badgeIn, actions.firstChild);
      }
    }
  }

  function loadPartial(mountId, url, onLoad) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    fetch(url)
      .then(function (r) { return r.ok ? r.text() : Promise.reject(r.status); })
      .then(function (html) {
        mount.innerHTML = html;
        if (onLoad) onLoad(mount);
      })
      .catch(function () { /* keep inline fallback */ });
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectMobileNavStyles();
    loadPartial('site-nav-mount', '/partials/site-nav.html?v=20260927-2135', function (mount) {
      activateNav(mount, activeKey);
      wireMobileMenu(mount);
      wireAuth(mount);
    });
    loadPartial('site-footer-mount', '/partials/site-footer.html?v=20260927-2135', null);
  });
}());
