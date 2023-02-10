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

function getHitCoordinates(board) {
  const blocks = document.querySelectorAll(".block");

  blocks.forEach((block) =>
    block.addEventListener(
      "click",
      () => {
        if (board.receiveAttack(block.dataset.i, block.dataset.j)) {
          block.classList.add("ship-hit");
        }
        block.classList.add("hit");
      },
      {
        once: true,
      }
    )
  );
}

module.exports = { createGameboards, getHitCoordinates };
