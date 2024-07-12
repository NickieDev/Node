const { checkSchema } = require('express-validator')

module.exports = {
   editAction: checkSchema({ // Expecifica regras e confere
      token: {
         notEmpty: true
      },
      name: {
         optional: true,
         trim: true, // Remove os espaços no come e fim da string
         isLength: {
            options: { min: 2 }
         },
         errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
      },
      email: {
         optional: true,
         isEmail: true,
         normalizeEmail: true, // Da um trim e deixa em lowercase
         errorMessage: 'Email inválido'
      },
      password: {
         optional: true,
         notEmpty: true,
         isLength: { 
            options: { min: 2 }
         },
         errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
      },
      state: {
         optional: true,
         notEmpty: true,
         errorMessage: 'Estado não preenchido'
      }
   })
}