// (32) Variaveis de Ambiente
import express, { Request, Response } from 'express'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
import mainRoutes from './routes/index'

dotenv.config()

const server = express()

// Template Engine: Seria como usar 'componentes' do React, podendo mesclar códigos com HTML 
server.set('view engine', 'mustache' )
server.set('views', path.join(__dirname, 'views')) // Pasta do HTML
server.engine('mustache', mustache())

// console.log( path.join(__dirname, '../public') ) // Diretorio raiz do projeto

// server.use(express.static('public')) // Torna a pasta estatica // http://localhost/css/style.css

// server.use('/static', express.static('public')) // http://localhost/static/css/style.css

server.use(express.static( path.join(__dirname, '../public') ))

server.use(express.urlencoded({ extended: true })) // Faz com que os dados estajam acessiveis dentro da rota, via post

server.use(mainRoutes) // Pega as rotas

server.use((req: Request, res: Response) => { // Caso não encontrar a rota, o servidor manda essa mensagem
   res.status(404).send('Página não encontrada!')
})

//server.listen(80) // Porta padrão para uma pagina, com isso não precisa colocar o numero da porta
server.listen(process.env.PORT)