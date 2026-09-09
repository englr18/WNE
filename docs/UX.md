# UX Specification — WhatsApp Number Extractor PWA

**Versi:** 1.0  
**Status:** Final dari sesi UX grilling  
**Ruang lingkup:** Struktur halaman, alur interaksi, state, validasi, dan keputusan UX. Design system (warna, typography, spacing tokens, icon set) berada di dokumen terpisah.

---

## 1. Tujuan UX

Membuat alur yang cepat dan mudah dipahami untuk pengguna individu/freelancer yang ingin membuka chat WhatsApp dari:

- Teks yang di-paste dan mengandung satu atau beberapa nomor telepon.
- Nomor telepon yang diketik atau ditempel langsung.

Aplikasi memproses seluruh input secara client-side. Pengguna memilih nomor bila ditemukan lebih dari satu kandidat, lalu menekan satu tombol global untuk membuka WhatsApp.

---

## 2. Prinsip UX

- **Satu area input:** textarea yang sama melayani paste teks bebas dan input nomor langsung.
- **Realtime feedback:** ekstraksi dan validasi berjalan saat input berubah, tanpa tombol "Ekstrak".
- **User tetap memegang keputusan:** bila terdapat lebih dari satu nomor valid, pengguna memilih target secara eksplisit.
- **Pencegahan kesalahan:** tombol pembuka WhatsApp tidak bisa digunakan sebelum nomor valid terpilih.
- **Minim friction:** bila hanya ada satu nomor valid, nomor tersebut dipilih otomatis.
- **Privacy by design:** tidak ada indikasi bahwa teks dikirim, disimpan, atau diproses oleh server.

---

## 3. Struktur Halaman

Layout menggunakan satu kolom vertikal dan mobile-first.

Urutan elemen:

1. Header aplikasi.
2. Area input utama (textarea) dengan tombol Clear.
3. Banner status/error, bila relevan.
4. Section hasil ekstraksi, bila ada nomor valid.
5. Tombol aksi global "Buka WhatsApp".

Tidak ada layout two-panel atau navigasi tambahan dalam MVP.

---

## 4. Wireframe Konseptual

```text
┌────────────────────────────────────────────┐
│  [Ikon chat generik]  WA Number Extractor  │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  Paste teks yang berisi nomor telepon di   │
│  sini, atau ketik nomor manual...          │
│                                            │
│                                      [×]   │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  ⚠ Tidak ada nomor telepon terdeteksi      │
│    dalam teks ini. Periksa kembali input.  │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  Hasil nomor                               │
├────────────────────────────────────────────┤
│  ○  +62 812-3456-7890                      │
├────────────────────────────────────────────┤
│  ●  +62 813-9876-5432                 ✓    │
├────────────────────────────────────────────┤
│  ○  +1 415-555-0123                        │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│          Buka WhatsApp                     │
└────────────────────────────────────────────┘
```

Wireframe ini bersifat struktural. Warna, radius, font, ukuran, dan gaya ikon mengikuti design system terpisah.

---

## 5. Komponen Utama

### 5.1 Header

**Isi:**

- Ikon chat generik (hindari penggunaan logo resmi WhatsApp agar tidak memberi kesan produk resmi).
- Judul aplikasi, misalnya: `WA Number Extractor`.

**Tujuan:** memberi konteks dan orientasi saat aplikasi dibuka dari browser maupun mode PWA standalone.

---

### 5.2 Textarea Input

Textarea adalah satu-satunya area input utama dan memiliki dua fungsi:

- Menerima teks bebas yang akan dipindai untuk nomor telepon.
- Menerima nomor telepon langsung untuk dibuka di WhatsApp.

**Placeholder:**

> Paste teks yang berisi nomor telepon di sini, atau ketik nomor manual...

**Perilaku:**

- Deteksi nomor dan validasi berjalan realtime ketika isi textarea berubah, baik dari ketikan, paste manual, maupun input dari tombol paste apabila ditambahkan pada implementasi.
- Tidak ada tombol khusus untuk ekstraksi.
- Input tidak dikirim ke backend atau layanan eksternal.
- Tombol Clear tersedia pada pojok kanan atas textarea atau posisi dekat textarea sesuai design system.

---

### 5.3 Tombol Clear

**Fungsi:** menghapus isi textarea, hasil ekstraksi, nomor terpilih, serta seluruh pesan status terkait input saat ini.

**Perilaku:**

