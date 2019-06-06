

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
    freeMode: false,
    effect: 'slide',
		speed: 750,
    slidesPerView: 6,
    spaceBetween: 50,
		centeredSlides: true,
    breakpoints: {
      1440: {
        slidesPerView: 5,
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

  const mySwiperFeatures = new Swiper('.swiper-container-features', {
    loop: false,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide',
		speed: 750,
    slidesPerView: 7,
    spaceBetween: 20,
		centeredSlides: true,
		navigation: {
			nextEl: '.features__carousel-btn--next',
			prevEl: '.features__carousel-btn--prev',
		},
    // breakpoints: {
    //   1440: {
    //     slidesPerView: 5,
    //   },
    //   1023: {
    //     slidesPerView: 3,
		// 		spaceBetween: 40,
    //   },
    //   575: {
    //     slidesPerView: 2,
		// 		spaceBetween: 30,
    //   },
    // }
  });

  const mySwiperPricingOpt = {
		loop: false,
		watchOverflow: true,
		normalizeSlideIndex: true,
		grabCursor: true,
		freeMode: true,
		effect: 'slide',
		speed: 750,
		slidesPerView: 4,
		spaceBetween: 14,
		navigation: {
			nextEl: 'pricing__carousel-btn--next',
			prevEl: 'pricing__carousel-btn--prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			// renderBullet: function (index, className) {
			//   return `
			//     <div class="${className}">
			//       ${index}
			//     </div>
			//   `;
			// }
		},
	};
	let mySwiperPricing = undefined;

	$(window).on('load resize orientationchange', () => {
		if($(window).width() < 768) {
			mySwiperPricing = new Swiper('.swiper-container-pricing', mySwiperPricingOpt);
		} else {
			if(mySwiperPricing !== undefined) {
				mySwiperPricing.destroy(true, true);
				mySwiperPricing = undefined;
			}
		}
	});
};
