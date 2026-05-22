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

/* ─────────────────────────────────────────────────────────
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
      carousel.addEventListener('mouseenter', () => { track.style.animationPlayState = 'paused'; });
      carousel.addEventListener('mouseleave', () => { track.style.animationPlayState = 'running'; });
      carousel.addEventListener('focusin', () => { track.style.animationPlayState = 'paused'; });
      carousel.addEventListener('focusout', () => { track.style.animationPlayState = 'running'; });
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
});
