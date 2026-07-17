export default {
  name: 'experience',
  title: 'Riwayat Pekerjaan',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Nama Perusahaan / Instansi',
      type: 'string',
      description: 'Nama tempat Anda bekerja.',
      validation: Rule => Rule.required().max(80)
    },
    {
      name: 'dateRange',
      title: 'Periode Waktu Kerja',
      type: 'string',
      description: 'Rentang waktu bekerja. Contoh: Januari 2024 – Sekarang atau Maret 2023 – Desember 2023.',
      validation: Rule => Rule.required().max(40)
    },
    {
      name: 'role',
      title: 'Posisi / Jabatan',
      type: 'string',
      description: 'Posisi jabatan pekerjaan Anda. Contoh: Teknisi Jaringan Senior.',
      validation: Rule => Rule.required().max(80)
    },
    {
      name: 'description',
      title: 'Deskripsi Pekerjaan',
      type: 'text',
      description: 'Uraian singkat mengenai tanggung jawab utama dan tugas Anda di perusahaan ini.',
      validation: Rule => Rule.required().max(400)
    },
    {
      name: 'tags',
      title: 'Teknologi yang Digunakan (Tags)',
      type: 'array',
      description: 'Daftar perangkat/teknologi yang Anda kelola pada pekerjaan ini. Contoh: MikroTik, Routing, FTTH, GPON.',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      description: 'Menentukan urutan tampilan riwayat (angka kecil tampil di urutan awal, contoh: 1, 2, 3).',
      initialValue: 0,
      validation: Rule => Rule.required().integer()
    },
    {
      name: 'isInsertAfter',
      title: 'Tampilkan Foto Lapangan Setelah Item Ini',
      type: 'boolean',
      description: 'Jika dicentang, blok foto aktivitas lapangan akan muncul tepat di bawah posisi item pengalaman kerja ini.',
      initialValue: false
    }
  ],
  // Konfigurasi tampilan pratinjau di dashboard Sanity Studio
  preview: {
    select: {
      title: 'company',
      subtitle: 'role'
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
      title: 'Nama Perusahaan (A-Z)',
      name: 'companyAsc',
      by: [
        { field: 'company', direction: 'asc' }
      ]
    }
  ]
};
