const btns = document.querySelectorAll('.talk-btn-content')

btns.forEach(btn => {
  btn.parentElement.addEventListener('click', () => {
    const anchor = btn.children?.[0]
    if (!anchor) return
    anchor.click()
  })
})
