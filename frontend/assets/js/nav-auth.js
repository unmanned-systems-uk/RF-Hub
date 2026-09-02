// nav-auth.js — adds auth-aware Portal/Login link to site nav
(function () {
    var token = localStorage.getItem('authToken');
    var nav = document.querySelector('.site-nav-links');
    if (!nav) return;

    var li = document.createElement('li');
    var a  = document.createElement('a');

    if (token) {
        a.href        = '/pages/portal.html';
        a.textContent = 'Portal';
    } else {
        a.href        = '/pages/login.html';
        a.textContent = 'Login';
    }

    li.appendChild(a);
    nav.appendChild(li);
})();
