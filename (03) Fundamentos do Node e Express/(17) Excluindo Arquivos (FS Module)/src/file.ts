import { writeFile, readFile, unlink } from 'fs/promises'

const exec = async() => {
   /*const fileName = './test.txt'
   const list = ['Kaido', 'Shanks', 'BigMon']
   const listTxt = list.join('\n')

   console.log('Escrevendo')

   // await writeFile('./test.txt', 'Test 1 2 3')
   await writeFile(fileName, listTxt)

   console.log('Pronto')

   const fileContent = await readFile(fileName, { encoding: 'utf8' })
   // console.log(fileContent.toString()):
   const listText = fileContent.split('\n')
   listText.push('Kurohige') 

   const listText02 = listText.join('\n')

   await writeFile('./test.txt', listText02)*/

   await unlink ('./test.txt') // Exclui o arquivo direto. Não é mandado pra lixeira
}

exec()