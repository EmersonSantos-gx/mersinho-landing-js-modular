/**
 * Observador de interseção para animar elementos (.reveal) ao rolar a página
 */
let revealObserver = null;

export function initRevealObserver(root = document) {
  if (!revealObserver && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  root.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
    if (revealObserver) {
      revealObserver.observe(el);
    } else {
      el.classList.add('visible');
    }
  });
}
