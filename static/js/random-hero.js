(function() {
  var images = [
    'images/works-banner/banner-001.jpg?v=20260228i',
    'images/works-banner/banner-002.jpg?v=20260228i',
    'images/works-banner/banner-003.jpg?v=20260228i',
    'images/works-banner/banner-004.jpg?v=20260228i',
    'images/works-banner/banner-005.jpg?v=20260228i',
    'images/works-banner/banner-006.jpg?v=20260228i',
    'images/works-banner/banner-007.jpg?v=20260228i',
    'images/works-banner/banner-008.jpg?v=20260228i',
    'images/works-banner/banner-009.jpg?v=20260228i',
    'images/works-banner/banner-010.jpg?v=20260228i',
    'images/works-banner/banner-011.jpg?v=20260228i',
    'images/works-banner/banner-012.jpg?v=20260228i',
    'images/works-banner/banner-013.jpg?v=20260228i',
    'images/works-banner/banner-014.jpg?v=20260228i',
    'images/works-banner/banner-015.jpg?v=20260228i',
    'images/works-banner/banner-016.jpg?v=20260228i',
    'images/works-banner/banner-017.jpg?v=20260228i',
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
    var base = window.__siteBase || '/';
    if (base.slice(-1) !== '/') {
      base += '/';
    }
    hero.src = base + images[idx];
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pickHeroOnce);
  } else {
    pickHeroOnce();
  }
})();
