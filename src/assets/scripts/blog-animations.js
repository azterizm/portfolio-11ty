// Initialize GSAP animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Removed: Animate blog cards on scroll
  // The previous code block for gsap.utils.toArray('.blog-card') has been removed.
  
  // Animate decorative elements on hover
  document.querySelectorAll('.blog-card').forEach(card => {
    const decorativeElements = card.querySelectorAll('.absolute.w-24, .absolute.w-16');
    
    card.addEventListener('mouseenter', () => {
      gsap.to(decorativeElements, {
        scale: 1.1,
        rotation: 10,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(decorativeElements, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    });
  });
  
  // Parallax effect for the header
  gsap.to('.text-animate', {
    y: -50,
    scrollTrigger: {
      trigger: '.text-animate',
      start: 'top center',
      end: 'bottom center',
      scrub: 1
    }
  });
});
