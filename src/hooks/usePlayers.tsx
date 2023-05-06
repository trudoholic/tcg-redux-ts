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

  const handleScore = useCallback(() => {
    const rnd = Math.floor(Math.random() * players.length)
    const player = players.at(rnd)
    console.log("players:", players)
    console.log("player:", rnd, player)
    if (player) {
      dispatch(playerUpdate({ id: player.id, changes: {score: player.score + 1} }))
    }
  }, [])

  return {
    players,
    handleScore,
  }
}

export default usePlayers