module.exports = function checkAscOrder(numArray) {
  // write your code in here
  for (let i = 0; i <= numArray.length - 2; i++) {
    if (numArray[i] > numArray[i + 1]) {
      return false;
    }
  }
  return true;
};
