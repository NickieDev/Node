import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from '../src/routes/api'
import cors from 'cors'

dotenv.config();

const server = express();

server.use(cors()) // Libera qualquer site que acessar a API

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes)
//server.use('/api', apiRoutes) // Assim a rota terá o prefixo /api + a rota; Ex: localhost:4000/api/ROUTE

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);