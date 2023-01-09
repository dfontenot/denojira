import {
  React,
  ReactRedux,
} from '../../../deps-frontend.ts'
import {
  fetchLanesAction,
  LaneSliceState,
} from '../../redux/laneSlice.ts'
import {
  fetchCardsAction,
  CardsSliceState,
} from '../../redux/cardsSlice.ts'
import { type FetchStatus } from '../../redux/slices.ts'
import { StoreDispatch } from '../../redux/store.ts'
import { Lane } from '../../../models/Lane.ts'
import { GetCardsResponse } from '../../../models/Card.ts'
import { Cards } from '../Cards/index.tsx'

const {
  useDispatch,
  useSelector,
} = ReactRedux
const { useEffect } = React

export const Lanes = () => {

  const dispatch = useDispatch<StoreDispatch>()
  const lanesFetchStatus = useSelector<LaneSliceState, FetchStatus>((state) => state.lanes.loadingStatus)

  const lanesFetchError = useSelector<LaneSliceState, string | undefined>((state) => state.lanes.error)
  const lanes = useSelector<LaneSliceState, Lane[]>((state) => state.lanes.lanes)

  const cardsFetchStatus = useSelector<CardsSliceState, FetchStatus>((state) => state.cards.loadingStatus)
  const cardsFetchError = useSelector<CardsSliceState, string | undefined>((state) => state.cards.error)
  const cards = useSelector<CardsSliceState, GetCardsResponse>((state) => state.cards.groupedCards)

  // TOOD: move up to app since card creation also depends on fetching this data
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

  // TODO: also show loading for the cards API
  let content
  if (lanesFetchStatus === 'idle') {
    content = 'not loaded yet'
  }
  else if (lanesFetchStatus === 'loading') {
    content = 'loading...'
  }
  else if (lanesFetchStatus === 'succeeded') {
    content = 'data loaded'
  }
  else if (lanesFetchStatus === 'failed') {
    content = `bad ${lanesFetchError}`
  }

  return <>
      <p>{content}</p>
      <div className="lanes-parent">
        {lanes.map((lane, idx) => {
          const cardsInLane = (cards[lane.laneId] || { cards: [] })['cards']
          return <div key={idx} className="lane-item"><p>{lane.name}</p><Cards cardData={cardsInLane} /></div>
        })}
      </div>
    </>
}
