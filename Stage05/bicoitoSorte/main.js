const buttonBiscoitofechado = document.querySelector('.bFechado')
const buttonAbrirOutroBiscoito = document.querySelector('.btnAbrirOutroBiscoito')
const biscoitoFechado = document.querySelector('.biscoitoFechado')
const biscoitoAberto = document.querySelector('.biscoitoAberto')

const displayTransMessage = document.querySelector('.message')
const displayMessage = document.querySelector('.textmessage')

const messages = [
    'Seu dia vai ser incrível',
    'dia chato', 
    'dia bom', 
    'dia ruim', 
    'dia comum', 
    'dia qualquer', 
    'sorte grande', 
    'sem sorte',
    'poxa vida',
    'porra',
    'chatopra caralho']    

buttonBiscoitofechado.addEventListener('click', biscoitoDaSorte)
window.addEventListener('keypress', biscoitoDaSorte)

buttonAbrirOutroBiscoito.addEventListener('click', abrirOutroBiscoito)
window.addEventListener('keydown', abrirOutroBiscoito)

let message = 'Jaboti'
let codicao = 1

function messageSorteio() {
    message = messages[(Math.round(Math.random() * 10))]
}

function biscoitoDaSorte() {
    if(codicao == 2) {
        alert('Abra outro biscoito!')
        codicao = 1
    } else {
        biscoitoFechado.classList.add('hide')
        biscoitoAberto.classList.remove('hide')
        displayTransMessage.classList.add('transitionMessage')

        messageSorteio()

        displayMessage.textContent = String(message)
        
        codicao = 2
    }

    
}

function abrirOutroBiscoito() {
    biscoitoFechado.classList.remove('hide')
    biscoitoAberto.classList.add('hide')
}