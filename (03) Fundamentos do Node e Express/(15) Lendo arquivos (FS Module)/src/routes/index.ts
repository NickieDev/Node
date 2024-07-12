import express, { RequestHandler } from "express"
import produtosRouter from './produtos'
import voosRouter from './voos'
import { inteferir } from "../middlewares/intervir"

const router = express.Router()

router.use('/produtos', produtosRouter)

router.use('/voos', voosRouter)

// router.use(inteferir) // Assim todas as requisições iram passar pelo Middleware

router.get('/ping', (req, res) => {
   console.log('PING')
   res.json({ message: 'pong' })
})

router.get('/', async(req, res) => {
   let name = 'Nick'
   let age = 20

   res.json({ name, age })
})

export default router