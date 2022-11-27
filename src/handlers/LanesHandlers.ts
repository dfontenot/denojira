import {
  Oak,
} from '../deps.ts'
import { Lane } from '../models/index.ts'

const getLanesHandler = async (ctx: Oak.Context) => {
  ctx.response.body = await Lane.all()
}

export { getLanesHandler }
