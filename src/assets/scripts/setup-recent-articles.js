document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation for the section title
  const recentArticlesTitle = document.querySelector('#recent-articles .text-animate-recent');
  if (recentArticlesTitle) {
    const spans = recentArticlesTitle.querySelectorAll('span');
    gsap.from(spans, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: recentArticlesTitle,
        start: 'top 80%', // When the top of the trigger hits 80% of the viewport
        end: 'bottom top',
        toggleActions: 'play none none none',
      },
    });
  }

  // Animation for the description paragraph
  const recentArticlesDescription = document.querySelector('#recent-articles p.text-xl');
  if (recentArticlesDescription) {
    gsap.from(recentArticlesDescription, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.5, // Delay after title animation starts
      scrollTrigger: {
        trigger: recentArticlesDescription,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  // Animation for each article card
  const articleCards = document.querySelectorAll('.recent-article-item');
  if (articleCards.length > 0) {
    gsap.from(articleCards, {
      opacity: 0,
      y: 50,
      stagger: 0.2, // Stagger the animation for each card
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#recent-articles .grid', // Trigger when the grid container comes into view
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  }

  // Animation for the "See All Articles" button
  const seeAllButton = document.querySelector('#recent-articles a.px-8.py-4');
  if (seeAllButton) {
    gsap.from(seeAllButton, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.5, // Delay after cards animation starts
      scrollTrigger: {
        trigger: seeAllButton,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  }
});
