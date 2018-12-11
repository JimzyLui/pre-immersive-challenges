module.exports = function swapLetterCase(str) {
  // write your code in here
  var isLetter = s => {
    return s.match(/[A-Za-z]/);
  };
  var isUpper = s => {
    return s.match(/[A-Z]/);
  };

  return str
    .split("")
    .map(x => {
      if (isLetter(x)) {
        if (isUpper(x)) {
          return x.toLowerCase();
        } else {
          return x.toUpperCase();
        }
      } else {
        return x;
      }
    })
    .join("");
};
