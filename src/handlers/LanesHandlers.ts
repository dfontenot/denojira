import {
  Oak,
} from '../deps-backend.ts'
import { serializeWithBigIntQuoted } from './utils.ts'
import { LaneRepository } from '../db/repository/LaneRepository.ts'

const getLanesHandler = async (ctx: Oak.Context, laneRepository: LaneRepository) => {

  ctx.response.body = serializeWithBigIntQuoted(await laneRepository.getAllLanes())
}

const createNewLaneHandler = async (ctx: Oak.Context, laneRepository: LaneRepository) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { name } = await value

  const created = await laneRepository.createLane(name, true)

  ctx.response.headers.set('Content-Type', 'application/json')
  ctx.response.body = serializeWithBigIntQuoted(created)
}

export {
  createNewLaneHandler,
  getLanesHandler,
}
