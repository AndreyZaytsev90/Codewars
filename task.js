let arr = [10, 5, 2];
function diffBig2(arr) {
  let hidgNum1 = 0;
  let hidgNum2 = 0;
  function hidgNum1() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > hidgNum1) {
        hidgNum1 = arr[i];
        // return arr.splice(hidgNum1)
      }
    }
  }
  function hidgNum2() {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j] > hidgNum2) {
        hidgNum2 = arr[j];
        //return delete hidgNum2
      }
    }
  }
  return hidgNum1 - hidgNum2;
}

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
