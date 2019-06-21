/**
 * Orientação a objetos
 * Métodos, atributos
 * this - comando interno utilizado para referenciar
 * Classe - conjunto de atributos e métodos
 * palavra chave 'new' para instanciar objeto a partir da classe
 * 
 */

 /**
  * Classe celular com a notação mais recente ES6
  */

class celular {
    constructor(){          // definindo o construtor da classe
        this.cor = "prata";
    }
    ligar(){
        console.log("Ligação sendo realizada");
        return 'ligando';
    }
}

let objeto = new celular();

// Saídas
console.log(objeto);
console.log(objeto.cor); // chamando direto o atributo
console.log(objeto.ligar()); // ligar com (), pois está sendo invocado.

