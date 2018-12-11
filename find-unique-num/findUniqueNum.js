module.exports = function findUniqueNum(strOfNums) {
  // write your code in here
  /*
  Plan:
  conver to array
  check mod2 of each num
  save into vars: var index, var type, var type count
  get the var index with count ===1
  */
  var evenIndex = "";
  var evenCtr = 0;
  var oddIndex = "";
  var oddCtr = 0;
  var arr = strOfNums.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCtr++;
      evenIndex = i;
    } else {
      oddCtr++;
      oddIndex = i;
    }
  }
  if (evenCtr === 1) {
    return evenIndex;
  } else {
    return oddIndex;
  }
};
