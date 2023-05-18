import React from 'react'
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'bdd'
import { expect } from 'chai'
import * as Cheerio from 'cheerio'
import * as DenoDOM from 'deno-dom'
import { DOMParser } from 'deno-dom'
import * as mock_fetch from 'mock-fetch'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5'
import { Provider } from 'react-redux'
import ReactDOMClient from 'react-dom-client'
import { createRoot } from 'react-dom-client'
import { act } from 'react-dom-test-utils'
import {
  DIContext,
  IconCloseSymbol,
} from '../../../../src/frontend/diSymbols.ts'
import { Card } from '../../../../src/frontend/components/Card/index.tsx'
import { store } from '../../../../src/frontend/redux/store.ts'
await import('../../setup.ts')

const ComponentContext = ({ children }: { children: React.ReactNode }) => {

  return <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <DIContext.Provider value={{[IconCloseSymbol]: FakeIcon }}>
        {children}
      </DIContext.Provider>
    </DndProvider>
  </Provider>
}

// no SVG support in deno dom
const FakeIcon = (_props: React.SVGProps<SVGSVGElement>) => <div/>

const anyId = 1
const anyLaneId = 2
const anyTitle = 'foo'
const anyDescription = 'bar'

const document = new DOMParser().parseFromString('<!DOCTYPE html><html><body></body></html>', 'text/html')!
let container: DenoDOM.Element | null = null
let root: ReactDOMClient.Root | null = null

describe('Card', () => {
  beforeAll(() => mock_fetch.install())

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container!)
  })

  afterEach(() => {
    act(() => root!.unmount())
    container!.remove()
    container = null
  })

  afterAll(() => mock_fetch.uninstall())

  it('should have content', () => {
    act(() =>
      root!.render(
        <ComponentContext>
          <Card id={anyId} laneId={anyLaneId} title={anyTitle} description={anyDescription} />
        </ComponentContext>))

    const $ = Cheerio.load(container!.innerHTML)
    const isDraggable = $('article').first().attr('draggable')
    expect(isDraggable).to.equal('true')
  })
})
