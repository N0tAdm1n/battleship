function ship(length) {
  let _hitCount = 0;

  function hit() {
    hitCount++;
  }
  function isSunk() {
    return hitCount >= length;
  }
  return {
    length,
    hit,
    isSunk,
  };
}

export default ship;
