export interface CreateCardRequest {
  title: string,
  description: string,
  laneId: number | string,
}

export interface MoveCardRequest {
  cardId: number | string,
  destinationLaneId: number | string,
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
