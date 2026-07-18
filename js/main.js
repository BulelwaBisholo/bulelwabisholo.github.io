/* =========================================================================
   BULELWA BISHOLO — DATA ANALYST PORTFOLIO
   main.js — shared behaviour for every page (home + all project pages)

   Everything below checks for element existence before binding, so this
   single file can be safely included on every HTML page regardless of
   which sections that page actually has.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initThemeToggle();
  initMobileNav();
  initScrollSpyNav();
  initBackToTop();
  initRevealAnimations();
  initProjectTOC();
  initFooterYear();
});

/* -------------------------------------------------------------------------
   PRELOADER
   Hides the loading screen once the page has finished loading (or after a
   short minimum delay so it doesn't just "flash" on fast connections).
------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.querySelector("[data-preloader]");
  if (!preloader) return;

  const hide = () => preloader.classList.add("is-hidden");
  const minDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 550;

  window.addEventListener("load", () => setTimeout(hide, minDelay));
  // Fallback in case 'load' already fired or is slow to fire
  setTimeout(hide, 2500);
}

/* -------------------------------------------------------------------------
   DARK MODE TOGGLE
   Persists preference in localStorage; falls back to OS preference on
   first visit.
------------------------------------------------------------------------- */
function initThemeToggle() {
  const root = document.documentElement;
  const toggleButtons = document.querySelectorAll("[data-theme-toggle]");
  const STORAGE_KEY = "bb-portfolio-theme";

  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  if (!toggleButtons.length) return;

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", current);
      localStorage.setItem(STORAGE_KEY, current);
    });
  });
}

/* -------------------------------------------------------------------------
   MOBILE NAVIGATION (hamburger menu)
------------------------------------------------------------------------- */
function initMobileNav() {
  const burger = document.querySelector("[data-nav-burger]");
  const links = document.querySelector("[data-nav-links]");
  const nav = document.querySelector(".nav");
  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after a link is tapped
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  // Add background once page is scrolled (applies on every page)
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
}

/* -------------------------------------------------------------------------
   SCROLLSPY — highlights the active section link in the main nav
   (home page only: Home / About / Skills / Projects / Contact)
------------------------------------------------------------------------- */
function initScrollSpyNav() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  if (!sections.length || !navLinks.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* -------------------------------------------------------------------------
   BACK TO TOP BUTTON
------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector("[data-back-to-top]");
  if (!btn) return;

  const toggleVisibility = () => btn.classList.toggle("is-visible", window.scrollY > 480);
  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* -------------------------------------------------------------------------
   SCROLL REVEAL ANIMATIONS
   Add class="reveal" (fade + rise) or class="reveal-stagger" (staggers
   direct children) to any element to animate it into view on scroll.
------------------------------------------------------------------------- */
function initRevealAnimations() {
  const targets = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!targets.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((t) => observer.observe(t));
}

/* -------------------------------------------------------------------------
   PROJECT PAGE — sticky table-of-contents scrollspy
------------------------------------------------------------------------- */
function initProjectTOC() {
  const tocLinks = document.querySelectorAll(".project-toc a[href^='#']");
  const caseSections = document.querySelectorAll(".case-section[id]");
  if (!tocLinks.length || !caseSections.length) return;

  const setActive = (id) => {
    tocLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );

  caseSections.forEach((section) => observer.observe(section));
}

/* -------------------------------------------------------------------------
   FOOTER — auto-update copyright year
------------------------------------------------------------------------- */
function initFooterYear() {
  const el = document.querySelector("[data-current-year]");
  if (el) el.textContent = new Date().getFullYear();
}
