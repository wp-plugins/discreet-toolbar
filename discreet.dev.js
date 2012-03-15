jQuery(document).ready( function($) {

	var $tb = $('#wpadminbar'),
		$tbh = $tb.height();
		
	$tb.css( 'top', ($tbh*-1) );
	$('html').attr( 'style', 'margin-top: 0px !important' );
	$('body').attr( 'style', 'margin-top: -1px !important; padding-top: 1px !important;' );
	
	$tb.hover( function() {
		$tb.addClass('hovering');
	}, function() {
		$tb.removeClass('hovering');
	});
	
	$('body').mousemove( function( ev ) {
			
		$tbp = parseInt($tb.css('top'));
		
		// sanity check
		//$('h1').html( ev.clientY + ', ' + ev.clientX + ', ' + $tbp );

		if ( ev.clientY <= $tbh && $tbp < 0 ) {
			// cursor in zone and bar is hidden
			$tb.stop().animate({
				'top': 0
			}, 'fast');
		}
		else if ( ev.clientY > $tbh && $tbp == 0 && ! $tb.hasClass('hovering') ) {
			// cursor not in zone and bar is showing and not in submenu
			$tb.stop().animate({
				'top': ($tbh*-1)
			}, 'fast');
		}
		else if ( ( ev.clientY <= $tbh && $tbp == 0 ) || ( ev.clientY > $tbh && $tbp < 0 ) ) {
			// cursor in zone and bar is showing
			// or, not in zone and bar is hidden
			// do nothing!
		}
	});

});