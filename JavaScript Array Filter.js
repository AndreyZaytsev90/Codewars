function getEvenNumbers(numbersArray) {
  let result = numbersArray.filter(function (n) {
    if (n % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
