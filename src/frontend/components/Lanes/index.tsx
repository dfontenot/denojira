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
import styles from './styles.module.css'

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
  if (lanesFetchStatus === 'loading') {
    content = 'loading...'
  }
  else if (lanesFetchStatus === 'succeeded') {
    content = 'yay'
  }
  else if (lanesFetchStatus === 'failed') {
    content = `bad ${lanesFetchError}`
  }
  else {
    console.log('async thunk issue', lanesFetchStatus)
  }

  console.log('still here?')
  return <>
      <p>{content}</p>
      <div className={styles.lanesParent}>
        {lanes.map((lane, idx) => <div key={idx} className={styles.laneItem}>{lane.name}</div>)}
      </div>
    </>
}
