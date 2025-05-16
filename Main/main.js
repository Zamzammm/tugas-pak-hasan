// main.js

// Fade in on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add('fade');
  observer.observe(section);
});

// Smooth scroll to anchors
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // Jika href diawali dengan '#' (anchor dalam halaman yang sama)
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Kalau bukan #, jangan preventDefault, biar link pindah halaman
  });
});

// Optional: Toggle active class in nav (optional, aesthetic)
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
