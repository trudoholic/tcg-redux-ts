import React, {useCallback, useState} from "react";
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
  const [selectedId, setSelectedId] = useState(0)

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setSelectedId(+(e.target as HTMLElement).id)
  }, [])

  const dispatch = useDispatch()

  const cards = useSelector(selectAllCards)
  // console.log(cards)

  const cardItems = cards.map(card =>
    <li
      key={card.id}
      className={card.flag ? "flag" : ""}
      id={"" + card.id}
      onClick={handleClick}
    >
      {card.id === selectedId ? `[ ${card.name} ]` : card.name}
    </li>
  );

  const handleAddOne = useCallback(() => {
    dispatch(cardsAddOne({
      id: count,
      name: `card_${count<10?"0":""}${count}`,
      flag: false,
    }))
    setSelectedId(count)
    setCount(count => count + 1)
  }, [count])

  const handleUpdate = useCallback(() => {
    const card = cards.find(it => it.id === selectedId)
    if (card) {
      dispatch(cardUpdate({ id: card.id, changes: {flag: !card.flag} }))
    }
  }, [cards, selectedId])

  const handleRemove = useCallback(() => {
    const idx = cards.findIndex(it => it.id === selectedId)
    dispatch(cardRemove(selectedId))
    const card = cards.at(idx - 1)
    if (card) {
      setSelectedId(+card.id)
    }
  }, [cards, selectedId])

  return {
    cardItems,
    handleAddOne,
    handleUpdate,
    handleRemove,
  }
}

export default useCards