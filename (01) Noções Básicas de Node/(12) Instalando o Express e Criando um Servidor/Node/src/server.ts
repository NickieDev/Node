// (12) Instalando o Express e Criando um Servidor
import express, { Request, Response } from 'express'

const server = express()

server.get('/', (req: Request, res: Response) => {
   res.send('Hello World')
})

server.listen(80)