$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	$("#wins").text("Wins: " + wins);
	$("#losses").text("Losses: " + losses);

	var gemPoints = 0; // Variable for aggregated points from clicks on gems

	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var randValue = getRandomInt(20,120);
	$("#targetValue").html(randValue);

	var randGemRed = getRandomInt(1,12);
	var randGemBlue = getRandomInt(1,12);
	var randGemYellow = getRandomInt(1,12);
	var randGemGreen = getRandomInt(1,12);
	
	function reset() {
		randValue = getRandomInt(20,120);
		console.log(randValue);
		$("#targetValue").text(randValue);

		var randGemRed = getRandomInt(1,12);
		var randGemBlue = getRandomInt(1,12);
		var randGemYellow = getRandomInt(1,12);
		var randGemGreen = getRandomInt(1,12);
		gemPoints = 0;
		$("#userPoints").text(gemPoints);
	}

	function win() {
		wins++;
		$("#wins").text("Wins: " + wins);
		reset();
	}

	function lose() {
		losses++;
		$("#losses").text("Losses: " + losses);
		reset();
	}

	$("#redGem").click( function() {
		var localGem = randGemRed;
		gemPoints +=  localGem;
		$("#userPoints").html(gemPoints);
		console.log(gemPoints);

		if (gemPoints === randValue) {
			win();
			alert("You Win!");
		} 
		else if(gemPoints > randValue) {
			lose();
			alert("You Lose!");
		}

	});

	$("#blueGem").click( function() {
		var localGem = randGemBlue;
		gemPoints +=  localGem;
		$("#userPoints").html(gemPoints);
		console.log(gemPoints);

		if (gemPoints === randValue) {
			win();
			alert("You Win!");
		} 
		else if(gemPoints > randValue) {
			lose();
			alert("You Lose!");
		}

	});

	$("#yellowGem").click( function() {
		var localGem = randGemYellow;
		gemPoints +=  localGem;
		$("#userPoints").html(gemPoints);
		console.log(gemPoints);

		if (gemPoints === randValue) {
			win();
			alert("You Win!");
		} 
		else if(gemPoints > randValue) {
			lose();
			alert("You Lose!");
		}

	});

	$("#greenGem").click( function() {
		var localGem = randGemGreen;
		gemPoints +=  localGem;
		$("#userPoints").html(gemPoints);
		console.log(gemPoints);

		if (gemPoints === randValue) {
			win();
			alert("You Win!");
		} 
		else if(gemPoints > randValue) {
			lose();
			alert("You Lose!");
		}

	});


});