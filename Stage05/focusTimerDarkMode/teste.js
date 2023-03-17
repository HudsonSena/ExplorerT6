const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.vlplus')
const btnMinus = document.querySelector('.vlminus')

const btnCardForest = document.querySelector('.cardForest')
const btnCardRain = document.querySelector('.cardRain')
const btnCardCoffee = document.querySelector('.cardCoffee')
const btnCardFire = document.querySelector('.cardFire')

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

const forestSound = new Audio('./audios/Chuva.mp3')
const rainSound = new Audio('./audios/Chuva.mp3')
const coffeeSound = new Audio('./audios/Cafeteria.mp3')
const fireSound = new Audio('./audios/Lareira.mp3')

const inputForest = document.querySelector('#rangeForest')
const inputRain = document.querySelector('#rangeRain')
const inputCoffee = document.querySelector('#rangeCoffe')
const inputFire = document.querySelector('#rangeFire')

inputForest.addEventListener('input', function(){
    forestSound.volume = inputForest.value
})



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

const btnDarkMode = document.querySelector('.btnLightMode')
const btnLightMode = document.querySelector('.btnDarkMode')
const displayBody = document.querySelector('.body')
const displayTimer = document.querySelector('.timer')
const displayControls = document.querySelector('.controls')

const displayInputForest = document.querySelector('.inputForest')
const displayInputRain = document.querySelector('.inputRain')
const displayInputCoffee = document.querySelector('.inputCoffee')
const displayInputFire = document.querySelector('.inputFire')

btnDarkMode.addEventListener('click', darkMode)
btnLightMode.addEventListener('click', lightMode)

function darkMode() {
    displayBody.classList.add('bgBlack')

    btnDarkMode.classList.add('hide')
    btnLightMode.classList.remove('hide')
    displayTimer.classList.add('tblack')

    btnPlay.classList.add('cBlack')
    btnStop.classList.add('cBlack')
    btnPlus.classList.add('cBlack')
    btnMinus.classList.add('cBlack')

    displayInputForest.classList.add('iBlack')
    displayInputRain.classList.add('iBlack')
    displayInputCoffee.classList.add('iBlack')
    displayInputFire.classList.add('iBlack')

    btnCardForest.classList.toggle('cardBlack')
    btnCardRain.classList.toggle('cardBlack')
    btnCardCoffee.classList.toggle('cardBlack')
    btnCardFire.classList.toggle('cardBlack')
}

function lightMode() {
    displayBody.classList.remove('bgBlack')
    btnDarkMode.classList.remove('hide')
    btnLightMode.classList.add('hide')
    displayTimer.classList.remove('tblack')
    displayControls.classList.remove('cBlack')

    displayInputForest.classList.remove('iBlack')
    displayInputRain.classList.remove('iBlack')
    displayInputCoffee.classList.remove('iBlack')
    displayInputFire.classList.remove('iBlack')

    btnCardForest.classList.remove('cardBlack')
    btnCardRain.classList.remove('cardBlack')
    btnCardCoffee.classList.remove('cardBlack')
    btnCardFire.classList.remove('cardBlack')

    btnPlay.classList.remove('cBlack')
    btnStop.classList.remove('cBlack')
    btnPlus.classList.remove('cBlack')
    btnMinus.classList.remove('cBlack')

}

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
    if(btnDarkMode.className == 'btnLightMode hide') {
        btnPlay.classList.add('blueButton')
        btnPlay.classList.remove('cBlack')
        btnPlus.classList.add('cBlack')
        btnMinus.classList.add('cBlack')
        btnStop.classList.add('cBlack')
    }

    btnPlay.classList.add('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlus.classList.remove('blueButton')
    btnMinus.classList.remove('blueButton')
    btnPlay.setAttribute('disabled', 'disabled')

    countdown()
}

