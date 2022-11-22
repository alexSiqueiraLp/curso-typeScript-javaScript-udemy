const numeroTitulo = document.querySelector('#num-title');
const texto = document.querySelector('#texto')

const numero = Number(prompt('digite um numero:'))

numeroTitulo.innerHTML = numero
texto.innerHTML += `<p>A raiz quadrada do seu numero é ${Math.sqrt(numero)}. </p>`
texto.innerHTML += `<p>${numero} é um numero inteiro: ${Number.isInteger(numero)} </p>`
texto.innerHTML += `<p>É um NaN: ${Number.isNaN(numero)}. </p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}. </p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}. </p>`
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}. </p>`

