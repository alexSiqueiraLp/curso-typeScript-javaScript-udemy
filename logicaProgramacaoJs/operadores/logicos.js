/*
operadores logicos
    *&& -> AND -> E
    *|| -> OR >- OU
    *! -> NOT -> NÂO
*/ 
console.log(true && true)//para retornar verdadeiro, todas as expressões tem que ser verdadeiro
console.log(true || false)// se haver ao menos uma verdadeira, a expressão retornara true

const usuario = 'luiz'
const senha = '123456'

const vailogar = usuario === 'luiz' &&senha==='123456'
console.log(vailogar)

console.log(!true)//o operador not inverte o valor
console.log(!!true)//pode-se inverter quantas vezes quiser