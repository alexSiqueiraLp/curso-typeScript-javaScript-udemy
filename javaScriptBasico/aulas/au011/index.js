//

/*arrays basico
    * arrays são listas, onde pode-se colocar diferentes tipos de dados - strings, objetos, numeros, finções...

    * costume-se trabalhar com apenas um tipo de dado

    *Sem indexados por elementos

    *Ao modificar a array - seja removendo ou adicinando - os indices são alterados

    *Array é considerado obj no javaScript

    *È mais recomendavel adicionar elementos ao final
*/
//              0       1       2   3
const teste = ['luiz', 'maria', 1, NaN];
console.log(teste[1][2]) //acessar o indice 2 da string contida no indice 1 do array

teste[0] = 'Eduardo' //modificar um indice

//para saber o tamanho da array
console.log(teste.length)

//adicionar elementos ao final 
teste.push('Ana')
console.log(teste)

//para adicionar ao começo
teste.unshift('unshift e shift')
console.log(teste)
//remover do começo
const removidoComeco = teste.shift()
console.log(removidoComeco)

//remover elementos do final - pode-se guarda-lo em uma variavel
const removido = teste.pop() //Ana removido e guardado na variavel
teste.pop() // NaN removido
console.log(teste, removido)

//remover elementos sem alterar os indices
// no item removido fica com valor vazio
delete teste[2]
console.log(teste)
console.log(teste[2]) //o valor sera undefined

//fatiar array
console.log(teste.slice(0, 4))
console.log(teste.slice(0, -1)) //pega o tamanho -1

//verificar se um array
console.log( teste instanceof Array)