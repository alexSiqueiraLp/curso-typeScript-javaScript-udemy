const form = document.querySelector('.form');
const divRes = document.querySelector('.resultado-final')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = form.querySelector('#altura').value;
    const weight = form.querySelector('#peso').value;
    const imc = Number(weight)/height**2;
    const isValid = true;

    initFunction(weight, height,isValid, imc)
})

let msg;
function initFunction(weight, height, isValid, imc) {
    let table = valueImcTable(imc)
    let valid = validValueInput(weight, height, isValid)
    let msg;
    
    if(valid) {
        msg = `seu IMC é de ${imc.toFixed(2)} (${table})`
        divRes.classList.add('valid')
    } else {
        msg = 'Valores invalidos!'
        divRes.classList.add('notValid')
    }
    criaP(msg)
}

function criaP(msg) {
    divRes.innerHTML = ''
    const p = document.createElement('p')
    divRes.appendChild(p)
    p.innerText = msg
}

function validValueInput(peso, altura, isValid) {
    pesoNum = Number(peso);
    alturaNum = Number(altura)
    if(!pesoNum) return false;
    if(!alturaNum) return false;
    return isValid
}

function valueImcTable(imc) {
    const indexTableImc = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade brau 3']
    if (imc>=39.9) return indexTableImc[5]
    if (imc>=34.9) return indexTableImc[4]
    if (imc>=29.9) return indexTableImc[3]
    if (imc>=24.9) return indexTableImc[2]
    if (imc>=18.5) return indexTableImc[1]
    if (imc<=18.5) return indexTableImc[0]
}