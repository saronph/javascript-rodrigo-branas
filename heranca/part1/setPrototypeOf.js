var homem = {
  sexo: "masculino",
};

var joao = {
  nome: "João",
  idade: 20,
  __proto__: homem,
};

var pedro = {
  nome: "Pedro",
  idade: 20,
  __proto__: homem,
};

Object.setPrototypeOf(joao, homem);

console.log(joao);
console.log(joao.sexo);
