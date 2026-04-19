// ╔══════════════════════════════════════════════════════════════════╗
// ║           FILE KONFIGURASI UTAMA — JANGAN HAPUS FILE INI        ║
// ║  Semua pengaturan teks, identitas, kontak & tampilan ada di sini ║
// ║  Cukup edit bagian ini saja, JANGAN ubah file index.html        ║
// ╚══════════════════════════════════════════════════════════════════╝


// ════════════════════════════════════════════════════════
// BAGIAN 1: IDENTITAS APLIKASI
// ════════════════════════════════════════════════════════
const APP_CONFIG = {

  // --- Teks yang tampil di header (pojok kiri atas) ---
  namaAplikasi: "Instant Preset Foto",
  namaAuthor:   "by @ucup45__",

  // --- Judul tab browser ---
  judulHalaman: "Drone LUT Photo Editor",

  // --- Teks footer (bawah layar) ---
  teksFooter1: "Aplikasi by ig:@Ucup45__ · Semua proses di browser · Foto tidak dikirim ke server",

  // --- Pesan pop-up setelah foto berhasil diunduh ---
  // {ig} akan otomatis diganti nama instagram kamu
  pesanDownload: "Yeay! Foto berhasil diunduh tanpa mengurangi resolusi aslinya. 🎉\n\nJangan lupa upload karya keren kamu ke Instagram dan TAG KAMI di @{ig} ya! 🚀 Ditunggu repost-nya!",

  // --- Nama file hasil download ---
  // {namaFile} = nama file foto asli yang diupload
  // {ig}       = username instagram kamu
  // Contoh hasil: "foto_wisuda - preset by @ucup45__.jpg"
  formatNamaDownload: "{namaFile} - preset by @{ig}.jpg",

  // --- Media Sosial ---
  // Isi dengan username/nomor masing-masing, atau kosongkan ("") jika tidak punya
  sosialMedia: {
    instagram: "ucup45__",        // Username IG tanpa @
    tiktok:    "Drone.net",       // Username TikTok tanpa @
    whatsapp:  "085155323259",    // Nomor WA (diawali 0 atau 62)
    facebook:  "Drone45"         // Username atau ID Facebook
  }
};


// ════════════════════════════════════════════════════════
// BAGIAN 2: TEKS PANDUAN (POP-UP BANTUAN)
// Tampil saat pengguna klik tombol "Panduan" di pojok kanan atas
// ════════════════════════════════════════════════════════
const GUIDE_CONFIG = {
  judulPanduan: "Panduan Editor",

  // Isi panduan dalam format HTML sederhana
  // <h4> = judul bagian, <ul><li> = poin daftar, <b> = tebal
  isiPanduan: `
    <p>Aplikasi ini dirancang untuk mengedit foto secara profesional langsung di browser Anda.</p>
    <h4>📸 Memulai & Melihat Detail</h4>
    <ul>
      <li><b>Input:</b> Klik "Pilih File Foto" untuk memasukkan gambar.</li>
      <li><b>Zoom:</b> Gunakan scroll mouse (PC) atau cubit layar (HP) untuk memperbesar foto.</li>
      <li><b>Before/After:</b> Tahan tombol ( \\ ) di keyboard (PC) atau tekan &amp; tahan lama foto (HP) untuk membandingkan hasil editan dengan foto asli.</li>
    </ul>
    <h4>🎛️ Fitur Editing</h4>
    <ul>
      <li><b>LUT Presets:</b> Filter warna instan. Anda bisa menambahkan file LUT eksternal (.cube/.xmp).</li>
      <li><b>Scroll Presisi:</b> Arahkan kursor ke dalam kotak angka, lalu putar scroll mouse untuk menaik/turunkan nilai +1/-1.</li>
      <li><b>Reset Cepat:</b> Di HP, ketuk 2x (double-tap) pada bulatan slider untuk mengembalikan nilainya ke 0.</li>
      <li><b>Pipet HSL:</b> Klik ikon pipet di menu HSL, lalu klik warna di foto untuk menyeleksi warna secara otomatis.</li>
    </ul>
  `
};


