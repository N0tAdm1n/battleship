function createGameboards() {
  const gameboards = document.querySelectorAll(".gameboard");

  gameboards.forEach((board) => makegrid(board));
}

function makegrid(board) {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 10; j++) {
      const block = document.createElement("div");
      block.classList.add("block");

      block.dataset.i = i;
      block.dataset.j = j;

      row.append(block);
    }

    board.append(row);
  }
}

module.exports = { createGameboards };
