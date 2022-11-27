import { Application } from './src/deps.ts'

const app = new Application()

app.use((ctx) => {
  ctx.response.body = 'Hello World!'
})

await app.listen({ port: 8000 })
console.log('running on port 8000')
