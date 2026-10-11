/* PaisaSaathi AI — page behaviour (layout.js se alag rakha gaya hai) */
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu: link click par menu band karo
  document.querySelectorAll('.navbar .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var nav = document.getElementById('mainNav');
      if (nav && nav.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Navbar par scroll shadow
  var bar = document.querySelector('.navbar');
  function onScroll() { if (bar) bar.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
