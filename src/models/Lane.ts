import { DenoDB } from '../deps.ts'
const { DataTypes, Model } = DenoDB

export interface SwimLane {
  id: number,
  name: string,
  enabled: boolean,
  createdAt: Date,
  updatedAt: Date,
}

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
