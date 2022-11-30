import {
  ReduxToolkit,
} from '../../deps-frontend.ts'
import laneSlice from './laneSlice.ts'
import cardsSlice from './cardsSlice.ts'

const { configureStore } = ReduxToolkit

export const store = configureStore({
  reducer: {
    lanes: laneSlice.reducer,
    cards: cardsSlice.reducer,
  },
  devTools: true,
})

// source: https://stackoverflow.com/a/73151014/854854
export type StoreDispatch = typeof store.dispatch
