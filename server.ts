import { Reflect } from 'reflect'
Reflect.getMetadata('foo', {}) // dummy call to keep reflect imported
import {
  setup as loggerSetup,
  LogConfig,
} from 'logger'
import {
  Application,
  Router,
} from 'oak'
import {
  makeContainer,
  type OakHandler,
} from './src/backend/container.ts'
import * as DISymbols from './src/backend/types.ts'

const container = makeContainer()

loggerSetup(await container.getAsync<LogConfig>(DISymbols.LoggerConfigId))

// TODO: move into inversify container
const app = new Application()
const router = new Router()

router.get('/', container.get<OakHandler>(DISymbols.AppHandlerId))

router.get('/static/app.css', container.get<OakHandler>(DISymbols.CSSHandlerId))
router.get('/static/app.js', container.get<OakHandler>(DISymbols.JSBundleHandlerId))

router.get('/api/lanes', container.get<OakHandler>(DISymbols.GetLanesHandlerId))
router.put('/api/lane/:laneId/disable', container.get<OakHandler>(DISymbols.DisableLaneHandlerId))
router.put('/api/lane/:laneId/enable', container.get<OakHandler>(DISymbols.EnableLaneHandlerId))
router.post('/api/lane', container.get<OakHandler>(DISymbols.CreateLaneHandlerId))
router.delete('/api/lane/:laneId', container.get<OakHandler>(DISymbols.DeleteLaneHandlerId))

router.get('/api/cards', container.get<OakHandler>(DISymbols.GetCardsHandlerId))
router.post('/api/card', container.get<OakHandler>(DISymbols.CreateNewCardHandlerId))
router.put('/api/card/lane', container.get<OakHandler>(DISymbols.MoveCardHandlerId))
router.delete('/api/card/:cardId', container.get<OakHandler>(DISymbols.DeleteCardHandlerId))

// Logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.headers.get('X-Response-Time')
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
})

// TODO: https://deno.land/x/oak-middleware/mod.ts doesn't work anymore?
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.response.headers.set('X-Response-Time', `${ms}ms`)
})

app.addEventListener('listen', () => {
  console.log('Listening on http://localhost:8000');
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 8000 })
