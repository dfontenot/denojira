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
  loadingStatus: FetchStatus,
  error?: string,
  cardCreationStatus: Record<string, FetchStatus>,
}

export interface CardsSliceState {
  cards: CardsState,
}

const initialState: CardsState = {
  groupedCards: { },
  loadingStatus: 'idle',
  cardCreationStatus: {},
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
        state.loadingStatus = 'loading'
      })
      .addCase(fetchCardsAction.fulfilled, (state, action) => {
        state.loadingStatus = 'succeeded'
        console.log('payload', action.payload);
        state.groupedCards = action.payload
      })
      .addCase(fetchCardsAction.rejected, (state, action) => {
        state.loadingStatus = 'failed'
        state.error = action.error.message
      })
      .addCase(createCardAction.pending, (state, action) => {
        console.log('create card pending')
        state.cardCreationStatus[action.meta.requestId] = 'loading'
      })
      .addCase(createCardAction.fulfilled, (state, action) => {
        console.log('create card payload', action.payload);
        state.cardCreationStatus[action.meta.requestId] = 'succeeded'
      })
      .addCase(createCardAction.rejected, (state, action) => {
        console.log('create card failed')
        state.cardCreationStatus[action.meta.requestId] = 'failed'
      })
  },
})

export default cardsSlice
