import './src/backend/reflect.ts'
import { LogConfig, setup as loggerSetup } from 'logger'
import { AbortController, Application } from 'oak'
import { makeContainer } from './src/backend/container.ts'
import * as DISymbols from './src/backend/types.ts'

const container = makeContainer()

loggerSetup(await container.getAsync<LogConfig>(DISymbols.LoggerConfigId))

const app = container.get<Application>(DISymbols.ApplicationId)
const abortController = container.get<AbortController>(DISymbols.AbortControllerId)
await app.listen({ port: 8000, signal: abortController.signal })
