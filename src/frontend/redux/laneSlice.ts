import {
  ReduxToolkit,
} from '../../deps.ts'
import { Lane } from '../../models/Lane.ts'
import { type FetchStatus } from './slices.ts'

const {
  createAsyncThunk,
  createSlice
} = ReduxToolkit

export interface LaneState {
  lanes: Lane[],
  loadingStatus: FetchStatus,
  error?: string
}

export interface LaneSliceState {
  lanes: LaneState
}

const initialState: LaneState = {
  lanes: [],
  loadingStatus: 'idle',
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
        state.loadingStatus = 'loading'
      })
      .addCase(fetchLanesAction.fulfilled, (state, action) => {
        state.loadingStatus = 'succeeded'
        console.log('payload', action.payload);
        state.lanes = action.payload
      })
      .addCase(fetchLanesAction.rejected, (state, action) => {
        state.loadingStatus = 'failed'
        state.error = action.error.message
      })
  },
})

export default lanesSlice
