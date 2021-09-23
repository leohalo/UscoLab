/********************************************************************************
UNIVERSIDAD SURCOLOMBIANA
CTIC
César Fernández
webmaster
2016
**********************************************************************************/

$(document).ready(function(){
	$(".panel a.buscar").hover(function(){
		$("#estilos").fadeOut(100);
		$("#form1").fadeIn(300);
	});

	$(".panel a.estilos").hover(function(){
		$("#form1").fadeOut(100);
		$("#estilos").fadeIn(300);
	});

	//$("html").click(function(){
	$(".horMenu, .logos").hover(function(){
		$("#form1").fadeOut(100);
		$("#estilos").fadeOut(100);
	});
	
	//$(".header .panel a:not(.js)").hover(function(){
	$(".header .panel a.directo").hover(function(){
		console.log('directo');
		$("#form1").fadeOut(100);
		$("#estilos").fadeOut(100);
	});
});