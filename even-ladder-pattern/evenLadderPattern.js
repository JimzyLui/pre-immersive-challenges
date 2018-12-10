module.exports = function evenLadderPattern(num) {
  // write your code in here
  if (typeof num !== "number") {
    return "";
  }
  if (num < 2) {
    return "";
  }
  var str = "";
  for (var x = 2; x <= num; x += 2) {
    str += x.toString().repeat(x) + "\n";
  }
  return str.trim();
};
