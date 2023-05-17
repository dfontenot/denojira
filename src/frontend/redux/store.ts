import {
  ReduxToolkit,
} from '../deps.ts'
import laneSlice, { fetchLanesAction } from './laneSlice.ts'
import cardsSlice, { fetchCardsAction } from './cardsSlice.ts'

const {
  configureStore,
  createListenerMiddleware,
} = ReduxToolkit

interface BulkCreateMiddlewareParams {
  middlewareType: string,
  actionType: 'card' | 'lane'
}

// TODO: actual type
const bulkCreateMiddleware = (opts: BulkCreateMiddlewareParams[]): any[] =>
  opts.map((opt) => {
    const middleware = createListenerMiddleware()
    middleware.startListening({
      type: `${opt.actionType}s/${opt.middlewareType}/fulfilled`,
      effect: (_action, listenerApi) => {
        listenerApi.dispatch(opt.actionType == 'card' ? fetchCardsAction() : fetchLanesAction())
      },
    })

    return middleware.middleware
  })

// TODO: do less whole board reloading when possible
const allListeningMiddleware = bulkCreateMiddleware([
  { middlewareType: 'createCard', actionType: 'card' },
  { middlewareType: 'deleteCard', actionType: 'card' },
  { middlewareType: 'moveCard', actionType: 'card' },
  { middlewareType: 'createLane', actionType: 'lane' },
  { middlewareType: 'deleteLane', actionType: 'lane' },
])

export const store = configureStore({
  reducer: {
    lanes: laneSlice.reducer,
    cards: cardsSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(...allListeningMiddleware),
})

// source: https://stackoverflow.com/a/73151014/854854
export type StoreDispatch = typeof store.dispatch
