/**
 * Função anônima
 *  */

(function(x1, x2, operador){
    return eval(`${x1} ${operador} + ${x2}`); // Eval para calcular, convertendo a string
})(35, 16, '-'); 


// Associando a mesma função a uma variável
let a = (function(x1, x2, operador){
    return eval(`${x1} ${operador} + ${x2}`); // Eval para calcular, convertendo a string
})(35, 16, '-'); 

// a chamada se dá logo após a criação da função

console.log(a);