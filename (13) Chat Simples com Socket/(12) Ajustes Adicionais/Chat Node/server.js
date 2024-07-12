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

      socket.broadcast.emit('list-update', { // Envia pra todos, menos quem entrou
         joined: userName, // Informa quem entrou
         list: connectedUsers // Lista com os usuários
      }) 
   })  
   
   socket.on('disconnect', () => {
      connectedUsers = connectedUsers.filter(u => u != socket.userName) // Retorna os valores diferentes do 'userName'. Em outras falavas vai passar a ideia de remoção desse userName
      console.log(connectedUsers)

      socket.broadcast.emit('list-update', { // Envia pra todos, menos quem entrou
         left: socket.userName, // Informa quem entrou
         list: connectedUsers // Lista com os usuários
      })
   })

   socket.on('send-msg', (txt) => {
      let obj = {
         username: socket.userName,
         message: txt
      }

      // Comentando essa linha a mensagem enviada fica como local e o servidor nao precisa executar 2 funções, apenas ser engarregado do envio para oustros usuarios. Nesse Listener no caso.
      // socket.emit('show-msg', obj) // Manda a mensagem para o cliente

      socket.broadcast.emit('show-msg', obj) // Envia a mensagem para todos
   })

})