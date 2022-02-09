function showItems() {
  const btnShowMore = document.querySelector('.btn-show')
  const hiddenList = document.querySelector('.menu__item-hidden')
  btnShowMore.addEventListener('click', () => {
    hiddenList.classList.remove('menu__item-hidden')
    btnShowMore.remove()
  })
}

export default showItems
