import {
  Dex,
  Inversify,
  Logger,
  Postgres,
  Reflect,
} from '../../deps.ts'
import { getModuleName, getDirectoryName } from '../../meta.ts'
import { type DbClient } from '../DbClient.ts'
import { LaneRepository } from './LaneRepository.ts'
import { Card } from '../../models/Card.ts'
import {
  DbClientId,
  LaneRepositoryFactoryId,
} from '../../types.ts'
const {
  inject,
  injectable,
} = Inversify
const { getLogger } = Logger

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
  private logger

  constructor(
    @inject(DbClientId) private client: DbClient,
    @inject(LaneRepositoryFactoryId) private laneRepositoryFactory: (client: Postgres.Transaction) => LaneRepository,
  ) {
    this.qb = Dex({ client: 'postgres' })
    this.logger = getLogger(getModuleName(import.meta.url))
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

  async moveCard(cardId: number | string, laneId: number | string): Promise<Card> {
    return await this.client.withTransaction(`move_card_${cardId}_to_${laneId}`, { isolation_level: 'serializable' }, async (tx) => {
      await tx.begin()

      const laneRepository = this.laneRepositoryFactory(tx)

      if (await laneRepository.isLaneDisabled(laneId)) {
        tx.rollback()
        throw Error('could not move card into disabled lane')
      }

      const query = this.qb('cards').update('lane_id', parseInt(`${laneId}`, 10), ['*']).where('id', cardId)
      this.logger.debug('update card query', query.toString())
      const results = await tx.queryObject<RawCardRow>(query.toString())

      tx.commit()

      return this.cardMapper(results.rows[0])
    })
  }

  async getAllCardsInLanes(): Promise<CardInLane[]> {
    return await this.client.queryWithClient(async (client) => {

      const query = this.qb('cards').select('cards.id as card_id',
        'title',
        'description',
        'cards.created_at as card_created_at',
        'cards.updated_at as card_updated_at',
        'lanes.id as lane_id',
        'name as lane_name'
      ).innerJoin('lanes', 'cards.lane_id', 'lanes.id').orderBy('cards.updated_at', 'desc')

      const results = await client.queryObject<RawCardInLane>(query.toString())

      return results.rows.map((row: RawCardInLane) => this.cardInLaneMapper(row))
    })
  }

  async createCard(title: string, description: string, laneId: number | string): Promise<Card> {
    return await this.client.queryWithClient(async (client) => {

      const query = this.qb('cards').insert({ title, description, lane_id: laneId }, ['id', 'title', 'description', 'created_at', 'updated_at'])
      const results = await client.queryObject<RawCardRow>(query.toString())

      return this.cardMapper(results.rows[0])
    })
  }

  async deleteCard(cardId: number | string): Promise<boolean> {
    return await this.client.queryWithClient(async (client) => {

      const query = this.qb('cards').where('id', cardId).delete()
      const results = await client.queryObject(query.toString())

      return (results.rowCount || 0) == 1
    })
  }
}
