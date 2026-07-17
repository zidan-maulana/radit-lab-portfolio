export default {
  name: 'experienceInsert',
  title: 'Foto & Deskripsi Lapangan',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Deskripsi Aktivitas',
      type: 'text',
      description: 'Ceritakan pengalaman kerja lapangan Anda (tampil di sebelah kiri foto-foto).',
      validation: Rule => Rule.required().max(300)
    },
    {
      name: 'images',
      title: 'Foto-foto Lapangan',
      type: 'array',
      description: 'Unggah maksimal 3 foto aktivitas di lapangan (berupa instalasi rack, fiber optic, dsb).',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required().min(3).max(3)
    }
  ]
};
