import {
  DenoEmit,
  ESBuild,
  ESBuildDenoLoader,
  Mustache,
  Path,
  Oak,
} from './src/deps-backend.ts'
import {
  React,
  ReactDOMServer,
} from './src/deps-frontend.ts'
import { App } from './src/frontend/App.tsx'
import {
  createNewCardHandler,
  createNewLaneHandler,
  getCardsHandler,
  getLanesHandler,
  moveCardHandler,
} from './src/handlers/index.ts'
import db, { linkModels } from './src/db/db.ts'
const {
  Application,
  Router,
  send } = Oak
const { renderToString } = ReactDOMServer

const app = new Application()

const router = new Router()

// only want to call this if stuff actually changes
// (if using FKs, this call will still try to redeclare them which postgres does not like)
// see: https://github.com/eveningkid/denodb/issues/101
//await db.sync()
linkModels()

router.get('/', async (ctx) => {
  const reactSSRApp = renderToString(<App />)
  const content = await Mustache.renderFile('./public/index.html.mustache', { reactApp: reactSSRApp })
  ctx.response.headers.set('Content-Type', 'text/html')

  ctx.response.body = content
})

router.get('/old/static/app.js', async (ctx) => {
  // NOTE: choosing to manually bundle each time in dev for reloadability TODO: caching settings
  // TODO: bundle is really slow, ~2 seconds locally, will probably need a new solution
  const appUrl = Path.toFileUrl(Path.resolve('./src/frontend/App.tsx'))
  const { code } = await DenoEmit.bundle(appUrl)

  ctx.response.headers.set('Content-Type', 'text/javascript')
  ctx.response.body = code
})

router.get('/static/app.css', async (ctx) => {
  await send(ctx, './public/css/app.css')
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

router.get('/api/lanes', getLanesHandler)
router.post('/api/lane', createNewLaneHandler)

router.get('/api/cards', getCardsHandler)
router.post('/api/card', createNewCardHandler)
router.put('/api/card/lane', moveCardHandler)

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
