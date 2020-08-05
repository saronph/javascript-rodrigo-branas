// {n} = especifica a quantidade de caracteres é necessário (respeitando o range)
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;

var telefone = "(80) 9942-1234";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));
