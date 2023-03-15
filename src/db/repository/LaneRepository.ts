import {
  Dex,
} from '../../deps-backend.ts'
import { client } from '../connection.ts'

const dex = Dex({ client: 'postgres' })

export const doesLaneExist = async (laneId: number | string) => {
  const query = dex('lanes').select('1').where('id', `${laneId}`).groupBy('id')
  console.log('lane exists query', query.toString())

  return await client.queryObject(query.toString())
}
