import * as Postgres from 'postgres'
import {
  inject,
  injectable,
} from 'inversify'
import { DbConnectionPoolId } from '../types.ts'

export type PoolOrTx = Postgres.Pool | Postgres.Transaction
export type PoolClientOrTx = Postgres.PoolClient | Postgres.Transaction

export interface DbClient {
  queryWithPool<T>(cb: (client: Postgres.PoolClient) => Promise<T>): Promise<T>
  queryWithClient<T>(cb: (client: PoolClientOrTx) => Promise<T>): Promise<T>
  withTransaction<T>(name: string, options: Postgres.TransactionOptions | undefined, cb: (tx: Postgres.Transaction) => Promise<T>): Promise<T>
}

@injectable()
export class PoolOrTxClient implements DbClient {
  constructor(
    @inject(DbConnectionPoolId) private pool: PoolOrTx,
  ) {}

  async queryWithPool<T>(cb: (client: Postgres.PoolClient) => Promise<T>): Promise<T> {

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

  async queryWithClient<T>(cb: (client: PoolClientOrTx) => Promise<T>): Promise<T> {

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

  async withTransaction<T>(name: string, options: Postgres.TransactionOptions | undefined, cb: (tx: Postgres.Transaction) => Promise<T>): Promise<T> {

    if (this.pool instanceof Postgres.Transaction) {
      const message = `attempting to start new transaction while inside transaction ${(this.pool as Postgres.Transaction).name}`
      console.log(message)
      throw Error(message)
    }
    else {
      let client: Postgres.PoolClient | null = null
      let tx: Postgres.Transaction | null = null
      const pool = this.pool as Postgres.Pool

      try {
        client = await pool.connect()
        tx = client.createTransaction(name, options)

        return await cb(tx)
      }
      catch (e) {
        const message = `failed to execute (transaction name is ${tx?.name || '(no active tx)'}`
        console.log(message, e)
        tx?.rollback()
        throw Error(message, e)
      }
      finally {
        client?.release()
      }
    }
  }
}
