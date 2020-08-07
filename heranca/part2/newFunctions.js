var Homem = function (nome, idade) {
  (this.nome = nome), (this.idade = idade);
};

Homem.prototype.sexo = "masculino";

var joao = new Homem("João", 20);
console.log(joao);
console.log(joao.sexo);

var pedro = {};
pedro.__proto__ = Homem.prototype;
Homem.call(pedro, "pedro", 15);
console.log(pedro);
console.log(pedro.sexo);

var carlos = {};
Homem.apply(carlos, ["carlos", 18]);
console.log(carlos);

Homem.prototype.sexo = "feminino";
console.log(pedro.sexo);
console.log(carlos.sexo);
