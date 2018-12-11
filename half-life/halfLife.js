module.exports = function halfLife(initialQuantity, quantityRemaining, time) {
  var halfLifeCtr = 0;
  var qty = initialQuantity;

  while (qty > quantityRemaining) {
    qty /= 2;
    halfLifeCtr++;
  }
  return time / halfLifeCtr;
};
