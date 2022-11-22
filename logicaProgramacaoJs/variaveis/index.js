//diferenças entre let e var
//ambas criam variaveis

`
- não é possivel redeclarar let, com é possivel com var

- let tem escopo de bloco(dentro de chaves)

- Var só tem escopo de função

- Var possui o hoisting

`

// let nome = 'Luiz' //criando
// var nome2 = 'Luiz'

// nome2 = 'Amanda' //redeclarando
// console.log(nome2)

// if (true) {
//     let nome = 'Otavio'//criando
//     var nome2 = 'Isabella' //redeclarando
//     console.log(nome, nome2)

//     if (true) {
//         let nome = 'Outra coisa' //criando
//         console.log(nome, nome2)
//     }
// }

console.log('###########')

//a função protege as variaveis dentro dela, mas ela consewgue acessar em seu entorno
var sobrenome = 'Siqueira'

function falaOi () {
    var nome = 'Alex'
    console.log(nome, sobrenome)
}

//console.log(nome) //retorna um erro
falaOi()
