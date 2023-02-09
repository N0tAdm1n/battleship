const { Gameboard } = require("./js/gameboardFactory");
const { Player } = require("./js/player");
const { createGameboards } = require("./js/dom");

let currentPlayer;
let opponentPlayer;

let opponentPlayerBoard;
let currentPlayerBoard;

// sets a fresh game
function setupGame() {
  const player1 = Player("P1");
  const player2 = Player("Com", true);

  const Gameboard1 = Gameboard();
  Gameboard1.placeAllShip();
  const Gameboard2 = Gameboard();
  Gameboard2.placeAllShip();

  currentPlayer = player1;
  opponentPlayer = player2;

  opponentPlayerBoard = Gameboard2;
  currentPlayerBoard = Gameboard1;

  createGameboards();
}

// function registerAttack() {}

setupGame();
