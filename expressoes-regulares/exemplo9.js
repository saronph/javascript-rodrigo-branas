// Metacaracteres '\d' é um que aceita [0-9], '\s' aceita um espaço em branco

var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;

var telefone1 =
  "<table><tr>\
<td>(80) 999778899</td>\
<td>(90) 99897-8877</td>\
<td>(70) 98767-9999</td>\
</tr></table>";

// var telefone2 = "(80) 99942-1234";

console.log(regExp.exec(telefone1));
console.log(regExp.test(telefone1));
