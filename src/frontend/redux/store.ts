import {
  ReduxToolkit,
} from '../../deps.ts'
import laneSlice from './apiSlice.ts'

const { configureStore } = ReduxToolkit

export const store = configureStore({
  reducer: {
    lanes: laneSlice.reducer,
  },
  devTools: true,
})

// source: https://stackoverflow.com/a/73151014/854854
export type StoreDispatch = typeof store.dispatch
