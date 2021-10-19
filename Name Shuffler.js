var re = /(\w+)\s(\w+)/;
var str = "john McClane";

function nameShuffler(str) {
  return str.replace(re, "$2, $1");
}
console.log(nameShuffler);
