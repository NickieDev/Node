import { Request, Response, NextFunction } from "express"

export const Auth = {
   private: (req: Request, res: Response, next: NextFunction) => {
      // Fazer verificação de Auth
      let success = false

      if(success) {
         next()
      } else {
         res.status(403) // Not Authorized
         res.json({ error: 'Não Autorizado' })
      }
   }
}