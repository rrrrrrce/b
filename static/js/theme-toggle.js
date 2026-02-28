(function() {
  function setupThemeToggle() {
    var toggleLink = document.querySelector('#theme-toggle');
    if (!toggleLink) {
      return;
    }

    var html = document.documentElement;

    function updateText() {
      var isDark = html.getAttribute('data-theme') === 'dark';
      toggleLink.innerHTML = isDark ? '<b>浅色</b>' : '<b>深色</b>';
    }

    updateText();

    toggleLink.addEventListener('click', function(e) {
      e.preventDefault();
      var currentTheme = html.getAttribute('data-theme');
      var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateText();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggle);
  } else {
    setupThemeToggle();
  }
})();
