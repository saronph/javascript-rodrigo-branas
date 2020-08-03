// Função forma um bloco isolado, não sendo possível acessar externamente
// para ser possível o acesso é feito o retorno do que deve ser público

var createCounter = function () {
  var value = 0;
  return {
    add: function () {
      return ++value;
    },
  };
};

var counter = createCounter();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
