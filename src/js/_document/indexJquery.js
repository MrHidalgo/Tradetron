

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


	const initModalTabs = () => {
		$('.modal__tabs').on('click', (ev) => {
			const _el = $(ev.currentTarget),
				_elID = _el.data('btntabs-id'),
				_parentNode = _el.closest('.modal__tabs-wrapper');

			_parentNode.find('.modal__tabs').removeClass('is-active');
			_el.addClass('is-active');

			_parentNode.find('.modal__tabs-content').removeClass('is-active');
			_parentNode.find('.modal__tabs-content[data-contenttabs="' + _elID + '"]').addClass('is-active');
		});
	};


	const initStrategyTabs = () => {
		$('.strategy__tabs a').on('click', (ev) => {
			$('.strategy__tabs a').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};


	const initStrategyCardBadge = () => {
		$('.strategy__card-badge a').on('click', (ev) => {
			$(ev.currentTarget).toggleClass('is-active');
		});
	};


	const initStrategyFilterToggle = () => {
		$('.strategy__option-btn').on('click', (ev) => {
			$('.strategy__filter').addClass('is-open');
		});
		$('.strategy__filter-close').on('click', (ev) => {
			$('.strategy__filter').removeClass('is-open');
		});
	};


	const initStrategyFilterRating = () => {
		const _ratingBtn = $('.strategy__filter-rating a');

		_ratingBtn.hover(
			(ev) => {
				_ratingBtn.removeClass('is-hover');

				$(ev.currentTarget).prevAll().addClass('is-hover');
				$(ev.currentTarget).addClass('is-hover');
			},
			(ev) => {
				_ratingBtn.removeClass('is-hover');
			}
		);

		_ratingBtn.on('click', (ev) => {
			_ratingBtn.removeClass('is-choose');

			$(ev.currentTarget).prevAll().addClass('is-choose');
			$(ev.currentTarget).addClass('is-choose');
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
		initModalTabs();
		initStrategyTabs();
		initStrategyCardBadge();
		initStrategyFilterToggle();
		initStrategyFilterRating();
  };
  initJquery();
});

