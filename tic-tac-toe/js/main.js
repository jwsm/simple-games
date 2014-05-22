$(function() {

	// Which player plays next?
	var currentPlayer = 'X';

	// Are we still playing the game?
	var playingGame = true;

	// Handle clicking on boxes
	$('.box').on('click', function() {
		// If this box has not already been played
		if ($(this).text() === '' && playingGame) {
			$(this).text(currentPlayer);
			$(this).addClass(currentPlayer);
			checkWin();
			switchPlayer();
		}
	});

	// Set currentPlayer to the opposite of what it is now
	switchPlayer = function() {
		if (currentPlayer === 'X') {
			currentPlayer = 'O';
		} else {
			currentPlayer = 'X';
		}
	};

	// Check to see if the current player has won the game
	checkWin = function() {
		var didWin = false;

		// Horizontals
		if ( $('#box1').text() === currentPlayer &&
			 $('#box2').text() === currentPlayer &&
			 $('#box3').text() === currentPlayer) {
				didWin = true;
		}
		if ( $('#box4').text() === currentPlayer &&
			 $('#box5').text() === currentPlayer &&
			 $('#box6').text() === currentPlayer) {
				didWin = true;
		}
		if ( $('#box7').text() === currentPlayer &&
			 $('#box8').text() === currentPlayer &&
			 $('#box9').text() === currentPlayer) {
				didWin = true;
		}

		// Verticals
		if ( $('#box1').text() === currentPlayer &&
			 $('#box4').text() === currentPlayer &&
			 $('#box7').text() === currentPlayer) {
				didWin = true;
		}
		if ( $('#box2').text() === currentPlayer &&
			 $('#box5').text() === currentPlayer &&
			 $('#box8').text() === currentPlayer) {
				didWin = true;
		}
		if ( $('#box3').text() === currentPlayer &&
			 $('#box6').text() === currentPlayer &&
			 $('#box9').text() === currentPlayer) {
				didWin = true;
		}

		// Diagonals
		if ( $('#box1').text() === currentPlayer &&
			 $('#box5').text() === currentPlayer &&
			 $('#box9').text() === currentPlayer) {
				didWin = true;
		}
		if ( $('#box3').text() === currentPlayer &&
			 $('#box5').text() === currentPlayer &&
			 $('#box7').text() === currentPlayer) {
				didWin = true;
		}

		if (didWin) {
			$('#winner').text(currentPlayer + ' WINS!!').removeClass('hidden').addClass(currentPlayer);
			playingGame = false;
		}

	};

});