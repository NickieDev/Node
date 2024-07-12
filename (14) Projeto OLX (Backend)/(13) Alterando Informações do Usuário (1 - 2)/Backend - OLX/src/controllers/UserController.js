const { validationResult, matchedData } = require('express-validator')
const State = require('../models/State')
const User = require('../models/User')
const Category = require('../models/Category')
const Ad = require('../models/Ad')

module.exports = {
   getStates: async(req, res) => {
      let states = await State.find()

      res.json({ states })
   },

   info: async(req, res) => {
      let token = req.query.token

      const user = await User.findOne({ token })
      const state = await State.findById(user.state)
      const ads = await Ad.find({ idUser: user._id.toString() })

      let adList = []
      for(let i in ads) {
         const cat = await Category.findById(ads[i])

         /*adList.push({
            id: ads[i]._id,
            status: ads[i].status,
            images: ads[i].images,
            dateCreated: ads[i].dateCreated,
            title: ads[i].title,
            price: ads[i],
            priceNegotiable: ads[i],
            views: ads[i].views,
            category: cat.slug
         })*/

         adList.push({ ...ads[i], category: cat.slug }) // Forma resumida da lista. Retorna os valores conforme o push acima comentado e substitui o campo category
      }

      res.json({ 
         name: user.name,
         email: user.email,
         state: state.name,
         ads: adList
      })
   },

   editAction: async(req, res) => {
      const errors = validationResult(req)

      if(!errors.isEmpty()) { // Caso houver erros ele vai informa onde estão
         res.json({ error: errors.mapped() }) 
         return
      }

      const data = matchedData(req) // Aqui captura todos os dados caso eles estejam corretos, conforme a regra estabelecida em AuthValidaros

      let updates = { }

      if(data.name) {
         updates.name = data.name
      }

      if(data.email) {
         const emailCheck = await User.findOne({ email: data.email })

         if(emailCheck) {
            res.json({ error: 'Email já cadastrado!' })
            return
         }
         updates.email = data.email
      }

      await User.findOneAndUpdate({ token: data.token }, { $set: updates} )


      res.json({ })
   },
}