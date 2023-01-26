function ship(length) {
  let _hitCount = 0;

  function hit() {
    _hitCount++;
  }
  function isSunk() {
    return _hitCount >= length;
  }
  return {
    length,
    hit,
    isSunk,
  };
}

export default ship;
