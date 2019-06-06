

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const mySwiperPartners = new Swiper('.swiper-container-partners', {
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: true,
    effect: 'slide',
    slidesPerView: 5,
    spaceBetween: 50,
		centeredSlides: true,
    breakpoints: {
      1279: {
        slidesPerView: 4,
      },
      1023: {
        slidesPerView: 3,
				spaceBetween: 40,
      },
      575: {
        slidesPerView: 2,
				spaceBetween: 30,
      },
    }
  });
};
