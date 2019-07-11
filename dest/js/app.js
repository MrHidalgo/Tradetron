"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	btn.addEventListener("click", function (ev) {
		var elem = ev.currentTarget;

		elem.classList.toggle("is-active");
		mobileContainer.classList.toggle("is-open");

		hideScrollContainer.forEach(function (val, idx) {
			val.classList.toggle("is-hideScroll");
		});
	});
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = $(window).scrollTop(),
	    headerElement = $('.header');

	if (countScroll > 10) {
		headerElement.addClass("header--fixed");
	} else {
		headerElement.removeClass("header--fixed");
	}
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

	svg4everybody();
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

	var mySwiperUProfileCreated = new Swiper('.swiper-container-created', {
		loop: true,
		grabCursor: true,
		effect: 'slide',
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});

	var mySwiperUProfileSubscribed = new Swiper('.swiper-container-subscribed', {
		loop: true,
		grabCursor: true,
		effect: 'slide',
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});

	var mySwiperPartners = new Swiper('.swiper-container-partners', {
		loop: true,
		effect: 'slide',
		speed: 4000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false
		},
		slidesPerView: 6,
		spaceBetween: 50,
		centeredSlides: true,
		breakpoints: {
			1440: {
				slidesPerView: 5
			},
			1023: {
				slidesPerView: 3,
				spaceBetween: 40
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		}
	});

	var mySwiperMain = new Swiper('.swiper-container-main', {
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
			clickable: true
		}
	});

	var mySwiperFeaturesOpt = {
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
			prevEl: '.features__carousel-btn--prev'
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			1365: {
				slidesPerView: 4
			},
			1023: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			767: {
				slidesPerView: 2
			},
			575: {
				slidesPerView: 1,
				spaceBetween: 20,
				centeredSlides: true
			}
		}
	};
	var mySwiperFeatures = undefined;

	var mySwiperPricingOpt = {
		loop: false,
		grabCursor: false,
		freeMode: false,
		effect: 'slide',
		speed: 750,
		slidesPerView: 2,
		spaceBetween: 13,
		navigation: {
			nextEl: '.pricing__carousel-btn--next',
			prevEl: '.pricing__carousel-btn--prev'
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			767: {
				slidesPerView: 1
			}
		}
	};
	var mySwiperPricing = undefined;

	var mySwiperDisposalOpt = {
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
			clickable: true
		},
		on: {
			slideChangeTransitionStart: function slideChangeTransitionStart() {
				var _ID = this.$el.find('.swiper-slide-active').data('btn-id');

				$('.disposal__desc').hide();
				$('.disposal__desc[data-text-id="' + _ID + '"]').show();
			}
		}
	};
	var mySwiperDisposal = undefined;

	var mySwiperConditionOpt = {
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
			clickable: true
		}
	};
	var mySwiperCondition = undefined;

	var mySwiperMoreOpt = {
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
			clickable: true
		}
	};
	var mySwiperMore = undefined;

	var mySwiperVisitedOpt = {
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
			clickable: true
		}
	};
	var mySwiperVisited = undefined;

	var mySwiperFollowersOpt = {
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
			clickable: true
		}
	};
	var mySwiperFollowers = undefined;

	var mySwiperSubscribersOpt = {
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
			clickable: true
		}
	};
	var mySwiperSubscribers = undefined;

	$(window).on('load resize orientationchange', function () {
		// FEATURES SLIDER OFFSET
		var _featureCarousel = $('.features__carousel'),
		    _pricingCarousel = $('.pricing__carousel'),
		    _disposalCarousel = $('.disposal__card'),
		    _conditionCarousel = $('.condition__carousel'),
		    _moreCarousel = $('.more__carousel');

		if (_featureCarousel.length > 0) {
			_featureCarousel.attr('style', 'max-width:calc(100% - ' + $('.features__title').offset().left + 'px);');
		}
		// FEATURES SLIDER OFFSET :: END

		if (_pricingCarousel.length > 0) {
			if ($(window).width() < 1024) {
				_pricingCarousel.attr('style', 'max-width:calc(100% - ' + $('.pricing__header').offset().left + 'px);');
				mySwiperPricing = new Swiper('.swiper-container-pricing', mySwiperPricingOpt);
			} else {
				if (mySwiperPricing !== undefined) {
					mySwiperPricing.destroy(true, true);
					mySwiperPricing = undefined;
				}

				_pricingCarousel.attr('style', '');
			}

			if ($(window).width() < 768) {
				$('.pricing__carousel .swiper-pagination').attr('style', 'width:' + $(window).width() + 'px;');
			} else {
				$('.pricing__carousel .swiper-pagination').attr('style', '');
			}
		}

		if (_disposalCarousel.length > 0) {
			if ($(window).width() < 991) {
				mySwiperDisposal = new Swiper('.swiper-container-disposal', mySwiperDisposalOpt);
			} else {
				if (mySwiperDisposal !== undefined) {
					mySwiperDisposal.destroy(true, true);
					mySwiperDisposal = undefined;
				}

				_disposalCarousel.attr('style', '');
			}
		}

		if (_conditionCarousel.length > 0) {
			if ($(window).width() < 768) {
				mySwiperCondition = new Swiper('.swiper-container-condition', mySwiperConditionOpt);
			} else {
				if (mySwiperCondition !== undefined) {
					mySwiperCondition.destroy(true, true);
					mySwiperCondition = undefined;
				}

				_conditionCarousel.attr('style', '');
			}
		}

		if (_moreCarousel.length > 0) {
			if ($(window).width() < 768) {
				mySwiperMore = new Swiper('.swiper-container-more', mySwiperMoreOpt);
			} else {
				if (mySwiperMore !== undefined) {
					mySwiperMore.destroy(true, true);
					mySwiperMore = undefined;
				}

				_moreCarousel.attr('style', '');
			}
		}

		if ($('.s-profile__followers-block-wrapper').length > 0) {
			if ($(window).width() < 768) {
				mySwiperFollowers = new Swiper('.swiper-container-followers', mySwiperFollowersOpt);
			} else {
				if (mySwiperFollowers !== undefined) {
					mySwiperFollowers.destroy(true, true);
					mySwiperFollowers = undefined;
				}

				$('.s-profile__followers-block-wrapper').find('.swiper-wrapper').attr('style', '');
			}
		}

		if ($('.s-profile__visited-block-wrapper').length > 0) {
			if ($(window).width() < 768) {
				mySwiperVisited = new Swiper('.swiper-container-visited', mySwiperVisitedOpt);
			} else {
				if (mySwiperVisited !== undefined) {
					mySwiperVisited.destroy(true, true);
					mySwiperVisited = undefined;
				}

				$('.s-profile__visited-block-wrapper').find('.swiper-wrapper').attr('style', '');
			}
		}

		if ($('.subscribers__self-block-wrapper').length > 0) {
			if ($(window).width() < 992) {
				mySwiperSubscribers = new Swiper('.swiper-container-subscribers', mySwiperSubscribersOpt);
			} else {
				if (mySwiperSubscribers !== undefined) {
					mySwiperSubscribers.destroy(true, true);
					mySwiperSubscribers = undefined;
				}

				$('.subscribers__self-block-wrapper').find('.swiper-wrapper').attr('style', '');
			}
		}
	});

	$(window).on('load', function () {
		mySwiperFeatures = new Swiper('.swiper-container-features', mySwiperFeaturesOpt);
	});
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

	/**
   * @description
  */
	WebFont.load({
		google: {
			families: ['Poppins:100,200,300,400,500,600,700,800,900']
		}
	});

	/**
   * @description
  */
	// const WebFontConfig = {
	//   custom: {
	//     families: [
	//       'Lato:n1,n3,n4,n5,n6,n7,n9'
	//     ]
	//   }
	// };
};

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {
	initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
	/**
  *
  * @type {*|jQuery|HTMLElement}
  * @private
  */
	var _document = $(document),
	    _window = $(window);

	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var initCollapseButton = function initCollapseButton() {
		$('.accordion button').on('click', function (ev) {
			$(ev.currentTarget).toggleClass('is-active');
		});
	};

	var initFeaturesDisposalCard = function initFeaturesDisposalCard() {
		$('.disposal__card .card').on('click', function (ev) {
			var _btn = $(ev.currentTarget),
			    _btnID = _btn.data('btn-id');

			if ($(window).width() > 991) {
				$('.disposal__card .card').removeClass('is-active');
				_btn.addClass('is-active');

				$('.disposal__desc').hide();
				$('.disposal__desc[data-text-id="' + _btnID + '"]').show();
			}
		});
	};

	var initModalTabs = function initModalTabs() {
		$('.modal__tabs').on('click', function (ev) {
			var _el = $(ev.currentTarget),
			    _elID = _el.data('btntabs-id'),
			    _parentNode = _el.closest('.modal__tabs-wrapper');

			_parentNode.find('.modal__tabs').removeClass('is-active');
			_el.addClass('is-active');

			_parentNode.find('.modal__tabs-content').removeClass('is-active');
			_parentNode.find('.modal__tabs-content[data-contenttabs="' + _elID + '"]').addClass('is-active');
		});
	};

	var initStrategyTabs = function initStrategyTabs() {
		$('.strategy__tabs a').on('click', function (ev) {
			$('.strategy__tabs a').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};

	var initSubscribersTabs = function initSubscribersTabs() {
		$('.subscribers__tabs-btn').on('click', function (ev) {
			$('.subscribers__tabs-btn').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};

	var initStrategyCardBadge = function initStrategyCardBadge() {
		$('.strategy__card-badge a').on('click', function (ev) {
			$(ev.currentTarget).toggleClass('is-active');
		});
	};

	var initStrategyFilterToggle = function initStrategyFilterToggle() {
		$('.strategy__option-btn').not('[data-toggle="modal"]').on('click', function (ev) {
			$('.strategy__filter').addClass('is-open');
		});
		$('.strategy__filter-close').on('click', function (ev) {
			$('.strategy__filter').removeClass('is-open');
		});
	};

	var initStrategyFilterRating = function initStrategyFilterRating() {
		var _ratingBtn = $('.strategy__filter-rating a');

		_ratingBtn.hover(function (ev) {
			_ratingBtn.removeClass('is-hover');

			$(ev.currentTarget).prevAll().addClass('is-hover');
			$(ev.currentTarget).addClass('is-hover');
		}, function (ev) {
			_ratingBtn.removeClass('is-hover');
		});

		_ratingBtn.on('click', function (ev) {
			_ratingBtn.removeClass('is-choose');

			$(ev.currentTarget).prevAll().addClass('is-choose');
			$(ev.currentTarget).addClass('is-choose');
		});
	};

	var initTooltip = function initTooltip() {
		$('[data-toggle="tooltip"]').tooltip();
	};

	var initAccountProfileMenu = function initAccountProfileMenu() {
		$('[aProfile-btn-js]').on('click', function (ev) {
			$('[aProfile-btn-js], [aProfile-dropInnerBtn-js], [aProfile-dropBtn-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});

		$('[aProfile-dropBtn-js]').on('click', function (ev) {
			if ($(ev.target).closest('[aProfile-dropInnerBtn-js]').length === 0) {
				$('[aProfile-btn-js]').removeClass('is-active');
				$(ev.currentTarget).addClass('is-active');
				$(ev.currentTarget).find('.a-profile__menu-drop').slideToggle(350);
			}
		});

		$('[aProfile-dropInnerBtn-js]').on('click', function (ev) {
			$('[aProfile-dropInnerBtn-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @description Init all method
  */
	var initJquery = function initJquery() {
		// default
		initWebFontLoader();
		initPreventBehavior();
		initSvg4everybody();
		// ==========================================

		// lib
		initSwiper();
		initHamburger();
		// ==========================================

		// callback
		initCollapseButton();
		initFeaturesDisposalCard();
		initModalTabs();
		initStrategyTabs();
		initStrategyCardBadge();
		initStrategyFilterToggle();
		initStrategyFilterRating();
		initTooltip();
		initAccountProfileMenu();
		initSubscribersTabs();
		// ==========================================
	};
	initJquery();
});