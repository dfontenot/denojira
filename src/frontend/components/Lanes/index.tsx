import {
  React,
  ReactRedux,
} from '../../../deps-frontend.ts'
import {
  fetchLanesAction,
  LaneFetchStatus,
  LaneSliceState,
} from '../../redux/laneSlice.ts'
import { StoreDispatch } from '../../redux/store.ts'
import { Lane } from '../../../models/Lane.ts'

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

  useEffect(() => {
    if (lanesFetchStatus === 'idle') {
      console.log('will do an API call')
      dispatch(fetchLanesAction())
    }

  }, [lanesFetchStatus, dispatch])

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
  else {
    console.log('async thunk issue', lanesFetchStatus)
  }

  console.log('still here?', lanesFetchStatus, lanes)
  return <>
      <p>{content}</p>
      <div className="lanes-parent">
        {lanes.map((lane, idx) => <div key={idx} className="lane-item">{lane.name}</div>)}
      </div>
    </>
}
