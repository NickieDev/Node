import { RequestHandler } from "express";
import { z } from "zod";

export const login: RequestHandler = (req, res) => {
   const loginSchema = z.object({
      password: z.string()
   })

   const body = loginSchema.safeParse(req.body)

   if(!body.success) return res.json({ error: 'Dados inválidos' })

  // Validar a senha & gerar o token

  // Retorno da requisiçãos
}