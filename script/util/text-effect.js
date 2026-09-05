const revealText = document.querySelectorAll('.reveal-text');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const span = target.querySelector('span');

        if (span) {
          if (prefersReducedMotion) {
            span.classList.add('is-reduced');
          } else {
            span.classList.add('is-visible');
          }
        }
        obs.unobserve(target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

revealText.forEach(el => observer.observe(el));
