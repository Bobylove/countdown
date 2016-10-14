"use strict";
$(document).ready(function(){
	var secondes = 0;
	var minutes = 0;
	var on = false;
	var reset = true;

	$('.btnStart').click(function(){
		Start();
	});

	$('.btnStop').click(function(){
		stop();
	});
	$('.bntClear').click(function(){
		stop();
	});
	function chrono(){
		if(secondes>59){ 
			minutes += 1; 
			secondes = 0; 
		} 

		if(minutes<10 && secondes<10){ 
			$("#putTime").html("0"+minutes+" : 0"+secondes); 
		} 
		else if(minutes<10 && secondes>=10){ 
			$("#putTime").html("0"+minutes+" : "+secondes); 
		} 
		else if(minutes>=10 && secondes<10){ 
			$("#putTime").html(+minutes+" : 0"+secondes); 
		} 
		else if(minutes>=10 && secondes>10){ 
			$("#putTime").html(+minutes+" : "+secondes); 
		} 
	} 
	function Start(){
		if(on===false){
			var timer = setInterval(chrono,1000);
			on = true;
			reset = false;
		}
	}
	function Stop(){
		if(on===true){
			on = false;
			clearTimeout(timer);
		}
	}
	function Reset(){
		if(reset===false){
			clearInterval(timer);
			secondes = 0;
			minutes = 0;
			$('#putTime').html('00:00');
			reset = true;
		}
	}




});