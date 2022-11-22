//try, catch, throw, e finally

// try {
//     //parte executada quando não há erros
//     console.log(a)
//     console.log('Abri um arquivo')
//     console.log('manipulei o arquivo e gerou erro')
//     console.log('fechei o arquivo')

//     //posso aninhar try e catch
//     try {
//         console.log(b)
//     } catch(e) {
//         console.log('deu erro')
//     } finally {
//         console.log('tambem sou finally')
//     }

// } catch(e) {
//     // É executada quando há erros
//     console.log('tratando o erro')
// } finally {
//     //É executado sempre
//     console.log('FINALLY: Eu sempre sou executado')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instancia de Date')
    }
    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR' , {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //isso remove o timezone
    });
}

try {
const data = new Date('01-01-1970 12:58:12')
const hora = retornaHora()
console.log(hora)
} catch(e) {
    //tratando o erro
}