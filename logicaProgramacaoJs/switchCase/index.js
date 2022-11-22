//switch/case
const data = new Date('1987-04-21 00:00:00')
let diaSemana = data.getDay();
//diaSemana = 7
let diaSemanaTexto;

//util para chegar uma mesma variavel repetidas vezes
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break; //o break faz parar o codigo
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break; //o break faz parar o codigo
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break; //o break faz parar o codigo
    
    case 3:
        diaSemanaTexto = 'quarta-feira';
        break; //o break faz parar o codigo
    case 4:
        diaSemanaTexto = 'quinta-feira';
        break; //o break faz parar o codigo
    case 5:
        diaSemanaTexto = 'sexta-feira';
        break; //o break faz parar o codigo
    case 6:
        diaSemanaTexto = 'Sábado';
        break; //o break faz parar o codigo
    case 6:
        diaSemanaTexto = 'Domingo';
        break; //o break faz parar o codigo
    default: //caso nenhuma acima foi atendida
        diaSemanaTexto = '';
        break;
}

console.log(diaSemana, diaSemanaTexto)