- Selalu tersedia sebagai kontrol kecil.
- Tidak perlu dialog konfirmasi karena aksi dapat dipulihkan dengan memasukkan ulang teks.
- Setelah ditekan, focus idealnya kembali ke textarea agar pengguna bisa segera memasukkan input baru.

---

### 5.4 Banner Status dan Error

Banner muncul terpisah dari textarea dan daftar hasil. Banner tidak boleh dimasukkan ke dalam textarea maupun dijadikan item daftar hasil.

**Contoh state:**

| Kondisi | Jenis banner | Pesan yang disarankan |
|---|---|---|
| Input kosong | Tidak perlu banner | Tidak ada pesan; tampilkan state awal |
| Tidak ada kandidat nomor | Error/warning | `Tidak ada nomor telepon terdeteksi. Periksa kembali input Anda.` |
| Kandidat terlalu pendek | Error/warning | `Nomor terdeteksi, tetapi terlalu pendek untuk digunakan.` |
| Kandidat terlalu panjang | Error/warning | `Nomor terdeteksi, tetapi terlalu panjang untuk digunakan.` |
| Nomor ambigu/tidak dapat dinormalisasi | Error/warning | `Nomor ditemukan, tetapi kode negara atau formatnya belum dapat dipastikan.` |
| Clipboard gagal diakses, jika ada tombol paste | Error | `Clipboard tidak dapat diakses. Paste atau ketik nomor secara manual.` |

**Aturan tampilan:**

- Gunakan ikon status dan teks yang spesifik terhadap masalahnya.
- Jangan hanya menampilkan pesan generik seperti `Error`.
- Banner hilang atau diperbarui segera saat input berubah dan kondisi telah berubah.

---

### 5.5 Daftar Hasil Nomor

Section hasil hanya muncul jika terdapat setidaknya satu nomor valid setelah ekstraksi dan normalisasi.

**Isi setiap row:**

- Indikator selection (radio-like indicator atau pola interaksi setara).
- Nomor dalam format mudah dibaca manusia.
- Checkmark pada row terpilih.

**Perilaku berdasarkan jumlah hasil:**

| Jumlah nomor valid | Perilaku |
|---:|---|
| 0 | Tidak tampilkan daftar hasil; tampilkan banner error/status bila diperlukan |
| 1 | Nomor otomatis terpilih; tombol `Buka WhatsApp` langsung aktif |
| Lebih dari 1 | Tampilkan seluruh nomor; pengguna wajib memilih satu row sebelum tombol `Buka WhatsApp` aktif |

**State terpilih:**

- Border lebih tegas.
- Background accent/subtle accent sesuai design system.
- Ikon checkmark.
- Indikator selection dalam keadaan aktif.

Kombinasi ini harus jelas secara visual agar pengguna yakin nomor yang akan dibuka benar.

---

### 5.6 Tombol "Buka WhatsApp"

Tombol ini adalah aksi utama dan hanya ada satu, ditempatkan setelah daftar hasil.

**Label aktif:**

> Buka WhatsApp

**State disabled:**

- Saat belum ada nomor valid: disabled dengan bantuan teks seperti `Belum ada nomor valid terdeteksi`.
- Saat ada lebih dari satu nomor tetapi belum dipilih: disabled dengan bantuan teks seperti `Pilih nomor dari daftar`.

**State enabled:**

- Aktif ketika satu nomor valid telah terpilih, baik lewat auto-select (satu hasil) maupun pilihan pengguna (banyak hasil).

**Aksi:**

- Membuka `https://wa.me/<nomor-normalized>` tanpa parameter pesan pre-filled.
- Fallback ketersediaan aplikasi WhatsApp diserahkan pada perilaku default `wa.me` dan browser/OS.

---

## 6. Alur Interaksi

### 6.1 Input nomor langsung

1. Pengguna mengetik atau menempel satu nomor di textarea.
2. Aplikasi menormalisasi dan memvalidasi input secara realtime.
3. Jika nomor valid, section hasil muncul dengan satu row yang otomatis terpilih.
4. Tombol `Buka WhatsApp` menjadi aktif.
5. Pengguna menekan tombol untuk membuka chat WhatsApp kosong dengan nomor tersebut.

### 6.2 Paste teks dengan satu nomor

1. Pengguna menempel teks bebas ke textarea.
2. Aplikasi mengekstrak kandidat nomor secara realtime.
3. Jika tepat satu nomor valid ditemukan, hasil ditampilkan dan otomatis dipilih.
4. Tombol `Buka WhatsApp` menjadi aktif.
5. Pengguna menekan tombol untuk membuka WhatsApp.

