function openMenu() {
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.sidebar-menu')

  burger.addEventListener('click', () => {
    menu.classList.toggle('open')

    if (menu.classList.contains('open')) {
      document.body.style.overflow = 'hidden'
      burger.classList.add('close')
    } else {
      document.body.style.overflow = ''
      burger.classList.remove('close')
    }
  })
}

export default openMenu
