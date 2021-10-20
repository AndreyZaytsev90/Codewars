const str = "john McClane";
//const re = /(\w+)\s(\w+)/gi;
const re = /^([^\s]*)\s([^\s]*)$/;
function nameShuffler(str) {
  return str.replace(re, "$2 $1");
}
console.log(nameShuffler(str));
