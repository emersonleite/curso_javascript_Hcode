/**
 * Arrays 
 * Representação através de colchetes
 * Busca-se atraves de índices;
 * Separa-se os itens por vírgula.
 * Aceita-se valores com tipos diferentes.
 * Posição começa em 0.
 */
let carros = ["palio 98","toro", "uno", 10, true, new Date(), function(){} ]

// Saídas:

console.log(carros); // mostrando o array
console.log("tamanho do array " + carros.length); // mostrando o comprimento do array
console.log(carros[0]); // mostando o objeto com índice 0
console.log(carros[5]); // mostando o objeto com índice 5
console.log(carros[5].getFullYear()); // mostando o ano do objeto com índice 5

// Método do array - forEach para percorrer o array

carros.forEach(function(value, index){
    console.log(index, value)
}); //Recebe uma função anônima.