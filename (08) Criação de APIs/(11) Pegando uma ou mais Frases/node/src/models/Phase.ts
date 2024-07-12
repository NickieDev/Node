import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/pg'

export interface PhaseInstance extends Model {
   id: number
   author: string
   txt: string
}

export const Phase = sequelize.define<PhaseInstance>('Phase', {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
   },
   author:{
      type: DataTypes.STRING
   },
   txt:{
      type: DataTypes.STRING
   }
}, {
   tableName: 'phases',
   timestamps: false
})