import {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from "../store";
import {
  setFlowReverse,
  setGameGoal,
  setCurGame,
  setCurPlay,
  setCurPhase,
  setCurBeat,
} from '../features/flowSlice';
import {
  nPlayers, random, gameSession, gameTurn, playTurn, playPhase, beatTurn
} from "../scripts";
import usePlayers from "./usePlayers";
import {RED} from "../utils/solarized";

const useFlow = () => {
  const dispatch = useDispatch()
  const {
    flowReverse,
    gameGoal,
    curGame,
    curPlay,
    curPhase,
    curBeat,
  } = useSelector((state: RootState) => state.flow)

  const {
    handleScore,
  } = usePlayers()

  const [gameRound, setGameRound] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  // ====== Game Session ======

  const handleStartGame = useCallback(() => {
    gameSession.onStart()
    setGameOver(false)
    handleStartGameTurn()
  }, [])

  const handleEndGame = useCallback(() => {
    handleEndPlayPhase()
    handleEndPlayTurn()
    handleEndGameTurn()
    setGameOver(true)
    dispatch(setGameGoal(false))
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
      playTurn.setStartValue(gameTurn.getValue())
      handleStartPlayTurn()
    }
    dispatch(setCurGame(gameTurn.getValue()))
  }, [gameRound])

  const handleEndGameTurn = useCallback(() => {
    handleScore({type: "onGameTurn"})
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
      handleStartPlayPhase()
    }
    dispatch(setCurPlay(playTurn.getValue()))
  }, [])

  const handleEndPlayTurn = useCallback(() => {
    const playerId = `${random()}`
    // console.log(" onPlayTurn:", playerId)
    handleScore({type: "onPlayTurn", id: playerId})
    playTurn.onEnd()
  }, [])

  // ====== Play Phase ======

  const handleStartPlayPhase = useCallback(() => {
    playPhase.onStart()
    handleNextPlayPhase()
  }, [])

  const handleNextPlayPhase = useCallback(() => {
    playPhase.onNext()
    if (playPhase.isDone()) {
      handleEndPlayTurn()
      handleNextPlayTurn()
    }
    else {
      beatTurn.setStartValue(playTurn.getValue())
      handleStartBeatTurn()
    }
    dispatch(setCurPhase(playPhase.getValue()))
  }, [])

  const handleEndPlayPhase = useCallback(() => {
    playPhase.onEnd()
  }, [])

  // ====== Beat ======

  const handleStartBeatTurn = useCallback(() => {
    beatTurn.onStart()
  }, [])

  const handleNextBeatTurn = useCallback(() => {
    console.log(`%c >> ${beatTurn.getValue()}`, 'color:' + RED)
    beatTurn.onNext()
    if (beatTurn.isDone()) {
      handleEndPlayPhase()
      handleNextPlayPhase()
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
    dispatch(setGameGoal(true))
  }, [])

  const handleReverse = useCallback(() => {
    handleEndPlayTurn()
    const startValue = (playTurn.getValue() + nPlayers - 1) % nPlayers
    playTurn.setStartValue(startValue)
    playTurn.setReverse(!flowReverse)

    beatTurn.setStartValue(startValue)
    beatTurn.setReverse(!flowReverse)
    dispatch(setCurBeat(beatTurn.getValue()))

    dispatch(setFlowReverse(!flowReverse))
    handleStartPlayTurn()
  }, [flowReverse])

  // ====== # ======

  return {
    curGame,
    curPlay,
    curPhase,
    curBeat,
    flowReverse,
    gameGoal,
    gameOver,
    handleStartGame,
    handleEndGame,
    handleNext,
    handleGameGoal,
    handleReverse,
  }
}

export default useFlow