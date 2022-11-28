import {
  React,
  ReactRedux,
} from '../../../deps.ts'
import {
  fetchLanesAction,
  LaneSliceState
} from '../../redux/apiSlice.ts'
import { StoreDispatch } from '../../redux/store.ts'

const {
  useDispatch,
  useSelector,
} = ReactRedux
const { useEffect } = React

export const Lanes = () => {

  const dispatch = useDispatch<StoreDispatch>()
  const lanesFetchStatus = useSelector<LaneSliceState>((state) => state.lanes.status)
  const lanesFetchError = useSelector<LaneSliceState>((state) => state.lanes.error)
  const lanes = useSelector<LaneSliceState>((state) => state.lanes.lanes)

  useEffect(() => {
    if (lanesFetchStatus === 'idle') {
      dispatch(fetchLanesAction())
    }

  }, [lanesFetchStatus, dispatch])

  let content
  if (lanesFetchStatus === 'loading') {
    content = 'loading'
  }
  else if (lanesFetchStatus === 'succeeded') {
    content = 'yay'
  }
  else if (lanesFetchStatus === 'failed') {
    content = `bad ${lanesFetchError}`
  }

  return <p>some swim lanes go here{content}</p>
}
