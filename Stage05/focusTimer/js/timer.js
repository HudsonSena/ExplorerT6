export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  reset
}) {
  function updateTimerDisplay(minutes, seconds) {
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateTimerDisplay(minutes, 0)

      if (minutes <= 0) {
        reset()
        return
      }

      if( seconds <= 0 ) {
        seconds = 12
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))
      
      countdown()    
    }, 1000)
  }

  return {
    countdown,
    resetTimer
  }
}
