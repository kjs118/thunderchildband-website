// Toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Shrinking logo on scroll (mobile only)
const header = document.querySelector('header.hero');

window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    if (window.scrollY > 50) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  } else {
    document.body.classList.remove('scrolled');
  }
});
