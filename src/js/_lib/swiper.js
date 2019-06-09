

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
    grabCursor: false,
    freeMode: false,
    effect: 'slide',
		speed: 4000,
		autoplay: {
		  delay: 0,
			disableOnInteraction: false,
		},
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

	const mySwiperMain = new Swiper('.swiper-container-main', {
		loop: false,
		watchOverflow: true,
		normalizeSlideIndex: true,
		grabCursor: true,
		freeMode: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

  const mySwiperFeaturesOpt = {
		loop: false,
		watchOverflow: true,
		normalizeSlideIndex: true,
		grabCursor: false,
		freeMode: false,
		effect: 'slide',
		speed: 750,
		slidesPerView: 5,
		spaceBetween: 20,
		centeredSlides: false,
		navigation: {
			nextEl: '.features__carousel-btn--next',
			prevEl: '.features__carousel-btn--prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
		  1365: {
		    slidesPerView: 4,
		  },
		  1023: {
		    slidesPerView: 3,
				spaceBetween: 20,
		  },
		  575: {
		    slidesPerView: 1,
				spaceBetween: 20,
				centeredSlides: true
		  },
		}
	};
	let mySwiperFeatures = undefined;

  const mySwiperPricingOpt = {
		loop: false,
		watchOverflow: true,
		normalizeSlideIndex: true,
		grabCursor: false,
		freeMode: false,
		effect: 'slide',
		speed: 750,
		slidesPerView: 2,
		spaceBetween: 13,
		navigation: {
			nextEl: '.pricing__carousel-btn--next',
			prevEl: '.pricing__carousel-btn--prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			767: {
				slidesPerView: 1,
			},
		}
	};
	let mySwiperPricing = undefined;

	$(window).on('load resize orientationchange', () => {
		// FEATURES SLIDER OFFSET
		$('.features__carousel').attr('style', 'max-width:calc(100% - ' + $('.features__title').offset().left + 'px);');
		// FEATURES SLIDER OFFSET :: END

		if($(window).width() < 1024) {
			$('.pricing__carousel').attr('style', 'max-width:calc(100% - ' + $('.pricing__header').offset().left + 'px);');
			mySwiperPricing = new Swiper('.swiper-container-pricing', mySwiperPricingOpt);
		} else {
			if(mySwiperPricing !== undefined) {
				mySwiperPricing.destroy(true, true);
				mySwiperPricing = undefined;
			}

			$('.pricing__carousel').attr('style', '');
		}

		if($(window).width() < 768) {
			$('.pricing__carousel .swiper-pagination').attr('style', 'width:' + $(window).width() + 'px;');
		} else {
			$('.pricing__carousel .swiper-pagination').attr('style', '');
		}
	});
	$(window).on('load', () => {
		mySwiperFeatures = new Swiper('.swiper-container-features', mySwiperFeaturesOpt);
	});
};
