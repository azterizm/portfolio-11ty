const btn = document.getElementById('nav-icon')
const mobileNav = document.getElementById('mobile-nav')
btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  mobileNav.classList.toggle('pointer-events-none')
  mobileNav.classList.toggle('opacity-0')
})

