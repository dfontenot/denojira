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
  LaneRepositoryFactoryId,
} from '../../types.ts'
const {
  inject,
  injectable,
} = Inversify

interface RawCardRow {
  id: number,
  title: string,
  description: string,
  lane_id: number,
  created_at: Date,
  updated_at: Date,
}

interface RawCardInLane {
  card_id: number,
  title: string,
  description: string,
  card_created_at: Date,
  card_updated_at: Date,
  lane_id: number,
  lane_name: string,
}

export interface CardInLane {
  cardId: number,
  title: string,
  description: string,
  cardCreatedAt: Date,
  cardUpdatedAt: Date,
  laneId: number,
  laneName: string,
}

export interface CardRepository {
  moveCard(cardId: number | string, laneId: number | string): Promise<Card>
  getAllCardsInLanes(): Promise<CardInLane[]>
  createCard(title: string, description: string, laneId: number | string): Promise<Card>
  deleteCard(cardId: number | string): Promise<boolean>
}

@injectable()
export class DbCardRepository implements CardRepository {
  private qb

  constructor(
    @inject(DbConnectionPoolId) private pool: Postgres.Pool | Postgres.Client,
    @inject(LaneRepositoryFactoryId) private laneRepositoryFactory: (client: Postgres.Transaction) => LaneRepository,
  ) {
    this.qb = Dex({ client: 'postgres' })
  }

  private cardMapper(row: RawCardRow): Card {
    return {
      id: row['id'],
      title: row['title'],
      description: row['description'],
      laneId: row['lane_id'],
      createdAt: row['created_at'],
      updatedAt: row['updated_at'],
    }
  }

  private cardInLaneMapper(row: RawCardInLane): CardInLane {
    return {
      cardId: row['card_id'],
      title: row['title'],
      description: row['description'],
      cardCreatedAt: row['card_created_at'],
      cardUpdatedAt: row['card_updated_at'],
      laneId: row['lane_id'],
      laneName: row['lane_name'],
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

    if (this.pool instanceof Postgres.Pool) {
      return await this.queryWithPool(cb)
    }
    else {
      return await cb(this.pool as Postgres.Client)
    }
  }

  async moveCard(cardId: number | string, laneId: number | string): Promise<Card> {
    return await this.queryWithClient(async (client: Postgres.QueryClient) => {

      const tx = client.createTransaction(`move_card_${cardId}_to_${laneId}`, { isolation_level: 'repeatable_read' })
      const laneRepository = this.laneRepositoryFactory(tx)

      await tx.begin()
      if (await laneRepository.isLaneDisabled(laneId)) {
        tx.rollback()
        throw Error('could not move card into disabled lane')
      }

      const query = this.qb('cards').update('lane_id', parseInt(`${laneId}`, 10), ['*'])
      const results = await tx.queryObject(query.toString())

      tx.commit()

      return this.cardMapper(results.rows[0] as RawCardRow)
    })
  }

  async getAllCardsInLanes(): Promise<CardInLane[]> {
    return await this.queryWithClient(async (client: Postgres.QueryClient) => {

      const query = this.qb('cards').select('cards.id as card_id',
        'title',
        'description',
        'cards.created_at as card_created_at',
        'cards.updated_at as card_updated_at',
        'lanes.id as lane_id',
        'name as lane_name'
      ).innerJoin('lanes', 'cards.lane_id', 'lanes.id')

      const results = await client.queryObject(query.toString())

      return results.rows.map((row) => this.cardInLaneMapper(row as RawCardInLane))
    })
  }

  async createCard(title: string, description: string, laneId: number | string): Promise<Card> {
    return await this.queryWithClient(async (client: Postgres.QueryClient) => {

      const query = this.qb('cards').insert({ title, description, lane_id: laneId }, ['id', 'title', 'description', 'created_at', 'updated_at'])
      const results = await client.queryObject(query.toString())

      return this.cardMapper(results.rows[0] as RawCardRow)
    })
  }

  async deleteCard(cardId: number | string): Promise<boolean> {
    return await this.queryWithClient(async (client: Postgres.QueryClient) => {

      const query = this.qb('cards').where('id', cardId).delete()
      const results = await client.queryObject(query.toString())

      return (results.rowCount || 0) == 1
    })
  }
}
