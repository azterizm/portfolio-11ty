const mainSection = document.getElementById('main')
const content = document.getElementById('content')

function handleLayout() {
  const mainSectionBox = mainSection.getBoundingClientRect()
  content.style.width = mainSectionBox.width + 'px'
}

document.addEventListener('DOMContentLoaded', () => {
  handleLayout()
  window.addEventListener('resize', () => {
    handleLayout()
  })
})



