import { DenoDB } from '../deps-backend.ts'
import { Lane } from './models/index.ts'
const { Database,
  PostgresConnector,
} = DenoDB

const conn = new PostgresConnector({
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  database: 'denojira',
})

const db = new Database(conn)

db.link([Lane])

export default db

