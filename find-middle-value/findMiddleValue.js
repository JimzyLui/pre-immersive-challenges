module.exports = function findMiddleValue(numArray) {
  // write your code in here
  /*
    Plan:
    make a copy of the array and sort it
    Find the middle number (at index 1)
    find the index of that number in the original array
  */
  var sortAscAlg = (a, b) => {
    return a - b;
  };
  var arrSort = numArray.slice(0).sort(sortAscAlg);
  var middleVal = arrSort[1];
  return numArray.indexOf(middleVal);
};
