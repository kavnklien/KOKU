// KOKU – site.js

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var toggle  = document.getElementById('sidebarToggle');
        var sidebar = document.getElementById('appSidebar');

        if (!toggle || !sidebar) return;

        // Toggle sidebar on hamburger click
        toggle.addEventListener('click', function () {
            var isOpen = sidebar.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // Dismiss sidebar when clicking outside it (mobile)
        document.addEventListener('click', function (e) {
            if (window.innerWidth <= 768 &&
                !sidebar.contains(e.target) &&
                !toggle.contains(e.target)) {
                sidebar.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Highlight active nav link based on current path
        var currentPath = window.location.pathname.toLowerCase();
        document.querySelectorAll('.nav-list .nav-link').forEach(function (link) {
            var href = link.getAttribute('href');
            if (href && href !== '#' && currentPath === href.toLowerCase()) {
                link.classList.add('active');
            }
        });
    });

}());
