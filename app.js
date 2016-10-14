"use strict";
$(document).ready(function(){

	var timer =  90;
	var interval;
	function cb(){ 
		var minutes= parseInt(timer/60, 10); 
		var secondes= parseInt(timer-minutes*60, 10); 
		$('#putTime').text(minutes+ ':'+ secondes);
		timer--;
		if (timer=== -1){
			clearInterval(interval); 
		}
	}
	$('#setTime').click(function(){
		var minutes = $('.setMinutes').val();
		var secondes= $('.setSecondes').val();
		timer= parseInt(minutes*60 + secondes); 
	});

	$('.btnStart').click(function(){
		interval = setInterval(cb, 1000);
	});

	$('.btnClear').click(function(){
		clearInterval(interval);
		var minutes = $('.setMinutes').val();
		var secondes= $('.setSecondes').val();
		var timers= parseInt(minutes + secondes);
		$('#putTime').val(minutes + ':' + secondes);
	}); 

	$('.btnStop').click(function(){
		clearInterval(interval);    
	});
	$('.btnReset').click(function(){

	});
});
