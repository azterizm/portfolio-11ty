window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', (window.scrollY || window.pageYOffset) / (document.body.offsetHeight - window.innerHeight));

  const talkBtn = document.getElementById('talk-btn')
  if (window.scrollY > 120) {
    talkBtn.classList.remove('translate-x-56')
  } else {
    talkBtn.classList.add('translate-x-56')
  }
}, false)