// ════════════════════════════════════════════════════════
// BAGIAN 3: PORTOFOLIO & JASA
// Tampil di sidebar kiri (desktop) & pop-up (mobile)
// ════════════════════════════════════════════════════════
const PORTFOLIO_CONFIG = {

  // --- Teks tombol portofolio di header (mobile) ---
  judulMenu: "💼 Jasa & Layanan Kreatif",

  // --- Judul di sidebar kiri (desktop) ---
  judulSidebar: "🌟 JASA & LAYANAN EKSKLUSIF",

  // --- Tagline kecil di bawah judul sidebar ---
  taglineSidebar: "Tingkatkan Kualitas Visual Anda",

  // --- Deskripsi singkat di pop-up portofolio ---
  deskripsiSingkat: "Butuh visual yang memukau? Kami siap membantu mewujudkan karya terbaik untuk Anda, dari dokumentasi personal hingga korporat.",

  // --- Daftar Kategori & Item Jasa ---
  // Setiap kategori punya: nama, dan array item
  // Setiap item punya: judul, deskripsi, ig (opsional), tt (opsional)
  kategori: [
    {
      nama: "📸 Fotografi & Videografi",
      item: [
        {
          judul: "Graduation & Portrait",
          deskripsi: "Abadikan momen wisuda dan hari bahagiamu dengan sentuhan sinematik premium. 🔥",
          ig: "Nonameproject.co"
          // tt: "username_tiktok"   // hapus // di depan jika punya TikTok
        },
        {
          judul: "Drone Aerial & Mapping",
          deskripsi: "Solusi visual udara profesional. Melayani pemetaan (mapping) hingga inspeksi. 🚁",
          ig: "skybromo",
          tt: "skybromo"
        }
      ]
    },
    {
      nama: "🌋 Trip & Tour Eksklusif",
      item: [
        {
          judul: "Private & Open Trip Bromo",
          deskripsi: "Jelajahi keindahan Bromo tanpa ribet! Layanan lengkap dengan jeep dan dokumentasi handal. 🏔️",
          ig: "skybromo"
        },
        {
          judul: "Eksplorasi Jawa Timur",
          deskripsi: "Melayani Private City Tour Malang-Batu, Tumpak Sewu, hingga Ijen. 🚙",
          ig: "ucup45__"
        }
      ]
    },
    {
      nama: "🤖 Kreatif & Social Media AI",
      item: [
        {
          judul: "AI Social Media Management",
          deskripsi: "Elevate brand kamu! Pembuatan konten sosmed otomatis berbasis AI. 📈",
          tt: "drone.net"
        },
        {
          judul: "Animasi AI Claymation",
          deskripsi: "Bikin videomu beda dari yang lain dengan gaya animasi Claymation unik berbasis AI. 🎬",
          ig: "claysejarah",
          tt: "claysejarah"
        },
        {
          judul: "Portofolio Lengkap",
          deskripsi: "Lihat progres dan behind the scene karya-karya terbaru kami. ✨",
          ig: "ucup45__"
        }
      ]
    },
    {
      nama: "🤝 Layanan Lainnya",
      item: [
        {
          judul: "Titip Promosi Barang Second",
          deskripsi: "Punya barang nganggur? Titip promosikan barang preloved/second berkualitasmu di jaringan semua media sosial Ucup. Eksposur tinggi, cepat laku (Bisa Nego)! 🤝"
          // Tidak ada ig/tt untuk item ini, tidak apa-apa
        }
      ]
    }
  ]
};


