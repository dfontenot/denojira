import { Postgres } from '../src/deps-backend.ts'

export const client = new Postgres.Client({
  hostname: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'denojira',
})
