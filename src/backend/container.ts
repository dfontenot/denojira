import {
  Asynciter,
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
  deleteLaneHandler,
  disableLaneHandler,
  enableLaneHandler,
  getCardsHandler,
  getLanesHandler,
  moveCardHandler,
} from './handlers/index.ts'

const {
  asynciter,
} = Asynciter
const {
  Container,
} = Inversify
const {
  walk,
} = Fs

export type OakHandler = (ctx: Oak.Context) => Promise<void>

const defaultLogLevel = 'DEBUG'

const collectLoggerModules = async (): Promise<Record<string, Logger.LoggerConfig>> => {
  const backendDirectoryBasename = getDirectoryName(import.meta.url)

  const ignore = [
    /connection.ts$/,
    /container.ts$/,
    /deps.ts$/,
    /index.ts$/,
    /meta.ts$/,
    /models/,
    /schema.ts$/,
    /types.ts$/,
  ]

  return await asynciter(walk(backendDirectoryBasename, { includeDirs: false, exts: ['ts'], skip: ignore }))
    .reduce({}, (acc, entry) => ({...acc, [getModuleName(entry.path)]: { level: defaultLogLevel, handlers: ['console',], }}))
}

export const makeContainer = () => {
  const container = new Container()

  container.bind<Logger.LogConfig>(DISymbols.LoggerConfigId).toDynamicValue(async () => ({
    handlers: {
      console: new Logger.handlers.ConsoleHandler('DEBUG'),
    },
    loggers: {
      default: {
        level: defaultLogLevel,
        handlers: ['console',],
      },
      server: { // the logger for anything in server.tsx
        level: defaultLogLevel,
        handlers: ['console',],
      },
      ...(await collectLoggerModules())
    },
  }))
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
  container.bind<OakHandler>(DISymbols.DisableLaneHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => disableLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.EnableLaneHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => enableLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.DeleteLaneHandlerId).toDynamicValue((context: Inversify.interfaces.Context) =>
    (ctx: Oak.Context) => deleteLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))

  return container
}
