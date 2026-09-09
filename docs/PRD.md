# WhatsApp Number Extractor PWA (v1.0)

## 1. Ringkasan Produk

PWA yang memungkinkan user:
- Paste teks panjang (misal forward chat, komentar medsos, catatan) untuk mengekstrak nomor telepon.
- Input nomor manual langsung sebagai alternatif.
- Melihat daftar nomor yang terdeteksi (kalau lebih dari 1) dan memilih satu untuk dibuka di WhatsApp via `wa.me`.

**Target user:** Individu/freelancer yang sering menerima kontak dari sumber informal (grup WA/Telegram yang di-forward, komentar medsos, catatan manual) dan ingin langsung hubungi tanpa copy nomor secara manual.

**Platform:** iOS + Android, via browser (Safari/Chrome) dengan installability PWA.

***

## 2. Tujuan & Non-Tujuan

### Tujuan (In Scope)
- Ekstrak nomor telepon dari teks bebas (multi-format internasional) → normalisasi ke E.164.
- Tampilkan daftar kandidat nomor (kalau >1) untuk dipilih user.
- Buka chat WhatsApp kosong dengan nomor terpilih via `wa.me/<nomor>`.
- Input nomor manual langsung (tanpa paste) sebagai jalur alternatif.
- 100% client-side processing, tanpa data dikirim ke server.
- Installable sebagai PWA di iOS dan Android.

### Bukan Tujuan (Out of Scope v1.0)
- Pre-filled pesan di chat WhatsApp.
- Deteksi keberadaan WhatsApp terpasang (fallback diserahkan ke behavior default `wa.me`).
- Riwayat nomor yang pernah dibuka / sinkronisasi multi-device.
- Bulk import skala besar (puluhan/ratusan nomor) dengan fitur manajemen daftar.
- Ekstraksi entitas selain nomor telepon (nama, tanggal, alamat, dll).
- Backend atau fitur yang memerlukan autentikasi user.

***

## 3. User Stories

### US1: Paste & Ekstrak Nomor
**Sebagai** user individu yang menerima kontak dari sumber informal,  
**Saya ingin** bisa paste teks panjang dan langsung melihat nomor telepon yang terdeteksi,  
**Agar** tidak perlu mencari dan copy nomor secara manual dari teks panjang.

**Acceptance Criteria:**
- Ada tombol "Paste" yang memicu `navigator.clipboard.readText()` (butuh transient user activation).
- Teks yang di-paste diproses client-side untuk menemukan semua kandidat nomor telepon.
- Jika ditemukan ≥1 nomor, tampilkan daftar kandidat (nomor yang sudah dinormalisasi ke E.164).
- Jika tidak ditemukan nomor, tampilkan pesan error jelas ("Tidak ada nomor telepon terdeteksi").
- Jika hanya 1 nomor ditemukan, tetap tampilkan sebagai daftar (atau bisa auto-select, opsional).

### US2: Pilih Nomor & Buka WhatsApp
**Sebagai** user,  
**Saya ingin** bisa klik salah satu nomor dari daftar hasil ekstraksi,  
**Agar** langsung diarahkan ke chat WhatsApp dengan nomor tersebut.

**Acceptance Criteria:**
- Setiap nomor di daftar memiliki tombol/link "Buka WhatsApp".
- Klik tombol → redirect ke `https://wa.me/<nomor_E164>` (tanpa parameter `text`).
- Redirect terjadi di tab yang sama atau baru (sesuai behavior default browser).
- Tidak ada pre-filled message di URL.

### US3: Input Nomor Manual
**Sebagai** user yang sudah tahu nomor tujuan,  
**Saya ingin** bisa mengetik/menempel nomor langsung tanpa paste teks panjang,  
**Agar** proses lebih cepat bila tidak perlu ekstraksi dari teks.

**Acceptance Criteria:**
- Ada field input terpisah untuk nomor manual.
- Input menerima format bebas (dengan spasi, strip, kurung, `+`, `0`, `62`, dll).
- Saat user klik "Buka WhatsApp", nomor dinormalisasi ke E.164, lalu redirect ke `wa.me/<nomor>`.
- Validasi minimal: jika format tidak valid setelah normalisasi, tampilkan error.

### US4: Install sebagai PWA
**Sebagai** user yang ingin akses cepat,  
**Saya ingin** bisa menginstal aplikasi ini ke home screen,  
**Agar** bisa dibuka seperti app native tanpa address bar browser.

**Acceptance Criteria:**
- Ada `manifest.json` dengan `display: standalone`, `start_url`, `icons`, `name`, `short_name`.
- Service Worker minimal (cache-first untuk asset statis) agar bisa load offline (meski fungsi inti butuh internet untuk redirect `wa.me`).
- Prompt install muncul di Android (Chrome) dan iOS (Safari "Add to Home Screen").

***

## 4. Functional Requirements

### FR1: Clipboard Access
- Tombol "Paste" harus dipicu langsung dari gesture user (klik/tap).
- Gunakan `navigator.clipboard.readText()` dengan error handling untuk browser yang tidak mendukung.
- Di iOS, handle kemungkinan prompt izin di penggunaan pertama per situs.

