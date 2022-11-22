//util para chegar uma mesma variavel repetidas vezes
//caso queira substituir o break, a utilize na função
function getSemanaDay (diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto
        
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto
        default: //caso nenhuma acima foi atendida
            diaSemanaTexto = '';
            return diaSemanaTexto
    }
}

const data = new Date('1987-04-21 00:00:00')
let diaSemana = data.getDay();
const diaSemanaTexto = getSemanaDay(diaSemana)

console.log(diaSemana,diaSemanaTexto)