(function() {
  var images = [
    '/images/works-display/dangiuz-10.jpg?v=20260228h',
    '/images/works-display/dangiuz-100.jpg?v=20260228h',
    '/images/works-display/dangiuz-101.jpg?v=20260228h',
    '/images/works-display/dangiuz-102.jpg?v=20260228h',
    '/images/works-display/dangiuz-105.jpg?v=20260228h',
    '/images/works-display/dangiuz-106.jpg?v=20260228h',
    '/images/works-display/dangiuz-107.jpg?v=20260228h',
    '/images/works-display/dangiuz-108.jpg?v=20260228h',
    '/images/works-display/dangiuz-109.jpg?v=20260228h',
    '/images/works-display/dangiuz-13.jpg?v=20260228h',
    '/images/works-display/dangiuz-135.jpg?v=20260228h',
    '/images/works-display/dangiuz-141.jpg?v=20260228h',
    '/images/works-display/dangiuz-142.jpg?v=20260228h',
    '/images/works-display/dangiuz-145.jpg?v=20260228h',
    '/images/works-display/dangiuz-147.jpg?v=20260228h',
    '/images/works-display/dangiuz-152.jpg?v=20260228h',
    '/images/works-display/dangiuz-158.jpg?v=20260228h',
  ];

  function pickHeroOnce() {
    var hero = document.getElementById('hero-image');
    if (!hero || images.length === 0) {
      return;
    }
    if (window.__heroPickedOnce || hero.dataset.heroLocked === '1') {
      return;
    }
    window.__heroPickedOnce = true;
    hero.dataset.heroLocked = '1';

    var idx = Math.floor(Math.random() * images.length);
    hero.style.opacity = '0';
    hero.onload = function() {
      hero.style.opacity = '1';
      hero.onload = null;
    };
    hero.src = images[idx];
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pickHeroOnce);
  } else {
    pickHeroOnce();
  }
})();
