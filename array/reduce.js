// prev = elemento anterior, cur = elemento atual, '0' valor inicial (pode mudar)

var carros = [];

carros[0] = { marca: "Ford", preco: 28800 };
carros[1] = { marca: "Chevrolet", preco: 34750 };
carros[2] = { marca: "Fiat", preco: 32000 };

var carrosPreco = carros.reduce(function (prev, cur) {
  return prev + cur.preco;
}, 0);

console.log(carrosPreco);
