function init() {
  const sliderContainer = document.querySelector('#testimonials');
  const testimonials = document.querySelectorAll('.testimonial');
  const counter = document.querySelector('#testimonial-counter');
  const prevButton = document.querySelector('#testimonial-prev-btn');
  const nextButton = document.querySelector('#testimonial-next-btn');

  let currentIndex = 1;
  const totalTestimonials = testimonials.length;
  const fadeOutClass = 'animate-fadeOut';
  const fadeInClass = 'animate-fadeIn';

  let isAnimating = false;

  function updateCounter() {
    counter.textContent = `${currentIndex}/${totalTestimonials}`;
    sliderContainer.dataset.active = currentIndex;
  }

  async function slideTestimonial(direction) {
    if (isAnimating) return;

    isAnimating = true;

    const currentTestimonial = testimonials[currentIndex - 1];
    let nextIndex;

    if (direction === 'next') {
      nextIndex = currentIndex === totalTestimonials ? 1 : currentIndex + 1;
    } else {
      nextIndex = currentIndex === 1 ? totalTestimonials : currentIndex - 1;
    }

    const nextTestimonial = testimonials[nextIndex - 1];

    testimonials.forEach(testimonial => {
      testimonial.classList.remove(fadeInClass, fadeOutClass);
    });

    currentTestimonial.classList.add(fadeOutClass);

    await new Promise(resolve => setTimeout(resolve, 500));

    currentTestimonial.classList.add('hidden');
    currentTestimonial.classList.remove(fadeOutClass);

    nextTestimonial.classList.remove('hidden');
    nextTestimonial.classList.add(fadeInClass);

    currentIndex = nextIndex;
    updateCounter();

    setTimeout(() => {
      nextTestimonial.classList.remove(fadeInClass);
      isAnimating = false;
    }, 500);
  }

  prevButton.addEventListener('click', () => slideTestimonial('prev'));
  nextButton.addEventListener('click', () => slideTestimonial('next'));
}

if (location.pathname === '/') init()



