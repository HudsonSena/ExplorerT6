const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnCardForest = document.querySelector('.cardForest')
const btnCardRain = document.querySelector('.cardRain')
const btnCardCoffee = document.querySelector('.cardCoffee')
const btnCardFire = document.querySelector('.cardFire')

btnPlay.addEventListener('click', play)
btnStop.addEventListener('click', stop)
//btnPlus.addEventListener('click', plus)
//btnMinus.addEventListener('click', minus)
btnCardForest.addEventListener('click', forest)
btnCardRain.addEventListener('click', rain)
btnCardCoffee.addEventListener('click', coffee)
btnCardFire.addEventListener('click', fire)

function play() {
    btnPlay.classList.add('blueButton')
    btnStop.classList.remove('blueButton')
}

function stop() {
    btnStop.classList.add('blueButton')
    btnPlay.classList.remove('blueButton')
}

/*function plus() {
    btnStop.classList.add('blueButton')
    btnPlay.classList.remove('blueButton')
}

/function minus() {
    btnStop.classList.add('blueButton')
    btnPlay.classList.remove('blueButton')
}*/

function forest() {
    btnCardForest.classList.add('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')

}

function rain() {
    btnCardRain.classList.add('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')
    btnCardForest.classList.remove('blue2')
}

function coffee() {
    btnCardCoffee.classList.add('blue2')
    btnCardFire.classList.remove('blue2')
    btnCardForest.classList.remove('blue2')
    btnCardRain.classList.remove('blue2')

}

function fire() {
    btnCardFire.classList.add('blue2')
    btnCardForest.classList.remove('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')
}