#!/usr/bin/env -S deno run --allow-net --allow-read --allow-env

import { Postgres } from '../src/deps-backend.ts'
import {
  cardsCreateTableQuery,
  lanesCreateTableQuery,
} from '../src/db/schema.ts'

(async() => {
  console.log(`will run ${lanesCreateTableQuery.toString()}`)
  console.log(`will run ${cardsCreateTableQuery.toString()}`)

  const client = new Postgres.Client({
    hostname: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'denojira',
  })

  await client.connect()

  console.log('create lanes result', await client.queryObject(lanesCreateTableQuery.toString()))
  console.log('create cards result', await client.queryObject(cardsCreateTableQuery.toString()))

  await client.end()
})()
