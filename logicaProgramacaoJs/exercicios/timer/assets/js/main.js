function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    //formatar a hora
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}


const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;

function initTimer() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

//outra maneira mais performatica de fazer os eventos
document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        segundos = 0;
        relogio.innerHTML = '00:00:00'
    }

    if(el.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.classList.add('pausado')
    }

    if(el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        initTimer()
    }
})