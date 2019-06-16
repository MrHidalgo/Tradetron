

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

  const mySwiperDisposalOpt = {
		loop: true,
		watchOverflow: true,
		normalizeSlideIndex: true,
		grabCursor: false,
		freeMode: false,
		effect: 'slide',
		speed: 750,
		slidesPerView: 'auto',
		spaceBetween: 15,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		on: {
			slideChangeTransitionStart: function() {
				const _ID = this.$el.find('.swiper-slide-active').data('btn-id');

				$('.disposal__desc').hide();
				$('.disposal__desc[data-text-id="' + _ID + '"]').show();
			}
		}
	};
	let mySwiperDisposal = undefined;

  const mySwiperConditionOpt = {
		loop: false,
		watchOverflow: true,
		normalizeSlideIndex: true,
		grabCursor: false,
		freeMode: false,
		effect: 'slide',
		speed: 750,
		slidesPerView: 'auto',
		spaceBetween: 15,
		centeredSlides: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	};
	let mySwiperCondition = undefined;

  const mySwiperMoreOpt = {
		loop: false,
		watchOverflow: true,
		normalizeSlideIndex: true,
		grabCursor: false,
		freeMode: false,
		effect: 'slide',
		speed: 750,
		slidesPerView: 'auto',
		spaceBetween: 15,
		centeredSlides: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	};
	let mySwiperMore = undefined;

	$(window).on('load resize orientationchange', () => {
		// FEATURES SLIDER OFFSET
		const _featureCarousel = $('.features__carousel'),
			_pricingCarousel = $('.pricing__carousel'),
			_disposalCarousel = $('.disposal__card'),
			_conditionCarousel = $('.condition__carousel'),
			_moreCarousel = $('.more__carousel');

		const _swiperInitDestroy = (nodeCarouselName, windowWidth, swiperName, swiperClassName, swiperOptName) => {
			if (nodeCarouselName.length > 0) {
				if($(window).width() < windowWidth) {
					swiperName = new Swiper(swiperClassName, swiperOptName);
				} else {
					if(swiperName !== undefined) {
						swiperName.destroy(true, true);
						swiperName = undefined;
					}

					nodeCarouselName.attr('style', '');
				}
			}
		};

		if(_featureCarousel.length > 0) {
			_featureCarousel.attr('style', 'max-width:calc(100% - ' + $('.features__title').offset().left + 'px);');
		}
		// FEATURES SLIDER OFFSET :: END

		if(_pricingCarousel.length > 0) {
			if($(window).width() < 1024) {
				_pricingCarousel.attr('style', 'max-width:calc(100% - ' + $('.pricing__header').offset().left + 'px);');
				mySwiperPricing = new Swiper('.swiper-container-pricing', mySwiperPricingOpt);
			} else {
				if(mySwiperPricing !== undefined) {
					mySwiperPricing.destroy(true, true);
					mySwiperPricing = undefined;
				}

				_pricingCarousel.attr('style', '');
			}

			if($(window).width() < 768) {
				$('.pricing__carousel .swiper-pagination').attr('style', 'width:' + $(window).width() + 'px;');
			} else {
				$('.pricing__carousel .swiper-pagination').attr('style', '');
			}
		}

		_swiperInitDestroy(_disposalCarousel, 991, mySwiperDisposal, '.swiper-container-disposal', mySwiperDisposalOpt);
		_swiperInitDestroy(_conditionCarousel, 768, mySwiperCondition, '.swiper-container-condition', mySwiperConditionOpt);
		_swiperInitDestroy(_moreCarousel, 768, mySwiperMore, '.swiper-container-more', mySwiperMoreOpt);
	});

	$(window).on('load', () => {
		mySwiperFeatures = new Swiper('.swiper-container-features', mySwiperFeaturesOpt);
	});
};
