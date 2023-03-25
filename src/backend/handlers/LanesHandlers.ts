import {
  Oak,
} from '../deps.ts'
import { serializeWithBigIntQuoted } from './utils.ts'
import { LaneRepository } from '../db/repository/LaneRepository.ts'

const getLanesHandler = async (laneRepository: LaneRepository, ctx: Oak.Context) => {

  ctx.response.body = serializeWithBigIntQuoted(await laneRepository.getAllLanes())
}

const createNewLaneHandler = async (laneRepository: LaneRepository, ctx: Oak.Context) => {
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
