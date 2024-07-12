import express from 'express'

const server = express()

server.get('/:from/:to', (req, res) => {
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

export default server