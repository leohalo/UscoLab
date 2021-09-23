/********************************************************************************
UNIVERSIDAD SURCOLOMBIANA
CTIC
César Fernández
webmaster
2016
**********************************************************************************/


/********************************************************************************
ACORDEON H3

<h3 class="acor_btn">---</h3>
<div class="acor_conte">
**********************************************************************************/
$(document).ready(function(){
	$('.acor_btn').hover(function() {
		$(this).animate({paddingLeft: "10px"}, 200 );
	});
	$('.acor_btn').mouseout(function() {
		$(this).animate({paddingLeft: "0px"}, 200 );
	});


	$(".acor_btn").addClass("close");

	//$('.acor_btn').click(function(){
	$(".acor_btn").click(function(event){
		event.preventDefault();
		$(this).animate({paddingLeft: "0px"}, 200 );
		//$('div.acor_conte').slideUp('normal');
		//$('div.acor_conte').slideToggle('normal');
		
		$("html, body").animate({ scrollTop: ($(this).offset().top)-30 }, 300);

		if( $(this).attr("class") == "acor_btn close"){
			$('div.acor_conte').slideUp('normal');
			$(".acor_btn").removeClass("open").addClass("close");

			//$(this).next().slideDown('normal');
			$(this).next().slideDown("normal", function(){
				$("html, body").animate({ scrollTop: ($(this).offset().top)-70 }, 200);
			});
			$(this).removeClass("close").addClass("open");
		}
		else if( $(this).attr("class") == "acor_btn open"){
			$(this).next().slideUp('normal');
			/*
			$(this).next().slideUp("normal", function(){
				$("html, body").animate({ scrollTop: $(this).offset().top }, 200);
			});
			*/
			$(this).removeClass("open").addClass("close");
		}
	});
	$("div.acor_conte").hide();
});


/**********************************************************************************/
$(document).ready(function(){
	$(".acor_btn2").addClass("close");

	//$('.acor_btn').click(function(){
	$(".acor_btn2").click(function(event){
		event.preventDefault();		

		if( $(this).attr("class") == "acor_btn2 close"){
			$('div.acor_conte2').slideUp('normal');
			$(".acor_btn2").removeClass("open").addClass("close");

			//$(this).next().slideDown('normal');
			$(this).next().slideDown("normal", function(){
				$("html, body").animate({ scrollTop: ($(this).offset().top)-70 }, 200);
			});
			$(this).removeClass("close").addClass("open");
		}
		else if( $(this).attr("class") == "acor_btn2 open"){
			//$(this).next().slideUp('normal');
			$(this).next().slideUp("normal", function(){
				$("html, body").animate({ scrollTop: $(this).offset().top }, 200);
			});

			$(this).removeClass("open").addClass("close");
		}

		//$(this).scrollTop(300);
		//$("html, body").animate({ scrollTop: 0 }, "slow");
		//alert ($(this).scrollTop());
	//	$("html, body").animate({ scrollTop: ($(this).offset().top)-30 }, 300);
	// ESTE ES	$("html, body").animate({ scrollTop: $(this).offset().top }, 300);
		
		//alert ( $(this).offset().top + ' // ' + $(this).position.top );
	});
	$("div.acor_conte2").hide();
});


/**********************************************************************************/
$(document).ready(function(){
	$(".acord_btn").addClass("close");

	$(".acord_btn").click(function(event){
		event.preventDefault();		

		if($(this).hasClass("close")){
			$('div.acord_conte').slideUp('normal');
			$(".acord_btn").removeClass("open").addClass("close");

			$(this).next().slideDown("normal", function(){
				$("html, body").animate({ scrollTop: ($(this).offset().top)-70 }, 200);
			});
			$(this).removeClass("close").addClass("open");
		}
		else if($(this).hasClass("open")){
			$(this).next().slideUp("normal", function(){
				//$("html, body").animate({ scrollTop: $(this).offset().top }, 200);
			});

			$(this).removeClass("open").addClass("close");
		}
	});
	$("div.acord_conte").hide();
});


/**********************************************************************************/
$(document).ready(function(){
	$(".acord_btn_int").addClass("close");

	$(".acord_btn_int").click(function(event){
		event.preventDefault();		

		if($(this).hasClass("close")){
			$('div.acord_conte_int').slideUp('normal');
			$(".acord_btn_int").removeClass("open").addClass("close");

			$(this).next().slideDown("normal", function(){
				//$("html, body").animate({ scrollTop: ($(this).offset().top)-70 }, 200);
			});
			$(this).removeClass("close").addClass("open");
		}
		else if($(this).hasClass("open")){
			$(this).next().slideUp("normal", function(){
				//$("html, body").animate({ scrollTop: $(this).offset().top }, 200);
			});

			$(this).removeClass("open").addClass("close");
		}
	});
	$("div.acord_conte_int").hide();
});