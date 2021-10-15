let clubs = "clubs";
let diamonds = "diamonds";
let hearts = "hearts";
let spades = "spades";

function defineSuit(card) {
  if (card.slice(-1) == "♣") {
    return "clubs";
  }
  if (card.slice(-1) == "♦") {
    return "diamonds";
  }
  if (card.slice(-1) == "♥") {
    return "hearts";
  } else {
    return "spades";
  }
}
