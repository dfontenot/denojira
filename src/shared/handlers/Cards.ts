export interface CreateCardRequest {
  title: string,
  description: string,
  laneId: number | string,
}

export interface MoveCardRequest {
  cardId: number | string,
  destinationLaneId: number | string,
}
