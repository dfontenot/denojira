import React from 'react'
import {
  Card,
  Cards,
  CreateCard,
  CreateLane,
  IconClose,
  IconCloseO,
  IconCloseR,
  Lane,
  Lanes,
} from './components/index.ts'

export type ContainerValue = React.FC<any> | React.ReactNode
export const prodContainer = (): Record<symbol, ContainerValue> => {

  const allComponents = [
    Card,
    Cards,
    CreateCard,
    CreateLane,
    IconClose,
    IconCloseO,
    IconCloseR,
    Lane,
    Lanes,
  ]

  return allComponents.reduce<Record<symbol, ContainerValue>>((acc, comp) => {
    acc[Symbol.for(comp.name)] = comp
    return acc
  }, {})
}
