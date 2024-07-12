import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
   res.render('home')
})

router.get('/contato', (req: Request, res: Response) => {
   res.send('Formulário de Contato')
})

router.get('/sobre', (req: Request, res: Response) => {
   res.send('Página Institucional sobre a Empresa')
})

router.get('/noticias', (req: Request, res: Response) => {
   res.send('Lista de noticias')
})

export default router