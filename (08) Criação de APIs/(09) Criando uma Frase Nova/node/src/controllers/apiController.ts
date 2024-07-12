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

   res.json({ id: newPhase.id, author, txt })
}