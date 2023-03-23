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
} = Inversify

interface RawLaneRow {
  id: number,
  name: string,
  enabled: boolean,
  created_at: Date,
  updated_at: Date,
}

type PoolOrTx = Postgres.Pool | Postgres.Transaction
type PoolClientOrTx = Postgres.PoolClient | Postgres.Transaction

export interface LaneRepository {
  doesLaneExist(laneId: number | string): Promise<boolean>
  isLaneDisabled(laneId: number | string): Promise<boolean>
  createLane(name: string, isEnabled: boolean): Promise<Lane>
  getAllLanes(): Promise<Lane[]>
}

@injectable()
export class DbLaneRepository implements LaneRepository {
  private qb

  constructor(@inject(DbConnectionPoolId) private pool: PoolOrTx) {
    this.qb = Dex({ client: 'postgres' })
  }

  private laneMapper(row: RawLaneRow): Lane {
    return {
      laneId: row['id'],
      name: row['name'],
      enabled: row['enabled'],
      createdAt: row['created_at'],
      updatedAt: row['updated_at'],
    }
  }

  private async queryWithPool<T>(cb: (client: Postgres.PoolClient) => Promise<T>): Promise<T> {

    let client: Postgres.PoolClient | null = null
    const pool = this.pool as Postgres.Pool

    try {
      client = await pool.connect()
      return await cb(client)
    }
    finally {
      client?.release()
    }
  }

  private async queryWithClient<T>(cb: (client: PoolClientOrTx) => Promise<T>): Promise<T> {

    if (this.pool instanceof Postgres.Pool) {
      return await this.queryWithPool(cb)
    }
    else {
      const tx = this.pool as Postgres.Transaction
      try {
        return await cb(tx)
      }
      catch (e) {
        console.log(`failed to run query inside transaction ${tx.name}`, e)
        throw e
      }
    }
  }

  async doesLaneExist(laneId: number | string): Promise<boolean> {
    return await this.queryWithClient(async (client) => {

      const query = this.qb('lanes').select(1).where('id', `${laneId}`).groupBy('id')
      console.log('lane exists query', query.toString())

      return (await client.queryObject(query.toString())).rows.length > 1
    })
  }

  async isLaneDisabled(laneId: number | string): Promise<boolean> {
    return await this.queryWithClient(async (client) => {

      console.log('tx is', client)
      const query = this.qb('lanes').select(1).where({'id': `${laneId}`, 'enabled': false }).groupBy('id')
      console.log('lane is disabled query', query.toString())

      return (await client.queryObject(query.toString())).rows.length > 1
    })
  }

  async createLane(name: string, isEnabled = true): Promise<Lane> {
    return await this.queryWithClient(async (client) => {

      const insertQuery = this.qb('lanes').insert([{ name, enabled: isEnabled }], ['id'])
      const result = await client.queryObject<RawLaneRow>(insertQuery.toString())
      console.log('created lane', result)

      return this.laneMapper(result.rows[0])
    })
  }

  async getAllLanes(): Promise<Lane[]> {
    return await this.queryWithClient(async (client) => {
      const result = await client.queryObject<RawLaneRow>(this.qb('lanes').select('*').toString())
      return result.rows.map((row: RawLaneRow) => this.laneMapper(row))
    })
  }
}
