// A referencia a 'message' não se perde mesmo após o return
var helloWorld = function () {
  var message = "Hello World!";
  return function () {
    return message;
  };
};

var fnHelloWorld = helloWorld();
console.log(fnHelloWorld());

console.log(helloWorld);
console.log(helloWorld()());
