import {
  ReduxToolkit,
} from '../../deps-frontend.ts'
import { SwimLane } from '../../models/Lane.ts'

const {
  createAction,
  createAsyncThunk,
  createSlice
} = ReduxToolkit

export interface LaneState {
  lanes: SwimLane[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error?: string
}

export interface LaneSliceState {
  lanes: LaneState
}

const initialState: LaneState = {
  lanes: [],
  status: 'idle',
}

export const fetchLanesAction = createAsyncThunk('lanes/fetchLanes', async () => {
  return (await fetch('/api/lanes')).body
})

//const fetchLanes = createAction<SwimLane[]>('fetchLanes')

const lanesSlice = createSlice({
  name: 'lanes',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanesAction.pending, (state, _action) => {
        state.status = 'loading'
      })
      .addCase(fetchLanesAction.fulfilled, (state, action) => {
        state.status = 'succeeded'
        //state.lanes = action.payload // TODO
      })
      .addCase(fetchLanesAction.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchLanes, (state, action) => {
  //     return state // TODO
  //   })
  // },
})

export default lanesSlice
