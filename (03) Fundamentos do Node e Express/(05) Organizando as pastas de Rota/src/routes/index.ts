import express from "express"

const router = express.Router()

router.get('/ping', (req, res) => {
   res.json({ message: 'pong' })
})

router.get('/', async(req, res) => {
   let name = 'Nick'
   let age = 20

   res.json({ name, age })
})

export default router