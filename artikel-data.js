const dataArtikel = {
  1: {
    judul: "Pengertian Sistem Komputer",
    konten: `
      <p>Sistem komputer adalah kumpulan komponen yang saling berinteraksi untuk mengolah data dan menghasilkan informasi. Komponen ini terdiri dari perangkat keras (hardware), perangkat lunak (software), dan manusia (brainware). Sistem komputer bertujuan untuk memproses data dan menghasilkan informasi yang dapat digunakan oleh pengguna untuk berbagai aktivitas. </p>
      <h2>Komponen Utama</h2>
      <ul>
        <li><strong>Hardware</strong>: Sistem komputer adalah kumpulan komponen yang saling berinteraksi untuk mengolah data dan menghasilkan informasi. Komponen ini terdiri dari perangkat keras (hardware), perangkat lunak (software), dan manusia (brainware). Sistem komputer bertujuan untuk memproses data dan menghasilkan informasi yang dapat digunakan oleh pengguna untuk berbagai aktivitas.</li>
        <li><strong>Software</strong>: Program dan aplikasi yang menjalankan instruksi pada perangkat keras, seperti sistem operasi, aplikasi pengolah kata, dan program antarmuka. Software memungkinkan komputer untuk melakukan tugas-tugas tertentu sesuai dengan kebutuhan pengguna.</li>
        <li><strong>Brainware</strong>: Pengguna atau operator yang menggunakan dan menjalankan komputer. Brainware berperan dalam menentukan tujuan dan penggunaan komputer, serta menginterpretasikan hasil yang dihasilkan.</li>
      </ul>
    `,
    gambar: "download.jpeg",
  },
  2: {
    judul: "Komponen Perangkat Keras",
    konten: `
      <p>Perangkat keras adalah bagian fisik komputer seperti CPU, RAM, HDD, dll.</p>
      <h2>Contoh Hardware</h2>
      <ul>
        <li>Processor (CPU)</li>
        <li>RAM</li>
        <li>Harddisk / SSD</li>
        <li>MotherBoard</li>
        <li>Kartu Grafis (GPU)</li>
        <li>Power Supply (PSU)</li>
        <li>Sistem pendingin</li>
      </ul>
    `,
    subArtikel: "Sub artikel ini menjelaskan lebih detail tentang fungsi RAM dan CPU dalam sebuah sistem.",
    gambar: "download (2).jpeg",
    file: "uploads/Komponen Sistem Komputer Presentasi Biru dan Ungu Ilustrasi (1).pdf",
  },
  // Tambahkan artikel lainnya...
   3: {
    judul: "Jaringan Komputer dan Internet",
    konten: `
      <p>aringan komputer adalah sistem yang menghubungkan dua atau lebih perangkat komputer agar dapat saling bertukar informasi dan sumber daya. Internet, di sisi lain, adalah jaringan global yang menghubungkan berbagai jaringan komputer di seluruh dunia, memungkinkan akses ke informasi dan komunikasi jarak jauh. </p>
      <h2>Jaringan dasar komputer</h2>
      <ul>
        <li>LAN (Local Area Network)</li>
        <li>MAN (Metropolitan Area Network)</li>
        <li>WAN (Wide Area Network)</li>
        <li>Jaringan Nirkabel (Wireless Network)</li>
      </ul>
      <h2>Perangkat Jaringan</h2>
      <ul>
        <li>Switch</li>
        <li>Router</li>
        <li>Modem</li>
        <li>Access Point</li>
        <li>Kabel Jaringan</li>
      </ul>
      <h2>Topologi Jaringan</h2>
      <ul>
        <li>Mesh = Topologi Mesh merupakan metode untuk menghubungkan node secara langsung menggunakan kabel jaringan, tanpa ada perantara.</li>
        <li>Star = merupakan metode untuk menghubungkan beberapa node menggunakan satu perangkat keras Hub dalam sebuah jaringan.</li>
        <li>Bus = Topologi bus adalah metode untuk menghubungkan antar komputer menggunakan satu kabel jaringan.</li>
        <li>Ring = merupakan metode untuk menghubungkan antar komputer menggunakan rute yang berbentuk melingkar seperti cincin.]</li>
        <li>Tree = Topologi Tree adalah metode untuk menghubungkan beberapa komputer menggunakan skema transmisi data yang bersifat hirarkis, dengan terdapat dua perangkat hub (utama dan sekunder).</li>
        <li>Hybrid = merupakan metode untuk menghubungkan beberapa komputer dengan mengombinasikan beberapa jenis topologi jaringan komputer, misal topologi Star dan Ring.</li>
        <li>Peer to peer = sistem di mana dua atau lebih perangkat atau pengguna berkomunikasi dan berbagi sumber daya atau informasi secara langsung tanpa melalui server pusat atau perantara.</li>
      </ul>
      <h2>Tutorial Konfigurasi switch menggunakan cisco packet Tracer</h2>
        <ul> 
         <h6>Berikut langkah-langkah umum dalam mengkonfigurasi switch di Cisco Packet Tracer:</h6>
         <li>Buka Cisco Packet Tracer: Luncurkan aplikasi Cisco Packet Tracer.</li> 
         <li>Tambahkan Switch: Seret dan letakkan perangkat switch (misalnya Cisco 2960) ke ruang kerja.</li> 
         <li>Akses CLI: Klik switch dan pilih tab "CLI" untuk mengakses Command Line Interface.</li> 
         <h6>Perintah Konfigurasi:</h6>
         <li>enable: Masuk ke mode privileged exec.</li> 
         <li>configure terminal atau config t: Masuk ke mode konfigurasi global.</li> 
         <li>show ip interface brief: Menampilkan informasi singkat tentang interface IP.</li> 
         <li>show vlan: Menampilkan informasi tentang VLAN.</li> 
         <li>vlan database: Memasuki mode konfigurasi VLAN.</li> 
         <li>vlan [ID]: Membuka konfigurasi VLAN tertentu (misalnya, vlan 10).</li> 
         <li>name [nama_vlan]: Memberi nama pada VLAN.</li> 
         <li>exit: Keluar dari mode konfigurasi VLAN.</li> 
         <li>interface [nama_interface]: Membuka konfigurasi interface (misalnya, interface fastethernet 0/1).</li> 
         <li>switchport mode access: Mengatur mode interface menjadi access (untuk menghubungkan dengan perangkat di VLAN tertentu).</li> 
         <li>switchport access vlan [ID_vlan]: Menetapkan VLAN pada interface. </li>
         <li>switchport mode trunk: Mengatur mode interface menjadi trunk (untuk menghubungkan antar switch atau router).</li>
         <li>no shutdown: Mengaktifkan interface.</li>
        </lu>
      <h3>Contoh Konfigurasi VLAN:</h3>
        <h6>Misalkan Anda ingin membuat VLAN dengan ID 10 dan 20, dan mengaitkan interface fastethernet 0/1 dan fastethernet 0/2 dengan VLAN 10: </h6>
        <lu> 
         <li>Masuk ke mode konfigurasi global: config t</li>
         <li>Buat VLAN 10: vlan 10</li>
         <li>Berikan nama VLAN 10: name VLAN10</li>
         <li>Keluar dari mode konfigurasi VLAN: exit</li>
         <li>Konfigurasi interface fastethernet 0/1: interface fastethernet 0/1</li>
         <li>Atur mode menjadi access: switchport mode access</li>
         <li>Atur VLAN pada interface: switchport access vlan 10</li>
         <li>Aktifkan interface: no shutdown</li>
         <li>Ulangi langkah 5-8 untuk interface fastethernet 0/2</li>
         <li>Simpan konfigurasi: copy running-config startup-config</li>
        </lu>
    `,
    gambar: "WhatsApp Image 2025-01-30 at 09.35.20_e9a66288.jpg",
    file: "uploads/Blue and Black Modern Group Project Presentation.pdf",
  },
   4: {
    judul: "Berfikir Komputasional",
    konten: `
      <p>Berfikir Komputasional adalah kemampuan untuk memecahkan masalah dengan menggunakan pendekatan yang terinspirasi dari ilmu komputer, seperti dekomposisi, pengenalan pola, abstraksi, dan algoritma.</p>
      <h3>Element-element Berfikir komputasional</h3>
      <ul>
        <li>Dekomposisi = Memecahkan masalah kompleks menjadi masalah-masalah kecil yang lebih mudah dipecahkan.</li>
        <li>Pengenalan Pola = Mengidentifikasi pola atau kesamaan dalam data atau masalah untuk mempermudah pemecahan masalah.</li>
        <li>Abstraksi = Mengabaikan detail yang tidak penting dan fokus pada hal-hal yang relevan untuk menyederhanakan masalah.</li>
        <li>Algoritma = Merancang langkah-langkah atau instruksi yang jelas untuk menyelesaikan masalah.</li>
      </ul>
      <h3>Manfaat Berfikir Komputasional</h3>
        <ul>
         <li>Mempermudah memecahkan masalah =
         Berpikir komputasional membantu mengubah masalah yang kompleks menjadi lebih mudah dipahami dan dipecahkan. </li>
         <li>Mengembangkan Kemampuan Berpikir Logis= 
         Proses berpikir sistematis dan logis dalam pemecahan masalah akan melatih kemampuan berpikir logis seseorang. </li>
         <li>Meningkatkan Efisiensi dan Efektivitas = 
         Dengan menerapkan berpikir komputasional, seseorang dapat menemukan solusi yang lebih efisien dan efektif untuk menyelesaikan masalah. </li>
         <li>Meningkatkan Kreativitas dan Inovasi = 
         Berpikir komputasional juga dapat mendorong kreativitas dan inovasi dalam mencari solusi yang baru dan unik. </li>
    `,
    gambar: "download (3).jpeg",
    file: "uploads/Berfikir komputasi (BK).docx.pdf",
  },
};
