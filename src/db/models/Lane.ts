import { DenoDB } from '../../deps-backend.ts'
const { DataTypes, Model } = DenoDB

class Lane extends Model {
  static table = 'lanes'
  static timestamps = true

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  }

  static defaults = {
    enabled: true
  }
}

export default Lane
