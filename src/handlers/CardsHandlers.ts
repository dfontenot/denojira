import {
  Oak,
} from '../deps-backend.ts'
import {
  doesLaneExist,
} from '../db/repository/LaneRepository.ts'
import { pool } from '../db/connection.ts'
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

const createNewCardHandler = async (ctx: Oak.Context) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { title, description, laneId }: CreateCardRequest = await value

  ctx.response.headers.set('Content-Type', 'application/json')

  const client = await pool.connect()
  try {
    const tx = client.createTransactions('create_card', { isolation_level: 'repeatable_read' })

    await tx.begin()
    try {
      tx.commit()
    }
    catch (e) {
      console.log('error during transaction, rolling back', e)
      await tx.rollback()
    }
  }
  finally {
    client.release()
  }
  await db.transaction(async () => {
    if (! doesLaneExist(laneId)) {
      ctx.response.status = Oak.Status.BadRequest
      ctx.response.body = { 'error': 'no such lane id' }
    }
    else {
      const created = await Card.create({ title, description, laneId: `${laneId}` })

      ctx.response.body = serializeWithBigIntQuoted(created)
    }
  })
}

export interface MoveCardRequest {
  cardId: number | string,
  destinationLaneId: number | string,
}

const moveCardHandler = async (ctx: Oak.Context) => {
  const { value } = ctx.request.body({ type: 'json' })
  const { cardId, destinationLaneId }: MoveCardRequest = await value

  await db.transaction(async () => {
    if (! doesLaneExist(destinationLaneId)) {
      ctx.response.status = Oak.Status.BadRequest
      ctx.response.body = { 'error': 'no such lane id' }
      return
    }

    const card = await Card.where('id', cardId).get()

    if (! card) {
      ctx.response.status = Oak.Status.BadRequest
      ctx.response.body = { 'error': 'no such card id' }
      return
    }

    // TODO: why doesn't this work?
    //const updated = await cardModel.update({ laneId: destinationLaneId })
    const updated = await Card.where('id', cardId).update({ laneId: destinationLaneId })
    console.log('did update', updated) // NOTE: will always return [] due to https://github.com/eveningkid/denodb/issues/223#issuecomment-821556151
    ctx.response.body = updated
  })
}

const deleteCardHandler = async (ctx: Oak.Context) => {
  const { cardId } = Oak.helpers.getQuery(ctx, { mergeParams: true })

  await db.transaction(async () => {
    const card = await Card.where('id', cardId).get()

    if (! card) {
      ctx.response.status = Oak.Status.BadRequest
      ctx.response.body = { 'error': 'no such card id' }
      return
    }

    const deleted = await Card.where('id', cardId).delete()
    console.log('deleted', deleted)
    ctx.response.body = deleted
  })
}

export {
  createNewCardHandler,
  deleteCardHandler,
  getCardsHandler,
  moveCardHandler,
}
