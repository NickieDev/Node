const mongoose = require('mongoose') // Aqui ja vem com a conexão
mongoose.Promise = global.Promise

const mdodelSchema = new mongoose.Schema({
   name: String,
   email: String,
   state: String,
   password: String,
   token: String
})

const modelName = 'User'

if(mongoose.connection && mongoose.connection.models[modelName]) {
   module.exports = mongoose.connection.models[modelName]
} else {
   module.exports = mongoose.model(modelName, mdodelSchema)
}