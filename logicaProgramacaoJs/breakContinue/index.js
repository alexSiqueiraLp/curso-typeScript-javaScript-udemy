//break e continue
/*
break: ela sai do bloco de uma ação, util para poupar recursos do sistema.
continue: pula para a proxima interação

ambos funcionam em todos os for, while e do while
*/
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('pulei o numero 2')
        continue; //ele pula para proxima interação do laço
        //sempre se coloca antes da ação, ele pulara a impressão do 2
        //pode se ter quantos continue quiser
    }

    if (numero === 7) {
        console.log('o 7 foi achado, saindo...')
        break //termina o laço
    }

    console.log(numero)
}