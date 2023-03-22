import {
  Oak,
} from '../deps-backend.ts'
import {
  CardRepository,
  type CardInLane,
} from '../db/repository/CardRepository.ts'
import {
  LaneRepository,
} from '../db/repository/LaneRepository.ts'
import { pool } from '../db/connection.ts'
import {
  CardResponse,
  GetCardsResponse
} from '../models/Card.ts'
import { serializeWithBigIntQuoted } from './utils.ts'

const getCardsHandler = async (cardRepository: CardRepository, ctx: Oak.Context) => {

  const joinedResults = await cardRepository.getAllCardsInLanes()

  // TODO: clean up typing errors
  const grouped = joinedResults.reduce<GetCardsResponse>((acc: GetCardsResponse, row: CardInLane) => {
    const key = `${row.laneId}`
    const newCard: CardResponse = { id: row.cardId, title: row.title, description: row.description }

    if (acc[key]) {
      acc[key].cards.push(newCard)
    }
    else {
      acc[key] = { laneName: row.laneName, cards: [newCard] }
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

const createNewCardHandler = async (cardRepository: CardRepository, ctx: Oak.Context) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { title, description, laneId }: CreateCardRequest = await value

  ctx.response.headers.set('Content-Type', 'application/json')

  const created = await cardRepository.createCard(title, description, laneId)
  ctx.response.body = serializeWithBigIntQuoted(created)
}

export interface MoveCardRequest {
  cardId: number | string,
  destinationLaneId: number | string,
}

const moveCardHandler = async (cardRepository: CardRepository, ctx: Oak.Context) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { cardId, destinationLaneId }: MoveCardRequest = await value

  const updated = await cardRepository.moveCard(cardId, destinationLaneId)
  ctx.response.body = updated
}

const deleteCardHandler = async (cardRepository: CardRepository, ctx: Oak.Context) => {
  const { cardId } = Oak.helpers.getQuery(ctx, { mergeParams: true })
  const deletionResult = await cardRepository.deleteCard(cardId)

  if (! deletionResult) {
    ctx.response.status = Oak.Status.NotFound
    ctx.response.body = { error: `no such card id '${cardId}'` }
  }
  else {
    ctx.response.body = { deleted: deletionResult }
  }
}

export {
  createNewCardHandler,
  deleteCardHandler,
  getCardsHandler,
  moveCardHandler,
}
