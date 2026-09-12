(function () {
  'use strict';

  var navMeta = document.querySelector('meta[name="site-nav-active"]');
  var activeKey = navMeta ? navMeta.getAttribute('content') : '';

  function activateNav(mount, key) {
    if (!key) return;
    var link = mount.querySelector('[data-nav="' + key + '"]');
    if (link) link.classList.add('active');
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
    loadPartial('site-nav-mount', '/partials/site-nav.html', function (mount) {
      activateNav(mount, activeKey);
    });
    loadPartial('site-footer-mount', '/partials/site-footer.html', null);
  });
}());
