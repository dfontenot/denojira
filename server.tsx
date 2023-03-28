import {
  Asynciter,
  ESBuild,
  ESBuildDenoLoader,
  Fs,
  Logger,
  Mustache,
  Oak,
  Path,
  WindiCSSLib,
  WindiCSSParser,
} from './src/backend/deps.ts'
import {
  React,
  ReactDOMServer,
} from './src/frontend/deps.ts'
import { App } from './src/frontend/App.tsx'
import {
  makeContainer,
  type OakHandler,
} from './src/backend/container.ts'
import { getDirectoryName } from './src/backend/meta.ts'
import * as DISymbols from './src/backend/types.ts'
const {
  Application,
  Router,
  send,
} = Oak
const {
  asynciter,
} = Asynciter
const {
  Processor,
} = WindiCSSLib
const {
  HTMLParser,
} = WindiCSSParser
const {
  walk,
} = Fs
const {
  join,
} = Path
const {
  renderToString,
} = ReactDOMServer
const {
  getLogger,
} = Logger

const container = makeContainer()

Logger.setup(await container.getAsync<Logger.LogConfig>(DISymbols.LoggerConfigId))

// TODO: move into inversify container
const app = new Application()
const router = new Router()

router.get('/', async (ctx) => {
  const reactSSRApp = renderToString(<App />)
  const content = await Mustache.renderFile('./public/index.html.mustache', { reactApp: reactSSRApp })
  ctx.response.headers.set('Content-Type', 'text/html')

  ctx.response.body = content
})

// router.get('/old/static/app.js', async (ctx) => {
//   // NOTE: choosing to manually bundle each time in dev for reloadability TODO: caching settings
//   // TODO: bundle is really slow, ~2 seconds locally, will probably need a new solution
//   const appUrl = Path.toFileUrl(Path.resolve('./src/frontend/App.tsx'))
//   const { code } = await DenoEmit.bundle(appUrl)
//
//   ctx.response.headers.set('Content-Type', 'text/javascript')
//   ctx.response.body = code
// })

router.get('/static/app.css', async (ctx) => {

  const logger = getLogger('server')

  // NOTE: assumes that all mentions of stylesheets in code occur in App.tsx or a components
  const backendDirectoryBasename = join(getDirectoryName(import.meta.url), 'src', 'frontend')
  const tsxText = await asynciter(walk(backendDirectoryBasename, { includeDirs: false, exts: ['.tsx'], match: [/components.*index/, /App/] }))
    .concurrentUnorderedMap(async (entry) => { logger.debug(`reading file for windicss ${entry.path}`); return await Deno.readTextFile(entry.path) })
    .reduce('', (acc, item) => acc + item)

  const processor = new Processor()
  const htmlClasses = new HTMLParser(tsxText).parseClasses().map((i) => i.result).join(' ')
  logger.debug(`encountered CSS classes ${htmlClasses}`)
  const preflight = processor.preflight(tsxText)

  const interpreted = processor.interpret(htmlClasses).styleSheet
  const styles = interpreted.extend(preflight, false).build(false)

  ctx.response.headers.set('Content-Type', 'text/css')
  ctx.response.body = styles
})

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
      ESBuildDenoLoader.denoPlugin(),
    ],
  })

  ctx.response.headers.set('Content-Type', 'text/javascript')
  ctx.response.body = built.outputFiles[0].contents
})

router.get('/api/lanes', container.get<OakHandler>(DISymbols.GetLanesHandlerId))
router.put('/api/lane/:laneId/disable', container.get<OakHandler>(DISymbols.DisableLaneHandlerId))
router.put('/api/lane/:laneId/enable', container.get<OakHandler>(DISymbols.EnableLaneHandlerId))
router.post('/api/lane', container.get<OakHandler>(DISymbols.CreateLaneHandlerId))

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
