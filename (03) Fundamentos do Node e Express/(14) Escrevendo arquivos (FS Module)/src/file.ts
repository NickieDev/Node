import { writeFile } from 'fs/promises'

const exec = async() => {
   const list = ['Kaido', 'Shanks', 'BigMon']
   const listTxt = list.join('\n')

   console.log('Escrevendo')

   // await writeFile('./test.txt', 'Test 1 2 3')
   await writeFile('./test.txt', listTxt)

   console.log('Pronto')
}

exec()