// ════════════════════════════════════════════════════════
// BAGIAN 4: PENGATURAN EDITOR (LUT & PENCAHAYAAN)
// ════════════════════════════════════════════════════════
const EDITOR_CONFIG = {

  // --- Nilai default intensitas LUT saat aplikasi pertama dibuka (0-100) ---
  defaultIntensitas: 80,

  // --- Daftar Folder & LUT Bawaan ---
  // Setiap folder punya: id (unik, tanpa spasi), name (tampil di layar), open (true/false)
  // Setiap lut punya: name (tampil), id (unik), fn (fungsi warna — jangan diubah kecuali paham kode)
  folders: [
    {
      id: "builtin",
      name: "Built-in",
      open: true,
      luts: [
        { name: "Original",      id: "original",  fn: null },
        { name: "Cinematic",     id: "cinematic", fn: "(r,g,b)=>[Math.min(255,r*1.08+8),g*0.92,Math.min(255,b*1.15+10)]" },
        { name: "Golden Hour",   id: "golden",    fn: "(r,g,b)=>[Math.min(255,r*1.18+20),Math.min(255,g*1.05+10),b*0.75]" },
        { name: "Moody Blue",    id: "moody",     fn: "(r,g,b)=>{ r=r*0.82;g=g*0.88;b=Math.min(255,b*1.2+15);const a=(r+g+b)/3;return[r*.9+a*.1,g*.9+a*.1,b]; }" },
        { name: "Fade & Matte",  id: "fade",      fn: "(r,g,b)=>[r*.85+30,g*.85+28,b*.85+32]" },
        { name: "Vibrant Pop",   id: "vibrant",   fn: "(r,g,b)=>{ const a=(r+g+b)/3;return[a+(r-a)*1.35,a+(g-a)*1.3,a+(b-a)*1.25]; }" },
        { name: "B&W Film",      id: "bw",        fn: "(r,g,b)=>{ const l=r*.299+g*.587+b*.114;const c=l<128?l*.92:l*1.05;return[c,c,c]; }" },
        { name: "Teal & Orange", id: "tealorg",   fn: "(r,g,b)=>{ r=Math.min(255,r*1.12+12);g=g*.94;b=Math.min(255,b*1.08+8);if(r>g&&r>b){r=Math.min(255,r*1.1);g=g*.92;}return[r,g,b]; }" }
      ]
    },
    {
      id: "drone",
      name: "Drone Aerial",
      open: false,
      luts: [
        { name: "Aerial Clean",  id: "aerial",  fn: "(r,g,b)=>{ r=Math.min(255,r*1.05+5);g=Math.min(255,g*1.08+8);b=Math.min(255,b*1.12+12);const a=(r+g+b)/3;return[a+(r-a)*1.15,a+(g-a)*1.15,a+(b-a)*1.15]; }" },
        { name: "Sunset Drone",  id: "sunset",  fn: "(r,g,b)=>{ r=Math.min(255,r*1.22+25);g=Math.min(255,g*1.0+5);b=b*.68;return[r,g,b]; }" },
        { name: "Golden Fields", id: "goldenf", fn: "(r,g,b)=>{ r=Math.min(255,r*1.15+18);g=Math.min(255,g*1.06+8);b=b*.72;const a=(r+g+b)/3;return[a+(r-a)*1.2,a+(g-a)*1.1,a+(b-a)*.9]; }" },
        { name: "Sky Blue",      id: "skyblue", fn: "(r,g,b)=>{ r=r*.88;g=Math.min(255,g*1.02+5);b=Math.min(255,b*1.18+15);return[r,g,b]; }" }
      ]
    }
    // ── CARA TAMBAH FOLDER BARU ──────────────────────────────────────
    // Salin blok di bawah (hapus tanda // di depannya), isi datanya:
    // ,{
    //   id: "wedding",          // ID unik, tanpa spasi
    //   name: "Wedding",        // Nama yang tampil di app
    //   open: false,            // true = terbuka otomatis, false = tertutup
    //   luts: [
    //     { name: "Soft White", id: "sw1", fn: "(r,g,b)=>[Math.min(255,r*1.05+10),Math.min(255,g*1.02+8),Math.min(255,b*0.98+5)]" },
    //   ]
    // }
  ],

  // --- Pengaturan Slider Pencahayaan ---
  // Kamu bisa ubah nilai default (def) masing-masing slider
  // min & max sebaiknya jangan diubah
  pencahayaan: [
    { id: "exposure",    label: "Exposure",          min: -100, max: 100, def: 0,   step: 0.5 },
    { id: "brightness",  label: "Brightness",         min: -100, max: 100, def: 0,   step: 0.5 },
    { id: "contrast",    label: "Contrast",            min: -100, max: 100, def: 0,   step: 0.5 },
    { id: "highlights",  label: "Highlights",          min: -100, max: 100, def: 0,   step: 0.5 },
    { id: "shadows",     label: "Shadows",             min: -100, max: 100, def: 0,   step: 0.5 },
    { id: "saturation",  label: "Saturation",          min: -100, max: 100, def: 0,   step: 0.5 },
    { id: "temperature", label: "Temp (White Bal)",    min: -100, max: 100, def: 0,   step: 0.5 },
    { id: "sharpness",   label: "Sharpness",           min: 0,    max: 100, def: 0,   step: 1   }
  ]
};
