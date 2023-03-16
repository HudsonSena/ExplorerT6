import {
    btnCardCoffee, btnCardFire, btnCardForest, btnCardRain,
    btnPlay, btnStop, btnPlus, btnMinus
} from "./elements.js"
export default function({
    controls, sound, timer
}) {
    btnPlay.addEventListener('click', function(){
        controls.play()
        sound.buttonPressAudio.play()
        timer.countdown()
    })
    
    btnStop.addEventListener('click', function(){
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
        controls.forest()
        sound.forest()
    })
    
    btnCardRain.addEventListener('click', function(){
        controls.rain()
        sound.rain()
    })
    
    btnCardCoffee.addEventListener('click', function(){
        controls.coffee()
        sound.coffee()
    })
    
    btnCardFire.addEventListener('click', function(){
        controls.fire()
        sound.fire()    
    })
}

