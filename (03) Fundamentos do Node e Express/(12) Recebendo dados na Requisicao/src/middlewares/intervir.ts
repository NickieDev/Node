import { RequestHandler } from "express"

export const inteferir: RequestHandler = (req, res, next) => {
   /*console.log('MIDDLEWARE')
   next()*/

   let logged = true

   if(logged) {
      next()
   } else {
      res.status(403).send({ error: 'Midddleware não permitiu' })
   }
}