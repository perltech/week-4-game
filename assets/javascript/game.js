var wins = 0;
var losses = 0;

var gemPoints = 0; // Variable for aggregated points from clicks on gems

function redGem() {
	// Generate number between 1 and 12
	var redPoints = Math.floor(Math.random() * 12) + 1;
	console.log(redPoints);
}


function blueGem() {
	var bluePoints = Math.floor(Math.random() * 12) + 1;
	console.log(bluePoints);
	gemPoints += bluePoints;
	console.log(gemPoints);
	// needs onClick event tied to button that is assigned to gemPoints
	$("#blueGem").on("click", function() {
		
		gemPoints += bluePoints;
		// userPoints(gemPoints);
		 console.log(gemPoints);
		// console.log(bluePoints);
	});
	
}

function yellowGem() {

}

function greenGem() {

}

function targetValue() {
	// Generate number between 19 and 120
	var value = Math.floor(Math.random() * 102) + 19;
	$("#targetValue").html(value);
}

function userPoints(points) {
	// aggregate input from gem clicks
	// gemPoints += points;
	$("#userPoints").html(points);
}

// console.log(gemPoints);
// console.log(targetValue())
console.log(redGem())
console.log(blueGem())

// Should the onclick event be a different function. Should I call it by itself, and then just call the function for the gem?
// Or hold everyting in an onclick and assign the gems as variables that are incremented?