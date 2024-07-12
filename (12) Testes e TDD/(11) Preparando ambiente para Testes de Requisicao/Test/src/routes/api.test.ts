import request from 'supertest' // Cria uma especie de servidor ficticio
import app from '../app'

describe('Testing API Routes', () => {


   it('Should ping pong', (done) => {
      request(app)
         .get('/ping')
         .then(response => {
            expect(response.body.pong).toBeTruthy() // Ira passar
            // expect(response.body.pong).toBeFalsy() // Ira falhar
            return done()
         })
   })

})