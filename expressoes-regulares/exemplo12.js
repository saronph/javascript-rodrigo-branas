// replace localiza os valores e substitui

var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var pre = /\(\d{2}\)/g;
var suf = /\d{4,5}-?\d{4}/g;

var telefone =
  "<table><tr>\
<td>(80) 999778899</td>\
<td>(90) 99897-8877</td>\
<td>(70) 98767-9999</td>\
</tr></table>";

console.log(telefone.replace(regExp, "telefone"));
