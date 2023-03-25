import {
  React,
} from '../../deps.ts'
import { CardResponse } from '../../../backend/models/Card.ts'
import { Card } from '../Card/index.tsx'

interface Props {
  cardData: CardResponse[]
  laneId: number | string
}

export const Cards = ({ cardData, laneId }: Props) => {

  return <div className='flex flex-column'>
    {cardData.map((card: CardResponse) => <Card key={card.id} id={card.id} laneId={laneId} title={card.title} description={card.description} />)}
    </div>
}
