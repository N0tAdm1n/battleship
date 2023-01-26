import ship from "../src/js/shipFactory";

test("New Ship", () => {
  const newShip = ship(2);
  expect(newShip.length).toBe(2);
});

test("Ship sunk", () => {
  const newShip = ship(1);
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});
