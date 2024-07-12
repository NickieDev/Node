const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

server.listen(3000, () => console.log('Running in Port 3000'))

app.use(express.static(path.join(__dirname, 'public')))

let connectedUsers = []

io.on('connection', (socket) => { // Quando houver conexao 
   console.log('Conexão detectada...')

   socket.on('join-request', (userName) => { // Quando receber uma mensagem desse tipo. É um listener
      socket.userName = userName
      connectedUsers.push( userName )
      console.log( connectedUsers )

      socket.emit('user-ok', connectedUsers) // Envia pro usuário
   })   

})