import {ICard} from '../features/cardsSlice';

let count = 0

export const getCard = (): ICard => {
  const cardId = "card_" + count.toString().padStart(3, "0")
  count++
  return {
    id: cardId,
    name: cardId,
    flag: false,
  }
}

export const getCards = (num: number): ICard[] => {
  return Array(num).fill(0).map(
    it => getCard()
  )
}