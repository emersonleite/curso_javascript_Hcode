# Anotações

- *Case sensitive*. Diferença entre minúsculas e maiúsculas;

```javascript
alert("Teste");
```
é diferente de 

```javascript
Alert("Teste");
```

- Tanto faz no caso de texto, a utilização de aspas simples ou duplas. Abre-se com simples, fecha-se com simples, assim como no caso das duplas. 
- Os arquivos de Js devem ficar separados.
  
- Comentários em javascript são feitos com:

```javascript
// para linhas;

/* 
 para blocos de código;
*/

/**
* para gerar automaticamente blocos de somente comentário
*/

```

## Variáveis:

### Exemplo de aplicação:

```javascript
var olaMundo = "Ola mundo";
```

O comando *var* é utlizado para declarar variáveis.

No ES6 surgiu a declaração do tipo *let*, que é declarada dentro de determinado escopo. Ou seja, dentro de determinado bloco de código, por exemplo. Isso permite maior controle onde até a variável pode ir. 

Com *const*, se declaram constantes.

```javascript
var olaMundo = "Ola mundo";
let num = 10;
const pi = 3.1415;
```

### Tipos de dados de variáveis:

- Number (inteiro ou decimal);
- Objetos -> Arrays (série de variáveis indexáveis, que começa em zero);
- String;
- Booleanos, que pode ser true ou false.
- Funções -> É possível colocar uma função anônima dentro de uma variável.

Comando typeOf para saber o tipo de variável.

Comando instanceOf para determinar de que instancia ou objeto veio a variável.

O javascript é uma linguagem fracamente tipada, com tipo de dado variável.
Nesse caso se usam funções para conversão como *parseInt*,*parseFloat* e t*
*toString*

### Operadores aritméticos, de atribuição, de comparação, lógicos e incremental ou decremental

```javascript
let a = 10;
const b = 20;
console.log(a == b) // false
```

```javascript
let a = 10;
const b = "10";
console.log(a == b) // true
```

Para avaliar os tipos de dados e valores, daí se utiliza três *=*.

```javascript
let a = 10;
const b = "10";
console.log(a === b) // false
```
Outros operadores de comparação:

*>= , <=, < , >*


Para o diferente se usa:

!= (se não se quiser comparar o tipo) e !== (se quiser se comparar o tipo)


### Operadores lógicos

Para *and* se usa **&&**. 

Para *or* se usa **||**.

Exemplo de uso:

```javascript

console.log(a == c && typeof a == 'string'); //false

console.log(a == c || typeof a == 'string'); //true

```

### Operador incremental ou decremental

Usa-se: 

*++* e *--*. 

## Condicionais

```javascript

let cor = "";

if (cor === "verde") {

    console.log("siga")

} else if (cor === "amarelo") {

    console.log("atenção")

} else if (cor === "vermelho") {

    console.log("pare")

} else{

    console.log("Não achado")

}
```





