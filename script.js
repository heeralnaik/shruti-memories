// A gentle reveal as you scroll through the scrapbook.
const items = document.querySelectorAll('.polaroid, .letter, .color-block');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('seen');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}
