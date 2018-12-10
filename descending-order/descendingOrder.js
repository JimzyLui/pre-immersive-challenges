module.exports = function descendingOrder(number) {
  // write code in here
  // console.log("type: " + typeof number);
  if (typeof number !== "number") {
    return "not a number!";
  }
  // cast as string... toString()
  // conv to array... split('')
  // sort backward... sort(fx) //w/ fx b-a
  // join into string... join('')
  // convert back to int... parseInt()

  var arr = number.toString().split("");
  var sortRev = (a, b) => {
    return b - a;
  };
  var arrR = arr.sort(sortRev);
  return parseInt(arrR.join(""));
};
