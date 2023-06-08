import { Reflect } from 'reflect'
Reflect.getMetadata('foo', {}) // dummy call to keep reflect imported
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'bdd'
import { expect } from 'chai'
import * as Postgres from 'postgres'
import * as sinon from 'sinon'
import { makeContainer } from '../../../src/backend/container.ts'
import * as DISymbols from '../../../src/backend/types.ts'
import {
  DbClient,
  PoolOrTx,
} from '../../../src/backend/db/DbClient.ts'

const container = makeContainer()
const stubPool = sinon.createStubInstance(Postgres.Pool)
const stubPoolClient = sinon.createStubInstance(Postgres.PoolClient)

interface AnyQueryResult {
  foo: string
}

interface QueryObjectResponse {
  rows: AnyQueryResult[]
}

describe('DbClient', () => {
  beforeAll(() => {
    container.rebind<PoolOrTx>(DISymbols.DbConnectionPoolId).toConstantValue(stubPool)
  })

  beforeEach(() => {
    stubPool.connect.resolves(stubPoolClient)
  })

  afterEach(() => {
    stubPool.connect.resetHistory()
    stubPoolClient.queryObject.resetHistory()
  })

  it('should run the callback on query success', async () => {
    const anyCallbackReturnValue = 'foo'
    const anyQueryResult: QueryObjectResponse = {
      rows: [{ foo: anyCallbackReturnValue }],
    }

    stubPoolClient.queryObject.resolves(anyQueryResult as any)

    const anyCallback = async (client: Postgres.PoolClient) => await client.queryObject('select count(1) from any_table') as QueryObjectResponse

    const client = container.get<DbClient>(DISymbols.DbClientId)

    const result = await client.queryWithPool<QueryObjectResponse>(anyCallback)

    expect(result.rows).to.have.lengthOf(1)
    expect(result.rows[0].foo).to.equal(anyCallbackReturnValue)
  })
})
