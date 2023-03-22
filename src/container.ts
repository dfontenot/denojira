import {
  Inversify,
  Oak,
  Postgres,
} from './deps-backend.ts'
import { pool } from './db/connection.ts'
import * as DISymbols from './types.ts'
import {
  DbLaneRepository,
  LaneRepository
} from './db/repository/LaneRepository.ts'
import {
  DbCardRepository,
  CardRepository
} from './db/repository/CardRepository.ts'
import {
  createNewCardHandler,
  createNewLaneHandler,
  deleteCardHandler,
  getCardsHandler,
  getLanesHandler,
  moveCardHandler,
} from './handlers/index.ts'

const {
  Container,
} = Inversify

type OakHandler = (ctx: Oak.Context) => Promise<void>

export const makeContainer = () => {
  const container = new Container()

  container.bind<Postgres.Pool>(DISymbols.DbConnectionPoolId).toConstantValue(pool)
  container.bind<LaneRepository>(DISymbols.LaneRepositoryId).to(DbLaneRepository)
  container.bind<Inversify.interfaces.Factory<LaneRepository>>(DISymbols.LaneRepositoryFactoryId)
    .toFactory<LaneRepository, [Postgres.Transaction]>((_context: Inversify.interfaces.Context) =>
      (tx: Postgres.Transaction) => new DbLaneRepository(tx))
  container.bind<CardRepository>(DISymbols.CardRepositoryId).to(DbCardRepository)
  container.bind<OakHandler>(DISymbols.GetCardsHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => getCardsHandler(context.container.get(DISymbols.CardRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.CreateNewCardHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => createNewCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.MoveCardHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => moveCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.DeleteCardHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => deleteCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.GetLanesHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => getLanesHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.CreateLaneHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => createNewCardHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))

  return container
}
