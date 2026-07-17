# Portfolio Website – Radit (Network Engineering Projects)

Website portofolio statis untuk mendokumentasikan proyek-proyek jaringan/IT: foto kegiatan, video dokumentasi, deskripsi proyek instalasi/konfigurasi, dan informasi perangkat/metode yang digunakan.

## 📌 Tentang Project

Website ini dibuat sebagai media profesional untuk menunjukkan pengalaman sebagai **Network Engineer/Technician** kepada recruiter, perusahaan, maupun klien potensial.

- **Client:** Radit
- **Profesi:** Network Engineer/Technician (instalasi & konfigurasi jaringan)
- **Tipe:** Personal Portfolio Website
- **Sifat:** Static website (tanpa CMS, tanpa backend, tanpa database)

> **Catatan:** Konten sebelumnya sempat salah asumsi (mengarah ke konteks lab kimia/sains). Sudah dikoreksi ke konteks jaringan/IT per 2026-07-15.

## 🛠️ Tech Stack

| Komponen | Tools |
|---|---|
| Desain UI/UX & Implementasi | Antigravity (langsung, tanpa tahap desain terpisah) |
| Output akhir | HTML / CSS / JS (static) |
| Hosting | Netlify (prioritas) → GitHub Pages → Vercel |

Tidak menggunakan React atau framework lain agar pengerjaan cepat dan sesuai budget.

> **Catatan:** Rencana awal menggunakan Stitch Design untuk tahap konsep UI/UX dibatalkan. Desain langsung dibuat di Antigravity dengan mengacu pada referensi visual (lihat bagian *Referensi Desain* di bawah).

## 📂 Struktur Halaman (Landing Page)

1. Hero
2. About
3. Skills / Service
4. Featured Laboratory Projects (Selected Work)
5. Experience *(timeline pengalaman/kegiatan lab)*
6. Testimonials *(opsional — bisa diisi testimoni dosen/rekan tim, atau dilewati jika belum ada)*
7. Contact
8. Footer

## 🎨 Referensi Desain

Struktur & gaya visual mengacu pada referensi portfolio dengan karakteristik:

- **Tema:** Dark theme, dominan hitam-putih (grayscale)
- **Tipografi:** Heading besar & bold (khususnya di Hero dan Footer)
- **Navbar:** Logo + menu (Home, About Me, Service, Works, Experience, Testimonials) + tombol CTA
- **Hero:** Nama/judul besar + tagline singkat + foto
- **About:** Deskripsi singkat + foto + statistik (angka pencapaian)
- **Service:** Grid kartu layanan (icon + judul + deskripsi singkat)
- **Selected Work:** Grid galeri project (thumbnail + judul + kategori)
- **Experience:** Timeline (tahun + posisi/kegiatan) + foto pendukung
- **Testimonials:** Foto + kutipan singkat
- **Penutup:** CTA kontak + footer dengan nama besar berulang

Catatan: konten disesuaikan dari "product designer portfolio" menjadi konteks **dokumentasi proyek laboratorium** (Service → jenis kegiatan/metode lab, Selected Work → proyek lab, Experience → riwayat praktikum/penelitian).

## 🧪 Struktur Tiap Project Card

- Thumbnail
- Judul
- Kategori
- Deskripsi singkat
- Tombol **View Detail**
- Tombol **Watch Video**

## 📄 Halaman/Modal Detail Project

Berisi:
- Foto besar
- Deskripsi lengkap
- Tujuan praktikum
- Metodologi
- Hasil
- Alat yang digunakan
- Video
- Gallery

## 🖼️ Strategi Media

**Foto**
- Format: WebP
- Lebar: ±1200 px
- Ukuran maksimal: ±300 KB per file
- Disimpan langsung di folder project (bukan eksternal)

**Video**
- Tidak diupload ke hosting
- Menggunakan **YouTube (Unlisted) + Embed**
- Alasan: hemat storage, streaming cepat, tidak membebani hosting, mudah dikelola
- Google Drive hanya digunakan jika benar-benar diperlukan

## 🚀 Deployment

Prioritas hosting (gratis, HTTPS otomatis, mudah deploy, mudah dihubungkan ke custom domain):

1. Netlify
2. GitHub Pages
3. Vercel

## 🔄 Update Konten

Karena tidak ada CMS, lihat detail lengkap di [`UPDATE_GUIDE.md`](./UPDATE_GUIDE.md).

Ringkasan opsi:
- **Opsi A:** Developer melakukan update manual (biaya kecil, misal Rp25.000/update)
- **Opsi B:** Klien belajar mengedit sendiri lewat source code

## 📝 Riwayat Perubahan

Lihat [`CHANGELOG.md`](./CHANGELOG.md) untuk catatan perubahan project.

## 💰 Budget

Total budget project: **Rp100.000** (fixed) — karena itu project ini murni static website tanpa backend/CMS/database.