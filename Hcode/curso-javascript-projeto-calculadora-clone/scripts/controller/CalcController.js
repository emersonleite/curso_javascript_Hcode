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
 * 
 * Para visualizar a arvore de objetos, basta digitar 'document' no console.
 * colocando 'dir(document)' se verá os objetos.
 * Para visualizar a arvore de objetos da janela, com atributos e métodos aplicáveis, basta digitar 'window' no console.
 * 
 * 
 * setInterval - função executada em um intervalo de tempo. O tempo é marcado em milisegundos.
 * setTimeout - tempo fixo, uma vez. 
 */

class CalcController {
    // Definindo o construtor
    constructor(){     
        //Selecinando o elemento que representa o display       
        this._locale = 'pt-BR';                                         
        this._displayCalcEl = document.querySelector("#display");       
        this._dateEl = document.querySelector("#data"); 
        this._timeEl = document.querySelector("#hora"); 
        this._currentDate;                                             
        this.initialize();
    }

    /**
     * Métodos para inicialização de alguns dados
     **/
    initialize(){
        // Evitar lapso de um segundo sem data/ hora na tela, ao recarregar
        this.setDisplayDateTime();

        setInterval(()=>{
            this.setDisplayDateTime();            
        }, 1000);
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day:"2-digit",      // para colocar data por extenso - 2 digitos
            month:"long",       // para colocar data por extenso - mês escrito longo
            year: "numeric"     // para colocar data por extenso - Ano numérico
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    /**
     * Definindo métodos getters e setters
     **/ 

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){                     //Mostrando o valor
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){                 // Atribuindo o valor 
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();                  // Data atual
    }

    set currentDate(value){
        this._currentDate = value;
    }

}

// Aula C05, minuto 4:33.