const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.vlplus')
const btnMinus = document.querySelector('.vlminus')
const btnCardForest = document.querySelector('.cardForest')
const btnCardRain = document.querySelector('.cardRain')
const btnCardCoffee = document.querySelector('.cardCoffee')
const btnCardFire = document.querySelector('.cardFire')
const audioForest = new Audio("https://github.com/HudsonSena/ExplorerT6/blob/master/Stage05/focusTimer2.0/audios/Cafeteria.wav")

btnPlay.addEventListener('click', buttonPlay)
btnStop.addEventListener('click', buttonStop)
btnPlus.addEventListener('click', buttonPlus)
btnMinus.addEventListener('click', buttonMinus)
btnCardForest.addEventListener('click', forest)
btnCardRain.addEventListener('click', rain)
btnCardCoffee.addEventListener('click', coffee)
btnCardFire.addEventListener('click', fire)

function buttonPlay() {
    btnPlay.classList.add('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlus.classList.remove('blueButton')
    btnMinus.classList.remove('blueButton')
}

function buttonStop() {
    btnStop.classList.add('blueButton')
    btnPlay.classList.remove('blueButton')
    btnPlus.classList.remove('blueButton')
    btnMinus.classList.remove('blueButton')
}

function buttonPlus() {
    btnPlus.classList.add('blueButton')
    btnMinus.classList.remove('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlay.classList.remove('blueButton')
}

function buttonMinus() {
    btnMinus.classList.add('blueButton')
    btnPlus.classList.remove('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlay.classList.remove('blueButton')
}

function forest() {
    btnCardForest.classList.add('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')
    audioForest.play()
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