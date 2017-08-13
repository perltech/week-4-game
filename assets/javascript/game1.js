

$(document).ready(function(){
	var wins = 0;
	var losses = 0;

	var gemPoints = 0; // Variable for aggregated points from clicks on gems

	//var randGem = Math.floor(Math.random() * 12) + 1;

	var randValue = Math.floor(Math.random() * 102) + 19;

	// function randGem() {
	// 	var randGem = Math.floor(Math.random() * 12) + 1;
	// }


	var gem = {
		rand: function() {
			var rand = Math.floor(Math.random() * 12) + 1;
			var randLink = parseInt(rand);
			return randLink;
	},

		//Object to create random number for onclick
		redGem: function(rand) {
			//var randGem = Math.floor(Math.random() * 12) + 1;
			var localGem = gem.rand();
			//var storedGem = $("#redGem").val(localGem);	// How do I capture that random value into a variable?
			gemPoints +=  localGem;
			$("#userPoints").html(gemPoints);
			// console.log(gemPoints);
		},

		blueGem: function(rand) {
			var localGem = gem.rand();	// How do I capture that random value into a variable?
			gemPoints += localGem;
			$("#userPoints").html(gemPoints);
			// console.log(gemPoints);
		},

		yellowGem: function(rand) {
			var localGem = gem.rand();	// How do I capture that random value into a variable?
			gemPoints += localGem;
			$("#userPoints").html(gemPoints);
			// console.log(gemPoints);
		}, 

		greenGem: function(rand) {
			var localGem = gem.rand();	// How do I capture that random value into a variable?
			gemPoints += localGem;
			$("#userPoints").html(gemPoints);
			// console.log(gemPoints);
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