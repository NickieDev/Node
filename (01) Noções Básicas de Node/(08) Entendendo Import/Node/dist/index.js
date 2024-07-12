"use strict";
// (08) Entendendo Import/Export em ES6
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const matematica_1 = __importDefault(require("./matematica"));
let n1 = 10;
let n2 = 2;
console.log(`Soma: ${matematica_1.default.somar(n1, n2)}`);
console.log(`Subtração: ${matematica_1.default.subtrair(n1, n2)}`);
