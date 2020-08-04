// permite eliminar/trocar/adicionar um elemento de uma posição
// 1º parametro posição, 2º quantidade a ser eleminado, 3º ou + adiciona novo elementos

var carros = [];

carros[0] = "ka";
carros[2] = "Corsa";
carros[1] = "Palio";

var pos = carros.indexOf("Palio");

// 2º parametro 0 não remove ninguém

carros.splice(1, 0, "Ferrari", "Chevete");
console.log(carros);

// 3º elemente em diante serão adicionados a partir da posição passada

carros.splice(pos, 1, "Ferrari", "Chevete");
console.log(carros);

// ou por a posição diretamente no lugar do 'pos', 2º parametro é a quantidade a ser eleminado

carros.splice(pos, 1);
carros.toString();

console.log(pos);
console.log(carros);
