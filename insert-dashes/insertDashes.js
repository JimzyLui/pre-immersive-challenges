module.exports = function insertDashes(num) {
  // write your code in here
  var str = num.toString();
  var result = str[0];
  var isEven = x => {
    return x % 2 == 0;
  };
  for (var i = 0; i < str.length - 1; i++) {
    if (isEven(str[i]) && isEven(str[i + 1])) {
      result += "-" + str[i + 1];
    } else {
      result += str[i + 1];
    }
  }
  return result;
};
