import {
  React,
  ReactDnD,
} from '../../../deps.ts'
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

  return (
    <article
      className='center mw5 mw6-ns hidden ba mv4'
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}>
    <h1 className='f4 bg-near-black white mv0 pv2 ph3'>{title}</h1>
      <div className='pa3 bt'>
        <p className='f6 f5-ns lh-copy measure mv0'>{description}</p>
      </div>
    </article>)
  // return <div
  //   className='card-item'
  //   ref={drag}
  //   style={{
  //     opacity: isDragging ? 0.5 : 1,
  //   }}>
  //   <p><u>{title}</u><br/>{description}</p>
  //   </div>
}
