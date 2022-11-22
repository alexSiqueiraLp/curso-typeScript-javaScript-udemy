// object math

let num1 = 9.54785;
//arredondar para baixo
console.log(Math.floor(num1))
//arredondar para cima
console.log(Math.ceil(num1))
//funções dentro de objetos chama-se metodos
//arredonda para o mais proximo
let num2 = Math.round(num1)
console.log(num2)
//retorna o maior numero de uma lista
console.log(Math.max(1,2,3,-10,100,50,2))
//pegar o menor numero
console.log(Math.min(5,7,8,2,50,-5,78))
//gerar um numero aleatorio entre 10 e 5
const aleatorio = Math.random() * (10-5) + 5
console.log(aleatorio)

console.log(100/0) //isso não da erro retorna infinity -> true