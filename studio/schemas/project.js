export default {
  name: 'project',
  title: 'Koleksi Proyek',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      description: 'Nama dari proyek jaringan yang telah dikerjakan.',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'client',
      title: 'Klien / Instansi',
      type: 'string',
      description: 'Nama perusahaan atau pihak kedua dari proyek ini. Contoh: Untuk Perusahaan Dummy A.',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'image',
      title: 'Foto / Visual Proyek',
      type: 'image',
      description: 'Unggah screenshot topologi, perangkat, atau aktivitas terkait proyek.',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      description: 'Menentukan urutan tampilan proyek (angka kecil tampil di urutan awal, contoh: 1, 2, 3).',
      initialValue: 0,
      validation: Rule => Rule.required().integer()
    }
  ],
  // Konfigurasi tampilan pratinjau di dashboard Sanity Studio
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'image'
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
      title: 'Judul Proyek (A-Z)',
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    }
  ]
};
