// ============================================
// PORTAL IT — Navbar & shared interactions
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  /* Mobile menu toggle */
  var toggleBtn = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      var isOpen = navLinks.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* Dropdown (Borang Kami) — click to toggle, works on desktop + mobile */
  var dropdownParents = document.querySelectorAll('.has-dropdown');

  dropdownParents.forEach(function (parent) {
    var trigger = parent.querySelector('.nav-link');

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var wasOpen = parent.classList.contains('open');

      // close any other open dropdowns first
      dropdownParents.forEach(function (p) { p.classList.remove('open'); });

      if (!wasOpen) parent.classList.add('open');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    dropdownParents.forEach(function (parent) {
      if (!parent.contains(e.target)) parent.classList.remove('open');
    });
  });

  // Close mobile nav when a plain link (non-dropdown) is clicked
  document.querySelectorAll('.nav-links > li:not(.has-dropdown) > a, .dropdown a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navLinks) navLinks.classList.remove('open');
    });
  });

});
