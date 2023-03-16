export default function Controls({
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardCoffee, btnCardFire, btnCardForest, btnCardRain
}) {
    function plus() {
        btnPlus.classList.add('blueButton')
        btnMinus.classList.remove('blueButton')
        btnStop.classList.remove('blueButton')
        btnPlay.classList.remove('blueButton')        
    }
    
    function minus() {
        btnMinus.classList.add('blueButton')
        btnPlus.classList.remove('blueButton')
        btnStop.classList.remove('blueButton')
        btnPlay.classList.remove('blueButton')
    }

    function play() {
        btnPlay.classList.add('blueButton')
        btnStop.classList.remove('blueButton')
        btnPlus.classList.remove('blueButton')
        btnMinus.classList.remove('blueButton')
    
        btnPlay.setAttribute('disabled', 'disabled')
    }

    function stop() {
        btnStop.classList.add('blueButton')
        btnPlay.classList.remove('blueButton')
        btnPlus.classList.remove('blueButton')
        btnMinus.classList.remove('blueButton')

        btnPlay.removeAttribute('disabled', 'disabled')

        btnCardForest.classList.remove('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')
    }

    function forest() {
        btnCardForest.classList.add('blue2')
        btnCardRain.classList.remove('blue2')
        btnCardCoffee.classList.remove('blue2')
        btnCardFire.classList.remove('blue2')
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

    return{
        plus,
        minus,
        play,
        stop,
        forest,
        rain,
        coffee,
        fire
    }
}

