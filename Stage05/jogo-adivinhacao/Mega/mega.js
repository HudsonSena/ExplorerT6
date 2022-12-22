const primeiroNumero = document.querySelector("#numeroEscolhido")
const sorte = document.querySelector("#sorte")
let num1 = Number(primeiroNumero.value)
let dezVinte = 0
const h1 = document.querySelector('.h1')

sorte.addEventListener('click', sortear)

function sortear(event) {
    event.preventDefault()    

    if(primeiroNumero.value == '') {
        num1 = Math.round(Math.random() * 30)
    } else {
        num1 = Number(primeiroNumero.value)
    }    

    while(dezVinte <= 9) {
        dezVinte = Math.round(Math.random() * 20)
    }

    const dif = [
        Math.round(Math.random() * 10),
        Math.round(Math.random() * 10),
        Math.round(Math.random() * 10),
        dezVinte,
        Math.round(Math.random() * 10),
    ]

    console.log('Diferença entre os números: ' + dif)

    let numero1 = num1
    let numero2 = num1 + dif[0]
    let numero3 = numero2 + dif[1]
    let numero4 = numero3 + dif[2]
    let numero5 = numero4 + dif[3]
    let numero6 = numero5 + dif[4]

    
    
    h1.innerHTML = String(`Os números sorteados são: </br> ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, ${numero6}.`)

    primeiroNumero.value = ''
}