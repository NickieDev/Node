const { validationResult, matchedData } = require('express-validator')

module.exports = {
   signin: async(req, res) => {

   },

   signup: async(req, res) => {
      const errors = validationResult(req)

      if(!errors.isEmpty()) { // Caso houver erros ele vai informa onde estão
         res.json({ error: errors.mapped() }) 
         return
      }

      const data = matchedData(req) // Aqui captura todos os dados caso eles estejam corretos, conforme a regra estabelecida em AuthValidaros

      res.json({ tudocerto: true , data})
   },
}