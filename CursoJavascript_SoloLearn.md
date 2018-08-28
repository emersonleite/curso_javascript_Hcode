# Visão Geral
## Bem vindo ao JavaScript

   
**O JavaScript** é uma das linguagens de programação mais populares do mundo e é usado para adicionar interatividade a páginas da Web, processar dados e criar vários aplicativos (aplicativos móveis, aplicativos de área de trabalho, jogos e mais).  

> Aprender os fundamentos de um idioma para criar o programa desejado,
> seja do lado do cliente ou do lado do servidor.


## Seu primeiro JavaScript
    
Vamos começar adicionando JavaScript a uma página da web.  
JavaScript na web vive dentro do documento **HTML** .  
Em HTML, o código JavaScript deve ser inserido entre as tags  \<script> e </ script> :

```javascript
    <script>  
    ...  
    </ script>
```
JavaScript pode ser colocado nas seções \<body> e \<head> da página HTML .  
No exemplo abaixo, colocamos dentro da tag \<body> .

![](https://api.sololearn.com/DownloadFile?id=2732)


## Saída
   
Vamos usar o JavaScript para imprimir "Hello World" no navegador.

```javascript
<html>  
<head> </ head>  
<corpo>  
<script>  
document.write ("Hello World!");  
</ script>  
</ body>  
</ html>
```
[Experimente você mesmo](https://code.sololearn.com/642/#js)

A função **document.write ()** escreve uma string no nosso documento HTML. Essa função pode ser usada para escrever texto, HTML ou ambos.  
  
O código acima exibe o seguinte resultado:

![](https://api.sololearn.com/DownloadFile?id=2733)

O método **document.write ()** deve ser usado apenas para testes. Outros mecanismos de saída aparecem nas próximas lições.

## Formatando Texto
 
  
Assim como no HTML, podemos usar tags HTML para formatar texto em JavaScript.  Por exemplo, podemos produzir o texto como um cabeçalho.

```javascript
<html>  
<head> </ head>  
<corpo>  
<script>  
document.write (" **<h1>** Olá mundo! **</ h1>** ");  
</ script>  
</ body>  
</ html>
```
[Experimente você mesmo](https://code.sololearn.com/643/#js)

**Resultado:**

![](https://api.sololearn.com/DownloadFile?id=2734)

## JavaScript em \<head>

  
Você pode colocar qualquer número de scripts em um documento HTML.  
Normalmente, a tag de script é colocada na \<head> do documento HTML:

```javascript
<html>  
<head>  
<script>  
</ script>  
</ head>  
<body>  
</ body>  
</ html>
```
## JavaScript em \<body>

  
Como alternativa, inclua o JavaScript na tag \<body>.

```javascript
<html>  
<head> </ head>  
<body> <script> </ script> </ body> 
</ html>
```

É uma boa idéia colocar scripts na parte inferior do elemento \<body>.  
Isso pode melhorar o carregamento da página, porque a exibição de HTML não é bloqueada pelo carregamento de scripts.

## A tag \<script>
 
  
A tag \<script> pode ter dois atributos, **idioma** e **tipo** , que especificam o tipo do script:

```javascript
<script language = "javascript" type = "text / javascript">  
  
</ script>
```
> O atributo **language** está obsoleto e não deve ser usado .

No exemplo abaixo, criamos uma caixa de alerta dentro da tag de script, usando a função **alert ()** .

```javascript
<html>  
<head>  
<title> </ title>  
<script type = "texto / javascript">  
alert ("Esta é uma caixa de alerta!");  
</ script>  
</ head>  
<body>  
</ body>  
</ html>
```

[Experimente você mesmo](https://code.sololearn.com/644/#js)

  **Resultado:**

![](https://api.sololearn.com/DownloadFile?id=2737)

O atributo **type**: \<script type = "text / javascript"> também não é mais necessário, pois JavaScript é a linguagem de script HTML padrão.

## JavaScript externo
  
Scripts também podem ser colocados em **arquivos externos** .  
Scripts externos são úteis e práticos quando o mesmo código é usado em várias páginas da web diferentes.  
Os arquivos JavaScript possuem a **extensão de arquivo .js** .  
  
Abaixo, criamos um novo **arquivo de texto** , e chamou-lhe **demo.js** .

![](https://api.sololearn.com/DownloadFile?id=2738)

## JavaScript externo
  
Para usar um script externo, coloque o nome do arquivo de script no atributo **src** (source) da tag \<script> .  
  
Aqui está um exemplo:

```javascript
<html>  
<head>  
<title> </ title>  
<script src = "demo.js" > </ script>  
</ head>  
<body>  
</ body>  
</ html>
```
Sua **demonstração. O** arquivo **js** inclui o seguinte JavaScript:

```javascript
alert ("This is an alert box!");
```

> Scripts externos não podem conter tags \<script> .

## JavaScript externo

  
O resultado do exemplo anterior será idêntico ao resultado quando incluímos o JavaScript no arquivo HTML. Você pode colocar uma referência de script externa em \<head> ou \<body>, o que você preferir. O script se comportará como se estivesse localizado exatamente onde a tag \<script> está localizada.

![](https://api.sololearn.com/DownloadFile?id=2737)

Colocar um JavaScript em um arquivo externo tem as seguintes vantagens:
- Ele separa HTML e código.
-  Torna o HTML e o JavaScript mais fáceis de ler e manter.
-  Arquivos JavaScript armazenados em cache podem acelerar as cargas de páginas.

## Comentários JavaScript
 
  
Nem todas as instruções JavaScript são "executadas".  
Código após uma barra dupla //, ou entre / * e * /, é tratado como um **comentário** .  
Comentários são ignorados e não são executados. Comentários de  **linha única** usam barras duplas.

```javascript
<script>  
// Este é um  alerta de comentário de linha única 
alert ("Esta é uma caixa de alerta!");  
</ script
```
[Experimente você mesmo](https://code.sololearn.com/645/#js)

**Resultado:**

![](https://api.sololearn.com/DownloadFile?id=2737)

## Comentários de várias linhas
  
Tudo o que você escreve entre / * e * / será considerado como um comentário de várias linhas.  
  
Aqui está um exemplo.
```javascript
<script>  
/ * Este código  
cria uma  
caixa de alerta * /  
alert ("Esta é uma caixa de alerta!");  
</ script>
```
[Experimente você mesmo](https://code.sololearn.com/646/#js)

> Comentários são usados ​​para descrever e explicar o que o código está
> fazendo.

# Conceitos básicos

## Variáveis
  
  
**Variáveis** são contêineres para armazenar valores de dados. O valor de uma variável pode mudar ao longo do programa.  
Use a palavra-chave **var** para declarar uma variável :

```javascript
var x = 10;
```

No exemplo acima, o valor **10** é atribuído à variável **x** .

> JavaScript é sensível a maiúsculas e minúsculas. Por exemplo, as
> variáveis _lastName_ e _lastname_ são duas variáveis ​​diferentes.

## O sinal de igualdade

  
  
Em JavaScript, o sinal de igual (=) é chamado de operador " **atribuição** ", em vez de um operador "igual a".  
Por exemplo, **x = y** atribuirá o valor de **y** a **x** .

Uma variável pode ser declarada sem um valor. O valor pode exigir algum cálculo, algo que será fornecido posteriormente, como a entrada do usuário.  
Uma variável declarada sem valor terá o valor **indefinido** .

## Usando Variáveis

  Vamos atribuir um valor a uma variável e enviá-la ao navegador.
  
```javascript
var x = 100;  
document.write (x);
```
[Tente você mesmo](https://code.sololearn.com/647/#js)

**Resultado: o**  uso de variáveis ​​é útil de várias maneiras. Você pode ter mil linhas de código que podem incluir a variável x. Quando você altera o valor de x **uma vez** , ele será automaticamente alterado em **todos os lugares em** que você o usou.

![](https://api.sololearn.com/DownloadFile?id=2740)

> Cada "instrução" escrita é chamada de **declaração**.As instruções
> JavaScript são separadas por **ponto e vírgula**.


## Nomeando Variáveis

  
Os nomes das variáveis JavaScript são sensíveis a maiúsculas e minúsculas.  
No exemplo abaixo, alteramos x para maiúsculas:

```javascript
var x = 100;  
document.write (X);
```
[Tente você mesmo](https://code.sololearn.com/648/#js)

  
Este código não resultará em nenhuma saída, já que x e X são duas variáveis ​​diferentes.  
  
Regras de nomenclatura:  
- O primeiro caractere **deve ser** uma letra, um sublinhado (_) ou um sinal de dólar ($). Caracteres subseqüentes podem ser letras, dígitos, sublinhados ou cifrões.  
- Números **não** são **permitidos** como primeiro caractere.  
- Os nomes de variáveis **não podem** incluir um **operador matemático ou lógico** no nome. Por exemplo, _2 * alguma coisa_ ou _isso + isso_ ;  
- Os nomes de JavaScript **não devem conter espaços** .

> Hífens não são permitidos em JavaScript. Está reservado para
> subtrações.

Existem algumas outras regras a serem seguidas ao nomear suas variáveis ​​JavaScript:  
  
- Você **não deve** usar nenhum **símbolo especial** , como _meu # num,_ _num%_ , etc.  
- Certifique-se de não usar nenhuma das seguintes palavras reservadas do JavaScript.
- 
![](https://api.sololearn.com/DownloadFile?id=2741)

> Quando você se familiarizar mais com o JavaScript, lembrar dessas
> palavras-chave será muito mais fácil.

## Tipos de dados

  
  
O termo **tipo de dado** refere-se aos tipos de valores com os quais um programa pode funcionar. As variáveis ​​JavaScript podem conter muitos tipos de dados, como **números** , **sequências** (strings) , **matrizes** (arrays) e muito mais.  
  
Ao contrário de muitas outras linguagens de programação, o JavaScript não define diferentes tipos de números, como inteiros, curtos, longos, de ponto flutuante, etc. Os  números JavaScript podem ser escritos com ou sem decimais.
```javascript
var num = 42; // Um ​​número sem decimais
```

## Números de ponto flutuante
 
  Os números JavaScript também podem ter decimais.
  
```javascript
<script>  
var preço = 55,55;  
document.write (preço);  
</ script>
```

[Experimente você mesmo](https://code.sololearn.com/649/#js)

**Resultado: **
![](https://api.sololearn.com/DownloadFile?id=2742)

Os números JavaScript são sempre armazenados como **números de ponto flutuante de precisão dupla**.

## Strings

  
  
**Strings** JavaScript são usadas para armazenar e manipular texto.  
Uma string pode ser qualquer texto que apareça entre **aspas** . Você pode usar aspas simples ou duplas.

```javascript
var name = 'John';  
var text = "My name is John Smith";
```

Você pode usar aspas dentro de uma string , desde que não correspondam às aspas que cercam a string .

```javascript
var text = "Meu nome é 'John'";
```

Como as strings devem ser escritas entre aspas, as citações dentro da string devem ser manipuladas. O **caractere de escape de barra invertida (\)** transforma caracteres especiais em caracteres de string .

```javascript
var sayHello = 'Olá, mundo! \' Eu sou um programador JavaScript. \ ' ';  
document.write (sayHello);
```

[Tente você mesmo](https://code.sololearn.com/650/#js)

**Resultado:**  O caractere de escape (\) também pode ser usado para inserir outros caracteres especiais em uma string . Esses caracteres especiais podem ser adicionados a uma string detexto usando o sinal de barra invertida.

![](https://api.sololearn.com/DownloadFile?id=2743)

![](https://api.sololearn.com/DownloadFile?id=2786)

Se você começar uma string com uma aspa simples, também deverá finalizá-la com uma aspa simples. A mesma regra se aplica às aspas duplas.Caso contrário, o JavaScript ficará confuso.

## Booleanos

   
Em JavaScript, com Boolean, você pode ter um dos dois valores, **verdadeiro** ou **falso** .  
Eles são úteis quando você precisa de um tipo de dados que pode ter apenas um dos dois valores, como Sim / Não, Ativado / Desativado, Verdadeiro / Falso.  
  
**Exemplo:**

```javascript
var isActive = true;  
var isHoliday = false;
```
O valor booleano de 0 (zero), null , undefined , string vazia é **false** .  
Tudo com um valor "real" é **verdadeiro** .

## Operadores aritméticos
  
Operadores aritméticos executam funções aritméticas em números (literais ou variáveis). No exemplo abaixo, o operador de adição é usado para determinar a soma de dois números.

![](https://api.sololearn.com/DownloadFile?id=2745)

```javascript
var x = 10 + 5;  
document.write (x);  
  
// Saídas 15
```
[Experimente você mesmo](https://code.sololearn.com/651/#js)

Você pode adicionar quantos números ou variáveis ​​juntos quiser ou precisar.

```javascript
var x = 10;  
var y = x + 5 + 22 + 45 + 6548;  
document.write (y);  
  
// Saídas 6630
```

[Experimente você mesmo](https://code.sololearn.com/652/#js)

## Multiplicação

   
O operador de multiplicação (*) multiplica um número pelo outro.

```javascript
var x = 10 * 5;  
document.write (x);  
  
// Saídas 50
```
[Experimente você mesmo](https://code.sololearn.com/653/#js)

## Divisão
 
O operador / é usado para executar operações de divisão:

```javascript
var x = 100/5;  
document.write (x);  
  
// Saídas 20
```

[Experimente você mesmo](https://code.sololearn.com/654/#js)

## O Módulo

  O operador Modulus (%) retorna o resto da divisão (o que sobra).

```javascript
var myVariable = 26%6;  
  
// myVariable é igual a 2
```

[Tente você mesmo](https://code.sololearn.com/655/#js)

> Em JavaScript, o operador de módulo é usado não apenas em inteiros,
> mas também em números de ponto flutuante.

## Incremento e Decremento
  
  
**Incremento ++**  
O operador de incremento incrementa o valor numérico de seu operando em um. Se colocado antes do operando, retorna o valor incrementado. Se colocado depois do operando, retorna o valor original e incrementa o operando.  
**Decremento - -**  
O operador decremento decrementa o valor numérico de seu operando em um. Se colocado antes do operando, retorna o valor decrementado. Se colocado após o operando, ele retorna o valor original e, em seguida, decrementa o operando.  
  
**Alguns exemplos:**

![](https://api.sololearn.com/DownloadFile?id=2746)

Como na matemática escolar, você pode alterar a ordem das operações aritméticas usando parênteses. Exemplo: var x = (100 + 50) * 3;

## Operadores de atribuição

  
Os operadores de atribuição atribuem valores a variáveis ​​JavaScript.![](https://api.sololearn.com/DownloadFile?id=2747)


## Operadores de Comparação

   
Os operadores de comparação são usados ​​em instruções lógicas para determinar a igualdade ou a diferença entre variáveis ​​ou valores. Eles retornam **verdadeiro** ou **falso** .  
  
O operador **igual a (==)** verifica se os valores dos operandos são iguais.

```javascript
var num = 10;  
// num == 8 retornará falso
```

[Experimente você mesmo](https://code.sololearn.com/656/#js)

A tabela abaixo explica os operadores de comparação.

![](https://api.sololearn.com/DownloadFile?id=2748)

> Ao usar operadores, certifique-se de que os argumentos sejam do mesmo
> tipo de dados; números devem ser comparados com números, strings com
> strings e assim por diante.

## Operadores lógicos

  
Operadores **lógicos** , também conhecidos como operadores **booleanos** , avaliam a expressão e retornam **verdadeiro** ou **falso** .  
  
A tabela abaixo explica os operadores lógicos ( **AND** , **OR** , **NOT** ).

![](https://api.sololearn.com/DownloadFile?id=2749)

## Operadores lógicos
  
No exemplo a seguir, conectamos duas expressões booleanas ao operador **AND** .

```javascript
(4>2)&&(10<15)
```

[Experimente você mesmo](https://code.sololearn.com/657/#js)

Para que esta expressão seja **verdadeira** , ambas as condições devem ser **verdadeiras** .  
- A primeira condição determina se 4 é maior que 2, o que é **verdadeiro** .  
- A segunda condição determina se 10 é menor que 15, o que também é **verdade** .  
Com base nesses resultados, toda a expressão é considerada **verdadeira** .

### Operador condicional (ternário)

  Outro operador condicional JavaScript atribui um valor a uma variável , com base em alguma condição.
  
**Sintaxe:**
```javascript
variable = (condition) ? value1: value2
```

**Por exemplo:**

```javascript
var isAdult = (age < 18) ? "Too young": "Old enough";
```
[Tente você mesmo](https://code.sololearn.com/658/#js)

Se a variável _age_ for um valor abaixo de 18, o valor da variável _isAdult_ será "Too young". Caso contrário, o valor de _isAdult_ será "Old enough".

> Operadores lógicos permitem que você conecte quantas expressões
> desejar.

## Operadores de String
 
  
O operador mais útil para strings é a _concatenação_ , representada pelo sinal +.  
A concatenação pode ser usada para criar strings unindo várias strings ou unindo strings com outros tipos:

```javascript
var mystring1 = "I am learning ";
var mystring2 = "JavaScript with SoloLearn.";
document.write(mystring1 + mystring2);
```
[Tente você mesmo](https://code.sololearn.com/659/#js)
  
O exemplo acima declara e inicializa duas variáveis ​​de string e concatena-as.

![](https://api.sololearn.com/DownloadFile?id=2750)

> Os números entre aspas são tratados como strings: "42" não é o número
> 42, é uma string que inclui dois caracteres, 4 e 2.

# Condicionais e Loops

## A declaração if
 
  
Muitas vezes, quando você escreve um código, você deseja executar ações diferentes com base em diferentes condições.  
Você pode fazer isso usando **instruções condicionais** em seu código.  
  
Use **if** para especificar um bloco de código que será executado se uma condição especificada for verdadeira.

```javascript
if (condição) {  
declarações  
}
```
As declarações serão executadas apenas se a condição especificada for **verdadeira** .

**Exemplo:**
```javascript
var myNum1 = 7;  
var myNum2 = 10;  
if (myNum1 <myNum2) {  
alert ("JavaScript é fácil de aprender.");  
}
```
[Experimente você mesmo](https://code.sololearn.com/660/#js)

**Resultado:**

![](https://api.sololearn.com/DownloadFile?id=2751)

> Como visto na figura acima, o método JavaScript **alert ()** é usado
> para gerar uma caixa de alerta pop-up que contém as informações
> fornecidas entre parênteses.

Este é outro exemplo de uma declaração condicional **falsa** .

```javascript
var myNum1 = 7;  
var myNum2 = 10;  
if (myNum1 > myNum2) {  
alert ("JavaScript é fácil de aprender.");  
}
```
[Experimente você mesmo](https://code.sololearn.com/661/#js)

Como a condição é avaliada como falsa, a instrução de alerta é ignorada e o programa continua com a linha após a chave de fechamento da instrução if.

> Note que **se** está em letras minúsculas. Letras maiúsculas (se ou
> IF) geram um erro.

## A declaração else

Use a instrução **else** para especificar um bloco de código que será executado se a condição for **falsa** .

```javascript
if (expression) {  
// executado se condition for true  
}  
else{  
// executado se condition for false  
}
```
O exemplo abaixo demonstra o uso de uma instrução **if ... else** .

```javascript
var myNum1 = 7;  
var myNum2 = 10;  
if (myNum1> myNum2) {  
alert ("Esta é minha primeira condição");  
}  
else {  
alert ("Esta é a minha segunda condição");  
}
```
[Experimente você mesmo](https://code.sololearn.com/662/#js)

O exemplo acima diz:  
- **Se** _myNum1_ for maior que _myNum2,_ alertar "Esta é minha primeira condição";  
- **Else** , alerta "Esta é a minha segunda condição".

O navegador imprimirá a segunda condição, pois 7 não é maior que 10.

![](https://api.sololearn.com/DownloadFile?id=2752)

## else if

Você pode usar a **instrução else if** para especificar uma nova condição se a primeira condição for falsa.

```javascript
var course = 1;  
if (curso == 1) {  
document.write ("<h1> Tutorial HTML </ h1>");  
} else if (curso == 2) {  
document.write ("<h1> CSS Tutorial </ h1>");  
} else {  
document.write ("<h1> JavaScript Tutorial </ h1>");  
}
```
[Experimente você mesmo](https://code.sololearn.com/663/#js)

O código acima diz:  
- **se o** curso for igual a 1, imprima "HTML Tutorial";  
- caso **contrário, se o** curso for igual a 2, envie "CSS Tutorial";  
- se nenhuma das condições acima for verdadeira, envie "JavaScript Tutorial";  
  
**O curso** é igual a 1, então obtemos o seguinte resultado:

![](https://api.sololearn.com/DownloadFile?id=2753)

A instrução final **else** "termina" a declaração else if e deve ser sempre escrita após as instruções **if** e **else if**.

A bloco final  **else** será executado quando **nenhuma** das condições é verdadeira.  
  
Vamos mudar o valor da variável do **curso** no nosso exemplo anterior.

```javascript
curso var = 3;  
if (curso == 1) {  
document.write ("<h1> Tutorial HTML </ h1>");  
} else if (curso == 2) {  
document.write ("<h1> CSS Tutorial </ h1>");  
} else {  
document.write ("<h1> JavaScript Tutorial </ h1>");  
}
```
[Experimente você mesmo](https://code.sololearn.com/664/#js)

**O resultado:**

![](https://api.sololearn.com/DownloadFile?id=2754)

Você pode escrever quantas **outras** instruções **forem** necessárias.

## Switch

Nos casos em que você precisa testar várias condições, as instruções de gravação **if else** para cada condição podem não ser a melhor solução.  
A **instrução switch** é usada para executar diferentes ações com base em diferentes condições.

**Sintaxe:**

```javascript
switch (expression) {  
case n1:  
statements  
break;  
case n2:  
statements  
break;  
default:  
statements  
}
```
A expressão do switch é avaliada uma vez. O valor da expressão é comparado com os valores de cada **case** . Se houver uma correspondência, o bloco de código associado será executado.

> Você pode obter o mesmo resultado com várias instruções if ... else,
> mas a instrução switch é mais eficaz em tais situações.

Considere o seguinte exemplo.

```javascript
var day = 2;  
switch (day) {  
case 1:  
document.write("Monday");  
break;  
case 2:  
document.write("Tuesday");  
break;  
case 3:  
document.write("Wednesday");  
break;  
default:  
document.write("Another day");  
}  
  
// Outputs "Tuesday"
```

[Experimente você mesmo](https://code.sololearn.com/665/#js)

Você pode ter quantas instruções de **case** forem necessárias.

## A palavra chave break

Quando o código JavaScript atinge uma palavra **-** chave **break** , ele sai do bloco de switch.  
Isso interromperá a execução de mais códigos e testes de casos dentro do bloco.

Geralmente, um **break** deve ser colocada em cada declaração de caso.


## A palavra chave default

A palavra-chave **default** especifica o código a ser executado se não houver correspondência em outros blocos case.

```javascript
var color ="**yellow**";  
switch(color) {  
case "blue":  
document.write("This is blue.");  
break;  
case "red":  
document.write("This is red.");  
break;  
case "green":  
document.write("This is green.");  
break;  
case "orange":  
document.write("This is orange.");  
break;  
default:  
document.write("Color not found.");  
}  
  
//Outputs "Color not found."
```
[Tente você mesmo](https://code.sololearn.com/666/#js)

O bloco padrão (**default**) pode ser omitido, se não houver necessidade de lidar com o caso quando nenhuma correspondência for encontrada.

## Loops

Loops podem executar um bloco de código várias vezes. Eles são úteis nos casos em que você deseja executar o mesmo código repetidamente, adicionando um valor diferente a cada vez.  
  
JavaScript tem três tipos de loops: **for** , **while** e **do while** .  
  
A **por** laço é comumente utilizado para a criação de um loop.  
  
A sintaxe:

```javascript
for (instrução 1; declaração 2; instrução 3) {  
bloco de códigos a ser executado  
}
```

**A declaração 1** é executada antes que o loop (o bloco de código) seja iniciado.  
**A instrução 2** define a condição para executar o loop (o bloco de código).  
**A instrução 3** é executada a cada vez que o loop (o bloco de código) é executado.

Como você pode ver, o ** for loop clássico** tem **três** componentes ou instruções.

## O loop for

  
O exemplo abaixo cria um loop **for** que imprime os números de 1 a 5.

```javascript
for ( **i = 1** ; **i <= 5** ; **i ++** ) {  
document.write (i + "<br />");  
}
```
[Experimente você mesmo](https://code.sololearn.com/667/#js)

Neste exemplo, o **Instrução  1** define uma variável antes do início do loop ( var i = 1).  
**Instrução 2** define a condição para o loop executar (eu deve ser menor ou igual a 5).  
**A instrução 3** aumenta um valor (i ++) cada vez que o bloco de código no loop foi executado.  
  
**Resultado: o** **Instrução 1** é opcional e pode ser omitido, se os valores forem definidos antes do início do loop.

![](https://api.sololearn.com/DownloadFile?id=2755)

```javascript
var i = 1;  
para (; i <= 5; i ++) {  
document.write (i + "<br />");  
}
```
[Experimente você mesmo](https://code.sololearn.com/668/#js)

Além disso, você pode iniciar mais de um valor na **instrução 1** , usando **vírgulas** para separá-los.

```javascript
for ( i = 1, texto = "" ; i <= 5; i ++) {  
text = i;  
document.write (i + "<br />");  
}
```
[Experimente você mesmo](https://code.sololearn.com/669/#js)

Se a **instrução 2** retornar true, o loop será iniciado novamente, se retornar false, o loop será finalizado.  
A declaração 2 também é opcional.

> Se você omitir a instrução 2, deverá fornecer um **break** dentro do
> loop. Caso contrário, o loop nunca terminará.

**A declaração 3** é usada para alterar a variável inicial . Ele pode fazer qualquer coisa, incluindo incremento negativo (i--), incremento positivo (i = i + 15) ou qualquer outra coisa.  
A instrução 3 também é opcional e pode ser omitida se você incrementar seus valores dentro do loop.

```javascript
var i = 0;  
for (; i <10;) {  
document.write (i);  
i ++;  
}
```

[Experimente você mesmo](https://code.sololearn.com/670/#js)

## O loop while

    
A **loop while** se repete através de um bloco de código, enquanto uma condição especificada é **verdadeira** .  
  
**Sintaxe:**

```javascript
while (condição) {  
code block  
}
```
A **condição** pode ser qualquer instrução condicional que retorne true ou false.

Considere o seguinte exemplo.

```javascript
var i = 0;  
while (i <= 10) {  
document.write (i + "<br />");  
i ++;  
}
```
[Experimente você mesmo](https://code.sololearn.com/671/#js)

O loop continuará a ser executado enquanto i for menor que ou igual a 10. Cada vez que o loop for executado, ele aumentará em 1.  
  
Isso gerará os valores de 0 a 10.

![](https://api.sololearn.com/DownloadFile?id=2756)

Se você esquecer de aumentar a variável usada na condição, o loop nunca terminará.

Certifique-se de que a condição em um loop while se torne **falsa** .

## O loop Do ... While 
  
  
O loop **do ... while** é uma variante do loop while. Esse loop executará o bloco de códigos uma vez, **antes de** verificar se a condição é verdadeira e, em seguida, repetirá o loop, desde que a condição seja verdadeira.  
  
**Sintaxe:**

```javascript
do {  
code block  
}  
while (condição);
```
Observe o **ponto** - **e** - **vírgula** usado no final do loop do ... while.

**Exemplo:**

```javascript
var i = 20;  
do {  
document.write (i + "<br />");  
i ++;  
}  
while (i <= 25);
```
[Tente você mesmo](https://code.sololearn.com/672/#js)
  
Isso imprime números de 20 a 25.

![](https://api.sololearn.com/DownloadFile?id=2757)

O loop sempre será executado **pelo menos uma vez**, mesmo se a condição for falsa, porque o bloco de código é executado antes que a condição seja testada.

# break
   
A instrução **break** "salta" de um loop e continua executando o código após o loop.

```javascript
for (i = 0; i <= 10; i ++) {  
if (i == 5) {  
break ;  
}  
document.write (i + "<br />");  
}
```
[Experimente você mesmo](https://code.sololearn.com/673/#js)

Quando eu chegar aos 5, ele sairá do loop.

![](https://api.sololearn.com/DownloadFile?id=2758)


# continue
  
  
A instrução **continue** interrompe apenas uma iteração no loop e continua com a próxima iteração.

```javascript
for (i = 0; i <= 10; i ++) {  
if (i == 5) {  
continue;  
}  
document.write (i + "<br />");  
}
```
[Experimente você mesmo](https://code.sololearn.com/674/#js)

**Resultado:**

![](https://api.sololearn.com/DownloadFile?id=2759)

O valor 5 não é impresso, porque **continue** ignora essa iteração do loop

# Funções

## Funções JavaScript
  
  
Uma **função** JavaScript é um bloco de código projetado para executar uma tarefa específica.  
As principais vantagens de usar funções:  
**Reutilização de** código : defina o código uma vez e use-o várias vezes.  
Use o mesmo código várias vezes com **argumentos** diferentes para produzir resultados diferentes.

## Definindo uma Função
 
  
Para definir uma função JavaScript, use a palavra-chave **function** , seguida por um **nome** , seguido por um conjunto de **parênteses ()** .  
  
O código a ser executado pela função é colocado dentro de chaves {}.

```javascript
function name() {  
//code to be executed  
}
```

Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras das variáveis).

## Chamando uma Função

  
  
Para executar a função, você precisa chamá-la.  
Para chamar uma função, comece com o nome da função e siga-a com os argumentos entre parênteses.  

**Exemplo:**
```javascript
function **myFunction** () {  
alert ("Chamando uma Função!");  
}  
  
**myFunction** ();  
// Alertas "Chamando uma função!"
```
[Tente você mesmo](https://code.sololearn.com/675/#js)

Lembre-se sempre de terminar a instrução com um **ponto** - **e** - **vírgula** depois de chamar a função.

Depois que a função é definida, o JavaScript permite que você a chame quantas vezes quiser.

```javascript
function myFunction () {  
alert ("Caixa de alerta!");  
}  
  
myFunction ();  
// "Caixa de alerta!"  
  
// algum outro código  
  
myFunction ();  
// "Caixa de alerta!"
```
[Tente você mesmo](https://code.sololearn.com/676/#js)

## Parâmetros de Função

  
  
Funções podem receber **parâmetros** . **Parâmetros de**  função são os nomes listados na definição da função. 

**Sintaxe:**
```javascript
functionName(param1, param2, param3) {  
// some code  
}
```
Como com as variáveis, os parâmetros devem receber **nomes**, **separados por vírgulas** dentro dos parênteses.

## Usando Parâmetros

  Depois de definir os parâmetros, você pode usá-los dentro da função.

```javascript
function sayHello (nome) {  
alert ("Oi", + nome);  
}  
  
sayHello ("David");  
// Alertas "Oi, David"
```
[Experimente você mesmo](https://code.sololearn.com/677/#js)

Essa função recebe um parâmetro, chamado de **nome** . Ao chamar a função, forneça o valor do parâmetro (argumento) dentro dos parênteses.

**Argumentos de**  função são os valores reais passados ​​para (e recebidos pela) função.

Você pode definir uma única função e passar diferentes valores de parâmetro (argumentos) para ela.

```javascript
function sayHello (nome) {  
alert ("Oi", + nome);  
}  
sayHello (" David ");  
sayHello (" Sarah ");  
sayHello (" John ");
```

[Tente você mesmo](https://code.sololearn.com/678/#js)

Isso executará o código da função toda vez para o argumento fornecido.

## Múltiplos Parâmetros
 
  
Você pode definir vários parâmetros para uma função **separando-os** por **vírgulas** .

```javascript
function myFunc (x, y) {  
// algum código  
}
```
O exemplo acima define a função **myFunc** para receber dois parâmetros.

Os parâmetros são usados ​​dentro da definição da função.

```javascript
function sayHello (nome ,idade) {  
document.write (nome + "é" + idade + "anos de idade.");  
} 
```
  
Ao chamar a função, forneça os argumentos na mesma ordem em que você os definiu.

```javascript
function sayHello (nome, idade) {  
document.write (nome + "tem" + idade + "anos de idade.");  
}  
  
sayHello ( "John", 20 )  
// Saídas "John tem 20 anos de idade."
```
[Tente você mesmo](https://code.sololearn.com/679/#js)

Depois de definir a função, você pode chamá-la quantas vezes forem necessárias.  
Funções JavaScript não verificam o número de argumentos recebidos.

> Se uma função for chamada com argumentos ausentes (menos que
> declarada), os valores ausentes serão definidos como **indefinidos** ,
> o que indica que uma variável não recebeu um valor.

## Função return

  
  
Uma função pode ter uma instrução de **return** opcional . É usado para retornar um valor da função.  
  
Essa declaração é útil ao fazer cálculos que exigem um resultado.

Quando o JavaScript atinge uma declaração de **return** , a função para de executar.
  
Use o **return** para retornar um valor.  
  
Por exemplo, vamos calcular o produto de dois números e retornar o resultado.

```javascript
function myFunction (a, b) {  
return a * b;  
}  
  
var x = myFunction (5, 6);  
// Valor de retorno terminará em x  
// x é igual a 30
```

[Tente você mesmo](https://code.sololearn.com/680/#js)

Se você não retornar nada de uma função, ela retornará **indefinida** .

Outro exemplo:

```javascript
function addNumbers (a, b) {  
var c = a + b;  
return c; 
}  
document.write (addNumbers (40, 2));  
// Saídas 42
```

[Experimente você mesmo](https://code.sololearn.com/681/#js)

> O comando document.write gera o valor retornado pela função, que é a
> soma dos dois parâmetros.

# As caixa de alerta

  
  
O JavaScript oferece três tipos de caixas pop-up, as caixas **Alert** , **Prompt** e **Confirm** .  
  

## Caixa de alerta (alert)

  
Uma **caixa de alerta** é usada quando você deseja garantir que as informações cheguem ao usuário.  
Quando uma caixa de alerta aparece, o usuário deve clicar em OK para continuar.  
A função de **alerta** usa um único parâmetro, que é o texto exibido na caixa pop-up.  

**Exemplo:**

```javascript
alert ("Você realmente quer sair desta página?");
```
[Tente você mesmo](https://code.sololearn.com/682/#js)

**Resultado:**  para exibir as **quebras de linha** dentro de uma caixa pop-up, use uma barra invertida seguida do caractere n.

![](https://api.sololearn.com/DownloadFile?id=2760)

```javascript
alert ("Olá \n Como você está?");
```

[Tente você mesmo](https://code.sololearn.com/683/#js)

**Resultado:**

![](https://api.sololearn.com/DownloadFile?id=2761)

> Tenha cuidado ao usar caixas de alerta, pois o usuário pode continuar
> usando a página somente depois de clicar em OK.


## Caixa Prompt
    
Uma **caixa de aviso** é geralmente usada para que o usuário insira um valor antes de entrar em uma página.  
Quando uma caixa de prompt aparecer, o usuário terá que clicar em OK ou em Cancelar para prosseguir após inserir o valor de entrada.  
Se o usuário clicar em OK, a caixa **retornará o valor de entrada** . Se o usuário clicar em Cancelar, a caixa retornará **nulo** .  
  
O método **prompt ()**  aceita **dois parâmetros** . - O primeiro é o rótulo, que você deseja exibir na caixa de texto. - O segundo é uma string padrão a ser exibida na caixa de texto (opcional). 

**Exemplo:**

```javascript
var user = prompt ("Por favor digite seu nome");  
alerta (usuário);
```
[Tente você mesmo](https://code.sololearn.com/684/#js)

**O prompt aparece como:**

![](https://api.sololearn.com/DownloadFile?id=2762)


## Caixa de Confirmação (confirm)  
  
Uma **caixa de confirmação** é usada frequentemente para que o usuário verifique ou aceite algo.  
Quando uma caixa de confirmação é exibida, o usuário deve clicar em OK ou em Cancelar para continuar.  
Se o usuário clicar em OK, a caixa retornará **true** . Se o usuário clicar em Cancelar, a caixa retornará **falso** .

**Exemplo:**

```javascript
var result = confirm ("Você realmente quer sair desta página?");  
if (resultado == true) {  
alert ("Obrigado por visitar");  
}  
else {  
alert ("Obrigado por ficar conosco");  
}
```

[Experimente você mesmo](https://code.sololearn.com/685/#js)

 
**Resultado:**  

![](https://api.sololearn.com/DownloadFile?id=2991)

O resultado quando o usuário clica em **OK** : 

![](https://api.sololearn.com/DownloadFile?id=2763)

O resultado quando o usuário clica em **Cancelar** :

![](https://api.sololearn.com/DownloadFile?id=2764)


# Objetos

## Objetos JavaScript

  
  
Variáveis ​​JavaScript são contêineres para valores de dados. **Os objetos também** são variáveis, mas podem conter muitos valores.  
  
Pense em um objeto como uma lista de valores que são gravados como pares **nome: valor** , com os nomes e os valores separados por dois pontos.  

**Exemplo:**

```javascript
var person = {  
nome: "João", idade: 31,  
favColor: "verde", altura: 183  
};
```
![](https://api.sololearn.com/DownloadFile?id=2765)

Objetos JavaScript são contêineres para **valores nomeados**.

## Propriedades do Objeto

Você pode acessar as propriedades do objeto de duas maneiras.

```javascript
objectName.propertyName  
// ou  
objectName ['propertyName']
```

Este exemplo demonstra como acessar a idade do nosso objeto person:

```javascript
var person = {  
nome: "John", idade: 31,  
favColor: "verde", altura: 183  
};  
var x = person.age; 
var y = person ['age'];
```

[Tente você mesmo](https://code.sololearn.com/686/#js)

A propriedade de **comprimento** (length) interna do JavaScript é usada para contar o número de caracteres em uma propriedade ou string .

```javascript
var curso = {nome: "JS", lições: 41};  
document.write (curso.nome.length );  
// Saídas 2
```
[Experimente você mesmo](https://code.sololearn.com/687/#js)

## Métodos de Objeto
  
Um **método de** objeto  é uma propriedade que contém uma **definição de função** . Use a seguinte sintaxe para acessar um método de objeto :

```javascript
objectName.methodName ()
```

Como você já sabe, **document.write ()** gera dados. A função **write ()** é na verdade um método do objeto **document** .

[Tente você mesmo](https://code.sololearn.com/688/#js)

Métodos são funções que são armazenadas como propriedades do objeto .

## O construtor de objetos

 Na lição anterior, criamos um objeto usando a sintaxe do **literal de** **objeto** (ou inicializador).
  
```javascript
var person = {  
nome: "João", idade: 42, favColor: "verde"  
};
```

Isso permite que você crie apenas um único objeto .
Às vezes, precisamos definir um " **tipo de** **objeto** " que possa ser usado para criar vários objetos de um único tipo.
A maneira padrão de criar um " tipo de objeto " é usar uma **função** **construtora de** objeto.

```javascript
function person(name, age, color) {  
this.name = name;  
this.age = age;  
this.favColor = color;  
}
```

A função acima (person) é um construtor de objeto  , que recebe parâmetros e os atribui às propriedadesdo objeto.

A palavra-chave **this** refere-se ao **objeto** **atual**. Note que
 isso não é uma variável. É uma palavra-chave e seu valor não pode ser alterado.

## Criando Objetos  
  
Depois de ter um construtor de objeto  , você pode usar a palavra-chave **new** para criar novos objetos do mesmo tipo.
```javascript
var p1 = new person("John", 42, "green");  
var p2 = new person("Amy", 21, "red");  
 
document.write(p1.age); // Outputs 42  
document.write(p2.name); // Outputs "Amy"
```

[Experimente você mesmo](https://code.sololearn.com/689/#js)

p1_ e _p2_ são agora objetos do tipo **person** . Suas propriedades são atribuídas aos valores correspondentes.

## Criando Objetos  
  
Considere o seguinte exemplo.

```javascript
function person (name, age) {  
this.name = name;  
this.age = age;  
}  
var John = new person("John", 25);  
var James = new person("James", 21);
```

[Tente você mesmo](https://code.sololearn.com/690/#js)

Acesse as propriedades do objeto usando a **sintaxe de ponto** , como você fez antes.

![](https://api.sololearn.com/DownloadFile?id=2766)

## Inicialização de Objetos
  
Use o **literal de** **objeto** ou a sintaxe do **inicializador** para criar objetos únicos.

```javascript
var John = {name: "John", age: 25};  
var James = {name: "James", age: 21};
```

## Usando inicializadores de objeto
  
Espaços e quebras de linha não são importantes. Uma definição de objeto pode abranger várias linhas.

```javascript
var John = {  
name: "John",  
age: 25  
};  
var James = {  
name: "James",  
age: 21  
};
```

Não importa como o objeto é criado, a sintaxe para acessar as propriedades e os métodos não é alterada.

```javascript
document.write(John.age);  
//Outputs 25
```

[Experimente você mesmo](https://code.sololearn.com/691/#js)


## Métodos  
  
**Métodos** são funções que são armazenadas como propriedades do objeto .  
  
Use a seguinte sintaxe para criar um método de objeto  :

methodName: function () {linhas de código}

Acessar um método de objeto usando a seguinte sintaxe:

objectName.methodName ()

Um método é uma função pertencente a um objeto . Pode ser referenciado usando a palavra **-**chave **this** . A palavra-chave **this** é usada como uma referência ao objeto atual , o que significa que você pode acessar as propriedades e métodos dos objetos usando-a. Definir métodos é feito dentro do construtor.

**Por exemplo:**

```javascript
function person(name, age) {  
this.name = name;  
this.age = age;  
this.changeName = function (name) {  
this.name = name;  
}
}  

var p = new person("David", 21);  
p.changeName("John");
//Now p.name equals to "John"
 ```

[Experimente você mesmo](https://code.sololearn.com/692/#js)

No exemplo acima, definimos um método chamado **changeName** para nossa pessoa, que é uma função, que recebe um **nome de** parâmetro e o atribui à propriedade **name** do objeto .  
**this.name** refere-se à propriedade name do objeto.

Você também pode definir a função fora da função de construtor e associá-la ao objeto .

```javascript
function person(name, age) {  
this.name= name;  
this.age = age;  
this.yearOfBirth = bornYear;  
}  
function bornYear() {  
return 2016 - this.age;  
}
```

## Métodos

   
Chame o método como de costume.

```javascript
function person(name, age) {  
this.name= name;  
this.age = age;  
this.yearOfBirth = bornYear;  
}  
function bornYear() {  
return 2016 - this.age;  
}  
  
var p = new person("A", 22);  
document.write(p.yearOfBirth());  
// Outputs 1994
```
[Experimente você mesmo](https://code.sololearn.com/693/#js)

Chame o método pelo **nome** da **propriedade que** você especificou na função construtora, em vez do nome da função.

# Objetos principais (Core Objects)

## Matrizes (arrays) JavaScript
   
**Arrays** armazenam vários valores em uma única variável .  
  
Para armazenar três nomes de cursos, você precisa de três variáveis.
```javascript
var course1 = "HTML";  
var course2 = "CSS";  
var course3 = "JS";  
```

Mas e se você tivesse 500 cursos? A solução é uma **matriz** .

```javascript
var courses = new Array ("HTML", "CSS", "JS");  
```

Essa sintaxe declara uma matriz chamada **courses** , que armazena três valores ou elementos.

## Acessando uma Matriz (array)

Você se refere a um elemento de matriz referindo-se ao **número** do **índice** escrito **entre colchetes**.  
Essa instrução acessa o valor do primeiro elemento em **cursos** e altera o valor do segundo elemento.

```javascript
var courses = new Array("HTML", "CSS", "JS");  
var course = courses[0]; // HTML  
courses[1] = "C++"; //Changes the second element
```

[0] é o primeiro elemento em uma matriz . [1] é o segundo. Os índices de matriz começam com **0**.

Tentando acessar um índice fora da matriz , retorna o valor **indefinido** .

```javascript 
var courses = new Array("HTML", "CSS", "JS");  
document.write(courses[10]);  
//Outputs "undefined"
```

[Experimente você mesmo](https://code.sololearn.com/694/#js)

  
Nossa matriz de **cursos** tem apenas 3 elementos, então o 10º índice, que é o 11º elemento, não existe (é indefinido ).

## Criando Matrizes
  
Você também pode declarar uma matriz , informar o número de elementos que ela armazenará e adicionar os elementos posteriormente.

```javascript
var courses = new Array(**3**);  
courses[0] = "HTML";  
courses[1] = "CSS";  
courses[2] = "JS";
```
[Tente você mesmo](https://code.sololearn.com/696/#js)

Uma matriz é um tipo especial de **objeto** .  Um array usa **números** para acessar seus elementos e um objeto usa **nomes** para acessar seus membros.

Matrizes JavaScript são dinâmicas, portanto você pode declarar uma matriz e não passar nenhum argumento com o construtor Array () . Você pode então adicionar os elementos dinamicamente.

```javascript
var courses = new Array();  
courses[0] = "HTML";  
courses[1] = "CSS";  
courses[2] = "JS";  
courses[3] = "C++";
```

[Tente você mesmo](https://code.sololearn.com/695/#js)

Você pode adicionar quantos elementos precisar.

## Array Literal
   
Para maior simplicidade, legibilidade e velocidade de execução, você também pode declarar matrizes usando a sintaxe **literal** do **array** .


[Tente você mesmo](https://code.sololearn.com/697/#js)

  
Isso resulta na mesma matriz como aquela criada com o **new Array ()** .  
Você pode acessar e modificar os elementos da matriz usando o número do índice, como fez antes.  
A sintaxe **literal da** **matriz** é a maneira recomendada de declarar matrizes.

## A propriedade length

Matrizes JavaScript têm propriedades e métodos **incorporados** úteis .  
  
A propriedade length retorna o número de elementos do array.

```javascript
var courses = ["HTML", "CSS", "JS"];  
document.write(**courses.length**);  
//Outputs 3
```

[Experimente você mesmo](https://code.sololearn.com/698/#js)

A propriedade **length** é sempre mais um que o maior índice de array .  
Se a matriz estiver vazia, a propriedade length retornará **0** .

## Combinando Arrays
  
O método **concat ()**  do JavaScript permite que você una matrizes e crie uma matriz inteiramente nova . **Exemplo:**

```javascript
var c1 = ["HTML", "CSS"];  
var c2 = ["JS", "C++"];  
var  courses = c1.concat(c2);

```
[Tente você mesmo](https://code.sololearn.com/699/#js)

A matriz de **cursos** que resulta contém 4 elementos (HTML, CSS, JS, C ++).

A operação de**concat**não afeta os arrays c1 e c2, ela retorna a concatenação resultante como um novo array.

## Matrizes Associativas
  
Embora muitas linguagens de programação suportem matrizes com índices nomeados (texto em vez de números), chamados de **matrizes associativas** , o JavaScript **não** .  
No entanto, você ainda pode usar a sintaxe de matriz nomeada , que produzirá um objeto .  
**Por exemplo:**

```javascript
var person = []; //empty array  
person["name"] = "John";  
person["age"] = 46;  
document.write(person["age"]);  
//Outputs "46"
```

[Experimente você mesmo](https://code.sololearn.com/700/#js)

Agora, a pessoa é tratada como um objeto , em vez de ser uma matriz . Os índices nomeados "name" e "age" tornam-se propriedades do objeto person.

Como a matriz de pessoa é tratada como um objeto , os métodos e propriedades da matriz padrão produzirão resultados incorretos. Por exemplo, **person.length** retornará 0.

Lembre-se de que o JavaScript **não** suporta matrizes com índices nomeados. Em JavaScript, os arrays sempre usam índices numerados. É melhor usar um **objeto** quando quiser que o índice seja uma **string** (texto). Use uma **matriz** quando você quiser que o índice seja um **número**.

Se você usar um índice nomeado, o JavaScript redefinirá a matriz para um objeto padrão.

## O objeto Math

O objeto Math  permite que você execute tarefas matemáticas e inclua várias propriedades. **Por exemplo:**

![](https://api.sololearn.com/DownloadFile?id=2767)

```javascript
document.write (Math.PI);  
// Saídas 3.141592653589793
```
[Experimente você mesmo](https://code.sololearn.com/701/#js)

O objeto math não tem construtor. Não há necessidade de criar um objeto Math primeiro.

## Métodos de Math

O objeto Math  contém vários métodos usados ​​para cálculos: por exemplo, o seguinte calcula a **raiz quadrada** de um número.

![](https://api.sololearn.com/DownloadFile?id=2769)

```javascript
var number = Math.sqrt(4);  
document.write(number);  
// Saídas 2
```
[Experimente você mesmo](https://code.sololearn.com/702/#js)

Vamos criar um programa que peça ao usuário para inserir um número e mostrar sua raiz quadrada.

```javascript
var n = prompt("Enter a number", "");  
var answer = Math.sqrt(n);  
alert("The square root of " + n + " is " + answer);
```

[Tente você mesmo](https://code.sololearn.com/703/#js)


**Resultado:** 

![](https://api.sololearn.com/DownloadFile?id=2770)

   Digite um número, como 64.

![](https://api.sololearn.com/DownloadFile?id=2771)

## setInterval

O método **setInterval ()**  chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos). Ele continuará chamando a função até que **clearInterval ()** seja chamado ou a janela seja fechada. **Por exemplo:**

```javascript
function myAlert() {  
alert("Hi");  
}  
setInterval(myAlert, 3000);
```

[Tente você mesmo](https://code.sololearn.com/704/#js)

Isso chamará a função myAlert a cada 3 segundos (1000 ms = 1 segundo).

Escreva o **nome** da função sem parênteses ao passar para o método **setInterval**.

## O objeto de data (date)

O objeto **Date** nos permite trabalhar com datas. Uma data consiste em um ano, um mês, um dia, uma hora, um minuto, um segundo e milissegundos. Usando o  **new Date()** , crie um novo objeto de data com a **data e a hora atuais**.

```javascript
var d = new Date();  
//d stores the current date and time
```

As outras maneiras de inicializar datas permitem a criação de novos objetos de data a partir da **data e hora especificadas**.

```javascript
new Date(milliseconds)  
new Date(dateString)  
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

Datas JavaScript são calculadas em milissegundos a partir de 01 de janeiro de 1970 00:00:00 Hora Universal (UTC). Um dia contém 86.400.000 milissegundos.

**Por exemplo:**
```javascript
//Fri Jan 02 1970 00:00:00  
var d1 = new Date(86400000);  
  
//Fri Jan 02 2015 10:42:00  
var d2 = new Date("January 2, 2015 10:42:00");  
  
//Sat Jun 11 1988 11:42:00  
var d3 = new Date(88,5,11,11,42,0,0);
```
JavaScript conta meses de 0 a 11. Janeiro é 0 e dezembro é 11.  
Objetos de data são estáticos, em vez de dinâmicos. A hora do computador está correndo, mas os objetos de data não mudam, uma vez criados.

## Métodos de Data
  
Quando um objeto de Data  é criado, vários **métodos** tornam possível executar operações nele. **Por exemplo:**

![](https://api.sololearn.com/DownloadFile?id=2772)

**Por exemplo:**

```javascript
var d = new Date();  
var hours = d.**getHours();**  
//hours is equal to the current hour
```

[Tente você mesmo](https://code.sololearn.com/705/#js)

  
Vamos criar um programa que imprima a hora atual no navegador uma vez por segundo.

```javascript
function printTime() {  
var d = new Date();  
var hours = d.getHours();  
var mins = d.getMinutes();  
var secs = d.getSeconds();  
document.body.innerHTML = hours+":"+mins+":"+secs;  
}  
setInterval(printTime, 1000);
```

[Tente você mesmo](https://code.sololearn.com/706/#js)

  
**Declaramos** uma função **printTime ()** , que obtém a hora atual do objeto de data e a imprime na tela.  
Em seguida, chamamos a função uma vez por segundo, usando o método **setInterval**

A propriedade **innerHTML** define ou retorna o conteúdo HTML de um elemento.No nosso caso, estamos alterando o conteúdo HTML do corpo do nosso documento. Isso substitui o conteúdo a cada segundo, em vez de imprimi-lo repetidamente na tela.


# DOM e Eventos

## O DOM

Quando você abre qualquer página da Web em um navegador, o HTML da página é carregado e processado visualmente na tela.
Para isso, o navegador cria o **Document Object Model** dessa página, que é um modelo orientado a objetos de sua estrutura lógica.
O DOM de um documento HTML pode ser representado como um conjunto aninhado de caixas:

![](https://api.sololearn.com/DownloadFile?id=2773)

JavaScript pode ser usado para manipular o DOM de uma página dinamicamente para adicionar, excluir e modificar elementos.

## Árvore DOM  
  
O DOM representa um documento como uma estrutura em árvore.
Elementos HTML se tornam **nós** interrelacionados na árvore.
Todos esses nós na árvore têm algum tipo de relação entre eles.
Nós podem ter nós **filhos** . Os nós no mesmo nível de árvore são chamados de **irmãos**.  
Por exemplo, considere a seguinte estrutura:

![](https://api.sololearn.com/DownloadFile?id=2773)

Para o exemplo acima: \<html> tem dois filhos (\<head>, \<body>); \<head> tem um filho (\<title>) e um pai (\<html>); \<title> tem um pai (\<head>) e nenhum filho; \<body> tem dois filhos (\<h1> e \<a>) e um pai (\<html>);

É importante entender os relacionamentos entre elementos em um documento HTML para poder manipulá-los com JavaScript.

## O objeto do documento  
  
Existe um objeto de **documento** predefinido em JavaScript, que pode ser usado para acessar todos os elementos no DOM . Em outras palavras, o objeto do **documento** é o proprietário (ou **raiz**) de todos os objetos na sua página da web. Portanto, se você quiser acessar objetos em uma página HTML, sempre começará a acessar o objeto de documento . **Por exemplo:**

```javascript
document.body.innerHTML= "Some text";
```

Como body é um elemento do DOM , podemos acessá-lo usando o objeto **document** e alterar o conteúdo da propriedade **innerHTML**.

A propriedade **innerHTML** pode ser usada em quase todos os elementos HTML para alterar seu conteúdo.

## Selecionando elementos

Todos os elementos HTML são **objetos** . E como sabemos, todo objeto tem **propriedades** e **métodos**.  
O objeto de **documento** possui métodos que permitem selecionar o elemento HTML desejado. Esses três métodos são os mais comumente usados ​​para selecionar elementos HTML:

```javascript
//finds element by id  
document.getElementById(id)  
  
//finds elements by class name  
document.getElementsByClassName(name)  
  
//finds elements by tag name  
document.getElementsByTagName(name)  
```

No exemplo abaixo, o método **getElementById** é usado para selecionar o elemento com **id = "demo"** e alterar seu conteúdo:

```javascript
var elem = document.getElementById("demo");  
elem.innerHTML = "Hello World!";  
```
O exemplo acima supõe que o HTML contém um elemento com id = "demo", por exemplo, \<div id = "demo"> \</div>.

O método **getElementsByClassName**() localiza todos os elementos por nome de classe e os retorna como uma matriz . Por exemplo, se nossa página HTML contivesse três elementos com class = "demo", o código a seguir retornaria todos esses elementos como uma matriz :

```javascript
var arr = document.getElementsByClassName("demo");  
//accessing the second element  
arr[1].innerHTML = "Hi";
```

Da mesma forma, o método **getElementsByTagName** retorna todos os elementos do nome da marca (tag) especificada como uma matriz .
O exemplo a seguir obtém todos os elementos de parágrafo da página e altera seu conteúdo:

```javascript
<p>hi</p>  
<p>hello</p>  
<p>hi</p>  
<script>  
var arr = document.getElementsByTagName("p");  
for (var x = 0; x < arr.length; x++) {  
arr[x].innerHTML = "Hi there";  
}  
</script>
```

O script resultará no seguinte HTML:

```javascript
<p>Hi there</p>  
<p>Hi there</p>  
<p>Hi there</p>
```

Usamos a propriedade **length** da matriz para percorra todos os elementos selecionados no exemplo acima.

## Trabalhando com DOM
  
  
Cada elemento no DOM tem um conjunto de propriedades e métodos que fornecem informações sobre seus relacionamentos no elemento DOM :

element.**childNodes** retorna uma matriz dos nós filhos de um elemento.  
element.**firstChild** retorna o primeiro nó filho de um elemento.  
element.**lastChild** retorna o último nó filho de um elemento.  
element. **hasChildNodes** retornará true se um elemento tiver algum nó filho, caso contrário, false.  
element.**nextSibling** retorna o próximo nó no mesmo nível da árvore.  
element.**previousSibling** retorna o nó anterior no mesmo nível da árvore.  
element.**parentNode** retorna o nó pai de um elemento. 

Podemos, por exemplo, selecionar todos os nós filhos de um elemento e alterar seu conteúdo:

```javascript
<html>  
<body>  
<div id ="demo">  
<p>some text</p>  
<p>some other text</p>  
</div>  

<script>  
var a = document.getElementById("demo");  
var arr = a.childNodes;  
for(var x=0;x<arr.length;x++) {  
arr[x].innerHTML = "new text";  
}  
</script>  
  
</body>  
</html>
```

[Experimente você mesmo](https://code.sololearn.com/951/#js)

> O código acima altera o texto de ambos os parágrafos para "novo
> texto".

## Alterando Atributos

Depois de selecionar o (s) elemento (s) com o qual deseja trabalhar, você poderá alterar seus atributos.  
Como vimos nas lições anteriores, podemos alterar o conteúdo de texto de um elemento usando a propriedade **innerHTML** .  
Da mesma forma, podemos mudar os atributos dos elementos.  
Por exemplo, podemos alterar o atributo **src** de uma imagem:

```javascript
<img id="myimg" src="orange.png" alt="" />  
<script>  
var el = document.getElementById("myimg");  
el.src = "apple.png";  
</script>  
```

Podemos alterar o atributo **href** de um link:

```javascript
<a href="http://www.example.com">Some link</a>  
<script>  
var el = document.getElementsByTagName("a");  
el[0].href = "http://www.sololearn.com";  
</script>
```

[Experimente você mesmo](https://code.sololearn.com/956/#js)

> Praticamente todos os atributos de um elemento podem ser alterados
> usando JavaScript.


## Mudando Estilo
  
O estilo dos elementos HTML também pode ser alterado usando JavaScript.  
Todos os atributos de estilo podem ser acessados ​​usando o objeto de **estilo** do elemento. 
**Por exemplo:**

```javascript
<div id="demo" style="width:200px">some text</div>  
<script>  
var x = document.getElementById("demo");  
x.style.color = "6600FF";  
x.style.width = "100px";  
</script>
```

[Experimente você mesmo](https://code.sololearn.com/957/#js)

  
O código acima altera a **cor** e a **largura** do texto do elemento div.

Todas as propriedades CSS podem ser definidas e modificadas usando JavaScript. Apenas lembre-se de que você não pode usar traços (-) nos nomes das propriedades: eles são substituídos pelas versões do camelCase, onde as palavras compostas começam com uma letra maiúscula.  
Por exemplo: a propriedade **background-color** deve ser referida como **backgroundColor** .


## Criando Elementos
  
Use os seguintes métodos para criar novos nós:

element.**cloneNode** () clona um elemento e retorna o nó resultante.  
document.**createElement** (element) cria um novo nó de elemento.  
document.**createTextNode** (text) cria um novo nó de texto. 
  
**Por exemplo:**

```javascript
var node = document.createTextNode("Some new text");  
```

Isso criará um novo nó de texto, mas ele não aparecerá no documento até você anexá-lo a um elemento existente com um dos seguintes métodos:  
element. **appendChild (newNode)** adiciona um novo nó filho a um elemento como o último nó filho.  
element.**insertBefore (node1, node2)** insere node1 como filho antes de node2.
  
**Exemplo:**

```javascript
<div id ="demo">some content</div>  

<script>  
//creating a new paragraph  
var p = document.createElement("p");  
var node = document.createTextNode("Some new text");  
//adding the text to the paragraph  
p.appendChild(node);  

var div = document.getElementById("demo");  
//adding the paragraph to the div  
div.appendChild(p);  
</script>
  ```
  
[Experimente você mesmo](https://code.sololearn.com/958/#js)

> Isso cria um novo parágrafo e o adiciona ao elemento div existente na
> página.


## Removendo Elementos

  
Para remover um elemento HTML, você deve selecionar o pai do elemento e usar o **removeChild**(node) método .  

**Por exemplo:**

```javascript
<div id="demo">  
<p id="p1">This is a paragraph.</p>  
<p id="p2">This is another paragraph.</p>  
</div>  
  
<script>  
var parent = document.getElementById("demo");  
var child = document.getElementById("p1");  
parent.removeChild(child);  
</script>
```

[Experimente você mesmo](https://code.sololearn.com/959/#js)

  Isso remove o parágrafo com id = "p1" da página.

> Uma maneira alternativa de obter o mesmo resultado seria o uso da
> propriedade **parentNode** para obter o pai do elemento que queremos
> remover:   var child = document. getElementById ("p1");  
> child.**parentNode**.removeChild(child);



## Substituindo Elementos

Para substituir um elemento HTML, o element.**replaceChild** (newNode, oldNode) método é usado.  

**Por exemplo:**

```javascript
<div id="demo">  
<p id="p1">This is a paragraph.</p>  
<p id="p2">This is another paragraph.</p>  
</div>  
  
<script>  
var p = document.createElement("p");  
var node = document.createTextNode("This is new");  
p.appendChild(node);  
  
var parent = document.getElementById("demo");  
var child = document.getElementById("p1");  
parent.replaceChild(p, child);  
</script>
```

[Experimente você mesmo](https://code.sololearn.com/960/#js)

> O código acima cria um novo elemento de parágrafo que substitui o
> parágrafo p1 existente.

## Animações  
  
Agora que sabemos como selecionar e alterar elementos DOM , podemos criar uma animação simples.  Vamos criar uma página HTML simples com um elemento de **caixa (box)** que será animado usando JS.
```css
<style>  
#container {  
width: 200px;  
height: 200px;  
background: green;  
position: relative;  
}  
#box {  
width: 50px;  
height: 50px;  
background: red;  
position: absolute;  
}  
</style>  
<div id="container">  
<div id="box"> </div>  
</div>
```
[Experimente você mesmo](https://code.sololearn.com/961/#js)

Nosso elemento de **caixa** está dentro de um elemento de **contêiner** . Observe o atributo de posição usado para os elementos: o contêiner é **relativo** e a caixa é **absoluta** . Isso nos permitirá criar a animação relativa ao contêiner. Estaremos animando a caixa vermelha para que ela se mova para o lado direito do contêiner.

![](https://api.sololearn.com/DownloadFile?id=3032)

  Você precisa estar familiarizado com o CSS para entender melhor o código fornecido.

Para criar uma animação, precisamos alterar as propriedades de um elemento em pequenos intervalos de tempo. Podemos conseguir isso usando o método **setInterval**() , que nos permite criar um timer e chamar uma função para alterar as propriedades repetidamente em intervalos definidos (em milissegundos). 

**Por exemplo:**

```javascript
var t = setInterval(move, 500);  
```

Esse código cria um timer que chama uma função **move**() a cada 500 milissegundos. Agora precisamos definir a função **move**(), que altera a posição da caixa.

```javascript
// starting position  
var pos = 0;  
//our box element  
var box = document.getElementById("box");  
  
function move() {  
pos += 1;  
box.style.left = pos+"px"; //px = pixels  
}  
```
A função **move** () incrementa a propriedade **left** do elemento box por um a cada vez que é chamado.

O código a seguir define um timer que chama a função **move**() a cada 10 milissegundos:

```javascript
var t = setInterval(move, 10);  
```

No entanto, isso faz com que a nossa caixa se mova para a direita para sempre. Para parar a animação quando a caixa chega ao final do container, adicionamos uma simples verificação à função **move()** e usamos o método **clearInterval**() para parar o timer.

```javascript
function move() {  
if(pos >= 150) {  
clearInterval(t);  
}  
else {  
pos += 1;  
box.style.left = pos+"px";  
}  
}  
```

Quando o atributo left da caixa atinge o valor de 150, a caixa chega ao final do container, com base em uma largura de container de 200 e uma largura de caixa de 50.  

**O código final:**

```javascript
var pos = 0;  
//our box element  
var box = document.getElementById("box");  
var t = setInterval(move, 10);  
  
function move() {  
if(pos >= 150) {  
clearInterval(t);  
}  
else {  
pos += 1;  
box.style.left = pos+"px";  
}  
}
```
[Tente você mesmo](https://code.sololearn.com/953/#js)
  
Parabéns, você acabou de criar sua primeira animação em JavaScript!

## Eventos 
  
Você pode escrever o código JavaScript que é executado quando ocorre um **evento** , como quando um usuário clica em um elemento HTML, move o mouse ou envia um formulário.  
Quando um evento ocorre em um elemento de destino, uma função de **manipulador** (**handler**) é executada.  
Eventos HTML comuns incluem:

![](https://api.sololearn.com/DownloadFile?id=2777)

Eventos correspondentes podem ser adicionados a elementos HTML como atributos. Por exemplo: 
```javascript
<p>onclick = "someFunc()">algum texto</p>
```

## Manipulando Eventos  
  
Vamos exibir um pop-up de alerta quando o usuário clicar em um botão especificado:
```javascript
<button onclick="show()">Click Me</button>  
<script>  
function show() {  
alert("Hi there");  
}  
</script>
```

[Experimente você mesmo](https://code.sololearn.com/962/#js)

  
Manipuladores de eventos podem ser atribuídos a elementos.  
**Por exemplo:**

```javascript
var x = document.getElementById("demo");  
x.onclick = function () {  
document.body.innerHTML = Date();  
}
```

[Experimente você mesmo](https://code.sololearn.com/963/#js)

## Events

  
Os eventos **onload** e **onunload** são acionados quando o usuário entra ou sai da página. Isso pode ser útil ao executar ações depois que a página é carregada.

```javascript
<body onload="doSomething()">  
```

Da mesma forma, o evento **window.onload** pode ser usado para executar o código depois que a página inteira é carregada.

```javascript
window.onload = function() {  
//some code  
}  
```

O evento **onchange** é usado principalmente em caixas de texto. O manipulador de eventos é chamado quando o texto dentro da caixa de texto é alterado e o foco é perdido do elemento.  
**Por exemplo:**

```javascript
<input type="text" id="name" onchange="change()">  
<script>  
function change() {  
var x = document.getElementById("name");  
x.value= x.value.toUpperCase();  
}  
</script>
```

[Experimente você mesmo](https://code.sololearn.com/964/#js)

  
É importante entender os eventos, porque eles são uma parte essencial das páginas dinâmicas da web.

## Ouvintes de eventos (Event Listeners)

  
  
O método **addEventListener**()  atribui um processador de eventos para um elemento sem substituir tratadores de eventos existentes. Você pode adicionar _muitos_ manipuladores de eventos a um elemento.  
Você também pode adicionar muitos manipuladores de eventos do mesmo tipo a um elemento, ou seja, dois eventos de "clique".

element.**addEventListener**(event, function, useCapture);  

O primeiro parâmetro é o **tipo** do evento (como "click" ou "mousedown").  
O segundo parâmetro é a **função** que queremos chamar quando o evento ocorre.  O terceiro parâmetro é um valor booleano que especifica se é necessário usar o **bubbling de** evento ou a **captura de** evento. Este parâmetro é opcional e será descrito na próxima lição.


Note que você não usa o prefixo " **on** " para este evento; use " **click** " em vez de " **onclick** ".

**Exemplo**:

```javascript
element.addEventListener("click", myFunction)**;  
element.addEventListener("mouseover", myFunction);
  
function myFunction() {  
alert("Hello World!");  
}  
```

Isso adiciona dois ouvintes de evento ao elemento.  
Podemos remover um dos ouvintes:

```javascript
element.removeEventListener("mouseover", myFunction);  
```
Vamos criar um evento que remove a ele mesmo após ser executado:
```javascript
<button id="demo">Start</button>  
  
<script>  
var btn = document.getElementById("demo");  
btn.addEventListener("click", myFunction);  
  
function myFunction() {  
alert(Math.random());  
btn.removeEventListener("click", myFunction);  
}  
</script>
```

[Experimente você mesmo](https://code.sololearn.com/965/#js)

  
Depois de clicar no botão, um alerta com um número aleatório é exibido e o ouvinte de eventos é removido.  

O Internet Explorer versão 8 e inferior não suporta os métodos **addEventListener**() e **removeEventListener**(). No entanto, você pode usar o documento. **attachEvent**() método para anexar manipuladores de eventos no Internet Explorer.

Você pode adicionar eventos a todos os elementos HTML. 

## Propagação de Eventos

Existem duas formas de propagação de evento no HTML DOM : **bubbling** e **capturing** .  
  
A propagação de eventos permite a definição da ordem dos elementos quando ocorre um evento. Se você tiver um elemento \<p> dentro de um elemento \<div> e o usuário clicar no elemento \<p>, qual evento de "clique" do elemento deve ser tratado primeiro?  
  
Em **bubbling** , o evento do elemento mais interno é tratado primeiro e, em seguida, o evento do elemento externo é manipulado. O evento de clique do elemento \<p> é tratado primeiro, seguido pelo evento de clique do elemento \<div>.  
  
Na **capturing**, o evento do elemento mais externo é tratado primeiro e depois o interno. O evento click do elemento \<div> é tratado primeiro, seguido pelo evento click do elemento \<p>.  

> **capturing** **desce** o DOM .  
> **bubbling** vai **até** o DOM .

## Capturing vs. Bubbling

O método **addEventListener**() permite que você especifique o tipo de propagação com o parâmetro **useCapture**.

 ```javascript 
addEventListener(event, function, useCapture)  
```

O valor padrão é **false** , o que significa que a propagação de bubbling é usada; quando o valor é definido como **true** , o evento usa a propagação de captura.


/Capturing propagation  
elem1.addEventListener("click", myFunction, **true**);  
  
//Bubbling propagation  
elem2.addEventListener("click", myFunction, **false**);  
This is particularly useful when you have the same event handled for multiple elements in the  DOM  hierarchy.

 

<!--stackedit_data:
eyJoaXN0b3J5IjpbNjE1NzAwMzYyLDY2NTU3MTg3OCwtMTk3OT
kzNDE0MSw4NjA4MTkyMjAsLTE0MDk3MDg5MzYsNzI1MDQ1NDUw
LC0xMzIwNDA5NTAyLDM4NjY2Mjc5MywxOTkyNTg1ODI5LC00OD
EwNTg1MSwyMDc3OTg3NDMsMTIwMzAzNjg0NiwxNzkzODgxNzg0
LDc1NzQwMTMwNyw1MTQ1MTI5MDgsMTU3MzYyOTUxMCwxOTQ2Mz
A2MzcxLDE0NzUzNzc3NTgsLTEwNjExMDYxMzQsLTIwNzIxMjg2
MTVdfQ==
-->