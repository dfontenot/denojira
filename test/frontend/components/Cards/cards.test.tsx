import React from 'react'
import {
  afterEach,
  beforeEach,
  describe,
  it,
} from 'bdd'
import { expect } from 'chai'
import * as Cheerio from 'cheerio'
import * as DenoDOM from 'deno-dom'
import { DOMParser } from 'deno-dom'
import ReactDOMClient from 'react-dom-client'
import { createRoot } from 'react-dom-client'
import { act } from 'react-dom-test-utils'
import { Cards } from '../../../../src/frontend/components/Cards/index.tsx'
import { type CardProps } from '../../../../src/frontend/components/Card/index.tsx'
import { type CardResponse } from '../../../../src/shared/handlers/Cards.ts'
import {
  CardSymbol,
  DIContext,
} from '../../../../src/frontend/diSymbols.ts'
await import('../../setup.ts')

const anyCardId = 1
const anyLaneId = 3
const anyTitle = 'foo'
const anyDescription = 'bar'

const document = new DOMParser().parseFromString('<!DOCTYPE html><html><body></body></html>', 'text/html')!
let container: DenoDOM.Element | null = null
let root: ReactDOMClient.Root | null = null

const FakeCard = (_props: CardProps) => <div></div>

describe('Cards', () => {
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

  it('should not have content if no card data', () => {
    act(() =>
      root!.render(
        <DIContext.Provider value={{[CardSymbol]: FakeCard }}>
          <Cards cardData={[]} laneId={anyLaneId} />
        </DIContext.Provider>
    ))

    const $ = Cheerio.load(container!.innerHTML)
    expect($('div.flex').length, 'cards not in flex container').to.equal(1)
    expect($('div').is(':empty'), 'there should not be content').to.be.true
  })

  it('should display all cards', () => {
    const anyCardData: CardResponse[] = [
      { id: anyCardId, title: anyTitle, description: anyDescription },
    ]

    act(() =>
      root!.render(
        <DIContext.Provider value={{[CardSymbol]: FakeCard }}>
          <Cards cardData={anyCardData} laneId={anyLaneId} />
        </DIContext.Provider>
    ))

    const $ = Cheerio.load(container!.innerHTML)
    expect($('div.flex').length, 'cards not in flex container').to.equal(1)
    expect($('div.flex > div').length, 'should match test data').to.equal(anyCardData.length)
  })
})
