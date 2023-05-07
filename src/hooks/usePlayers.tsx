import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  selectAllPlayers,
  playersUpdate,
} from "../features/playersSlice";
// import {callbackFn} from "../scripts";

const usePlayers = () => {
  const dispatch = useDispatch()

  const players = useSelector(selectAllPlayers)

  const handleScore = useCallback(() => {
    dispatch(playersUpdate())
  }, [])

  return {
    players,
    handleScore,
  }
}

export default usePlayers