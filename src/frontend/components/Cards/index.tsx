import React from 'react'
import { useContext } from 'react'
import { CardResponse } from '../../../shared/handlers/Cards.ts'
import { type CardProps } from '../Card/index.tsx'
import {
  CardSymbol,
  DIContext,
} from '../../diSymbols.ts'

export interface CardsProps {
  cardData: CardResponse[]
  laneId: number | string
}

export const Cards = ({ cardData, laneId }: CardsProps) => {

  const Card = useContext(DIContext)![CardSymbol] as React.FC<CardProps>

  return <div className='flex flex-col space-y-4'>
    {Card == null ? <></> : cardData.map((card: CardResponse) => <Card key={card.id} id={card.id} laneId={laneId} title={card.title} description={card.description} />)}
    </div>
}
