const socket = io() 
let userName = ''
let userList = []

let loginPage = document.querySelector('#loginPage')
let chatPage = document.querySelector('#chatPage')

let loginInput = document.querySelector('#loginNameInput')
let textInput = document.querySelector('#chatTextInput')

loginPage.style.display = 'flex'
chatPage.style.display = 'none'

function renderUserList() {
   let ul = document.querySelector('.userList')
   ul.innerHTML = ''
   
   userList.forEach(i => {
      ul.innerHTML += '<li>' + i + '</li>'
   })
}

function addMessage(type, user, msg) {
   let ul = document.querySelector('.chatList')

   switch(type) {
      case 'status':
         ul.innerHTML += '<li class="m-status">' + msg + '</li>'
         break
      case 'msg':
         if(userName == user) {
            ul.innerHTML += '<li class="m-txt"><span class="me">' + user + '</span> ' + msg + '</li>'
         } else {
            ul.innerHTML += '<li class="m-txt"><span>' + user + '</span> ' + msg + '</li>'
         }
         break
   }

   ul.scrollTop = ul.scrollHeight // Vai pro final
}

loginInput.addEventListener('keyup', (e) => {
   if(e.keyCode === 13) { // Enter
      let name = loginInput.value.trim()

      if(name != '') {
         userName = name
         document.title = `Chat (${name})`

         socket.emit('join-request', userName) // Emite uma mensagem pro servidor. É um Listener
      }
   }
})

textInput.addEventListener('keyup', (e) => {
   
   if(e.keyCode === 13) {
      let txt = textInput.value.trim()
      textInput.value = ''

      if(txt != '') {
         addMessage('msg', userName, txt) // Aqui a mensagem seria uma mensagem local
         socket.emit('send-msg', txt) // Manda a mensagem para o servidor
      }
   }
})


socket.on('user-ok', (list) => { // Recebe do servidor
   loginPage.style.display = 'none'
   chatPage.style.display = 'flex'
   textInput.focus()

   addMessage('status', null, 'Conectado!')

   userList = list // Preenche a lista com os usuários
   renderUserList()
})

socket.on('list-update', (data) =>{
   if(data.joined) {
      addMessage('status', null, data.joined + ' entrou no chat.')
   }

   if(data.left) {
      addMessage('status', null, data.left + ' saiu do chat.')
   }

   userList = data.list // Recebe a nova lista

   renderUserList()
})

socket.on('show-msg', (data) => {
   addMessage('msg', data.username, data.message)
})

socket.on('disconnect', () => { // Quando o servidor cair ou parar
   addMessage('status', null, 'Você foi desconectado')

   userList = []
   renderUserList()
})

// Na versao do Socket 4.18.2 usado no projeto, é preciso colocar .io antes do .on
socket.io.on('reconnect_error', () => { // Quando tenta se reconectar 
   addMessage('status', null, 'Tentando reconectar ...')
})

socket.io.on('reconnect', () => { // Quando conseguir se reconectar
   addMessage('status', null, 'Reconectado')

   if(userName != '') {
      socket.emit('join-request', userName)
   }
})
