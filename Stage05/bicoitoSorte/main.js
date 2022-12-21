const buttonBiscoitofechado = document.querySelector('.bFechado')
const buttonAbrirOutroBiscoito = document.querySelector('.btnAbrirOutroBiscoito')
const biscoitoFechado = document.querySelector('.biscoitoFechado')
const biscoitoAberto = document.querySelector('.biscoitoAberto')

const displayTransMessage = document.querySelector('.message')
const displayMessage = document.querySelector('.textmessage')

const messages = [
    'Seu dia vai ser incrível!',
    'Aposta na mega sena...', 
    'Sempre haverá um novo dia.', 
    'Continue a nadar', 
    'Dia super normal né, mas amanhã vai ser show!', 
    'Dia qualquer, mas eu posso mudalo', 
    'Você é uma pessoa incrível, mas não seja besta.', 
    'Hoje ta complicado, mas amanhã é um novo dia',
    'Poxa vida, você é foda pra caralho!',
    'Que vida difícil em? Tenho que mudar minhas atitudes.',
    'Hoje ta chato, vamos pular este dia']    

buttonBiscoitofechado.addEventListener('click', biscoitoDaSorte)
window.addEventListener('keypress', biscoitoDaSorte)
buttonAbrirOutroBiscoito.addEventListener('click', abrirOutroBiscoito)

let message = 'Jaboti'
let codicao = 1

function biscoitoDaSorte() {
    if(codicao == 2) {
        alert('Abra outro biscoito!')
        abrirOutroBiscoito()
        codicao = 1
    } else {
        biscoitoFechado.classList.add('hide')
        biscoitoAberto.classList.remove('hide')
        displayTransMessage.classList.add('transitionMessage')

        message = messages[(Math.round(Math.random() * 10))]

        displayMessage.textContent = String(message)

        codicao = 2
    }
}

function abrirOutroBiscoito() {
    biscoitoFechado.classList.remove('hide')
    biscoitoAberto.classList.add('hide')
    codicao = 1
}