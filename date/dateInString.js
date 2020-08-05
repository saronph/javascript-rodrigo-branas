// Date.parse (transforma a data em milisegundos)
// Formatos de datas aceitos RFC 2822 ou ISO 8601

data1 = Date.parse("2014/12/25");
data2 = new Date("12/25/2014");
data3 = new Date("25/12/2014");
// Invalid

console.log(data1);
console.log(data2);
console.log(data3);
