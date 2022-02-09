import { lazyLoadInstance } from './modules/lazy'
import { isWebp } from './modules/webp'
import countProducts from './modules/countProduts'
import slider from './modules/slider'
import openMenu from './modules/burger'
import showItems from './modules/showBtn'
import mobileMenu from './modules/mobileMenu'

isWebp()
document.addEventListener('DOMContentLoaded', () => {
  lazyLoadInstance.update()
  countProducts()
  openMenu()
  slider()
  showItems()
  mobileMenu()

  const ButtonsInFooter = document.querySelectorAll('.footer__item-title')

  ButtonsInFooter.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('footer__item-title-open')
    })
  })
})
