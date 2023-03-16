import {
    btnPlay, btnStop, btnPlus, btnMinus, btnCardForest, btnCardRain, btnCardCoffee, btnCardFire, displayMinutes, displaySeconds
} from "./elements.js"

import Sound from "./sounds.js"
const sound = Sound()

import Controls from "./controls.js"
const controls = Controls({
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardCoffee, btnCardFire, btnCardForest, btnCardRain
})

import Timer from "./timer.js"
const timer = Timer({
    displayMinutes,
    displaySeconds
})

btnPlay.addEventListener('click', function(){
    controls.playTimer()
    sound.buttonPressAudio.play()
    timer.countdown()
})

btnStop.addEventListener('click', function(){
    controls.stopTimer()
    sound.buttonPressAudio.play()
    timer.reset()

    sound.forestSound.pause()
    sound.rainSound.pause()
    sound.coffeeSound.pause()
    sound.fireSound.pause()
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