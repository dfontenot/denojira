import { createContext } from 'react'
import { type ContainerValue } from './container.ts'

export const CardSymbol = Symbol.for('Card')
export const CardsSymbol = Symbol.for('Cards')
export const CreateCardSymbol = Symbol.for('CreateCard')
export const CreateLaneSymbol = Symbol.for('CreateLane')
export const IconCloseSymbol = Symbol.for('IconClose')
export const IconCloseOSymbol = Symbol.for('IconCloseO')
export const IconCloseRSymbol = Symbol.for('IconCloseR')
export const LaneSymbol = Symbol.for('Lane')
export const LanesSymbol = Symbol.for('Lanes')

export const DIContext = createContext<Record<symbol, ContainerValue> | null>(null)
