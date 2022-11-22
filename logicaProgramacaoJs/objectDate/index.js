//O object date é uma função construtura
//const tresHoras = 60*60*3*1000 //tres horas
//const umDia = 60*60*24*1000
//cria um objeto com a data atual
//o tempo correspondenete aos milisegundos que decorreram desde 1 jn de 1970(ecopa unix)
//const data = new Date(0+tresHoras+umDia); // 01/01/1970 (epoca unix) - se quiser uma data anterior a isso valores negativos
//console.log(data.toString())

const data = new Date(2019, 3, 20, 15, 14, 27) //ordem: ano, mes, dia hora, minutos, segundos, milessimos - pode omitir o dia pra frente - (ps: o mes começa do zero)
console.log(data.toString())

const data2 = new Date('2019-04-20 20:20:59.100')
console.log(data2.toString())

console.log('Dia', data.getDate())
console.log('Mes', data.getMonth()) //mes começa no 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0- domingo, 6 - Sábado
console.log(data2.now()) //os milessegundos desde o marco zero