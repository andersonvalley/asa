import Swiper from 'swiper'

function slider() {
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 1.6,
        spaceBetween: 5
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1280: {
        slidesPerView: 5
      },
      1450: {
        slidesPerView: 6
      }
    }
  })
}

export default slider
