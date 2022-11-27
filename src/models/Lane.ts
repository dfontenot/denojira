import { Cotton } from '../deps.ts'
const { Column, Model, Primary }  = Cotton

@Model('lanes')
class Lane {
  @Primary()
  id!: number

  @Column()
  name!: string

  @Column()
  enabled!: boolean

  @Column()
  createdAt!: Date
}

export default Lane
