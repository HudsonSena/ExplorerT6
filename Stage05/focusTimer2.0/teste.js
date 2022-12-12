const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.vlplus')
const btnMinus = document.querySelector('.vlminus')

const btnCardForest = document.querySelector('.cardForest')
const btnCardRain = document.querySelector('.cardRain')
const btnCardCoffee = document.querySelector('.cardCoffee')
const btnCardFire = document.querySelector('.cardFire')

let displayMinutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')



const forestSound = new Audio('https://github.com/HudsonSena/ExplorerT6/blob/master/Stage05/focusTimer2.0/audios/Floresta.mp3?raw=true')
const rainSound = new Audio('https://github.com/HudsonSena/ExplorerT6/blob/master/Stage05/focusTimer2.0/audios/Chuva.mp3?raw=true')
const coffeeSound = new Audio('https://github.com/HudsonSena/ExplorerT6/blob/master/Stage05/focusTimer2.0/audios/Cafeteria.mp3?raw=true')
const fireSound = new Audio('https://github.com/HudsonSena/ExplorerT6/blob/master/Stage05/focusTimer2.0/audios/Lareira.mp3?raw=true')

forestSound.loop = true;
rainSound.loop = true;
coffeeSound.loop = true;
fireSound.loop = true;

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

    plus()
}

function buttonMinus() {
    btnMinus.classList.add('blueButton')
    btnPlus.classList.remove('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlay.classList.remove('blueButton')
    minus()
}

function forest() {
    btnCardForest.classList.add('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')
    forestSound.play()
    rainSound.pause()
    coffeeSound.pause()
    fireSound.pause()
}

function rain() {
    btnCardRain.classList.add('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')
    btnCardForest.classList.remove('blue2')
    rainSound.play()
    forestSound.pause()
    coffeeSound.pause()
    fireSound.pause()
}

function coffee() {
    btnCardCoffee.classList.add('blue2')
    btnCardFire.classList.remove('blue2')
    btnCardForest.classList.remove('blue2')
    btnCardRain.classList.remove('blue2')
    coffeeSound.play()
    forestSound.pause()
    rainSound.pause()
    fireSound.pause()
}

function fire() {
    btnCardFire.classList.add('blue2')
    btnCardForest.classList.remove('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')
    fireSound.play()
    forestSound.pause()
    rainSound.pause()
    coffeeSound.pause()
}

let minutesPlus = 0

function plus() {
    minutesPlus +=5
    console.log(minutesPlus)
}

function minus() {
    if(minutesPlus <= 5) {
        alert('Adicione Minutos!')
    } else {
        minutesPlus -= 5
    }
    console.log(minutesPlus)
}
console.log(minutesPlus)