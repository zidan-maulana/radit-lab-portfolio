# Update Guide – Portfolio Website Radit

Panduan ini menjelaskan cara memperbarui konten website karena project ini **tidak menggunakan CMS, dashboard admin, atau database**. Semua konten dikelola langsung lewat source code (HTML/CSS/JS).

## 🔀 Dua Opsi Update

### Opsi A — Developer yang Update
Klien mengirim materi baru (foto/video/teks) ke developer, lalu developer melakukan perubahan langsung di source code.

- Biaya: mulai **Rp25.000/update** (nominal bisa disesuaikan tergantung jumlah perubahan)
- Cocok untuk: klien yang tidak familiar dengan kode
- Estimasi waktu: 1–3 hari kerja tergantung kompleksitas

### Opsi B — Klien Update Sendiri
Klien belajar mengedit langsung di source code mengikuti panduan di bawah.

- Biaya: gratis
- Cocok untuk: klien yang ingin belajar dasar HTML/CSS
- Developer bisa memberi sesi onboarding singkat sekali di awal

---

## 🧩 Cara Menambah Project Baru (Opsi B)

1. Siapkan aset:
   - Foto: format **WebP**, lebar ±1200px, ukuran maksimal ±300KB
   - Video: upload ke YouTube sebagai **Unlisted**, salin link embed
2. Buka file HTML bagian **Featured Laboratory Projects**
3. Duplikat blok/card project yang sudah ada (copy-paste struktur HTML card)
4. Ganti isi:
   - Thumbnail → path ke foto baru
   - Judul project
   - Kategori
   - Deskripsi singkat
   - Link "View Detail" → mengarah ke halaman/modal detail baru
   - Link "Watch Video" → link embed YouTube baru
5. Buat/duplikat halaman atau modal detail project berisi:
   - Foto besar
   - Deskripsi lengkap
   - Tujuan praktikum
   - Metodologi
   - Hasil
   - Alat yang digunakan
   - Video
   - Gallery
6. Simpan, lalu cek tampilan di browser sebelum deploy

## ✏️ Cara Mengedit Project yang Sudah Ada

1. Cari card project yang ingin diubah (biasanya ditandai `id` atau komentar HTML)
2. Ubah teks, ganti path gambar, atau update link video sesuai kebutuhan
3. Simpan file, cek kembali di browser (buka file `index.html` secara lokal)

## 🗑️ Cara Menghapus Project

1. Hapus blok/card project di bagian **Featured Laboratory Projects**
2. Hapus juga halaman/modal detail terkait (jika terpisah)
3. Hapus file foto yang tidak lagi digunakan agar folder tetap rapi

## ☁️ Deploy Ulang Setelah Update

Tergantung platform hosting:

- **Netlify / Vercel:** biasanya otomatis re-deploy jika terhubung ke repository GitHub — cukup push perubahan
- **GitHub Pages:** push perubahan ke branch yang digunakan untuk hosting

Jika tidak terhubung ke GitHub, upload ulang file secara manual lewat dashboard hosting.

## ⚠️ Catatan Penting

- Selalu backup source code sebelum melakukan perubahan besar
- Jangan menghapus file `CSS`/`JS` inti kecuali paham dampaknya ke tampilan
- Pastikan ukuran foto tetap dikompres agar loading website tetap cepat
- Setiap perubahan signifikan sebaiknya dicatat di `CHANGELOG.md`