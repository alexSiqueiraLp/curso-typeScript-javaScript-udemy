//while e do while - estrutura de repetição
// const nome = 'Alex'
// let i = 0;
// while (i < nome.length) {
//     console.log(nome[i])
//     i++; //variavel de controle do laço
// }

function random(min, max) {
    const r = Math.random() * (max - min)
    return Math.floor(r)
}
const min = 1;
const max = 50;
let rand = random(1, 50);

//while - enquanto
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

console.log('###################')

//do while - executa o bloco, dps verifica a condição
do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);