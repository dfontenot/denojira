import {
  React,
  ReactDnD,
  ReactRedux,
} from '../../deps.ts'
import { moveCardAction } from '../../redux/cardsSlice.ts'
import { cardSym } from '../../dnd/syms.ts'
import { Cards } from '../Cards/index.tsx'
import { StoreDispatch } from '../../redux/store.ts'
import { type Lane as LaneModel } from '../../../backend/models/Lane.ts'
import { type CardResponse } from '../../../backend/models/Card.ts'
import { type CardItem } from '../../dnd/CardItem.ts'

const { useDrop } = ReactDnD
const { useDispatch } = ReactRedux

interface Props {
  key?: any // TODO: nicer solution for this?
  lane: LaneModel
  cardData: CardResponse[]
}

export const Lane = ({ lane, cardData }: Props) => {

  const dispatch = useDispatch<StoreDispatch>()

  const [_, ref] = useDrop(() => ({
    accept: cardSym,
    canDrop: (item: CardItem, _monitor) => lane.laneId != item.laneId,
    drop: (item: CardItem, _monitor) => {
      dispatch(moveCardAction({ destinationLaneId: lane.laneId, cardId: item.id }))
      console.log('dropped', item)
    },
  }))

  return <div className='outline w-25 pa3 mr2' ref={ref}>
    <p>{lane.name}</p>
    <Cards laneId={lane.laneId} cardData={cardData} />
  </div>
}
