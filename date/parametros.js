// passando data por parametro, mes -1 (começa a partir de 0)
data1 = new Date("2014, 11, 25");

let data5 = new Date("2014, 11, 25");
// Ano normal
let year = data5.getFullYear();
// Mês -1
let month = data5.getMonth();
// Dia da semana -1
let day = data5.getDay();
// Dia normal
let dayNormal = data5.getDate();

console.log(data1);
console.log(year);
console.log(month);
console.log(day);
console.log(dayNormal);
