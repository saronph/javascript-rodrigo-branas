// Function Declaration: A função é carregada antes do código ser interpretado (a ordem da execução não influencia)

console.log(soma(2, 4));

function soma(a, b) {
  return a + b;
}

// Function Expression: A função é carregada durante a interpretação código (a ordem da execução é relevante)

var soma = function (a, b) {
  return a + b;
};

console.log(soma(2, 2));
