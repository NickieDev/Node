import { Request, Response, NextFunction } from "express"
import JWT  from 'jsonwebtoken';
import dotenv from 'dotenv'
import { User } from "../models/User"

dotenv.config()

export const Auth = {
   private: async(req: Request, res: Response, next: NextFunction) => {
      let success = false

      // Fazer verificação de Auth
      /*if(req.headers.authorization) { // Se o Autorization existe
         let hash: string = req.headers.authorization.substring(6) // Retorna apartir do 6 caractere
         // console.log('Hash', hash)
         let decoded: string = Buffer.from(hash, 'base64').toString() // Converte um Base64 para String
         // console.log('Decoded', decoded)
         let data: string[] = decoded.split(':') //Separa a string pelo termo indicado 
            // [email, senha]
         // console.log('Data', data)

         if(data.length === 2) {
            let hasUser = await User.findOne({
               where: {
                  email: data[0],
                  password: data[1]
               }
            })
            if(hasUser) {
               success = true
            }
         }
      }*/

      if(req.headers.authorization){

         const [authType, token] = req.headers.authorization.split(' ') // Bearer token
         if(authType === 'Bearer') {
            try {
               // console.log('Token', token)
               /*const decoded = JWT.verify(
                  token, process.env.JWT_SECRET_KEY as string
               )

               console.log('Decoded', decoded)*/

               JWT.verify(
                  token, process.env.JWT_SECRET_KEY as string
               )
               
               success = true
            } catch(err) {
               console.log('Erro', 'Deu erro no JWT')
            }
         }
      }

      if(success) {
         next()
      } else {
         res.status(403) // Not Authorized
         res.json({ error: 'Não Autorizado' })
      }
   }
}