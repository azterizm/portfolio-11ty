document.documentElement.classList.add('js');

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('page-wrapper').classList.add('page-load');
});

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.cross-fade-link');

  links.forEach(link => {
    link.addEventListener('click', handleNavigation);
  });
});

function handleNavigation(e) {
  e.preventDefault();
  const targetUrl = e.currentTarget.href;

  const wrapper = document.getElementById('page-wrapper');
  wrapper.style.opacity = '0';

  setTimeout(() => {
    window.location.href = targetUrl;
  }, 500);
}

window.addEventListener('load', () => {
  document.getElementById('page-wrapper').classList.remove('no-fouc');
});

window.addEventListener('popstate', () => {
  const wrapper = document.getElementById('page-wrapper');
  wrapper.style.opacity = '0';

  setTimeout(() => {
    location.reload();
  }, 500);
}); 
