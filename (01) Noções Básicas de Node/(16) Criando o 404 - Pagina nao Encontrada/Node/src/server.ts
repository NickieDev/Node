// (16) Criando o 404 - Pagina nao Encontrada
import express, { Request, Response } from 'express'
import mainRoutes from './routes/index'

const server = express()

server.use(mainRoutes) // Pega as rotas

server.use((req: Request, res: Response) => { // Caso não encontrar a rota, o servidor manda essa mensagem
   res.status(404).send('Página não encontrada!')
})

server.listen(80) // Porta padrão para uma pagina, com isso não precisa colocar o numero da porta