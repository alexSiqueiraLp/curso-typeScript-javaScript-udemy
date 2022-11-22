function captureInfo() {
    const form = document.querySelector('.form');

    const resultado = document.querySelector('.result')

    const pessoa = []

    //modo 1 de previnir/capturar eventos
    //form.onsubmit = function (event) {
    //    event.preventDefault();
    //}

    //modo 2 de prevenir/capturar um evento
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const pessoaInfo = {
            nome,
            sobrenome,
            peso,
            altura
        }
        pessoa.push(pessoaInfo)
        console.log(pessoa)

        
        resultado.innerHTML = `<p>${pessoaInfo.nome} ${pessoaInfo.sobrenome} ${pessoaInfo.peso} ${pessoaInfo.altura}</p>`
    })
}

captureInfo()