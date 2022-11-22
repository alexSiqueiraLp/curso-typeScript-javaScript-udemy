const container = document.querySelector('.container')

function createElementsJs () {
    const element = [
        {tag: 'p', frase: 'texto 1'},
        {tag: 'div', frase: 'texto 2'},
        {tag: 'footer', frase: 'texto 3'},
        {tag: 'section', frase: 'texto 4'},
    ]

    const div = document.createElement('div')
    container.appendChild(div)

    function createElements () {
        for (let i = 0; i < element.length; i++) {
            let tag = element[i].tag;
            let txt = element[i].frase
            
            addElementContainer(tag, txt)
        }
    }
    function addElementContainer(tag, txt) {
        let createTag = document.createElement(tag)
        div.appendChild(createTag)
        createTag.innerHTML= txt
    }
    createElements()
}
createElementsJs()