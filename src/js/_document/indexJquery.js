

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


	const initSubscribersTabs = () => {
		$('.subscribers__tabs-btn').on('click', (ev) => {
			$('.subscribers__tabs-btn').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};


	const initStrategyCardBadge = () => {
		$('.strategy__card-badge a').on('click', (ev) => {
			$(ev.currentTarget).toggleClass('is-active');
		});
	};


	const initStrategyFilterToggle = () => {
		$('.strategy__option-btn').not('[data-toggle="modal"]').on('click', (ev) => {
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


	const initTooltip = () => {
		$('[data-toggle="tooltip"]').tooltip();
	};


	const initAccountProfileMenu = () => {
		$('[aProfile-btn-js]').on('click', (ev) => {
			$('[aProfile-btn-js], [aProfile-dropInnerBtn-js], [aProfile-dropBtn-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});

		$('[aProfile-dropBtn-js]').on('click', (ev) => {
			if($(ev.target).closest('[aProfile-dropInnerBtn-js]').length === 0) {
				$('[aProfile-btn-js]').removeClass('is-active');
				$(ev.currentTarget).addClass('is-active');
				$(ev.currentTarget).find('.a-profile__menu-drop').slideToggle(350);
			}
		});

		$('[aProfile-dropInnerBtn-js]').on('click', (ev) => {
			$('[aProfile-dropInnerBtn-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};


	const initModalBuilderTabs = () => {
		$('.modal-body-tabs a').on('click', (ev) => {
			const _btn = $(ev.currentTarget),
				_btnName = $(ev.currentTarget).data('name'),
				_parentNode = _btn.closest('.modal');

			$('.modal-body-tabs a').removeClass('is-active');
			_btn.addClass('is-active');

			_parentNode.removeClass('is-buy is-sell');
			_parentNode.addClass('is-' + _btnName);
		});
	};


	const initModalCollapse = () => {
		$('.modal-body-collapse-btn').on('click', (ev) => {
			const _btn = $(ev.currentTarget),
				_parentNode = _btn.closest('.modal-body-collapse');

			_parentNode.find('.modal-body-collapse-body').slideToggle(350);
		});
	};


	const initMySubscriberCard = () => {
		$('.subscribers__self-block').on('click', (ev) => {
			$('.subscribers__self-block').removeClass('is-opacity is-choose is-border');

			$('.subscribers__self-block').addClass('is-opacity');
			$(ev.currentTarget).removeClass('is-opacity').addClass('is-choose');

			$(ev.currentTarget).closest('.swiper-slide').prev().find('.subscribers__self-block').addClass('is-border');
		});
	};


	const initAddNewStrategyCollapse = () => {
		$('.newStrategy__set-head-corner').on('click', (ev) => {
			$(ev.currentTarget).closest('.newStrategy__set-collapse').toggleClass('is-open');
			$(ev.currentTarget).closest('.newStrategy__set-collapse').find('.newStrategy__set-body').slideToggle(350);
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
		initModalBuilderTabs();
		initModalCollapse();
		initMySubscriberCard();
		initAddNewStrategyCollapse();
		// ==========================================
  };
  initJquery();
});

