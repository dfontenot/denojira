import {
  React,
  ReactDnD,
} from '../../deps.ts'
import { cardSym } from '../../dnd/syms.ts'
import { IconClose } from '../Icons/index.tsx'

const { useDrag } = ReactDnD

interface Props {
  id: number | string
  laneId: number | string
  title: string
  description: string
}

export const Card = ({ title, description, id, laneId }: Props) => {

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

  return (
    <article
      className='grow-0 border-1 border-solid border-slate-600 rounded-lg p-2 relative'
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}>
      <IconClose className='absolute top-0.5 right-0.5' />
      <div className='font-medium'>
        <p>{title}</p>
      </div>
      <div className='font-light'>
        <p>{description}</p>
      </div>
    </article>)
}
