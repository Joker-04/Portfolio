// Mobile navigation and small progressive enhancements.
(() => {
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    const closeMenu = () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    };
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('a[target="_blank"]').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
})();
