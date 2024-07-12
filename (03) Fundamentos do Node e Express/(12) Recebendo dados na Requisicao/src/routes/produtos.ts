import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
   res.json({ products: [] })
})

router.post('/', (req, res) => {
   console.log('PARAMS: ', req.params)
   console.log('QUERY: ', req.query)
   console.log('BODY: ', req.body)
   
   res.json({ products: [] })
})

router.get('/:id', (req, res) => {
   const { id } = req.params

   console.log(req.params)

   res.json({ name: 'Teclado', price: '90' }  ) 
})

export default router