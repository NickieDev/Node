const mongoose = require('mongoose') // Aqui ja vem com a conexão
mongoose.Promise = global.Promise

const mdodelSchema = new mongoose.Schema({
   name: String,
   slug: String
})

const modelName = 'Category'

if(mongoose.connection && mongoose.connection.models[modelName]) {
   module.exports = mongoose.connection.models[modelName]
} else {
   module.exports = mongoose.model(modelName, mdodelSchema)
}