document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.querySelectorAll('.header__nav-item')

  navItems
      .forEach(item => item.addEventListener('mouseover', function () {
        this.childNodes[3].classList.toggle('closed')
      }))

  navItems
      .forEach(item => item.addEventListener('mouseout', function () {
        this.childNodes[3].classList.toggle('closed')
      }))
})


