// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Toggle mobile nav menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // ScrollReveal Animations
  ScrollReveal().reveal('.hero-content', {
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 200,
    easing: 'ease-out',
    reset: false
  });

  ScrollReveal().reveal('.product-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    interval: 200,
    easing: 'ease-in-out',
    reset: false
  });

  ScrollReveal().reveal('.about-section', {
    origin: 'left',
    distance: '60px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    reset: false
  });

  ScrollReveal().reveal('.site-footer', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    reset: false
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  const toggleScrollButton = () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // Run once on load
  toggleScrollButton();

  // Then run on every scroll
  window.addEventListener("scroll", toggleScrollButton);

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});