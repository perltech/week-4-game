

$(document).ready(function(){
	var wins = 0;
	var losses = 0;

	var gemPoints = 0; // Variable for aggregated points from clicks on gems

	//var randGem = Math.floor(Math.random() * 12) + 1;

	var randValue = Math.floor(Math.random() * 102) + 19;

	function randGem() {
		var randGem = Math.floor(Math.random() * 12) + 1;
	}


	var gem = {
	// 	rand: function() {
	// 		var rand = Math.floor(Math.random() * 12) + 1;
	// 		return rand;
	// },


		redGem: function(rand) {
			//var randGem = Math.floor(Math.random() * 12) + 1;
			var localGem = gem.rand();	// How do I capture that random value into a variable?
			gemPoints += localGem;
			$("#targetValue").html(gemPoints);
			console.log(gemPoints);
		}, 
	}



	//Change to swith statement Switch($("button")) and then each condition targets "#*Gem"
	$("#redGem").click(gem.redGem);
	console.log(gem.redGem);

});	// Ready Function