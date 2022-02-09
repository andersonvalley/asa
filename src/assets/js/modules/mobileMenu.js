function mobileMenu() {
  const menuItem = document.querySelectorAll('.menu__item')

  menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      const children = item.querySelector('.menu__sub')
      if (children) {
        item.classList.add('open')
        if (e.target.className === 'menu__sub-title') {
          item.classList.remove('open')
        }
      }
    })
  })
}

export default mobileMenu
