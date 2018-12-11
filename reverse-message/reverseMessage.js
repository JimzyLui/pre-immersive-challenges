module.exports = function reverseMessage(str) {
  // write your code in here
  /*
    Plan:
    split into array
    map lowercase, backwards, cap
    join with spaces
  */
  var result = str
    .split(" ")
    .map(x => x.toLowerCase())
    .reverse()
    .map(x =>
      x
        .split("")
        .reverse()
        .join("")
    )
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
  return result;
};
