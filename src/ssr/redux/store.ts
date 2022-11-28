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

export type StoreDispatch = typeof store.dispatch