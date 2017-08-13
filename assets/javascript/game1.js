

$(document).ready(function(){
	var wins = 0;
	var losses = 0;

	var gemPoints = 0; // Variable for aggregated points from clicks on gems

	

	var randValue = Math.floor(Math.random() * 102) + 19;


	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function runGame() {
		// Logic to control game starting and stopping
	}

	var randGemRed = getRandomInt(1,12);
	var randGemBlue = getRandomInt(1,12);
	var randGemYellow = getRandomInt(1,12);
	var randGemGreen = getRandomInt(1,12);

	var gem = {
		

		redGem: function(rand) {
			var localGem = randGemRed;
			gemPoints +=  localGem;
			$("#userPoints").html(gemPoints);
			
		},

		blueGem: function(rand) {
			var localGem = randGemBlue;
			gemPoints += localGem;
			$("#userPoints").html(gemPoints);
		},

		yellowGem: function(rand) {
			var localGem = randGemYellow;
			gemPoints += localGem;
			$("#userPoints").html(gemPoints);
		}, 

		greenGem: function(rand) {
			var localGem = randGemGreen;
			gemPoints += localGem;
			$("#userPoints").html(gemPoints);
		}

	} // end of gem object

	// Fetch random value for player to match
	$("#targetValue").html(randValue);

	// Change to swith statement Switch($("button")) and then each condition targets "#*Gem"
	// $("#redGem").click(gem.redGem);
	// $("#blueGem").click(gem.blueGem);
	// $("#yellowGem").click(gem.yellowGem);
	// $("#greenGem").click(gem.greenGem);
	console.log(gemPoints);
	console.log(randValue);


	// If statement to control win condition
	if (gemPoints < randValue) {
		$("#redGem").click(gem.redGem);
		$("#blueGem").click(gem.blueGem);
		$("#yellowGem").click(gem.yellowGem);
		$("#greenGem").click(gem.greenGem);
	}
	else if (gemPoints === randValue) {
		win++;
		alert("Victory is yours!");
	}
	else if (gemPoints > randValue) {
		losses++;
		alert("YOU LOSE!!!");
	}

});	// Ready Function