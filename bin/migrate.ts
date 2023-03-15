#!/usr/bin/env -S deno run --allow-net --allow-read --allow-env

import {
  cardsCreateTableQuery,
  lanesCreateTableQuery,
} from '../src/db/schema.ts'
import { client } from '../src/db/connection.ts'

(async() => {
  console.log(`will run ${lanesCreateTableQuery.toString()}`)
  console.log(`will run ${cardsCreateTableQuery.toString()}`)

  await client.connect()

  console.log('create lanes result', await client.queryObject(lanesCreateTableQuery.toString()))
  console.log('create cards result', await client.queryObject(cardsCreateTableQuery.toString()))

  await client.end()
})()
