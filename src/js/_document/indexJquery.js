

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


	const initFeaturesDisposalCard = () => {
		$('.disposal__card .card').on('click', (ev) => {
			const _btn = $(ev.currentTarget),
				_btnID = _btn.data('btn-id');

			if($(window).width() > 991) {
				$('.disposal__card .card').removeClass('is-active');
				_btn.addClass('is-active');

				$('.disposal__desc').hide();
				$('.disposal__desc[data-text-id="' + _btnID + '"]').show();
			}
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
		initFeaturesDisposalCard();
  };
  initJquery();
});

