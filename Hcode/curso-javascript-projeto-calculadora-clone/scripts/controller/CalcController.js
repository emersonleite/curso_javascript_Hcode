/**
 * Classe com as regras de negócio. Deve ser chamada no arquivo html em primeiro lugar.
 * O comando interno this referencia atributos e métodos
 * O encapsulamento controla o acesso a um atributo ou método
 * Os tipos de encapsulamento são public, protected e private
 * # private: acessível somente atributos e métodos da própria classe
 * # _ depois de this definem que o atributo ou método é privado
 * Métodos getters e setters para acesso e atribuição de valores
 * 
 * DOM - Document object model
 * BOM - Browser Object Model 
 * 
 * Para visualizar a arvore de objetos, basta digitar 'document' no console.
 * colocando 'dir(document)' se verá os objetos.
 * Para visualizar a arvore de objetos da janela, com atributos e métodos aplicáveis, basta digitar 'window' no console.
 * 
 */

class CalcController {
    constructor(){                                                      // Definindo o construtor
        this._displayCalcEl = document.querySelector("#display");       //Selecinando o elemento que representa o display
        this._dateEl = document.querySelector("#data"); 
        this._timeEl = document.querySelector("#hora"); 
        this._currentDate = "01/07/1976";                                              // Valor da data atual
        this.initialize();
    }

    // Método para inicialização de alguns dados

    initialize(){

        this._dateEl.innerHTML = "01/01/1970";
        this._timeEl.innerHTML = "00:00"; 
    }

    // Definindo métodos getters e setters

    get displayCalc(){                     //Mostrando o valor
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){                 // Atribuindo o valor 
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        return this._currentDate = valor;
    }

}

// Aula C05, minuto 4:33.