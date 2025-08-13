// Initialize GSAP animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Animate blog cards on scroll
  gsap.utils.toArray('.blog-card').forEach((card, index) => {
    gsap.fromTo(card, 
      {
        opacity: 0,
        y: 60,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
  
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
