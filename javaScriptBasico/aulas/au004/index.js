/*diferenças entre let e var
    - ECMAScript 2015(ES6)

*/

//se isso fosse feito com let, daria um erro
var nome = 'Luiz';
var nome = 'otavio';

nome2 = 'Alex'; //isso cria uma variavel global, quando não especificado(CUIDADO)

console.log(nome, nome2)