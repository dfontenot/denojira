import Dex from 'dex'

const dex = Dex({ client: 'postgres' })

// NOTE: this won't work if the table exists because it needs a CASCADE in the drop table
// TODO: do a hack around this for now
// see: https://github.com/knex/knex/issues/974

// deno-lint-ignore-file no-explicit-any
export const lanesCreateTableQuery = dex.schema.dropTableIfExists('lanes').createTable('lanes', (table) => {
  table.increments('id').primary()
  table.string('name', 256)
  table.integer('precedence').unique()
  table.boolean('enabled')
  table.timestamps(true, true, false)
})

// deno-lint-ignore-file no-explicit-any
export const cardsCreateTableQuery = dex.schema.dropTableIfExists('cards').createTable('cards', (table) => {
  table.increments('id').primary()
  table.string('title', 256)
  table.text('description')
  table.integer('lane_id')
  table.foreign('lane_id').references('id').inTable('lanes')
  table.timestamps(true, true, false)
})

