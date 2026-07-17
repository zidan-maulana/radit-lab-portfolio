/**
 * ==========================================================================
 * MOCK DATA — PORTFOLIO
 * Data dummy yang menyerupai struktur output Sanity CMS untuk local testing.
 * ==========================================================================
 */

export const mockContent = {
  seo: {
    siteTitle: "Radit | Network Engineer Portfolio",
    metaDescription: "Personal Portfolio Website - Radit | Network Engineer Portfolio & Dokumentasi Jaringan",
    ogTitle: "Radit | Network Engineer Portfolio",
    ogDescription: "Personal Portfolio Website - Radit | Network Engineer Portfolio & Dokumentasi Jaringan",
    ogImageUrl: "assets/images/about-potret.svg",
    faviconUrl: "assets/images/favicon.png"
  },
  siteSettings: {
    fullName: "M. Kaisar Radit",
    email: "hello@radit.com",
    phone: "+62 812 3456 7890",
    location: "Jakarta, Indonesia",
    cvUrl: "assets/cv.pdf",
    copyrightYear: 2025,
    footerTitle: "Let's Work Together",
    speciality: "Network Engineering",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "github", url: "https://github.com" },
      { platform: "email", url: "mailto:hello@radit.com" }
    ]
  },
  hero: {
    greeting: "Halo",
    subtitle: "— It's Radit, seorang Network Engineer",
    photoUrl: "assets/images/hero-photo.svg",
    stats: [
      { number: "+200", label: "Proyek Selesai" },
      { number: "+50", label: "Klien Ditangani" }
    ]
  },
  about: {
    title: "About Me",
    description: "Saya merupakan seorang teknisi jaringan yang berfokus pada pengelolaan infrastruktur jaringan dan perangkat MikroTik. Memiliki pengalaman dalam konfigurasi LAN/WAN, routing, switching, VLAN, serta instalasi dan pemeliharaan jaringan FTTH berbasis GPON.",
    slogan: "\"Connecting nodes, securing networks, bridging possibilities.\"",
    photoUrl: "assets/images/about-potret.svg",
    skills: [
      "LAN/WAN Topology",
      "Cisco & Mikrotik",
      "VLAN & Routing",
      "Network Security"
    ],
    bulletPoints: [
      "Perancangan topologi LAN/WAN kompleks & hemat biaya untuk gedung multi-lantai.",
      "Penerapan standar keamanan Cisco & Mikrotik dengan dokumentasi topologi yang rapi.",
      "Koordinasi lintas tim (PM & teknisi) untuk memastikan target implementasi tepat waktu.",
      "Monitoring jaringan real-time & analisis mendalam dengan PRTG, Zabbix, & Wireshark."
    ]
  },
  projects: [
    {
      title: "Nama Proyek Jaringan #1",
      client: "Untuk Perusahaan Dummy A",
      imageUrl: "assets/images/work-1.svg",
      order: 1
    },
    {
      title: "Nama Proyek Jaringan #2",
      client: "Untuk Perusahaan Dummy B",
      imageUrl: "assets/images/work-2.svg",
      order: 2
    },
    {
      title: "Nama Proyek Jaringan #3",
      client: "Untuk Perusahaan Dummy C",
      imageUrl: "assets/images/work-3.svg",
      order: 3
    },
    {
      title: "Nama Proyek Jaringan #4",
      client: "Untuk Perusahaan Dummy D",
      imageUrl: "assets/images/project-1.svg",
      order: 4
    },
    {
      title: "Nama Proyek Jaringan #5",
      client: "Untuk Perusahaan Dummy E",
      imageUrl: "assets/images/project-2.svg",
      order: 5
    },
    {
      title: "Nama Proyek Jaringan #6",
      client: "Untuk Perusahaan Dummy F",
      imageUrl: "assets/images/project-3.svg",
      order: 6
    }
  ],
  videos: [
    {
      title: "Video Dokumentasi Proyek A",
      client: "Untuk Perusahaan Dummy A",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnailUrl: "assets/images/carousel-1.svg",
      order: 1
    },
    {
      title: "Video Dokumentasi Proyek B",
      client: "Untuk Perusahaan Dummy B",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnailUrl: "assets/images/carousel-2.svg",
      order: 2
    },
    {
      title: "Video Dokumentasi Proyek C",
      client: "Untuk Perusahaan Dummy C",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnailUrl: "assets/images/carousel-3.svg",
      order: 3
    }
  ],
  experiences: [
    {
      company: "Nama Perusahaan A",
      dateRange: "Januari 2024 – Sekarang",
      role: "Teknisi Jaringan Senior",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      tags: ["MikroTik", "Routing"],
      order: 1,
      isInsertAfter: false
    },
    {
      company: "Nama Perusahaan B",
      dateRange: "Maret 2023 – Desember 2023",
      role: "Teknisi Jaringan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      tags: ["VLAN", "Switching"],
      order: 2,
      isInsertAfter: false
    },
    {
      company: "Nama Perusahaan C",
      dateRange: "Juli 2022 – Februari 2023",
      role: "Teknisi Jaringan Junior",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      tags: ["FTTH", "GPON"],
      order: 3,
      isInsertAfter: false
    },
    {
      company: "Nama Perusahaan D",
      dateRange: "Juni 2021 – Mei 2022",
      role: "Teknisi Jaringan Magang",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      tags: ["Troubleshooting", "Monitoring"],
      order: 4,
      isInsertAfter: false
    }
  ],
  expInsert: {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    images: [
      "assets/images/exp-thumb-1.svg",
      "assets/images/exp-thumb-2.svg",
      "assets/images/exp-thumb-3.svg"
    ]
  }
};
