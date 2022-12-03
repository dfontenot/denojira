import { DenoDB } from '../deps-backend.ts'
import {
  Card,
  Lane
} from './models/index.ts'
const {
  Database,
  PostgresConnector,
} = DenoDB

const conn = new PostgresConnector({
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  database: 'denojira',
})

const db = new Database({ connector: conn, debug: true })

// NOTE: this ordering is important, card can't go first due to FK on lanes table
export const linkModels = () => db.link([Lane, Card])

export default db

