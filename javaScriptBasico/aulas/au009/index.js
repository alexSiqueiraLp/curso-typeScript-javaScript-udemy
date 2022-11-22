//mais sobre numbers

let num1 = 1;
const num2 = 1.5;
let decimal1 = 0.7
let decimal2 = 0.1

decimal1 += decimal2
decimal1 += decimal2
decimal1 += decimal2

//não ter problemas com imprecissões
decimal1 = Number(num1.toFixed(2))

console.log(Number.isInteger(decimal1))

console.log(Number(decimal1).toFixed(2))
//converter numero para string
console.log(num1.toString() + num2)
//tranformar em binario
num3 = num2.toString(2)
let num4 = 15.45586
//colocar duas casas decimais
console.log(num4.toFixed(2))
//verificar se o numero é inteiro
console.log(Number.isInteger(num4))
//verificar se a conta é um NaN
let temp = num1*'olá';
console.log(Number.isNaN(temp))