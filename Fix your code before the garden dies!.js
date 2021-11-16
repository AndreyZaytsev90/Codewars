function rainAmount(mm) {
  if (mm >= 40) {
    return "Your plant has had more than enough water for today!";
  }
  if (mm >= 0 && mm <= 39) {
    return "You need to give your plant " + (40 - mm) + "mm of water";
  }
}
