var Pessoa = function (nome, idade) {
  this.nome = nome;
  this.idade = idade;
};

var pedro = new Pessoa("Pedro", 20);

pedro instanceof Pessoa;
pedro instanceof Date;

console.log(pedro instanceof Pessoa);
console.log(pedro instanceof Date);
console.log("nome" in pedro);
console.log("peso" in pedro);
console.log(pedro);
