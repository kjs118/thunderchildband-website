// ====== MOBILE MENU TOGGLE ======
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// ====== SHRINKING LOGO ON SCROLL (MOBILE ONLY) ======
const header = document.querySelector('header.hero');

function handleScroll() {
  if (window.innerWidth <= 768) {
    if (window.scrollY > 50) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  } else {
    document.body.classList.remove('scrolled');
  }
}

// Run on scroll
window.addEventListener('scroll', handleScroll);

// Optional: run on resize to reset if user resizes screen
window.addEventListener('resize', handleScroll);

// Run initially in case page loads scrolled
handleScroll();
