import {
  Dex,
  Inversify,
  Postgres,
  Reflect,
} from '../../deps-backend.ts'
import { Lane } from '../../models/Lane.ts'
import { DbConnectionPoolId } from '../../types.ts'
const {
  inject,
  injectable,
}  = Inversify

interface RawLaneRow {
  id: number,
  name: string,
  is_enabled: boolean,
  created_at: Date,
  updated_at: Date,
}


@injectable()
export class LaneRepository {
  private qb

  constructor(@inject(DbConnectionPoolId) private pool: Postgres.Pool) {
    this.qb = Dex({ client: 'postgres' })
  }

  private laneMapper(row: RawLaneRow): Lane {
    return {
      laneId: row['id'],
      name: row['name'],
      enabled: row['is_enabled'],
      createdAt: row['created_at'],
      updatedAt: row['updated_at'],
    }
  }

  private async queryWithPool<T>(cb: (client: Postgres.PoolClient) => Promise<T>): Promise<T> {

    let client: Postgres.PoolClient | null = null

    try {
      client = await this.pool.connect()
      return await cb(client)
    }
    finally {
      client?.release()
    }
  }

  async doesLaneExist(laneId: number | string): Promise<boolean> {
    return await this.queryWithPool(async (client) => {

      const query = this.qb('lanes').select('1').where('id', `${laneId}`).groupBy('id')
      console.log('lane exists query', query.toString())

      return (await client.queryObject(query.toString())).rows.length > 1
    })
  }

  async createLane(name: string, isEnabled = true): Promise<Lane> {
    return await this.queryWithPool(async (client) => {

      const insertQuery = this.qb('lanes').insert([{ name, is_enabled: isEnabled }], ['id'])
      const result = await client.queryObject(insertQuery.toString())
      console.log('created lane', result)

      return this.laneMapper(result.rows[0] as RawLaneRow)
    })
  }

  async getAllLanes(): Promise<Lane[]> {
    return await this.queryWithPool(async (client) => {
      const result = await client.queryObject(this.qb('lanes').select('*').toString())
      return result.rows.map((row: unknown) => this.laneMapper(row as RawLaneRow))
    })
  }
}
