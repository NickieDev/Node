import { Request, Response } from "express"

export const home =  (req: Request, res: Response) => {
   let age: number = 90
   let showOld: boolean = false
   if(age > 50) {
      showOld = true
   }

   res.render('pages/home', {
      name: 'Edward',
      lastName: 'NewGate',
      age: 90,
      showOld,
      products: [
         { title: 'Produto X', price: 10 },
         { title: 'Produto Y', price: 15 },
         { title: 'Produto Z', price: 20 }
      ],
      frasesDoDia: [
         // 'Alguma coisa muito legal',
         // 'Outra frase qualquer'
      ]
      // showWelcome: true
      // Para ser acessado as variaveis devem estar dentro do render
   }) // Nome do View, OBJ com as Infos
}