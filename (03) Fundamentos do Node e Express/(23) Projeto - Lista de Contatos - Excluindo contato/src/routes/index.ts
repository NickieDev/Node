import express from 'express'
import { readFile, writeFile } from 'fs/promises'

const dataSource = './data/list.txt'

const router = express.Router()

router.post('/contato', async(req, res) => {
   const { name } = req.body

   if(!name || name.length < 2) {
      return res.json({ error: 'Nome precisa ter pelo menos 2 caracteres' })
   }

   let list: string[]  = []

   try {
      const data = await readFile(dataSource, { encoding: 'utf8' })

      list = data.split('\n')
   } catch(err) {}

   list.push(name)

   await writeFile(dataSource, list.join('\n'))

   res.status(200).json({ contato: name })
})

router.get('/contatos', async(req, res) => {
   let list: string[]  = []

   try {
      const data = await readFile(dataSource, { encoding: 'utf8' })

      list = data.split('\n')
   } catch(err) {}

   res.json({ contatos: list })
})

router.delete('/contato', async(req, res) => {
   const { name } = req.query
   let list: string[]  = []

   if(!name) return res.json({ error: 'Precisa mandar um nome para excluir' })

   try {
      const data = await readFile(dataSource, { encoding: 'utf8' })

      list = data.split('\n')
   } catch(err) {}

   list = list.filter(item => item.toLowerCase() !== (name as string).toLowerCase())


   await writeFile(dataSource, list.join('\n'))

   res.json({ contato: name })
})

export default router