// Parametros a mais são descartados e podem ser consultados via 'arguments'

var getIdade = function (extra) {
  console.log(arguments);
  return this.idade + extra;
};

var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: getIdade,
};

console.log(pessoa.getIdade(2));

//Passa 'pessoa' como contexto para não retornar undefined
console.log(getIdade());
console.log(getIdade.call(pessoa, 2, 13, 9));
console.log(getIdade.apply(pessoa, [2, 13, 9]));
