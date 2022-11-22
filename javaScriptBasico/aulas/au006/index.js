/*
Operadores aritmeticos - operadores tem precedencia
    *  +: Adição/concatenação
    *  -: subtração
    *  *: multiplicação
    *  /: divisão
    *  **: potenciação
    *  %: resto da divisão 
    *  ++: incremento
    *  --: decremento

*/

const num1 = 2;
const num2 = 10;
const num3 = 2;
//potenciação
console.log(num1**num2)
//resto da divisão
console.log(num1%num2)
//alterar precedencia
console.log((num1+num2)*num3)
//incremento
let contador = 1
console.log(contador++) //primeiro vai imprimir o valor, depois incrementar
console.log(++contador)//vai incrementar e depois imprimir o valor
let contador2 = 2;
contador2 += 2; //atribuição
contador2 *=2; //é possivel fazer isso com os demais operadores
console.log(contador2)

//NaN - Not a number
const num4 = 10;
const num5 = 'L5'; //NaN
const num6 = parseInt('5')
const num7 = parseFloat('5.5')
const num8 = Number('7')
