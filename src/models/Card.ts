export interface CardResponse {
  id: string,
  title: string,
  description: string,
}

export interface CardsLaneGrouping {
  laneName: string,
  cards: CardResponse[],
}

export interface GetCardsResponse {
  byLaneId: { [key: string]: CardsLaneGrouping }
}
