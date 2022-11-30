import { DenoDB } from '../../deps-backend.ts'
import Card from './Card.ts'
const { DataTypes, Model } = DenoDB

class Lane extends Model {
  static table = 'lanes'
  static timestamps = true

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIG_INTEGER,
    },
    name: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  }

  static defaults = {
    enabled: true
  }

  static cards() {
    return this.hasMany(Card)
  }
}

export default Lane
