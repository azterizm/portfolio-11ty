const btn = document.getElementById('nav-icon')
const mobileNav = document.getElementById('mobile-nav')
const closeBtn = document.getElementById('mobile-nav-close')

function closeMenu() {
  btn.classList.remove('open')
  mobileNav.classList.add('pointer-events-none')
  mobileNav.classList.add('opacity-0')
}

function openMenu() {
  btn.classList.add('open')
  mobileNav.classList.remove('pointer-events-none')
  mobileNav.classList.remove('opacity-0')
}

function handleMenu() {
  if (mobileNav.classList.contains('opacity-0')) {
    openMenu()
  } else {
    closeMenu()
  }
}

btn.addEventListener('click', handleMenu)

if (closeBtn) {
  closeBtn.addEventListener('click', closeMenu)
}

// Close menu when clicking outside the menu content (but not on links/buttons)
mobileNav.addEventListener('mousedown', e => {
  if (e.target === mobileNav) {
    closeMenu()
  }
})

// Close menu when clicking a link inside the menu
mobileNav.querySelectorAll('a,button').forEach(el => {
  el.addEventListener('click', e => {
    // Only close if it's a navigation link or the talk button
    if (
      el.tagName === 'A' ||
      (el.tagName === 'BUTTON' && el.classList.contains('talk-btn-content'))
    ) {
      closeMenu()
    }
  })
})

