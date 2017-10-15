$( document ).ready( function () {
		
		// ----------------------
		// SLIDER INIT
		// ---------------------- 
		$( '.slider' ).slick( {
			autoplay  	    : true,
			pauseOnHover    : true,
            autoplaySpeed: 5000,
            fade: true
		} );
		
		// ----------------------
		// NEXT BUTTON
		// ---------------------- 
		$( '.sliderNext' ).click( function () {
			$( '.slider' ).slick( 'slickNext' );
		} );
	
		// ----------------------
		// PREVIOUS BUTTON
		// ---------------------- 
		$( '.sliderPrev' ).click( function () {
			$( '.slider' ).slick( 'slickPrev' );
		} );

		$('.start_date').datepicker({
            language:'en',
        });
          $('#end_date').datepicker({
            language:'en',
        });
    	
});
/*Slider function [It is recommended to place a function in a separate JS file, such as "functions.js"]*/
