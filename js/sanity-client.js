/**
 * ==========================================================================
 * SANITY CLIENT — PORTFOLIO
 * Fetch data dari Sanity CMS atau menggunakan mock data untuk pengujian lokal.
 * ==========================================================================
 */

import { mockContent } from './mock-data.js';

// Pengaturan Mode Integration
// - true: Menggunakan data dummy local (mock-data.js)
// - false: Fetch langsung ke API Sanity CDN
const USE_MOCK = false;

const SANITY_CONFIG = {
  projectId: 'ya3bgqpx',
  dataset: 'production',
  apiVersion: '2024-01-01'
};

export async function fetchAllContent() {
  console.log("FETCH ALL CONTENT DIPANGGIL");
  if (USE_MOCK) {
    // Simulasi delay jaringan (300ms) agar terasa realistis
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockContent);
      }, 300);
    });
  }

  const { projectId, dataset, apiVersion } = SANITY_CONFIG;

  const query = `{
    "seo": *[_type == "seoSettings"][0]{
      siteTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      "ogImageUrl": ogImage.asset->url,
      "faviconUrl": favicon.asset->url
    },
    "siteSettings": *[_type == "siteSettings"][0]{
      fullName,
      email,
      phone,
      location,
      "cvUrl": cvFile.asset->url,
      copyrightYear,
      footerTitle,
      speciality,
      socialLinks[]{ platform, url }
    },
    "hero": *[_type == "heroSection"][0]{
      greeting,
      subtitle,
      "photoUrl": photo.asset->url,
      stats[]{ number, label }
    },
    "about": *[_type == "aboutSection"][0]{
      title,
      description,
      slogan,
      "photoUrl": photo.asset->url,
      skills,
      bulletPoints
    },
    "projects": *[_type == "project"] | order(order asc){
      title,
      client,
      "imageUrl": image.asset->url,
      order
    },
    "videos": *[_type == "videoDoc"] | order(order asc){
      title,
      client,
      youtubeUrl,
      "thumbnailUrl": thumbnail.asset->url,
      order
    },
    "experiences": *[_type == "experience"] | order(order asc){
      company,
      dateRange,
      role,
      description,
      tags,
      order,
      isInsertAfter
    },
    "expInsert": *[_type == "experienceInsert"][0]{
      description,
      "images": images[].asset->url
    }
  }`;

  const encodedQuery = encodeURIComponent(query);
  const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;

  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Sanity fetch error: ${response.statusText}`);
    }
    const result = await response.json();
    return result.result;
  } catch (error) {
    console.error('Gagal memuat konten dari Sanity CMS:', error);
    // Kembalikan null jika terjadi kesalahan, agar rendering layer menggunakan fallback HTML asli
    return null;
  }
}
