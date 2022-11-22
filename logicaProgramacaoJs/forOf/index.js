//for of(especifico para objetos iteraveis)
// em casos quando só quer o valor
// não funciona em objetos(não iteravel)

const nome = ['Luiz', 'otavio', 'henrrique']

// for (let i in nome) {
//     console.log(nome[i])
// }

for (let valor of nome) {
    console.log(valor)
}

console.log('######')

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})