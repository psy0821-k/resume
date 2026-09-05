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

const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

const enableCardInteraction = () => {
  if (!canHover.matches) return;

  cards.forEach(card => {
    let rect;

    card.addEventListener('mouseenter', () => {
      rect = card.getBoundingClientRect();
    });

    card.addEventListener('mousemove', event => {
      if (!rect) return;

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateX = (y / rect.height - 0.5) * -3;
      const rotateY = (x / rect.width - 0.5) * 3;

      card.style.transform = `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-5px)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
};

enableCardInteraction();
