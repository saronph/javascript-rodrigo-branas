var generateSerial = function (max) {
  max = max || 1000;
  return Math.floor(Math.random() * max);
};

console.log(generateSerial(1000));
console.log(generateSerial());

////////////////////////////

var generateSerial = function (max) {
  // !max retorna true
  if (!max) {
    max = 1000;
  }
  return Math.floor(Math.random() * max);
};

console.log(generateSerial(1000));
console.log(generateSerial());
