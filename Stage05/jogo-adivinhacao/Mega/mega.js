const numeroEscolhido = document.querySelector("#numeroEscolhido")
const sorte = document.querySelector("#sorte")
let num1 = Number(numeroEscolhido)

sorte.addEventListener('click', sortear)

function sortear(event) {
    event.preventDefault()
    console.log(num1)
    if(num1 == '') {
        num1 = Math.round(Math.random() * 30)
    } else {
        num1 = Number(numeroEscolhido)
    }

    console.log(num1)
    let dezVinte = 0
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

    const h1 = document.querySelector('.h1')
    
    h1.innerHTML = String(`Os números sorteados são: </br> ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, ${numero6}.`)
}

