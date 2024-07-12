import { connect } from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const mongoConnect = async () => {
   try {
      console.log("Conectando ao MongoDB")
      await connect(process.env.MONGO_URL as string) //Faz a Conexão
      console.log('MongoDB Conectado com Sucesso!')
   } catch (error) {
      console.log("Error na Conexão MongoDB: ", error)
   }
}