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
  5: {
    judul: "Sistem Operasi (SO)",
    konten: `
      <p>Sistem operasi (SO) adalah perangkat lunak yang mengelola semua perangkat keras dan perangkat lunak komputer, memberikan antarmuka untuk pengguna, dan memungkinkan aplikasi untuk berjalan.</p>
      <h2>Jenis Jenis sistem operasi :</h2>
      <ul>
        <li>Microsoft Windows</li>
        <li>Mac OS</li>
        <li>Linux</li>
        <li>Unix</li>
        <li>Chrome OS</li>
        <li>BSD (Berkeley Software Distribution)</li>
        <li>Android (untuk komputer)</li>
      </ul>
      <h2>Jenis Jenis Linux :</h2>
      <ul>
        <li>Kali Linux</li>
        <li>Red Hat Linux</li>
        <li>Ubuntu</li>
        <li>Debian</li>
        <li>Fedora</li>
        <li>CentOS</li>
        <li>Arch Linux</li>
      <h5>Langkah-Langkah Instalasi Linux debian :</h5>
      <pre>
      1. Download ISO Debian: Kunjungi situs resmi Debian dan unduh file ISO versi terbaru.
      2. Buat USB Bootable: Gunakan alat seperti Rufus (Windows) atau Etcher (Linux/Mac) untuk membuat USB bootable dari file ISO yang diunduh.
      3. Boot dari USB: Masukkan USB ke komputer dan atur BIOS/UEFI untuk boot dari USB.
      4. Pilih Bahasa: Setelah booting, pilih bahasa yang diinginkan untuk instalasi.
      5. Pilih Mode Instalasi: Pilih mode instalasi (grafis atau teks).
      6. Konfigurasi Jaringan: Pilih metode koneksi jaringan (DHCP atau manual).
      7. Partisi Disk: Pilih metode partisi (otomatis atau manual) dan atur partisi sesuai kebutuhan.
      8. Pilih Software: Pilih paket perangkat lunak yang ingin diinstal (seperti desktop environment).
      9. Instalasi GRUB: Pilih untuk menginstal bootloader GRUB agar sistem dapat booting.
      10. Selesaikan Instalasi: Setelah instalasi selesai, reboot komputer dan keluarkan USB.
      11. Login: Masuk ke sistem dengan username dan password yang telah dibuat selama instalasi.
      </pre>
      <h2>Langkah Langkah mengkonfigurasi DNS :</h2>
      <pre>
      1. Buka Terminal: Akses terminal di sistem operasi Anda.
      2. Edit File Konfigurasi DNS: Gunakan editor teks (seperti nano atau vim) untuk membuka file /etc/resolv.conf.
      3. Tambahkan Server DNS: Tambahkan baris berikut untuk menggunakan server DNS Google:
         nameserver 8.8.8.8
         nameserver8.8.4.4
      4. Simpan dan Keluar: Simpan perubahan dan keluar dari editor teks.
      5. Restart Layanan Jaringan: Jalankan perintah berikut untuk menerapkan perubahan:
         sudo systemctl restart networking
      6. Verifikasi Konfigurasi: Gunakan perintah berikut untuk memverifikasi konfigurasi DNS:
         sudo /etc/resolv.conf
      7. Uji Koneksi: Gunakan perintah ping untuk menguji koneksi ke situs web (misalnya, ping google.com).
      </pre>
      <h2>Langkah langkah mengkonfigurasi HTTP/HTTPS :</h2>
      <pre>
      1. Instal Web Server: Gunakan perintah berikut untuk menginstal Apache atau Nginx:
         sudo apt-get install apache2
         sudo apt-get install nginx
      2. Konfigurasi Virtual Host: Buat file konfigurasi virtual host di /etc/apache2/sites-available/ atau /etc/nginx/sites-available/.
      3. Edit File Konfigurasi: Gunakan editor teks untuk mengedit file konfigurasi virtual host.
          Contoh untuk Apache:
          <VirtualHost *:80>
              ServerName example.com
              DocumentRoot /var/www/html
          </VirtualHost>
          Contoh untuk Nginx:
          server {
              listen 80;
              server_name example.com;
              root /var/www/html;
          }
      4. Aktifkan Virtual Host: Gunakan perintah berikut untuk mengaktifkan virtual host:
         sudo a2ensite example.com.conf (untuk Apache)
         sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
      5. Restart Web Server: Jalankan perintah berikut untuk merestart web server:
         sudo systemctl restart apache2 (untuk Apache)
         sudo systemctl restart nginx (untuk Nginx)
      6. Uji Koneksi: Buka browser dan masukkan alamat domain untuk menguji koneksi.
      7. Konfigurasi HTTPS: Untuk mengkonfigurasi HTTPS, gunakan Let's Encrypt untuk mendapatkan sertifikat SSL gratis.
         sudo apt-get install certbot python3-certbot-apache (untuk Apache)
         sudo apt-get install certbot python3-certbot-nginx (untuk Nginx)
      8. Ikuti petunjuk untuk mengkonfigurasi HTTPS dan mendapatkan sertifikat SSL.
      9. Uji HTTPS: Buka browser dan masukkan alamat domain dengan https:// untuk menguji koneksi HTTPS.
      </pre>
      <h2>Langkah langkah mengkonfigurasi DHCP :</h2>
      <pre>
      1. Instal DHCP Server: Gunakan perintah berikut untuk menginstal DHCP server:
         sudo apt-get install isc-dhcp-server
      2. Edit File Konfigurasi: Gunakan editor teks untuk membuka file /etc/dhcp/dhcpd.conf.
      3. Tambahkan Konfigurasi DHCP: Tambahkan konfigurasi berikut untuk mendefinisikan rentang alamat IP:
         subnet
          netmask
          range
          option routers
          option domain-name-servers
          option domain-name
      4. Simpan dan Keluar: Simpan perubahan dan keluar dari editor teks.
      5. Restart DHCP Server: Jalankan perintah berikut untuk merestart DHCP server:
         sudo systemctl restart isc-dhcp-server
      6. Verifikasi Konfigurasi: Gunakan perintah berikut untuk memverifikasi konfigurasi DHCP:
          sudo systemctl status isc-dhcp-server
      7. Uji Koneksi: Hubungkan perangkat ke jaringan dan periksa apakah alamat IP diberikan oleh DHCP server.
      8. Monitor Log: Gunakan perintah berikut untuk memantau log DHCP:
         tail -f /var/log/syslog
      </pre>
      <h2>Langkah langkah mengkonfigurasi FTP :</h2>
      <pre>
      1. Instal FTP Server: Gunakan perintah berikut untuk menginstal FTP server (misalnya vsftpd):
         sudo apt-get install vsftpd
      2. Edit File Konfigurasi: Gunakan editor teks untuk membuka file /etc/vsftpd.conf.
      3. Konfigurasi FTP: Tambahkan atau ubah konfigurasi berikut:
         anonymous_enable=NO
         local_enable=YES
         write_enable=YES
         chroot_local_user=YES
        allow_writeable_chroot=YES
          pasv_enable=YES
          pasv_min_port=10000
          pasv_max_port=10100
      4. Simpan dan Keluar: Simpan perubahan dan keluar dari editor teks.
      5. Restart FTP Server: Jalankan perintah berikut untuk merestart FTP server:
         sudo systemctl restart vsftpd
      6. Uji Koneksi: Gunakan klien FTP (misalnya FileZilla) untuk menguji koneksi ke server FTP.
      7. Monitor Log: Gunakan perintah berikut untuk memantau log FTP:
         tail -f /var/log/vsftpd.log
      8. Uji Transfer File: Cobalah untuk mengunggah dan mengunduh file menggunakan klien FTP.
      </pre>
      <h2>Langkah langkah mengkonfigurasi SSH :</h2>
      <pre>
      1. Instal SSH Server: Gunakan perintah berikut untuk menginstal SSH server:
         sudo apt-get install openssh-server
      2. Edit File Konfigurasi: Gunakan editor teks untuk membuka file /etc/ssh/sshd_config.
      3. Konfigurasi SSH: Tambahkan atau ubah konfigurasi berikut:
         Port 22
         PermitRootLogin no
         PasswordAuthentication yes
         PubkeyAuthentication yes
         AllowUsers username
         PermitEmptyPasswords no
          MaxAuthTries 3
          MaxSessions 10
          ClientAliveInterval 300
          ClientAliveCountMax 2
          UsePAM yes
      4. Simpan dan Keluar: Simpan perubahan dan keluar dari editor teks.
      5. Restart SSH Server: Jalankan perintah berikut untuk merestart SSH server:
         sudo systemctl restart sshd
      6. Uji Koneksi: Gunakan klien SSH (misalnya PuTTY) untuk menguji koneksi ke server SSH.
      7. Monitor Log: Gunakan perintah berikut untuk memantau log SSH:
         tail -f /var/log/auth.log
      8. Uji Autentikasi: Cobalah untuk masuk ke server menggunakan SSH dengan username dan password yang valid.
      </pre>
      <h2>Langkah langkah mengkonfigurasi Samba :</h2>
      <pre>
      1. Instal Samba: Gunakan perintah berikut untuk menginstal Samba:
         sudo apt-get install samba
      2. Edit File Konfigurasi: Gunakan editor teks untuk membuka file /etc/samba/smb.conf.
      3. Konfigurasi Samba: Tambahkan konfigurasi berikut untuk berbagi folder:
         [share]
         path = /path/to/share
         valid users = username
         read only = no
         browsable = yes
          writable = yes
          create mask = 0755
          directory mask = 0755
          force user = username
      4. Simpan dan Keluar: Simpan perubahan dan keluar dari editor teks.
      5. Buat User Samba: Gunakan perintah berikut untuk membuat user Samba:
         sudo smbpasswd -a username
      6. Restart Samba: Jalankan perintah berikut untuk merestart Samba:
          sudo systemctl restart smbd
      7. Uji Koneksi: Gunakan klien Samba (misalnya Windows Explorer) untuk menguji koneksi ke folder yang dibagikan.
      8. Monitor Log: Gunakan perintah berikut untuk memantau log Samba:
         tail -f /var/log/samba/log.smbd
      9. Uji Akses: Cobalah untuk mengakses folder yang dibagikan dari komputer lain di jaringan.
      </pre>
    `,
    gambar: "download (4).jpeg",
    file: "uploads/KELOMPOK HAJOAT (1).pdf",
    file: "uploads/ATHALLAH SSH (1).pdf",
    file: "uploads/Langkah-Langkah Share File dengan SambaServer.pdf",
  },
};
