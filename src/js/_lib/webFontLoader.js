

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
const initWebFontLoader = () => {

	/**
   * @description
	 */
	WebFont.load({
    google: {
      families: [
        'Poppins:100,200,300,400,500,600,700,800,900'
      ]
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
