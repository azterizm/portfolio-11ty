
const mainSection = document.getElementById('main')
const content = document.getElementById('content')
console.log({ mainSection, content })

document.addEventListener('DOMContentLoaded', () => {
  handle()
  window.addEventListener('resize', () => {
    handle()
  })
})

function handle() {
  const mainSectionBox = mainSection.getBoundingClientRect()
  content.style.width = mainSectionBox.width + 'px'
}

