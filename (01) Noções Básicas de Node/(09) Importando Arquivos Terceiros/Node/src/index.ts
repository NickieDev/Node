// (09) Importando arquivos terceiros

import validador from 'validator'

console.log(validador.isEmail('op@gmail.com'))

let ip = '127.0.0.1'
console.log(validador.isIP(ip))

console.log(validador.isLowercase('SHANKS'))


