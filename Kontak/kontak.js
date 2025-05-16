// kontak.js

// Cuma validasi sederhana dan alert (buat demo)
const kontakForm = document.getElementById('kontakForm');

kontakForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  if (!nama || !email || !pesan) {
    alert('Mohon isi semua bidang sebelum mengirim pesan.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Format email tidak valid.');
    return;
  }

  alert(`Terima kasih, ${nama}! Pesanmu sudah kami terima.`);
  kontakForm.reset();
});

function validateEmail(email) {
  // Regex sederhana cek email valid
  return /\S+@\S+\.\S+/.test(email);
}
