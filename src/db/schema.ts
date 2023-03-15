import { Dex } from '../deps-backend.ts'

const dex = Dex({ client: 'postgres' })

export const lanesCreateTableQuery = dex.schema.dropTableIfExists('lanes').createTable('lanes', (table) => {
  table.increments('id').primary()
  table.string('name', 256)
  table.boolean('enabled')
  table.timestamps(true, true, false)
})

export const cardsCreateTableQuery = dex.schema.dropTableIfExists('cards').createTable('cards', (table) => {
  table.increments('id').primary()
  table.string('title', 256)
  table.text('description')
  table.integer('lane_id')
  table.foreign('lane_id').references('id').inTable('lanes')
  table.timestamps(true, true, false)
})

