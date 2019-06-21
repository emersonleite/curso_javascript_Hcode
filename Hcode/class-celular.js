/**
 * Orientação a objetos
 * Métodos, atributos
 * this - comando interno utilizado para referenciar
 * Classe - conjunto de atributos e métodos
 * palavra chave 'new' para instanciar objeto a partir da classe
 * 
 */

 /**
  * Classe celular com a notação mais antiga
  */
 
 let celular = function(){

    let cor2 = "preto";
    this.cor = "prata"; // this permite o acesso do atributo. Semm o this ele é como que uma variável.
    this.ligar = function(){
        console.log("Ligação sendo realizada");
        return 'ligando';
    } // Método sendo criado com this. ligar sem parênteses .
}

 let objeto = new celular(); // o parenteses é por que se chama um método construtor da classe

// Saídas
console.log(objeto);
console.log(objeto.cor); // chamando direto o atributo
console.log(objeto.ligar()); // ligar com (), pois está sendo invocado.

