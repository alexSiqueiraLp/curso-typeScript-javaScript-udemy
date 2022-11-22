const element = [ 
    {tag: 'p', texto: 'frasse 1'},
    {tag: 'div', texto: 'frasse 2'},
    {tag: 'footer', texto: 'frasse 3'},
    {tag: 'section', texto: 'frasse 4'},
]

const container = document.querySelector('.container');
const div = document.createElement('div')

for (let i = 0; i<element.length; i++) {
    let {tag, texto} = element[i];
    let tagCreate = document.createElement(tag);
    //tagCreate.innerHTML = texto;
    //tagCreate.innerText = texto;
    let textNode = document.createTextNode(texto);
    tagCreate.appendChild(textNode)
    div.appendChild(tagCreate)
}

container.appendChild(div)