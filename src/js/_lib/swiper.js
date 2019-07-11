

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const mySwiperUProfileCreated = new Swiper('.swiper-container-created', {
    loop: true,
    grabCursor: true,
    effect: 'slide',
		speed: 750,
    slidesPerView: 1,
    spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
  });

  const mySwiperUProfileSubscribed = new Swiper('.swiper-container-subscribed', {
    loop: true,
    grabCursor: true,
    effect: 'slide',
		speed: 750,
    slidesPerView: 1,
    spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
  });

  const mySwiperPartners = new Swiper('.swiper-container-partners', {
    loop: true,
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
		  767: {
		    slidesPerView: 2,
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

  const mySwiperVisitedOpt = {
		loop: false,
		grabCursor: true,
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
	let mySwiperVisited = undefined;

  const mySwiperFollowersOpt = {
		loop: false,
		grabCursor: true,
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
	let mySwiperFollowers = undefined;

  const mySwiperSubscribersOpt = {
		loop: false,
		grabCursor: true,
		freeMode: false,
		effect: 'slide',
		speed: 750,
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	};
	let mySwiperSubscribers = undefined;

	$(window).on('load resize orientationchange', () => {
		// FEATURES SLIDER OFFSET
		const _featureCarousel = $('.features__carousel'),
			_pricingCarousel = $('.pricing__carousel'),
			_disposalCarousel = $('.disposal__card'),
			_conditionCarousel = $('.condition__carousel'),
			_moreCarousel = $('.more__carousel');

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

		if (_disposalCarousel.length > 0) {
			if($(window).width() < 991) {
				mySwiperDisposal = new Swiper('.swiper-container-disposal', mySwiperDisposalOpt);
			} else {
				if(mySwiperDisposal !== undefined) {
					mySwiperDisposal.destroy(true, true);
					mySwiperDisposal = undefined;
				}

				_disposalCarousel.attr('style', '');
			}
		}

		if (_conditionCarousel.length > 0) {
			if($(window).width() < 768) {
				mySwiperCondition = new Swiper('.swiper-container-condition', mySwiperConditionOpt);
			} else {
				if(mySwiperCondition !== undefined) {
					mySwiperCondition.destroy(true, true);
					mySwiperCondition = undefined;
				}

				_conditionCarousel.attr('style', '');
			}
		}

		if (_moreCarousel.length > 0) {
			if($(window).width() < 768) {
				mySwiperMore = new Swiper('.swiper-container-more', mySwiperMoreOpt);
			} else {
				if(mySwiperMore !== undefined) {
					mySwiperMore.destroy(true, true);
					mySwiperMore = undefined;
				}

				_moreCarousel.attr('style', '');
			}
		}

		if ($('.s-profile__followers-block-wrapper').length > 0) {
			if($(window).width() < 768) {
				mySwiperFollowers = new Swiper('.swiper-container-followers', mySwiperFollowersOpt);
			} else {
				if(mySwiperFollowers !== undefined) {
					mySwiperFollowers.destroy(true, true);
					mySwiperFollowers = undefined;
				}

				$('.s-profile__followers-block-wrapper').find('.swiper-wrapper').attr('style', '');
			}
		}

		if ($('.s-profile__visited-block-wrapper').length > 0) {
			if($(window).width() < 768) {
				mySwiperVisited = new Swiper('.swiper-container-visited', mySwiperVisitedOpt);
			} else {
				if(mySwiperVisited !== undefined) {
					mySwiperVisited.destroy(true, true);
					mySwiperVisited = undefined;
				}

				$('.s-profile__visited-block-wrapper').find('.swiper-wrapper').attr('style', '');
			}
		}

		if ($('.subscribers__self-block-wrapper').length > 0) {
			if($(window).width() < 992) {
				mySwiperSubscribers = new Swiper('.swiper-container-subscribers', mySwiperSubscribersOpt);
			} else {
				if(mySwiperSubscribers !== undefined) {
					mySwiperSubscribers.destroy(true, true);
					mySwiperSubscribers = undefined;
				}

				$('.subscribers__self-block-wrapper').find('.swiper-wrapper').attr('style', '');
			}
		}
	});

	$(window).on('load', () => {
		mySwiperFeatures = new Swiper('.swiper-container-features', mySwiperFeaturesOpt);
	});
};
