'use strict';

(function($){
	$(document).ready(function() {
		let menu = $('.navigation');
		$(window).scroll(function(){
			if ( $(this).scrollTop() > 94 ){
			$(menu).addClass("fixed");
				} else if($(this).scrollTop() <= 94) {
						$(menu).removeClass("fixed");
				}
			});

	});
})(jQuery);
