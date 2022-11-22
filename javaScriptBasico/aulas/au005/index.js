//Dados primitivos
/* 
String, Number, undefined, null, boolean, symbol

dados primitivos sustentam seu valor, diferente dos dados por referencia

*/
let nome = 'Alex' //string
let num1 = 10 //number
let nomeAluno; // undefined -> Não aponta para lugar nenhum
const sobrenomeAluno = null; // nulo -> Não aponta para lugar nenhum na memoria
const aprovado = false; //boolean = true, false (logico)

//para ver o tipo dos dados - type of
console.log(typeof sobrenomeAluno)

console.log('####')
//valores por referencia
const a = [1, 2]
const b = a

console.log(a, b)
b.push(3)
console.log(a,b)
