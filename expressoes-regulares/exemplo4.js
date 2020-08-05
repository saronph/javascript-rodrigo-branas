// ranges = [0-9] valor entre eles, [^0-9] apenas 0 ou 9
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

var telefone = "(80) 9942-1234";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));