function buttonStop() {
    if(btnDarkMode.className == 'btnLightMode hide') {
        btnCardForest.classList.add('cardBlack')
        btnCardRain.classList.add('cardBlack')
        btnCardCoffee.classList.add('cardBlack')
        btnCardFire.classList.add('cardBlack')

        btnStop.classList.add('blueButton')
        btnStop.classList.remove('cBlack')
        btnPlus.classList.add('cBlack')
        btnMinus.classList.add('cBlack')
        btnPlay.classList.add('cBlack')

    }

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

    displayInputForest.classList.remove('blue2')
    displayInputFire.classList.remove('blue2')
    displayInputRain.classList.remove('blue2')
    displayInputCoffee.classList.remove('blue2')
}

function buttonPlus() {
    if(btnDarkMode.className == 'btnLightMode hide') {
        btnPlus.classList.add('blueButton')
        btnPlus.classList.remove('cBlack')
        btnPlay.classList.add('cBlack')
        btnMinus.classList.add('cBlack')
        btnStop.classList.add('cBlack')
    }

    btnPlus.classList.add('blueButton')
    btnMinus.classList.remove('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlay.classList.remove('blueButton')

    plus()
}

function buttonMinus() {
    if(btnDarkMode.className == 'btnLightMode hide') {
        btnMinus.classList.add('blueButton')
        btnMinus.classList.remove('cBlack')
        btnPlus.classList.add('cBlack')
        btnPlay.classList.add('cBlack')
        btnStop.classList.add('cBlack')
    }

    btnMinus.classList.add('blueButton')
    btnPlus.classList.remove('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlay.classList.remove('blueButton')
    
    minus()
}

function forest() {
    if(btnDarkMode.className == 'btnLightMode hide') {
        btnCardForest.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        btnCardForest.classList.remove('cardBlack')
        btnCardRain.classList.add('cardBlack')
        btnCardCoffee.classList.add('cardBlack')
        btnCardFire.classList.add('cardBlack')

        displayInputForest.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')

    } else {
        btnCardForest.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        displayInputForest.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')
    }

    forestSound.play()
    rainSound.pause()
    coffeeSound.pause()
    fireSound.pause()
}

function rain() {
    if(btnDarkMode.className == 'btnLightMode hide') {
        btnCardRain.classList.add('blue2')
        btnCardForest.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        btnCardRain.classList.remove('cardBlack')
        btnCardForest.classList.add('cardBlack')
        btnCardCoffee.classList.add('cardBlack')
        btnCardFire.classList.add('cardBlack')

        displayInputRain.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputForest.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')

    } else {
        btnCardRain.classList.add('blue2')
        btnCardForest.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        displayInputRain.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputForest.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')
    }

    rainSound.play()
    coffeeSound.pause()
    forestSound.pause()
    fireSound.pause()
}

function coffee() {
    if(btnDarkMode.className == 'btnLightMode hide') {
        btnCardCoffee.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardForest.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        btnCardCoffee.classList.remove('cardBlack')
        btnCardRain.classList.add('cardBlack')
        btnCardForest.classList.add('cardBlack')
        btnCardFire.classList.add('cardBlack')

        displayInputCoffee.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputForest.classList.remove('blue2')

    } else {
        btnCardCoffee.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardForest.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')

        displayInputCoffee.classList.add('blue2')
        displayInputFire.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputForest.classList.remove('blue2')
    }

    coffeeSound.play()
    rainSound.pause()
    forestSound.pause()
    fireSound.pause()
}

function fire() {
    if(btnDarkMode.className == 'btnLightMode hide') {
        btnCardFire.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardForest.classList.remove('blue2')

        btnCardFire.classList.remove('cardBlack')
        btnCardRain.classList.add('cardBlack')
        btnCardCoffee.classList.add('cardBlack')
        btnCardForest.classList.add('cardBlack')

        displayInputFire.classList.add('blue2')
        displayInputForest.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')

    } else {
        btnCardFire.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardForest.classList.remove('blue2')

        displayInputFire.classList.add('blue2')
        displayInputForest.classList.remove('blue2')
        displayInputRain.classList.remove('blue2')
        displayInputCoffee.classList.remove('blue2')
    }

    fireSound.play()
    rainSound.pause()
    coffeeSound.pause()
    forestSound.pause()
}