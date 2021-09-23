/* *******************************************************************************
UNIVERSIDAD SURCOLOMBIANA
CTIC
César Fernández
webmaster
2017
*********************************************************************************/

$(document).ready(function(){
	var owl = $('#slnoticias');
	owl.owlCarousel({
	center: true,
	loop: true,
	margin: 0,
	nav: true,
	
	autoplay: true,
	autoplayTimeout: 12000,
	autoplayHoverPause: true,
	lazyLoad:true,
	
	stagePadding:80,
	smartSpeed:450,

	items: 1,
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,
	
	responsiveClass: true
	
	/*
	responsive: {
	  0: {
		items: 1,
		center: true
	  },
	  1024: {
		items: 1,
		center: true,
		nav: true
	  }
	}
	*/
	
	});
	
	/*
	// PLAY - STOP
	$('.play').on('click', function(){
		owl.trigger('play.owl.autoplay', [1000]);
		$(this).addClass("esconde");
		$(".stop").removeClass("esconde");
	})
	$('.stop').on('click', function(){
		owl.trigger('stop.owl.autoplay');
		$(this).addClass("esconde");
		$(".play").removeClass("esconde");
	});
	*/

	//------------------------------------------------------------

	var owle = $('#sleventos');
	owle.owlCarousel({
		items: 4,
		loop: true,
		//margin: 0,
		autoplay: true,
		nav: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true
	});

	$('.playD').on('click', function() {
		owle.trigger('play.owl.autoplay', [1000]);
		$(this).addClass("esconde");
		$(".stopD").removeClass("esconde");
	})
	$('.stopD').on('click', function() {
		owle.trigger('stop.owl.autoplay');
		$(this).addClass("esconde");
		$(".playD").removeClass("esconde");
	})
	
	$('.prevD').on('click', function() {
		owle.trigger('prev.owl.carousel', [300]);
	})
	$('.nextD').on('click', function() {
	//owl.trigger('next.owl.carousel');
		owle.trigger('next.owl.carousel', [300]);
	})

		/*
		items : 2,
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,
		*

		itemsCustom : [
			//[600, 1],
			[700, 2]
		],
		*/
});

$(document).keyup(function(i){
    if(i.keyCode==37) {
        $('#slnoticias').trigger('prev.owl.carousel');
    } else if (i.keyCode==39) {
        $('#slnoticias').trigger('next.owl.carousel');
    }
});