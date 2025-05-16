// Smooth scroll untuk navigasi (kalau nanti ada anchor link)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    // Bisa tambah fitur smooth scroll kalau link anchor lokal, tapi untuk sekarang biar normal aja
  });
});

// Hover effect sudah di CSS, jadi JS ini buat efek tambahan:
// Misal animasi fade in saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = 0;
    container.style.transition = 'opacity 0.8s ease-in-out';
    requestAnimationFrame(() => {
      container.style.opacity = 1;
    });
  }
});

// tentang.js

// Pilih semua kartu anggota
const anggotaCards = document.querySelectorAll('.anggota-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

// Tambahkan class 'fade' awalnya dan amati setiap kartu
anggotaCards.forEach(card => {
  card.classList.add('fade');
  observer.observe(card);
});
