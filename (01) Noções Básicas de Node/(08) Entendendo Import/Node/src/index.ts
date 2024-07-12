// (08) Entendendo Import/Export em ES6

/*/ import * as Matematica from './matematica'

let n1: number = 10
let n2: number = 2 

console.log(`Soma: ${Matematica.somar(n1, n2)}`)
console.log(`Subtração: ${Matematica.subtrair(n1, n2)}`)
console.log(`Multiplicação: ${Matematica.multiplicar(n1, n2)}`)*/

/* import { somar, subtrair } from './matematica'

let n1: number = 10
let n2: number = 2 

console.log(`Soma: ${somar(n1, n2)}`)
console.log(`Subtração: ${subtrair(n1, n2)}`) */

import Matematica from './Matematica'

let n1: number = 10
let n2: number = 2 

console.log(`Soma: ${Matematica.somar(n1, n2)}`)
console.log(`Subtração: ${Matematica.subtrair(n1, n2)}`)