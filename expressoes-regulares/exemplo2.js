// test da true pois encontra no número dentro da string
var regExp = /\(48\) 9999-9999/;
var telefone = "O telefone é: (48) 9999-9999, tratar com João";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));
