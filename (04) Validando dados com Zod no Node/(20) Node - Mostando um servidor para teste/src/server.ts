import express from 'express'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/ping', (req, res) => {
   res.json({ pong: true })
})

server.listen(3002, () => {
   console.log('Server is running on port 3002')
})