import { User, UserInstance } from '../models/User'
import * as UserService from './UserService'

describe('Testing user service', () => {
   let email = 'teste@jest.com'
   let password = '1234'

   beforeAll(async() => {
      await User.sync({ force: true }) // Antes de tudo, verifica se existe a tabela e se existi ele delete pra recriar
   })

   it('Should create a new user', async() => {
      const newUser = await UserService.createUser(email, password) as UserInstance

      expect(newUser).not.toBeInstanceOf(Error) // Não ser uma instancia de erro

      expect(newUser).toHaveProperty('id') // Precisa ter o ID

      expect(newUser.email).toBe(email) // Verifica se o email é o email informado
   })

   it('Should not allow to create a user with existing email', async() => {
      const newUser = await UserService.createUser(email, password)

      expect(newUser).toBeInstanceOf(Error) // Espera dar erro
   })

   it('Should find a user by the email', async() => {
      const user = await UserService.findByEmail(email) as UserInstance

      expect(user.email).toBe(email) 
   })

   it('Should match the password from database', async() => {
      const user = await UserService.findByEmail(email) as UserInstance
      const match = UserService.matchPassword(password, user.password)

      expect(match).toBeTruthy() // Precisa ser TRUE
   })

   it('Should not match the password from database', async() => {
      const user = await UserService.findByEmail(email) as UserInstance
      const match = UserService.matchPassword('invalid', user.password)

      expect(match).toBeFalsy() // Precisa ser FALSE
   })

   it('Should get a list of users', async() => {
      const users = await UserService.all()

      expect(users.length).toBeGreaterThanOrEqual(1)

      for(let i in users) {
         expect(users[i]).toBeInstanceOf(User)
      }
   })

})