"use strict";
var morningButton = document.querySelector("#morning");
var noonButton = document.querySelector("#noon");
var eveButton = document.querySelector("#eve");
var lanes = document.querySelectorAll('.lanes');


function showLanes(freeLanes) {
//change color of lanes
for (var i= 0; i < freeLanes; i++) {
 	lanes[i].style.backgroundColor = "blue";
  	 }
}

morningButton.addEventListener("click", function() {
showLanes(1,7)
}); 

noonButton.addEventListener("click", function(){
showLanes(5,3);
});

eveButton.addEventListener("click", function(){
showLanes(8,0);
});

//now lanes not clearing after clicking on a button