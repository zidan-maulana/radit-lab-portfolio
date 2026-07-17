/**
 * ==========================================================================
 * RENDERING LAYER — PORTFOLIO
 * Mengisi data dinamis ke dalam struktur HTML (DOM) secara hybrid.
 * ==========================================================================
 */

// Helper untuk mencegah serangan Cross-Site Scripting (XSS)
function escapeHtml(unsafe) {
  if (unsafe === undefined || unsafe === null) return '';
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --- Helper untuk mapping SVG icon sosial media (About Section - Stroke Icons) ---
function getSocialIconSvg(platform) {
  const p = platform.toLowerCase();
  if (p === 'linkedin') {
    return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>`;
  } else if (p === 'instagram') {
    return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>`;
  } else if (p === 'github') {
    return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>`;
  } else if (p === 'email' || p === 'mail') {
    return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>`;
  }
  return '';
}

// --- Helper untuk mapping SVG icon sosial media (Contact Section - Filled Icons) ---
function getContactSocialIconSvg(platform) {
  const p = platform.toLowerCase();
  if (p === 'linkedin') {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>`;
  } else if (p === 'instagram') {
    // FIX: Menggunakan path SVG yang valid dan benar dari Simple Icons
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.67.014-4.947.072-4.352.2-6.78 2.619-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.790-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>`;
  } else if (p === 'github') {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>`;
  } else if (p === 'email' || p === 'mail') {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>`;
  }
  return '';
}

// ==========================================
// 0. RENDER SEO (PENGATURAN META & TITLE)
// ==========================================
export function renderSeo(seoData) {
  if (!seoData) return;

  const siteTitleEl = document.getElementById('siteTitle');
  if (siteTitleEl && seoData.siteTitle) {
    siteTitleEl.textContent = seoData.siteTitle;
    document.title = seoData.siteTitle;
  }

  const metaDescEl = document.getElementById('metaDescription');
  if (metaDescEl && seoData.metaDescription) {
    metaDescEl.setAttribute('content', seoData.metaDescription);
  }

  const ogTitleEl = document.getElementById('ogTitle');
  if (ogTitleEl) {
    ogTitleEl.setAttribute('content', seoData.ogTitle || seoData.siteTitle || '');
  }

  const ogDescEl = document.getElementById('ogDescription');
  if (ogDescEl) {
    ogDescEl.setAttribute('content', seoData.ogDescription || seoData.metaDescription || '');
  }

  const ogImageEl = document.getElementById('ogImage');
  if (ogImageEl && seoData.ogImageUrl) {
    ogImageEl.setAttribute('content', seoData.ogImageUrl);
  }

  const faviconEl = document.getElementById('favicon');
  if (faviconEl && seoData.faviconUrl) {
    faviconEl.setAttribute('href', seoData.faviconUrl);
  }
}

// ==========================================
// 1. RENDER HERO
// ==========================================
export function renderHero(heroData) {
  if (!heroData) return;

  const titleEl = document.getElementById('heroTitle');
  if (titleEl && heroData.greeting) {
    titleEl.textContent = heroData.greeting;
  }

  const subtitleEl = document.getElementById('heroSubtitle');
  if (subtitleEl && heroData.subtitle) {
    subtitleEl.textContent = heroData.subtitle;
  }

  const imgEl = document.getElementById('heroImg');
  if (imgEl && heroData.photoUrl) {
    imgEl.src = heroData.photoUrl;
  }

  const statsWrapper = document.getElementById('heroStatsWrapper');
  if (statsWrapper && heroData.stats) {
    // Sanitasi teks stat menggunakan escapeHtml
    statsWrapper.innerHTML = heroData.stats
      .map(
        (stat) => `
        <div class="hero-stat-item">
          <span class="hero-stat-num">${escapeHtml(stat.number)}</span>
          <span class="hero-stat-label">${escapeHtml(stat.label)}</span>
        </div>
      `
      )
      .join('');
  }
}

// ==========================================
// 2. RENDER ABOUT ME
// ==========================================
export function renderAbout(aboutData, siteSettings) {
  if (!aboutData) return;

  const descEl = document.getElementById('aboutDesc');
  if (descEl && aboutData.description) {
    descEl.textContent = aboutData.description;
  }

  const boxNameEl = document.getElementById('aboutBoxName');
  if (boxNameEl && siteSettings && siteSettings.fullName) {
    boxNameEl.textContent = siteSettings.fullName;
  }

  const sloganEl = document.getElementById('aboutBoxSlogan');
  if (sloganEl && aboutData.slogan) {
    sloganEl.textContent = aboutData.slogan;
  }

  const cardImgEl = document.getElementById('aboutCardImg');
  if (cardImgEl && aboutData.photoUrl) {
    cardImgEl.src = aboutData.photoUrl;
  }

  const cvLinkEl = document.getElementById('aboutCvLink');
  if (cvLinkEl && siteSettings && siteSettings.cvUrl) {
    cvLinkEl.href = siteSettings.cvUrl;
  }

  // Mini loop: Skills
  const skillsGrid = document.getElementById('aboutSkillsGrid');
  if (skillsGrid && aboutData.skills) {
    skillsGrid.innerHTML = aboutData.skills
      .map((skill) => `<span class="skill-pill">${escapeHtml(skill)}</span>`)
      .join('');
  }

  // Mini loop: Social Links (About)
  const socialsWrapper = document.getElementById('aboutSocialsWrapper');
  if (socialsWrapper && siteSettings && siteSettings.socialLinks) {
    socialsWrapper.innerHTML = siteSettings.socialLinks
      .map((link) => {
        const svg = getSocialIconSvg(link.platform);
        return `
          <a href="${escapeHtml(link.url)}" target="_blank" class="about-social-icon" aria-label="${escapeHtml(link.platform)}">
            ${svg}
          </a>
        `;
      })
      .join('');
  }

  // Mini loop: Bullet points
  const bulletsContainer = document.getElementById('aboutBullets');
  if (bulletsContainer && aboutData.bulletPoints) {
    bulletsContainer.innerHTML = aboutData.bulletPoints
      .map(
        (bullet) => `
        <div class="about-bullet-item">
          <div class="bullet-sparkle">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
          </div>
          <p class="bullet-text">${escapeHtml(bullet)}</p>
        </div>
      `
      )
      .join('');
  }
}

// ==========================================
// 3. RENDER PROJECTS (PORTFOLIO GRID)
// ==========================================
export function renderProjects(projects) {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid || !projects) return;

  projectsGrid.innerHTML = projects
    .map(
      (proj) => `
      <div class="work-card">
        <div class="work-img-container">
          <img src="${escapeHtml(proj.imageUrl)}" alt="${escapeHtml(proj.title)}" class="work-img">
        </div>
        <div class="work-info">
          <h3 class="work-title">${escapeHtml(proj.title)}</h3>
          <p class="work-client">${escapeHtml(proj.client)}</p>
        </div>
      </div>
    `
    )
    .join('');
}

