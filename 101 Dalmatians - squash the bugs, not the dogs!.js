function howManyDalmatians(number) {
  let dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];
  if (number >= 1 && number <= 10) {
    return dogs[0];
  }
  if (number >= 1 && number <= 50) {
    return dogs[1];
  }
  if (number == 101) {
    return dogs[3];
  }
  if (number >= 51 && number <= 100) {
    return dogs[2];
  }
  if (number <= 0 && number > 101) {
    return undefined;
  }
}
