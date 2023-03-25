import {
  Fs,
  Inversify,
  Logger,
  Oak,
  Postgres,
} from './deps.ts'
import {
  getDirectoryName,
  getModuleName,
} from './meta.ts'
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
  type DbClient,
  PoolOrTxClient,
} from './db/DbClient.ts'
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
const {
  walk,
} = Fs

export type OakHandler = (ctx: Oak.Context) => Promise<void>

// const collectLoggerModules = async (): Promise<string[]> => {
//   const backendDirectoryBasename = getDirectoryName(import.meta.url)
//
//   const ignoreDirs = new Set([
//     'models',
//   ])
//
//   // NOTE: only supports uniqueness on filename, not path and filename
//   const ignoreFiles = new Set([
//     'connection.ts',
//     'container.ts',
//     'deps.ts',
//     'index.ts',
//     'meta.ts',
//     'schema.ts',
//     'types.ts',
//   ])
//
//   const results = [] // TODO: array map this
//   for await (const entry of walk(backendDirectoryBasename)) {
//     if (!entry.isFile || ignoreFiles.has(entry.name)) {
//       continue
//     }
//
//     results.push(getModuleName(entry.path))
//   }
//
//   return results
// }

export const makeContainer = () => {
  const container = new Container()

  container.bind<Logger.LogConfig>(DISymbols.LoggerConfigId).toConstantValue({
    handlers: {
      console: new Logger.handlers.ConsoleHandler('DEBUG'),
    },
    loggers: {
      default: {
        level: 'DEBUG',
        handlers: ['console',],
      },
    },
  })
  container.bind<Postgres.Pool>(DISymbols.DbConnectionPoolId).toConstantValue(pool)
  container.bind<DbClient>(DISymbols.DbClientId).to(PoolOrTxClient)
  container.bind<Inversify.interfaces.Factory<DbClient>>(DISymbols.DbClientFromTxFactoryId)
    .toFactory<DbClient, [Postgres.Transaction]>((_context: Inversify.interfaces.Context) =>
      (tx: Postgres.Transaction) => new PoolOrTxClient(tx))
  container.bind<LaneRepository>(DISymbols.LaneRepositoryId).to(DbLaneRepository)
  container.bind<Inversify.interfaces.Factory<LaneRepository>>(DISymbols.LaneRepositoryFactoryId)
    .toFactory<LaneRepository, [Postgres.Transaction]>((context: Inversify.interfaces.Context) =>
      (tx: Postgres.Transaction) => new DbLaneRepository(context.container.get<(tx: Postgres.Transaction) => DbClient>(DISymbols.DbClientFromTxFactoryId)(tx)))
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
    (ctx: Oak.Context) => createNewLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))

  return container
}