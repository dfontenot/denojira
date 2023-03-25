export interface Card {
  id: number,
  title: string,
  description: string,
  laneId: number,
  createdAt: Date,
  updatedAt: Date,
}

export interface CardResponse {
  id: number,
  title: string,
  description: string,
}

export interface CardsLaneGrouping {
  laneName: string,
  cards: CardResponse[],
}

export interface GetCardsResponse {
  [key: string]: CardsLaneGrouping
}
