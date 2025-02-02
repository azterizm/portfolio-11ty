const btn = document.getElementById('nav-icon')
const mobileNav = document.getElementById('mobile-nav')
function handleMenu() {
  btn.classList.toggle('open')
  mobileNav.classList.toggle('pointer-events-none')
  mobileNav.classList.toggle('opacity-0')
}
btn.addEventListener('click', handleMenu)
mobileNav.addEventListener('click', e => {
  console.log(e.target)
  if (e.target?.getAttribute('href')?.startsWith('#') || e.target?.getAttribute('href').startsWith('/#')) {
    handleMenu()
  }
})

