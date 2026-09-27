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
@media (max-width: 768px) {
  .site-nav .container { position: relative; }
  .site-nav-toggle { display: flex; }
  .site-nav-links {
    display: none;
    position: absolute; top: 100%; left: 0; right: 0;
    flex-direction: column; gap: 0;
    background: rgba(10, 14, 26, 0.98);
    border-bottom: 1px solid var(--border);
    padding: 0.5rem 0;
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
    var linksUl = mount.querySelector('.site-nav-links');
    if (!container || !linksUl) return;

    var btn = document.createElement('button');
    btn.className = 'site-nav-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '☰';
    container.appendChild(btn);

    function closeMenu() {
      linksUl.classList.remove('mobile-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    }

    btn.addEventListener('click', function () {
      var open = linksUl.classList.toggle('mobile-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? '✕' : '☰';
    });

    linksUl.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
  }

  function wireAuth(mount) {
    var linksUl = mount.querySelector('.site-nav-links');
    if (!linksUl) return;

    var token = localStorage.getItem('authToken');

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
      aOut.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        window.location.href = '/';
      });
      liOut.appendChild(aOut);
      linksUl.appendChild(liOut);
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
      wireAuth(mount);
      wireMobileMenu(mount);
    });
    loadPartial('site-footer-mount', '/partials/site-footer.html?v=20260927-2135', null);
  });
}());
