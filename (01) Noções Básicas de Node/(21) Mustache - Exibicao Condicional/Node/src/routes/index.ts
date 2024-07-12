import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
   let age: number = 90
   let showOld: boolean = false
   if(age > 50) {
      showOld = true
   }

   res.render('home', {
      name: 'Edward',
      lastName: 'NewGate',
      age: 90,
      showOld
      // showWelcome: true
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