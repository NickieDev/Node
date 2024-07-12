// (15) Separando as Rotas no seu Lugar
import express from 'express'
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'

const server = express()

server.use(mainRoutes) // Pega as rotas
server.use('/painel', painelRoutes) // Prefixo da rota + rota em si

server.listen(80) // Porta padrão para uma pagina, com isso não precisa colocar o numero da porta