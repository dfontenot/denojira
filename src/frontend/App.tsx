import {
  React,
  ReactDnD,
  ReactDnDHTML5,
  ReactRedux,
} from './deps.ts'
const { DndProvider } = ReactDnD
const { HTML5Backend } = ReactDnDHTML5

import { Lanes } from './components/Lanes/index.tsx'
import { CreateCard } from './components/CreateCard/index.tsx'
import { store } from './redux/store.ts'

const { Provider } = ReactRedux

export const App = () =>
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <h1>A Jira clone</h1>
      <Lanes />
      <hr />
      <CreateCard />
    </DndProvider>
  </Provider>
