(function() {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  var expanded = toggle.getAttribute('aria-expanded') === 'true';

  toggle.addEventListener('click', function() {
    expanded = !expanded;
    toggle.setAttribute('aria-expanded', String(expanded));
    menu.classList.toggle('nav-menu--open');
  });

  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      expanded = false;
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav-menu--open');
    });
  });
})();
