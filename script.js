// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector('.mobile-toggle');
const menu   = document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close menu when link is clicked
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

// Scroll behavior: shrink + freeze header (mobile only)
function handleScroll() {
  if (window.innerWidth > 768) {
    document.body.classList.remove('scrolled');
    return;
  }
  document.body.classList.toggle('scrolled', window.scrollY > 80);
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll(); // initial check
