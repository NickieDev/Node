import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
   // let user: string = 'Kaido'
   let user = {
      name: 'Kaido',
      age: 60
   }

   let idade: number = 60

   res.render('home', {
      // user: 'Kaido'
      // user
      name: 'Edward',
      lastName: 'NewGate',
      // Para ser acessado as variaveis devem estar dentro do render
   }) // Nome do View, OBJ com as Infos
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