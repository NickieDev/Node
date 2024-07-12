import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
   res.send('Hello World')
})

router.get('/contato', (req: Request, res: Response) => {
   res.send('Formulário de Contato')
})

router.get('/sobre', (req: Request, res: Response) => {
   res.send('Páfina Institucional sobre a Empresa')
})

export default router