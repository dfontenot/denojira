import {
  Oak,
} from '../deps-backend.ts'
import {
  Card,
  Lane,
} from '../db/models/index.ts'
import { GetCardsResponse } from '../models/Card.ts'
import { serializeWithBigIntQuoted } from './utils.ts'

const getCardsHandler = async (ctx: Oak.Context) => {

  //const joinedResults = await Card.join(Lane, Lane.field('id'), Card.field('lane_id')).get()
  const joinedResults = await Card.select(Card.field('id', 'cardId'), 'name', 'laneId', 'title', 'description')
    .join(Lane.select(Lane.field('id', 'laneId'), 'name', 'enabled'), Lane.field('id'), Card.field('lane_id')).get()

  // TODO: clean up typing errors
  const grouped = joinedResults.reduce<GetCardsResponse>((acc, row) => {
    const key = `${row.laneId}`
    const newCard = { id: row.cardId, title: row.title, description: row.description }

    if (acc.hasOwnProperty(key)) {
      acc[key].cards.push(newCard)
    }
    else {
      acc[key] = { laneName: row.name, cards: [newCard] }
    }

    return acc
  }, {})

  ctx.response.body = serializeWithBigIntQuoted(grouped)
}

export interface CreateCardRequest {
  title: string,
  description: string,
  laneId: number | string,
}

// see https://stackoverflow.com/a/10841867/854854
const doesLaneExist = async (laneId: number | string) => await Lane.where('id', `${laneId}`).groupBy('id').count() > 0

const createNewCardHandler = async (ctx: Oak.Context) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { title, description, laneId }: CreateCardRequest = await value

  ctx.response.headers.set('Content-Type', 'application/json')

  if (! doesLaneExist(laneId)) {
    ctx.response.status = Oak.Status.BadRequest
    ctx.response.body = { 'error': 'no such lane id' }
  }
  else {
    const created = await Card.create({ title, description, laneId: `${laneId}` })

    ctx.response.body = serializeWithBigIntQuoted(created)
  }
}

export interface MoveCardRequest {
  cardId: number | string,
  destinationLaneId: number | string,
}

const moveCardHandler = async (ctx: Oak.Context) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { cardId, destinationLaneId }: MoveCardRequest = await value

  if (! doesLaneExist(destinationLaneId)) {
    ctx.response.status = Oak.Status.BadRequest
    ctx.response.body = { 'error': 'no such lane id' }
    return
  }

  const cardModel = Card.where('id', cardId)
  const card = await cardModel.get()

  if (! card) {
    ctx.response.status = Oak.Status.BadRequest
    ctx.response.body = { 'error': 'no such card id' }
    return
  }

  // TODO: update lane id
}

export {
  createNewCardHandler,
  getCardsHandler,
  moveCardHandler,
}
