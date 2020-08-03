// Revealing Module Pattern

var counter = (function () {
  var value = 0;
  var add = function () {
    return ++value;
  };
  var reset = function () {
    value = 0;
  };
  return {
    add: add,
    reset: reset,
  };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());

// Module pattern

var counter = (function () {
  var value = 0;
  return {
    add: function () {
      return ++value;
    },
    reset: function () {
      value = 0;
    },
  };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());
