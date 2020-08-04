var regExp = /9999-9999/;
var telefone = "9999-9999";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//////////////////////

// parenteses são carac especiais, precisam do '\' para ser identificados
var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));
