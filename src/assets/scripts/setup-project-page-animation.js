const lines = document.querySelectorAll('.line')
const title = document.getElementById('title')
const details = document.getElementById('details')
const mainImage = document.getElementById('main_image_container')

let detailsRect;
let containerMargin = 0

function onScrolled() {
  if (window.innerWidth < 1024) return
  lines.forEach(line => {
    line.style.width = 'calc(100% / 2.75)'
    line.style.marginLeft = 'auto'
    
    const label = line.nextElementSibling
    const value = label.nextElementSibling
    if (label && value) {
      label.style.gridColumn = '6 / span 3'
      value.style.gridColumn = '6 / span 3'
    }
  })
  title.style.transform = `translateX(${detailsRect.left - containerMargin}px)`
  mainImage.style.opacity = '0'
}

function onUnscrolled() {
  lines.forEach(line => {
    line.style.width = 'calc(100%)'
    line.style.marginLeft = '0'
    
    const label = line.nextElementSibling
    const value = label.nextElementSibling
    if (label && value) {
      label.style.gridColumn = ''
      value.style.gridColumn = ''
    }
  })
  title.style.transform = `translateX(0px)`
  mainImage.style.opacity = '1'
}

document.addEventListener('DOMContentLoaded', () => {
  detailsRect = details.getBoundingClientRect()
  containerMargin = title.getBoundingClientRect().left

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      onScrolled()
    } else {
      onUnscrolled()
    }
  }, false)

  if (window.scrollY > 120 && window.innerWidth >= 1024) {
    onScrolled()
  } else {
    onUnscrolled()
  }
})

document.addEventListener('resize', () => {
  detailsRect = details.getBoundingClientRect()
  containerMargin = title.getBoundingClientRect().left
})


