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

let versao: string = '1.0.0'

function somar(x: number, y:number): number {
   return x + y
}

function subtrair(x: number, y:number): number {
   return x - y
}

function multiplicar(x: number, y:number): number {
   return x * y
}

export default {
   somar,
   subtrair,
   multiplicar,
   versao
}