### FR2: Regex Ekstraksi Nomor
- Regex harus menangkap format nomor internasional umum:
  - Dengan/tanpa `+` di awal.
  - Dengan/tanpa kode negara (`62`, `1`, `44`, dll).
  - Dengan/tanpa spasi, strip, kurung sebagai separator.
  - Format lokal Indonesia (`08xx`, `0812xxxx`) harus terdeteksi dan dikonversi ke `+628xx`.
- Output: array kandidat nomor dalam format E.164 (`+<kode negara><nomor>` tanpa spasi/simbol).

### FR3: Normalisasi ke E.164
- Semua nomor hasil ekstraksi/input manual harus dinormalisasi ke E.164 sebelum dibentuk jadi link `wa.me`.
- Aturan konversi Indonesia: `08xx` → `+628xx`, `628xx` → `+628xx`, `+628xx` → `+628xx`.
- Untuk negara lain: deteksi kode negara dari pola umum (atau fallback ke asumsi tertentu bila ambigu — perlu keputusan lanjutan).

### FR4: Tampilan Daftar Kandidat
- Jika ditemukan ≥1 nomor, tampilkan sebagai daftar (bullet/numbered list atau card).
- Setiap item menampilkan nomor dalam format human-readable (misal `+62 812-3456-7890`) + tombol "Buka WhatsApp".
- Jika tidak ada nomor, tampilkan pesan error.

### FR5: Redirect ke WhatsApp
- URL format: `https://wa.me/<nomor_E164>` (tanpa parameter `text`).
- Redirect dilakukan via `window.location.href` atau `<a>` tag dengan `target="_blank"` (opsional).
- Tidak ada handling khusus untuk fallback WhatsApp tidak terpasang.

***

## 5. Non-Functional Requirements

### NFR1: Privacy & Security
- Semua processing dilakukan client-side; tidak ada data (teks paste, nomor hasil ekstraksi) yang dikirim ke server mana pun.
- Tidak ada tracking/analytics pihak ketiga di v1.0 (opsional tambah nanti dengan transparansi).

### NFR2: Performance
- Load awal halaman < 2 detik di koneksi 4G (target).
- Bundle JS total < 150 KB (gzip) untuk React + Vite PWA minimal.
- Ekstraksi regex dari teks hingga 10.000 karakter selesai < 500 ms di device mid-range.

### NFR3: Compatibility
- iOS Safari 17+ (Clipboard API supported, dengan prompt izin).
- Android Chrome terbaru (Clipboard API fully supported).
- Fallback graceful untuk browser lama (tampilkan pesan "Browser Anda tidak mendukung fitur paste otomatis, silakan input nomor manual").

### NFR4: PWA Installability
- Manifest + Service Worker sesuai standar PWA.
- App bisa dibuka offline (halaman statis), meski fungsi redirect `wa.me` tetap butuh internet.

***

## 6. Technical Stack

- **Framework:** React (v18+)
- **Build Tool:** Vite dengan plugin PWA (misal `vite-plugin-pwa` / Workbox)
- **Styling:** CSS modules / Tailwind (opsional, tergantung preferensi)
- **Deployment:** Static hosting (Vercel, Netlify, GitHub Pages, dll) — tanpa backend

***

## 7. Open Questions / Asumsi yang Perlu Dikonfirmasi

1. **Deteksi kode negara untuk nomor non-Indonesia:**  
   - Asumsi awal: regex akan menangkap pola umum (`+<1-3 digit><nomor>`), tapi untuk nomor tanpa `+` dan tanpa kode negara eksplisit (misal `0812...` dari luar Indonesia), konversi ke E.164 bisa ambigu.  
   - Opsi: batasi deteksi otomatis ke format yang jelas (dengan `+` atau kode negara), sisanya tampilkan sebagai "nomor tidak terdeteksi kode negara — silakan input manual".

2. **Panjang teks maksimum yang didukung:**  
   - Asumsi: hingga ~10.000 karakter cukup untuk sebagian besar use case (forward chat panjang, notulen grup, dll).  
   - Kalau ada skenario teks lebih panjang (dump besar), perlu pertimbangkan performance regex di device low-end.

3. **Format tampilan nomor di daftar:**  
   - Human-readable (`+62 812-3456-7890`) vs E.164 mentah (`+6281234567890`).  
   - Rekomendasi: human-readable untuk UX, tapi simpan E.164 internal untuk URL.

4. **Error handling untuk clipboard:**  
   - Kalau `readText()` gagal (permission denied, browser tidak support), tampilkan pesan error + fallback ke input manual.

***

## 8. Roadmap (Opsional)

### v1.0 (MVP)
- Semua fitur di PRD ini.

### v1.1 (Enhancement)
- Riwayat nomor yang pernah dibuka (localStorage).
- Opsi pre-filled message (template baku atau dari teks paste).
- Perbaikan regex untuk deteksi kode negara lebih akurat.

### v2.0 (Fitur Lanjutan)
- Bulk import (upload file teks/CSV berisi banyak lead).
- Label/kategori nomor (misal "prospek", "klien", "personal").
- Export daftar nomor ke CSV.

***


