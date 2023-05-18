import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5'
import { Provider } from 'react-redux'
import { Lanes } from './components/Lanes/index.tsx'
import { store } from './redux/store.ts'
import { DIContext } from './diSymbols.ts'
import { prodContainer } from './container.ts'
import { CreateCard } from './components/CreateCard/index.tsx'
import { CreateLane } from './components/CreateLane/index.tsx'

export const App = () =>
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <DIContext.Provider value={prodContainer()}>
        <div className='container mx-auto px-4 border-3 border-solid border-slate-600 rounded-lg my-2 shadow-md'>
          <div className='text-xl maw-w-prose'>
            Organize your tasks
          </div>
          <Lanes />
          <div className='flex flex-row max-w-full'>
              <CreateCard />
              <CreateLane />
          </div>
        </div>
      </DIContext.Provider>
    </DndProvider>
  </Provider>
