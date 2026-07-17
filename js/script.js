/**
 * ==========================================================================
 * SCRIPT UTAMA - PERSONAL PORTFOLIO RADIT
 * Mengatur interaksi Sticky Navbar, Mobile Menu Toggle, dan Animasi Scroll.
 * ==========================================================================
 */

import { fetchAllContent } from './sanity-client.js';

console.log("SCRIPT.JS BERHASIL DIMUAT");

import {
  renderSeo,
  renderHero,
  renderAbout,
  renderProjects,
  renderVideos,
  renderExperience,
  renderContact,
  renderFooter
} from './content-renderer.js';

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. ELEMEN SELEKTOR
  // ==========================================
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  // Membuat overlay latar belakang menu mobile secara dinamis jika belum ada
  let overlay = document.getElementById('menuOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menuOverlay';
    document.body.appendChild(overlay);
  }

  // ==========================================
  // 2. LOGIKA STICKY NAVBAR (ON SCROLL)
  // ==========================================
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // ==========================================
  // 3. LOGIKA MOBILE MENU (HAMBURGER TOGGLE)
  // ==========================================
  const toggleMenu = () => {
    const isOpen = menuToggle.classList.contains('active');

    if (isOpen) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      menuToggle.classList.add('active');
      navMenu.classList.add('active');
      overlay.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // ==========================================
  // 4. MENUTUP MENU JIKA LINK DIKLIK
  // ==========================================
  const navLinks = document.querySelectorAll('.nav-link');
  const navCta = document.querySelector('.btn-nav-cta');

  const closeMenuIfOpen = () => {
    if (menuToggle.classList.contains('active')) {
      toggleMenu();
    }
  };

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      closeMenuIfOpen();
    });
  });

  if (navCta) {
    navCta.addEventListener('click', closeMenuIfOpen);
  }

  // ==========================================
  // 5. ANIMASI FADE-IN SECTION (ON SCROLL)
  // ==========================================
  const fadeSections = document.querySelectorAll('.fade-in-section');

  const fadeObserverOptions = {
    root: null,
    threshold: 0.15
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, fadeObserverOptions);

  fadeSections.forEach(section => {
    fadeObserver.observe(section);
  });

  // ==========================================
  // 6. TOGGLE EXPAND LATEST WORKS (PORTFOLIO)
  // ==========================================
  const loadMoreBtn = document.getElementById('loadMoreProjects');
  const worksGrid = document.querySelector('.latest-works-grid');

  if (loadMoreBtn && worksGrid) {
    loadMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isShowingAll = worksGrid.classList.contains('show-all');

      if (isShowingAll) {
        worksGrid.classList.remove('show-all');
        loadMoreBtn.classList.remove('active');
        loadMoreBtn.querySelector('span').textContent = 'Lihat Semua';

        // Scroll kembali ke atas section portfolio agar user tidak bingung
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
      } else {
        worksGrid.classList.add('show-all');
        loadMoreBtn.classList.add('active');
        loadMoreBtn.querySelector('span').textContent = 'Sembunyikan';
      }
    });
  }

  // ==========================================
  // 7. INTEGRASI SANITY CMS (FETCH & RENDER)
  // ==========================================
  const initCMS = async () => {
    try {
      const data = await fetchAllContent();
      if (data) {
        renderSeo(data.seo);
        renderHero(data.hero);
        renderAbout(data.about, data.siteSettings);
        renderProjects(data.projects);
        renderVideos(data.videos);
        renderExperience(data.experiences, data.expInsert);
        renderContact(data.siteSettings);
        renderFooter(data.siteSettings);
      }
    } catch (error) {
      console.error('Gagal memproses integrasi CMS:', error);
    }
  };

  initCMS();

});
