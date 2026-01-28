import Dex from 'dex'

const dex = Dex({ client: 'postgres' })

// deno-lint-ignore-file no-explicit-any
export const lanesCreateTableQuery = dex.schema.createTable('lanes', (table) => {
  table.increments('id').primary()
  table.string('name', 256)
  table.integer('precedence').unique()
  table.boolean('enabled')
  table.timestamps(true, true, false)
})

// deno-lint-ignore-file no-explicit-any
export const cardsCreateTableQuery = dex.schema.createTable('cards', (table) => {
  table.increments('id').primary()
  table.string('title', 256)
  table.text('description')
  table.integer('lane_id')
  table.foreign('lane_id').references('id').inTable('lanes')
  table.timestamps(true, true, false)
})

// need to reorder what dex gives as the output
export const allQueryStrings = [lanesCreateTableQuery, cardsCreateTableQuery].flatMap((query) =>
  query.toString().split(';')
).map((queryStr) => queryStr.trim()).sort((lhs, rhs) => {
  const lhsIsAlter = lhs.toLowerCase().startsWith('alter')
  const rhsIsAlter = rhs.toLowerCase().startsWith('alter')

  if (lhsIsAlter == rhsIsAlter) {
    return lhs.localeCompare(rhs)
  }

  return lhsIsAlter ? 1 : -1
}).join('; ')
