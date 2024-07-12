import { Request, Response } from "express";

import { Phase } from "../models/Phase";

export const ping = (req: Request, res: Response) => {
   res.json({ pong: true })
}

export const random = (req: Request, res: Response) => {
   let nRand: number = Math.floor( Math.random() * 10 )
   res.json({ number: nRand })
}

export const nome = (req: Request, res: Response) => {
   let nome: string = req.params.nome
   res.json({ nome: `Você enviou o nome ${nome}` })
}

export const createPhase = async(req: Request, res: Response) => {
   //console.log(req.body)
   let { author, txt } = req.body

   let newPhase = await Phase.create({ author, txt })

   res.status(201)
   res.json({ id: newPhase.id, author, txt })
}

export const listPhases = async(req: Request, res: Response) => {
   let list = await Phase.findAll()

   res.json({ list })
}


export const getPhase = async(req: Request, res: Response) => {
   let { id } = req.params

   let phase = await Phase.findByPk(id)

   if(phase) {
      res.json({ phase })
   } else {
      res.json({ error: 'Frase não encontrada' })
   }
}