// '?' do ex fala que o hífen é opcional
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

var telefone1 = "(80) 999421234";

var telefone2 = "(80) 99942-1234";

console.log(regExp.exec(telefone1));
console.log(regExp.test(telefone1));

console.log(regExp.exec(telefone2));
console.log(regExp.test(telefone2));
