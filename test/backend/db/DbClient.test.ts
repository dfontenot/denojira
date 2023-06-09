import { Reflect } from 'reflect'
Reflect.getMetadata('foo', {}) // dummy call to keep reflect imported
import {
afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'bdd'
import { expect } from 'chai'
import {
  assertSpyCallAsync,
  resolvesNext,
  stub,
  type Stub,
} from 'mock'
import * as Postgres from 'postgres'
import * as sinon from 'sinon'
import { makeContainer } from '../../../src/backend/container.ts'
import * as DISymbols from '../../../src/backend/types.ts'
import {
  DbClient,
  PoolOrTx,
  PoolClientOrTx,
} from '../../../src/backend/db/DbClient.ts'

const container = makeContainer()
const stubPool = sinon.createStubInstance(Postgres.Pool)
const stubPoolClient = sinon.createStubInstance(Postgres.PoolClient)
const stubTransaction = sinon.createStubInstance(Postgres.Transaction)

interface AnyQueryResult {
  foo: string
}

interface QueryObjectResponse {
  rows: AnyQueryResult[]
}

describe('DbClient', () => {
  const anyCallbackReturnValue = 'foo'
  const anyQueryResult: QueryObjectResponse = {
    rows: [{ foo: anyCallbackReturnValue }],
  }
  const anyCallback = async (client: PoolClientOrTx) => await client.queryObject('select count(1) from any_table') as QueryObjectResponse

  const beforeEach_ = () => { stubPool.connect.resolves(stubPoolClient) }
  const afterEach_ = () => {
    stubPool.connect.resetHistory()
    stubPoolClient.queryObject.resetHistory()
  }

  beforeAll(() => {
    container.rebind<PoolOrTx>(DISymbols.DbConnectionPoolId).toConstantValue(stubPool)
  })

  describe('queryWithPool', () => {
    beforeEach(beforeEach_)
    afterEach(afterEach_)

    it('should run the callback on success', async () => {
      stubPoolClient.queryObject.resolves(anyQueryResult as any)

      const client = container.get<DbClient>(DISymbols.DbClientId)

      const result = await client.queryWithPool<QueryObjectResponse>(anyCallback)

      expect(result.rows).to.have.lengthOf(1)
      expect(result.rows[0].foo).to.equal(anyCallbackReturnValue)
    })

    it('should throw on failure', async () => {
      const anyException = new Error('some failure')

      stubPool.connect.throws(anyException)
      const client = container.get<DbClient>(DISymbols.DbClientId)

      try {
        await client.queryWithPool(Promise.resolve)
        expect.fail('should have thrown')
      }
      catch (e) {
        expect(e.message).to.contain(anyException.message)
      }
    })
  })

  describe('queryWithClient', () => {
    let client: DbClient
    let queryWithPoolStub: Stub<DbClient>

    beforeEach(() => {
      beforeEach_()
      client = container.get<DbClient>(DISymbols.DbClientId)
      queryWithPoolStub = stub(client, 'queryWithPool', resolvesNext([anyQueryResult]))
    })

    afterEach(() => {
      afterEach_()
      queryWithPoolStub.restore()
    })

    it('should delegate if not a transaction', async () => {
      const result = await client.queryWithClient(Promise.resolve)

      expect(result).to.deep.equal(anyQueryResult)
      assertSpyCallAsync(queryWithPoolStub, 0, { args: [Promise.resolve] })
    })

    describe('queryWithClient on transaction', () => {

      beforeAll(() => {
        container.rebind<PoolOrTx>(DISymbols.DbConnectionPoolId).toConstantValue(stubTransaction)
      })

      afterAll(() => {
        container.rebind<PoolOrTx>(DISymbols.DbConnectionPoolId).toConstantValue(stubPool)
      })

      it('should run the transaction', async () => {
        stubTransaction.queryObject.resolves(anyQueryResult as any)

        const result = await client.queryWithClient<QueryObjectResponse>(anyCallback)

        expect(result.rows).to.have.lengthOf(1)
        expect(result.rows[0].foo).to.equal(anyCallbackReturnValue)
      })

      it('should capture callback errors', async () => {
        const anyError = new Error('a failure')

        try {
          await client.queryWithClient<void>((_client => Promise.reject(anyError)))
          expect.fail('should have thrown')
        }
        catch (e) {
          expect(e.message).to.contain(anyError.message)
        }
      })
    })
  })
})
