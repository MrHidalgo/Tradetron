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
    grabCursor: true,
    freeMode: false,
    effect: 'slide',
    speed: 750,
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

  var mySwiperFeatures = new Swiper('.swiper-container-features', {
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
      prevEl: '.features__carousel-btn--prev'
    }
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

  var mySwiperPricingOpt = {
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
      prevEl: 'pricing__carousel-btn--prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
      // renderBullet: function (index, className) {
      //   return `
      //     <div class="${className}">
      //       ${index}
      //     </div>
      //   `;
      // }
    }
  };
  var mySwiperPricing = undefined;

  $(window).on('load resize orientationchange', function () {
    if ($(window).width() < 768) {
      mySwiperPricing = new Swiper('.swiper-container-pricing', mySwiperPricingOpt);
    } else {
      if (mySwiperPricing !== undefined) {
        mySwiperPricing.destroy(true, true);
        mySwiperPricing = undefined;
      }
    }
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
    // ==========================================

    // callback
    // ==========================================
  };
  initJquery();
});