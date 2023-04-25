import {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from "../store";
import {
  setCurGame,
  setCurPlay,
  setCurBeat,
} from '../features/flowSlice';

import * as gameSession from '../scripts/script01/gameSession';
import * as gameTurn from '../scripts/script01/gameTurn';
import * as playTurn from '../scripts/script01/playTurn';
import * as beatTurn from '../scripts/script01/beatTurn';
import {RED} from "../utils/solarized";


const useFlow = () => {
  const dispatch = useDispatch()
  const {
    curGame,
    curPlay,
    curBeat,
  } = useSelector((state: RootState) => state.flow)

  const [gameGoal, setGameGoal] = useState(false)
  const [gameRound, setGameRound] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  // ====== Game Session ======

  const handleStartGame = useCallback(() => {
    gameSession.onStart()
    setGameOver(false)
    handleStartGameTurn()
  }, [])

  const handleEndGame = useCallback(() => {
    handleEndPlayTurn()
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
      handleStartPlayTurn()
    }
    dispatch(setCurGame(gameTurn.getValue()))
  }, [gameRound])

  const handleEndGameTurn = useCallback(() => {
    gameTurn.onEnd()
  }, [])

  // ====== Play Turn ======

  const handleStartPlayTurn = useCallback(() => {
    playTurn.onStart()
    handleNextPlayTurn()
  }, [])

  const handleNextPlayTurn = useCallback(() => {
    playTurn.onNext()
    if (playTurn.isDone()) {
      handleEndGameTurn()
      handleNextGameTurn()
    }
    else {
      handleStartBeatTurn()
    }
    dispatch(setCurPlay(playTurn.getValue()))
  }, [])

  const handleEndPlayTurn = useCallback(() => {
    playTurn.onEnd()
  }, [])

  // ====== Beat ======

  const handleStartBeatTurn = useCallback(() => {
    beatTurn.onStart()
  }, [])

  const handleNextBeatTurn = useCallback(() => {
    console.log(`%c >> ${beatTurn.getValue()}`, 'color:' + RED)
    beatTurn.onNext()
    if (beatTurn.isDone()) {
      handleEndPlayTurn()
      handleNextPlayTurn()
    }
    dispatch(setCurBeat(beatTurn.getValue()))
  }, [])

  // ====== Next ======

  const handleNext = useCallback(() => {
    if (gameGoal) {
      handleEndGame()
    }
    else {
      handleNextBeatTurn()
    }
  }, [gameGoal])

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
    curGame,
    curPlay,
    curBeat,
    gameGoal,
  }
}

export default useFlow