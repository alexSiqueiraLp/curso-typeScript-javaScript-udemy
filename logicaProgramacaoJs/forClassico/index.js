`
Estrutura de repetição: for

- As tres condições são opcionais

- for ([inicialização]; [condição]; [expressão final]) {
   declaração
}

`

for (let i  = 0; i < 6; i++) {
    console.log(`Linha ${i}`)
}

let i = 0;
for (; i<=10; i++) {
    const par = i%2 === 0 ? 'Par' : 'Impar'
    console.log(i, par)
}

const frutas = ['maçã', 'pera', 'uva']
//percorrer arrays com for
for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element)
}