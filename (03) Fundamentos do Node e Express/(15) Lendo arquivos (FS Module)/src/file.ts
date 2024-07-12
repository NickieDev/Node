import { writeFile, readFile } from 'fs/promises'

const exec = async() => {
   const list = ['Kaido', 'Shanks', 'BigMon']
   const listTxt = list.join('\n')

   console.log('Escrevendo')

   // await writeFile('./test.txt', 'Test 1 2 3')
   await writeFile('./test.txt', listTxt)

   console.log('Pronto')

   const fileContent = await readFile('./test.txt', { encoding: 'utf8' })
   // console.log(fileContent.toString()):
   const listText = fileContent.split('\n')
   console.log(listText)
}

exec()