import {
  React,
  ReactRedux,
} from '../../deps.ts'
import { StoreDispatch } from '../../redux/store.ts'
import { createLaneAction } from '../../redux/laneSlice.ts'
import { LaneSliceState } from '../../redux/laneSlice.ts'
import { Lane } from '../../../backend/models/Lane.ts'

const {
  useRef,
  useState
} = React
const {
  useDispatch,
  useSelector
} = ReactRedux

interface State {
  name: string,
  precedence: number,
  addingBeforeOtherLane: boolean,
}

export const CreateLane = () => {

  const dispatch = useDispatch<StoreDispatch>()
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<State>({ name: '', precedence: -1, addingBeforeOtherLane: false })

  const lanes = useSelector<LaneSliceState, Lane[]>((state) => state.lanes.lanes)

  const updateName = (e: any) => { // TODO: type for this
    setState({ ...state, name: e.target.value })
  }

  const toggleAddingBeforeOtherLane = (e: any) => {
    setState({ ...state, addingBeforeOtherLane: !state.addingBeforeOtherLane })
  }

  const doCreateLane = (e: React.FormEvent) => {
    e.preventDefault()

    const form = formRef.current as unknown as any // TODO: real type for this?
    const otherLanePrecedence = form['otherLanePrecedence'].value

    dispatch(createLaneAction({
      name: form['laneName'].value,
      precedence: state.addingBeforeOtherLane ? otherLanePrecedence : otherLanePrecedence + 1,
    }))

    console.log('created lane')
  }

  return <div className='content-evenly'>
    <form ref={formRef} onSubmit={doCreateLane}>
      <div className='container mx-auto px-2 my-6'>
        <div className='text-xl maw-w-prose'>
          Create new swimlane
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='new-lane-name'>Name:</label>
          <input className='form-input px-4 py-3 rounded-lg' type='text' id='new-lane-name' name='laneName' value={state.name} onChange={(e) => updateName(e)} />
        </div>
        <div className='flex flex-col mb-4'>
          <input type='checkbox' id='adding-before-toggle' value={state.addingBeforeOtherLane ? 1 : 0} onChange={(e) => toggleAddingBeforeOtherLane(e)} />
          <label htmlFor='adding-before-toggle'>(create {state.addingBeforeOtherLane ? 'before' : 'after'} existing lane)</label>
          <label htmlFor='new-lane-other-lane'>Lane:</label>
          <select className='form-select px-4 py-3 rounded-lg' id='new-lane-other-lane' name='otherLanePrecedence'>
            {lanes.map((lane, idx) => <option key={idx} value={lane.laneId}>{lane.name}</option>)}
          </select>
        </div>
        <div><button type='submit' className='bg-white hover:bg-slate-100 text-slate-600 font-semibold py-2 px-4 border border-slate-400 rounded shadow'>
          Create
        </button></div>
      </div>
    </form>
  </div>
}
