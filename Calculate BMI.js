function bmi(weight, height) {
  let index = weight / height ** 2;
  if (index <= 18.5) {
    return "Underweight";
  }
  if (index <= 25) {
    return "Normal";
  }
  if (index <= 30) {
    return "Overweight";
  }
  if (index > 30) {
    return "Obese";
  }
}
