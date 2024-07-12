// (07) Entendendo import/export em CommonJS

const Matematica = require('./matematica')

let n1: number = 10
let n2: number = 2 

console.log(`Soma: ${Matematica.somar(n1, n2)}`)
console.log(`Subtração: ${Matematica.subtrair(n1, n2)}`)
console.log(`Multiplicação: ${Matematica.multiplicar(n1, n2)}`)