import {
  React,
  ReactDnD,
} from '../../../deps-frontend.ts'
import { cardSym } from '../../dnd/syms.ts'

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

  return <div
    className='card-item'
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
    }}>
    <p><u>{title}</u><br/>{description}</p>
    </div>
}
