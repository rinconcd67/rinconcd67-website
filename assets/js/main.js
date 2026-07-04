/* RINCONCD67 — language toggle, mobile nav, scroll reveal */
(function () {
  var saved = localStorage.getItem('rcd67-lang');
  if (saved === 'es' || saved === 'en') document.documentElement.lang = saved;

  function syncBtn() {
    var b = document.getElementById('langBtn');
    if (!b) return;
    var es = document.documentElement.lang === 'es';
    b.textContent = es ? 'EN' : 'ES';
    b.setAttribute('aria-label', es ? 'Switch to English' : 'Cambiar a español');
  }

  document.addEventListener('DOMContentLoaded', function () {
    syncBtn();
    var b = document.getElementById('langBtn');
    if (b) b.addEventListener('click', function () {
      var next = document.documentElement.lang === 'es' ? 'en' : 'es';
      document.documentElement.lang = next;
      localStorage.setItem('rcd67-lang', next);
      syncBtn();
    });

    var mb = document.getElementById('menuBtn'), nav = document.getElementById('mainNav');
    if (mb && nav) mb.addEventListener('click', function () {
      nav.classList.toggle('open');
      mb.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    }

    var rot = document.getElementById('rotWord');
    if (rot && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var en = ['market', 'supply', 'artificial'], es = ['de mercado', 'de suministro', 'artificial'], i = 0;
      setInterval(function () {
        i = (i + 1) % 3;
        var isEs = document.documentElement.lang === 'es';
        rot.style.opacity = 0;
        setTimeout(function () { rot.textContent = (isEs ? es : en)[i]; rot.style.opacity = 1; }, 260);
      }, 3200);
      rot.style.transition = 'opacity .26s ease';
    }
  });
})();
