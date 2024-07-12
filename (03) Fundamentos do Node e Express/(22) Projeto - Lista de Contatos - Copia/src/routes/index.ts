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

export default router