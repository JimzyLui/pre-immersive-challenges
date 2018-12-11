module.exports = function vowelCount(str) {
  // write your code in here
  var isVowel = s => {
    return s.match(/[aeiou]/);
  };

  return str.split("").filter(isVowel).length;
};
