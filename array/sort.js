// 'sort' se array for só de string ele ordena de forma alfabética
// a primeiro elemento, b segundo elemento da comparação

var carros = [];

carros[0] = { marca: "Ford", preco: 28800 };
carros[1] = { marca: "Chevrolet", preco: 34750 };
carros[2] = { marca: "Fiat", preco: 32000 };

// compara por preço ordem crescente, decrescente fazer b - a
var carrosPreco = carros.sort(function (a, b) {
  return a.preco - b.preco;
});

console.log(carrosPreco);
