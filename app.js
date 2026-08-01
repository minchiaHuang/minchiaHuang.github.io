// Keyboard navigation + INVERT theme toggle.
(function () {
  var go = {
    h: '/',
    g: 'https://github.com/minchiaHuang',
    l: 'https://www.linkedin.com/in/min-chia-huang-698a6b184/',
    e: 'mailto:minchia.huang.dev@gmail.com',
    r: 'TommyHuang_Resume.pdf'
  };

  function current() {
    var set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function invert() {
    var next = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  }

  document.querySelectorAll('.keycap').forEach(function (btn) {
    var cap = btn.querySelector('.k');
    if (!cap) return;
    var k = cap.textContent.trim().toLowerCase();
    btn.addEventListener('click', function (ev) {
      if (k === 'i') { ev.preventDefault(); invert(); }
      else if (go[k]) { ev.preventDefault(); location.href = go[k]; }
    });
  });

  addEventListener('keydown', function (ev) {
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    var t = ev.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    var k = ev.key.toLowerCase();
    if (k === 'i') invert();
    else if (go[k]) location.href = go[k];
  });
})();
