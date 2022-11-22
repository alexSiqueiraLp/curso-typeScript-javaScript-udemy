/* Escreva uma função que recebe um numero e retorne o seguinte:
    *Numero é divisivel por 3 = retorne Fizz
    *Numero é divisivel por 5 = retorne Buzz
    * numero divisivel por 3 e 5 = fizzBuzz
    *numero NÂO é divisivel por 3 e 5 = retorna o proprio numero
    * checar se o numero é realmente um numero = retorna a entrada do dado
    * Use a função com numeros de 0 a 100
*/

function divisive(x) {
    const num = Number(x)

    if (!num) return x
    if (num%3 === 0 && num%5 === 0) return 'FizzBuzz'
    if (num%3 === 0) return "Fizz"
    if (num%5 === 0 ) return "Buzz"
    return num
    
}

for (let i = 0; i < 100; i++) {
    console.log(i, divisive(i))    
}


