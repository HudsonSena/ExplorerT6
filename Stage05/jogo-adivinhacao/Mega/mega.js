const primeiroNumero = document.querySelector("#numeroEscolhido")
const sorte = document.querySelector("#sorte")
let num1 = Number(primeiroNumero.value)
let dezVinte = 0
const h1 = document.querySelector('.h1')
let n2 = 0
let n3 = 0
let n4 = 0
let n6 = 0
let quadranten1 = 'Qualquer'
let quadranten2 = 'Qualquer'
let quadranten3 = 'Qualquer'
let quadranten4 = 'Qualquer'
let quadranten5 = 'Qualquer'
let quadranten6 = 'Qualquer'
let quadranten7 = 'Qualquer'

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

    let numero1 = num1;

        if (numero1 <= 5 || (numero1 >= 11 && numero1 <= 15) || (numero1 >= 21 && numero1 <= 25)) {
            quadranten1 = 'Quadrante 1'
        } else if ((numero1 >= 6 && numero1 <= 10) || (numero1 >= 16 && numero1 <= 20) || (numero1 >= 26 && numero1 <= 30)) {
            quadranten1 = "Quadrante 2"
        } else if ((numero1 >= 31 && numero1 <= 35) || (numero1 >= 41 && numero1 <= 45) || (numero1 >= 51 && numero1 <= 55)) {
            quadranten1 = "Quadrante 3"
        } else if ((numero1 >= 36 && numero1 <= 40) || (numero1 >= 46 && numero1 <= 50) || (numero1 >= 56 && numero1 <= 60)) {
            quadranten1 = "Quadrante 4"
        }

    
    n2 = Math.round(Math.random() * 10)


    let numero2 = num1 + n2

        if (numero2 <= 5 || (numero2 >= 11 && numero2 <= 15) || (numero2 >= 21 && numero2 <= 25)) {
            quadranten2 = 'Quadrante 1'
        } else if ((numero2 >= 6 && numero2 <= 10) || (numero2 >= 16 && numero2 <= 20) || (numero2 >= 26 && numero2 <= 30)) {
            quadranten2 = "Quadrante 2"
        } else if ((numero2 >= 31 && numero2 <= 35) || (numero2 >= 41 && numero2 <= 45) || (numero2 >= 51 && numero2 <= 55)) {
            quadranten2 = "Quadrante 3"
        } else if ((numero2 >= 36 && numero2 <= 40) || (numero2 >= 46 && numero2 <= 50) || (numero2 >= 56 && numero2 <= 60)) {
            quadranten2 = "Quadrante 4"
        }

    
    n3 = Math.round(Math.random() * 10)
    

    let numero3 = numero2 + n3

        if (numero3 <= 5 || (numero3 >= 11 && numero3 <= 15) || (numero3 >= 21 && numero3 <= 25)) {
            quadranten3 = 'Quadrante 1'
        } else if ((numero3 >= 6 && numero3 <= 10) || (numero3 >= 16 && numero3 <= 20) || (numero3 >= 26 && numero3 <= 30)) {
            quadranten3 = "Quadrante 2"
        } else if ((numero3 >= 31 && numero3 <= 35) || (numero3 >= 41 && numero3 <= 45) || (numero3 >= 51 && numero2 <= 55)) {
            quadranten3 = "Quadrante 3"
        } else if ((numero3 >= 36 && numero3 <= 40) || (numero3 >= 46 && numero3 <= 50) || (numero3 >= 56 && numero3 <= 60)) {
            quadranten3 = "Quadrante 4"
        }

    n4 = Math.round(Math.random() * 10)

    let numero4 = numero3 + n4

        if (numero4 <= 5 || (numero4 >= 11 && numero4 <= 15) || (numero4 >= 21 && numero4 <= 25)) {
            quadranten4 = 'Quadrante 1'
        } else if ((numero4 >= 6 && numero4 <= 10) || (numero4 >= 16 && numero4 <= 20) || (numero4 >= 26 && numero4 <= 30)) {
            quadranten4 = "Quadrante 2"
        } else if ((numero4 >= 31 && numero4 <= 35) || (numero4 >= 41 && numero4 <= 45) || (numero4 >= 51 && numero4 <= 55)) {
            quadranten4 = "Quadrante 3"
        } else if ((numero4 >= 36 && numero4 <= 40) || (numero4 >= 46 && numero4 <= 50) || (numero4 >= 56 && numero4 <= 60)) {
            quadranten4 = "Quadrante 4"
        }

    let numero5 = numero4 + dezVinte;

        if (numero5 <= 5 || (numero5 >= 11 && numero5 <= 15) || (numero5 >= 21 && numero5 <= 25)) {
            quadranten5 = 'Quadrante 1'
        } else if ((numero5 >= 6 && numero5 <= 10) || (numero5 >= 16 && numero5 <= 20) || (numero5 >= 26 && numero5 <= 30)) {
            quadranten5 = "Quadrante 2"
        } else if ((numero5 >= 31 && numero5 <= 35) || (numero5 >= 41 && numero5 <= 45) || (numero5 >= 51 && numero5 <= 55)) {
            quadranten5 = "Quadrante 3"
        } else if ((numero5 >= 36 && numero5 <= 40) || (numero5 >= 46 && numero5 <= 50) || (numero5 >= 56 && numero5 <= 60)) {
            quadranten5 = "Quadrante 4"
        }

    n6 = Math.round(Math.random() * 10)

    let numero6 = numero5 + n6

        if (numero6 <= 5 || (numero6 >= 11 && numero6 <= 15) || (numero6 >= 21 && numero6 <= 25)) {
            quadranten6 = 'Quadrante 1'
        } else if ((numero6 >= 6 && numero6 <= 10) || (numero6 >= 16 && numero6 <= 20) || (numero6 >= 26 && numero6 <= 30)) {
            quadranten6 = "Quadrante 2"
        } else if ((numero6 >= 31 && numero6 <= 35) || (numero6 >= 41 && numero6 <= 45) || (numero6 >= 51 && numero6 <= 55)) {
            quadranten6 = "Quadrante 3"
        } else if ((numero6 >= 36 && numero6 <= 40) || (numero6 >= 46 && numero6 <= 50) || (numero6 >= 56 && numero6 <= 60)) {
            quadranten6 = "Quadrante 4"
        }

    let numero7 = Math.round(Math.random() * 60)

        if (numero7 <= 5 || (numero7 >= 11 && numero7 <= 15) || (numero7 >= 21 && numero7 <= 25)) {
            quadranten7 = 'Quadrante 1'
        } else if ((numero7 >= 6 && numero7 <= 10) || (numero7 >= 16 && numero7 <= 20) || (numero7 >= 26 && numero7 <= 30)) {
            quadranten7 = "Quadrante 2"
        } else if ((numero7 >= 31 && numero7 <= 35) || (numero7 >= 41 && numero7 <= 45) || (numero7 >= 51 && numero7 <= 55)) {
            quadranten7 = "Quadrante 3"
        } else if ((numero7 >= 36 && numero7 <= 40) || (numero7 >= 46 && numero7 <= 50) || (numero7 >= 56 && numero7 <= 60)) {
            quadranten7 = "Quadrante 4"
        }

    
    
    h1.innerHTML = String(`Os números sorteados são:
    </br> Número: ${numero1}, ${quadranten1};
    </br> Número: ${numero2}, ${quadranten2};
    </br> Número: ${numero3}, ${quadranten3};
    </br> Número: ${numero4}, ${quadranten4};
    </br> Número: ${numero5}, ${quadranten5};
    </br> Número: ${numero6}, ${quadranten6};
    </br> Aposta de 7 números: ${numero7}, ${quadranten7}`)

    primeiroNumero.value = ''
}