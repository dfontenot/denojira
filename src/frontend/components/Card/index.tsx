import React from 'react'
import {
  useContext,
  useEffect,
} from 'react'
import { useDrag } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { StoreDispatch } from '../../redux/store.ts'
import { cardSym } from '../../dnd/syms.ts'
import { deleteCardAction } from '../../redux/cardsSlice.ts'
import {
  DIContext,
  IconCloseSymbol,
} from '../../diSymbols.ts'

export interface CardProps {
  id: number | string
  laneId: number | string
  title: string
  description: string
}

export const Card = ({ title, description, id, laneId }: CardProps) => {

  const dispatch = useDispatch<StoreDispatch>()
  const IconClose = useContext(DIContext)![IconCloseSymbol] as React.FC<React.SVGProps<SVGSVGElement>>
  let self: any

  const [{ isDragging }, drag] = useDrag(() => ({
    type: cardSym,
    item: {
      id,
      laneId,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  }))

  const doDelete = (_e: React.MouseEvent<HTMLElement>) => {
    dispatch(deleteCardAction(id))
  }

  // NOTE: an unfortunate hack to get around style= prop issues in deno dom
  useEffect(() => self!.setAttribute('style', 'opacity: 1'), [])
  useEffect(() => self!.setAttribute('style', `opacity: ${isDragging ? '0.5' : '1'}`), [isDragging])

  return (
    <article
      className='grow-0 border-1 border-solid border-slate-600 rounded-lg p-2 relative'
      ref={(elem) => { drag(elem); self = elem }}>
      <div
        className='hover:cursor-pointer'
        onClick={(e) => doDelete(e)}
        tabIndex={0}
        title='delete'
        role='button'
        aria-label={`delete card ${title}`}
      >
        <IconClose className='absolute top-0.5 right-0.5' />
      </div>
      <div className='font-medium'>
        <p>{title}</p>
      </div>
      <div className='font-light'>
        <p>{description}</p>
      </div>
    </article>)
}
