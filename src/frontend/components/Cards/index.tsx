import {
  React,
} from '../../../deps-frontend.ts'
import { CardResponse } from '../../../models/Card.ts'
import { Card } from '../Card/index.tsx'

interface Props {
  cardData: CardResponse[]
}

export const Cards = ({ cardData }: Props) => {

  return <div className='lane-cards-parent'>
    {cardData.map((card: CardResponse) => <Card key={card.id} title={card.title} description={card.description} />)}
    </div>
}
