import {
  ReduxToolkit,
} from '../../deps-frontend.ts'
import { Lane } from '../../models/Lane.ts'

const {
  createAsyncThunk,
  createSlice
} = ReduxToolkit

export type LaneFetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface LaneState {
  lanes: Lane[],
  status: LaneFetchStatus,
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
  return (await fetch('/api/lanes')).json()
})

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
        console.log('payload', action.payload);
        state.lanes = action.payload
      })
      .addCase(fetchLanesAction.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default lanesSlice
