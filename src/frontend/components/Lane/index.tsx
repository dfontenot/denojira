import React from 'react'
import { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { moveCardAction } from '../../redux/cardsSlice.ts'
import { deleteLaneAction } from '../../redux/laneSlice.ts'
import { cardSym } from '../../dnd/syms.ts'
import { type CardsProps } from '../Cards/index.tsx'
import { StoreDispatch } from '../../redux/store.ts'
import { type Lane as LaneModel } from '../../../shared/models/Lane.ts'
import { type CardResponse } from '../../../shared/handlers/Cards.ts'
import { type CardItem } from '../../dnd/CardItem.ts'
import { type FetchStatus } from '../../redux/slices.ts'
import {
  CardsSymbol,
  DIContext,
  IconCloseOSymbol,
} from '../../diSymbols.ts'

export interface LaneProps {
  // deno-lint-ignore no-explicit-any
  key?: any // TODO: nicer solution for this?
  lane: LaneModel
  cardData: CardResponse[]
  cardsFetchError?: string
  cardsFetchStatus: FetchStatus
}

export const Lane = ({ lane, cardData }: LaneProps) => {

  const dispatch = useDispatch<StoreDispatch>()

  const diContext = useContext(DIContext)
  const IconCloseO = diContext![IconCloseOSymbol] as React.FC<React.SVGProps<SVGSVGElement>>
  const Cards = diContext![CardsSymbol] as React.FC<CardsProps>

  const [_, ref] = useDrop(() => ({
    accept: cardSym,
    canDrop: (item: CardItem, _monitor) => lane.laneId != item.laneId,
    drop: (item: CardItem, _monitor) => {
      dispatch(moveCardAction({ destinationLaneId: lane.laneId, cardId: item.id }))
      console.log('dropped', item)
    },
  }))

  const doDelete = (_e: React.MouseEvent<HTMLElement>) => {
    dispatch(deleteLaneAction(lane.laneId))
  }

  // TODO: add handling for card data not fully loaded or encountered an error
  return <div className='border-2 border-solid border-slate-600 rounded-lg p-2 flex-auto relative' ref={ref}>
    <div
      className='hover:cursor-pointer'
      onClick={(e) => doDelete(e)}
      tabIndex={0}
      title='delete swimlane'
      role='button'
      aria-label={`delete swimlane ${lane.name}`}
    >
      <IconCloseO className='absolute top-0.5 right-0.5' />
    </div>
    <div className='mx-auto'>
      <p className='font-semibold'>{lane.name}</p>
    </div>
    <Cards laneId={lane.laneId} cardData={cardData} />
  </div>
}
