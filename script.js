// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

btn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Close on link click
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});

// Scroll behavior — EARLY trigger for ZERO JUMP
function handleScroll() {
  if (window.innerWidth > 768) {
    document.body.classList.remove('scrolled');
    return;
  }
  document.body.classList.toggle('scrolled', window.scrollY > 20); // ← EARLY
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();
