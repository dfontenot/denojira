import {
  React,
  ReactDnD,
  ReactRedux,
} from '../../deps.ts'
import { StoreDispatch } from '../../redux/store.ts'
import { cardSym } from '../../dnd/syms.ts'
import { IconClose } from '../Icons/index.tsx'
import { deleteCardAction } from '../../redux/cardsSlice.ts'

const { useDrag } = ReactDnD
const { useDispatch } = ReactRedux

interface Props {
  id: number | string
  laneId: number | string
  title: string
  description: string
}

export const Card = ({ title, description, id, laneId }: Props) => {

  const dispatch = useDispatch<StoreDispatch>()

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

  return (
    <article
      className='grow-0 border-1 border-solid border-slate-600 rounded-lg p-2 relative'
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}>
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
