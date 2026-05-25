/**
 * ZUPHARM LABORATORIES — main.js
 *
 * Modules:
 *   1.  Announcement Bar — close / dismiss
 *   2.  Mobile Hamburger — toggle drawer
 *   3.  Mobile Drawer — close on link click
 *   4.  Navigation Pill — active link highlight on scroll
 *   5.  Stat Counter Animation — counts up on viewport entry
 *   6.  Header Shadow — deeper shadow on scroll
 *   7.  Smooth-scroll offset — compensates for sticky header height
 */

'use strict';

/* ─────────────────────────────────────────────────────────a
   Helpers
───────────────────────────────────────────────────────── */

/**
 * Run callback once the DOM is fully parsed.
 * @param {Function} fn
 */
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

/**
 * Get computed total header height in pixels.
 * Used to offset anchor scroll positions.
 * @returns {number}
 */
function getHeaderHeight() {
  const header = document.getElementById('site-header');
  return header ? header.offsetHeight : 0;
}


/* ─────────────────────────────────────────────────────────
   1. ANNOUNCEMENT BAR — Close / Dismiss
───────────────────────────────────────────────────────── */
function initAnnounceBar() {
  const bar   = document.querySelector('.header-announce');
  const btn   = document.getElementById('announceClose');
  if (!bar || !btn) return;

  btn.addEventListener('click', () => {
    bar.classList.add('hidden');
    // Remember dismissal for the session
    sessionStorage.setItem('announceDismissed', '1');
  });

  // Restore dismissed state on re-load within same session
  if (sessionStorage.getItem('announceDismissed') === '1') {
    bar.classList.add('hidden');
  }
}


/* ─────────────────────────────────────────────────────────
   2. MOBILE HAMBURGER — Toggle Drawer
───────────────────────────────────────────────────────── */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('mobileDrawer');
  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    // Prevent body scroll when drawer is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}


