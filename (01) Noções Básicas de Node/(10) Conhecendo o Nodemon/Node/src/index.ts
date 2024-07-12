// (10) Conhecendo o Nodemon

import validador from 'validator'

let name: string = 'Shanks'
if(validador.isLowercase(name)) {
   console.log(`A string ${name} é toda minúscula`)
} else {
   console.log(`A string ${name} não é toda minúscula`)
}
