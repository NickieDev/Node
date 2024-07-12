import { Math } from './Math'

describe('Testing Math Library', () => {
   it('Should sum two number correctly', () => {
      const response = Math.sum(5, 10)
      expect(response).toBe(15)
   })
   
   it('Should subtract two numbers correctly', () => {
      const response = Math.sub(4, 2)
      expect(response).toBe(2)
   })
   
   it('Should multiply two number correctly', () => {
      const response = Math.mult(3, 5)
      expect(response).toBe(15)
   })
   
   it('Should divider two number correctly', () => {
      const response = Math.div(15, 5)
      expect(response).toBe(3)
   
      const response2 = Math.div(3, 0)
      // expect(response2).toBe(false)
      expect(response2).toBeFalsy() // Ser Falso
   })

   // ------------ Rodar apenas um teste ------------------

   // it.only() => Roda somente esse teste e não 
   it('Contar quantos caracteres tem  na string', () => {
      const response = 'Denied'
      expect(response).toHaveLength(6) // Se possui o tamanho 6
   })

   it('Verificar se possui a propriedade email', () => {
      const response = {
         name: 'Kaido',
         email: 'kaido@op.com'
      }

      // expect(response).toHaveProperty('idade') // Se possui a propriedade
      expect(response).not.toBeUndefined() // Se possui a propriedade

         // .toBeUndefined() => Ser indefinido
         // .not.toBeUndefined() => Não ser indefinido
         // .toBeNull() => Não ser null
   })

   it('Verificar se o número é o esperado', () => {
      const response = 20

      // expect(response).toEqual(20) // Se é Igual o numero informado

     // expect(response).toBeGreaterThan(15) // Maior que o numero informado

     // expect(response).toBeGreaterThanOrEqual(15) // Maior ou igual ao numero informado

     // expect(response).toBeLessThan(15) // Menor que o numero informado

     expect(response).toBeLessThanOrEqual(15) // Menor ou igual ao numero informado
   })

   it('Verifica se foi retornado um email', () => {
      const response = 'kaido@op.com'

      expect(response).toMatch(/[a-z]@[a-z].[a-z]/) // Verifica se é igual ao termo esperado. Nesse caso se é em formato de email
   })

   it.only('Verifica se for retornado um erro', () => {
      const response = Math.div(10, 0)

      expect(response).toThrow(new Error('Não divide por zero'))
   })

})
