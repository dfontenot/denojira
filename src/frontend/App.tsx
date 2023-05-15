import {
  React,
  ReactDnD,
  ReactDnDHTML5,
  ReactRedux,
} from './deps.ts'
const { DndProvider } = ReactDnD
const { HTML5Backend } = ReactDnDHTML5

import { Lanes } from './components/Lanes/index.tsx'
import { ManageTasks } from './components/ManageTasks/index.tsx'
import { store } from './redux/store.ts'

const { Provider } = ReactRedux

export const App = () =>
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <div className='container mx-auto px-4 border-3 border-solid border-slate-600 rounded-lg my-2 shadow-md'>
        <div className='text-xl maw-w-prose'>
          Organize your tasks
        </div>
        <Lanes />
        <ManageTasks />
      </div>
    </DndProvider>
  </Provider>
