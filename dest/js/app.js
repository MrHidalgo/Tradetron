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

	var mySwiperPartners = new Swiper('.swiper-container-partners', {
		loop: true,
		watchOverflow: true,
		normalizeSlideIndex: true,
		grabCursor: false,
		freeMode: false,
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
			clickable: true
		}
	});

	var mySwiperFeaturesOpt = {
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

	$(window).on('load resize orientationchange', function () {
		// FEATURES SLIDER OFFSET
		$('.features__carousel').attr('style', 'max-width:calc(100% - ' + $('.features__title').offset().left + 'px);');
		// FEATURES SLIDER OFFSET :: END

		if ($(window).width() < 1024) {
			$('.pricing__carousel').attr('style', 'max-width:calc(100% - ' + $('.pricing__header').offset().left + 'px);');
			mySwiperPricing = new Swiper('.swiper-container-pricing', mySwiperPricingOpt);
		} else {
			if (mySwiperPricing !== undefined) {
				mySwiperPricing.destroy(true, true);
				mySwiperPricing = undefined;
			}

			$('.pricing__carousel').attr('style', '');
		}

		if ($(window).width() < 768) {
			$('.pricing__carousel .swiper-pagination').attr('style', 'width:' + $(window).width() + 'px;');
		} else {
			$('.pricing__carousel .swiper-pagination').attr('style', '');
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
		// ==========================================
		initCollapseButton();
	};
	initJquery();
});