// Retorna um array derivado do array inicial

var carros = [];

carros[0] = { marca: "Ford", modelo: "ka" };
carros[1] = { marca: "Chevrolet", modelo: "Corsa" };
carros[2] = { marca: "Fiat", modelo: "Palio" };

var carrosFord = carros.map(function (elemento) {
  return elemento.marca;
});

console.log(carrosFord);

//////////////////

var carrosFord = carros.map(function (elemento) {
  return elemento.modelo.length;
});

console.log(carrosFord);