// ==========================================
// 4. RENDER VIDEOS (HORIZONTAL SCROLL)
// ==========================================
export function renderVideos(videos) {
  const videosGrid = document.getElementById('videosGrid');
  if (!videosGrid || !videos) return;

  videosGrid.innerHTML = videos
    .map(
      (video) => `
      <div class="preview-slide">
        <div class="preview-media video-placeholder" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${escapeHtml(video.thumbnailUrl || 'assets/images/carousel-1.svg')}'); background-size: cover; background-position: center;">
          <a href="${escapeHtml(video.youtubeUrl)}" target="_blank" class="video-play-overlay">
            <div class="video-play-btn">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                <polygon points="8,5 19,12 8,19" />
              </svg>
            </div>
          </a>
        </div>
        <div class="preview-caption">
          <h3 class="preview-proj-title">${escapeHtml(video.title)}</h3>
          <p class="preview-proj-client">${escapeHtml(video.client)}</p>
        </div>
      </div>
    `
    )
    .join('');
}

// ==========================================
// 5. RENDER EXPERIENCE & INSERT BLOCK
// ==========================================
export function renderExperience(experiences, expInsert) {
  const journeyList = document.getElementById('journeyList');
  if (!journeyList || !experiences) return;

  let htmlContent = '';

  experiences.forEach((exp, index) => {
    // Render row pengalaman kerja
    htmlContent += `
      <div class="journey-row">
        <div class="row-company-col">
          <h3 class="row-company-name">${escapeHtml(exp.company)}</h3>
          <span class="row-date">${escapeHtml(exp.dateRange)}</span>
        </div>
        <div class="row-desc-col">
          <h4 class="row-role">${escapeHtml(exp.role)}</h4>
          <p class="row-desc-detail">${escapeHtml(exp.description)}</p>
        </div>
        <div class="row-tags-col">
          ${exp.tags.map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join('')}
        </div>
      </div>
    `;

    // Render insert block jika ada & isInsertAfter bernilai true (atau di antara baris 3 & 4 / index == 2)
    if (exp.isInsertAfter || (index === 2 && expInsert)) {
      htmlContent += `
        <div class="journey-insert-block">
          <div class="journey-insert-images">
            ${expInsert.images
              .map((img) => `<img src="${escapeHtml(img)}" alt="Aktivitas Lapangan" class="insert-thumb">`)
              .join('')}
          </div>
          <div class="journey-insert-content">
            <p class="journey-insert-desc">${escapeHtml(expInsert.description)}</p>
            <a href="#portfolio" class="btn-circle-arrow" aria-label="Lihat Portofolio">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      `;
    }
  });

  journeyList.innerHTML = htmlContent;
}

