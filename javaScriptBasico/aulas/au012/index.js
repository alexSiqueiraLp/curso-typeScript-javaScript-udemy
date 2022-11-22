//funções(basico)
/* 

* funções executam algumas ação
* segue as mesmas regras das variaveis
* os parametros de uma função são bem semelhantes a variaveis
* funções são reutilizaveis
* elas podem ou não retornar alguma coisa
* As variaveis dentro da função esta protegida pelo seu escopo
* A palavra return - faz parar o função

*/
//declarar uma função
function saudacao(nome) {
    return `Bom dia ${nome}`
}
//saudacao('Alex')
//saudacao('Maria')
const variavel = saudacao('alex')
console.log(variavel)

function soma(x,y) {
    const resultado = x+y;
    return resultado
}
console.log(soma(2,2));
//console.log(resultado) não é possivel acessar variaveis dentro da função fora dela
const resultado = soma(5,5)
console.log(resultado)

//é possivel colocar um valor padrão caso a função seja invocada sem um parametro
function soma2(x = 1, y = 1) {
    let resultado = x+y;
    return resultado
}
const resultado2 = soma2()
console.log(resultado2)


// função anonima
const raiz = function (n) {
    return n**0.5;
};

console.log(raiz(9))


//arrow function
const raiz2 = (n) => {
    return n**0.5
}
/*
//arrow function simplificada

const raiz = n => n**0.5

*/
console.log(raiz2(16))