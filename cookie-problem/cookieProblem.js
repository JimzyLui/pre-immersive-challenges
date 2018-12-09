module.exports = function cookieProblem(array) {
  // write your code in here
  let iMax = Math.max(...array);
  // console.log("iMax: " + iMax);
  let iCookieCount = 0;
  for (let i = 0; i < array.length; i++) {
    iCookieCount += iMax - array[i];
    // console.log("iCookieCount: " + iCookieCount);
  }
  return iCookieCount;
};
