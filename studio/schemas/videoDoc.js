export default {
  name: 'videoDoc',
  title: 'Koleksi Video Dokumentasi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Video Dokumentasi',
      type: 'string',
      description: 'Judul dari video dokumentasi pengerjaan proyek jaringan.',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'client',
      title: 'Klien / Deskripsi Singkat',
      type: 'string',
      description: 'Keterangan tambahan atau nama instansi. Contoh: Untuk Perusahaan Dummy A.',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'youtubeUrl',
      title: 'Tautan URL Video YouTube',
      type: 'url',
      description: 'Alamat lengkap URL video YouTube Anda (contoh: https://www.youtube.com/watch?v=...).',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'thumbnail',
      title: 'Gambar Pratinjau (Thumbnail)',
      type: 'image',
      description: 'Unggah cover gambar untuk video dokumentasi ini (opsional, disarankan rasio 16:9).',
      options: {
        hotspot: true
      }
    },
    {
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      description: 'Menentukan urutan tampilan video (angka kecil tampil di urutan awal, contoh: 1, 2, 3).',
      initialValue: 0,
      validation: Rule => Rule.required().integer()
    }
  ],
  // Konfigurasi tampilan pratinjau di dashboard Sanity Studio
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'thumbnail'
    }
  },
  // Konfigurasi opsi pengurutan (sorting) di daftar item Studio
  orderings: [
    {
      title: 'Urutan Tampil (Terendah)',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    },
    {
      title: 'Judul Video (A-Z)',
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    }
  ]
};
