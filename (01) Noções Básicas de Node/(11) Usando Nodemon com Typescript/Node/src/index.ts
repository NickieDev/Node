// (11) Usando Nodemon com Typescript
// npm install -g ts-node = 'Nodemon' para TS
// Para rodar basta digitar ts-node src/index.ts(Arquivo para ser Monitorado) só que le apenas 1 vez.
// Para que rode como o nodemon basta digitar 'nodemon src/index.ts(Arquivo para ser Monitorado)' 
   // A versão do nodemon já identifica se o 'ts-node' está instalado para monitorar os arquivos TS
// npm run start-dev = Roda o comando configurado no package.json

import validador from 'validator'

let name: string = 'shanks'
if(validador.isLowercase(name)) {
   console.log(`A string ${name} é toda minúscula`)
} else {
   console.log(`A string ${name} não é toda minúscula`)
}
