import { asynciter } from 'asynciter'
import { Container, type interfaces } from 'inversify'
import { walk } from 'fs'
import * as Logger from 'logger'
import { Application, Context, Middleware, Router } from 'oak'
import * as Postgres from 'postgres'
import { getDirectoryName, getModuleName } from './meta.ts'
import { makePool } from './db/connection.ts'
import * as DISymbols from './types.ts'
import { DbLaneRepository, LaneRepository } from './db/repository/LaneRepository.ts'
import { CardRepository, DbCardRepository } from './db/repository/CardRepository.ts'
import { type DbClient, PoolOrTxClient } from './db/DbClient.ts'
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

export type OakHandler = (ctx: Context) => Promise<void>
export type OakMiddleware = Middleware<Record<string, any>, Context<Record<string, any>, Record<string, any>>>

const defaultLogLevel = 'DEBUG'

let abortController: AbortController | null = null

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
    .reduce(
      {},
      (acc, entry) => ({ ...acc, [getModuleName(entry.path)]: { level: defaultLogLevel, handlers: ['console'] } }),
    )
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
        handlers: ['console'],
      },
      server: { // the logger for anything in server.tsx
        level: defaultLogLevel,
        handlers: ['console'],
      },
      ...(await collectLoggerModules()),
    },
  }))

  container.bind<Postgres.Pool>(DISymbols.DbConnectionPoolId).toDynamicValue((_context: interfaces.Context) =>
    makePool()
  ).inSingletonScope()

  container.bind<DbClient>(DISymbols.DbClientId).to(PoolOrTxClient)

  container.bind<interfaces.Factory<DbClient>>(DISymbols.DbClientFromTxFactoryId)
    .toFactory<DbClient, [Postgres.Transaction]>((_context: interfaces.Context) => (tx: Postgres.Transaction) =>
      new PoolOrTxClient(tx)
    )

  container.bind<LaneRepository>(DISymbols.LaneRepositoryId).to(DbLaneRepository)

  container.bind<interfaces.Factory<LaneRepository>>(DISymbols.LaneRepositoryFactoryId)
    .toFactory<LaneRepository, [Postgres.Transaction]>((context: interfaces.Context) => (tx: Postgres.Transaction) =>
      new DbLaneRepository(
        context.container.get<(tx: Postgres.Transaction) => DbClient>(DISymbols.DbClientFromTxFactoryId)(tx),
      )
    )

  container.bind<CardRepository>(DISymbols.CardRepositoryId).to(DbCardRepository)

  container.bind<OakHandler>(DISymbols.GetCardsHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      getCardsHandler(context.container.get(DISymbols.CardRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.CreateNewCardHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      createNewCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.MoveCardHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      moveCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.DeleteCardHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      deleteCardHandler(context.container.get(DISymbols.CardRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.GetLanesHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      getLanesHandler(context.container.get(DISymbols.LaneRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.CreateLaneHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      createNewLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.DisableLaneHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      disableLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.EnableLaneHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      enableLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.DeleteLaneHandlerId).toDynamicValue(
    (context: interfaces.Context) => (ctx: Context) =>
      deleteLaneHandler(context.container.get(DISymbols.LaneRepositoryId), ctx),
  )

  container.bind<OakHandler>(DISymbols.CSSHandlerId).toFunction(cssHandler)

  container.bind<OakHandler>(DISymbols.JSBundleHandlerId).toFunction(jsBundleHandler)

  container.bind<OakHandler>(DISymbols.AppHandlerId).toFunction(appHandler)

  container.bind<Router>(DISymbols.RouterId).toDynamicValue((context: interfaces.Context) => {
    const router = new Router()

    router.get('/', context.container.get<OakHandler>(DISymbols.AppHandlerId))

    router.get('/static/app.css', context.container.get<OakHandler>(DISymbols.CSSHandlerId))
    router.get('/static/app.js', context.container.get<OakHandler>(DISymbols.JSBundleHandlerId))

    router.get('/api/lanes', context.container.get<OakHandler>(DISymbols.GetLanesHandlerId))
    router.put('/api/lane/:laneId/disable', context.container.get<OakHandler>(DISymbols.DisableLaneHandlerId))
    router.put('/api/lane/:laneId/enable', context.container.get<OakHandler>(DISymbols.EnableLaneHandlerId))
    router.post('/api/lane', context.container.get<OakHandler>(DISymbols.CreateLaneHandlerId))
    router.delete('/api/lane/:laneId', context.container.get<OakHandler>(DISymbols.DeleteLaneHandlerId))

    router.get('/api/cards', context.container.get<OakHandler>(DISymbols.GetCardsHandlerId))
    router.post('/api/card', context.container.get<OakHandler>(DISymbols.CreateNewCardHandlerId))
    router.put('/api/card/lane', context.container.get<OakHandler>(DISymbols.MoveCardHandlerId))
    router.delete('/api/card/:cardId', context.container.get<OakHandler>(DISymbols.DeleteCardHandlerId))

    return router
  })

  container.bind<OakMiddleware[]>(DISymbols.ApplicationMiddlewareId).toConstantValue([
    async (ctx, next) => {
      await next()
      const rt = ctx.response.headers.get('X-Response-Time')
      console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
    },
    async (ctx, next) => {
      const start = Date.now()
      await next()
      const ms = Date.now() - start
      ctx.response.headers.set('X-Response-Time', `${ms}ms`)
    },
  ])

  /** NOTE: has side effects of registering SIGTERM and SIGINT */
  container.bind<AbortController>(DISymbols.AbortController).toDynamicValue((context: interfaces.Context) => {
    if (abortController != null) {
      return abortController
    }

    abortController = new AbortController()

    Deno.addSignalListener('SIGTERM', () => {
      console.log('Aborting for SIGTERM')
      controller.abort()
    })

    Deno.addSignalListener('SIGINT', () => {
      console.log('Aborting for SIGINT')
      controller.abort()
    })

    return abortController
  })

  container.bind<Application>(DISymbols.ApplicationId).toDynamicValue((context: interfaces.Context) => {
    const app = new Application()

    const router = context.container.get<Router>(DISymbols.RouterId)
    const middleware = context.container.get<OakMiddleware[]>(DISymbols.ApplicationMiddlewareId)

    middleware.forEach((middleware) => app.use(middleware)) // TODO: use apply()

    app.addEventListener('listen', () => {
      console.log('Listening on http://localhost:8000')
    })

    app.use(router.routes())
    app.use(router.allowedMethods())

    return app
  })

  return container
}
