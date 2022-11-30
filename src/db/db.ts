import { DenoDB } from '../deps-backend.ts'
import {
  Card,
  Lane
} from './models/index.ts'
const {
  Database,
  PostgresConnector,
  Relationships,
} = DenoDB

const conn = new PostgresConnector({
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  database: 'denojira',
})

const db = new Database(conn)

Relationships.belongsTo(Card, Lane)

// NOTE: this ordering is important, card can't go first due to FK on lanes table
db.link([Lane, Card])

export default db

