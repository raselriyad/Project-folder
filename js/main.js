(function($){
	
	'use strict';


//*************Started coades ************


//************** menu area
$('.mobile-icon i').on('click',function(){
	$('.menu').slideToggle();
});

$(window).resize(function(){
	var screenSize = $(window).width()

	if(screenSize > 767){
		$('.menu').removeAttr('style');
	}
});

})(jQuery);