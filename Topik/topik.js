// topik.js

// Intersection Observer for fade-in effect on scroll
const topikSections = document.querySelectorAll('.topik-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

topikSections.forEach(section => {
  observer.observe(section);
});

// Highlight active navbar link based on scroll position
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 150;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
