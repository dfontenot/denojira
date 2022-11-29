import {
  DenoEmit,
  ESBuild,
  Mustache,
  Path,
  Oak,
  React,
  ReactDOMServer,
} from './src/deps.ts'
import { App } from './src/ssr/App.tsx'
import {
  createNewLaneHandler,
  getLanesHandler,
} from './src/handlers/LanesHandlers.ts'
import db from './src/db.ts'
const { Application, Router } = Oak
const { renderToString } = ReactDOMServer

const app = new Application()

const router = new Router()

await db.sync({ drop: true })

router.get('/', async (ctx) => {
  const reactSSRApp = renderToString(<App />)
  const content = await Mustache.renderFile('./public/index.html.mustache', { reactApp: reactSSRApp })
  ctx.response.headers.set('Content-Type', 'text/html')

  ctx.response.body = content
})

router.get('/old/static/app.js', async (ctx) => {
  // NOTE: choosing to manually bundle each time in dev for reloadability TODO: caching settings
  // TODO: bundle is really slow, ~2 seconds locally, will probably need a new solution
  const appUrl = Path.toFileUrl(Path.resolve('./src/ssr/App.tsx'))
  const { code } = await DenoEmit.bundle(appUrl)

  ctx.response.headers.set('Content-Type', 'text/javascript')
  ctx.response.body = code
})

router.get('/static/app.js', async (ctx) => {
  const transformed = await ESBuild.transform(
    await Deno.readFile('./src/ssr/App.tsx'),
    {
      loader: 'tsx',
      minify: true,
      minifySyntax: true,
      sourcefile: './src/ssr/App.tsx',
      target: ['es2020', 'firefox107', 'chrome107'],
      treeShaking: true,
      tsconfigRaw: await Deno.readFile('./tsconfig.json'),
    } as ESBuild.TransformOptions)

  transformed.warnings.forEach((warning) => console.log('caught esbuild transform warning', warning))
  // const foo = await ESBuild.build({
  //   entryPoints: ['./src/ssr/App.tsx'],
  //   bundle: true,
  //   plugins: [],
  // })

  ctx.response.headers.set('Content-Type', 'text/javascript')
  ctx.response.body = transformed.code
})

router.get('/api/lanes', getLanesHandler)
router.post('/api/lane', createNewLaneHandler)

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
