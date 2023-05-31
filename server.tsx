import { Reflect } from 'reflect'
Reflect.getMetadata('foo', {}) // dummy call to keep reflect imported
import * as ESBuild from 'esbuild'
import * as ESBuildDenoLoader from 'esbuild-deno-loader'
import {
  setup as loggerSetup,
  LogConfig,
} from 'logger'
import * as Mustache from 'mustache'
import {
  resolve,
  toFileUrl,
} from 'path'
import React from 'react'
import { renderToString } from 'react-dom-server'
import {
  Application,
  Router,
} from 'oak'
import { App } from './src/frontend/App.tsx'
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

router.get('/', async (ctx) => {
  const reactSSRApp = renderToString(<App />)
  const content = await Mustache.renderFile('./public/index.html.mustache', { reactApp: reactSSRApp })
  ctx.response.headers.set('Content-Type', 'text/html')

  ctx.response.body = content
})

router.get('/static/app.css', container.get<OakHandler>(DISymbols.CSSHandlerId))

router.get('/static/app.js', async (ctx) => {

  const built = await ESBuild.build({
    entryPoints: ['./src/frontend/index.tsx'],
    format: 'iife',
    treeShaking: true,
    target: ['es2020', 'firefox107', 'chrome107'],
    platform: 'browser',
    logLevel: 'warning',
    tsconfig: './tsconfig.json',
    write: false,
    bundle: true,
    loader: { '.tsx': 'tsx' },
    plugins: [
      ESBuildDenoLoader.denoPlugin({
        // TODO: detect import-map being used in run.sh and use the same one here
        importMapURL: toFileUrl(resolve('./test-import-map.json')),
      })
    ],
  })

  ctx.response.headers.set('Content-Type', 'text/javascript')
  ctx.response.body = built.outputFiles[0].contents
})

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
