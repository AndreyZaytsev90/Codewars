function iceBrickVolume(radius, bottleLength, rimLength) {
  if (radius > 0 && bottleLength > 0 && rimLength < bottleLength) {
    return radius * radius * 2 * (bottleLength - rimLength);
  }
}
