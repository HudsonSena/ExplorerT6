const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.vlplus')
const btnMinus = document.querySelector('.vlminus')

const btnCardForest = document.querySelector('.cardForest')
const btnCardRain = document.querySelector('.cardRain')
const btnCardCoffee = document.querySelector('.cardCoffee')
const btnCardFire = document.querySelector('.cardFire')


const forestSound = new Audio('./audios/Floresta.mp3')
const rainSound = new Audio('./audios/Chuva.mp3')
const coffeeSound = new Audio('./audios/Cafeteria.mp3')
const fireSound = new Audio('./audios/Lareira.mp3')

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

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

let timerTimeOut

let minutesPlus = 0

function resetTimer() {
    displayMinutes.textContent = String(0).padStart(2, "0")
    displaySeconds.textContent = String(0).padStart(2, "0")
    clearTimeout(timerTimeOut)
    minutesPlus = 0
}

function plus() {
    displayMinutes.textContent = String(minutesPlus += 5).padStart(2, "0")
}

function minus() {
    if(minutesPlus <= 0 || minutesPlus < 5) {
        alert('Adicione os minutos!')
    } else {
        minutesPlus -= 5
    }
    displayMinutes.textContent = String(minutesPlus).padStart(2, "0")
}

function countdown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(displaySeconds.textContent)
        let minutes = Number(displayMinutes.textContent)
        let isFinished = minutes <= 0 && seconds <= 0
        
        if(isFinished) {
            alert('Adicione os minutos!')
            btnPlay.removeAttribute('disabled', 'disabled')            
        } else {
                if(seconds <= 0) {
                seconds = 60
                    minutesPlus = Number(displayMinutes.textContent = String(minutes -1).padStart(2, "0"))
                }
                if(minutes <= 0 && seconds <= 0) {
                    return
                }

                displaySeconds.textContent = String(seconds -1).padStart(2, "0")

                countdown()
        }

    }, 1000)
}

function buttonPlay() {
    btnPlay.classList.add('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlus.classList.remove('blueButton')
    btnMinus.classList.remove('blueButton')
    btnPlay.setAttribute('disabled', 'disabled')

    countdown()
}

function buttonStop() {
    btnStop.classList.add('blueButton')
    btnPlay.classList.remove('blueButton')
    btnPlus.classList.remove('blueButton')
    btnMinus.classList.remove('blueButton')
    btnPlay.removeAttribute('disabled', 'disabled')

    resetTimer()

    forestSound.pause()
    rainSound.pause()
    coffeeSound.pause()
    fireSound.pause()

    btnCardForest.classList.remove('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')
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