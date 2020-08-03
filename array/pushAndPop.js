// push insere um novo elemento no fim do array

var carros = [];

carros[0] = "ka";
carros[2] = "Corsa";
carros[1] = "Palio";

carros.push("Gol");

var newCarros = carros.toString();
var tamanho = carros.length;

console.log(newCarros);
console.log(tamanho);
console.log(carros);

// pop remove o ultimo elemento do array

carros.pop();
carros.pop();
console.log(carros);
