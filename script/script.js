import './util/text-effect.js';
import './util/off-canvas-menu.js';
import './util/cursor.js';

const header = document.querySelector('.header');
const cards = document.querySelectorAll('.strength-card, .project-card');

let lastScrollY = window.scrollY;

window.addEventListener(
  'scroll',
  () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
  },
  { passive: true }
);
