import {
  Dex,
  Inversify,
  Logger,
  Postgres,
  Reflect,
} from '../../deps.ts'
import { getModuleName } from '../../meta.ts'
import { Lane } from '../../../shared/models/Lane.ts'
import { type DbClient } from '../DbClient.ts'
import { DbClientId } from '../../types.ts'
const {
  inject,
  injectable,
} = Inversify
const { getLogger } = Logger

interface RawLaneRow {
  id: number,
  name: string,
  enabled: boolean,
  created_at: Date,
  updated_at: Date,
}

export interface LaneRepository {
  doesLaneExist(laneId: number | string): Promise<boolean>
  isLaneDisabled(laneId: number | string): Promise<boolean>
  createLane(name: string, precedence: number, isEnabled: boolean): Promise<Lane>
  getAllLanes(): Promise<Lane[]>
  setLaneEnableStatus(laneId: number | string, setTo: boolean): Promise<boolean>
}

@injectable()
export class DbLaneRepository implements LaneRepository {
  private qb
  private logger

  constructor(@inject(DbClientId) private client: DbClient) {
    this.qb = Dex({ client: 'postgres' })
    this.logger = getLogger(getModuleName(import.meta.url))
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

  async doesLaneExist(laneId: number | string): Promise<boolean> {
    return await this.client.queryWithClient(async (client) => {

      const query = this.qb('lanes').select(1).where('id', `${laneId}`).groupBy('id')
      this.logger.debug('lane exists query', query.toString())

      return (await client.queryObject(query.toString())).rows.length > 1
    })
  }

  async isLaneDisabled(laneId: number | string): Promise<boolean> {
    return await this.client.queryWithClient(async (client) => {

      this.logger.debug('tx is', client)
      const query = this.qb('lanes').select(1).where({'id': `${laneId}`, 'enabled': false }).groupBy('id')
      this.logger.debug('lane is disabled query', query.toString())

      return (await client.queryObject(query.toString())).rows.length > 1
    })
  }

  async createLane(name: string, precedence: number, isEnabled = true): Promise<Lane> {
    return await this.client.withTransaction<Lane>(`create-lane-${name}`, undefined, async (tx: Postgres.Transaction) => {
      await tx.begin()

      const precedenceExistsQuery = this.qb('lanes').select(1).where('precedence', precedence).groupBy('id').limit(1)
      const precedenceExists = (await tx.queryObject(precedenceExistsQuery.toString())).rows.length > 1

      if (precedenceExists) {
        const shiftLanesQuery = this.qb('lanes').increment('precedence').where('precedence', '>=', precedence)
        const numUpdated = (await tx.queryObject(shiftLanesQuery.toString())).rows.length
        this.logger.info(`adjusted ${numUpdated} lanes`)
      }

      const insertQuery = this.qb('lanes').insert([{ name, precedence, enabled: isEnabled }], ['id'])
      const result = await tx.queryObject<RawLaneRow>(insertQuery.toString())
      this.logger.debug('created lane', result)

      tx.commit()

      return this.laneMapper(result.rows[0])
    })
  }

  async getAllLanes(): Promise<Lane[]> {
    return await this.client.queryWithClient(async (client) => {
      const result = await client.queryObject<RawLaneRow>(this.qb('lanes').select('*').orderBy('precedence').toString())
      return result.rows.map((row: RawLaneRow) => this.laneMapper(row))
    })
  }

  async setLaneEnableStatus(laneId: number | string, setTo: boolean): Promise<boolean> {
    return await this.client.queryWithClient(async (client) => {
      const result = await client.queryObject(this.qb('lanes').where('id', `${laneId}`).update({ enabled: setTo }))
      return (result.rowCount || 0) == 1
    })
  }
}
