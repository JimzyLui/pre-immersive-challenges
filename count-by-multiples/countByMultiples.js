module.exports = function countByMultiples(length, x) {
  // write your code in here
  let array = [];
  for (let i = 1; i <= length; i++) {
    array.push(i * x);
  }
  return array;
};
