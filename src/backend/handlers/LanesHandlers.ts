import {
  Oak,
} from '../deps.ts'
import { serializeWithBigIntQuoted } from './utils.ts'
import { LaneRepository } from '../db/repository/LaneRepository.ts'

const getLanesHandler = async (laneRepository: LaneRepository, ctx: Oak.Context) => {

  ctx.response.body = serializeWithBigIntQuoted(await laneRepository.getAllLanes())
}

export interface CreateLaneRequest {
  name: string,
  precedence: string | number,
}

const createNewLaneHandler = async (laneRepository: LaneRepository, ctx: Oak.Context) => {
  ctx.response.headers.set('Content-Type', 'application/json')

  const { value } = ctx.request.body({ type: 'json' })
  const { name, precedence: precedence_ }: CreateLaneRequest = await value
  const precedence = parseInt(`${precedence_}`, 10)

  if (isNaN(precedence)) {
    ctx.response.status = Oak.Status.BadRequest
    ctx.response.body = { error: `invalid lane precedence given` }
  }
  else {
    const created = await laneRepository.createLane(name, precedence, true)
    ctx.response.body = serializeWithBigIntQuoted(created)
  }
}

const changeLaneEnableStatus = async (setEnableStatusTo: boolean, laneRepository: LaneRepository, ctx: Oak.Context) => {
  const { laneId } = Oak.helpers.getQuery(ctx, { mergeParams: true })
  const didIntendedLaneUpdate = await laneRepository.setLaneEnableStatus(laneId, setEnableStatusTo)

  if (! didIntendedLaneUpdate) {
    ctx.response.status = Oak.Status.NotFound
  }
}

const enableLaneHandler = async (laneRepository: LaneRepository, ctx: Oak.Context) => await changeLaneEnableStatus(true, laneRepository, ctx)
const disableLaneHandler = async (laneRepository: LaneRepository, ctx: Oak.Context) => await changeLaneEnableStatus(false, laneRepository, ctx)

export {
  createNewLaneHandler,
  disableLaneHandler,
  enableLaneHandler,
  getLanesHandler,
}
