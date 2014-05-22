$(function() {

	// Which player plays next?
	var currentPlayer = 'X';

	// Are we still playing the game?
	var playingGame = true;

	// Handle clicking on boxes
	$('.box').on('click', function() {

		// What happens when someone clicks on a box?

		// The box that they clicked on is called $(this)

		// You can use $(this).text() to check what text is in the box
		// or $(this).text("X") to store new text in the box.

	});

	// Set currentPlayer to be the opposite of what it is now
	switchPlayer = function() {

		// Write code here to switch the currentPlayer

	};

	// Check to see if the current player has won the game
	checkWin = function() {
		var didWin = false;

		// Check here to see if currentPlayer has won the game.
		// Use $('#box1').text() to check the text in box 1, and so on.
		// If you find that currentPlayer has won, set didWin to true!

		// If the current player did win, show the winner screen!
		if (didWin) {
			$('#winner').text(currentPlayer + ' WINS!!').removeClass('hidden').addClass(currentPlayer);
			playingGame = false;
		}

	};

});