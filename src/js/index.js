const { Gameboard } = require("./gameboardFactory");
const { Player } = require("./player");

// sets a fresh game
function setupGame() {
  const player1 = Player("P1");
  const player2 = Player("Com", true);

  const Gameboard1 = Gameboard();
  Gameboard1.placeAllShip();
  const Gameboard2 = Gameboard();
  Gameboard2.placeAllShip();

  const currentPlayer = player1;
  const opponentPlayer = player2;

  const opponentPlayerBoard = Gameboard2;
  const currentPlayerBoard = Gameboard1;
}

setupGame();
