// Variaveis com let e regras gerais
/*
    - são informações guardadas na memoria
    - let é mutavel
    - pode-se ser declarado sem um valor definido
    - não é possivel redeclarar a variavel let
    - não podemos crisr variavais com palavras reservadas da linguagem
    - precisam ter nomes significativos
    - segue o padrão camelCase
    - não pode começar o nome de uma variavel com numeros
    - Não pode conter espaços ou traços
    - Case sensitive
    - Não utilize VAR utilize LET
*/
let nome; //declarando a variavel
//let nome = 'Alex'// isso retorna um erro
nome = 'João'; //inicializando a variavel

console.log(nome, 'nasceu em 1984.')
console.log('em 2000', nome,'conheceu maria')
console.log(nome,'casou-se com maria em 2012')
console.log('maria deve 1 filho com', nome, 'em 2015')
console.log('o filho de', nome, 'se chama eduardo')

let nomeCompletoDoCliente = 'Alex Siqueira Lopes';
let nomecompletodocliente = 'itadori'
console.log(nomeCompletoDoCliente, nomecompletodocliente)
