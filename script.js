// Toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Shrinking logo on scroll (mobile only)
const header = document.querySelector('header.hero');
const nav = document.querySelector('nav.sticky');

window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  } else {
    header.classList.remove('shrink');
  }
});
