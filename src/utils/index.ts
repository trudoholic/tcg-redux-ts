import {Card} from '../features/cardsSlice';

let count = 0

export const getCard = (): Card => {
  const cardId = "card_" + count.toString().padStart(3, "0")
  count++
  return {
    id: cardId,
    name: cardId,
    flag: false,
  }
}
