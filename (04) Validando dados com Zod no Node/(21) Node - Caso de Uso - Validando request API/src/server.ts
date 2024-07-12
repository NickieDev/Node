import express from 'express'
import z from 'zod'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/ping', (req, res) => {
   res.json({ pong: true })
})

server.post('/user', (req, res) => {
   // const { name, email, age } = req.body
   const userSchema = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      age: z.number().min(18).max(120)
   })

   const result = userSchema.safeParse(req.body)

   if (!result.success) {
      return res.status(400).json({ error: 'Dados inválidos'})
   }

   const { name, email, age } = result.data

   // Processando
   console.log('Processando ...')
   console.log(name, email, age)

   res.status(201).json({ result: 'Ok'})
})

server.listen(3002, () => {
   console.log('Server is running on port 3002')
})