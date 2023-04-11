import {useCallback, useState} from 'react';
import * as gameTurn from '../scripts/script01/gameTurn';
import * as playTurn from '../scripts/script01/playTurn';

const useFlow = () => {
  const [gameOver, setGameOver] = useState(true)
  // const [, setGameTurn] = useState(0) //gameTurn
  const [curPlay, setCurPlay] = useState(0)

  // const handleFlow = useCallback(() => {
  //   setFlow(p => (p + 1) % nPlayers)
  // }, [])
  // const handleFlow = useCallback(() => {
  //   setFlow(p => (nPlayers + p - 1) % nPlayers)
  // }, [])

  // ====== Game ======

  const handleStartGame = useCallback(() => {
    console.log("### Start Game ###")
    console.log("### Рисуем пулю ###")
    setGameOver(false)
    handleNextGameTurn()
  }, [])

  const handleEndGame = useCallback(() => {
    setGameOver(true)
    handleEndGameTurn()
    console.log("### Считаем пулю ###")
    console.log("### Game Over! ###")
  }, [])

  // ====== Game Turn ======

  const handleNextGameTurn = useCallback(() => {
    gameTurn.onStart()
    handleNextPlayTurn()
  }, [])

  const handleEndGameTurn = useCallback(() => {
    gameTurn.onEnd()
  }, [])

  // ====== Play Turn ======

  const handleNextPlayTurn = useCallback(() => {
    playTurn.onStart()
    setCurPlay(playTurn.getValue())
  }, [])

  // const handleEndPlayTurn = useCallback(() => {
  // }, [])

  // ====== Next ======

  const handleNext = useCallback(() => {
    playTurn.onNext()
    if (playTurn.isDone()) {
      handleEndGameTurn()
      handleNextGameTurn()
    }
    else {
      setCurPlay(playTurn.getValue())
    }
  }, [])

  // ====== # ======

  return {
    gameOver,
    handleStartGame,
    handleNext,
    handleEndGame,
    curPlay,
  }
}

export default useFlow