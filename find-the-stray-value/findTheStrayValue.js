module.exports = function findTheStrayValue(array) {
  // write your code in here
  var v1 = array[0];
  var v1Ctr = 1;
  var v2 = "";
  var v2Ctr = 0;
  //compare to v1
  for (var i = 1; i < array.length; i++) {
    if (array[i] === v1) {
      v1Ctr++;
    } else {
      v2 = array[i];
      v2Ctr++;
    }
  }

  if (v1Ctr === 1) {
    return v1;
  } else {
    return v2;
  }
};
