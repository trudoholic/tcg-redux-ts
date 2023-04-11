import {useCallback, useState} from 'react';
import * as gameSession from '../scripts/script01/gameSession';
import * as gameTurn from '../scripts/script01/gameTurn';
import * as playTurn from '../scripts/script01/playTurn';
import {BLUE} from "../utils/solarized";

const useFlow = () => {
  const [gameGoal, setGameGoal] = useState(false)
  const [gameOver, setGameOver] = useState(true)
  const [, setCurGame] = useState(0) //curGame
  const [curPlay, setCurPlay] = useState(0)

  // const handleFlow = useCallback(() => {
  //   setFlow(p => (p + 1) % nPlayers)
  // }, [])
  // const handleFlow = useCallback(() => {
  //   setFlow(p => (nPlayers + p - 1) % nPlayers)
  // }, [])

  // ====== Game ======

  const handleStartGame = useCallback(() => {
    gameSession.onStart()
    setGameOver(false)
    handleStartGameTurn()
  }, [])

  const handleEndGame = useCallback(() => {
    handleEndGameTurn()
    setGameOver(true)
    setGameGoal(false)
    gameSession.onEnd()
  }, [])

  // ====== Game Turn ======

  const handleStartGameTurn = useCallback(() => {
    gameTurn.onStart()
    handleNextGameTurn()
  }, [])

  const handleNextGameTurn = useCallback(() => {
    gameTurn.onNext()
    if (gameTurn.isDone()) {
      gameTurn.onRound()
      handleStartGameTurn()
    }
    setCurGame(gameTurn.getValue())
    handleStartPlayTurn()
  }, [])

  const handleEndGameTurn = useCallback(() => {
    gameTurn.onEnd()
  }, [])

  // ====== Play Turn ======

  const handleStartPlayTurn = useCallback(() => {
    playTurn.onStart()
    setCurPlay(playTurn.getValue())
  }, [])

  // const handleEndPlayTurn = useCallback(() => {
  // }, [])

  // ====== Next ======

  const handleNext = useCallback(() => {
    console.log(`%c >> ${curPlay}`, 'color:' + BLUE)

    if (gameGoal) {
      handleEndGame()
      return
    }

    playTurn.onNext()
    if (playTurn.isDone()) {
      handleEndGameTurn()
      handleNextGameTurn()
    }
    else {
      setCurPlay(playTurn.getValue())
    }
  }, [curPlay, gameGoal])

  const handleGameGoal = useCallback(() => {
    setGameGoal(true)
  }, [])

  // ====== # ======

  return {
    gameOver,
    handleStartGame,
    handleEndGame,
    handleNext,
    handleGameGoal,
    curPlay,
    gameGoal,
  }
}

export default useFlow