### 6.3 Paste teks dengan banyak nomor

1. Pengguna menempel teks yang mengandung beberapa nomor.
2. Aplikasi menampilkan daftar seluruh nomor valid.
3. Tombol `Buka WhatsApp` tetap disabled.
4. Pengguna memilih satu row nomor.
5. Row memperoleh border, background accent, dan checkmark.
6. Tombol `Buka WhatsApp` menjadi aktif.
7. Pengguna menekan tombol untuk membuka WhatsApp dengan nomor terpilih.

### 6.4 Tidak ada nomor valid

1. Pengguna mengetik atau menempel teks tanpa nomor valid.
2. Aplikasi tidak menampilkan daftar hasil.
3. Aplikasi menampilkan banner yang menjelaskan masalah, misalnya nomor tidak ditemukan atau format kandidat tidak valid.
4. Tombol `Buka WhatsApp` tetap disabled.
5. Pengguna dapat memperbaiki input atau menekan Clear untuk memulai ulang.

---

## 7. State UI

| State | Textarea | Banner | Hasil | Tombol WhatsApp |
|---|---|---|---|---|
| Initial | Kosong, placeholder tampil | Tidak ada | Tidak ada | Disabled |
| Input belum valid | Berisi teks/input | Error/warning bila relevan | Tidak ada | Disabled |
| Satu nomor valid | Berisi teks/input | Tidak ada atau info ringan | Satu row, auto-selected | Enabled |
| Banyak nomor valid, belum dipilih | Berisi teks/input | Tidak ada atau info ringan | Banyak row, belum selected | Disabled |
| Banyak nomor valid, sudah dipilih | Berisi teks/input | Tidak ada atau info ringan | Satu row selected | Enabled |
| Setelah Clear | Kosong, placeholder tampil | Tidak ada | Tidak ada | Disabled |

---

## 8. Responsiveness

Desain bersifat mobile-first.

- Semua konten disusun vertikal dalam satu kolom.
- Textarea dan tombol aksi memiliki lebar penuh container pada layar kecil.
- Row hasil memiliki target tap yang nyaman untuk jari.
- Pada layar desktop, konten tetap single-column dengan max-width agar baris teks dan jarak tap tidak terlalu melebar.
- Tidak diperlukan two-panel layout pada MVP.

---

## 9. Accessibility

- Textarea memiliki label yang jelas, tidak hanya mengandalkan placeholder.
- Semua tombol dan row hasil dapat diakses via keyboard.
- State selected tidak boleh hanya dibedakan oleh warna; gunakan juga checkmark dan/atau indikator radio-like.
- Tombol disabled perlu memiliki alasan yang dapat dibaca, misalnya teks bantuan yang terlihat atau `aria-describedby`.
- Banner error memakai peran/pengumuman yang tepat, misalnya `role="alert"` untuk error yang perlu segera diketahui pembaca layar.
- Target tap untuk row dan tombol harus cukup besar pada mobile.
- Focus state harus terlihat jelas dan mengikuti design system.

---

## 10. Di Luar Scope UX MVP

- Riwayat nomor yang telah dibuka.
- Penyimpanan hasil ekstraksi antar sesi.
- Bulk import file atau CSV.
- Pre-filled message untuk WhatsApp.
- Deteksi apakah aplikasi WhatsApp terpasang.
- Integrasi kontak, CRM, atau backend.
- OCR untuk screenshot atau kartu nama.
- Navigasi multi-halaman seperti Settings, Help, atau About.

---

## 11. Keputusan Final

| Area | Keputusan |
|---|---|
| Layout | Single-column vertikal, mobile-first |
| Input | Satu textarea untuk teks bebas dan nomor manual |
| Ekstraksi | Realtime pada perubahan input |
| Tombol ekstrak | Tidak ada |
| Banyak nomor | Tampilkan list; pengguna memilih satu nomor |
| Satu nomor | Auto-select |
| State selection | Border tegas + background accent + checkmark |
| Aksi WhatsApp | Satu tombol global di bawah hasil |
| Tombol tanpa target valid | Disabled dengan alasan yang jelas |
| Error | Banner terpisah dengan ikon dan pesan spesifik |
| Clear | Kontrol kecil tersedia untuk reset cepat |
| Loading | Tidak ada loading indicator untuk ekstraksi lokal |
| Header | Header sederhana dengan judul dan ikon chat generik |
| Design system | Dibuat dan dipelihara terpisah |
