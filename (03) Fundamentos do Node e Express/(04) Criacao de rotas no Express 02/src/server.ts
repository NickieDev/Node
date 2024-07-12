import express from 'express'
import helmet from 'helmet'
import path from 'path'

const server = express()

server.use(helmet())

server.use(express.json())

server.use(express.urlencoded({ extended: true })) 

server.use(express.static(path.join(__dirname, '../public')))

server.get('/ping', (req, res) => {
   res.json({ message: 'pong' })
})

server.get('/produtos', (req, res) => {
   res.json({ products: [] })
})

server.get('/produtos/:id', (req, res) => {
   const { id } = req.params

   console.log(req.params)

   res.json({ name: 'Teclado', price: '90' }  ) 
})

server.get('/voos/:from/:to', (req, res) => {
   // res.json({ flight: { from: 'X', to: 'Y', price: 1000 } })
   const { from, to } = req.params

   res.json({ 
      flight: { 
         from: from.toLocaleUpperCase(), 
         to: to.toLocaleUpperCase(), 
         price: 1000 
      } 
   })
})

server.get('/', async(req, res) => {
   let name = 'Nick'
   let age = 20

   res.json({ name, age })
})

server.listen(3001, () => {
   console.log('Servidor iniciado') 
})