import {
  Oak,
} from '../deps-backend.ts'
import { Lane } from '../db/models/index.ts'

// source: https://github.com/GoogleChromeLabs/jsbi/issues/30#issuecomment-521460510
const serializeWithBigIntQuoted = (jsonObj: any) => JSON.stringify(jsonObj, (_key, val) => typeof val === 'bigint' ? val.toString() : val)

const getLanesHandler = async (ctx: Oak.Context) => {

  ctx.response.body = serializeWithBigIntQuoted(await Lane.all())
}

const createNewLaneHandler = async (ctx: Oak.Context) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { name } = await value

  const created = await Lane.create({ name, enabled: true })

  ctx.response.headers.set('Content-Type', 'application/json')
  ctx.response.body = serializeWithBigIntQuoted(created)
}

export {
  createNewLaneHandler,
  getLanesHandler,
}
