import {
  React,
  ReactRedux,
} from '../deps-frontend.ts'
import { Lanes } from './components/Lanes/index.tsx'
import { CreateCard } from './components/CreateCard/index.tsx'
import { store } from './redux/store.ts'

const { Provider } = ReactRedux

export const App = () => <Provider store={store}>
  <h1>A Jira clone</h1>
  <CreateCard />
  <Lanes />
  </Provider>
