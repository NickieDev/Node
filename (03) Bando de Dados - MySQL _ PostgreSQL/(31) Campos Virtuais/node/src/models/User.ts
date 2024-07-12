import { Model, DataTypes } from "sequelize";
import { sequelize} from "../instances/mysql";

interface UserInstance extends Model {
   id: number,
   name: string,
   age: number
}

export const User = sequelize.define<UserInstance>('User', {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
   },
   name: {
      type: DataTypes.STRING,
      get() {
         return this.getDataValue('name').toUpperCase()
      }
   },
   // Exemplo de utilização de Campo Vitual *
   /*lastName: {
      type: DataTypes.VIRTUAL
   },
   fullName: {
      type: DataTypes.VIRTUAL,
      get() {
         let name: string = this.getDataValue('name')
         let lastName: string = this.getDataValue('lastname')
         return `${name} ${lastName}`
      }
   },*/ 
   firstLeterOfName: {
      type: DataTypes.VIRTUAL,
      get() {
         let name = this.getDataValue('name')
         return name.charAt(0) //name[0] // 1 Letra
      }
   },
   age: {
      type: DataTypes.INTEGER,
      defaultValue: 18,
      set(value: number) {
         if(value < 18) {
            value = 18
         }
         this.setDataValue('age', value)
      }
   }
}, {
   tableName: 'users',
   timestamps: false // Não criara createdAt e updatedAt
})