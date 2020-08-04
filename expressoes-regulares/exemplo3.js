// '^' = 'tem que começar com ...' ou '$' = tem que terminar com ...
var regExp = /^\(48\) 9999-9999$/;

// var telefone = "O telefone é: (48) 9999-9999, tratar com João";
var telefone = "(48) 9999-9999";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));