// ==========================================
// 6. RENDER CONTACT INFO
// ==========================================
export function renderContact(siteSettings) {
  if (!siteSettings) return;

  const emailEl = document.getElementById('contactEmail');
  if (emailEl && siteSettings.email) {
    emailEl.textContent = siteSettings.email;
    emailEl.href = `mailto:${siteSettings.email}`;
  }

  const phoneEl = document.getElementById('contactPhone');
  if (phoneEl && siteSettings.phone) {
    phoneEl.textContent = siteSettings.phone;
    phoneEl.href = `tel:${siteSettings.phone.replace(/\s+/g, '')}`;
  }

  const locEl = document.getElementById('contactLocation');
  if (locEl && siteSettings.location) {
    locEl.textContent = siteSettings.location;
  }

  // Mini loop: Social Links (Contact Section)
  const contactSocials = document.getElementById('contactSocials');
  if (contactSocials && siteSettings.socialLinks) {
    contactSocials.innerHTML = siteSettings.socialLinks
      .map((link) => {
        const svg = getContactSocialIconSvg(link.platform);
        return `
          <a href="${escapeHtml(link.url)}" target="_blank" aria-label="${escapeHtml(link.platform)}" class="contact-social-link">
            ${svg}
          </a>
        `;
      })
      .join('');
  }
}

// ==========================================
// 7. RENDER FOOTER
// ==========================================
export function renderFooter(siteSettings) {
  if (!siteSettings) return;

  // Let's Work Together - Bisa dinamis jika ada field footerTitle
  const bigNameEl = document.getElementById('footerBigName');
  if (bigNameEl) {
    bigNameEl.textContent = siteSettings.footerTitle || "Let's Work Together";
  }

  // Info Bar Atas (Spesialisasi, Lokasi, Tahun)
  const topRow = document.getElementById('footerTopRow');
  if (topRow) {
    const currentYear = siteSettings.copyrightYear || new Date().getFullYear();
    const speciality = siteSettings.speciality || 'Network Engineering';
    const loc = siteSettings.location || 'Jakarta, Indonesia';
    topRow.innerHTML = `
      <div class="footer-top-left">
        <span>${escapeHtml(speciality)}</span>
      </div>
      <div class="footer-top-right">
        <span>${escapeHtml(loc)}</span>
        <span>${escapeHtml(currentYear)}</span>
      </div>
    `;
  }

  // Email
  const bottomEmailEl = document.getElementById('footerBottomEmail');
  if (bottomEmailEl && siteSettings.email) {
    bottomEmailEl.textContent = siteSettings.email;
    bottomEmailEl.href = `mailto:${siteSettings.email}`;
  }

  // Copyright
  const copyEl = document.getElementById('footerCopy');
  if (copyEl && siteSettings.fullName) {
    const year = siteSettings.copyrightYear || new Date().getFullYear();
    copyEl.innerHTML = `&copy; ${escapeHtml(year)} ${escapeHtml(siteSettings.fullName)}. All rights reserved.`;
  }
}
