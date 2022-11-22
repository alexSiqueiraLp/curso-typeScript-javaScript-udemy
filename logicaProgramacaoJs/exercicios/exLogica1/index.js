// Escreva uma função que recebe 2 numeros e retorne o maior entre eles

function largerNumber(x,y) {
    // if (x>y) return x    
    // return y
    return x>y ? x : y
}

//arrow function simplificado
const largerNumber2 = (x,y) => x > y ? x : y


console.log(largerNumber(10,2));
console.log(largerNumber2(20,10))
