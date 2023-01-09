import {
  ReduxToolkit,
} from '../../deps-frontend.ts'
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
    console.log('in the card reloading middleware')

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
    getDefaultMiddleware().prepend(cardCreationListenerMiddleware.middleware),
})

// source: https://stackoverflow.com/a/73151014/854854
export type StoreDispatch = typeof store.dispatch
