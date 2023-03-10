// import ship from "./shipFactory";
// import ship from "./shipFactory";
const { ship } = require("./shipFactory");

const Gameboard = () => {
  let board = Array(10)
    .fill({})
    .map(() => Array(10).fill({}));

  let allShots = [];
  let allShips = [];

  function placeShip(ship, [x, y] = getRandomCoordiantes()) {
    if (valid(ship, x, y)) {
      for (let i = 0; i < ship.length; i++) {
        if (ship.orientation == 0) {
          board[x + i][y] = { ship };
        } else {
          board[x][y + i] = { ship };
        }

        allShips.push(ship);
      }
    } else {
      placeShip(ship);
    }
  }

  //place all ships
  function placeAllShip() {
    for (let i = 1, id = 0; i <= 4; i++) {
      for (let j = 4; j >= i; j--) {
        let orientation = Math.random() > 0.5 ? 0 : 1;
        let newShip = ship(i, orientation, id++);

        placeShip(newShip);
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
        if (board[x + i][y].hasOwnProperty(ship)) return false;
      }
    } else if (ship.orientation == 1) {
      for (let i = 0; i < ship.length; i++) {
        if (board[x][y + i].hasOwnProperty(ship)) return false;
      }
    }

    return true;
  }

  function receiveAttack(x, y) {
    if (board[x][y].hasOwnProperty(ship)) {
      ship.hit();
      return true;
    } else {
      board[x][y] = { hit: true };
      allShots.push([x, y]);
      return false;
    }
  }

  // checks if a ships have sunk
  function isAllShipsSunk() {
    if (allShips.length <= 0) return true;
    return allShips.every((ship) => ship.isSunk());
  }

  return {
    get board() {
      return board;
    },
    get allShots() {
      return allShots;
    },
    placeShip,
    placeAllShip,
    receiveAttack,
    isAllShipsSunk,
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

// newBoard.placeAllShip();
// console.log(newBoard.board);
// console.log(newBoard.isAllShipsSunk());

module.exports = { Gameboard };
