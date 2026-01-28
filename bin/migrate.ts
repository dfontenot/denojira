#!/usr/bin/env -S deno run --allow-net --allow-read --allow-env

import { allQueryStrings } from '../src/backend/db/schema.ts'
import { makeClient } from '../src/backend/db/connection.ts'
;(async () => {
  const client = makeClient()

  console.log(`will run ${allQueryStrings}`)

  await client.connect()

  console.log(
    'query result',
    await client.queryObject(allQueryStrings),
  )

  await client.end()
})()
