/* ==== CURRENT YEAR ==== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ==== MOBILE MENU TOGGLE ==== */
const navToggle = document.querySelector('.nav-toggle');
const navList   = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

/* Close menu when a link is clicked */
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navList.classList.remove('open'));
});

/* ==== SHRINK + FIX HEADER ON SCROLL (mobile only) ==== */
const header = document.querySelector('header.hero');

function handleScroll() {
  if (window.innerWidth > 768) {
    document.body.classList.remove('scrolled');
    return;
  }

  if (window.scrollY > 80) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();   // initial check
