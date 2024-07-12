import { Request, Response, NextFunction } from 'express'
import passport from 'passport'
import { BasicStrategy } from 'passport-http'
import { User } from '../models/User'

const notAuthorizedJson = { status: 401, message: 'Não Autorizado' }

// Aqui configura a sua Strategy
passport.use(new BasicStrategy(async(email, password, done) => {
   if(email && passport) {
      const user = await User.findOne({
         where: { email, password }
      })

      if(user) {
         return done (null, user)
      }
   }

   return done(notAuthorizedJson, false)
}))

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {
   /*const authFunction = passport.authenticate('basic', (err, user) => {
      return user ? next() : next(notAuthorizedJson)
   })

   authFunction(req, res, next)*/

   passport.authenticate('basic', (err, user) => {
      // console.log('User no MD', user)
      req.user = user
      return user ? next() : next(notAuthorizedJson)
   })(req, res, next) // Já cria e executa a função
   
}

export default passport

// header Authorization: Basic dGVzdEB0ZXN0LmNvbToxMjM0