let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let stop = document.querySelector('.stop')

play.addEventListener('click', function() {
    play.classList.add('hide')
    pause.classList.remove('hide')
})