//nodelist - embora se comporte como um array, ele não é

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

//aqui pega todos os stilos css computados no body
const estilosBody = getComputedStyle(document.body);
//pegamos o backgroundcolor que esta presente no body
const backGroundColorBody = estilosBody.backgroundColor

for (const p of ps) {
   p.style.backgroundColor = backGroundColorBody;
   p.style.color = '#FFFFFF';
}
console.log(backGroundColorBody)