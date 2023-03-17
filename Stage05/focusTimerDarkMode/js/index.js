import {
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardForest, btnCardRain, btnCardCoffee, btnCardFire,
    btnDarkMode, btnLightMode,
    inputForest, inputRain, inputCoffee, inputFire,
    displayMinutes, displaySeconds,
    displayBody, displayTimer, displayControls,
    displayInputForest, displayInputRain, displayInputCoffee, displayInputFire
} from "./elements.js"

import Sound from "./sounds.js"
const sound = Sound()

import Controls from "./controls.js"
const controls = Controls({
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardForest, btnCardRain, btnCardCoffee, btnCardFire,
    btnDarkMode, btnLightMode,
    displayBody, displayControls, displayTimer,
    displayInputForest, displayInputRain, displayInputCoffee, displayInputFire
})

import Timer from "./timer.js"
const timer = Timer({
    displayMinutes, displaySeconds
})

inputForest.addEventListener('input', function(){
    sound.forestSound.volume = inputForest.value
})

inputRain.addEventListener('input', function(){
    sound.rainSound.volume = inputRain.value
})

inputCoffee.addEventListener('input', function(){
    sound.coffeeSound.volume = inputCoffee.value
})

inputFire.addEventListener('input', function(){
    sound.fireSound.volume = inputFire.value
})

btnPlay.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    controls.play()
    timer.countdown()
})

btnStop.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    controls.stop()
    timer.reset()
    sound.stop()    
})

btnPlus.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    controls.plus()
    timer.plus()
})

btnMinus.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    controls.minus()
    timer.minus()
})

btnCardForest.addEventListener('click', function(){
    controls.cardForest()
    sound.forest()
})

btnCardRain.addEventListener('click', function(){
    controls.cardRain() 
    sound.rain()
})

btnCardCoffee.addEventListener('click', function(){
    controls.cardCoffee()
    sound.coffee()
})

btnCardFire.addEventListener('click', function(){
    controls.cardFire()
    sound.fire()
})

btnDarkMode.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    controls.darkMode()    
})

btnLightMode.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    controls.lightMode()    
})
