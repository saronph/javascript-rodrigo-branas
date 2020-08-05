// quando tem mais de 1 info, é necessário os '()' e '+' para representar que têm mais de 1 elemento
// se for menos de 1 elemento da false
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;

var telefone1 =
  "<table><tr>\
<td>(80) 999778899</td>\
<td>(90) 99897-8877</td>\
<td>(70) 98767-9999</td>\
</tr></table>";

// var telefone2 = "(80) 99942-1234";

console.log(regExp.exec(telefone1));
console.log(regExp.test(telefone1));

// console.log(regExp.exec(telefone2));
// console.log(regExp.test(telefone2));
