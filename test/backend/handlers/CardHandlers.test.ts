import { Reflect } from 'reflect'
Reflect.getMetadata('foo', {}) // dummy call to keep reflect imported
import {
  beforeAll,
  describe,
  it,
} from 'bdd'
import { Application } from 'oak'
import * as sinon from 'sinon'
import { superoak } from 'superoak'
import { type CreateCardRequest } from '../../../src/shared/handlers/Cards.ts'
import { type Card } from '../../../src/shared/models/index.ts'
import { makeContainer } from '../../../src/backend/container.ts'
import * as DISymbols from '../../../src/backend/types.ts'
import {
  type CardRepository,
  DbCardRepository,
} from '../../../src/backend/db/repository/CardRepository.ts'

const anyLaneId = 1
const anyCreateCardRequest: CreateCardRequest = {
  title: 'foo',
  description: 'bar',
  laneId: anyLaneId,
}
const anyCard: Card = {
  id: 2,
  title: anyCreateCardRequest.title,
  description: anyCreateCardRequest.description,
  laneId: anyLaneId,
  createdAt: new Date(),
  updatedAt: new Date(),
}
const container = makeContainer()
const stubCardRepo = sinon.createStubInstance(DbCardRepository, {
  // TODO: utility type this, very brittle
  createCard: sinon.stub<[title: string, description: string, laneId: string | number], Promise<Card>>().resolves(anyCard),
})

describe('CardHandlers', () => {
  beforeAll(() => {
    container.rebind<CardRepository>(DISymbols.CardRepositoryId).toConstantValue(stubCardRepo)
  })

  it('should create a card', async () => {

    const app = await superoak(container.get<Application>(DISymbols.ApplicationId))
    await app.post('/api/card')
      .set('content-type', 'application/json')
      .send(JSON.stringify(anyCard))
      .expect(200)
  })
})
