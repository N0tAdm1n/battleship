// import ship from "./shipFactory";
// import ship from "./shipFactory";
const { ship } = require("./shipFactory");

const Gameboard = () => {
  let board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  function placeShip(ship, x, y) {
    if (valid(ship, x, y)) {
      for (let i = 0; i < ship.length; i++) {
        if (ship.orientation == 0) {
          board[x + i][y] = { ship };
        } else {
          board[x][y + i] = { ship };
        }
      }
    }
  }

  function valid(ship, x, y) {
    // checks if given coordinates are in bound
    if (x > 10 || y > 10) return false;

    //checks if ship fits in board
    if (ship.orientation == 0 && x + ship.length > 10) {
      return false;
    } else if (ship.orientation == 1 && y + ship.length > 10) {
      return false;
    }

    // check if not already there is a ship
    if (ship.orientation == 0) {
      for (let i = 0; i < ship.length; i++) {
        if (board[x + i][y].ship) return false;
      }
    } else if (ship.orientation == 1) {
      for (let i = 0; i < ship.length; i++) {
        if (board[x][y + i].ship) return false;
      }
    }

    return true;
  }

  return {
    get board() {
      return board;
    },
    placeShip,
  };
};

function getRandomCoordiantes() {
  return [getRandomNumber(), getRandomNumber()];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

// let newShip = ship(2);

// // Gameboard().placeShip(newShip, 6, 6);
// Gameboard().board[6][6] = "helos";

// let newBoard = Gameboard();

// newBoard.test(2, 3);
// console.log(newBoard.board[2][3]);
