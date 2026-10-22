const toggle = document.querySelector('.navbar-toggler');
const menu = document.getElementById('navbarMain');
if (toggle && menu) toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  toggle.setAttribute('aria-expanded', String(open));
});
