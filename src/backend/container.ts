import { asynciter } from 'asynciter'
import {
  Container,
  type interfaces,
} from 'inversify'
import { walk } from 'fs'
import * as Logger from 'logger'
import * as Oak from 'oak'
import * as Postgres from 'postgres'
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
  appHandler,
  createNewCardHandler,
  createNewLaneHandler,
  cssHandler,
  deleteCardHandler,
  deleteLaneHandler,
  disableLaneHandler,
  enableLaneHandler,
  getCardsHandler,
  getLanesHandler,
  jsBundleHandler,
  moveCardHandler,
} from './handlers/index.ts'

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
  container.bind<interfaces.Factory<DbClient>>(DISymbols.DbClientFromTxFactoryId)
    .toFactory<DbClient, [Postgres.Transaction]>((_context: interfaces.Context) =>
      (tx: Postgres.Transaction) => new PoolOrTxClient(tx))
  container.bind<LaneRepository>(DISymbols.LaneRepositoryId).to(DbLaneRepository)
  container.bind<interfaces.Factory<LaneRepository>>(DISymbols.LaneRepositoryFactoryId)
    .toFactory<LaneRepository, [Postgres.Transaction]>((context: interfaces.Context) =>
      (tx: Postgres.Transaction) => new DbLaneRepository(context.container.get<(tx: Postgres.Transaction) => DbClient>(DISymbols.DbClientFromTxFactoryId)(tx)))
  container.bind<CardRepository>(DISymbols.CardRepositoryId).to(DbCardRepository)
  container.bind<OakHandler>(DISymbols.GetCardsHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => getCardsHandler(context.container.get(DISymbols.CardRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.CreateNewCardHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => createNewCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.MoveCardHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => moveCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.DeleteCardHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => deleteCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.GetLanesHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => getLanesHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.CreateLaneHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => createNewLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.DisableLaneHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => disableLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.EnableLaneHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => enableLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.DeleteLaneHandlerId).toDynamicValue((context: interfaces.Context) =>
    (ctx: Oak.Context) => deleteLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx))
  container.bind<OakHandler>(DISymbols.CSSHandlerId).toFunction(cssHandler)
  container.bind<OakHandler>(DISymbols.JSBundleHandlerId).toFunction(jsBundleHandler)
  container.bind<OakHandler>(DISymbols.AppHandlerId).toFunction(appHandler)

  return container
}
