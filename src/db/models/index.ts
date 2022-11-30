import { DenoDB } from '../../deps-backend.ts'
const { Relationships } = DenoDB

import Lane from './Lane.ts'
import Card from './Card.ts'

Relationships.belongsTo(Card, Lane)

export { Card, Lane }
