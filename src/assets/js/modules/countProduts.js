function countProducts() {
  const btns = document.querySelectorAll('.product__btn')

  btns.forEach((item) => {
    let count = 1
    item.addEventListener('click', (e) => {
      const screenWidth = window.screen.width

      if (screenWidth > 690) {
        item.classList.add('product__btn-count')

        if (e.target.className === 'minus') {
          count--
        }
        if (e.target.className === 'plus') {
          count++
        }

        if (count < 1) {
          count = 1
        }

        item.querySelector('.sum').innerHTML = count
      }
    })
  })
}

export default countProducts
