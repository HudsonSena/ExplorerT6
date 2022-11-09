//function operations(num01, num02) {}

//alert(`a soma é ${soma}, a subtração é ${sub}, a multiplicação é ${mult} e a divisão é ${divi}`)

let num01 = Number(prompt("Digite o primeiro número: "))
let num02 = Number(prompt("Digite o segundo número: "))

let soma = num01 + num02
let sub = num01 - num02
let mult = num01 * num02
let divi = num01 / num02
let rest = num01 % num02

alert(`A soma entre ${num01} e ${num02}, é: ${soma}`)
alert(`A subtração entre ${num01} e ${num02}, é: ${sub}`)
alert(`A multipliação entre ${num01} e ${num02}, é: ${mult}`)
alert(`A divisão entre ${num01} e ${num02}, é: ${divi}`)
alert(`O resto da divisão entre ${num01} e ${num02}, é: ${rest}`)

if(soma % 2 == 0) {
    alert("Soma entre os números inseridos é par")
} else {
    alert("Soma entre os números inseridos é impar")
}
if(num01 == num02) {
    alert("Os números inserido são iguais")
} else {
    alert("Os números inserido são diferentes")
}