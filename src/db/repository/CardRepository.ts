import {
  Dex,
  Inversify,
  Postgres,
  Reflect,
} from '../../deps-backend.ts'
import { LaneRepository } from './LaneRepository.ts'
import { Card } from '../../models/Card.ts'
import {
  DbConnectionPoolId,
  LaneRepositoryFactory,
} from '../../types.ts'
const {
  inject,
  injectable,
} = Inversify

interface RawCardRow {
  id: number,
  name: string,
  is_enabled: boolean,
  created_at: Date,
  updated_at: Date,
}

@injectable()
export class CardRepository {
  private qb

  constructor(
    @inject(DbConnectionPoolId) private pool: Postgres.Pool | Postgres.Client,
    @inject(LaneRepositoryFactory) private laneRepositoryFactory: (client: Postgres.Transaction) => LaneRepository,
  ) {
    this.qb = Dex({ client: 'postgres' })
  }

  private cardMapper(row: RawCardRow): Card {
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
    const pool = this.pool as Postgres.Pool

    try {
      client = await pool.connect()
      return await cb(client)
    }
    finally {
      client?.release()
    }
  }

  private async queryWithClient<T>(cb: (client: Postgres.QueryClient) => Promise<T>): Promise<T> {

    if (this.pool instanceof Postgres.PoolClient) {
      return await this.queryWithPool(cb)
    }
    else {
      return await cb(this.pool as Postgres.Client)
    }
  }

  async moveCard(cardId: number | string, laneId: number | string): Card {
    return await this.queryWithClient(async (client: Postgres.QueryClient) => {

      const tx = client.createTransaction(`move_card_${cardId}_to_${laneId}`, { isolation_level: 'repeatable_read' })
      const laneRepository = this.laneRepositoryFactory(tx)

      await tx.begin()
      if (await laneRepository.isLaneDisabled(laneId)) {
        tx.rollback()
        throw Error('could not move card into disabled lane')
      }

      const query = this.qb('cards').update('lane_id', parseInt(`${laneId}`, 10), ['*'])
      const results = await tx.queryObject(query)

      tx.commit()

      return this.cardMapper(results.rows[0] as RawCardRow)
    })
  }
}
