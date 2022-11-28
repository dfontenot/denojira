import {
  ReduxToolkit,
} from '../../deps.ts'
import laneSlice from './apiSlice.ts'

const { configureStore } = ReduxToolkit

export default configureStore({
  reducer: {
    lanes: laneSlice.reducer,
  },
  devTools: true,
})
