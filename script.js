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
// ===== LIGHTBOX =====

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-content");
const closeBtn = document.getElementById("lightbox-close");

document.querySelectorAll(".lightbox-img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
