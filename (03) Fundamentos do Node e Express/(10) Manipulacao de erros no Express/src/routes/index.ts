import express from "express"
import produtosRouter from './produtos'
import voosRouter from './voos'

const router = express.Router()

router.use('/produtos', produtosRouter)

router.use('/voos', voosRouter)

router.get('/ping', (req, res) => {
   res.json({ message: 'pong' })
})

router.get('/', async(req, res) => {
   let name = 'Nick'
   let age = 20

   res.json({ name, age })
})

export default router