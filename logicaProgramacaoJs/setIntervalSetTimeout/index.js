//setInterval
//controla timers

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

//configura um intervalo para que determinada função execute
function funcaoDoIinterval() {
    console.log(mostraHora())
}
//em milesegundos
//posso coloca-la dentrom de uma variavel
const time = setInterval(function () {
    console.log(mostraHora())
}, 1000)

//a função setTimeout só executa uma vez
setTimeout(function () {
    clearInterval(time)
}, 3000)

setTimeout (function () {
    console.log('Ola mundo!')
}, 5000)