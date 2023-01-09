import {
  React,
  ReactDnD,
} from '../../../deps-frontend.ts'
import { cardSym } from '../../dnd/syms.ts'
import { Cards } from '../Cards/index.tsx'
import { type Lane as LaneModel } from '../../../models/Lane.ts'
import { type CardResponse } from '../../../models/Card.ts'
import { type CardItem } from '../../dnd/CardItem.ts'

const { useDrop } = ReactDnD

interface Props {
  key?: any // TODO: nicer solution for this?
  lane: LaneModel
  cardData: CardResponse[]
}

export const Lane = ({ lane, cardData }: Props) => {
  const [_, ref] = useDrop(() => ({
    accept: cardSym,
    canDrop: (item: CardItem, _monitor) => lane.laneId != item.laneId,
    drop: (item: CardItem, _monitor) => {
      console.log('dropped', item)
    },
  }))

  return <div className="lane-item" ref={ref}>
    <p>{lane.name}</p>
    <Cards laneId={lane.laneId} cardData={cardData} />
  </div>
}
