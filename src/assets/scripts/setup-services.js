
const serviceItems = document.querySelectorAll('.service-item');
let activeService = null;

serviceItems.forEach(item => {
  const header = item.querySelector('.service-header');
  const description = item.querySelector('.service-description');

  let descriptionHeight;

  header.addEventListener('click', function() {
    if (activeService === item) {
      description.style.height = '0px';
      description.classList.remove('active');
      header.classList.remove('pb-8');
      activeService = null;
      return;
    }

    if (activeService) {
      const activeDescription = activeService.querySelector('.service-description');
      const activeHeader = activeService.querySelector('.service-header');
      activeDescription.style.height = '0px';
      activeDescription.classList.remove('active');
      activeHeader.classList.remove('pb-8');
    }

    if (!descriptionHeight) {
      description.style.height = 'auto';
      description.classList.add('active');
      descriptionHeight = description.scrollHeight + 'px';
      description.style.height = '0px';
      description.offsetHeight;
    }

    description.style.height = descriptionHeight;
    description.classList.add('active');
    header.classList.add('pb-8');

    activeService = item;
  });
});

