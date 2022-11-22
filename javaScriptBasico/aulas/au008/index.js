//mais sobre strings

/*
    * As strings são indexadas
    * Os caracteres pode-ser acessados como uma array
    * também pode se usar a função charAtt() para acessar determinado caractere
    * A função cancat() é utilizada para concatenar mais texto a string
    * 

*/

//modos de declarar uma string

const umaString = 'um texto';
const segundaString = "outro texto";
const terceiraString = `mais outra string`;

//escapar um caractere usa-se \
let dicaString = "olha \"isso\", legal né";
console.log(dicaString);

console.log(dicaString.charAt(3))
console.log(dicaString.concat('  - texto com concat()'))

//pesquisar por um indice - caso não seja encontrado é -1
//retorna onde a palavra começa no indice
console.log(dicaString.indexOf('legal'))

//funciona como o indexOf() só que de trás para frente
console.log(dicaString.lastIndexOf())
//substituir o texto da string
console.log(dicaString.replace('olha', 'veja'))
//ver o tamanho de uma string
console.log(dicaString.length)
//fatiar a string, o primeiro parametro é onde copomeça, e o ultimo é onde termina
console.log(dicaString.slice(0,4))
//slice(com valores negativos, fatia de tras para frente
//ela pega o total do indice da string -> 21 e subtrai pelo parametro passado 
console.log(dicaString.slice(-2))

//dividir uma string
console.log(dicaString.split(' ', 5))

//deixar tudo em maiuscula
console.log(terceiraString.toUpperCase())
//deixar tudo em minusculo
console.log(terceiraString.toLowerCase())