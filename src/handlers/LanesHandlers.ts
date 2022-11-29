import {
  Oak,
} from '../deps-backend.ts'
import { Lane } from '../db/models/index.ts'

const getLanesHandler = async (ctx: Oak.Context) => {
  ctx.response.body = await Lane.all()
}

const createNewLaneHandler = async (ctx: Oak.Context) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { name } = await value

  const created = await Lane.create({ name, enabled: true })

  ctx.response.headers.set('Content-Type', 'application/json')
  ctx.response.body = created
}

export {
  createNewLaneHandler,
  getLanesHandler,
}
