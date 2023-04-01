import {useCallback, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
  selectAllCards,
  cardsAddOne,
  // cardsAddMany,
  cardUpdate,
  cardRemove,
} from '../features/cardsSlice';

const useCards = () => {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()

  const cards = useSelector(selectAllCards)
  // console.log(cards)

  const cardItems = cards.map(card =>
    <li key={card.id}>
      {card.name}
    </li>
  );

  const handleAddOne = useCallback(() => {
    dispatch(cardsAddOne({
      id: count,
      name: "card_" + count,
      flag: false,
    }))
    setCount(count => count + 1)
  }, [count])

  const handleUpdate = useCallback(() => {
    const card = cards.at(0)
    if (card) {
      const data = {
        name: `[${card.name}]`,
        flag: true,
      }
      dispatch(cardUpdate({ id: card.id, changes: data }))
    }
  }, [cards])

  const handleRemove = useCallback(() => {
    const card = cards.at(0)
    if (card) {
      dispatch(cardRemove(card.id))
    }
  }, [cards])

  return {
    cardItems,
    handleAddOne,
    handleUpdate,
    handleRemove,
  }
}

export default useCards