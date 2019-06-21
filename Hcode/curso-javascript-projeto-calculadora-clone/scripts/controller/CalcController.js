/**
 * Classe com as regras de negócio. Deve ser chamada no arquivo html em primeiro lugar.
 * O comando interno this referencia atributos e métodos
 * O encapsulamento controla o acesso a um atributo ou método
 * Os tipos de encapsulamento são public, protected e private
 * # private: acessível somente atributos e métodos da própria classe
 * # _ depois de this definem que o atributo ou método é privado
 * Métodos getters e setters para acesso e atribuição de valores
 */

class CalcController {
    constructor(){                        // Definindo o construtor
        this._displayCalc = "0";           // Valor de início no display (números)
        this._dataAtual;                  // Valor da data atual
    }

    // Definindo métodos getters e setters

    get displayCalc(){                     //Mostrando o valor
        return this._displayCalc;
    }

    set displayCalc(valor){                 // Atribuindo o valor 
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(valor){
        return this._dataAtual = valor;
    }

}