/**
 * Função comum 01
 *  */

function somar(x1, x2){
    return x1 + x2;
}

let resultado = somar (520,23); // associando resultado da função a uma variável

console.log(resultado)


/**
 * Função comum 02
 *  */

function calc(x1, x2, operador){
    return eval(`${x1} ${operador} + ${x2}`); // Eval para calcular, convertendo a string
}

let resultado2 = calc (520,23, '*' ); // associando resultado da função a uma variável

console.log(resultado2)