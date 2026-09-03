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
        li.appendChild(a);
        nav.appendChild(li);

        var liOut  = document.createElement('li');
        var logout = document.createElement('a');
        logout.href        = '#';
        logout.textContent = 'Log out';
        logout.style.cssText = 'cursor:pointer;color:var(--text-dim);font-size:0.85em;';
        logout.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('authToken');
            localStorage.removeItem('currentUser');
            window.location.href = '/';
        });
        liOut.appendChild(logout);
        nav.appendChild(liOut);
    } else {
        a.href        = '/pages/login.html';
        a.textContent = 'Login';
        li.appendChild(a);
        nav.appendChild(li);
    }
})();
