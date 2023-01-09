import {
  React,
  ReactRedux,
} from '../../../deps-frontend.ts'
import { StoreDispatch } from '../../redux/store.ts'
import { createCardAction } from '../../redux/cardsSlice.ts'
import { LaneSliceState } from '../../redux/laneSlice.ts'
import { Lane } from '../../../models/Lane.ts'

const {
  useRef,
  useState
} = React
const {
  useDispatch,
  useSelector
} = ReactRedux

interface State {
  title: string
  description: string
}

export const CreateCard = () => {

  const dispatch = useDispatch<StoreDispatch>()
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<State>({ title: '', description: '' })

  const lanes = useSelector<LaneSliceState, Lane[]>((state) => state.lanes.lanes)

  const updateTitle = (e: any) => { // TODO: type for this
    setState({ ...state, title: e.target.value })
  }

  const updateDescription = (e: any) => {
    setState({ ...state, description: e.target.value })
  }

  const doCreateCard = (e: React.FormEvent) => {
    e.preventDefault()

    const form = formRef.current as unknown as any // TODO: real type for this?

    dispatch(createCardAction({
      title: form['cardTitle'].value,
      description: form['description'].value,
      laneId: form['laneId'].value,
    }))

    console.log('created card')
  }

  return <form ref={formRef} onSubmit={doCreateCard}>
    <label htmlFor='cardTitle'>title: </label>
    <input type='text' name='cardTitle' value={state.title} onChange={(e) => updateTitle(e)} />
    <label>
      description: <textarea name='description' value={state.description} onChange={(e) => updateDescription(e)} />
    </label>
    <select name='laneId'>
      {lanes.map((lane, idx) => <option key={idx} value={lane.laneId}>{lane.name}</option>)}
    </select>
    <button type='submit'>Create</button>
    </form>
}
