// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector('.mobile-toggle');
const menu   = document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

// Scroll: shrink + freeze
function handleScroll() {
  if (window.innerWidth > 768) {
    document.body.classList.remove('scrolled');
    return;
  }
  document.body.classList.toggle('scrolled', window.scrollY > 80);
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();
