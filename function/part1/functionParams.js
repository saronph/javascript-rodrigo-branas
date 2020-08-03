// Funções passadas como parametro

var produto = { nome: "Sapato", preco: 150 };

var formulaImpostoA = function (preco) {
  return preco * 0.1;
};

var formulaImpostoB = function (preco) {
  return preco * 0.2;
};

// Função ideal para reuso, só precisando alterar a 'formulaImposto'

var calcularPreco = function (produto, formulaImposto) {
  return produto.preco + formulaImposto(produto.preco);
};

console.log(calcularPreco(produto, formulaImpostoA));
console.log(calcularPreco(produto, formulaImpostoB));
