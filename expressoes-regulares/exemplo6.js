// {n} = especifica a quantidade de caracteres é necessário (respeitando o range)
// {4,5} aceita de 4 á 5 números (ex quando sp tinha um número a mais no cel)
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;

var telefone1 = "(80) 99942-1234";

var telefone2 = "(80) 9942-1234";

console.log(regExp.exec(telefone1));
console.log(regExp.test(telefone1));

console.log(regExp.exec(telefone2));
console.log(regExp.test(telefone2));
