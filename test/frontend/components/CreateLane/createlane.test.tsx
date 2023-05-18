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
import ReactDOMClient from 'react-dom-client'
import { createRoot } from 'react-dom-client'
import { act } from 'react-dom-test-utils'
import { Provider } from 'react-redux'
import { CreateLane } from '../../../../src/frontend/components/CreateLane/index.tsx'
import { store } from '../../../../src/frontend/redux/store.ts'
await import('../../setup.ts')

const document = new DOMParser().parseFromString('<!DOCTYPE html><html><body></body></html>', 'text/html')!
let container: DenoDOM.Element | null = null
let root: ReactDOMClient.Root | null = null

describe('CreateLane', () => {
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
      root!.render(<Provider store={store}>
        <CreateLane />
      </Provider>))

    const $ = Cheerio.load(container!.innerHTML)
    const childrenCount = $('#new-lane-other-lane').children().length
    expect(childrenCount).to.equal(0)
  })
})
