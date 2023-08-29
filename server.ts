import './src/backend/reflect.ts'
import {
  setup as loggerSetup,
  LogConfig,
} from 'logger'
import {
  Application,
} from 'oak'
import {
  makeContainer,
} from './src/backend/container.ts'
import * as DISymbols from './src/backend/types.ts'

const container = makeContainer()

loggerSetup(await container.getAsync<LogConfig>(DISymbols.LoggerConfigId))

const app = container.get<Application>(DISymbols.ApplicationId)
await app.listen({ port: 8000 })
