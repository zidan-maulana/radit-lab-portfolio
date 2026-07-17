export default {
  name: 'heroSection',
  title: 'Halaman Utama (Hero)',
  type: 'document',
  fields: [
    {
      name: 'greeting',
      title: 'Kata Sapaan Utama',
      type: 'string',
      description: 'Kata sapaan besar di halaman pertama. Contoh: Halo.',
      validation: Rule => Rule.required().max(20)
    },
    {
      name: 'subtitle',
      title: 'Sub-teks Perkenalan (Subtitle)',
      type: 'string',
      description: 'Teks kecil di bawah sapaan utama. Contoh: — It\'s Radit, seorang Network Engineer.',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'photo',
      title: 'Foto Profil Utama',
      type: 'image',
      description: 'Unggah foto portrait Anda untuk diletakkan di sisi kanan halaman utama.',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'stats',
      title: 'Angka Statistik Keberhasilan',
      type: 'array',
      description: 'Tambahkan data statistik pencapaian Anda yang akan berjejer di halaman utama (Maksimal 2 item).',
      of: [
        {
          type: 'object',
          title: 'Item Statistik',
          fields: [
            {
              name: 'number',
              title: 'Angka Pencapaian',
              type: 'string',
              description: 'Contoh: +200 atau +50.',
              validation: Rule => Rule.required().max(10)
            },
            {
              name: 'label',
              title: 'Label Keterangan',
              type: 'string',
              description: 'Contoh: Proyek Selesai atau Klien Ditangani.',
              validation: Rule => Rule.required().max(25)
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(2).max(2)
    }
  ]
};
