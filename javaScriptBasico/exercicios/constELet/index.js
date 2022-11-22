const nome = 'Alex';
const sobrenome = 'Siqueira';
const idade = 22
const altura = 1.8;
let peso = 84;
let anoNascimento = 2022 - idade

let imc = peso/altura**2

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
tem ${altura} e seu IMC é de ${imc.toFixed(2)}
${nome} ${sobrenome} nasceu em ${anoNascimento}
`)