/* ─────────────────────────────────────────────────────────
   3. MOBILE DRAWER — Close on Link Click
───────────────────────────────────────────────────────── */
function initMobileDrawerLinks() {
  const links     = document.querySelectorAll('.mob-link, .mob-cta');
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('mobileDrawer');
  if (!drawer) return;

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      if (hamburger) hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


/* ─────────────────────────────────────────────────────────
   4. NAVIGATION PILL — Active Link on Scroll
───────────────────────────────────────────────────────── */
function initActiveNav() {
  const links    = document.querySelectorAll('.nav-link');
  const sections = [];

  // Collect section targets from nav hrefs
  links.forEach(link => {
    const id = link.getAttribute('href')?.replace('#', '');
    const el = id ? document.getElementById(id) : null;
    if (el) sections.push({ id, el, link });
  });

  if (!sections.length) return;

  function updateActive() {
    const scrollY      = window.scrollY;
    const headerHeight = getHeaderHeight();
    let current        = null;

    sections.forEach(({ el, id }) => {
      const top = el.getBoundingClientRect().top + scrollY - headerHeight - 20;
      if (scrollY >= top) current = id;
    });

    links.forEach(link => link.classList.remove('active'));
    if (current) {
      const activeLink = document.querySelector(`.nav-link[href="#${current}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive(); // Run on load
}


/* ─────────────────────────────────────────────────────────
   5. STAT COUNTER ANIMATION
      Triggers count-up when each [data-count] element
      enters the viewport. Uses IntersectionObserver.
───────────────────────────────────────────────────────── */
function initCounters() {
  const targets = document.querySelectorAll('[data-count]');
  if (!targets.length) return;

  /**
   * Animate a number from 0 to `target` over ~1.4 seconds.
   * @param {HTMLElement} el    - Element whose textContent to update
   * @param {number}      target - Final number value
   */
  function animateCount(el, target) {
    const duration  = 1400;            // ms
    const frameRate = 16;              // ~60 fps
    const totalFrames = duration / frameRate;
    let   frame     = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease-out curve: fast start, slow end
      const progress = frame / totalFrames;
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.round(eased * target);

      el.textContent = current;

      if (frame >= totalFrames) {
        el.textContent = target; // ensure exact final value
        clearInterval(timer);
      }
    }, frameRate);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.count, 10);
      if (!isNaN(target)) animateCount(el, target);
      observer.unobserve(el);           // fire once
    });
  }, { threshold: 0.6 });

  targets.forEach(el => observer.observe(el));
}


/* ─────────────────────────────────────────────────────────
   6. HEADER SHADOW — Deepen on Scroll
───────────────────────────────────────────────────────── */
function initHeaderShadow() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const pill = header.querySelector('.nav-pill');

  function updateShadow() {
    if (window.scrollY > 60) {
      if (pill) pill.style.boxShadow = '0 4px 32px rgba(0, 0, 0, 0.14)';
    } else {
      if (pill) pill.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.06)';
    }
  }

  window.addEventListener('scroll', updateShadow, { passive: true });
}


/* ─────────────────────────────────────────────────────────
   7. SMOOTH SCROLL — Offset for Sticky Header
      Overrides default anchor jump so content is not
      hidden under the multi-layer sticky header.
───────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const offset     = getHeaderHeight() + 16; // 16px breathing room
      const targetTop  = targetEl.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────────────────────
   8. MANUFACTURING PAGE – Tabs, Accordion, Carousel, Download
   ───────────────────────────────────────────────────────── */
function initManufacturingPage() {
  // Tabs with keyboard accessibility (arrow navigation)
  const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Track modal open state
  let isModalOpen = false;

  if (tabButtons.length > 0) {
    function selectTab(index) {
      tabButtons.forEach((btn, idx) => {
        const isActive = idx === index;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        btn.setAttribute('tabindex', isActive ? '0' : '-1');
        if (isActive && document.activeElement && document.activeElement !== document.body) {
          btn.focus();
        }
      });
      
      tabContents.forEach((content, idx) => {
        content.classList.toggle('active', idx === index);
      });
    }

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => selectTab(index));
      btn.addEventListener('keydown', (e) => {
        let nextIndex = index;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          nextIndex = (index + 1) % tabButtons.length;
          e.preventDefault();
          selectTab(nextIndex);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
          e.preventDefault();
          selectTab(nextIndex);
        } else if (e.key === 'Home') {
          e.preventDefault();
          selectTab(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          selectTab(tabButtons.length - 1);
        }
      });
    });
  }

  // Accordion Expand/Collapse
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', !expanded);
      const body = header.nextElementSibling;
      if (body) {
        if (!expanded) body.classList.add('open'); else body.classList.remove('open');
      }
    });
  });

  // Carousel pause on hover / focus
  const carousel = document.querySelector('.cert-carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    if (track) {
      carousel.addEventListener('mouseenter', () => {
        if (!isModalOpen) track.style.animationPlayState = 'paused';
      });
      carousel.addEventListener('mouseleave', () => {
        if (!isModalOpen) track.style.animationPlayState = 'running';
      });
      carousel.addEventListener('focusin', () => {
        if (!isModalOpen) track.style.animationPlayState = 'paused';
      });
      carousel.addEventListener('focusout', () => {
        if (!isModalOpen) track.style.animationPlayState = 'running';
      });
    }
  }

  // Download button with animated loading/success state
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (downloadBtn.classList.contains('loading') || downloadBtn.classList.contains('success')) return;
      
      const file = downloadBtn.getAttribute('data-file');
      
      // Enter loading state
      downloadBtn.classList.add('loading');
      
      setTimeout(() => {
        // Switch to success checkmark state
        downloadBtn.classList.remove('loading');
        downloadBtn.classList.add('success');
        
        // Trigger simulated/actual file download
        if (file) {
          const a = document.createElement('a');
          a.href = file;
          a.download = file.split('/').pop() || 'brochure.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
        
        // Reset button state after success message duration
        setTimeout(() => {
          downloadBtn.classList.remove('success');
        }, 1500);
        
      }, 1500);
    });
  }

  // Certification Modal Handler
  const certificationData = {
    'who-gmp': {
      title: 'WHO-GMP',
      subtitle: 'World Health Organization - Good Manufacturing Practice',
      icon: '<i class="fas fa-award"></i>',
      about: 'WHO-GMP (World Health Organization Good Manufacturing Practice) is an international standard that sets the minimum requirements for pharmaceutical manufacturing facilities. It ensures that medicines are produced with consistent quality and safety standards.',
      purpose: 'WHO-GMP certification ensures that pharmaceutical products are manufactured under controlled conditions, meeting internationally recognized quality and safety standards. It protects consumers by guaranteeing product quality and purity.',
      requirements: [
        'Adequate facility design and construction',
        'Qualified and trained personnel',
        'Proper equipment validation and maintenance',
        'Standard operating procedures for all processes',
        'Raw material quality control',
        'In-process and finished product testing',
        'Proper documentation and record keeping',
        'Regular internal audits and self-inspections'
      ],
      benefits: [
        'Global market access and international credibility',
        'Assurance of consistent product quality',
        'Reduced contamination and defect risks',
        'Enhanced patient safety and trust',
        'Regulatory compliance across markets',
        'Competitive advantage in pharmaceutical industry',
        'Employee safety and well-being standards',
        'Prevention of counterfeit medicines'
      ],
      authority: 'World Health Organization (WHO) - United Nations specialized agency for health'
    },
    'iso-9001': {
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management System Standard',
      icon: '<i class="fas fa-certificate"></i>',
      about: 'ISO 9001:2015 is an international standard for quality management systems. It provides a framework for organizations to establish and maintain processes that ensure consistent product and service quality.',
      purpose: 'ISO 9001 ensures customer satisfaction through the effective application of quality management principles. It demonstrates an organization\'s commitment to quality and continuous improvement across all operations.',
      requirements: [
        'Context of the organization understanding',
        'Leadership commitment to quality',
        'Risk-based approach to quality',
        'Process approach to management',
        'Customer focus and satisfaction',
        'Competence and training of personnel',
        'Operational planning and control',
        'Performance evaluation and improvement'
      ],
      benefits: [
        'Enhanced customer satisfaction and loyalty',
        'Improved operational efficiency',
        'Reduced waste and defects',
        'Better risk management',
        'Increased employee engagement',
        'Access to new markets',
        'Competitive advantage',
        'Demonstrated commitment to excellence'
      ],
      authority: 'International Organization for Standardization (ISO)'
    },
    'cdsco': {
      title: 'CDSCO',
      subtitle: 'Central Drugs Standard Control Organization',
      icon: '<i class="fas fa-file-contract"></i>',
      about: 'CDSCO (Central Drugs Standard Control Organization) is the national regulatory authority in India responsible for approval of drugs, pharmaceutical products, and medical devices. It ensures that all medicines meet safety, efficacy, and quality standards.',
      purpose: 'CDSCO approval is mandatory in India to ensure that pharmaceutical products are safe, effective, and of high quality. It protects public health by preventing unsafe medicines from entering the market.',
      requirements: [
        'Complete drug dossier submission',
        'Preclinical and clinical trial data',
        'Manufacturing process documentation',
        'Quality control parameters',
        'Stability data and shelf-life studies',
        'Post-marketing surveillance plan',
        'Expert committee evaluation',
        'Regular compliance inspections'
      ],
      benefits: [
        'Legal approval to manufacture and distribute drugs in India',
        'Access to Indian pharmaceutical market',
        'Public health protection',
        'Consumer confidence and trust',
        'Regulatory compliance with Indian law',
        'Prevention of adulterated medicines',
        'Export capability to regulated markets',
        'Credibility with healthcare professionals'
      ],
      authority: 'Ministry of Health and Family Welfare, Government of India'
    },
    'schedule-m': {
      title: 'Schedule M+',
      subtitle: 'D&C Act Compliance for Pharmaceutical Manufacturing',
      icon: '<i class="fas fa-heartbeat"></i>',
      about: 'Schedule M+ specifies the standards for the manufacturing of pharmaceutical products in India. It outlines requirements for premises, plant, equipment, personnel, production processes, and quality control. It\'s part of the Drugs and Cosmetics Act, 1940.',
      purpose: 'Schedule M+ ensures that pharmaceutical manufacturers maintain high manufacturing standards, follow good manufacturing practices, and implement quality control measures to protect consumer health.',
      requirements: [
        'Suitable and well-maintained manufacturing premises',
        'Personnel training and qualification',
        'Raw material quality verification',
        'Manufacturing process validation',
        'In-process quality control checks',
        'Finished product testing',
        'Proper documentation and record maintenance',
        'Environmental monitoring'
      ],
      benefits: [
        'Compliance with Indian pharmaceutical regulations',
        'Manufacturing license eligibility',
        'Enhanced product quality assurance',
        'Reduced product recalls and adverse effects',
        'Credibility with regulatory authorities',
        'Export market opportunities',
        'Professional manufacturing standards',
        'Customer trust and brand reputation'
      ],
      authority: 'Central Drugs Standard Control Organization (CDSCO), Ministry of Health and Family Welfare'
    },
    'fssai': {
      title: 'FSSAI',
      subtitle: 'Food Safety and Standards Authority of India',
      icon: '<i class="fas fa-apple-alt"></i>',
      about: 'FSSAI (Food Safety and Standards Authority of India) is a statutory authority that implements food safety standards in India. For pharmaceutical companies producing nutritional supplements and herbal products, FSSAI approval ensures safety and quality.',
      purpose: 'FSSAI approval ensures that food and nutritional products are safe for human consumption, properly labeled, and free from harmful contaminants and additives.',
      requirements: [
        'Facility registration with FSSAI',
        'Compliance with food safety standards',
        'Proper labeling and packaging',
        'Ingredient verification and sourcing',
        'Manufacturing hygiene standards',
        'Product testing and analysis',
        'Allergen management',
        'Traceability and recall procedures'
      ],
      benefits: [
        'Manufacturing and distribution authorization in India',
        'Product safety certification',
        'Consumer protection and health assurance',
        'Market access for nutritional and herbal products',
        'Export opportunities for food and health products',
        'Brand credibility and consumer trust',
        'Compliance with food safety regulations',
        'Prevention of food-borne diseases'
      ],
      authority: 'Ministry of Health and Family Welfare, Government of India'
    }
  };

  function initCertificationModal() {
    const overlay = document.getElementById('certModalOverlay');
    const modal = document.getElementById('certModal');
    const closeBtn = document.getElementById('certModalClose');
    const cards = document.querySelectorAll('.cert-logo-card');
    const track = carousel ? carousel.querySelector('.carousel-track') : null;

    if (!overlay || !modal) return;

    function openModal(certId) {
      const data = certificationData[certId];
      if (!data) return;

      isModalOpen = true;

      // Pause carousel track
      if (track) track.style.animationPlayState = 'paused';

      // Populate modal
      document.getElementById('certModalIcon').innerHTML = data.icon;
      document.getElementById('certModalTitle').textContent = data.title;
      document.getElementById('certModalSubtitle').textContent = data.subtitle;
      document.getElementById('certAbout').textContent = data.about;
      document.getElementById('certPurpose').textContent = data.purpose;
      document.getElementById('certAuthority').textContent = data.authority;

      // Populate requirements list
      const requirementsList = document.getElementById('certRequirements');
      requirementsList.innerHTML = '';
      data.requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        requirementsList.appendChild(li);
      });

      // Populate benefits list
      const benefitsList = document.getElementById('certBenefits');
      benefitsList.innerHTML = '';
      data.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
      });

      // Open modal
      overlay.classList.add('open');
      overlay.classList.remove('closing');
      modal.focus();
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.add('closing');
      setTimeout(() => {
        overlay.classList.remove('open', 'closing');
        document.body.style.overflow = '';
        isModalOpen = false;
        // Resume carousel track if mouse is not currently hovering/focusing
        if (track) {
          const isHovered = carousel.matches(':hover');
          const isFocused = carousel.matches(':focus-within');
          if (!isHovered && !isFocused) {
            track.style.animationPlayState = 'running';
          } else {
            track.style.animationPlayState = 'paused';
          }
        }
      }, 300);
    }

    // Card click handlers
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const certId = card.getAttribute('data-cert');
        openModal(certId);
      });
    });

    // Close button
    closeBtn.addEventListener('click', closeModal);

    // Overlay click to close
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    // Keyboard escape to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // Initialize the modal immediately in the manufacturing page context
  initCertificationModal();
}


/* ─────────────────────────────────────────────────────────
   INITIALISE ALL MODULES
───────────────────────────────────────────────────────── */
ready(() => {
  initAnnounceBar();
  initHamburger();
  initMobileDrawerLinks();
  initActiveNav();
  initCounters();
  initHeaderShadow();
  initSmoothScroll();
  // Initialise manufacturing page components if present
  if (typeof initManufacturingPage === 'function') initManufacturingPage();
  // Initialise lightbox for clickable images
  initImageLightbox();
});

/**
 * Lightbox functionality for images wrapped in .image-link
 * Opens a modal overlay displaying the larger image.
 */
function initImageLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const img = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  if (!overlay || !img || !closeBtn) return;

  // Open on click of any link with class image-link
  document.querySelectorAll('a.image-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const largeSrc = link.getAttribute('href');
      const alt = link.querySelector('img')?.getAttribute('alt') || '';
      img.src = largeSrc;
      img.alt = alt;
      overlay.style.display = 'flex';
    });
  });

  // Close handlers
  const close = () => {
    overlay.style.display = 'none';
    img.src = '';
    img.alt = '';
  };
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });
}

