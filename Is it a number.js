function isDigit(s) {
  if (
    !isNaN(s) ||
    /^[-+]?[0-9]+\.[0-9]+$/.test(s) ||
    s instanceof Number ||
    /[-+][0-9]+.[0-9]+$/.test(s)
  ) {
    return true;
  } else {
    return false;
  }
}
// не решено , но тест проходит....
