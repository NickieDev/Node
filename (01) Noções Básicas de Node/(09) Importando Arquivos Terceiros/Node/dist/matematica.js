"use strict";
/* export let versao: string = '1.0.0'

export function somar(x: number, y:number): number {
   return x + y
}

export function subtrair(x: number, y:number): number {
   return x - y
}

export function multiplicar(x: number, y:number): number {
   return x * y
} */
Object.defineProperty(exports, "__esModule", { value: true });
let versao = '1.0.0';
function somar(x, y) {
    return x + y;
}
function subtrair(x, y) {
    return x - y;
}
function multiplicar(x, y) {
    return x * y;
}
exports.default = {
    somar,
    subtrair,
    multiplicar,
    versao
};
