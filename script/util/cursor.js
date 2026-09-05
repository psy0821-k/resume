const cursor = document.querySelector('.cursor');

if (cursor) {
  window.addEventListener('pointermove', event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    document.body.classList.add('is-cursor-visible');
  });
}
