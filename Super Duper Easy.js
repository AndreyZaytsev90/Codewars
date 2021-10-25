function problem(x) {
  /* if (x >= 0) {
    return x * 50 + 6;
  }

  if (x < 0) {
    return x * 50 + 6;
  }
  if ((x = " ")) {
    return (typeof x === string) ? "Error"
  }*/
  function problem(x) {
    return typeof x === string ? "Error" : x * 50 + 6;
  }
}
