
const serviceItems = document.querySelectorAll('.service-item');
let activeService = null;

serviceItems.forEach(item => {
  const header = item.querySelector('.service-header');
  const description = item.querySelector('.service-description');
  const plus = item.querySelector('.service-plus');

  header.addEventListener('click', function() {
    const isAlreadyOpen = item === activeService;

    // If there's an open item, close it.
    if (activeService) {
      const activeDescription = activeService.querySelector('.service-description');
      const activeHeader = activeService.querySelector('.service-header');
      const activePlus = activeService.querySelector('.service-plus');

      activeDescription.style.height = '0px';
      activeDescription.classList.remove('active');
      activeHeader.classList.remove('pb-8');
      if (activePlus) {
        activePlus.style.transform = 'rotate(0deg)';
      }
    }

    if (!isAlreadyOpen) {
      // Calculate height and open the clicked item.
      description.style.height = 'auto';
      const descriptionHeight = description.scrollHeight + 'px';
      description.style.height = '0px';
      description.offsetHeight; // Force reflow

      description.style.height = descriptionHeight;
      description.classList.add('active');
      header.classList.add('pb-8');
      if (plus) {
        plus.style.transform = 'rotate(180deg)';
      }

      activeService = item;
    } else {
      activeService = null;
    }
  });
});


window.addEventListener('resize', () => {
  if (activeService) {
    const description = activeService.querySelector('.service-description');
    description.style.transition = 'none'; // Disable transition for instant adjustment
    description.style.height = 'auto';
    description.style.height = description.scrollHeight + 'px';
    description.offsetHeight; // force reflow
    description.style.transition = ''; // Re-enable transition
  }
});

