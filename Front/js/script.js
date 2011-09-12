/* Author: 

*/

$(document).ready(function() {

	$(".clock").hover(
	function(){
		$(".clock span").fadeIn();
		},function(){
			 $(".clock span").fadeOut(100);
		}
	);
	
	$(".management").hover(
	function(){
		$(".management span").fadeIn();
		},function(){
			 $(".management span").fadeOut(100);
		}
	);
	
	setTimeout(function(){ 
	$('.move.clock').animate({top: '+10px'}, 400)
	$('.move.clock').animate({top: '0px'}, 200);
	}, 100);
	
	setTimeout(function(){ 
	$('.move.plus').animate({top: '+10px'}, 400)
	$('.move.plus').animate({top: '0px'}, 200);
	}, 500);
	
	setTimeout(function(){ 
	$('.move.management').animate({top: '+10px'}, 400)
	$('.move.management').animate({top: '0px'}, 200);
	}, 1000);
	
	setTimeout(function(){ 
	$('.move.equals').animate({top: '+10px'}, 400)
	$('.move.equals').animate({top: '0px'}, 200);
	}, 1400);
	
	setTimeout(function(){ 
	$('img.move').animate({top: '+10px'}, 400)
	$('img.move').animate({top: '0px'}, 200);
	}, 2000);
		
		
});





















