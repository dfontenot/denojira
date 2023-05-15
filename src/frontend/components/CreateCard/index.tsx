import {
  React,
  ReactRedux,
} from '../../deps.ts'
import { StoreDispatch } from '../../redux/store.ts'
import { createCardAction } from '../../redux/cardsSlice.ts'
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

  return <div className='content-evenly'>
    <form ref={formRef} onSubmit={doCreateCard}>
      <div className='container mx-auto px-2 my-6'>
        <div className='text-xl maw-w-prose'>
          Create new task card
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='new-card-title'>Title:</label>
          <input className='form-input px-4 py-3 rounded-lg' type='text' id='new-card-title' name='cardTitle' value={state.title} onChange={(e) => updateTitle(e)} />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='new-card-description'>Description:</label>
          <textarea className='form-textarea hover:resize' id='new-card-description' name='description' value={state.description} onChange={(e) => updateDescription(e)} />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='new-card-lane'>Initial swimlane:</label>
          <select className='form-select px-4 py-3 rounded-lg' id='new-card-lane' name='laneId'>
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
