var counter = 0;
var timer;
var timerset = false;

function startCounting(){
	document.getElementById("myTxt").value = 0;
	if(timerset){
		clearInterval(timer);
	}
	counter = 0;
	timer = setInterval(function(){myTimer()},1000);
	timerset = true;
}

function continueCounting(){
	if(timerset){
		clearInterval(timer);
	}
	timer = setInterval(function(){myTimer()},1000);
	timerset = true;
}

function pauseCounting(){
	clearInterval(timer);
}

function myTimer(){
	counter++;
	document.getElementById("myTxt").value = counter;
}