import {
  React,
  ReactRedux,
} from '../../../deps-frontend.ts'
import {
  fetchLanesAction,
  LaneFetchStatus,
  LaneSliceState,
} from '../../redux/laneSlice.ts'
import {
  fetchCardsAction,
  CardsFetchStatus,
  CardsSliceState,
} from '../../redux/cardsSlice.ts'
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
  const lanesFetchStatus = useSelector<LaneSliceState, LaneFetchStatus>((state) => state.lanes.status)
  const lanesFetchError = useSelector<LaneSliceState, string | undefined>((state) => state.lanes.error)
  const lanes = useSelector<LaneSliceState, Lane[]>((state) => state.lanes.lanes)

  const cardsFetchStatus = useSelector<CardsSliceState, CardsFetchStatus>((state) => state.cards.status)
  const cardsFetchError = useSelector<CardsSliceState, string | undefined>((state) => state.cards.error)
  const cards = useSelector<CardsSliceState, GetCardsResponse>((state) => state.cards.groupedCards)

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
