(function () {
  'use strict';

  var navMeta = document.querySelector('meta[name="site-nav-active"]');
  var activeKey = navMeta ? navMeta.getAttribute('content') : '';

  function activateNav(mount, key) {
    if (!key) return;
    var link = mount.querySelector('[data-nav="' + key + '"]');
    if (link) link.classList.add('active');
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
      // Logged out: Login link
      var liIn = document.createElement('li');
      var aIn = document.createElement('a');
      aIn.href = '/pages/login.html';
      aIn.textContent = 'Login';
      aIn.setAttribute('data-nav', 'login');
      liIn.appendChild(aIn);
      linksUl.appendChild(liIn);
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
    loadPartial('site-nav-mount', '/partials/site-nav.html?v=20260913-1600', function (mount) {
      activateNav(mount, activeKey);
      wireAuth(mount);
    });
    loadPartial('site-footer-mount', '/partials/site-footer.html?v=20260913-1600', null);
  });
}());
