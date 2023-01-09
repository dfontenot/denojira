import {
  ReduxToolkit,
} from '../../deps-frontend.ts'
import { GetCardsResponse } from '../../models/Card.ts'
import { CreateCardRequest } from '../../handlers/CardsHandlers.ts'
import { type FetchStatus } from './slices.ts'

const {
  createAsyncThunk,
  createSlice
} = ReduxToolkit

export interface CardsState {
  groupedCards: GetCardsResponse,
  status: FetchStatus,
  error?: string
}

export interface CardsSliceState {
  cards: CardsState
}

const initialState: CardsState = {
  groupedCards: { },
  status: 'idle',
}

export const fetchCardsAction = createAsyncThunk('cards/fetchCards', async () => {
  return (await fetch('/api/cards')).json()
})

export const createCardAction = createAsyncThunk('cards/createCard', async (req: CreateCardRequest) => {
  const result = await fetch('/api/card', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req),
  })

  return result.json
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
      .addCase(createCardAction.pending, (state, _action) => {
        console.log('create card pending')
      })
      .addCase(createCardAction.fulfilled, (state, action) => {
        state.status = 'succeeded'
        console.log('create card payload', action.payload);
      })
      .addCase(createCardAction.rejected, (state, action) => {
        console.log('create card failed')
      })
  },
})

export default cardsSlice
