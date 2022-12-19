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
    displayControls.classList.add('cBlack')

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
        
        if(minutes <= 0 && seconds <= 0) {
            alert('Adicione os minutos!')
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

    countdown()
}

function buttonStop() {
    btnStop.classList.add('blueButton')
    btnPlay.classList.remove('blueButton')
    btnPlus.classList.remove('blueButton')
    btnMinus.classList.remove('blueButton')

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