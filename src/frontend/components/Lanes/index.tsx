import React from 'react'
import {
  useContext,
  useEffect,
} from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import {
  fetchLanesAction,
  LaneSliceState,
} from '../../redux/laneSlice.ts'
import {
  fetchCardsAction,
  CardsSliceState,
} from '../../redux/cardsSlice.ts'
import {
  DIContext,
  LaneSymbol,
} from '../../diSymbols.ts'
import { LoadingNotice } from './LoadingNotice.tsx'
import { type FetchStatus } from '../../redux/slices.ts'
import { StoreDispatch } from '../../redux/store.ts'
import { type Lane as LaneModel } from '../../../shared/models/Lane.ts'
import { type GetCardsResponse } from '../../../shared/handlers/Cards.ts'
import { type LaneProps } from '../Lane/index.tsx'

export const Lanes = () => {

  const Lane = useContext(DIContext)![LaneSymbol] as React.FC<LaneProps>

  const dispatch = useDispatch<StoreDispatch>()
  const lanesFetchStatus = useSelector<LaneSliceState, FetchStatus>((state) => state.lanes.loadingStatus)

  const lanesFetchError = useSelector<LaneSliceState, string | undefined>((state) => state.lanes.error)
  const lanes = useSelector<LaneSliceState, LaneModel[]>((state) => state.lanes.lanes)

  const cardsFetchStatus = useSelector<CardsSliceState, FetchStatus>((state) => state.cards.loadingStatus)
  const cardsFetchError = useSelector<CardsSliceState, string | undefined>((state) => state.cards.error)
  const cards = useSelector<CardsSliceState, GetCardsResponse | undefined>((state) => state.cards.groupedCards)

  // TODO: move up to app since card creation also depends on fetching this data
  useEffect(() => {
    if (lanesFetchStatus === 'idle') {
      console.log('will do lanes API call')
      dispatch(fetchLanesAction())
    }

    if (cardsFetchStatus === 'idle') {
      console.log('will do cards API call')
      dispatch(fetchCardsAction())
    }

  }, [lanesFetchStatus, cardsFetchStatus, dispatch])

  return <>
      <LoadingNotice fetchStatus={lanesFetchStatus} fetchError={lanesFetchError} />
      <div className='flex flex-row space-x-4'>
        {lanes.map((lane, idx) => {
          const cardsInLane = ((cards ?? {})[lane.laneId] || { cards: [] })['cards']
          return <Lane key={idx} lane={lane} cardData={cardsInLane} cardsFetchError={cardsFetchError} cardsFetchStatus={cardsFetchStatus} />
        })}
      </div>
    </>
}

export { LoadingNotice }
