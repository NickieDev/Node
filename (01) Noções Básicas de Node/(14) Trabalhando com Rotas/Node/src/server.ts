// (14) Trabalhando com Rotas
import express, { Request, Response } from 'express'

const server = express()

server.get('/', (req: Request, res: Response) => {
   res.send('Hello World')
}) // localhost

server.get('/noticia/:slug', (req: Request, res: Response) => {
   let slug = req.params.slug
   res.send(`Noticia: ${slug}`)
})

server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
   /* let origem = req.params.origem
   let destino = req.params.destino */
   let { origem, destino } = req.params

   res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})

server.listen(80) // Porta padrão para uma pagina, com isso não precisa colocar o numero da porta