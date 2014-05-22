#Tic-Tac-Toe

## Overview
This game is simple enough that students can implement it basically from scratch.
- The board is built using HTML and CSS.
- A jquery click listener is added to each box on the board
- When a user clicks, the script
  - Checks to see if the box is already full or the game is over
  - Adds the mark of the current player to the board (text and CSS class)
  - Checks to see if the current player has won
  - Makes the other player the current player
- If a user has won, the script removes the "hidden" class and adds text to the winner box. It becomes visible and displays the winning message onscreen. You reload to play again.

Students don't have to understand loops or arrays. When checking for a win, each box and winning combination is checked explicitly. The only abstract reference to a box is in the click handler's `$(this)`.

## Template
To teach students to program the game, have them download the `template` directory to their computer. Walk them through adding all of the necessary code to make the game work. They can also customize the CSS using their own colors, fonts, etc.

## Demo
You can try the game [here](http://jwsm.github.io/simple-games/tic-tac-toe/).
