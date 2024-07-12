import { Request, Response } from "express";

export const nome = (req: Request, res: Response) => {
   //console.log('Query String', req.query) // Retorna um obj com as infos passadas

   let nome: string = req.query.nome as string // Informa ao TS que sera uma string, e nao um obj (padrao)
   let idade: string = req.query.idade as string 

   res.render('pages/nome', {
      nome, 
      idade
   })
}

export const idadeForm = (req: Request, res: Response) => {
   res.render('pages/idade')
}

export const idadeAction = (req: Request, res: Response) => {
   let mostrarIdade: boolean = false
   let idade: number = 0

   if(req.body.ano) {
      let anoNascimento: number = parseInt(req.body.ano as string)
      let anoAtual: number = new Date().getFullYear()
      idade = anoAtual - anoNascimento
      mostrarIdade = true
   }

   res.render('pages/idade', {
      idade,
      mostrarIdade
   })
}

