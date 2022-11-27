import {
  Oak,
  ReactDOMServer,
  Mustache,
} from './src/deps.ts'
import { App } from './src/ssr/App.tsx'
const { Application, Router } = Oak
const { renderToString } = ReactDOMServer

const app = new Application()

const router = new Router()

router.get('/', (ctx) => {
  const reactSSRApp = renderToString(<App />)
  ctx.response.body = Mustache.renderFile('./public/index.html.mustache', { reactApp: reactSSRApp })
})

app.use(router.routes())
app.use(router.allowedMethods())

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
  console.log(`Listening on http://localhost:8000`);
})

await app.listen({ port: 8000 })
