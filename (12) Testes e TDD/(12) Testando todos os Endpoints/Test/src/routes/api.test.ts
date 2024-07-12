import request from 'supertest' // Cria uma especie de servidor ficticio
import app from '../app'
import { User } from '../models/User'

describe('Testing API Routes', () => {
   let email = 'teste@jest.com'
   let password = '1234'

   beforeAll(async() => {
      await User.sync({ force: true })
   })

   it('Should ping pong', (done) => {
      request(app)
         .get('/ping')
         .then(response => {
            expect(response.body.pong).toBeTruthy() // Ira passar
            // expect(response.body.pong).toBeFalsy() // Ira falhar
            return done()
         })
   })

   // ---------------- Register Route ----------------------
   it('Should register a new user', (done) => {
      request(app)
         .post('/register')
         .send(`email=${email}&password=${password}`)
         .then(response => {
            expect(response.body.error).toBeUndefined()

            expect(response.body).toHaveProperty('id')
            return done()
         })
   })

   it('Should not allow register with existing email', (done) => {
      request(app)
         .post('/register')
         .send(`email=${email}&password=${password}`)
         .then(response => {
            expect(response.body.error).not.toBeUndefined()
            return done()
         })
   })

   it('Should not allow register without password', (done) => {
      request(app)
         .post('/register')
         .send(`email=${email}`)
         .then(response => {
            expect(response.body.error).not.toBeUndefined()
            return done()
         })
   })

   it('Should not allow register without email', (done) => {
      request(app)
         .post('/register')
         .send(`password=${password}`)
         .then(response => {
            expect(response.body.error).not.toBeUndefined()
            return done()
         })
   })

   it('Should not allow register without any data', (done) => {
      request(app)
         .post('/register')
         .send(``)
         .then(response => {
            expect(response.body.error).not.toBeUndefined()
            return done()
         })
   })

   // -------------- Login Route --------------
   it('Should login correctly', (done) => {
      request(app)
         .post('/login')
         .send(`email=${email}&password=${password}`)
         .then(response => {
            expect(response.body.error).toBeUndefined()

            expect(response.body.status).toBeTruthy()
            return done()
         })
   })

   it('Should not login with incorrectly data', (done) => {
      request(app)
         .post('/login')
         .send(`email=${email}&password=invalid`)
         .then(response => {
            expect(response.body.error).toBeUndefined()

            expect(response.body.status).toBeFalsy()
            return done()
         })
   })

   // -------------- List Route ---------------
   it('Should list users', (done) => {
      request(app)
         .get('/list')
         .then(response => {
            expect(response.body.error).toBeUndefined()

            expect(response.body.list.length).toBeGreaterThanOrEqual(1)

            expect(response.body.list).toContain(email)
            return done()
         })
   })



})