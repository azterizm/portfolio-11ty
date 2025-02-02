// Get the button element
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
}

// Function to toggle button visibility based on scroll position
function toggleScrollToTopButton() {
  if (window.scrollY > 300) { // Show button when user scrolls down 300px
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

// Add event listener to the button
scrollToTopBtn.addEventListener('click', scrollToTop);

// Add event listener to the window to check scroll position
window.addEventListener('scroll', toggleScrollToTopButton);
