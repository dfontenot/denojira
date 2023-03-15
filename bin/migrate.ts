#!/usr/bin/env -S deno run --allow-net --allow-read

import { Dexecutor } from '../src/deps-backend.ts'
import {
  cardsCreateTableQuery,
  lanesCreateTableQuery,
} from '../src/db/schema.ts'


(async() => {
  console.log(Dexecutor)
  console.log(`will run ${lanesCreateTableQuery.toString()}`)
  console.log(`will run ${cardsCreateTableQuery.toString()}`)

  console.log(Dexecutor)
  const dexecutor = new Dexecutor({
    client: 'postgres',
    connection: {
      host: 'localhost',
      username: 'postgres',
      password: 'password',
      database: 'denojira',
    }
  })

  await dexecutor.connect()

  await dexecutor.execute(lanesCreateTableQuery.toString())
  await dexecutor.execute(cardsCreateTableQuery.toString())

  await dexecutor.close()
})()
