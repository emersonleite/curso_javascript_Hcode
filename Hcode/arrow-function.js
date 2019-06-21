/**
 * Arrow function
 *  */

let calc = (x1, x2, operador) => {
    return eval(`${x1} ${operador} + ${x2}`); // Eval para calcular, convertendo a string
}

// Associa-se a uma variável através de let, nesse caso. Usa-se a seta => entre parentes e chaves
let resultado2 = calc (520,23, '*' ); 
console.log(resultado2)