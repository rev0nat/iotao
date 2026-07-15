const sections = document.querySelectorAll(".section-paw-mark");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  },
  {
    threshold: 0.35,
  }
);

sections.forEach((section) => observer.observe(section));