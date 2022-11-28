import {
  ReduxToolkit,
} from '../../deps.ts'
import { apiSlice } from './apiSlice.ts'

const { configureStore } = ReduxToolkit

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
