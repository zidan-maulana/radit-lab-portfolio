export default {
  name: 'seoSettings',
  title: 'Pengaturan SEO',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Judul Website (Title)',
      type: 'string',
      description: 'Judul yang tampil di tab browser. Contoh: Radit | Network Engineer Portfolio',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'metaDescription',
      title: 'Deskripsi Meta (Meta Description)',
      type: 'text',
      description: 'Deskripsi singkat website untuk mesin pencari (SEO). Maksimal 160 karakter.',
      validation: Rule => Rule.required().max(160)
    },
    {
      name: 'ogTitle',
      title: 'Judul Sosmed (Open Graph Title)',
      type: 'string',
      description: 'Judul saat link website dibagikan di media sosial. Jika kosong, akan otomatis menyalin Judul Website di atas.',
      validation: Rule => Rule.max(60)
    },
    {
      name: 'ogDescription',
      title: 'Deskripsi Sosmed (Open Graph Description)',
      type: 'text',
      description: 'Deskripsi saat link website dibagikan di media sosial. Jika kosong, akan menyalin Deskripsi Meta di atas.',
      validation: Rule => Rule.max(160)
    },
    {
      name: 'ogImage',
      title: 'Gambar Pratinjau Sosmed (Open Graph Image)',
      type: 'image',
      description: 'Gambar preview yang muncul saat link dibagikan di media sosial (disarankan ukuran 1200x630 pixel).',
      options: {
        hotspot: true
      }
    },
    {
      name: 'favicon',
      title: 'Ikon Tab Browser (Favicon)',
      type: 'image',
      description: 'Ikon kecil yang tampil di tab browser (disarankan format .png atau .ico).'
    }
  ]
};
