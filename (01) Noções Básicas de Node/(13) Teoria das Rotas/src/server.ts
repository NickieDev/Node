// (13) Teoria das Rotas
import express, { Request, Response } from 'express'

const server = express()

server.get('/', (req: Request, res: Response) => {
   res.send('Hello World')
}) // localhost

server.get('/contato', (req: Request, res: Response) => {
   res.send('Página de Contato')
}) // localhost/contato
 
server.listen(80) // Porta padrão para uma pagina, com isso não precisa colocar o numero da porta