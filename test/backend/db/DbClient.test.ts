import '../../../src/backend/reflect.ts'
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

const bindClientToPool = () => container.rebind<PoolOrTx>(DISymbols.DbConnectionPoolId).toConstantValue(stubPool)

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

  const beforeEach_ = () => {
    stubPool.connect.resolves(stubPoolClient)
    stubPoolClient.createTransaction.returns(stubTransaction)
  }

  const afterEach_ = () => {
    stubPool.connect.resetHistory()
    stubPoolClient.queryObject.resetHistory()
    stubPoolClient.createTransaction.resetHistory()
  }

  beforeAll(() => {
    bindClientToPool()
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

      beforeEach(beforeEach_)

      afterAll(() => {
        container.rebind<PoolOrTx>(DISymbols.DbConnectionPoolId).toConstantValue(stubPool)
      })

      afterEach(afterEach_)

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

    describe('withTransaction', () => {
      const anyTransactionName = 'foo'
      const anyTransactionOptions: Postgres.TransactionOptions = {}
      let client: DbClient

      beforeEach(() => {
        beforeEach_()
        client = container.get<DbClient>(DISymbols.DbClientId)
      })

      afterEach(() => {
        afterEach_()
        bindClientToPool()
      })

      it('should not nest transactions', async () => {
        container.rebind<Postgres.Transaction>(DISymbols.DbConnectionPoolId).toConstantValue(stubTransaction)
        client = container.get<DbClient>(DISymbols.DbClientId)

        try {
          await client.withTransaction(anyTransactionName, anyTransactionOptions, Promise.resolve)
          expect.fail('should have thrown')
        }
        catch (e) {
          expect(e.message).to.match(/transaction/i)
        }
      })

      it('should throw on failure', async () => {
        const anyException = new Error('some failure')

        stubPool.connect.throws(anyException)
        const client = container.get<DbClient>(DISymbols.DbClientId)

        try {
          await client.withTransaction(anyTransactionName, anyTransactionOptions, Promise.resolve)
          expect.fail('should have thrown')
        }
        catch (e) {
          expect(e.message).to.match(/failed/i)
          expect(e.cause.message).to.contain(anyException.message)
        }
      })

      it('should run the transaction', async () => {
        stubTransaction.queryObject.resolves(anyQueryResult as any)

        const result = await client.withTransaction<QueryObjectResponse>(anyTransactionName, anyTransactionOptions, anyCallback)

        expect(result.rows).to.have.lengthOf(1)
        expect(result.rows[0].foo).to.equal(anyCallbackReturnValue)
      })
    })
  })
})
