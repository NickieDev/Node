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
   }

   return done(notAuthorizedJson, false)
}))

export default passport