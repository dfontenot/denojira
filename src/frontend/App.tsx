import {
  React,
  ReactRedux,
} from '../deps-frontend.ts'
import { Lanes } from './components/Lanes/index.tsx'
import { store } from './redux/store.ts'

const { Provider } = ReactRedux

export const App = () => <Provider store={store}>
  <h1>React SSR test</h1>
  <Lanes />
  </Provider>
