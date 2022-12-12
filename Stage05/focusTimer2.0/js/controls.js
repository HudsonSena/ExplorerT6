export default function Controls({
  buttonPlay,
  buttonStop,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire
}) {

  function play() {
    buttonPlay.classList.remove('.play')
    buttonPlay.path.fill = '#02799'

    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}