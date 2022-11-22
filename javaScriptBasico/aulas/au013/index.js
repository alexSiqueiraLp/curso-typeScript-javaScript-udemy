// objetos(basico);
/*
 * é usado para variaveis que tem o mesmo grupo de informação
 * quando uma função esta em um objeto, ele é um metodo
 * para referenciar os atributos dentro de objetos, utilizamos this
*/

//objeto literal
const pessoa1 = {
    nome : 'Luiz',
    sobrenome : 'Miranda',
    idade: 25
};
console.log(pessoa1.nome)

//função que cria objeto - factory
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala() {
            console.log(`${this.nome} ${this.sobrenome} diz olá`)
        },

    }
}

const pessoa2 = criaPessoa('Alex', 'Siqueira', 22)
console.log(pessoa2.nome, pessoa2.sobrenome)
pessoa2.fala()