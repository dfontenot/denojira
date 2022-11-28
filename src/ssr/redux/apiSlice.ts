import {
  ReduxToolkit,
} from '../../deps.ts'

const { createAction, createSlice } = ReduxToolkit

export interface LaneState {
  lanes: string[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error?: string
}

const fetchLanes = createAction('fetchLanes')

const lanesSlice = createSlice({
  name: 'lanes',
  initialState: [],
  reducers: {
  },
})

export default lanesSlice
