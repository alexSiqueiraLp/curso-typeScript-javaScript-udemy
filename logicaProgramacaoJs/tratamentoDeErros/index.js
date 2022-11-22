//try, catch e throw
//usado para trechos perigosos
//não é recomendavel expor os erros internos ao usuario final

// try {
//     //executa esse bloco, e caso de algum erro, o catch é executado
//     console.log(nãoExisto)
// } catch(err) {
//     console.log('naoExisto não existe')
//     //o erro esta guardado na variavel err
//     console.log(err)
// }

function soma(x, y) {
    if(typeof x != 'number' || typeof y !== 'number') {
        //throw é usado para lançar erros, e o new Error é uma função construtora de erro
        throw new Error('x e y precisam ser numeros');
    }
    return x + y
}
try {
    console.log(soma(1,2))
    console.log(soma('1',2))
} catch(error) {
    //console.log(error)
    console.log('alguma coisa mais agradavel para o usuario')
}