import '../../../src/backend/reflect.ts'
import {
  afterEach,
  beforeAll,
  describe,
  it,
} from 'bdd'
import { expect } from 'chai'
import { Application } from 'oak'
import * as sinon from 'sinon'
import { superoak } from 'superoak'
import {
  type CreateLaneRequest,
} from '../../../src/shared/handlers/Lanes.ts'
import { type Lane } from '../../../src/shared/models/Lane.ts'
import { makeContainer } from '../../../src/backend/container.ts'
import * as DISymbols from '../../../src/backend/types.ts'
import {
  type LaneRepository,
  DbLaneRepository,
} from '../../../src/backend/db/repository/LaneRepository.ts'

const anyLaneId = 1
const anyLaneName = 'foo'
const anyLaneEnabledStatus = true
const anyLanePrecedence = 3
const anyCreateLaneRequest: CreateLaneRequest = {
  name: anyLaneName,
  precedence: anyLanePrecedence,
}
const anyLane: Lane = {
  laneId: anyLaneId,
  name: anyLaneName,
  enabled: anyLaneEnabledStatus,
  createdAt: new Date(),
  updatedAt: new Date(),
}
const container = makeContainer()
const stubLaneRepo = sinon.createStubInstance(DbLaneRepository)

describe('LanesHandlers', () => {
  beforeAll(() => {
    container.rebind<LaneRepository>(DISymbols.LaneRepositoryId).toConstantValue(stubLaneRepo)

    stubLaneRepo.createLane.resolves(anyLane)
  })

  afterEach(() => {
    stubLaneRepo.createLane.resetHistory()
    stubLaneRepo.doesLaneExist.resetHistory()
    stubLaneRepo.isLaneDisabled.resetHistory()
    stubLaneRepo.getAllLanes.resetHistory()
    stubLaneRepo.setLaneEnableStatus.resetHistory()
    stubLaneRepo.deleteLane.resetHistory()
  })

  it('should create a lane', async () => {

    const app = await superoak(container.get<Application>(DISymbols.ApplicationId))
    await app.post('/api/lane')
      .set('content-type', 'application/json')
      .send(JSON.stringify(anyCreateLaneRequest))
      .expect(200)
    app.unsubscribe

    expect(stubLaneRepo.createLane.called).to.be.true
  })
})
