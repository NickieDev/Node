const { checkSchema } = require('express-validator')

module.exports = {
   signup: checkSchema({ // Expecifica regras e confere
      name: {
         trim: true, // Remove os espaços no come e fim da string
         isLength: {
            options: { min: 2 }
         },
         errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
      },
      email: {
         isEmail: true,
         normalizeEmail: true, // Da um trim e deixa em lowercase
         errorMessage: 'Email inválido'
      },
      password: {
         notEmpty: true,
         isLength: { 
            options: { min: 2 }
         },
         errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
      },
      state: {
         notEmpty: true,
         errorMessage: 'Estado não preenchido'
      }
   })
}