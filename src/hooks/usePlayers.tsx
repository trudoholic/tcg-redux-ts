import React, {useCallback, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  selectAllPlayers,
  playerUpdate,
  // playersUpdate,
} from "../features/playersSlice";

const usePlayers = () => {
  const dispatch = useDispatch()

  const players = useSelector(selectAllPlayers)
  // console.log("players:", players)
  function rndPlayer() {
    const rnd = Math.floor(Math.random() * players.length)
    console.log("players:", players)
    console.log("rnd:", rnd)
    return players.at(rnd)
  }

  const handleScore = useCallback(() => {
    const player = rndPlayer()
    console.log("player:", player)
    if (player) {
      dispatch(playerUpdate({ id: player.id, changes: {score: player.score + 1} }))
    }
  }, [rndPlayer])

  return {
    players,
    handleScore,
  }
}

export default usePlayers