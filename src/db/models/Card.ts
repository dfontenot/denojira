import { DenoDB } from '../../deps-backend.ts'
import Lane from './Lane.ts'
const { DataTypes, Model } = DenoDB

class Card extends Model {
  static table = 'cards'
  static timestamps = true

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIG_INTEGER,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  }

  static lane() {
    return this.hasOne(Lane)
  }
}

export default Card
