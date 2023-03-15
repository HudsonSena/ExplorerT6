import {
    btnPlay, btnStop, btnPlus, btnMinus, btnCardForest, btnCardRain, btnCardCoffee, btnCardFire, displayMinutes, displaySeconds
} from "./elements.js"

import Sound from "./sounds.js"
const sound = Sound()

btnPlay.addEventListener('click', function(){
    btnPlay.classList.add('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlus.classList.remove('blueButton')
    btnMinus.classList.remove('blueButton')

    btnPlay.setAttribute('disabled', 'disabled')

    sound.buttonPressAudio.play()

    countdown()
})

btnStop.addEventListener('click', function(){
    btnStop.classList.add('blueButton')
    btnPlay.classList.remove('blueButton')
    btnPlus.classList.remove('blueButton')
    btnMinus.classList.remove('blueButton')

    btnPlay.removeAttribute('disabled', 'disabled')

    sound.buttonPressAudio.play()

    resetTimer()

    sound.forestSound.pause()
    sound.rainSound.pause()
    sound.coffeeSound.pause()
    sound.fireSound.pause()

    btnCardForest.classList.remove('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')
})

btnPlus.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    btnPlus.classList.add('blueButton')
    btnMinus.classList.remove('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlay.classList.remove('blueButton')

    plus()
})

btnMinus.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    btnMinus.classList.add('blueButton')
    btnPlus.classList.remove('blueButton')
    btnStop.classList.remove('blueButton')
    btnPlay.classList.remove('blueButton')
    
    minus()
})

btnCardForest.addEventListener('click', function(){
    btnCardForest.classList.add('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')

    sound.forestSound.play()
    sound.rainSound.pause()
    sound.coffeeSound.pause()
    sound.fireSound.pause()
})

btnCardRain.addEventListener('click', function(){
    btnCardRain.classList.add('blue2')
    btnCardCoffee.classList.remove('blue2')
    btnCardFire.classList.remove('blue2')
    btnCardForest.classList.remove('blue2')

    sound.rainSound.play()
    sound.forestSound.pause()
    sound.coffeeSound.pause()
    sound.fireSound.pause()
})

btnCardCoffee.addEventListener('click', function(){
    btnCardCoffee.classList.add('blue2')
    btnCardFire.classList.remove('blue2')
    btnCardForest.classList.remove('blue2')
    btnCardRain.classList.remove('blue2')

    sound.coffeeSound.play()
    sound.forestSound.pause()
    sound.rainSound.pause()
    sound.fireSound.pause()
})

btnCardFire.addEventListener('click', function(){
    btnCardFire.classList.add('blue2')
    btnCardForest.classList.remove('blue2')
    btnCardRain.classList.remove('blue2')
    btnCardCoffee.classList.remove('blue2')

    sound.fireSound.play()
    sound.forestSound.pause()
    sound.rainSound.pause()
    sound.coffeeSound.pause()
})

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
            sound.kitchenTimer.play()            
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