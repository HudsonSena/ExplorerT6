// Variáveis - Variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {
    
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Com altura de ${height}cm e Peso de ${weight}kg, Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

Modal.btnClose.onclick = () => {
    Modal.close()
    inputHeight.value = inputWeight.value = ''
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}