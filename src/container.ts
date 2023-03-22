import {
  Inversify,
  Postgres,
} from './deps-backend.ts'
import { pool } from './db/connection.ts'
import * as DISymbols from './types.ts'
import {
  DbLaneRepository,
  LaneRepository
} from './db/repository/LaneRepository.ts'
import {
  DbCardRepository,
  CardRepository
} from './db/repository/CardRepository.ts'

const {
  Container,
} = Inversify

export const makeContainer = () => {
  const container = new Container()

  container.bind<Postgres.Pool>(DISymbols.DbConnectionPoolId).toConstantValue(pool)
  container.bind<LaneRepository>(DISymbols.LaneRepositoryId).to(DbLaneRepository)
  container.bind<Inversify.interfaces.Factory<LaneRepository>>(DISymbols.LaneRepositoryFactory)
    .toFactory<LaneRepository, [Postgres.Transaction]>((_context: Inversify.interfaces.Context) =>
      (tx: Postgres.Transaction) => new DbLaneRepository(tx))
  container.bind<CardRepository>(DISymbols.CardRepository).to(DbCardRepository)

  return container
}
