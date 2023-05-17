import {
  ReduxToolkit,
} from '../deps.ts'
import { type CreateLaneRequest } from '../../shared/handlers/Lanes.ts'
import { Lane } from '../../shared/models/Lane.ts'
import { type FetchStatus } from './slices.ts'

const {
  createAsyncThunk,
  createSlice
} = ReduxToolkit

export interface LaneState {
  lanes: Lane[],
  loadingStatus: FetchStatus,
  laneCreationStatus: Record<string, FetchStatus>,
  error?: string
}

export interface LaneSliceState {
  lanes: LaneState
}

const initialState: LaneState = {
  lanes: [],
  laneCreationStatus: {},
  loadingStatus: 'idle',
}

export const fetchLanesAction = createAsyncThunk('lanes/fetchLanes', async () => {
  return (await fetch('/api/lanes')).json()
})

export const createLaneAction = createAsyncThunk('lanes/createLane', async (req: CreateLaneRequest) => {
  const result = await fetch('/api/lane', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req),
  })

  return result.json
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
      .addCase(createLaneAction.pending, (state, action) => {
        console.log('create lane pending')
        state.laneCreationStatus[action.meta.requestId] = 'loading'
      })
      .addCase(createLaneAction.fulfilled, (state, action) => {
        console.log('create lane payload', action.payload);
        state.laneCreationStatus[action.meta.requestId] = 'succeeded'
      })
      .addCase(createLaneAction.rejected, (state, action) => {
        console.log('create lane failed')
        state.laneCreationStatus[action.meta.requestId] = 'failed'
      })
  },
})

export default lanesSlice
