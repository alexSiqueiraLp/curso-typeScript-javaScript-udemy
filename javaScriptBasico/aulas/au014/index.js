// Dados primitivos e valores por referencia

/*
Primitvos (imutaveis) = string, number, boolean, undefined, null (bigint, symbol)

Referencia (mutavel) - array, object, function

*/

//valor primitivo
let nome = 'Alex';
nome[1] = 'R'; //isso não funciona, string é imutavel

let a = 'A';
let b = a; //copia, quando o dado for primitivo
console.log(a, b);

a = 'outra coisa';
console.log(a,b);

//dados por referencia
let c = [1,2,3]
let d = c; //ambos apontam para o mesmo local na memoria
console.log[a,b]

c.push(4)
console.log(c,d)

d.pop();
console.log(c,d)

//para copiar usa-se o spreed
let e = [...c] //isso vai copiar ao inves de referenciar
console.log(c, e)
c.push(4)
console.log(c, e)

//spreed com objetos
const aObject = {
    nome: 'Alex',
    sobrenome: 'Siqueira'
}

const bObject = aObject
const cObject = {...aObject} //copia ao inves de referenciar
console.log(aObject, bObject)
aObject.nome = 'Isa'

console.log(bObject)
