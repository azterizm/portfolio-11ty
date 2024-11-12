const btn = document.getElementById('nav-icon')
const mobileNav = document.getElementById('mobile-nav')
function handle() {
  btn.classList.toggle('open')
  mobileNav.classList.toggle('pointer-events-none')
  mobileNav.classList.toggle('opacity-0')
}
btn.addEventListener('click', handle)
mobileNav.addEventListener('click', e => {
  if (e.target?.getAttribute('href')?.startsWith('#')) {
    handle()
  }
})

