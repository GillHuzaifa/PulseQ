(function () {
  'use strict';

  function init() {
    // ——— Mobile nav: toggle + auto-close on link click ———
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
      });
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
        });
      });
    }

    // ——— Header: add shadow on scroll (professional feel) ———
    var header = document.querySelector('.header');
    if (header) {
      function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > 20);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // ——— Scroll-reveal: animate sections into view ———
    var animated = document.querySelectorAll('.animate-on-scroll');
    if (animated.length && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });
      animated.forEach(function (el) { observer.observe(el); });
    } else {
      animated.forEach(function (el) { el.classList.add('in-view'); });
    }

    // ——— Forms: Formspree + loading state (automation) ———
    document.querySelectorAll('form[data-pulseq-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        var url = typeof window.PULSEQ_FORM_URL !== 'undefined' && window.PULSEQ_FORM_URL;
        if (!url) {
          e.preventDefault();
          alert('Form is not connected yet. Add your Formspree URL in config.js (see FORMSPREE_SETUP.md).');
          return;
        }
        form.action = url;
        form.method = 'POST';
        var next = form.querySelector('input[name="_next"]');
        if (!next) {
          next = document.createElement('input');
          next.type = 'hidden';
          next.name = '_next';
          form.appendChild(next);
        }
        next.value = window.location.origin + window.location.pathname.replace(/[^/]+$/, '') + 'thank-you.html';

        // Show loading state on submit button
        var btn = form.querySelector('button[type="submit"]');
        if (btn && !btn.classList.contains('loading')) {
          btn.classList.add('loading');
          btn.disabled = true;
        }
      });
    });

    // ——— Live queue demo (home page only) ———
    var numEl = document.getElementById('q-num');
    var progressEl = document.getElementById('q-progress');
    var etaEl = document.getElementById('q-eta');
    if (numEl && progressEl && etaEl) {
      var n = 12, p = 45, e = 0;
      var eta = ['~18 min', '~14 min', '~10 min', '~6 min', '~3 min', '~1 min'];
      var t = setInterval(function () {
        n = Math.max(0, n - 1);
        p = Math.min(100, p + (100 - p) * 0.12);
        numEl.textContent = n;
        progressEl.style.width = p + '%';
        if (e < eta.length) etaEl.innerHTML = eta[e++];
        if (n <= 0) clearInterval(t);
      }, 2500);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
