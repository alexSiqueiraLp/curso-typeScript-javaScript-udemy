//atribuição via desestruturação(arrays)

let a = 'A';
let b = 'B';
let c = 'C';

//isso é uma atribuição via desestruturação
// const letras = [b, c, a];
// [a,b,c] = letras;
// console.log(a,b,c);

const numeros = [100,200,300,400,500,600,700,800,900];
//rest operador(...variavel) - pegar o resto de algo
// const [primeiroNumero, segundoNumero, ...resto] = numeros;

// console.log(primeiroNumero, segundoNumero)
// console.log(resto)

//pular valores na atribuição
// const[um, , tres, , cinco] = numeros;
// console.log(um, tres, cinco)

const numerosArray = [
    [1, 2, 3], //indice 1
    [4, 5, 6], //indice 2
    [7, 8, 9] //indice 3
];
//console.log(numerosArray[1][2])

const [,[,,seis]] = numerosArray;
console.log(seis);

const [lista1, lista2, lista3] = numerosArray;
console.log(lista3[2])
