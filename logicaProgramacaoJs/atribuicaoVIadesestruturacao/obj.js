//atribuição via desestruturação(objetos)

const pessoa = {
    //nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

const nome1 = pessoa.nome//atribuição normal

//Atribuição via desestruturação
//é possivel colocar um valor padrão caso nada seja encontrado na chave(observe isso no nome)
//se a nome da variavel for a mesma que a da chave do obj, basta declara-la diretamente(observe isso em idade)
const { nome: primeiroNome ='', sobrenome: segundoNome, idade } = pessoa
console.log(primeiroNome, segundoNome, idade)

//extrair objetos dentro de objetos
const {endereco: {rua, numero} } = pessoa
console.log(rua, numero)
//outra forma de declarar
const {endereco: { rua: r, numero: n}} = pessoa
console.log(r, n)

//com o operador rest
const {nome, ...resto } = pessoa
console.log(resto)
