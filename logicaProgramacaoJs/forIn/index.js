//Aula for in (estrutura de repetição)
// for clássico - geralmentencom iteraveis (array ou strings)
//for in - Retorna o indice ou chave(string. array, objetos)
//for of - Retorna o valor em si(arrays ou strings)

const frutas = ['Pera', 'maçã', 'uva'];

//ele le os indices ou chaves do objeto
// for (let indice in frutas) {
//     console.log(frutas[indice])
// }

const pessoa = {
    nome: 'Alex',
    sobrenome: 'Siqueira',
    idade: 22
}
//modos de acessar valores dentro das chaves de um objeto
// console.log(pessoa.nome);
// console.log(pessoa['nome'])

for (let key in pessoa) {
    console.log(key, pessoa[key])
}
