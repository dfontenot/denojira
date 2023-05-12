import {
  ReduxToolkit,
} from '../deps.ts'
import laneSlice from './laneSlice.ts'
import cardsSlice, { fetchCardsAction } from './cardsSlice.ts'

const {
  configureStore,
  createListenerMiddleware,
} = ReduxToolkit

const cardCreationListenerMiddleware = createListenerMiddleware()
cardCreationListenerMiddleware.startListening({
  type: 'cards/createCard/fulfilled', // TODO: standard and more rename-friendly way of passing around this identifier?
  effect: (_action, listenerApi) => {
    console.log('in the card creation reloading middleware')

    listenerApi.dispatch(fetchCardsAction())
  },
})

const laneCreationListenerMiddleware = createListenerMiddleware()
laneCreationListenerMiddleware.startListening({
  type: 'lanes/createLane/fulfilled', // TODO: standard and more rename-friendly way of passing around this identifier?
  effect: (_action, listenerApi) => {
    console.log('in the lane creation reloading middleware')

    listenerApi.dispatch(fetchCardsAction())
  },
})

const cardMovedListenerMiddleware = createListenerMiddleware()
cardMovedListenerMiddleware.startListening({
  type: 'cards/moveCard/fulfilled', // TODO: standard and more rename-friendly way of passing around this identifier?
  effect: (_action, listenerApi) => {
    console.log('in the card moved reloading middleware')

    listenerApi.dispatch(fetchCardsAction())
  },
})

export const store = configureStore({
  reducer: {
    lanes: laneSlice.reducer,
    cards: cardsSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      cardCreationListenerMiddleware.middleware,
      cardMovedListenerMiddleware.middleware,),
})

// source: https://stackoverflow.com/a/73151014/854854
export type StoreDispatch = typeof store.dispatch
