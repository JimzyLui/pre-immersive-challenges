module.exports = function findTheLongestWord(sen) {
  // write your code in here
  /*
  Plan:
   use .reduce comparing the string length
*/
  var reducer = (longest, word) => {
    return longest.length > word.length ? longest : word;
  };
  return sen.reduce(reducer);
};
