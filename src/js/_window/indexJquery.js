

/**
 * @description Window on load.
 */
$(window).on("load", (ev) => {
	initHeaderFixed();
});


/**
 * @description Window on resize.
 */
$(window).on("resize", (ev) => {});


/**
 * @description Window on scroll.
 */
$(window).on("scroll", (ev) => {
	initHeaderFixed();
});

