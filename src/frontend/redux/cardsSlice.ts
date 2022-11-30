import {
  ReduxToolkit,
} from '../../deps-frontend.ts'
import { GetCardsResponse } from '../../models/Card.ts'

const {
  createAsyncThunk,
  createSlice
} = ReduxToolkit

export type CardsFetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface CardsState {
  groupedCards: GetCardsResponse,
  status: CardsFetchStatus,
  error?: string
}

export interface CardsSliceState {
  cards: CardsState
}

const initialState: CardsState = {
  groupedCards: { byLaneId: {} },
  status: 'idle',
}

export const fetchCardsAction = createAsyncThunk('cards/fetchCards', async () => {
  return (await fetch('/api/cards')).json()
})

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsAction.pending, (state, _action) => {
        state.status = 'loading'
      })
      .addCase(fetchCardsAction.fulfilled, (state, action) => {
        state.status = 'succeeded'
        console.log('payload', action.payload);
        state.groupedCards = action.payload
      })
      .addCase(fetchCardsAction.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default cardsSlice
