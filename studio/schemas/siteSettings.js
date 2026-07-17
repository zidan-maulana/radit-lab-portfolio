export default {
  name: 'siteSettings',
  title: 'Pengaturan Global & Kontak',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Nama Lengkap',
      type: 'string',
      description: 'Nama lengkap pemilik portofolio yang akan ditampilkan di web.',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Alamat Email',
      type: 'string',
      description: 'Email utama untuk menerima pesan/kontak dari pengunjung.',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Nomor Telepon / WhatsApp',
      type: 'string',
      description: 'Nomor telepon yang dapat dihubungi, sertakan kode negara. Contoh: +62 812 3456 7890.'
    },
    {
      name: 'location',
      title: 'Lokasi Domisili',
      type: 'string',
      description: 'Kota dan negara tempat tinggal saat ini. Contoh: Jakarta, Indonesia.'
    },
    {
      name: 'speciality',
      title: 'Bidang Keahlian (Spesialisasi)',
      type: 'string',
      description: 'Pekerjaan spesifik Anda. Contoh: Network Engineering (Tampil di bagian footer atas).',
      validation: Rule => Rule.required()
    },
    {
      name: 'cvFile',
      title: 'File CV / Resume (PDF)',
      type: 'file',
      description: 'Upload berkas CV terbaru Anda dalam format PDF.',
      options: {
        accept: '.pdf'
      }
    },
    {
      name: 'copyrightYear',
      title: 'Tahun Hak Cipta (Copyright)',
      type: 'number',
      description: 'Tahun yang ditampilkan di samping copyright footer. Contoh: 2025.',
      validation: Rule => Rule.required().integer().min(2020).max(2100)
    },
    {
      name: 'footerTitle',
      title: 'Teks Ajakan di Footer (CTA)',
      type: 'string',
      description: 'Teks ajakan besar di footer sebelum copyright. Contoh: Let\'s Work Together.',
      validation: Rule => Rule.required()
    },
    {
      name: 'socialLinks',
      title: 'Tautan Sosial Media',
      type: 'array',
      description: 'Daftar link sosial media yang aktif (LinkedIn, Instagram, GitHub, dll).',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            {
              name: 'platform',
              title: 'Platform Sosmed',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Email', value: 'email' }
                ]
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'Tautan URL Sosial Media',
              type: 'url',
              description: 'Alamat lengkap URL akun Anda (termasuk https://).',
              validation: Rule => Rule.required().uri({
                scheme: ['http', 'https', 'mailto']
              })
            }
          ]
        }
      ]
    }
  ]
};
