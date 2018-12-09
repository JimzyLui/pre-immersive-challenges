module.exports = function acceptableSequence(str) {
  // write your code here
  var regex = /[a-zA-Z]/;

  if (regex.test(str[0]) || regex.test(str[str.length - 1])) {
    return false;
  }
  for (let x = 0; x <= str.length - 3; x++) {
    const sample = str.substring(x, x + 3);
    if (regex.test(sample[1])) {
      // middle char is alpha
      regex = /\+[a-zA-Z]\+/;
      if (!regex.test(sample)) {
        return false;
      }
    }
  }
  return true;
};
