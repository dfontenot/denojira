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
import { type FetchStatus } from '../../redux/slices.ts'
import { IconCloseO } from '../Icons/index.tsx'

const { useDrop } = ReactDnD
const { useDispatch } = ReactRedux

interface Props {
  // deno-lint-ignore no-explicit-any
  key?: any // TODO: nicer solution for this?
  lane: LaneModel
  cardData: CardResponse[]
  cardsFetchError?: string
  cardsFetchStatus: FetchStatus
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

  // TODO: add handling for card data not fully loaded or encountered an error
  return <div className='border-2 border-solid border-slate-600 rounded-lg p-2 flex-auto relative' ref={ref}>
    <IconCloseO className='absolute top-0.5 right-0.5' />
    <div className='mx-auto'>
      <p className='font-semibold'>{lane.name}</p>
    </div>
    <Cards laneId={lane.laneId} cardData={cardData} />
  </div>
}
