import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {playersList} from "../scripts/script01/players";
import {
  selectAllPlayers,
  playersAdd,
  // playerUpdate,
  // playersUpdate,
  playersRemove,
} from "../features/playersSlice";

const usePlayers = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(playersAdd(playersList))
    return () => {
      dispatch(playersRemove())
    }
  }, [])

  const players = useSelector(selectAllPlayers)
  // console.log("players:", players)

  return {
    players,
    // handleUpdate,
  }
}

export default usePlayers