const mongoose = require('mongoose')
const { validationResult, matchedData } = require('express-validator')
const bcrypt = require('bcrypt')

const State = require('../models/State')
const User = require('../models/User')

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

      // Verificando se o email já existe
      const user = await User.findOne({
         email: data.email
      })

      if(user) {
         res.json({
            error: { email: { msg: 'Email já existe' } }
         })
         return 
      }

      // Verificando se o estado existe
      if(mongoose.Types.ObjectId.isValid(data.state)) {
         const stateItem = await State.findById(data.state)
   
         if(!stateItem) {
            res.json({
               error: { state: { mgs: 'Estado não existe' } }
            })
            return
         }
      } else {
         res.json({
            error: { state: { mgs: 'Código de Estado inválido' } }
         })
         return
      }

      const passwordHash = await bcrypt.hash(data.password, 10)

      const payload = (Date.now() + Math.random()).toString()
      const token = await bcrypt.hash(payload, 10)

      const newUser = new User({
         name: data.name,
         email: data.email,
         passwordHash,
         token,
         state: data.state
      })

      await newUser.save()

      // res.json({ tudocerto: true , data})

      res.json( { token } )
   }
}