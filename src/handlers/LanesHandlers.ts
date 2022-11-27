import {
  Cotton,
  Oak,
} from '../deps.ts'

const db = await Cotton.connect({
  type: 'postgres',
  port: 5432,
  database: 'denojira',
  hostname: 'localhost',
  username: 'postgres',
  password: 'password',
})

const getLanesHandler = async (ctx: Oak.Context) => {
}

export { getLanesHandler }
