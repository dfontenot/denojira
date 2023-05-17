import {
  React,
} from '../../deps.ts'
import { CardResponse } from '../../../shared/models/Card.ts'
import { Card } from '../Card/index.tsx'

interface Props {
  cardData: CardResponse[]
  laneId: number | string
}

export const Cards = ({ cardData, laneId }: Props) => {

  return <div className='flex flex-col space-y-4'>
    {cardData.map((card: CardResponse) => <Card key={card.id} id={card.id} laneId={laneId} title={card.title} description={card.description} />)}
    </div>
}
