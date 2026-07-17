export default {
  name: 'aboutSection',
  title: 'Tentang Saya (About)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Bagian',
      type: 'string',
      description: 'Judul untuk bagian tentang saya. Default: About Me.',
      initialValue: 'About Me',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Deskripsi Profil',
      type: 'text',
      description: 'Paragraf penjelasan tentang diri Anda, pengalaman, spesialisasi, dan etos kerja.',
      validation: Rule => Rule.required().min(100).max(600)
    },
    {
      name: 'slogan',
      title: 'Slogan Motivasi / Box Quote',
      type: 'string',
      description: 'Teks slogan yang diletakkan di dalam card tengah. Contoh: "Connecting nodes, securing networks, bridging possibilities."',
      validation: Rule => Rule.required().max(120)
    },
    {
      name: 'photo',
      title: 'Foto Profil Card Tengah',
      type: 'image',
      description: 'Unggah foto aktivitas atau portrait pelengkap yang akan diletakkan di card profil tengah.',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'skills',
      title: 'Kumpulan Keahlian (Skills)',
      type: 'array',
      description: 'Daftar keahlian teknis Anda (berupa pill tags). Contoh: LAN/WAN Topology, Cisco & Mikrotik, Network Security.',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'bulletPoints',
      title: 'Poin-poin Keunggulan',
      type: 'array',
      description: 'Tuliskan 4 poin keunggulan utama pekerjaan Anda beserta deskripsi singkatnya.',
      of: [{ type: 'text' }],
      validation: Rule => Rule.required().min(4).max(4)
    }
  ]
};
