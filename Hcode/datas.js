let agora = Date.now(); //saída em timestamp em milisegundos. Quantidade de segundo desde 01/01/1970
console.log(agora);

let agora2 = new Date(); // instanciando um objeto data. Data num formato completo "Fri Jun 21 2019 10:37:47 GMT-0300 (Horário Padrão de Brasília)". 
console.log(agora2)

console.log(agora2.getDate()); // dia
console.log(agora2.getFullYear());// Ano
console.log(agora2.getMonth()); // Mês-1 . Começa em 0

console.log(agora2.toLocaleDateString('pt-BR')); // formatando no padrão BR
