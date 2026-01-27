import * as Postgres from 'postgres'

const dbConnectionSettings = {
  hostname: Deno.env.get('DB_HOST') || 'localhost',
  user: Deno.env.get('DB_USER') || 'postgres',
  password: Deno.env.get('DB_PASSWORD'),
  database: Deno.env.get('DB_DATABASE') || 'denojira',
}

export const makeClient = () => new Postgres.Client(dbConnectionSettings)

const POOL_SIZE = 10

export const makePool = () => new Postgres.Pool(dbConnectionSettings, POOL_SIZE, true)
