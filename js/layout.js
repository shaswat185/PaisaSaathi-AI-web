/*
 * PaisaSaathi AI — shared layout (header, nav, footer)
 * ----------------------------------------------------
 * Header, navigation aur footer SIRF is ek file me hain.
 * Nav ya footer badalna ho to yahin badlo — saare pages me apne aap update ho jayega.
 *
 * Har page me bas ye do placeholders chahiye:
 *   <div id="site-header"></div>   ...   <div id="site-footer"></div>
 * aur ye script:  <script src="js/layout.js"></script>
 */
(function () {
  'use strict';

  /* ---------- Site settings (yahin se sab control hota hai) ---------- */
  var SITE = {
    name: 'PaisaSaathi AI',
    email: 'shaswat185dubey@gmail.com',
    // Play Store par app live hone ke baad yahan apna listing URL daalo, e.g.
    // 'https://play.google.com/store/apps/details?id=com.yourcompany.paisasaathi'
    // Khali rakhoge to "Coming soon on Google Play" dikhega (koi broken link nahi).
    playUrl: ''
  };

  var NAV = [
    { label: 'Home', href: 'index.html' },
    { label: 'Features', href: 'index.html#features' },
    { label: 'About', href: 'about.html' },
    { label: 'Support', href: 'support.html' }
  ];

  var FOOTER_COLS = [
    {
      title: 'Explore',
      links: [
        { label: 'Home', href: 'index.html' },
        { label: 'Features', href: 'index.html#features' },
        { label: 'FAQ', href: 'index.html#faq' },
        { label: 'About us', href: 'about.html' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: 'privacy.html' },
        { label: 'Terms of Use', href: 'terms.html' },
        { label: 'Disclaimer', href: 'disclaimer.html' },
        { label: 'Account Deletion', href: 'account-deletion.html' }
      ]
    }
  ];

  /* ---------- Helpers ---------- */
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (page === '') page = 'index.html';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function isActive(href) {
    if (href.indexOf('#') !== -1) return false;
    return href.toLowerCase() === page;
  }

  function playButton(cls) {
    if (SITE.playUrl) {
      return '<a class="btn ' + cls + '" href="' + SITE.playUrl + '" target="_blank" rel="noopener">Get it on Google Play</a>';
    }
    return '<span class="btn ' + cls + ' disabled" aria-disabled="true">Coming soon on Google Play</span>';
  }

  /* ---------- Header ---------- */
  function headerHTML() {
    var items = NAV.map(function (n) {
      return '<li class="nav-item"><a class="nav-link' + (isActive(n.href) ? ' active' : '') + '"' +
        (isActive(n.href) ? ' aria-current="page"' : '') + ' href="' + n.href + '">' + esc(n.label) + '</a></li>';
    }).join('');

    return '' +
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<nav class="navbar navbar-expand-lg fixed-top" aria-label="Main navigation">' +
        '<div class="container">' +
          '<a class="navbar-brand d-flex align-items-center gap-2" href="index.html">' +
            '<img src="assets/img/logo-96.png" width="42" height="42" alt="PaisaSaathi AI logo" class="site-logo">' +
            '<span>PaisaSaathi <small>AI</small></span>' +
          '</a>' +
          '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" ' +
            'aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span></button>' +
          '<div class="collapse navbar-collapse" id="mainNav">' +
            '<ul class="navbar-nav ms-auto align-items-lg-center gap-lg-3">' + items +
              '<li class="nav-item ms-lg-2">' + playButton('btn-primary-green btn-sm px-4') + '</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</nav>';
  }

  /* ---------- Footer ---------- */
  function footerHTML() {
    var cols = FOOTER_COLS.map(function (c) {
      return '<div class="col-6 col-lg-2"><h2 class="footer-title">' + esc(c.title) + '</h2>' +
        c.links.map(function (l) { return '<a href="' + l.href + '">' + esc(l.label) + '</a>'; }).join('') +
        '</div>';
    }).join('');

    return '' +
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="row gy-4">' +
            '<div class="col-lg-5">' +
              '<a class="navbar-brand d-inline-flex align-items-center gap-2 text-white" href="index.html">' +
                '<img src="assets/img/logo-96.png" width="42" height="42" alt="PaisaSaathi AI logo" class="site-logo site-logo-footer">' +
                '<span>PaisaSaathi <small>AI</small></span></a>' +
              '<p class="footer-copy mt-3">A friendly place to learn budgeting and personal-finance basics in simple Hinglish. ' +
                'For educational use only — not personalised financial, investment, tax or legal advice.</p>' +
            '</div>' +
            cols +
            '<div class="col-lg-3">' +
              '<h2 class="footer-title">Get in touch</h2>' +
              '<a href="support.html">Support &amp; contact</a>' +
              '<a href="mailto:' + SITE.email + '">' + SITE.email + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>© ' + new Date().getFullYear() + ' ' + SITE.name + '. All rights reserved.</span>' +
            '<span>Educational information only. Investments are subject to market risk.</span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  /* ---------- Inject ---------- */
  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  mount('site-header', headerHTML());
  mount('site-footer', footerHTML());

  /* Page-level "Play Store" buttons: <span data-play-button="btn-primary-green btn-lg"></span> */
  document.querySelectorAll('[data-play-button]').forEach(function (el) {
    var cls = el.getAttribute('data-play-button') || 'btn-primary-green';
    el.outerHTML = playButton(cls);
  });

  /* Shared email: <a data-site-email></a> */
  document.querySelectorAll('[data-site-email]').forEach(function (el) {
    el.setAttribute('href', 'mailto:' + SITE.email);
    if (!el.textContent.trim()) el.textContent = SITE.email;
  });

  window.PaisaSaathiSite = SITE;
})();
