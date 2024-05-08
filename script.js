var resultadoDado1 = Math.floor(Math.random() * 6) + 1;
var resultadoDado2 = Math.floor(Math.random() * 6) + 1;
const titulo = document.querySelector('h1')

var numeroDado = `dice${resultadoDado1}.png`
var numeroDado2 = `dice${resultadoDado2}.png`


const image1 = document.querySelector('.img1')

image1.setAttribute('src', numeroDado)

const image2 = document.querySelector('.img2')

image2.setAttribute('src', numeroDado2)



if (resultadoDado1 > resultadoDado2) {
    titulo.innerHTML = 'Player 1 venceu'

} else if (resultadoDado1 < resultadoDado2) {

    titulo.innerHTML = 'Player 2 venceu'

} else {
    titulo.innerHTML = 'Empate'
}

