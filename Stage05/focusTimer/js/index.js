//default import
import Controls from "./controls.js"

//named import
import Timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    reset,
})

buttonPlay.addEventListener('click', function() {
    controls.play()    
    timer.countdown()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.resetTimer()
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', function() {
    let newMinutes = prompt('Quantos minutos?')
    if(!newMinutes) {
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})
