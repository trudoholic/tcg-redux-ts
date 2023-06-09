import React, {useCallback, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getCard, getCards} from '../utils';
import {
  selectAllCards,
  cardsAddOne,
  cardsAddMany,
  cardUpdate,
  cardRemove,
} from '../features/cardsSlice';

const useCards = () => {
  const [selectedId, setSelectedId] = useState("")

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setSelectedId((e.target as HTMLElement).id)
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
    const card = getCard()
    dispatch(cardsAddOne(card))
    setSelectedId(card.id)
  }, [])

  const handleAddMany = useCallback(() => {
    const cards = getCards(3)
    if (cards.length) {
      dispatch(cardsAddMany(cards))
      setSelectedId(cards.at(-1)!.id)
    }
  }, [])

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
      setSelectedId(card.id)
    }
  }, [cards, selectedId])

  return {
    cardItems,
    handleAddOne,
    handleAddMany,
    handleUpdate,
    handleRemove,
  }
}

export default useCards