import {useCallback, useState} from 'react';
import * as gameSession from '../scripts/script01/gameSession';
import * as gameTurn from '../scripts/script01/gameTurn';
import * as playTurn from '../scripts/script01/playTurn';
import {BLUE} from "../utils/solarized";

const useFlow = () => {
  const [gameGoal, setGameGoal] = useState(false)
  const [gameRound, setGameRound] = useState(0)
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
    // console.log("handleStartGameTurn")
    setGameRound(cur => cur + 1)
    gameTurn.onStart()
    handleNextGameTurn()
  }, [])

  const handleNextGameTurn = useCallback(() => {
    gameTurn.onNext()
    // console.log("handleNextGameTurn", gameTurn.isDone())
    if (gameTurn.isDone()) {
      gameTurn.onRound(gameRound)
      handleStartGameTurn()
    }
    else {
      setCurGame(gameTurn.getValue())
      handleStartPlayTurn()
    }
  }, [gameRound])

  const handleEndGameTurn = useCallback(() => {
    gameTurn.onEnd()
  }, [])

  // ====== Play Turn ======

  const handleStartPlayTurn = useCallback(() => {
    playTurn.onStart()
    setCurPlay(playTurn.getValue())
  }, [])

  const handleNextPlayTurn = useCallback(() => {
    console.log(`%c >> ${curPlay}`, 'color:' + BLUE)
    playTurn.onNext()
    if (playTurn.isDone()) {
      handleEndGameTurn()
      handleNextGameTurn()
    }
    else {
      setCurPlay(playTurn.getValue())
    }
  }, [curPlay])

  // const handleEndPlayTurn = useCallback(() => {
  // }, [])

  // ====== Next ======

  const handleNext = useCallback(() => {
    // console.log(`%c >> ${curPlay}`, 'color:' + BLUE)
    if (gameGoal) {
      handleEndGame()
    }
    else {
      handleNextPlayTurn()
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