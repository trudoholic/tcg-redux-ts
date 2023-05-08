import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  selectAllPlayers,
  playersUpdate,
} from "../features/playersSlice";
import {TAction} from "../scripts";

const usePlayers = () => {
  const dispatch = useDispatch()

  const players = useSelector(selectAllPlayers)

  const handleScore = useCallback((action: TAction) => {
    dispatch(playersUpdate(action))
  }, [])

  return {
    players,
    handleScore,
  }
}

export default usePlayers