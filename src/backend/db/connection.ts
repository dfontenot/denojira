import * as Postgres from 'postgres'

const dbConnectionSettings = {
  hostname: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'denojira',
}

export const client = new Postgres.Client(dbConnectionSettings)

const POOL_SIZE = 10

export const pool = new Postgres.Pool(dbConnectionSettings, POOL_SIZE, true)
