// (17) Pasta Pública e Arquivos Estáticos
import express, { Request, Response } from 'express'
import path from 'path'
import mainRoutes from './routes/index'

const server = express()

// console.log( path.join(__dirname, '../public') ) // Diretorio raiz do projeto

// server.use(express.static('public')) // Torna a pasta estatica // http://localhost/css/style.css

// server.use('/static', express.static('public')) // http://localhost/static/css/style.css

server.use(express.static( path.join(__dirname, '../public') ))

server.use(mainRoutes) // Pega as rotas

server.use((req: Request, res: Response) => { // Caso não encontrar a rota, o servidor manda essa mensagem
   res.status(404).send('Página não encontrada!')
})

server.listen(80) // Porta padrão para uma pagina, com isso não precisa colocar o numero da porta