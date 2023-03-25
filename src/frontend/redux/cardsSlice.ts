import {
  ReduxToolkit,
} from '../deps.ts'
import { type GetCardsResponse } from '../../backend/models/Card.ts'
import {
  type CreateCardRequest,
  type MoveCardRequest,
} from '../../backend/handlers/CardsHandlers.ts'
import { type FetchStatus } from './slices.ts'

const {
  createAsyncThunk,
  createSlice
} = ReduxToolkit

export interface CardsState {
  groupedCards: GetCardsResponse
  loadingStatus: FetchStatus
  error?: string
  cardCreationStatus: Record<string, FetchStatus>
  moveCardStatus: Record<string, FetchStatus>
}

export interface CardsSliceState {
  cards: CardsState,
}

const initialState: CardsState = {
  groupedCards: { },
  loadingStatus: 'idle',
  cardCreationStatus: {},
  moveCardStatus: {},
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

export const moveCardAction = createAsyncThunk('cards/moveCard', async (req: MoveCardRequest) => {
  const result = await fetch('/api/card/lane', {
    method: 'PUT',
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
      .addCase(moveCardAction.pending, (state, action) => {
        console.log('move card pending')
        state.moveCardStatus[action.meta.requestId] = 'loading'
      })
      .addCase(moveCardAction.fulfilled, (state, action) => {
        console.log('move card payload', action.payload);
        state.moveCardStatus[action.meta.requestId] = 'succeeded'
      })
      .addCase(moveCardAction.rejected, (state, action) => {
        console.log('move card failed')
        state.moveCardStatus[action.meta.requestId] = 'failed'
      })
  },
})

export default cardsSlice
