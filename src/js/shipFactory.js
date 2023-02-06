function ship(length, orientation = 0, id) {
  // 0 for horizonatal, 1 for vertcal
  let _hitCount = 0;

  function hit() {
    _hitCount++;
  }
  function isSunk() {
    return _hitCount >= length;
  }
  function changeOrientation() {
    if (orientation == 0) orientation = 1;
    else orientation = 0;
  }
  return {
    length,
    orientation,
    id,
    hit,
    isSunk,
    changeOrientation,
  };
}

// export default ship;
module.exports = { ship };
