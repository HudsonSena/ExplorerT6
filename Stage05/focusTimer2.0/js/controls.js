export default function Controls(
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardCoffee, btnCardFire, btnCardForest, btnCardRain
) {
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

    function playTimer() {
        btnPlay.classList.add('blueButton')
        btnStop.classList.remove('blueButton')
        btnPlus.classList.remove('blueButton')
        btnMinus.classList.remove('blueButton')
    
        btnPlay.setAttribute('disabled', 'disabled')
    }

    function stopTimer() {
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

    return{
        plus,
        minus,
        playTimer,
        stopTimer
    }
}

