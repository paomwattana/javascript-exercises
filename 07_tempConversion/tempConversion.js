const ftoc = function(f) {
  // 1 decimal place
  return Math.round(((f-32)*5/9) * 10) / 10;
};

const ctof = function(c) {
  // 1 decimal place
  return Math.round((c*9/5+32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
