(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
		headerHeightFixer();
    })

	/* scroll top btn */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50)
	})
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop()

		if (scrolling > 200) {
			$(".scroll-top").fadeIn()
		} else {
			$(".scroll-top").fadeOut()
		}
	})

	/* Fix Header Height function */
	$('header').before('<div class="header-height-fix"></div>')
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').innerHeight() +'px')
    	$('body').css('--header-size', $('header').innerHeight() +'px')
	}
	headerHeightFixer();

	/* Get Current Year */
	$('[data-target="currentYear"]').text(new Date().getFullYear());
	
	/* Close Collapse on Link Click */
	if($('.navbar-toggler').is(':visible')){
		$('.navbar-nav .nav-link').on('click', function () {	
			new bootstrap.Collapse('#navbarNav', {
				hide: true
			}) 
		});
	}

})(jQuery)