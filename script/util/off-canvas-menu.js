const body = document.body;
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelectorAll('.nav a');

const openMenu = () => {
  nav.classList.add('is-animated');
  nav.classList.add('is-open');
  body.classList.add('menu-open');

  menuButton.classList.add('is-open');

  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', '메뉴 닫기');

  body.classList.add('menu-open');
};

const closeMenu = () => {
  nav.classList.remove('is-open');
  body.classList.remove('menu-open');
  menuButton.classList.remove('is-open');

  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
};

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.contains('is-open');

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
