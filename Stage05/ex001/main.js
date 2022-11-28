//import {double, today} from './utils.js'
//console.log(double(3.5))
//console.log(today)

//import message from './utils.js'
//console.log(message)

//import funcaoPadrao, {date, greeting} from './utils.js'
//funcaoPadrao('Diego')

//import {sum as soma} from './utils.js'
//console.log(soma(18, 2))

import * as calculator from './utils.js'
console.log(calculator.subtract(49, 4))
console.log(calculator.sum(49, 4))
console.log(calculator.multiply(49, 4))
console.log(calculator.divide(49, 4))

// pode retornar funções
// apenas um 'defaut' por arquivo
// para exporta mais de um objeto: {nome do objeto(const, let, var) igual esta no arquivo fonte}
