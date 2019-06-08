

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const initCollapseButton = () => {
		$('.accordion button').on('click', (ev) => {
			$(ev.currentTarget).toggleClass('is-active');
		});
	};
	/*
	* CALLBACK :: end
	* ============================================= */



  /**
   * @description Init all method
   */
  const initJquery = () => {
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

