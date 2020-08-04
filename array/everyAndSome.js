// 'every' verifica se TODOS os elementos do array atendem a condição
// 'some' verifica se ALGUM dos elementos do array atende a condição

var carros = [];

carros[0] = { marca: "Ford", modelo: "ka" };
carros[1] = { marca: "Chevrolet", modelo: "Corsa" };
carros[2] = { marca: "Fiat", modelo: "Palio" };

var carrosFord = carros.every(function (elemento) {
  return elemento.marca === "Ford";
});

console.log(carrosFord);

////////////////////////

var carros = [];

carros[0] = { marca: "Ford", modelo: "ka" };
carros[1] = { marca: "Chevrolet", modelo: "Corsa" };
carros[2] = { marca: "Fiat", modelo: "Palio" };

var carrosFord = carros.some(function (elemento) {
  return elemento.marca === "Ford";
});

console.log(carrosFord);
