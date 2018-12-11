module.exports = function needleInHaystack(haystack) {
  // write code in here
  var index = haystack.indexOf("needle");
  if (index < 0) {
    return false;
  } else {
    return index;
  }
};
