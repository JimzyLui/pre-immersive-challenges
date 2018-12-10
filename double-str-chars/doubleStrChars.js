module.exports = function doubleStrChars(str) {
  // write your code in here
  if (typeof str !== "string") {
    return "not a string!";
  }
  /*
    Plan:
      str --> array
      apply double to each arry
      join the array
  */

  return str
    .split("")
    .map(x => x.repeat(2))
    .join("");
};
