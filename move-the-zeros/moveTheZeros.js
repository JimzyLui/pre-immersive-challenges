module.exports = function moveTheZeros(arrNum, isRight) {
  // write your code here
  /*
  Plan:
  count the zeros while pushing the number into an empty array
  then add the zeros into the new array depending on location
  */
  "use strict";
  var arr = [];
  var zeroCtr = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === 0) {
      zeroCtr++;
    } else {
      arr.push(arrNum[i]);
    }
  }
  // console.log("zeroCtr: " + zeroCtr);

  var arrZ = new Array(zeroCtr).fill(0);

  // console.log("arrZ: " + arrZ);

  if (isRight) {
    return arr.concat(arrZ);
  } else {
    return arrZ.concat(arr);
  }
};
